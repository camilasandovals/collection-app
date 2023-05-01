import HomePage from "./scenes/HomePage";
import "bootstrap/dist/css/bootstrap.min.css"
import '../src/components/styles/App.css';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
      
    </>
  );
}

export default App;
