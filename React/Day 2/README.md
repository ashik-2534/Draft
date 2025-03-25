### ✅ **Task 1: Create a Custom Hook for Fetching Data (Custom Hook + Fetch + Helmet)**  

1. **Setup the Custom Hook:**  
   - Create a new file named `useFetch.js` to keep the hook reusable.  
   - Define a function starting with the prefix "use" (e.g., `useFetch`).  

2. **Input Parameters:**  
   - Accept the API URL as a parameter to fetch dynamic data.  

3. **State Management:**  
   - Use `useState` to track three pieces of information:  
     - The fetched data.  
     - Loading status (boolean).  
     - Error message (if any).  

4. **Side Effect Management:**  
   - Use `useEffect` to trigger the fetch request when the component using this hook is mounted.  

5. **Fetch Logic:**  
   - Use the `fetch` method to send a GET request to the provided URL.  
   - Parse the response as JSON.  
   - Update the state with the retrieved data.  
   - If an error occurs, capture it and update the error state.  

6. **Return Values:**  
   - Return the data, loading status, and error to the component using the hook.  

7. **Use the Hook in a Component:**  
   - Import the custom hook in a component (e.g., `UserList`).  
   - Call the hook with an API endpoint (e.g., a placeholder API for user data).  
   - Render "Loading…" while data is being fetched.  
   - Display the user data once the request is successful.  
   - Show an error message if the fetch operation fails.  

8. **Helmet Integration:**  
   - Use the `Helmet` component to dynamically change the page title.  
   - Set the title to indicate whether data is loading, loaded, or if an error occurred.  

---

### ✅ **Task 2: Build a Post Viewer (Axios + TanStack Query)**  

1. **Environment Setup:**  
   - Ensure `axios` and `@tanstack/react-query` are installed in your React project.  
   - Import `QueryClient` and `QueryClientProvider` from `react-query` and wrap your `App` component to enable query features.  

2. **Create API Service with Axios:**  
   - Define a reusable `axios` instance for API calls.  
   - Configure the base URL for all requests.  

3. **Fetch Posts Using TanStack Query:**  
   - Use the `useQuery` hook to fetch post data from an API.  
   - Provide a unique query key (e.g., `'posts'`) to identify the request.  
   - Pass a function that uses the `axios.get()` method to retrieve posts.  

4. **Handle Query States:**  
   - Check if data is loading using the `isLoading` property.  
   - Display an error message if the `isError` property is true.  
   - Render the post content if the request is successful.  

5. **Optimized Caching:**  
   - Configure caching behavior using the `staleTime` and `cacheTime` options.  
   - Set `staleTime` to control how long data is considered fresh before refetching.  

6. **Dynamic Helmet Title:**  
   - Update the page title dynamically using `Helmet`.  
   - Display "Loading Posts…" while data is loading.  
   - Change to "Post Viewer" once the posts are successfully fetched.  


