**Documentation: Notification Component**

---

### Component Reusability
The `NotificationCenter` component provides a reusable abstraction for managing notifications within a React application. It encapsulates the logic for displaying toast and modal notifications, allowing any part of the app to dispatch notifications.

### Component Composability
This component is designed to be easily composed with other components in a React application. It follows the principles of composition by providing a clean API for adding and managing notifications, while allowing the rest of the application to focus on its specific responsibilities.

### Tradeoffs
The `NotificationCenter` component abstracts away the complexity of managing notifications, providing a simple interface for adding and dismissing notifications. However, it does not handle any styling or accessibility features, which would need to be implemented separately.

### React Render System
The `NotificationCenter` component leverages React's render system to efficiently update the UI when notifications are added or dismissed. It uses React's state management to track the list of active notifications and re-renders when changes occur.

### Core React Hooks
This component utilizes the `useState` hook to manage the state of active notifications. It also uses the `useEffect` hook to handle side effects such as adding and removing event listeners for dismissing notifications.

### Promises
Promises are used in conjunction with the `dismissActions` property of notifications to handle asynchronous dismissal actions. These promises ensure that notifications are only dismissed after the specified actions have been completed.

### JavaScript Event Loop
The `NotificationCenter` component leverages JavaScript's event loop to handle asynchronous operations such as dismissing notifications after a certain delay. This ensures that the UI remains responsive even when performing background tasks.

### Core Web APIs
The `NotificationCenter` component does not directly interact with any core web APIs. However, it may utilize DOM APIs indirectly for adding event listeners or manipulating the DOM to display notifications.

### Correctness
The `NotificationCenter` component is designed to be correct and reliable, handling various scenarios such as adding, dismissing, and updating notifications gracefully. It has been tested to ensure proper functionality in different usage scenarios.

---

**Documentation: App Component**

---

### Component Reusability
The `App` component serves as the entry point of the application and demonstrates the usage of the `NotificationCenter` component. It can be reused across different parts of the application to showcase how notifications are added and managed.

### Component Composability
The `App` component is composed of buttons that trigger the display of modal and toast notifications using the `NotificationCenter` component. It demonstrates how different components can work together to create a cohesive user interface.

### Tradeoffs
The `App` component focuses on functionality rather than styling, allowing developers to easily modify and customize the appearance of notifications to fit the design of their application. However, additional styling may be required for production use.

### React Render System
The `App` component leverages React's render system to update the UI when buttons are clicked and notifications are added or dismissed. It re-renders components based on changes in state or props, ensuring a responsive user interface.

### Core React Hooks
The `App` component uses the `useState` hook to manage local state for handling notification dismissal actions. It also utilizes the `useEffect` hook to perform side effects such as logging and asynchronous operations.

### Promises
Promises are used in the `App` component to handle asynchronous dismissal actions for notifications. Functions passed as dismissal actions return promises, ensuring that notifications are dismissed only after the specified actions have completed.

### JavaScript Event Loop
The `App` component interacts with the JavaScript event loop when handling asynchronous operations such as setting timeouts for dismissing notifications. This ensures that the UI remains responsive while waiting for asynchronous tasks to complete.

### Core Web APIs
The `App` component does not directly interact with any core web APIs other than those provided by React. It relies on React's event system and state management to handle user interactions and update the UI accordingly.

### Correctness
The `App` component is designed to be correct and reliable, demonstrating how notifications can be added and managed within a React application. It has been tested to ensure proper functionality and error handling in different scenarios.