import HomePage from './Pages/HomePage';
import {Route, Switch} from 'react-router-dom'
import SignupCover from './Pages/SignupCover';
import SigninCover from "./Pages/SigninCover";
import Reasons from "./components/sections/Reasons";
import SimpleTable from './components/sections/SimpleTable';

function App() {
 
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signals">
          <SimpleTable />
        </Route>
        <Route exact path="/signup">
          <SignupCover />
        </Route>
        <Route exact path="/signin">
          <SigninCover />
        </Route>
        <Route exact path="/reasons">
          <Reasons />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
