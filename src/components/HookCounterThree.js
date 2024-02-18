import React, { useState } from 'react'

function HookCounterThree() {
    const [form, setForm] = useState({firstName: '', lastName: ''})


    const handleChanges = prop => event => {
        setForm({ ...form, [prop] : event.target.value })        
    }
    
    console.log(form, "changes")

  return (
    <form>
      <input 
        type="text"
        value={form.firstName}
        onChange={handleChanges("firstName")}
        />
      <input 
        type="text"
        value={form.lastName}
        onChange={handleChanges("lastName")}
       />
      <h2>Your first name is - {form.firstName}</h2>
      <h2>Your last name is - {form.lastName}</h2>
      <h2>{JSON.stringify(form)}</h2>
    </form>
  )
}

export default HookCounterThree
