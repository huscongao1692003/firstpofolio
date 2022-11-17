
import React from 'react'
import Sidebar from './component/Sidebar'
import Chat from './component/Chat'

const ChatHome = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}

export default ChatHome