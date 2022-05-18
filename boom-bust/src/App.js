import Home from './Pages/Home';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='' exact>
          <Home />
        </Route>
      </Switch>
      <Home />  
    </div>
  );
}
export default App;
