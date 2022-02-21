import "./App.css";
import { Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// pages
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Payment from "./pages/Payment/Payment";

// routes
import Public from "./routes/Public";
import Private from "./routes/Private";
import { Login } from "./pages/Login/login";
function App() {
  return (
    <>
      <Header />

      <Switch>
        <Public path="/" component={Home} exact />
        <Public path="/register" component={Register} />
        <Public path="/login" component={Login} />

        <Private path="/product" component={Product} />
        <Private path="/payment" component={Payment} />
      </Switch>

      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
