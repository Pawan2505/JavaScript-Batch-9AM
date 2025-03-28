## **How to Build the Note Application**

### **Step 1: Setting Up the Project**

1. **Create Project Structure:**
   - **Folder Structure:**
     ```
     /note-application
       ├── index.html
       ├── style.css
       ├── script.js
     ```

2. **Create the HTML File (index.html):**
   - This file will be the main structure of the app.
   - You need an input field for the title of the note, a textarea for the content, and a button to add the note.
   - Create an empty `div` element where the notes will be displayed dynamically as the user adds them.

### **Step 2: Build the HTML Layout**

1. **Input Fields:**
   - Create an `<input>` element where users can type the title of their note.
   - Create a `<textarea>` element where users can write the content of their note.

2. **Buttons:**
   - Add a "Add Note" button that will trigger the process of adding a new note when clicked.

3. **Error Message:**
   - Add an empty `<div>` below the input fields to display an error message if the user tries to submit an empty note.

4. **Container for Notes:**
   - Create an empty `div` below the form where the notes will be displayed after they are added.

### **Step 3: Styling the Application (style.css)**

1. **Layout and Responsiveness:**
   - Use a container to keep everything centered on the page.
   - Make sure your layout is responsive, so it works well on mobile and desktop screens. This can be achieved with Flexbox or CSS Grid.

2. **Note Styling:**
   - Style each note to look like a card with some padding, a background color, and a border. You can also add a shadow effect for a nice look.
   - Make sure that each note has its title displayed in a bold style and separated from the content.

3. **Button Styles:**
   - Add different styles for the buttons to make them stand out (e.g., a green color for "Save," red for "Delete").

4. **Hover Effects:**
   - Add hover effects for the buttons to make them more interactive, such as changing the button's opacity or background color when hovering.

### **Step 4: Implement JavaScript Logic (script.js)**

1. **Set Up JavaScript Structure:**
   - Use the `DOMContentLoaded` event to ensure your JavaScript runs after the HTML is fully loaded.
   - Create variables to access the title input, content textarea, error div, and notes wrapper.

2. **Create Functionality for Adding Notes:**
   - Create a function that will be triggered when the user clicks the "Add Note" button.
   - In this function, you'll need to:
     - Get the title and content from the input fields.
     - Validate the input to make sure neither the title nor the content is empty. If they are empty, show an error message.
     - Create a new object to represent the note (with a title, content, and timestamp).
     - Store this note in a JavaScript array and update `localStorage` to save the notes for future page loads.
     - Create a new HTML element to display the note.

3. **Create Functionality for Editing Notes:**
   - Each note should have an "Edit" button.
   - When clicked, the "Edit" button should allow the user to edit the title and content of the note.
   - Add a "Save" button that appears only when editing, allowing the user to save the changes.

4. **Create Functionality for Deleting Notes:**
   - Each note should have a "Delete" button.
   - When clicked, confirm with the user if they really want to delete the note. If confirmed, remove it from the page and update `localStorage`.

5. **Persistent Data with Local Storage:**
   - To make the notes persist even after a page reload, use `localStorage` to save the notes.
   - On page load, check if there are any saved notes in `localStorage`. If there are, display them on the page.

### **Step 5: Working with Local Storage**

1. **Save Notes to Local Storage:**
   - Each time a new note is added or an existing one is modified, store the updated array of notes in `localStorage` using `localStorage.setItem()`.
   - Make sure to store the data in a format that can be easily retrieved (such as JSON).

2. **Retrieve Notes from Local Storage:**
   - On page load, check if there are any notes saved in `localStorage`. If yes, retrieve and display them.

3. **Update Notes in Local Storage:**
   - When notes are edited or deleted, update the `localStorage` accordingly to reflect these changes.

### **Step 6: Testing and Debugging**

   - Make sure the following features work:
     - Adding new notes.
     - Editing notes.
     - Deleting notes.
     - Notes persist even after refreshing the page.
     - Display proper error messages when the user tries to submit an empty note.
