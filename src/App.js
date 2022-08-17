import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { AuthProvider } from "./contexts/AuthContext"

//import Chats from "./Chats"
import Login from "./components/Login"

import Chat from "./componentes/Chat"
function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
         <AuthProvider> 
          <Switch>
             <Route path="/chats" component={Chat} />
            <Route path="/" component={Login} /> 
          </Switch>
         </AuthProvider> 
      </Router>
    </div>
  )
}

export default App
 