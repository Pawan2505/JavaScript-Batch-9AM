### Note Application Project

---
This project is a **Note Application** built using **HTML**, **CSS**, and **JavaScript**. It allows users to create, edit, and delete notes that are stored in the browser's `localStorage`. The application features a clean and simple user interface with a modern design, leveraging **Bootstrap** for styling.

The primary functionality includes:
- Adding new notes
- Editing existing notes
- Deleting notes
- Storing notes persistently in `localStorage`
- Providing error handling and form validation

---

### Technologies Used
- **HTML5**: Used for structuring the content and defining the user interface elements.
- **CSS3**: Used for styling the application, including layout, fonts, and interactive effects.
- **JavaScript**: Used for dynamic behavior, such as adding, editing, and deleting notes.
- **Bootstrap 5**: A CSS framework for responsive design, providing ready-to-use components like buttons, input fields, and layout utilities.
- **localStorage**: For saving and persisting notes in the user's browser, allowing the notes to remain even after page reloads.

---

### Project Structure
```
/Note-App
  ├── index.html          # Main HTML file
  ├── style.css           # CSS for styling the application
  └── script.js           # JavaScript for functionality
```

---

### HTML Structure
The HTML file (`index.html`) contains the main structure of the application. Below is a summary of the key sections:

1. **Meta Tags and Bootstrap Links:**
   - Includes metadata for responsive design and character encoding.
   - External links to Bootstrap CSS and custom CSS files.

2. **Main Content (Container):**
   - A `container` div to wrap the note creation form and notes display area.
   - **Note creation form**: Contains an input for the title, a textarea for the content, and an error display element.
   - **Notes Wrapper**: An empty div (`#notes-wrapper`) where the created notes will appear.

3. **External JavaScript:**
   - References `script.js` to handle the interactive functionality of the app.

---

### CSS Styling
The CSS file (`style.css`) is responsible for the visual design of the application, including layout, colors, and hover effects. Below are some key points:

- **General Layout**:
  - The notes are displayed in a vertical list inside `#notes-wrapper` with space between them using `flex-direction: column` and `gap: 32px`.
  
- **Notes Styling**:
  - Each note has a white background, rounded corners, and padding.
  - The title of the note is styled to be bold and has a light background color for contrast.
  - The note date is aligned to the right and displayed at the bottom of the note.

- **Buttons (Edit, Save, Delete)**:
  - These buttons are hidden by default and only appear when the user hovers over a note.
  - Each button has its own color:
    - **Delete**: Red (`note-delete`)
    - **Edit**: Green (`note-edit`)
    - **Save**: Blue (`note-save`)

- **Error Handling**:
  - The error message (if the note title or content is empty) is styled in **red**.

---

### JavaScript Functions
The JavaScript file (`script.js`) is where the main functionality of the application resides. Here's a breakdown of each key function:

1. **`addNote()`**:
   - Validates the input fields (title and content).
   - Creates a unique ID for each note using the current timestamp.
   - Stores the note as an object in the `notesData` array.
   - Saves the array of notes to `localStorage` as a string (JSON format).
   - Calls `createNote()` to dynamically render the new note on the screen.

2. **`createNote(uid, title, text, date)`**:
   - Creates a new note element in the DOM.
   - Adds the title, text, and date of the note.
   - Includes buttons for editing, saving, and deleting the note.

3. **`editNote(uid)`**:
   - Makes the title and text of the note editable when the "Edit" button is clicked.
   - Switches the "Edit" button to a "Save" button.

4. **`saveNote(uid)`**:
   - Validates the edited content.
   - Saves the updated note to the `notesData` array and to `localStorage`.
   - Switches the note back to a non-editable state.

5. **`deleteNote(uid)`**:
   - Prompts the user with a confirmation message before deleting a note.
   - Removes the note from the DOM and from the `notesData` array.
   - Updates `localStorage` with the new list of notes.

6. **`window.addEventListener('load', ...)`**:
   - Loads notes from `localStorage` when the page is loaded and renders them using `createNote()`.

---

### How to Use the Application

1. **Add a Note**:
   - Enter a title and content in the respective input fields.
   - Click the **"Add Note"** button to create a new note. The note will be displayed below the form.

2. **Edit a Note**:
   - Click the **"Edit"** button on any note to make it editable.
   - After editing, click **"Save"** to save the changes.

3. **Delete a Note**:
   - Click the **"Delete"** button on a note to remove it. A confirmation dialog will appear to ensure you want to delete the note.

4. **Persistent Notes**:
   - Notes are saved in the browser's `localStorage`, meaning they will persist even after the page is reloaded.

---

### Features and Functionality

- **Add Notes**: Users can add new notes with a title and content. Each note has a date indicating when it was created.
- **Edit Notes**: Notes can be edited directly in the UI. The title and text can be modified by clicking the "Edit" button, and changes are saved when the "Save" button is clicked.
- **Delete Notes**: Users can delete notes they no longer need. Deletion requires confirmation to avoid accidental removal.
- **LocalStorage**: All notes are saved to `localStorage`, ensuring that they persist even after refreshing the page or closing and reopening the browser.
- **Responsive Design**: The app uses Bootstrap 5 to ensure it looks good on all screen sizes, from desktops to mobile devices.

---

### Error Handling

- **Empty Fields**: If the user tries to add a note without providing a title or content, an error message is displayed in red.
- **Invalid Data**: If the user attempts to save a note with empty fields (after editing), an error message is shown.

---

### Note:

This Note Application demonstrates how to build a simple, yet effective, note-taking app using **HTML**, **CSS**, and **JavaScript**. The app provides a user-friendly interface, allows for the creation and modification of notes, and ensures data persistence through `localStorage`. The use of **Bootstrap** allows for a responsive design, making the app accessible on various devices.

This project is a great way to learn and practice core web development concepts, including DOM manipulation, event handling, and working with browser storage. It also highlights the importance of clean design and usability in front-end development.

---


