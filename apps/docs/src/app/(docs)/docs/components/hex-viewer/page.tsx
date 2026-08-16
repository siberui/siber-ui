'use client';

import * as React from 'react';
import { ComponentPage } from '@/components/docs/layout/ComponentPage';
import { ComponentHeader } from '@/components/docs/core/ComponentHeader';
import { ContentSection } from '@/components/docs/core/ContentSection';
import { InstallCommand } from '@/components/docs/core/InstallCommand';
import { CodeBlock } from '@/components/docs/core/CodeBlock';
import { Playground } from '@/components/docs/core/Playground';
import { ApiTable } from '@/components/docs/core/ApiTable';
import {
  HexViewer,
  ChamferCard,
  ChamferCardHeader,
  ChamferCardTitle,
  ChamferCardDescription,
  ChamferCardContent,
  Badge,
} from '@siberui/react';
import { Binary } from 'lucide-react';

const samplePayload =
  'SIBER_UI_PAYLOAD_V2.0_QUANTUM_LATTICE_CIPHER_ENABLED_KEY=0xDEADBEEF4F9A_SECURITY_OVERRIDE_GRANTED';

const headings = [
  { id: 'installation', text: 'Installation', level: 2 },
  { id: 'import', text: 'Import', level: 2 },
  { id: 'basic-usage', text: 'Basic Memory Hex Dump', level: 2 },
  { id: 'search-filter', text: 'Byte Search & Pattern Matching', level: 2 },
  { id: 'signals', text: 'Signal Accent Themes', level: 2 },
  { id: 'composite-terminal', text: 'Tactical Binary Forensics Inspector', level: 2 },
  { id: 'api-reference', text: 'API Reference', level: 2 },
  { id: 'accessibility', text: 'Accessibility & Keyboard Navigation', level: 2 },
];

