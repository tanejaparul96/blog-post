//read compoenent will now include edit functionality and updating current localstorage with updates
//delete implemented

import "./BlogRead.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function PoemRead() {
  const getBlogName: string = window.location.search.replace(/%20/g, " ").split("?")[1];
  // split func is jugaad to remove "?" from url please look at code"
  //replace method is also not best solution need another solution for that can't handle '
  // if we add extra space at end it can't handle that as well
  const getPoemContent = localStorage?.getItem(getBlogName);
  const imgSrc = "https://picsum.photos/200";
  console.log(getPoemContent, getBlogName);
  let navigate = useNavigate();

  const handlePoemDelete = () => {
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
              Edit
            </Link>
          </button>
          <button className="button-delete" onClick={handlePoemDelete}>
            Delete
          </button>
        </div>
        <div className="poem-content-style">{getPoemContent}</div>
      </div>
    </div>
  );
}
