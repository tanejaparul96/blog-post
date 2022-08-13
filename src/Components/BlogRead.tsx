import { useState } from "react";
import "./BlogRead.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import deleteIcon from "../images/delete-icon.png";
import editIcon from "../images/edit-new-icon.png";
import Popup from "./ConfirmationPopUp/Popup";
import { POPUP_MESSAGES } from "./Constants/Constant";

export default function PoemRead() {
  const getBlogName: string = window.location.search.replace(/%20/g, " ").split("?")[1];
  // split func is jugaad to remove "?" from url please look at code"
  //replace method is also not best solution need another solution for that can't handle '
  // if we add extra space at end it can't handle that as well
  const getPoemContent = localStorage?.getItem(getBlogName);
  const imgSrc: string = "https://picsum.photos/200";
  let navigate = useNavigate();

  const [visibility, setVisibility] = useState(false);

  const handleClosePopUp = () => {
    setVisibility(false);
  };

  const handlePoemDelete = () => {
    setVisibility(false);
    window.localStorage.removeItem(getBlogName);
    navigate("/");
  };

  const objectData: object = {
    blogName: getBlogName,
    img: imgSrc,
  };
  
  return (
    <div className="container">
      <div className="poem-view-container">
        <h2> {getBlogName}</h2>
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
        <div className="poem-content-style">{getPoemContent}</div>
      </div>
    </div>
  );
}
