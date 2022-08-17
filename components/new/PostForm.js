import { useRouter } from 'next/router'
import { useState } from 'react'
import { supabase } from '../../services/supabaseClient'
import Loading from '../Loading'

const style = {
  wrapper: 'flex flex-col space-y-6',
  input: 'bg-[#1a1a1b] border border-[343536] px-4 py-2 text-left text-white focus:outline-none',
  title: 'border-b border-[#343536] pb-3 text-lg font-medium',
  postBtn: 'bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B] rounded-full',
  postBtnContainer: 'flex justify-end pt-2',
}

const PostForm = () => {
  const [isLoading, setIsLoading] = useState()
  const [title,setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()
  const createPost = async event => {  
    event.preventDefault()
    try {
      setIsLoading(true)
      
      await supabase.from('feed').insert([
        {
          author: 'Clever Programmer',
          title,
          content,
        }
      ])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      router.push('/')
    }
  }
  
  return (
    <div className={style.wrapper}>
    {isLoading && <Loading/>}
      
      <h1 className={style.title}>Create a post</h1>

      <div className='flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4'>
      <input 
        className={style.input}
        type='text'
        placeholder='Title'
        value={title}
        onChange={event => setTitle(event.currentTarget.value)}
        />

      <textarea
        className={style.input}
        name='content'
        id='content'
        cols='30'
        rows='10'
        placeholder='Text (required)'
        value={content}
        onChange={event => setContent(event.currentTarget.value)}
        />
    <div className={style.postBtnContainer}>
      <button 
        onClick={createPost}
        className={style.postBtn}>Post</button>
    </div>
    </div>
  </div>
  )
}

export default PostForm