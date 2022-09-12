import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Cart } from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./components/style.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
              Home
            </Route>
            <Route path="cart" element={<Cart />}>
              Cart
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
