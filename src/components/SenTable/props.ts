import type { HTMLAttributes, ReactNode } from 'react'

/**
 * Text alignment for each table column
 */
export type SenTableAlign = 'left' | 'center' | 'right'

/**
 * A single column definition for the table
 */
export interface SenTableColumn<TData extends Record<string, unknown>> {
  /** Unique key to access the row's value */
  key: keyof TData

  /** Header label */
  header: string

  /** Alignment of the column text */
  align?: SenTableAlign

  /**
   * Optional render function to customize cell content
   * @example
   * (value, row) => <strong>{value}</strong>
   */
  render?: (value: TData[keyof TData], row: TData) => ReactNode
}

/**
 * Props for the `SenTable` component
 */
export interface SenTableProps<TData extends Record<string, unknown>>
  extends HTMLAttributes<HTMLTableElement> {
  /** Column definitions */
  columns: SenTableColumn<TData>[]

  /** Data rows to render */
  data: TData[]

  /**
   * Apply zebra striping to table rows
   * @default true
   */
  zebra?: boolean

  /**
   * Show checkbox in the first column
   * @default false
   */
  showCheckbox?: boolean

  /**
   * Row click handler
   * @example
   * (row) => console.log(row.id)
   */
  onRowClick?: (row: TData) => void
}
