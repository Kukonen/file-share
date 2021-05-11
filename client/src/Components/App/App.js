import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Files from '../Files/Files'
import People from '../People/People'
import Support from '../Support/Support'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/" exact component={Main} />
        <Route path="/files" exact component={Files} />
        <Route path="/people" exact component={People} />
        <Route path="/support" exact component={Support} />
        <Route path="/login" exact component={Login} />
        <Route path="/profile" exact component={Profile}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
