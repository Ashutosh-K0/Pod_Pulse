import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const styles = {
    padding: "6rem 0 0 26rem",
    backgroundColor: "#181818",
    color: "#ffffff",
    minHeight: "calc(100vh - 6rem)",
  };

  return (
    <Route
      {...rest}
      element={
        user ? (
          <div style={styles}>
            <Component />
          </div>
        ) : (
          <Navigate to="/login" replace state={{ from: rest.path }} />
        )
      }
    />
  );
};

export default PrivateRoute;
