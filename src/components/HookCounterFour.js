import React, { useState } from 'react'

function HookCounterFour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems([ ...items, {
            id: items.length,
            value: items.length + 1
        }])
    }
    
    
  return (
    <div>
        <button onClick={addItem}>Add a number   </button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.id} : {item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default HookCounterFour
