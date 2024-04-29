// App.tsx
import React from "react";
import NotificationCenter from "./NotificationCenter";
import { useNotificationCenter } from "./NotificationCenter";

const App: React.FC = () => {
  const { addNotification } = useNotificationCenter();

  const handlePromiseDismiss = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const handleModalButtonClick = async () => {
    console.log("Modal button clicked");
    return Promise.resolve();
  };

  const handleToastButtonClick = () => {
    console.log("Toast button clicked");
    return Promise.resolve();
  };

  return (
    <NotificationCenter>
      <button
        onClick={() =>
          addNotification({
            id: "modal1",
            content: "Modal content",
            type: "modal",
            dismissActions: [handlePromiseDismiss, handleModalButtonClick],
          })
        }
      >
        Show Modal
      </button>
      <button
        onClick={() =>
          addNotification({
            id: "toast1",
            content: "Toast content",
            type: "toast",
            dismissActions: [handleToastButtonClick],
          })
        }
      >
        Show Toast
      </button>
    </NotificationCenter>
  );
};

export default App;
