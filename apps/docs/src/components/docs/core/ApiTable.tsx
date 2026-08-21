import React from 'react';

export type ApiProp = {
  property: string;
  description: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
};

interface ApiTableProps {
  props: ApiProp[];
}

export function ApiTable({ props }: ApiTableProps) {
  return (
    <div className="my-6 w-full overflow-hidden rounded-lg border border-border-hairline bg-[#06090e]">
      <div className="flex sm:hidden items-center justify-between px-3 py-1.5 bg-black/40 border-b border-border-hairline text-[10px] font-mono text-slate-500">
        <span>PROPERTIES ({props.length})</span>
        <span className="text-cyan-400/80">← swipe to inspect →</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300 table-auto min-w-[540px]">
          <thead className="bg-white/5 text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium w-[25%]">Property</th>
              <th className="px-4 py-3 font-medium w-[40%]">Description</th>
              <th className="px-4 py-3 font-medium w-[25%]">Type</th>
              <th className="px-4 py-3 font-medium w-[10%]">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-hairline">
            {props.map((prop) => (
              <tr key={prop.property} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-4 py-3 font-mono text-[13px] text-cyan-300">
                  <div className="break-words">
                    {prop.property}
                    {prop.required && <span className="ml-1 text-rose-400">*</span>}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs sm:text-sm">
                  {prop.description}
                </td>
                <td className="px-4 py-3 font-mono text-[12px] text-emerald-400">
                  <div className="break-words">{prop.type}</div>
                </td>
                <td className="px-4 py-3 font-mono text-[12px] text-slate-500">
                  {prop.defaultValue || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
