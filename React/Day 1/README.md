### ✅ **Task 1: Build a Multi-Page Website (React Router + Components + Styling)**  

1. **Project Setup:**  
   - Ensure the React project is initialized using `create-react-app` or `vite`.  
   - Verify that `react-router-dom` is installed to manage page navigation.  

2. **Folder Structure:**  
   - Organize the project by creating a `components` folder for reusable elements.  
   - Create a `pages` folder for individual page components (e.g., Home, About, Contact).  

3. **Main Component (App):**  
   - Import `BrowserRouter` to enable React Router in the application.  
   - Wrap the entire application inside the `BrowserRouter` component to manage routes.  

4. **Navigation Bar Component:**  
   - Create a separate `Navbar` component to hold navigation links.  
   - Use the `Link` component from `react-router-dom` for navigation instead of anchor (`<a>`) tags.  
   - Import and display the `Navbar` component inside the `App` component.  

5. **Page Components:**  
   - Create `Home`, `About`, and `Contact` components with simple content.  
   - Ensure each component returns a unique message to differentiate pages.  

6. **Route Configuration:**  
   - Import the `Route` and `Routes` components from `react-router-dom`.  
   - Inside the `App` component, define a `Routes` block to hold all route definitions.  
   - Use the `Route` component to map each path (`/`, `/about`, `/contact`) to its corresponding component.  

7. **Styling the Application:**  
   - Use `className` to apply CSS classes for styling instead of `class`.  
   - Create a dedicated CSS file for each component to maintain modular styles.  
   - Apply basic styling to the navigation bar (e.g., background color, padding, active link highlight).  

---

### ✅ **Task 2: Dynamic User Dashboard (Components + React Router)**  

1. **Dynamic Routing Setup:**  
   - Set up a dynamic route (`/user/:id`) to display user-specific content.  
   - Use the `useParams` hook from `react-router-dom` to access the dynamic `id` value.  

2. **User List Component:**  
   - Create a `UserList` component displaying several user names.  
   - Use the `Link` component to generate dynamic links based on user IDs.  

3. **User Profile Component:**  
   - Create a `UserProfile` component to display personalized content.  
   - Extract the user ID from the URL using the `useParams` hook.  
   - Display a welcome message based on the retrieved user ID.  

4. **Route Setup:**  
   - In the `App` component, define a dynamic route (`/user/:id`) that points to the `UserProfile` component.  
   - Ensure the `UserList` component is accessible from a specific path (e.g., `/users`).  

5. **Navigation Flow:**  
   - Users should navigate from the user list to the dynamic profile by clicking on their names.  
