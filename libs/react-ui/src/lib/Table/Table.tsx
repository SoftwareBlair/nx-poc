import styles from './Table.module.scss';

export interface TableProps {
  headers: string[];
  rows: string[][];
}

export function Table({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra w-full border-base-300">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell: any) => (
                <td className="truncate max-w-xs" key={cell.id}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
