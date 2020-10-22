import React from 'react'
import { render } from 'react-dom'

import './index.scss'

import Application from './components/Application'
import PostProvider from './providers/PostProvider'
import UserProvider from './providers/UserProvider'

import { BrowserRouter } from 'react-router-dom'

render(
    <BrowserRouter>
        <UserProvider>
            <PostProvider>
                <Application />
            </PostProvider>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById('root')
)
