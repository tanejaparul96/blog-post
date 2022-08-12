import PoemCreate from "./Components/BlogView";
import { Routes, Route } from "react-router-dom";
import PoemRead from "./Components/BlogRead";
import BlogEdit from "./Components/BlogEdit";
// import Popup from "./Components/ConfirmationPopUp/Popup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PoemCreate />} />
        <Route path="poemview" element={<PoemRead />} />
        <Route path="blogEdit" element={<BlogEdit />} />
      </Routes>
    </>
  );
}

export default App;
