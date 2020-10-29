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
        this.unsubscribeFromPost = this.postRef.onSnapShot(snapshot => {
            const post = collectIdsAndDocs(snapshot)
            this.setState({ post })
        })
        this.unsubscribeFromComments = this.commentRef.onSnapShot(snapshot => {
            const comments = snapshot.docs.map(collectIdsAndDocs)
            this.setState({ comments })
        })
    }

    componentWillUnmount = () => {
        this.unsubscribeFromPost()
        this.unsubscribeFromComments()
    }

    render() {
        const { match } = this.props
        console.log(this.props)
        return <div>Post Page! {match.params.id}</div>
    }
}

export default withRouter(PostPage)