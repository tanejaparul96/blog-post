//create poem

import React, { useState } from "react";
import "./Blog.css";
import { useNavigate } from "react-router";
import { PLACEHOLDER_MESSAGES } from "../Constants/Constant";
import { setBlogCreated } from "../../Redux/Actions/Actions";
import { useDispatch } from "react-redux";

function PoemView() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSubmit = () => {
    let blogContent = {
      id: title,
      blogContent: text,
    };
    dispatch(setBlogCreated(blogContent));
    navigate({
      pathname: "/poemview",
      search: `?${title}`,
    });
  };

  return (
    <div className="container">
      <h2>Create a blog:</h2>
      <div className="input-container">
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder={PLACEHOLDER_MESSAGES.ENTER_TITLE}
        />
        <textarea
          onChange={(event) => setText(event.target.value)}
          defaultValue={text}
          placeholder={PLACEHOLDER_MESSAGES.ENTER_TEXT}
        />
      </div>
      <div className="submit-poem">
        <button type="submit" onClick={handleSubmit} disabled={title && text !== "" ? false : true}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default PoemView;
