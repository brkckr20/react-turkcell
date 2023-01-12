import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import SignIn from "./pages/auth/SingIn";
import SignUp from "./pages/auth/SignUp";
import Products from "./pages/Products";
function App() {
  return (
    <div>
      <Navbar />
      <div id="content">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </div>
  )
}

export default App

