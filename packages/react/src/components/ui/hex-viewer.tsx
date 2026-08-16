'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';

const hexViewerVariants = cva(
  'relative flex flex-col font-mono select-none rounded-xl border bg-[#050811] text-slate-200 overflow-hidden shadow-2xl transition-all duration-200',
  {
    variants: {
      signal: {
        cyan: '[--hv-signal:#00d9e8] [--hv-glow:rgba(0,217,232,0.3)] border-cyan-500/30',
        violet: '[--hv-signal:#a78bfa] [--hv-glow:rgba(167,139,250,0.3)] border-violet-500/30',
        green: '[--hv-signal:#34d399] [--hv-glow:rgba(52,211,153,0.3)] border-emerald-500/30',
        amber: '[--hv-signal:#f5a524] [--hv-glow:rgba(245,165,36,0.3)] border-amber-500/30',
        rose: '[--hv-signal:#fb5a7e] [--hv-glow:rgba(251,90,126,0.3)] border-rose-500/30',
      },
      size: {
        sm: 'text-[10px]',
        md: 'text-xs',
        lg: 'text-sm',
      },
    },
    defaultVariants: {
      signal: 'cyan',
      size: 'md',
    },
  },
);

export interface HexViewerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof hexViewerVariants> {
  /** Raw binary data as Uint8Array, array of byte numbers, or UTF-8 string */
  data: Uint8Array | number[] | string;
  /** Number of bytes rendered per line (8, 16, or 32) */
  bytesPerRow?: 8 | 16 | 32;
  /** Base starting offset address (e.g. 0x00400000) */
  baseOffset?: number;
  /** Search query to highlight (supports text or hex string like '48 65') */
  searchQuery?: string;
  /** Show ASCII column on the right */
  showAscii?: boolean;
  /** Show offset memory address column on the left */
  showOffset?: boolean;
  /** Show interactive bottom HUD telemetry bar */
  showInspector?: boolean;
  /** Show top action toolbar (search, copy, jump) */
  showToolbar?: boolean;
  /** Title displayed in the top header */
  title?: string;
  /** Maximum height for scrollable memory view (e.g. '360px') */
  maxHeight?: string | number;
  /** Controlled selected byte index offset */
  selectedOffset?: number | null;
  /** Callback fired when a byte is clicked / selected */
  onByteSelect?: (offset: number, byte: number) => void;
  /** Callback fired when a byte is hovered */
  onByteHover?: (offset: number | null, byte: number | null) => void;
}

