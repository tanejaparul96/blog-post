import PoemCreate from "./Components/BlogView";
import { Routes, Route, } from "react-router-dom";
import PoemRead from "./Components/BlogRead";


function App() {

  return (
  <>
  <Routes>
        <Route path="/" element={<PoemCreate />} />
        <Route path="poemview" element={<PoemRead />} />
      </Routes>
    </>
  );
}

export default App;
