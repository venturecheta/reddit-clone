import Post from '../common/Post'

// const posts = [
//  {id: 0, title: 'build reddit', author: 'raph'},
//  {id: 0, title: 'build medium', author: 'raph'},
//  {id: 0, title: 'build facebook', author: 'raph'},

//]

const style = {
  wrapper: 'space-y-2.5',
}

const Feed = ({posts}) => {
  return (
    <div className={style.wrapper}>
      {posts.map((post) => (
        <Post {...post}/>
      ))}
    </div>
                 
  )
}

export default Feed