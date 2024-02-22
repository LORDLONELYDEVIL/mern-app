import React, { useEffect } from 'react';
import Message from './Message';
import "../../App.css";
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../../skeleton/MessageSkeleton';
import { useRef } from 'react';
import useListenMessages from '../../hooks/useListenMessages';


const Messages = () => {
  const {messages,loading}=useGetMessages();
  useListenMessages();
  const lastMessageRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    },200);
  },[messages])

  
  //console.log(messages);
  return (
    <div className='px-4 flex-1 overflow-auto ' >
      {!loading && messages.length > 0 && 
      messages.map((message)=>(
      <div key={message._id} ref={lastMessageRef}>

        <Message  message={message}/>

      </div>)
        

      )}
      {loading &&[...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}

      {!loading && messages.length=== 0 && (
        <p className='text-center'>Send a Message To Start The Conversation</p>

      )}
       
    </div>
  )
}

export default Messages



//STATER CODE SNIPPET

// import React from 'react';
// import Message from './Message';
// import "../../App.css"


// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto ' >
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>
//         <Message/>


//     </div>
//   )
// }

// export default Messages