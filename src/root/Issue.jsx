import React,{useState,useEffect} from 'react'
import {Space,Drawer,Form,Button} from 'antd'
import { useDetailItem, useGetItem, useMutateItem } from '../hooks/useitem';
import ItemsForm from '../component/Open Issue/ItemsForm';
import IssueManagementTable from '../component/Open Issue/IssueManagementTable';

// import IssueManagementTable from './IssueManagementTable'


function Issue({data}) {

    const [newForm, showNewForm ] = useState(false)
    const [editForm, showEditForm ] =useState(false)
    const [detailForm, showDetailForm ] = useState(false)


    const [form] = Form.useForm()

    //hooks
    const [items, {loading, load} ] = useGetItem()
    const [item, {loading: detailLoading, getItem}] = useDetailItem()
    const [,{loading: mutateLoading,success: mutateSuccess, createItem,editItem, deleteItem}] = useMutateItem()

    useEffect(() => {
        if(!mutateLoading&&mutateSuccess) {
             showNewForm(false)
             showEditForm(false)
             load()
        }

    }, [mutateLoading,mutateSuccess])

    const onDetail = (data) => {
        showDetailForm(true)
        getItem(data.id)
    }

    const handleCreate = data => {
        const payload = {
            title: "",
            description: "",
            issues: data.issue,
            sources: data.source,
            department: data.department,
            root_cause: data.root_cause,
            issue_type: data.issue_type,
            short_term_solution: data.long_term_solution,
            long_term_solution: data.short_term_solution,
            start_date: data.start_date.format('YYYY-MM-DDTHH:mm'),
            close_date: data.close_date.format('YYYY-MM-DDTHH:mm'),
            number_of_days: data.no_of_days,
            priority: data.priority,
            status: data.status
          }
        createItem(payload)
    }

    const onshowEdit = data => {
        showEditForm(true)
        getItem(data.id)
    }

    const handleEdit = data => {
        editItem(data.id,data)
    }

    const handleDelete = data => {
        deleteItem(data.id)
        load()
        console.log(data.id)
    }



    return (
        <React.Fragment>

            <Space>

                <button className="button" onClick={()=> showNewForm(true)}>New</button>

            </Space>

            
            <p></p>

            <IssueManagementTable
                onDetail={onDetail} 
                actions={{
                    edit: (row) => onshowEdit(row),
                    delete: (row) => handleDelete(row)
                }}
                loading={loading}
            />

            <Drawer width={700} placement="right" onClose={() => showNewForm(false)} visible={newForm}>
                <ItemsForm onSubmit={handleCreate} loading={mutateLoading} />
            </Drawer>
            
            {/* Edit form */}
            <Drawer width={700} placement="right" onClose={() => showEditForm(false)} visible={editForm}>
                <ItemsForm form={form} onSubmit={handleEdit} data={ item } />
            </Drawer>
            
            {/* Detail Form */}
            <Drawer title="Issue Detail"  width={700} placement="right" onClose={() => showDetailForm(false)} visible={detailForm}>
                <ItemsForm data={ data } loading={detailLoading} />
            </Drawer>
             
        </React.Fragment>
  );
}
        
    


export default Issue




