// DOM elements
const notesWrapper = document.getElementById("notes-wrapper");
const title = document.getElementById("title");
const content = document.getElementById("content");
const error = document.getElementById("form-error");

// Array to store notes data
let notesData = [];

// Function to create a note in the DOM
const createNote = (uid, title, text, date) => {
  // Create new div for each note
  const note = document.createElement("div");
  note.className = "note";
  note.id = uid;

  // Set the inner HTML of the note (including title, controls, text, and date)
  note.innerHTML = `
    <div class="note-title">${title}</div>
    <div class="note-controls">
      <button class="note-edit" onclick="editNote(${uid})">Edit</button>
      <button class="note-save" style="display:none" onclick="saveNote(${uid})">Save</button>
      <button class="note-delete" onclick="deleteNote(${uid})">Delete</button>
    </div>
    <div class="note-text">${text}</div>
    <div class="note-date">${date}</div>
  `;

  // Insert the newly created note as the first child of the notes wrapper
  notesWrapper.insertBefore(note, notesWrapper.firstChild);
};

// Function to add a new note
const addNote = () => {
  // Check if title or content is empty
  if (title.value.trim().length == 0 || content.value.trim().length == 0) {
    error.innerHTML = "Note cannot be empty"; // Show error if empty
    return;
  }

  // Generate a unique ID using current timestamp
  const uid = new Date().getTime().toString();

  // Create a new note object
  const noteObj = {
    uid: uid,
    title: title.value,
    text: content.value,
    date: new Date().toLocaleDateString(),
  };

  // Add the new note object to the notesData array
  notesData.push(noteObj);

  // Save notes data to localStorage as a string (JSON format)
  localStorage.setItem("notes", JSON.stringify(notesData));

  // Create and display the new note in the UI
  createNote(noteObj.uid, noteObj.title, noteObj.text, noteObj.date);

  // Clear input fields and hide error message
  error.innerText = "";
  content.value = "";
  title.value = "";
};

// Function to edit an existing note
const editNote = (uid) => {
  const note = document.getElementById(uid);

  // Select relevant parts of the note (title, text, and buttons)
  const noteTitle = note.querySelector(".note-title");
  const noteText = note.querySelector(".note-text");
  const noteSave = note.querySelector(".note-save");
  const noteEdit = note.querySelector(".note-edit");

  // Allow content editing by making title and text editable
  noteTitle.contentEditable = "true";
  noteText.contentEditable = "true";

  // Toggle visibility of the buttons
  noteEdit.style.display = "none";
  noteSave.style.display = "block";

  // Focus on the text area
  noteText.focus();
};

// Function to save the edited note
const saveNote = (uid) => {
  const note = document.getElementById(uid);

  // Select title, text, and buttons
  const noteTitle = note.querySelector(".note-title");
  const noteText = note.querySelector(".note-text");
  const noteSave = note.querySelector(".note-save");
  const noteEdit = note.querySelector(".note-edit");

  // Check if the updated note is empty
  if (
    noteTitle.innerText.trim().length == 0 ||
    noteText.innerText.trim().length == 0
  ) {
    error.innerHTML = "Note cannot be empty"; // Show error if empty
    return;
  }

  // Update the note data in notesData array
  notesData.forEach((note) => {
    if (note.uid == uid) {
      note.title = noteTitle.innerText;
      note.text = noteText.innerText;
    }
  });

  // Save the updated notes to localStorage
  localStorage.setItem("notes", JSON.stringify(notesData));

  // Disable content editing and toggle button visibility
  noteTitle.contentEditable = "false";
  noteText.contentEditable = "false";
  noteEdit.style.display = "block";
  noteSave.style.display = "none";

  // Clear error message
  error.innerText = "";
};

// Function to delete a note
const deleteNote = (uid) => {
  // Ask the user to confirm deletion
  let confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) {
    return; // If not confirmed, do nothing
  }

  const note = document.getElementById(uid);

  // Remove the note from the DOM
  note.parentNode.removeChild(note);

  // Filter out the deleted note from the notesData array
  notesData = notesData.filter((note) => {
    return note.uid != uid;
  });

  // Save the updated notes data to localStorage
  localStorage.setItem("notes", JSON.stringify(notesData));
};

// Load notes from localStorage when the page loads
window.addEventListener("load", () => {
  // Retrieve notes from localStorage (or use an empty array if none)
  notesData = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];

  // Create a note for each saved note in localStorage
  notesData.forEach((note) => {
    createNote(note.uid, note.title, note.text, note.date);
  });
});
