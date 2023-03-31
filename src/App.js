import "./App.css";
import Blog from "./components/Blog/Blog";
import Faq from "./components/Faq/Faq";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Blog></Blog>
      <Faq></Faq>
    </div>
  );
}

export default App;
