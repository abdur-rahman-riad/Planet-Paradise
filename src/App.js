import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddPackage from './Pages/AddPackage/AddPackage';
import AllBooking from './Pages/Booking/AllBooking/AllBooking';
import Booking from './Pages/Booking/Booking/Booking';
// import AllBooking from './Pages/Booking/MyBooking/AllBooking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>

            <PrivateRoute path="/manageBooking">
              <AllBooking></AllBooking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
