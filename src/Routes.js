import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from './component/Index'

const Routes = () => {
    return (
        <div>
            <Switch >
               <Route  exact path="/" render = {props => (<Home {...props}  />)} />
            </Switch>
        </div>
    )
}
export default Routes;