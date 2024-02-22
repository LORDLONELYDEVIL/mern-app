import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput';
import {TiMessages} from "react-icons/ti"
import useConversation from '../../zustand/useConversation';
import { userAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation();

    useEffect(()=>{
        return()=>setSelectedConversation(null);

    },[setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col p-3'>
        {!selectedConversation?<NoChatSelected/>:(
            <>
            {/* Header */}
            <div className='bg-slate-600 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>
            <Messages/>
            <MessageInput/>      
            </>

        )}
        
    </div>
  )
}

export default MessageContainer;

const NoChatSelected=()=>{
    const {authUser}=userAuthContext();
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg  md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullName} 💖</p>
                <p>Selct a chat to Start Messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>

        </div>
    )
}




//STARTER CODE SNIPPET

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col p-3'>
//         <>
//         {/* Header */}
//         <div className='bg-slate-600 px-4 py-2 mb-2'>
//             <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John Wick</span>

//         </div>
//         <Messages/>
//         <MessageInput/>
        
        

        

        
//         </>
//     </div>
//   )
// }

// export default MessageContainer