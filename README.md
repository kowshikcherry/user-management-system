
# User Management System

This project is a **User Management System** built with **React.js**, designed to perform CRUD (Create, Read, Update, Delete) operations on user data. The application is organized into modular components and pages, making it easy to navigate and maintain.

---

## Getting Started

Follow the steps below to set up and run the application on your local machine.

### Prerequisites

Ensure you have the following installed:

1. **Node.js** (v16 or higher recommended)  
   [Download Node.js](https://nodejs.org/)
2. **npm** (comes with Node.js)  
   Verify installation by running:
   ```bash
   node -v
   npm -v
   ```

---

## Project Setup

### 1. Initialize the React Application

Use the following command to create a React application:

```bash
npx create-react-app user-management-system
```

Navigate to the project directory:

```bash
cd user-management-system
```

### 2. Install Dependencies

Install the required libraries:

```bash
npm install axios react-router-dom
```

- **Axios**: For handling HTTP requests.
- **React Router DOM**: For managing navigation and routing.

---

## Features

- **User List**: View all users in a structured layout.
- **Add User**: Create a new user and save their information.
- **Edit User**: Update the details of an existing user.
- **Delete User**: Remove a user from the list.

---

## Running the Application

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Folder Structure

The project follows a well-structured directory organization for scalability and maintainability:

```plaintext
src/
├── components/
│   ├── Navbar.css
│   ├── Navbar.js
│   ├── UserCard.css
│   ├── UserCard.js
│   ├── UserForm.css
│   ├── UserForm.js
│   ├── UserList.css
│   └── UserList.js
├── pages/
│   ├── Dashboard.css
│   ├── Dashboard.js
│   ├── Home.css
│   ├── Home.js
│   └── UserManagement.js
├── services/
│   └── userService.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
├── logo.svg
├── reportWebVitals.js
├── setupTests.js
└── styles.css
```

---

## Code Details

### Components

- **Navbar.js**: Contains the navigation bar for the application.
- **UserCard.js**: Displays individual user details in a card layout.
- **UserForm.js**: Form component for adding and editing user details.
- **UserList.js**: Renders the list of all users.

### Pages

- **Dashboard.js**: Displays buttons for 404 page.
- **Home.js**: The landing page of the application.
- **UserManagement.js**: Manages the CRUD operations for users.

### Services

- **userService.js**: Handles API requests for user data.  
  Example:
  ```javascript
  import axios from 'axios';

  const API_URL = 'http://your-api-endpoint.com';

  export const getUsers = () => axios.get(`${API_URL}/users`);
  export const addUser = (user) => axios.post(`${API_URL}/users`, user);
  export const updateUser = (id, user) => axios.put(`${API_URL}/users/${id}`, user);
  export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
  ```

---

## Styling

- **CSS Modules**: Each component has a corresponding CSS file for modular styles.
- **Global Styles**: Shared styles are included in `styles.css` and `index.css`.

---

## Troubleshooting

1. Ensure all dependencies are installed:
   ```bash
   npm install
   ```
2. Restart the development server:
   ```bash
   npm start
   ```
3. If you encounter errors, check the console logs for details.

---
