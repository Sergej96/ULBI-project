import { Main } from "pages";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <div className="page-wrapper">
        <Routes>
          {routeConfig.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Main />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default AppRouter;
