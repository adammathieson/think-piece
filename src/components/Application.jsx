import React, { Component } from 'react';

import { firestore, auth, createUserProfileDocument } from '../firebase'
import { collectIdsAndDocs } from '../utilities';

import Posts from './Posts';
import Authentication from './Authentication'

// console.log(collectIdsAndDocs)

class Application extends Component {
  state = {
    posts: [],
    user: null,
  };

  unsubscribeFromFirestore = null
  unsubscribeFromAuth = null

  componentDidMount = async () => {
    // onSnapshot takes fn callback for when data changes/ returns cleanup fn
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs)
      this.setState({ posts })
    })
    // const snapshot = await firestore.collection('posts').get()

    // const posts = snapshot.docs.map(collectIdsAndDocs)
    // this.setState({ posts })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      const user = await createUserProfileDocument(userAuth)
      console.log(user)
      this.setState({ user })
    })
  }


  componentWillUnmount = () => {
    // calls the returned cleanup fn 
    this.unsubscribe()
  }

  handleCreate =  async post => {
    // const { posts } = this.state;

    // const docRef = await firestore.collection('posts').add(post)
    // const doc = await docRef.get()
    
    // const newPost = collectIdsAndDocs(doc)
    
    // this.setState({ posts: [newPost, ...posts] })

    // With refactor ↓ this is all that is needed for updated
    firestore.collection('posts').add(post)
  };

  handleRemove = async id => {
    // const allPosts = this.state.posts

    // await firestore.doc(`posts/${id}`).delete()
    
    // const posts = allPosts.filter(post => post.id !== id)
    // this.setState({ posts })

    // With refactor ↓ this is all that is needed for updated
    firestore.doc(`posts/${id}`).delete()
  }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user}/>
        <Posts posts={posts}/>
      </main>
    );
  }
}

export default Application;
