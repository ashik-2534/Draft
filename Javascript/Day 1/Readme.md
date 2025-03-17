### ✅ **Task 1: User Input Validation (Variables, Data Types, Conditional Statements)**  

1. **Prompt the user for input:**  
   - Display a message asking the user to enter their age.  
   - Store the entered value in a variable.  

2. **Convert the input to a number:**  
   - Ensure the input is treated as a number by converting it.  
   - If the user enters text instead of a number, handle this case properly.  

3. **Check if the number is valid:**  
   - If the number is negative or zero, display an error message.  
   - Stop further execution if the value is invalid.  

4. **Use conditional statements to determine age category:**  
   - If the number is less than 18, print "You are underage."  
   - If the number is 18 or above, print "You are allowed to proceed."  

---

### ✅ **Task 2: Simple Calculator (Operators, Conditional Statements, Switch Statements)**  

1. **Prompt the user for two numbers:**  
   - Ask the user to enter two values.  
   - Convert them into numbers to perform mathematical operations.  

2. **Prompt the user for an operator:**  
   - Ask the user to input an operator (`+`, `-`, `*`, `/`).  
   - Store this operator in a variable.  

3. **Use a switch statement to determine the operation:**  
   - Depending on the operator, perform the respective mathematical operation.  
   - If the operator is `+`, add the two numbers and display the result.  
   - If the operator is `-`, subtract the second number from the first and display the result.  
   - If the operator is `*`, multiply both numbers and display the result.  
   - If the operator is `/`, divide the first number by the second and display the result.  

4. **Handle invalid inputs:**  
   - If the user enters an invalid operator, display an error message.  

---

### ✅ **Task 3: Even and Odd Numbers (Loops, If-Else, Break & Continue)**  

1. **Use a `for` loop to iterate numbers from 1 to 20:**  
   - Start the loop with an initial value of 1.  
   - Define the condition to run until 20.  
   - Increment the value by 1 in each iteration.  

2. **Check if the number is even or odd using `if-else`:**  
   - If the number is divisible by 2, print it as even.  
   - Otherwise, print it as odd.  

3. **Use `continue` to skip multiples of 5:**  
   - If the number is divisible by 5, use `continue` to skip printing it.  

---

### ✅ **Task 4: Password Checker (While Loop, Break Statement)**  

1. **Define a fixed password:**  
   - Store the correct password in a variable.  

2. **Set a loop to keep asking for input:**  
   - Use a `while` loop to repeatedly ask the user for a password.  

3. **Compare the user input with the stored password:**  
   - If the entered password matches, print "Access Granted" and break the loop.  

4. **Handle incorrect attempts:**  
   - If the password is incorrect, inform the user.  
   - Allow the user to enter the password again.  

5. **Limit the number of attempts:**  
   - Keep track of the number of wrong attempts.  
   - If the user enters the wrong password three times, print "Access Denied" and exit the loop.  

---

### ✅ **Task 5: Countdown Timer (Do-While Loop, Break Statement)**  

1. **Initialize a countdown starting at 10:**  
   - Store the starting value in a variable.  

2. **Use a `do-while` loop to decrease the number:**  
   - Print the current number in each iteration.  
   - Decrease the number by 1 after each print.  

3. **Stop the countdown at 3 using `break`:**  
   - If the number reaches 3, stop the loop early using `break`.  

4. **Display a message after stopping:**  
   - After exiting the loop, print "Countdown stopped early!"  