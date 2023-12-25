import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllRoutes from "./Page/AllRoutes";
import NavbarComp from "./Components/Navbar/NavbarComp";

function App() {
  return (
    <>
      <NavbarComp />
      <AllRoutes />
    </>
  );
}

export default App;
