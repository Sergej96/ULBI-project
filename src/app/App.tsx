import "./styles/index.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/helpers/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>toggle Theme</button>

      <AppRouter />
    </div>
  );
};

export default App;
