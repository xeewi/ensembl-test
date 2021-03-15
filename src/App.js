import './App.css';
import logo from './logo.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Title } from './components/Title';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VideoPage } from './pages/VideoPage';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:programType" component={VideoPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
