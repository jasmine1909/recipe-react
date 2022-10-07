import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Meal from "./components/Meal";
import Recipe from "./components/Recipe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Meal />}></Route>
          <Route path="/:recipeId" element={<Recipe />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
