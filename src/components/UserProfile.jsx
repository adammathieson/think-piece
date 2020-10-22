import React, { Component } from 'react'
import { auth, firestore } from '../firebase'

class UserProfile extends Component {
    state = { displayName: ''}
    imageInput = null

    get uid() {
        return auth.currentUser.uid
    }

    get userRef() {
        return firestore.doc(`users/${this.uid}`)
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { displayName } = this.state

        if(displayName) {
            this.userRef.update({ displayName })
        }
        this.setState({displayName: '' })
    }

    render() {
        const { displayName } = this.state

        return (
            <section className="userProfile">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        placeholder="Display Name"
                        />
                    <input type="file" ref={ref => this.imageInput = ref} />
                    <input className="update" type="submit"/>
                </form>
            </section>
        )
    }
}

export default UserProfile