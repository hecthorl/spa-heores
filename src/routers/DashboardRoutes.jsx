import { Redirect, Route, Switch } from 'react-router-dom';
import DcScreen from '../components/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/MarvelScreen';
import Navbar from '../components/NavBar';

const DashboardRoutes = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Switch>
               <Route exact path="/marvel" component={MarvelScreen} />
               <Route exact path="/dc" component={DcScreen} />
               <Route exact path="/heroe/:heroeId" component={HeroScreen} />
               <Redirect to="/marvel" />
            </Switch>
         </div>
      </>
   );
};

export default DashboardRoutes;
