import {BrowserRouter as Router, Route} from 'react-router-dom' 
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = ()=> {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route exact={true} path='/shipping' component={ShippingScreen}/>
        <Route exact={true} path='/payment' component={PaymentScreen}/>
        <Route exact={true} path='/placeorder' component={PlaceOrderScreen}/>
        <Route exact={true} path='/login' component={LoginScreen}/>
        <Route exact={true} path='/register' component={RegisterScreen}/>
        <Route exact={true} path='/profile' component={ProfileScreen}/>
        <Route exact={true} path='/product/:id' component={ProductScreen}/>
        <Route exact={true} path='/cart/:id?' component={CartScreen}/>
        <Route exact={true} path='/' component={HomeScreen}/>
      </Container>
    </main>
    <Footer/>  
    </Router>
  );
}

export default App;
