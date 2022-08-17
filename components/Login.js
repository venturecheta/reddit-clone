import { supabase } from '../services/supabaseClient'

import Loading from './Loading'

import { useState, useEffect } from 'react'

const style = {
  wrapper: 'flex min-h-screen flex-col items-center justify-center space-y-2',
  loginBtn: 'group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white',
  loginBtnText: 'font-bold group-hover:text-black'
}

const Login = () => {
  useEffect(() => {
    const { user } = supabase.auth.session() || {user: null}

    console.log(user)
  }, [])
  
  const signInWithGoogle = async () => {
    try {
      const { user } = await supabase.auth.signIn({
        provider: 'google'
      })

      console.log(user, '🎊')
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div>
      <img
        className='h-52'
    src='https://miro.medium.com/max/640/1*BD8BMo-OpMehN0RWNFbsoQ.png'
        />
      <button 
        onClick={signInWithGoogle}
        className={style.loginBtn}>
      <img 
        className='h-6 w-6'
        src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png'
        />
        <span className={style.loginBtnText}>Sign In with Google</span>
        </button>
    </div>
      
  )
}

export default Login