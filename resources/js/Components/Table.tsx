type TableProps = {
    headers: string[];
    onHeaderClick: () => void;
    data: [];
};

const Table = ({ headers, onHeaderClick, data }: TableProps) => {
    return (
        <table className="table-auto w-full">
            <thead>
                <tr className="bg-slate-200">
                    {headers.map((header) => (
                        <th key={header}>
                            <button onClick={onHeaderClick}>{header}</button>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((items, index) => {
                    return (
                        <tr key={index}>
                            {Object.keys(items).map((key) => (
                                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                    {key === "date_and_time"
                                        ? new Date(items[key]).toUTCString()
                                        : items[key]}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
