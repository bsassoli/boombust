import HomePage from './Pages/HomePage';
import {Route, Switch} from 'react-router-dom'
import SignupCover from './components/SignupCover';
import SigninCover from "./components/SigninCover";
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signup">
          <SignupCover />
        </Route>
        <Route exact path="/signin">
          <SigninCover />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
