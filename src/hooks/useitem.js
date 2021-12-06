import { useEffect, useState } from "react"
import { request } from "../network/networkRequest"




export function useGetItem(){
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState({})



    // life-cycle hooks
    // eslint-disable-next-line
    useEffect(()=>load(),[])

    const load = () => {
        setLoading(true)
        setSuccess(false)
        request(
            'items',
            {},
            'GET',
            {} 
        ).then(res=>{
            setSuccess(true)
            setData(res.data.map(x=> ({
                ...x,
                })))
            setError({})
        }).catch(err=>{
            setSuccess(false)
            setData([])
            setError(err)
            
        }).finally(()=>{
            setLoading(false)
        })
    }

    return [data, {loading, error, success, load}]
}

export function useDetailItem(){
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState({})



    const getItem = (id) => {
        setLoading(true)
        setSuccess(false)
        request(
            'items/'+id,
            {},
            'GET',
            {}
        ).then(res=>{
            setSuccess(true)
            setData(res.data.data)
            setError({})
        }).catch(err=>{
            setSuccess(false)
            setData([])
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }

    return [data, {loading, error, success, getItem}]
}

export function useMutateItem(){
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({})
    const [error, setError] = useState({})

 

    const createItem = (data) => {
        setLoading(true)
        setSuccess(false)
        request(
            'items',
            data,
            'POST',
            {}
        ).then(res=>{
            setSuccess(true)
            setData(res.data.data)
            setError({})
        }).catch(err=>{
            setSuccess(false)
            setData([])
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }

    const editItem = (id,data) => {
        setLoading(true)
        setSuccess(false)
        request(
            'items/'+id,
            data,
            'PUT',
            {}
        ).then(res=>{
            setSuccess(true)
            setData(res.data.data)
            setError({})
        }).catch(err=>{
            setSuccess(false)
            setData([])
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }

    const deleteItem = (id) => {
        setLoading(true)
        setSuccess(false)
        request(
            'item/'+id,
            {},
            'DELETE',
            {}
        ).then(res=>{
            setSuccess(true)
            setData({})
            setError({})
        }).catch(err=>{
            setSuccess(false)
            setData([])
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }

    return [data, {loading, error, success, createItem, editItem, deleteItem}]
}