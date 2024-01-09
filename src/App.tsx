import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Main from "./pages/Main/Main";
import { Link } from "react-router-dom";
import React, { Suspense } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

const Counter = React.lazy(() => import("./components/Counter"));

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/counter">Counter</Link>
      <button onClick={toggleTheme}>toggle Theme</button>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