export default function HexViewerDocsPage() {
  return (
    <ComponentPage headings={headings}>
      <ComponentHeader
        title="Hex Viewer"
        description="Futuristic binary data, memory dump, and byte inspector console with synchronized bidirectional ASCII decoding, live pattern search, and offset jumping."
        status="Stable"
      />

      {/* ── Installation ── */}
      <ContentSection title="Installation" id="installation">
        <InstallCommand />
      </ContentSection>

      {/* ── Import ── */}
      <ContentSection title="Import" id="import">
        <CodeBlock code={`import { HexViewer } from '@siberui/react';`} />
      </ContentSection>

      {/* ── Basic Usage ── */}
      <ContentSection title="Basic Memory Hex Dump" id="basic-usage">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Renders raw text or <code className="text-cyan-400">Uint8Array</code> bytes across a 3-column military layout (Memory Offset Address, Hex Matrix, and Decoded ASCII). Hovering any byte triggers synchronized neon highlighting and bottom HUD telemetry inspection.
          </p>

          <Playground
            code={`<HexViewer
  data="SIBERUI_BINARY_PAYLOAD_0x7F4A_ENCRYPTED_HEADER_SYS"
  baseOffset={0x00400000}
  signal="cyan"
  maxHeight="280px"
  title="SYSTEM_MEMORY // STACK_01"
/>`}
          >
            <div className="w-full p-4 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <HexViewer
                data="SIBERUI_BINARY_PAYLOAD_0x7F4A_ENCRYPTED_HEADER_SYS"
                baseOffset={0x00400000}
                signal="cyan"
                maxHeight="280px"
                title="SYSTEM_MEMORY // STACK_01"
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Search & Filter ── */}
      <ContentSection title="Byte Search & Pattern Matching" id="search-filter">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Highlight matching hex bytes and ASCII substrings in realtime using the <code className="text-cyan-400">searchQuery</code> prop or the built-in toolbar search box.
          </p>

          <Playground
            code={`<HexViewer
  data={samplePayload}
  searchQuery="QUANTUM"
  signal="amber"
  maxHeight="260px"
  title="PACKET_INSPECTION // MATCH_FILTER"
/>`}
          >
            <div className="w-full p-4 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <HexViewer
                data={samplePayload}
                searchQuery="QUANTUM"
                signal="amber"
                maxHeight="260px"
                title="PACKET_INSPECTION // MATCH_FILTER"
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Signal Themes ── */}
      <ContentSection title="Signal Accent Themes" id="signals">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Select an active signal color tone using the <code className="text-cyan-400">signal</code> prop to match your console theme.
          </p>

          <Playground
            code={`<HexViewer
  data="MALWARE_SIGNATURE_HASH_0x99FF_ROOTKIT_DETECTED"
  signal="rose"
  maxHeight="240px"
  title="THREAT_ANALYSIS // QUARANTINE"
/>`}
          >
            <div className="w-full p-4 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <HexViewer
                data="MALWARE_SIGNATURE_HASH_0x99FF_ROOTKIT_DETECTED"
                signal="rose"
                maxHeight="240px"
                title="THREAT_ANALYSIS // QUARANTINE"
              />
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── Composite Terminal ── */}
      <ContentSection title="Tactical Binary Forensics Inspector" id="composite-terminal">
        <div className="flex flex-col gap-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            Full forensics dashboard embedded inside a <code className="text-cyan-400">ChamferCard</code> chassis with jump-to-address navigation and clipboard copy actions.
          </p>

          <Playground
            code={`<ChamferCard signal="green" glow tag="FORENSICS // DUMP_04" statusDot="green" className="w-full">
  <ChamferCardHeader>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Binary className="h-4 w-4 text-emerald-400" />
        <ChamferCardTitle>CORE MEMORY FORENSICS</ChamferCardTitle>
      </div>
      <Badge variant="glass" dot dotColor="green">BUFFER_SYNCED</Badge>
    </div>
    <ChamferCardDescription>
      Live hexadecimal dump of decrypted kernel instruction space.
    </ChamferCardDescription>
  </ChamferCardHeader>
  <ChamferCardContent>
    <HexViewer
      data="KERNEL_PANIC_DUMP_0x001A_VIRTUAL_ADDRESS_MAPPING_PAGE_FAULT_BYPASS"
      baseOffset={0x00800000}
      signal="green"
      maxHeight="260px"
      title="KERNEL // RAM_SNAPSHOT"
    />
  </ChamferCardContent>
</ChamferCard>`}
          >
            <div className="w-full p-4 bg-[#03060d] rounded-2xl border border-white/[0.06]">
              <ChamferCard signal="green" glow tag="FORENSICS // DUMP_04" statusDot="green" className="w-full">
                <ChamferCardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Binary className="h-4 w-4 text-emerald-400" />
                      <ChamferCardTitle>CORE MEMORY FORENSICS</ChamferCardTitle>
                    </div>
                    <Badge variant="glass" dot dotColor="green">BUFFER_SYNCED</Badge>
                  </div>
                  <ChamferCardDescription>
                    Live hexadecimal dump of decrypted kernel instruction space.
                  </ChamferCardDescription>
                </ChamferCardHeader>
                <ChamferCardContent>
                  <HexViewer
                    data="KERNEL_PANIC_DUMP_0x001A_VIRTUAL_ADDRESS_MAPPING_PAGE_FAULT_BYPASS"
                    baseOffset={0x00800000}
                    signal="green"
                    maxHeight="260px"
                    title="KERNEL // RAM_SNAPSHOT"
                  />
                </ChamferCardContent>
              </ChamferCard>
            </div>
          </Playground>
        </div>
      </ContentSection>

      {/* ── API Reference ── */}
      <ContentSection title="API Reference" id="api-reference">
        <ApiTable
          props={[
            {
              property: 'data',
              description: 'Raw binary data as a Uint8Array, byte array, or UTF-8 string.',
              type: 'Uint8Array | number[] | string',
            },
            {
              property: 'bytesPerRow',
              description: 'Number of bytes rendered per line (8, 16, or 32).',
              type: '8 | 16 | 32',
              defaultValue: '16',
            },
            {
              property: 'baseOffset',
              description: 'Starting base memory address offset.',
              type: 'number',
              defaultValue: '0',
            },
            {
              property: 'signal',
              description: 'Neon signal accent theme.',
              type: '"cyan" | "violet" | "green" | "amber" | "rose"',
              defaultValue: '"cyan"',
            },
            {
              property: 'searchQuery',
              description: 'Search string to highlight across hex and ASCII columns.',
              type: 'string',
            },
            {
              property: 'showToolbar',
              description: 'Displays the top action toolbar (search, copy, jump to offset).',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'showInspector',
              description: 'Displays the bottom live telemetry inspection bar.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'showAscii',
              description: 'Displays the right-side decoded ASCII column.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'showOffset',
              description: 'Displays the left-side memory offset address column.',
              type: 'boolean',
              defaultValue: 'true',
            },
            {
              property: 'onByteSelect',
              description: 'Callback fired when a byte is clicked or selected via keyboard.',
              type: '(offset: number, byte: number) => void',
            },
            {
              property: 'onByteHover',
              description: 'Callback fired when a byte is hovered.',
              type: '(offset: number | null, byte: number | null) => void',
            },
          ]}
        />
      </ContentSection>

      {/* ── Accessibility ── */}
      <ContentSection title="Accessibility & Keyboard Navigation" id="accessibility">
        <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
          <li>
            <strong>Keyboard Focus:</strong> The byte grid is keyboard focusable via <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">tabIndex=&#123;0&#125;</code> and each byte cell features semantic <code className="text-cyan-400 font-mono text-xs bg-cyan-950/50 px-1.5 py-0.5 rounded">role=&quot;gridcell&quot;</code> attributes.
          </li>
          <li>
            <strong>Clipboard Actions:</strong> The COPY HEX and COPY ASCII toolbar buttons copy formatted strings to the clipboard with visual confirmation feedback.
          </li>
        </ul>
      </ContentSection>
    </ComponentPage>
  );
}
