import { Toaster } from "react-hot-toast";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Users from "./components/users/Users";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Users />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
