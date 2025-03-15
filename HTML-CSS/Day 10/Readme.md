### ✅ **Task 1: Responsive Navigation Bar (Flex + Position)**  

1. **Navigation Container:**  
   - Create a parent container to hold the navigation elements.  
   - Apply `display: flex;` to this container, which allows items inside to align horizontally.  
   - Use `justify-content: space-between;` to place the logo on the left and links on the right, creating even spacing.  
   - Set `position: fixed;` to keep the navbar at the top while scrolling.  
   - Apply `top: 0; left: 0;` to pin the navbar to the upper-left corner.  
   - Add `width: 100%;` to stretch the navbar across the entire screen width.  
   - Use `padding` to create inner space and make the navbar taller.  

2. **Navigation Links:**  
   - Create separate link items for "Home," "About," and "Contact."  
   - Apply `margin` between links to prevent them from touching.  
   - Use `text-decoration: none;` to remove the underline from links.  

---

### ✅ **Task 2: Card Layout (Flex + Font)**  

1. **Card Container:**  
   - Create a parent container to hold multiple cards.  
   - Apply `display: flex;` to arrange the cards in a row.  
   - Use `flex-wrap: wrap;` to allow the cards to move to the next line on smaller screens.  
   - Add `gap` or `margin` to create space between the cards.  

2. **Individual Cards:**  
   - Each card should have an image, a heading, and a paragraph.  
   - Use `flex: 1;` to make cards flexible and evenly distributed.  
   - Apply `padding` inside the card for inner spacing.  

3. **Font Styling:**  
   - Use `font-family` to control the typeface.  
   - Apply `font-size` to adjust the size of headings and descriptions.  
   - Set `font-weight` to make text bold or regular.  

---

### ✅ **Task 3: Sticky Footer (Position + Flex)**  

1. **Page Layout:**  
   - Structure your page with a header, content section, and footer.  
   - Apply `display: flex;` and `flex-direction: column;` on the body to stack these sections vertically.  

2. **Content Section:**  
   - Use `flex-grow: 1;` to make the main content area expand and push the footer to the bottom.  

3. **Footer Styling:**  
   - Set `position: sticky;` to make the footer stay in place when scrolling.  
   - Use `bottom: 0;` to pin it to the bottom of the viewport.  
   - Apply `padding` for inner spacing and better visibility.  

---

### ✅ **Task 4: GitHub Practice**  

1. **Initialize a Repository:**  
   - Navigate to your project folder using the terminal.  
   - Run `git init` to turn the folder into a Git repository.  

2. **Connect to GitHub:**  
   - Create a new repository on GitHub.  
   - Copy the repository URL and use `git remote add origin <URL>` to link your local repository to GitHub.  

3. **Stage and Commit Changes:**  
   - Use `git add .` to stage all changes.  
   - Commit your work with `git commit -m "your message"` to record the changes with a meaningful message.  

4. **Push to GitHub:**  
   - Upload your code using `git push origin main` (or `master` depending on your branch).  
