import "./App.css";
import Blog from "./components/Blog/Blog";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Blog></Blog>
    </div>
  );
}

export default App;
