import { useState } from "react";
import "./BlogRead.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import deleteIcon from "../../images/delete-icon.png";
import editIcon from "../../images/edit-new-icon.png";
import Popup from "../ConfirmationPopUp/Popup";
import { POPUP_MESSAGES } from "../Constants/Constant";
import { useSelector } from "react-redux";
import { deleteBlogEntry } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

function PoemRead() {
  const [visibility, setVisibility] = useState(false);
  const getBlogName: string = window.location.search.replace(/%20/g, " ").split("?")[1];
  const imgSrc: string = "https://picsum.photos/200";
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const blogObject = useSelector((state: any) => state.blogs);
  const item = blogObject.find((item: { id: string }) => item.id === getBlogName);

  const handleClosePopUp = () => {
    setVisibility(false);
  };

  const handlePoemDelete = () => {
    setVisibility(false);
    console.log(item.id);
    dispatch(deleteBlogEntry(item.id));
    navigate("/");
  };

  const objectData: object = {
    blogName: getBlogName,
    img: imgSrc,
  };

  return (
    <div className="container">
      <div className="poem-view-container">
        <h2> {item.id}</h2>
        <div className="container-img">
          <img src={imgSrc} alt={getBlogName} />
        </div>
        <div className="button-container">
          <button className="button-edit">
            <Link to="/blogEdit" state={{ data: objectData }}>
              <img src={editIcon} alt="Edit Blog" />
            </Link>
          </button>
          <button
            className="button-delete"
            onClick={() => setVisibility((prevState) => !prevState)}
          >
            <img src={deleteIcon} alt="Delete Blog" />
          </button>
          <Popup
            show={visibility}
            message={POPUP_MESSAGES.CONFIRMATION_MESSAGE}
            handlePoem={() => handlePoemDelete()}
            onClose={handleClosePopUp}
          />
        </div>
        <div className="poem-content-style">{item.blogContent}</div>
      </div>
    </div>
  );
}

export default PoemRead;
