import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        {
          <Routes>
            <Route></Route>
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
