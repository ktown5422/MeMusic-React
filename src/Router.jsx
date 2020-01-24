import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './Layout'

export function Routes(){
    return (
        <Router>
            <Layout>
                <div style={{ marginTop: '100px' }}>
                    <Route path="/" exact component={Home} />
                </div>
            </Layout>
        </Router>
    )
}