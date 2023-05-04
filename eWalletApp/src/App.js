import { Switch, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/StartPage";
import MyCardsPage from "./pages/MyCardsPage";
import AddNewCardPage from "./pages/AddNewCardPage";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path="/" render={(props) => <StartPage />} />
      <div>
        <BsFillArrowLeftCircleFill
          onClick={history.goBack}
          className="arrow-icon"
        />
        <Route path="/mycards" render={(props) => <MyCardsPage />} />
        <Route path="/createcard" render={(props) => <AddNewCardPage />} />
      </div>
    </Switch>
  );
}

export default App;
