import { Route, Switch } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "./store/AuthContext";

import HomePage from './Pages/HomePage';
import LoggedInHome from "./Pages/LoggedInHome";
import SignupCover from './Pages/SignupCover';
import SigninCover from "./Pages/SigninCover";
import Reasons from "./components/sections/Reasons";
import SimpleTable from './components/sections/SimpleTable';
import Page from './components/UI/Page';



function App() {
  const authCtx = useContext(AuthContext);
  
  return (
    <div className="App">      
      <Page>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          {!!authCtx.token && (
          <Route exact path="/logged">
            <LoggedInHome />
          </Route>)}
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
      </Page>
    </div>
  );
}
export default App;
