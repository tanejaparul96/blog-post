import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../BlogView/BlogRead.css";
import Popup from "../ConfirmationPopUp/Popup";
import { POPUP_MESSAGES, PLACEHOLDER_MESSAGES } from "../Constants/Constant";
import { useSelector, useDispatch } from "react-redux";
import { setUpdateBlog } from "../../Redux/Actions/Actions";
import Header  from "../Homepage/Header";


function BlogEdit() {
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const dispatch = useDispatch();
  const blogName: string = location.state.data.blogName;
  const blogObjectArray = useSelector((state: any) => state.blogs) || "";
  const blogObject = blogObjectArray.find(
    (item: { id: string }) => item.id === location.state.data.blogName,
  );
  const [text, setText] = useState(blogObject.blogContent);
  const [visibility, setVisibility] = useState(false);
  const handleSavingChanges = () => {
    let blogContent = {
      id: blogObject.id,
      blogContent: text,
    };
    dispatch(setUpdateBlog(blogContent));
    navigate({
      pathname: "/poemview",
      search: `?${blogObject?.id}`,
    });
  };
  const handleDiscardChange = () => {
    setVisibility(false);
    setText(blogObject.blogContent);
  };
  const handleClosePopUp = () => {
    setVisibility(false);
  };
  return (
    <div>
      <div className="poem-view-container">
        <Header/>
        <h2> {blogObject.id}</h2>
        <div className="container-img">
          <img src={location.state.data.img} alt={blogName} />
        </div>
        <div className="poem-content-style">
          <textarea
            onChange={(event) => setText(event.target.value)}
            value={text}
            placeholder={PLACEHOLDER_MESSAGES.ENTER_TEXT}
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
              message={POPUP_MESSAGES.DISCARD_CHANGES_MESSAGE}
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
