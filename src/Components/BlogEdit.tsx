import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlogRead.css";
import Popup from "./ConfirmationPopUp/Popup";

function BlogEdit() {
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const blogName: string = location.state.data.blogName;
  const blogData: any = localStorage.getItem(blogName);
  const [text, setText] = useState(blogData);
  const [visibility, setVisibility] = useState(false);
  console.log(text);
  const handleSavingChanges = () => {
    localStorage.setItem(blogName, text);
    navigate({
      pathname: "/poemview",
      search: `?${blogName}`,
    });
  };
  const handleDiscardChange = () => {
    setVisibility(false);
    const oldContent = localStorage.getItem(blogName);
    setText(oldContent);
  };
  const handleClosePopUp = () => {
    setVisibility(false);
  };
  return (
    <div>
      <div className="poem-view-container">
        <h2> {blogName}</h2>
        <div className="container-img">
          <img src={location.state.data.img} alt={blogName} />
        </div>
        <div className="poem-content-style">
          <textarea
            onChange={(event) => setText(event.target.value)}
            value={text}
            placeholder={"Enter text here"}
            style={{ height: "250px" }}
          />
        </div>
        <div className="button-container">
          <button className="button-edit" onClick={handleSavingChanges}>
            Save
          </button>
          <button className="button-delete" onClick={() => setVisibility(!visibility)}>
            Discard Changes
            <Popup
              show={visibility}
              message={"Are you sure you want to discard new added changes"}
              handlePoem={() => handleDiscardChange()}
              onClose={handleClosePopUp}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
export default BlogEdit;
