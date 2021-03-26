import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import Main from './components/Main';
import LineGraph from './components/LineGraph';
import TableData from './components/TableData';
import BarGraph from './components/BarGraph';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path={"/"} exact component={Main} />
        <Route path={"/line"} exact component={LineGraph} />
        <Route path={"/bar"} exact component={BarGraph} />
        <Route path={"/table"} exact component={TableData} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
