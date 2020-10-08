import React from 'react'
import Post from './Post';
import AddPost from './AddPost';

import { PostContext } from '../providers/PostProvider'

const Posts = ({ createdAt }) => {
  return (
    <section className="Posts">
      <AddPost/>
      <PostContext.Consumer>
        {posts => posts.map(post => <Post {...post} key={post.id} />)}
      </PostContext.Consumer>
    </section>
  )
}

export default Posts;
