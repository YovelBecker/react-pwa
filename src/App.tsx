import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading'
const About = lazy(() => import('./views/About'))
const Home = lazy(() => import('./views/Home'))
const Header = lazy(() => import('./components/Header'))

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={Loading} >
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;