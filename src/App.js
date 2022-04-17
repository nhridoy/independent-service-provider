import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/cart/:id"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
