import React, { useEffect, useState } from "react";

interface ToastProps {
  content: string;
  dismissActions?: (() => Promise<void>)[];
}

const Toast: React.FC<ToastProps> = ({ content, dismissActions = [] }) => {
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
      <div className="toast">
        <button className="close-button" onClick={handleClose}>
          Close Toast
        </button>
        <div>{content}</div>
      </div>
    )
  );
};

export default Toast;
