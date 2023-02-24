import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NotFond from "../pages/not fond/NotFond"
import Register from '../pages/register/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = ()  => {
   <Router>
    <Switch>
      <Route  path="/" component={Home}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/register" component={Register}/>
      <Route  path="/*" component={NotFond}/>
       
    </Switch>
   </Router>
}
  


export default Routes