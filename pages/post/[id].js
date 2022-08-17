import Post from '../../components/common/Post'
import { useContext, useEffect } from 'react'
import { RedditContext } from '../../context/RedditContext'
import Header from '../../components/header'
import { useRouter } from 'next/router'
import Comments from '../components/commentSection/Comments'
import SaveComment from '../../components/commentSection/SaveComment'

const style = {
  wrapper: 'flex min-h-screen flex-col bg-black text-white',
  containerWrapper: 'w-full space-y-4 lg:w-2/3'
}
const PostView = () => {
  const router = useRouter()
  const { selectedPost } = useContext(RedditContext)

  useEffect(() => {
    if (selectedPost === null) {
      router.push('./')
    }
  }, [])
  
  return (
    <div className={style.wrapper}>
      <Header/>
      <div className={style.container}>
        <div className={style.containerWrapper}>
          <Post {...selectedPost} />
          <SaveComment postId={selectedPost.id}/>
          <Comments postId={selectedPost.id}/>
         </div> 
      </div>
    </div>
  )
}

export default PostView