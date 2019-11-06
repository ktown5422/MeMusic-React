import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Layout from './Layout'

export function Routes(){
    return (
        <Router>
            <Layout>
                <div style={{ marginTop: '100px' }}>
                    <Route path="/" exact component={Home} />
                    <Route path="/page2" exact component={Page2} />
                    <Route path="/page3" exact component={Page3} />
                    <Route path="/page4" exact component={Page4} />
                </div>
            </Layout>
        </Router>
    )
}