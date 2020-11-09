import React, { Component } from 'react'
import { UserContext, userContext } from '../providers/UserProvider'


// To handle build time naming convention of component
const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const withUser = Component => {
    const WrappedComponent = props => {
        return (
            <UserContext.Consumer>
                {user => <Component user={user} {...props} />}
            </UserContext.Consumer>
        )
    }
    WrappedComponent.displayName = `WithUser(${getDisplayName(WrappedComponent)})`
    return WrappedComponent
}

export default withUser