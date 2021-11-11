
import React from "react";
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({
     isAuth,
     setIsAuth,
     component: Component, ...rest
}) => {
    return (
        <Route
            {...rest}
            render={() =>
              isAuth ? (
                    <Component
                        isAuth={isAuth}
                        setIsAuth={setIsAuth}
                    /> ) : (
                      <Redirect to={'/login'}/>
              )
            }
        />
    );
};

export default ProtectedRoute;