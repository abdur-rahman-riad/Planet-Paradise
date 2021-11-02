import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
