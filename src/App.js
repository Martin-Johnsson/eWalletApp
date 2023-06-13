import { Switch, Route } from 'react-router-dom';
import './App.css';
import StartPage from './pages/StartPage';
import MyCardsPage from './pages/MyCardsPage';
import AddNewCardPage from './pages/AddNewCardPage';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path='/' render={(props) => <StartPage />} />
      <div>
        <Route path='/mycards' render={(props) => <MyCardsPage />} />
        <Route path='/createcard' render={(props) => <AddNewCardPage />} />
      </div>
    </Switch>
  );
}

export default App;
