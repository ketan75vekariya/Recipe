import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Recipes from "./components/Recipes";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <Recipes></Recipes>
      <Footer></Footer>
    </>
  );
}

export default App;
