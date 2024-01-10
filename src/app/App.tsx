import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { Main } from "pages";
import { classNames } from "shared/lib/helpers/classNames";
import { useTheme } from "./providers/ThemeProvider";

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
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
