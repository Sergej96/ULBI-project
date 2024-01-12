import "./styles/index.scss";
import { classNames } from "shared/lib/helpers/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import Navbar from "widgets";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>toggle Theme</button>

      <AppRouter />
    </div>
  );
};

export default App;
