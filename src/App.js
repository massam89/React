import { useContext } from 'react';
import Search from './components/Search'
import Box from './components/Box'
import { AppContext } from './components/AppContext'
import Forecast from './components/Forecast';
import NotFoundPage from './components/NotFoundPage'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const { datas } = useContext(AppContext);

  return (
    <Router>
      <header>
        <h1>Weather Forecast</h1>
        <p>Accurate and the best forecast app just for you, Don't worry, It's always be free</p>
      </header>

      <Switch>
        <Route path='/' exact>
          <Search />
          <div className='box-container'>
            {datas.map((data, index) =>
              <Box
                key={index}
                data={data}
              />
            )}
          </div>
        </Route>

       <Route path="/forecast/:cityId" exact component={Forecast} />
       <Route path="*"><NotFoundPage /></Route>
      </Switch>
    </Router>

  )
}

export default App;