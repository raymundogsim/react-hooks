import React from 'react'


function ComponentF() {
  return (
    <div>
               
        <UserContext.Consumer>

                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                            {
                                channel => {
                                 return <div>user context value: {user}, channel context value: {channel} </div>
                                }
                            }
                        </ChannelContext.Consumer>
                        
                        )
                    }
                }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
