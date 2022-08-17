import { createContext, useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export const RedditContext = createContext()

export const RedditProvider = ({children}) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const [currentUser, setCurrentUser] = useState(null)
  
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    const { user } = supabase.auth.session() || {user: null}
  
    console.log(user)

    supabase.auth.onAuthStateChange((_event, authSession) => {
      setCurrentUser(authSession.user)
    })
  }, [])

  return (
    <RedditContext.Provider 
      value={{
        currentUser,
        fetcher, 
        selectedPost,
        setSelectedPost
      }}
      >{children}
    </RedditContext.Provider>
  )
}