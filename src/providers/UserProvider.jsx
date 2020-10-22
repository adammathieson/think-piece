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
    
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => {
                    this.setState({user: {uid: snapshot.id, ...snapshot.data()}})
                })
            }
            // console.log('fires createUserProfileDocument on db state change', user)
            this.setState({ user: userAuth })
        })
    }
    
    
    componentWillUnmount = () => {
        // calls the returned cleanup fn 
        this.unsubscribeFromAuth()
    }

    render() {
        const { user } = this.state
        const { children } = this.props

        return <UserContext.Provider value={user}>{children}</UserContext.Provider>
    }
}

export default UserProvider