import React, { Component } from 'react'

import Post from './Post'
import Comments from './Comments'
import { Firestore } from '../firebase'
import { collectIdsAndDocs } from '../utilities'

class PostPage extends Component {
    state = { post: null, comments: []}

    render() {
        return <div>Post Page!</div>
    }
}

export default PostPage