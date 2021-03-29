import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NotFound from '../components/404';
import LoginScreen from '../components/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route component={DashboardRoutes} />
         </Switch>
      </Router>
   );
};

export default AppRouter;
