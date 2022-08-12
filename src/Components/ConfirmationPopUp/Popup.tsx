import React, { useState, useEffect } from "react";
import "./PopUpStyles.css";

interface PopupProps {
  show: boolean;
  message: string;
  handlePoem: Function;
  onClose: Function;
}
const Popup: React.FC<PopupProps> = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="container-popup">
        <div className="content-style">{props.message}</div>
        <div className="button-container">
          <button className="button-confirm" onClick={() => props.handlePoem()}>
            Confirm
          </button>
          <button className="button-cancel" onClick={() => closeHandler()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Popup;