export const HexViewer = React.forwardRef<HTMLDivElement, HexViewerProps>(
  (
    {
      className,
      data,
      bytesPerRow = 16,
      baseOffset = 0,
      searchQuery = '',
      showAscii = true,
      showOffset = true,
      showInspector = true,
      showToolbar = true,
      title = 'MEMORY // HEX DUMP',
      signal = 'cyan',
      size = 'md',
      maxHeight = '380px',
      selectedOffset: controlledSelected,
      onByteSelect,
      onByteHover,
      ...props
    },
    ref,
  ) => {
    const [internalHovered, setInternalHovered] = React.useState<number | null>(null);
    const [internalSelected, setInternalSelected] = React.useState<number | null>(null);
    const [searchFilter, setSearchFilter] = React.useState(searchQuery);
    const [jumpInput, setJumpInput] = React.useState('');
    const [copiedStatus, setCopiedStatus] = React.useState<'hex' | 'ascii' | null>(null);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const activeSelected = controlledSelected !== undefined ? controlledSelected : internalSelected;

    // Normalize raw data into Uint8Array
    const byteArray = React.useMemo<Uint8Array>(() => {
      if (typeof data === 'string') {
        return new TextEncoder().encode(data);
      }
      if (data instanceof Uint8Array) {
        return data;
      }
      return new Uint8Array(data);
    }, [data]);

    const totalBytes = byteArray.length;
    const totalRows = Math.ceil(totalBytes / bytesPerRow);

    // Format address to 8-digit uppercase Hex (e.g. 00000010)
    const formatAddress = (addr: number) => {
      return addr.toString(16).padStart(8, '0').toUpperCase();
    };

    // Format byte to 2-digit uppercase Hex (e.g. 4F)
    const formatHex = (byte: number) => {
      return byte.toString(16).padStart(2, '0').toUpperCase();
    };

    // Printable ASCII character filter
    const getAsciiChar = (byte: number) => {
      // Printable range: 32 (space) to 126 (~)
      if (byte >= 32 && byte <= 126) {
        return String.fromCharCode(byte);
      }
      return '·';
    };

    const handleHover = (index: number | null) => {
      setInternalHovered(index);
      const byte = index !== null && index < totalBytes ? byteArray[index] : null;
      onByteHover?.(index, byte);
    };

    const handleSelect = (index: number) => {
      if (index >= totalBytes) return;
      if (controlledSelected === undefined) {
        setInternalSelected(index);
      }
      onByteSelect?.(index, byteArray[index]);
    };

    const handleCopy = (type: 'hex' | 'ascii') => {
      if (type === 'hex') {
        const hexString = Array.from(byteArray)
          .map((b) => formatHex(b))
          .join(' ');
        navigator.clipboard.writeText(hexString);
      } else {
        const asciiString = Array.from(byteArray)
          .map((b) => getAsciiChar(b))
          .join('');
        navigator.clipboard.writeText(asciiString);
      }
      setCopiedStatus(type);
      setTimeout(() => setCopiedStatus(null), 1800);
    };

    const handleJumpTo = (e: React.FormEvent) => {
      e.preventDefault();
      const parsed = parseInt(jumpInput, 16);
      if (!isNaN(parsed) && parsed >= baseOffset && parsed < baseOffset + totalBytes) {
        const targetIndex = parsed - baseOffset;
        handleSelect(targetIndex);
        const rowIndex = Math.floor(targetIndex / bytesPerRow);
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = rowIndex * 22;
        }
      }
    };

    // Active byte for the bottom inspector bar
    const inspectorIndex = internalHovered !== null ? internalHovered : activeSelected;
    const inspectorByte =
      inspectorIndex !== null && inspectorIndex < totalBytes ? byteArray[inspectorIndex] : null;

    return (
      <div
        ref={ref}
        role="region"
        aria-label={title}
        className={cn(hexViewerVariants({ signal, size }), className)}
        {...props}
      >
        {/* Top HUD Header & Action Toolbar */}
        {showToolbar && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] bg-[#04060d] px-3.5 py-2 z-10">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--hv-signal)] animate-pulse" />
              <span className="text-[11px] font-bold tracking-widest text-[var(--hv-signal)] uppercase">
                {title}
              </span>
              <span className="text-[9px] text-slate-500 font-mono">
                [{totalBytes} BYTES / {totalRows} LINES]
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Jump to offset */}
              <form onSubmit={handleJumpTo} className="flex items-center">
                <input
                  type="text"
                  placeholder="GOTO 0x..."
                  value={jumpInput}
                  onChange={(e) => setJumpInput(e.target.value)}
                  className="w-20 rounded bg-white/[0.04] border border-white/[0.1] px-1.5 py-0.5 text-[9px] text-slate-200 placeholder:text-slate-600 outline-none focus:border-[var(--hv-signal)]"
                />
              </form>

              {/* Filter / Search query */}
              <input
                type="text"
                placeholder="FIND..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-16 sm:w-20 rounded bg-white/[0.04] border border-white/[0.1] px-1.5 py-0.5 text-[9px] text-slate-200 placeholder:text-slate-600 outline-none focus:border-[var(--hv-signal)]"
              />

              {/* Copy Hex */}
              <button
                type="button"
                onClick={() => handleCopy('hex')}
                className="rounded border border-white/[0.1] bg-white/[0.03] px-2 py-0.5 text-[9px] text-slate-400 hover:text-white hover:border-[var(--hv-signal)] transition-colors"
              >
                {copiedStatus === 'hex' ? 'COPIED!' : 'COPY HEX'}
              </button>

              {/* Copy ASCII */}
              <button
                type="button"
                onClick={() => handleCopy('ascii')}
                className="rounded border border-white/[0.1] bg-white/[0.03] px-2 py-0.5 text-[9px] text-slate-400 hover:text-white hover:border-[var(--hv-signal)] transition-colors"
              >
                {copiedStatus === 'ascii' ? 'COPIED!' : 'COPY ASCII'}
              </button>
            </div>
          </div>
        )}

        {/* Hex Matrix Column Headers */}
        <div className="grid grid-cols-[auto_1fr_auto] gap-4 border-b border-white/[0.06] bg-[#020409] px-3.5 py-1 text-[9px] text-slate-500 font-bold tracking-wider select-none">
          {showOffset && <div className="w-20">OFFSET</div>}
          <div className="flex gap-1.5">
            {Array.from({ length: bytesPerRow }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'w-5 text-center',
                  i === 7 && bytesPerRow === 16 && 'mr-2',
                  i === 15 && bytesPerRow === 32 && 'mr-2',
                )}
              >
                {i.toString(16).toUpperCase()}
              </span>
            ))}
          </div>
          {showAscii && <div className="w-24 text-left">DECODED ASCII</div>}
        </div>

        {/* Scrollable Binary Memory Grid */}
        <div
          ref={scrollContainerRef}
          style={{ maxHeight }}
          className="overflow-y-auto overflow-x-auto p-3.5 space-y-1 focus:outline-none"
          tabIndex={0}
        >
          {Array.from({ length: totalRows }).map((_, rowIndex) => {
            const rowOffset = baseOffset + rowIndex * bytesPerRow;
            const startByteIndex = rowIndex * bytesPerRow;
            const rowBytes = Array.from(byteArray.slice(startByteIndex, startByteIndex + bytesPerRow));

            return (
              <div
                key={rowIndex}
                className="flex items-center gap-4 hover:bg-white/[0.02] rounded px-1 -mx-1 transition-colors"
              >
                {/* 1. Address Offset Column */}
                {showOffset && (
                  <span className="w-20 text-slate-500 font-mono text-[10px] tracking-tight shrink-0">
                    {formatAddress(rowOffset)}
                  </span>
                )}

                {/* 2. Hex Byte Matrix */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {rowBytes.map((byte, colIndex) => {
                    const byteIndex = startByteIndex + colIndex;
                    const isHovered = internalHovered === byteIndex;
                    const isSelected = activeSelected === byteIndex;
                    const hexStr = formatHex(byte);
                    const isMatched =
                      searchFilter.trim() !== '' &&
                      (hexStr.toLowerCase().includes(searchFilter.toLowerCase()) ||
                        getAsciiChar(byte).toLowerCase().includes(searchFilter.toLowerCase()));

                    return (
                      <span
                        key={colIndex}
                        role="gridcell"
                        tabIndex={0}
                        onClick={() => handleSelect(byteIndex)}
                        onMouseEnter={() => handleHover(byteIndex)}
                        onMouseLeave={() => handleHover(null)}
                        className={cn(
                          'w-5 text-center cursor-pointer rounded px-0.5 py-0.2 transition-all duration-75',
                          byte === 0 ? 'text-slate-600' : 'text-slate-300',
                          isHovered &&
                            'bg-[var(--hv-signal)] text-black font-bold shadow-[0_0_8px_var(--hv-signal)] scale-110 z-10',
                          isSelected &&
                            !isHovered &&
                            'ring-1 ring-[var(--hv-signal)] text-[var(--hv-signal)] font-bold bg-[var(--hv-glow)]',
                          isMatched && !isHovered && 'bg-amber-400/20 text-amber-300 font-bold',
                          colIndex === 7 && bytesPerRow === 16 && 'mr-2',
                          colIndex === 15 && bytesPerRow === 32 && 'mr-2',
                        )}
                      >
                        {hexStr}
                      </span>
                    );
                  })}
                </div>

                {/* 3. ASCII Representation Column */}
                {showAscii && (
                  <div className="flex items-center shrink-0 tracking-widest text-[10px] border-l border-white/[0.08] pl-3">
                    {rowBytes.map((byte, colIndex) => {
                      const byteIndex = startByteIndex + colIndex;
                      const isHovered = internalHovered === byteIndex;
                      const isSelected = activeSelected === byteIndex;

                      return (
                        <span
                          key={colIndex}
                          onClick={() => handleSelect(byteIndex)}
                          onMouseEnter={() => handleHover(byteIndex)}
                          onMouseLeave={() => handleHover(null)}
                          className={cn(
                            'cursor-pointer transition-colors px-[1px]',
                            byte === 0 ? 'text-slate-600' : 'text-slate-300',
                            isHovered &&
                              'bg-[var(--hv-signal)] text-black font-bold shadow-[0_0_6px_var(--hv-signal)]',
                            isSelected && !isHovered && 'text-[var(--hv-signal)] font-bold underline',
                          )}
                        >
                          {getAsciiChar(byte)}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive HUD Inspector Telemetry Bar */}
        {showInspector && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#03050a] px-3.5 py-1.5 text-[9px] text-slate-400">
            {inspectorIndex !== null && inspectorByte !== null ? (
              <>
                <div className="flex items-center gap-3">
                  <span className="text-[var(--hv-signal)] font-bold">
                    OFFSET: 0x{formatAddress(baseOffset + inspectorIndex)}
                  </span>
                  <span>
                    HEX: <strong className="text-white">0x{formatHex(inspectorByte)}</strong>
                  </span>
                  <span>
                    DEC: <strong className="text-white">{inspectorByte}</strong>
                  </span>
                  <span>
                    OCT: <strong className="text-white">0o{inspectorByte.toString(8)}</strong>
                  </span>
                  <span>
                    BIN: <strong className="text-white">{inspectorByte.toString(2).padStart(8, '0')}</strong>
                  </span>
                  <span>
                    CHAR:{' '}
                    <strong className="text-[var(--hv-signal)]">
                      &apos;{getAsciiChar(inspectorByte)}&apos;
                    </strong>
                  </span>
                </div>
                <span className="text-[8px] text-slate-500 uppercase tracking-tighter">
                  BYTE SELECTED // READY
                </span>
              </>
            ) : (
              <div className="flex items-center justify-between w-full">
                <span className="text-slate-500">HOVER OR CLICK A BYTE TO INSPECT RAW VALUES</span>
                <span className="text-slate-600">ENCODING: UTF-8 / RAW HEX</span>
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
);

HexViewer.displayName = 'HexViewer';
