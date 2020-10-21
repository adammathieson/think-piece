import React, { Component, createContext } from 'react'
import { auth, createUserProfileDocument } from '../firebase'
// import { collectIdsAndDocs } from '../utilities'

export const UserContext = createContext({ user: null})

class UserProvider extends Component {

    state = {
        user: null,
    }
    
    unsubscribeFromAuth = null
    
    componentDidMount = async () => {
        // onSnapshot takes fn callback for when data changes/ returns cleanup fn
        // this.unsubscribeFromFireStore = firestore.collection('posts').onSnapshot(snapshot => {
        //   const posts = snapshot.docs.map(collectIdsAndDocs)
        //   this.setState({ posts })
        // })
    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            const user = await createUserProfileDocument(userAuth)
            console.log(user)
            this.setState({ user })
        })
    }
    
    
    componentWillUnmount = () => {
        // calls the returned cleanup fn 
        this.unsubscribeFromAuth()
    }

    render() {
        const { user } = this.state
        const { children } = this.props

        return (
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
        )
    }
}

export default UserProvider