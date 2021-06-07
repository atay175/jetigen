import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './pages/MainPage'
import About from './pages/About'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
  );
}

export default App;
