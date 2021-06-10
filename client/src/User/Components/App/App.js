import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from 'react-router-dom'
import ProfileState from '../../Store/Profile/profile.state'

import Header from '../Header/Header'
import MainPage from '../MainPage/MainPage'
import FilesPage from '../FilesPage/FilesPage'
import PeoplePage from '../PeoplePage/PeoplePage'
import SupportPage from '../SupportPage/SupportPage'
import LoginPage from '../LoginPage/LoginPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import User from '../User/User'

function App() {

  ProfileState.takeInformation();

  return (
    <div className="App">
      {window.location.pathname.split("/")[1] !== "admin" ? 
        <Header /> :
        null
      }
      
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/files" exact component={FilesPage} />
        <Route path="/people" exact component={PeoplePage} />
        <Route path="/support" exact component={SupportPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/profile" exact component={ProfilePage}/>
        <Route path="/user/:id" component={User}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
