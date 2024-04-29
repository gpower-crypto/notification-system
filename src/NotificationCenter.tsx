// NotificationCenter.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import Modal from "./Modal";
import Toast from "./Toast";

interface Notification {
  id: string;
  content: string;
  type: "modal" | "toast";
  dismissActions?: (() => Promise<void>)[];
}

interface NotificationCenterContextType {
  addNotification: (notification: Notification) => void;
}

const NotificationCenterContext = createContext<NotificationCenterContextType>(
  {} as NotificationCenterContextType
);

export const useNotificationCenter = () =>
  useContext(NotificationCenterContext);

interface NotificationCenterProps {
  children: ReactNode;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Notification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      notification,
    ]);
  };

  return (
    <NotificationCenterContext.Provider value={{ addNotification }}>
      {children}
      {notifications.map((notification) =>
        notification.type === "modal" ? (
          <Modal key={notification.id} {...notification} />
        ) : (
          <Toast key={notification.id} {...notification} />
        )
      )}
    </NotificationCenterContext.Provider>
  );
};

export default NotificationCenter;
