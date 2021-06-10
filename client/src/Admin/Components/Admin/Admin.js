import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route} from "react-router-dom"
import AdminState from '../../Store/Admin/admin.state'

import Header from '../Header/Header'
import FeedbackPage from '../FeedbackPage/FeedbackPage';
import UsersPage from '../UsersPage/UsersPage';
import { observer } from 'mobx-react-lite';

const Admin = observer(() => {

  AdminState.setIsAdmin()

  return (
    <div className="App">
      {
        AdminState.isAdmin ? 
        <div>
          <Header />
          <BrowserRouter>
            <Route path="/admin/feedback" exact component={FeedbackPage} />
            <Route path="/admin/users" exact component={UsersPage} /> 
          </BrowserRouter>
        </div> :
        null
      }
    </div>
  )
  
})

export default Admin;