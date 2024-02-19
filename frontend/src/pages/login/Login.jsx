import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
      className=" w-full p-6 bg-brown-700 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-gray-400 label-text">Username</span>
            </label>
            <input type="text" placeholder="Enter Username" className="w-full input  hover:bg-white hover:text-black input-bordered bg-slate-800 text-white h-10"/>
          </div>
          <div>
            <label className="label">
              <span className="text-gray-400 label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter Password" className="w-full input  hover:bg-white hover:text-black input-bordered h-10  bg-slate-800  text-white" />
          </div>
          <a href="#" className="text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block">
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block hover:bg-white hover:text-black bg-slate-800 border-none text-gray-400 btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
      
    </div>
    
  );
};

export default Login;

//STARTER CODE FOR THIS FILE

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div
//       className=" w-full p-6 bg-brown-700 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300 ">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-gray-400 label-text">Username</span>
//             </label>
//             <input type="text" placeholder="Enter Username" className="w-full input input-bordered bg-slate-800 text-white h-10"/>
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-gray-400 label-text">Password</span>
//             </label>
//             <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10  bg-slate-800  text-white" />
//           </div>
//           <a href="#" className="text-sm text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block">
//             {"Don't"} have an account?
//           </a>
//           <div>
//             <button className="btn btn-block hover:bg-white hover:text-black bg-slate-800 border-none text-gray-400 btn-sm mt-2">Login</button>
//           </div>
//         </form>
//       </div>
      
//     </div>
    
//   );
// };

// export default Login;
