import React, {useContext} from 'react'
import ComponentF from '../components/ComponentF'


function ComponentE() {

    const user = useContext(UserContext)
    const channel =useContext(ChannelContext)


  return (
    <div>
       {user} - {channel}
    </div>
  )
}

export default ComponentE
