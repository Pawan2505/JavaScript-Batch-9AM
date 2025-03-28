const notesWrapper = document.getElementById("notes-wrapper");
const title = document.getElementById("title");
const content = document.getElementById("content");
const error = document.getElementById("form-error");

let notesData = [];


function createNote(uid, title, text, date) {

    const note = document.createElement("div");
    
    note.className = "note";
    note.id = uid;
        note.innerHTML = `
        <div class="note-title">${title}</div>
        <div class="note-controls">
        <button class="node-edit" onclick="editNote(${uid})">
        Edit
        </button>
        <button class="node-save" style="display:none" onclick="saveNote(${uid})">
        Save
        </button>
         <button class="node-dalete" onclick="deleteNote(${uid})">
        Delete
        </button>
        </div>
        <div class="note-text">${text}</div>
        <div class="note-date">${date}</div>
        `;
    
    notesWrapper.insertBefore(note, notesWrapper.firstChild);
}

function addNote() {
    console.log("add button clicked..")
    if (title.value.trim().length == 0 || content.value.trim().length == 0) {
        error.innerText = "Note can not be Empty";
        return;
    }

    const uid = new Date().getTime().toString();

    const noteObj = {
        uid: uid,
        title: title.value,
        text: content.value,
        date:new Date().toLocaleDateString()
    }

    notesData.push(noteObj);

    localStorage.setItem("notes", JSON.stringify(notesData));

    createNote(noteObj.uid, noteObj.title, noteObj.text, noteObj.date);

    error.innerText = "";
    content.value = "";
    title.value = "";
}