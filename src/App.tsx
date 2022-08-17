import { Routes, Route } from "react-router-dom";
import PoemRead from "./Components/BlogView/BlogRead";
import BlogEdit from "./Components/BlogEdit/BlogEdit";
import Homepage from "./Components/Homepage/Homepage";
import PoemCreate from "./Components/BlogCreation/BlogCreate";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create" element={<PoemCreate/>}/>
        <Route path="poemview" element={<PoemRead />} />
        <Route path="blogEdit" element={<BlogEdit />} />
      </Routes>
    </>
  );
}

export default App;
