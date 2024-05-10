import Footer from "./components/footer/Footer";
import Logo from "./components/header/logo/Logo";
import Nav from "./components/header/nav/Nav";
import Menu from "./components/menu/Menu";

const App = () => {
  return (
    <div className=" ">
      <div className=" container ">
        <div>
          <Nav />
        </div>
        <div className=" mt-10">
          <Logo />
        </div>
        <div className=" mt-10">
          <Menu />
        </div>
      </div>
      <div className=" w-full bg-blue-400  bottom-0 mt-10  ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
