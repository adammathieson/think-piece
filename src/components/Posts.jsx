import React, { useContext } from 'react'
import Post from './Post';
import AddPost from './AddPost';

import { PostContext } from '../providers/PostProvider'

const Posts = ({ createdAt }) => {
  const posts = useContext(PostContext)

  return (
    <section className="Posts">
      <AddPost/>
      {/* <PostContext.Consumer> */}
      {posts.map(post => <Post {...post} key={post.id} />)}
      {/* </PostContext.Consumer> */}
    </section>
  )
}

export default Posts;
