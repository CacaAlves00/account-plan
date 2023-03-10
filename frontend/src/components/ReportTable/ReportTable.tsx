import React from 'react'
import { Column, useTable } from 'react-table'
import styles from './ReportTable.module.scss'
import useFetchReportTableData from '@/hooks/useFetchReportTableData'

type ReportTableProps = {
    columns: readonly Column<object>[],
    data: readonly object[]
}

function ReportTable({ columns, data }: ReportTableProps) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<object>({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()} id={styles['report-table']}>
            <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (
                                            <td {...cell.getCellProps()}>
                                                {// Render the cell contents
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default ReportTable