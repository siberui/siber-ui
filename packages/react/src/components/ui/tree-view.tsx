'use client';

import * as React from 'react';
import { ChevronRight, Folder, FolderOpen, File } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/cn';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export interface TreeDataItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeDataItem[];
}

export type TreeViewVariant = 'default' | 'neon' | 'glass';

export interface TreeViewProps extends React.HTMLAttributes<HTMLDivElement> {
  data: TreeDataItem[];
  variant?: TreeViewVariant;
  defaultExpandedIds?: string[];
  defaultSelectedId?: string;
  onNodeSelect?: (node: TreeDataItem) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Context
// ─────────────────────────────────────────────────────────────────────────────
interface TreeViewContextValue {
  variant: TreeViewVariant;
  expandedIds: Set<string>;
  toggleExpand: (id: string) => void;
  selectedId: string | null;
  selectNode: (node: TreeDataItem) => void;
}

const TreeViewContext = React.createContext<TreeViewContextValue | null>(null);

function useTreeView() {
  const ctx = React.useContext(TreeViewContext);
  if (!ctx) throw new Error('useTreeView must be used within TreeView');
  return ctx;
}

// ─────────────────────────────────────────────────────────────────────────────
// TreeView Root
// ─────────────────────────────────────────────────────────────────────────────
const treeViewVariants = cva('rounded-xl overflow-y-auto p-2', {
  variants: {
    variant: {
      default: 'bg-slate-950 border border-border-hairline text-slate-300',
      neon: 'bg-[#050d14] border border-cyan-500/20 shadow-[0_0_20px_rgba(0,240,255,0.03)] text-slate-300',
      glass: 'bg-white/[0.02] border border-border-subtle backdrop-blur-xl text-slate-300 shadow-xl',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const TreeView = React.forwardRef<HTMLDivElement, TreeViewProps>(
  (
    {
      data,
      variant = 'default',
      defaultExpandedIds = [],
      defaultSelectedId = null,
      onNodeSelect,
      className,
      ...props
    },
    ref
  ) => {
    const [expandedIds, setExpandedIds] = React.useState<Set<string>>(
      new Set(defaultExpandedIds)
    );
    const [selectedId, setSelectedId] = React.useState<string | null>(
      defaultSelectedId || null
    );

    const toggleExpand = React.useCallback((id: string) => {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    }, []);

    const selectNode = React.useCallback(
      (node: TreeDataItem) => {
        setSelectedId(node.id);
        onNodeSelect?.(node);
      },
      [onNodeSelect]
    );

    return (
      <TreeViewContext.Provider
        value={{ variant, expandedIds, toggleExpand, selectedId, selectNode }}
      >
        <div ref={ref} className={cn(treeViewVariants({ variant }), className)} role="tree" {...props}>
          {data.map((node) => (
            <TreeNode key={node.id} node={node} level={0} />
          ))}
        </div>
      </TreeViewContext.Provider>
    );
  }
);
TreeView.displayName = 'TreeView';

// ─────────────────────────────────────────────────────────────────────────────
// TreeNode (Recursive)
// ─────────────────────────────────────────────────────────────────────────────
interface TreeNodeProps {
  node: TreeDataItem;
  level: number;
}

const TreeNode = React.memo(({ node, level }: TreeNodeProps) => {
  const { variant, expandedIds, toggleExpand, selectedId, selectNode } = useTreeView();
  
  const isExpanded = expandedIds.has(node.id);
  const isSelected = selectedId === node.id;
  const hasChildren = node.children && node.children.length > 0;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      toggleExpand(node.id);
    } else {
      selectNode(node);
    }
  };

  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectNode(node);
    // If it's a folder, clicking the row also toggles expand (optional UX choice)
    if (hasChildren) {
      toggleExpand(node.id);
    }
  };

  // Node styling
  const nodeStyles = {
    default: {
      idle: 'hover:bg-white/[0.05]',
      selected: 'bg-white/[0.08] text-white',
    },
    neon: {
      idle: 'hover:bg-cyan-500/[0.05] hover:text-cyan-100',
      selected: 'bg-cyan-500/15 text-cyan-300 shadow-[inset_0_0_15px_rgba(0,240,255,0.05)] border-l-2 border-cyan-400 -ml-0.5',
    },
    glass: {
      idle: 'hover:bg-white/[0.06]',
      selected: 'bg-white/[0.12] text-white shadow-inner',
    },
  };

  const style = nodeStyles[variant];

  // Default icons
  const defaultIcon = hasChildren ? (
    isExpanded ? <FolderOpen className="w-4 h-4 text-cyan-500/80" /> : <Folder className="w-4 h-4 text-cyan-500/80" />
  ) : (
    <File className="w-4 h-4 text-slate-500" />
  );

  return (
    <div className="flex flex-col">
      <div
        role="treeitem"
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-selected={isSelected}
        onClick={handleSelect}
        className={cn(
          'flex items-center gap-1.5 py-1.5 px-2 rounded-md cursor-pointer select-none transition-colors text-sm',
          isSelected ? style.selected : style.idle
        )}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        {/* Chevron for directories */}
        <div
          className="w-4 h-4 flex items-center justify-center shrink-0"
          onClick={handleToggle}
        >
          {hasChildren ? (
            <ChevronRight
              className={cn(
                'w-3.5 h-3.5 transition-transform duration-200 text-slate-500 hover:text-white',
                isExpanded && 'rotate-90'
              )}
            />
          ) : (
            <span className="w-4" /> // Spacer
          )}
        </div>

        {/* Node Icon */}
        <div className="shrink-0">
          {node.icon || (
            variant === 'neon' 
              ? React.cloneElement(defaultIcon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 text-cyan-400' })
              : defaultIcon
          )}
        </div>

        {/* Node Label */}
        <span className={cn('truncate', variant === 'neon' && 'font-mono text-[13px]')}>
          {node.label}
        </span>
      </div>

      {/* Children */}
      {hasChildren && isExpanded && (
        <div className="flex flex-col" role="group">
          {node.children!.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
});
TreeNode.displayName = 'TreeNode';
