import type { HTMLAttributes } from 'react'

/**
 * Text alignment for each table column
 */
export type SenTableAlign = 'left' | 'center' | 'right'

/**
 * A single column definition for the table
 */
export interface SenTableColumn<T = any> {
  /** Unique key to access the row's value */
  key: keyof T

  /** Header label */
  header: string

  /** Alignment of the column text */
  align?: SenTableAlign

  /**
   * Optional render function to customize cell content
   * @example
   * (value, row) => <strong>{value}</strong>
   */
  render?: (value: any, row: T) => React.ReactNode
}

/**
 * Props for the `SenTable` component
 */
export interface SenTableProps<T = any>
  extends HTMLAttributes<HTMLTableElement> {
  /** Column definitions */
  columns: SenTableColumn<T>[]

  /** Data rows to render */
  data: T[]

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
  onRowClick?: (row: T) => void
}
