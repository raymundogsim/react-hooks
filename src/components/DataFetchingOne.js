import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../constants/constants';

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [items, setItems] = useState([])


    useEffect(() => {
        axios
        .get(`${API_URL}/items/get-items`)
        .then((res) => {
            setLoading(false)
            setItems(res.data)
            setError('')
        })
        .catch((err) => {
            setLoading(false)
            setItems([])
            setError('Something went wrong')
            console.log(err)
        })
    }, [])


  return (
    <div>
        {loading ? 'Loading' :
               <ul>
               {items.map(item => (
                   <li key={item._id}>{item.itemName}</li>  
               ))}
          </ul>
        }
        {error ? error : null}
    </div>
  )
}

export default DataFetchingOne
