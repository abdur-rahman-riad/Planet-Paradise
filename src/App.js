import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
