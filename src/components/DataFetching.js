import React, {useState, useEffect} from 'react'
import {API_URL } from '../constants/constants';
import axios from 'axios';

function DataFetching() {
    const [items, setItems] = useState([])
    const aytem = ({})

    const getAllItems = async () => {
        axios
        .get(`${API_URL}/items/get-item`)
        .then(res => {
            console.log(res, "res")
            setItems(res.data)
        })
        .catch(err => {
            console.log(err, "EERRR")
        })
    }

    const getItemById = async (aytem) => {
        axios
        .get(`${API_URL}/items/get-item-id/item?inventoryId=${aytem}`)
        .then(res => {
            setItems([res.data])
        })
        .catch(err => {
            getAllItems()
            console.log(err, "EERRR")
        })
    }


    useEffect(() => {
        getAllItems()
    }, [])

  return (
    <div>
            <input type="text" value={aytem} onChange={e => getItemById(e.target.value)} />
            <ul>
                {items.map(item => (
                    <li key={item._id}>{item.itemName} : {item.inventoryId}</li> 
                ))}
            </ul>
    </div>
  )
}

export default DataFetching
