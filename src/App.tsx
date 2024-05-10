import Logo from "./components/header/logo/Logo";
import Nav from "./components/header/nav/Nav";
import Menu from "./components/menu/Menu";

const App = () => {
  return (
    <div className=" container">
      <div>
        <Nav/>
      </div>
      <div className=" mt-10">
        <Logo/>
      </div>
      <div className=" mt-10">
        <Menu/>
      </div>
    </div>
  );
}

export default App;