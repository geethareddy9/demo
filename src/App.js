import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Prayer from './Prayer';
import Contact from './Contact';
import Header from './Header';
import Outlook from './Outlook';
import NewEmail from './NewEmail';
import logo from './logo.svg';
import './App.css';
 
function App() {
  return (
    <div className="App">
      <h1>Welcome Home</h1>
      <Router>
        <Header />
        <Switch>
          <Route path="/prayer" exact component={Prayer} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/outlook" exact component={Outlook} />
          <Route path="/email/new" exact component={NewEmail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
