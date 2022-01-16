import "./App.css";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/categories">categories</Link>
                </li>
                <li>
                  <Link to="/products">products</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
            </Switch>
          </div>
        </Router>
      </ul>
    </div>
  );
}

export default App;
