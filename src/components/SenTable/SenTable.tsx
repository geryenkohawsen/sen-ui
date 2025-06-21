'use client'

import { cn } from '../../utils/cn'
import { SenTableProps } from './props'

export default function SenTable<TData extends Record<string, unknown>>({
  columns,
  data,
  zebra = true,
  onRowClick,
  showCheckbox = false,
  className,
  ...props
}: SenTableProps<TData>) {
  return (
    <div className="overflow-x-auto">
      <table
        className={cn(
          'w-full border-collapse text-left text-sm text-gray-800',
          className
        )}
        {...props}
      >
        <thead className="bg-gray-100">
          <tr>
            {showCheckbox && (
              <th scope="col" className="p-3">
                {/* Checkbox column header placeholder (can add "Select All" checkbox later) */}
              </th>
            )}
            {columns.map((col) => (
              <th
                key={String(col.key)}
                scope="col"
                className={cn('p-3 font-semibold', {
                  'text-left': col.align === 'left',
                  'text-center': col.align === 'center',
                  'text-right': col.align === 'right',
                })}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={String(rowIndex)}
              tabIndex={onRowClick ? 0 : undefined}
              role={onRowClick ? 'button' : undefined}
              className={cn(
                zebra && rowIndex % 2 !== 0 && 'bg-gray-50',
                onRowClick &&
                  'cursor-pointer focus:ring-2 focus:ring-blue-500 focus:outline'
              )}
              onClick={() => onRowClick?.(row)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onRowClick?.(row)
                }
              }}
            >
              {showCheckbox && (
                <td className="p-3 align-middle">
                  {/* Add checkbox integration here */}
                </td>
              )}
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={cn('p-3 align-middle', {
                    'text-left': col.align === 'left',
                    'text-center': col.align === 'center',
                    'text-right': col.align === 'right',
                  })}
                >
                  {typeof col.render === 'function'
                    ? col.render(row[col.key], row)
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
