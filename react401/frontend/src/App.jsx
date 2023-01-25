import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'
import SignIn from "./pages/auth/SingIn";
import SignUp from "./pages/auth/SignUp";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/auth/Profile";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";

function App() {
  return (
    <div>
      <Navbar />
      <div id="content">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product/:product_id" component={ProductDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/basket" component={Basket} />
          <ProtectedRoutes path="/profile" component={Profile} />
          <ProtectedRoutes path="/admin" component={Admin} admin={true} />
          <Route path="*" component={Error404} />

        </Switch>
      </div>
    </div>
  )
}

export default App

