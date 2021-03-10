import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import TeamDetail from "./components/TeamDetail/TeamDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/team/:id'>
          <TeamDetail />
        </Route>
        <Route path='*'>
          <h1 className='text-center text-danger'>404 Page Not Found.</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
