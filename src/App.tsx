import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Product from "./Product/Product";
import About from "./About/About";
import SignUp from "./SignUp/SignUp";
import Relationship from "./Relationship/Relationship";
import Footer from "./Footer/Footer";
import Backtotop from "./Backtotop/Backtotop";

export default function App() {
  return (
    <div>
      <Contact />
      <Header />
      <MainPage />
      <Product />
      <About />
      <SignUp />
      <Relationship />
      <Backtotop />
      <Footer />
    </div>
  );
}