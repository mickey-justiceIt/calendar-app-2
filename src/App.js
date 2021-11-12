import React,{useState} from 'react'
import {Switch,Route} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { routes } from './routes/routes';

const App = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("ISAUTH"),[]));
  return (
      <div>
        <Switch>
        {routes.map((route, index) =>
                            route.withAuth ? (
                                <ProtectedRoute
                                    path={route.path}
                                    key={index}
                                    component={route.component}
                                    exact
                                    isAuth={isAuth}
                                    setIsAuth={setIsAuth}
                                />
                            ) : (
                                <Route
                                    key={index}
                                    path={route.path}
                                    routes={route.exact}
                                    render={() => {
                                        const Component = route.component;
                                        return (
                                            <>
                                                <Component
                                                    isAuth={isAuth}
                                                    setIsAuth={setIsAuth}
                                                />
                                            </>
                                        );
                                    }}
                                />
                            )
                     )}
        </Switch>
      </div>
  )
}

export default App
