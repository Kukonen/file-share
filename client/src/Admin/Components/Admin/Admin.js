import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from "react-router-dom"

import Header from '../Header/Header'
import FeedbackPage from '../FeedbackPage/FeedbackPage';
import UsersPage from '../UsersPage/UsersPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route path="/admin/feedback" exact component={FeedbackPage} />
        <Route path="/admin/users" exact component={UsersPage} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;