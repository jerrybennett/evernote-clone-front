document.addEventListener("DOMContentLoaded", function() {
  const baseApi = 'http://localhost:3000/api/v1/notes'

  getNotes()

  function getNotes() {
    fetch(`${baseApi}`).then(res => res.json())
      .then(json => {
        showNotes(json);
      })
  };

  function makeNote() {
    let bodyInput = document.getElementById('body-input').value;
    let titleInput = document.getElementById('title-input').value;
    fetch(`${baseApi}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput
      })
    }).then(res => res.json()).then(respp => new Note(respp)).then(resp => addNote(resp));

    document.getElementById('body-input').value = '';
    document.getElementById('title-input').value = '';
  }

  function deleteNote(id) {
    fetch(`${baseApi}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).then(res => res.json()).then(respp => console.log(respp.message));
  }

  let submitBtn = document.getElementById('submit')

  submitBtn.addEventListener('click', makeNote)

  let notes = document.getElementById('notes')

  function showNotes(json) {
    for (let i = 0; i < json.length; i++) {
      addNote(json[i])
    }
  };

  function addNote(respp) {
    let notes = document.getElementById('notes')
    let newElement = document.createElement('li')
    newElement.innerHTML = `<h1 class="title">${respp.title}</h1><p data-id="${respp.id}" class="preview">preview</p><p data-id="${respp.id}" style="display: none" class="body">${respp.body}<br><button>Edit</button><button data-id="${respp.id}" class="delete">Delete</button></p>`
    notes.appendChild(newElement);
  }

  notes.addEventListener('click', handlePreviewEvent)

  function handleDelete(event) {
    if (event.target.className === "delete") {
      event.preventDefault()
      let x = event.target.dataset.id
      event.target.parentNode.parentNode.remove()
      deleteNote(x);
      console.log(x);
    }
  }
  notes.addEventListener('click', handleDelete)

  function handlePreviewEvent(event) {
    if (event.target.className === "preview") {
      let x = event.target.dataset.id
      let bodies = document.getElementsByClassName("body")

      for (let i = 0; i < bodies.length; i++) {
        if (bodies[i].dataset.id === x) {
          let g = bodies[i]
          if (g.style.display === "none") {
            g.style.display = "block";
          } else {
            g.style.display = "none";
          }
          console.log(g)
        }
      }
    }
  }

  function showPreview(e) {
    if (e.target.className === 'preview') {
      preview.setAttribute = 'visible';
      console.log(`<p class="body">${json[i].body}</p>`);
    }
  }

  function editNote() {

  }

});
