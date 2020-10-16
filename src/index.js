import React from 'react'
import { render } from 'react-dom'

import './index.scss'

import Application from './components/Application'
import PostProvider from './providers/PostProvider'
import UserProvider from './providers/UserProvider'

render(
    <UserProvider>
        <PostProvider>
            <Application />
        </PostProvider>
    </UserProvider>,
    document.getElementById('root')
)
