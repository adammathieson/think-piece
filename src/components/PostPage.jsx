import React, { Component } from 'react'

import Post from './Post'
import Comments from './Comments'
import { firestore } from '../firebase'
import { collectIdsAndDocs } from '../utilities'

import { withRouter } from 'react-router-dom'

class PostPage extends Component {
    state = { post: null, comments: []}
    
    get postId() {
        return this.props.match.params.id
    }
    
    get postRef() {
        return firestore.doc(`posts/${this.postId}`)
    }
    
    get commentRef() {
        return this.postRef.collection('comments')
    }
    
    unsubscribeFromPost = null
    unsubscribeFromComments = null
    
    componentDidMount = async () => {
        console.log(this.postId)
        this.unsubscribeFromPost = this.postRef.onSnapshot(snapshot => {
            const post = collectIdsAndDocs(snapshot)
            this.setState({ post })
        })
        this.unsubscribeFromComments = this.commentRef.onSnapshot(snapshot => {
            const comments = snapshot.docs.map(collectIdsAndDocs)
            this.setState({ comments })
        })
    }
    
    componentWillUnmount = () => {
        this.unsubscribeFromPost()
        this.unsubscribeFromComments()
    }
    
    render() {
        const { post, comments } = this.state
        // const { match } = this.props
        console.log(post)
        return (
            <section>
                { post && <Post {...post} />}
                <Comments
                    comments={comments}
                    // postId={post.id}
                    onCreate={() => {}}
                />
            </section>
        )
    }
}

export default withRouter(PostPage)