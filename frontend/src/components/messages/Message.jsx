import React from 'react'
import { userAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';


const Message = ({message}) => {
  const {authUser}=userAuthContext();
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId === authUser._id;
  const chatClassName= fromMe ? "chat-end" : "chat-start";
  const profilePic=fromMe? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor=fromMe ? "bg-blue-500" : "bg-gray-700";
  const formattedTime=extractTime(message.createdAt);

  const shakeClass=message.shouldShake ? "shake" : ""
 
  return (
    <div className={`chat ${chatClassName} ${shakeClass}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img
                alt='Tailwin Css Chat bubble'
                src={profilePic}
                />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message} </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-black pb-2'>{formattedTime}</div>

    </div>
  )
}

export default Message


//STARTER CODE SNIPPET

// const Message = () => {
//     return (
//       <div className='chat chat-end'>
//           <div className='chat-image avatar'>
//               <div className='w-10 rounded-full'>
//                   <img
//                   alt='Tailwin Css Chat bubble'
//                   src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
//                   />
//               </div>
//           </div>
//           <div className={'chat-bubble text-white bg-blue-500 '}>Hi! 💖 </div>
//           <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12;45</div>
  
//       </div>
//     )
//   }
  
//   export default Message