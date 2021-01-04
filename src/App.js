import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Shortlisted from "./pages/Shortlisted/Shortlisted"
import Rejected from "./pages/Rejected/Rejected"
import CandidateList from './components/CandidateList/CandidateList';
function App() {
  return (
    <CandidateList>
   <BrowserRouter>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/shortlisted" component={Shortlisted}/>
    <Route exact path="/rejected" component={Rejected}/>
    <Route exact path="/:id" component={Profile}/>
   </Switch>
   </BrowserRouter>
   </CandidateList>
  );
}

export default App;
