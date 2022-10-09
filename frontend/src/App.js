import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/HomePage";
import Login from "./pages/loginPage";
import Register from "./pages/RegisterPage";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Header />
          <Switch>
            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;