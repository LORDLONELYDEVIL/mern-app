import React, { useState } from 'react'
import GenderChexkBox from './GenderChexkBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const SignUp = () => {

  const [inputs,setInputs]=useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  });

  const {loading,signup}=useSignup()

  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();//stop auto refresh
    await signup(inputs)
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 bg-brown-700 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text">Full Name</span>
            </label>
            <input type="text" placeholder="John Wick" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"
            value={inputs.fullName}
            onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text"> Username</span>
            </label>
            <input type="text" placeholder="Johnwick" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"
            value={inputs.username}
            onChange={(e)=>setInputs({...inputs,username:e.target.value})}/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"
            value={inputs.password}
            onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm Password" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"
            value={inputs.confirmPassword}
            onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
            {/* {GENDER CHECKBOX HERE} */}
            <GenderChexkBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

            <Link to="/login" className='text-sm text-gray-400 hover:underline hover:text-blue-500 mt-2 inline-block'>
              Already have an account
            </Link>
            <div>
            <button className="btn btn-block hover:bg-white hover:text-black bg-slate-800 border-none text-gray-400 btn-sm mt-2" disabled={loading}>
              {loading?<span className='loading loading-spinner'></span>: "Sign Up"}</button>
          </div>
          </div>
        </form>
      </div>


    </div>
  )
}

export default SignUp


//STARTER CODE FOR SIGNUP COMPONENT

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 bg-brown-700 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           SignUp <span className='text-blue-500'> ChatApp</span>
//         </h1>
//         <form>
//         <div>
//             <label className="label p-2">
//               <span className="text-gray-400 label-text">Full Name</span>
//             </label>
//             <input type="text" placeholder="John Wick" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-400 label-text"> Username</span>
//             </label>
//             <input type="text" placeholder="Johnwick" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-400 label-text">Password</span>
//             </label>
//             <input type="text" placeholder="Enter Password" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"/>
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-400 label-text">Confirm Password</span>
//             </label>
//             <input type="text" placeholder="Confirm Password" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"/>
//             {/* {GENDER CHECKBOX HERE} */}
//             <GenderChexkBox/>

//             <a className='text-sm text-gray-400 hover:underline hover:text-blue-500 mt-2 inline-block' href='#'>
//               Already have an account
//             </a>
//             <div>
//             <button className="btn btn-block hover:bg-white hover:text-black bg-slate-800 border-none text-gray-400 btn-sm mt-2">Login</button>
//           </div>
//           </div>
//         </form>
//       </div>


//     </div>
//   )
// }

// export default SignUp