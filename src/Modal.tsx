import React, { useEffect, useState } from "react";

interface ModalProps {
  content: string;
  dismissActions?: (() => Promise<void>)[];
}

const Modal: React.FC<ModalProps> = ({ content, dismissActions = [] }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = async () => {
    // Execute dismiss actions
    for (const action of dismissActions) {
      await action();
    }
    setShow(false);
  };

  return (
    show && (
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          Close Modal
        </button>
        <div>{content}</div>
      </div>
    )
  );
};

export default Modal;
