### ✅ **Task 1: Build a Complete E-Commerce Product Page (React Project Mastery)**  

1. **Project Structure Setup:**  
   - Organize folders:  
     - `components` for reusable elements (e.g., Navbar, Footer, ProductCard).  
     - `pages` for individual views (e.g., Home, ProductDetail, Cart).  
     - `services` for API-related logic (e.g., fetching products).  

2. **Product Data Fetching:**  
   - Create a service function using `axios` to fetch product data from an API.  
   - Use `useQuery` from TanStack Query to fetch, cache, and manage product data.  

3. **Product Listing Page:**  
   - Use the `useQuery` hook to get product data.  
   - Map through the product array and render a `ProductCard` component for each item.  
   - Show a loading message when the data is being fetched.  
   - Display an error message if the request fails.  

4. **ProductCard Component:**  
   - Accept props (image, title, price) to dynamically display product information.  
   - Add a "View Details" button to navigate to the product’s detail page using React Router.  

5. **Dynamic Product Detail Page:**  
   - Create a route like `/product/:id` using `Route` and `Routes`.  
   - Use the `useParams` hook to extract the product ID from the URL.  
   - Fetch the specific product’s data and display detailed information.  

6. **Cart Functionality:**  
   - Use React `useState` to track items added to the cart.  
   - Create a `CartContext` with `createContext` and `useContext` to manage cart data globally.  
   - Implement an "Add to Cart" button that updates the cart.  

7. **Cart Page:**  
   - Display a list of items added to the cart.  
   - Show the product name, quantity, and total price.  
   - Allow users to remove items or clear the cart.  

8. **Helmet for SEO Optimization:**  
   - Use `Helmet` to dynamically update the page title and description.  
   - Change the title based on the current page (e.g., "Product Detail - Item Name").  

---

### ✅ **Task 2: User Authentication Flow (React Project Mastery)**  

1. **Setup Authentication Context:**  
   - Create an `AuthContext` to store user authentication status.  
   - Use `useState` to track whether the user is logged in.  

2. **Login Page:**  
   - Create a form to collect the user's email and password.  
   - Validate the input fields (e.g., required fields and email format).  
   - Simulate a login request using a mock API call.  

3. **Protected Routes:**  
   - Implement a `PrivateRoute` component to restrict access to specific pages.  
   - Use React Router’s `Outlet` to render child components only if the user is authenticated.  

4. **Navigation Management:**  
   - Conditionally show "Login" or "Logout" links in the navbar based on authentication status.  
   - Redirect users to the login page if they attempt to access a protected route.  

