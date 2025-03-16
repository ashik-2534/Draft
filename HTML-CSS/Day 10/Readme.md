### ✅ **Task 1: Floating Notification Box (Position & Before/After)**  

1. **Create a Notification Container:**  
   - Use a `<div>` to hold the notification content.  
   - Apply `position: absolute` to this container so it can be placed anywhere relative to its parent.  
   - Set `top: 10px; right: 10px;` to place it in the top-right corner.  

2. **Style the Notification Box:**  
   - Use padding to create space inside the box.  
   - Add a background color and border-radius to make it visually appealing.  

3. **Add a Small Badge Using `::before` or `::after`:**  
   - Use the `::before` pseudo-element to create a small circular badge.  
   - Set `content: ""` to make it appear.  
   - Apply `position: absolute; top: -5px; right: -5px;` to place it slightly outside the notification box.  

---

### ✅ **Task 2: Profile Layout with Flexbox & Positioning**  

1. **Create a Profile Container:**  
   - Wrap the profile details inside a `<div>`.  
   - Use `display: flex` to arrange the image and text in a row.  

2. **Position the Profile Image:**  
   - Set `width` and `height` to ensure it fits well.  
   - Apply `border-radius` for rounded edges.  

3. **Align Text Details:**  
   - Use `flex-grow: 1` to allow the text to fill the available space.  
   - Adjust padding to create spacing between the image and text.  

4. **Add an Overlay Button Using `position: absolute`:**  
   - Inside the profile container, add a button.  
   - Apply `position: absolute` and `bottom: 10px; right: 10px;` to place it at the bottom-right of the profile.  
   - Use `position: relative` on the parent container to ensure the button is positioned relative to it.  

---

### ✅ **Task 3: Custom Button with Before/After Effects**  

1. **Style the Button Base:**  
   - Add a background color and padding to create a solid button shape.  
   - Set `border: none` and `cursor: pointer` for better interaction.  

2. **Create an Underline Effect Using `::before`:**  
   - Use `::before` to generate a thin line below the button.  
   - Apply `position: absolute; bottom: 0; left: 0;` to place it correctly.  
   - Set `width: 100%` to span across the button.  

3. **Add a Hover Effect with `::after`:**  
   - Use `::after` to create a shadow or glow effect.  
   - Set `content: ""` and apply a `box-shadow` on hover.  

---

### ✅ **Task 4: Card Grid Layout (Flexbox & Font Family)**  

1. **Create a Card Container:**  
   - Wrap all cards inside a `div` with `display: flex; flex-wrap: wrap;` to align them in a row.  

2. **Style Individual Cards:**  
   - Apply `flex: 1 1 300px;` to ensure they resize properly.  
   - Use `border-radius` for rounded edges.  

3. **Apply Different `font-family` Styles:**  
   - Use one `font-family` for the heading and another for the description.  

4. **Position Card Details Using `relative` and `absolute`:**  
   - Set `position: relative` on the card.  
   - Place a floating label (`absolute`) inside the card with `top: 10px; left: 10px;`.  

---

### ✅ **Task 5: Sticky Navigation Bar (Positioning & Flexbox)**  

1. **Create a Navigation Container:**  
   - Wrap all menu items inside a `<nav>` tag.  
   - Use `display: flex; justify-content: space-between;` to distribute the links evenly.  

2. **Make It Stick to the Top:**  
   - Apply `position: fixed; top: 0; width: 100%;` to keep it at the top of the page.  
   - Add `background-color` and padding for better visibility.  

3. **Style Links and Hover Effects:**  
   - Use `text-decoration: none;` to remove underlines.  
   - Apply `::before` and `::after` to add hover effects like an animated underline.  
