import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NavigationBar from './NavigationBar'
import Home from './Home'
import Page404 from './Page404'
import Footer from './Footer'
import Register from './Register'
import Login from './Login'
import Admin from './Admin'
import AddBook from './AddBook'
import Shop from './Shop'
import Book from './Book'
import MyBooks from './MyBooks'

class Router extends React.Component{
    render() {
        return(
                <BrowserRouter>
                <div>
                   
                    <NavigationBar />
                    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/admin" exact component={Admin} />
                    <Route path="/admin/addbook" exact component={AddBook} />
                    <Route path="/admin/mybooks" exact component={MyBooks} />
                    <Route path="/contact" exact component={null} />
                    <Route path="/aboutus" exact component={null} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/book/:title/:id" exact component={Book} />
                    <Route path="/" component={Page404} />
                    </Switch>
                    <Footer />
                </div>
                </BrowserRouter>
        )
    }
}

export default Router