import { useAppSelector } from '@/redux/hooks'
import { Plans } from '@/redux/states/plan'
import { useEffect } from 'react'
import { Column } from 'react-table'

function useFetchReportTableData(): [Column<object>[], object[]] {
    
    const plan = useAppSelector((state) => state.plan.plan)
    
    return [

        [
            {
                Header: Plans[plan],
                columns: [
                    {
                        Header: 'Credor',
                        accessor: 'credor'
                    },
                    {
                        Header: 'Valor',
                        accessor: 'valor'
                    },
                    {
                        Header: 'Dat. Emissão',
                        accessor: 'dat-emi'
                    },
                    {
                        Header: 'Dat. Vencimento',
                        accessor: 'dat-venc'
                    }
                ]
            }
        ],

        [
            {
                'credor': 'SABESP',
                'valor': 'R$ 465,65',
                'dat-emi': '30/12/2022',
                'dat-venc': '30/01/2023'
            },
            {
                'credor': 'SABESP',
                'valor': 'R$ 465,65',
                'dat-emi': '30/12/2022',
                'dat-venc': '30/01/2023'
            },
            {
                'credor': 'SABESP',
                'valor': 'R$ 465,65',
                'dat-emi': '30/12/2022',
                'dat-venc': '30/01/2023'
            },
            {
                'credor': 'SABESP',
                'valor': 'R$ 465,65',
                'dat-emi': '30/12/2022',
                'dat-venc': '30/01/2023'
            },
            {
                'credor': 'SABESP',
                'valor': 'R$ 465,65',
                'dat-emi': '30/12/2022',
                'dat-venc': '30/01/2023'
            },
            {
                'credor': 'SABESP',
                'valor': 'R$ 465,65',
                'dat-emi': '30/12/2022',
                'dat-venc': '30/01/2023'
            }
        ]
    ]
}

export default useFetchReportTableData