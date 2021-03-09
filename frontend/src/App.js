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
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

const App = ()=> {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Route exact={true} path='/order/:id' component={OrderScreen}/>
        <Route exact={true} path='/shipping' component={ShippingScreen}/>
        <Route exact={true} path='/payment' component={PaymentScreen}/>
        <Route exact={true} path='/placeorder' component={PlaceOrderScreen}/>
        <Route exact={true} path='/login' component={LoginScreen}/>
        <Route exact={true} path='/register' component={RegisterScreen}/>
        <Route exact={true} path='/profile' component={ProfileScreen}/>
        <Route exact={true} path='/product/:id' component={ProductScreen}/>
        <Route exact={true} path='/cart/:id?' component={CartScreen}/>
        <Route exact={true} path='/admin/userlist' component={UserListScreen}/>
        <Route exact={true} path='/admin/productlist' component={ProductListScreen}/>
        <Route exact={true} path='/admin/productlist/:pageNumber' component={ProductListScreen}/>
        <Route exact={true} path='/admin/product/:id/edit' component={ProductEditScreen}/>
        <Route exact={true} path='/admin/user/:id/edit' component={UserEditScreen}/>
        <Route exact={true} path='/admin/orderlist' component={OrderListScreen}/>
        <Route exact={true} path='/search/:keyword' component={HomeScreen}/>
        <Route exact={true} path='/page/:pageNumber' component={HomeScreen}/>
        <Route exact={true} path='/search/:keyword/page/:pageNumber' component={HomeScreen}/>
        <Route exact={true} path='/' component={HomeScreen}/>
      </Container>
    </main>
    <Footer/>  
    </Router>
  );
}

export default App;
