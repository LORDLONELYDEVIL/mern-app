import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useConversations from '../../hooks/useConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation();//zustand
  const {conversations}=useConversations();//hook

  const handleSubmit=(e)=>{
    e.preventDefault();
    if (!search) return;
    if (search.length<3){
      return toast.error("Search Term Must be Above 2 character");
    }
    const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLocaleLowerCase()));

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else toast.error("no such user found");

  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type='text' placeholder='Seacrch...' className='input input-bordered rounded-full  text-white hover:bg-white hover:text-black bg-slate-800' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button type="submit" className='btn btn-circle  text-white hover:bg-white hover:text-black bg-slate-800 '>
        <IoSearchSharp  className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput

//STARTER CODE SNIPPET

// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Seacrch...' className='input input-bordered rounded-full  text-white hover:bg-white hover:text-black bg-slate-800'/>
//         <button type="submit" className='btn btn-circle  text-white hover:bg-white hover:text-black bg-slate-800 '>
//         <IoSearchSharp  className='w-6 h-6 outline-none'/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput