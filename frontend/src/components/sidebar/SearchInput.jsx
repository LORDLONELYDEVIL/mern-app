import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type='text' placeholder='Seacrch...' className='input input-bordered rounded-full  text-white hover:bg-white hover:text-black bg-slate-800'/>
        <button type="submit" className='btn btn-circle  text-white hover:bg-white hover:text-black bg-slate-800 '>
        <IoSearchSharp  className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput