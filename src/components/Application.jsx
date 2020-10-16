import React, { Component } from 'react';

import Posts from './Posts';
import Authentication from './Authentication'

// console.log(collectIdsAndDocs)

class Application extends Component {
  

  handleCreate =  async post => {
    // const { posts } = this.state;

    // const docRef = await firestore.collection('posts').add(post)
    // const doc = await docRef.get()
    
    // const newPost = collectIdsAndDocs(doc)
    
    // this.setState({ posts: [newPost, ...posts] })

    // With refactor ↓ this is all that is needed for updated
    // firestore.collection('posts').add(post)
  };

  handleRemove = async id => {
    // const allPosts = this.state.posts

    // await firestore.doc(`posts/${id}`).delete()
    
    // const posts = allPosts.filter(post => post.id !== id)
    // this.setState({ posts })

    // With refactor ↓ this is all that is needed for updated
    // firestore.doc(`posts/${id}`).delete()
  }

  render() {

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication />
        <Posts />
      </main>
    );
  }
}

export default Application;
