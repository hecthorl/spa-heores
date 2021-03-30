import { Redirect, Route, Switch } from 'react-router-dom';
import DcScreen from '../components/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/MarvelScreen';
import Navbar from '../components/NavBar';
import SearchScreen from '../components/SearchScreen';

const DashboardRoutes = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Switch>
               <Route exact path="/marvel" component={MarvelScreen} />
               <Route exact path="/dc" component={DcScreen} />
               <Route exact path="/heroe/:heroeId" component={HeroScreen} />
               <Route exact path="/search" component={SearchScreen} />
               <Redirect to="/marvel" />
            </Switch>
         </div>
      </>
   );
};

export default DashboardRoutes;
