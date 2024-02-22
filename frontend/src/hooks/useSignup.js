import { useState } from "react";
import toast from "react-hot-toast";
import { userAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading,setloading]=useState(false);
    const {setAuthUser}=userAuthContext();

    const signup =async({fullName,password,username,confirmPassword,gender})=>{
        const success=handleInputErrors({fullName,password,username,confirmPassword,gender})
        if(!success) return;
    
        setloading(true);

        try{
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fullName,username,password,confirmPassword,gender})

        })
        const data=await res.json();
        console.log(data)
        if(data.error){
            throw new Error(data.error)
        }
        //local storage
        localStorage.setItem("chat-user",JSON.stringify(data))

        //context
        setAuthUser(data)

    }
    catch (error){
        toast.error(error.message)
    }
    finally{
        setloading(false);
    }

};
return {loading,signup};

};

export default useSignup

function handleInputErrors({fullName,password,username,confirmPassword,gender}){
    if(!fullName || !password || !username ||!confirmPassword || !gender){
        toast.error("Please fill in all fields")
        return false
    }
    if (password !== confirmPassword){
        toast.error("Passwords do not Match")
        return false
    }
    if(password.length<6){
        toast.error("Passord Must be 6 characters")
        return false
    }
    return true
}
