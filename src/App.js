import Main from "./components"
import "assets/sass/app.scss";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="simpflow">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
