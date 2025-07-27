import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify'


const Login = ({setToken}) => {


    const [email ,setEmail ] = useState('')
    const [password,setPassword] = useState('')



    const onSubmintHandler = async (e) => {
        
        try {
            
            e.preventDefault();

            const response = await axios.post(backendUrl + '/api/user/admin',{email,password})

            if (response.data.success) {
                
                setToken(response.data.token)

            } else {
                toast.error(response.data.message)
            }       

        } catch (error) {
            console.log(error)
                toast.error(error.message)

        }

    }


  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>ADMIN PANEL</h1>
            <form onSubmit={onSubmintHandler} >

                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>EMAIL ADDRESS</p>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='example@gmail.com' required/>
                </div>

                 <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2' >PASSWORD</p>
                    <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Password' required/>
                </div>

                <button className='w-full bg-black mt-2 py-2 px-4 rounded-md text-white' type="submit"> LOGIN </button>

            </form>
        </div>
    </div>
  )
}

export default Login