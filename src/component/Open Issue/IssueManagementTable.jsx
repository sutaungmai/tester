import React from 'react'
import {Table, Space, Popconfirm} from 'antd'
import 'antd/dist/antd.css'
import { useGetItem } from '../../hooks/useitem'


function IssueManagementTable({onDetail,loading,actions}) {
    const columns = [
        {
            key: 'id',
            title: 'Issue Id',
            dataIndex: 'id',
            
        },
        {
            key: 'issues',
            title: 'Issues',
            dataIndex: 'issues',
            
        },
        {
            key: 'sources',
            title: 'Sources',
            dataIndex: 'sources',
            
        },
        {
            key: 'department',
            title: 'Department',
            dataIndex: 'department',
        },
        {
            key: 'dependencies',
            title: 'Dependencies',
            dataIndex: 'dependencies',
            
        },
        {
            key: 'root_cause',
            title: 'Root Cause',
            dataIndex: 'root_cause',
            
        },
        {
            key: 'issue_types',
            title: 'Issue Types',
            dataIndex: 'issue_types',
        },
        {
            key: 'requirements',
            title: 'Requirements',
            dataIndex: 'requirements',
        },
        {
            key: 'short_term_solution',
            title: 'Short Term Solution',
            dataIndex: 'short_term_solution',
            
        },
        {
            key: 'long_term_solution',
            title: 'Long Term Solution',
            dataIndex: 'long_term_solution',
            
        },
        {
            key: 'start_date',
            title: 'Start Date',
            dataIndex: 'start_date',
        },
        {
            key: 'close_date',
            title: 'Close Date',
            dataIndex: 'close_date',
        },
        {
            key: 'no_of_days',
            title: 'No. of Days',
            dataIndex: 'no_of_days',
        },
        {
            key: 'aging',
            title: 'Aging',
            dataIndex: 'aging'
        },
        {
            key: 'deadline',
            title: 'Deadline',
            dataIndex: 'deadline',
        },
        {
            key: 'priority',
            title: 'Priority',
            dataIndex: 'priority',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
        },
        {
            key: 'remark',
            title: 'Remark',
            dataIndex: 'remark',
        },
        {
            key: 'status',
            title: 'Status',
            dataIndex: 'status',
        },
        {
            key: 'action',
            title: 'Action',
            fixed: 'right',
            width: 200,
            render: (data) =>
                <Space>
                    <span className="table-action" onClick={() => actions.edit(data)}>edit</span>
                    <Popconfirm
                        title="Are you sure to delete?"
                        onConfirm={()=>actions.delete(data)}
                        okText="Yes"
                        cancelText="No"
                    > 
                        <span className='table-action'> delete </span>
                    </Popconfirm>
                </Space>,
        }
    ]

    const [data] = useGetItem()
    
    return (
        <React.Fragment>
                

                    
                        <Table
                            scroll={{x:2500,y:600}}
                            columns={columns}
                            dataSource={data}
                            loading={loading}
                            onRow={(record,rowIndex) => {
                                return {
                                    onDoubleClick: event => {onDetail(record)}
                                }
                            }} 
                        />
                    
                
                
                
            
        </React.Fragment>
    )
}

export default IssueManagementTable
