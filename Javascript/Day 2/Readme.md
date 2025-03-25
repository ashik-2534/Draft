### ✅ **Task 1: Interactive To-Do List (DOM + Events)**  

1. **HTML Structure Access:**  
   - Select the input field where the user types a task.  
   - Access the "Add Task" button to capture user actions.  
   - Identify the list container where tasks will be displayed.  

2. **Event Listener Setup:**  
   - Attach a "click" event listener to the "Add Task" button to trigger task creation.  

3. **Task Creation Process:**  
   - When the user clicks the button, get the value from the input field.  
   - If the input is not empty, create a new list item (`li` element).  
   - Add the task content to the list item.  

4. **Dynamic Element Addition:**  
   - Append the new list item to the task list container.  

5. **Task Deletion:**  
   - Create a "Delete" button for each task.  
   - Add a "click" event listener to this button to remove the corresponding task when clicked.  

6. **Input Clearing:**  
   - Clear the input field after adding a task to prepare for the next input.  

---

### ✅ **Task 2: Form Validation (JS DOM + Events)**  

1. **Access Form Elements:**  
   - Select the form and the input fields (e.g., name, email, password).  
   - Access the submit button to control form submission.  

2. **Event Listener Setup:**  
   - Attach a "submit" event listener to the form to trigger validation.  
   - Use `preventDefault()` to stop form submission if validation fails.  

3. **Validation Rules:**  
   - For the name field, check if it is empty or too short.  
   - For the email field, use a regular expression to verify the email format.  
   - For the password, check its length (e.g., at least 8 characters).  

4. **Error Message Handling:**  
   - If a validation error occurs, display an error message below the respective input.  
   - If all inputs are valid, allow form submission.  

---

### ✅ **Task 3: Image Carousel (DOM + Events)**  

1. **Access Image Elements:**  
   - Identify the image container holding multiple images.  
   - Select the "Next" and "Previous" buttons for navigation.  

2. **Event Listener Setup:**  
   - Add "click" event listeners to the "Next" and "Previous" buttons.  

3. **Image Navigation Logic:**  
   - Track the current image index.  
   - When "Next" is clicked, increase the index and show the next image.  
   - When "Previous" is clicked, decrease the index and show the previous image.  
   - If the user reaches the last image, loop back to the first image and vice versa.  

4. **Visibility Management:**  
   - Hide all images by default.  
   - Only display the image corresponding to the current index.  

