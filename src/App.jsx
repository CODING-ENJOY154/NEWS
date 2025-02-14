// App.jsx
import { Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { router } from "./config/config";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {router.map((path) => (
          <Route
            exact
            key={uuidv4()}
            path={path.path}
            element={
              <News
                key={path.key}
                newscategory={path.category}
                country={path.country}
              />
            }
          />
        ))}
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
