import cn from '../../../utils/cn.js'
import './Table.css'

/**
 * Data table shared by both portals.
 *
 * columns: [{ key, header, align?, width?, render?(row) }]
 * rows:    array of objects
 */
export default function Table({
  columns = [],
  rows = [],
  rowKey = (row, index) => row.id ?? index,
  loading = false,
  emptyMessage = 'Nothing to show yet.',
  caption,
  className,
}) {
  const hasRows = rows.length > 0

  return (
    <div className={cn('table-wrapper', className)}>
      <table className="table">
        {caption && <caption className="table__caption">{caption}</caption>}

        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                style={column.width ? { width: column.width } : undefined}
                className={column.align ? `table__cell--${column.align}` : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading && (
            <tr>
              <td className="table__placeholder" colSpan={Math.max(columns.length, 1)}>
                Loading…
              </td>
            </tr>
          )}

          {!loading && !hasRows && (
            <tr>
              <td className="table__placeholder" colSpan={Math.max(columns.length, 1)}>
                {emptyMessage}
              </td>
            </tr>
          )}

          {!loading &&
            rows.map((row, index) => (
              <tr key={rowKey(row, index)}>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={column.align ? `table__cell--${column.align}` : undefined}
                  >
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}