document.addEventListener("DOMContentLoaded", function() {
  const baseApi = 'http://localhost:3000/api/v1/notes'

  function getNotes() {
    fetch(`${baseApi}`).then(res => res.json()).then(json => {
      console.log(json);
    })
  }
  let notesRes = getNotes();
  let notes = document.getElementById('notes')
  for(let note in notesRes) {

    newElement.innerHTML = `<li><h1 class="title">${note.title}</h1><p class="body">${note.body}</p></li>`
    notes.appendChild(newElement)
  }
  debugger

});

// function showIssues(json) {
//   let issueList = document.createElement('ul')
//   let array = json
//   array.forEach(function(issue) {
//     let title = issue.title
//     let body = issue.body
//     let url = issue.html_url
//     let issueItem = document.createElement('li')
//     issueItem.innerHTML = `Title: <a href="${url}">${title}</a> | Body: ${body}`
//     issueList.appendChild(issueItem)
//   })
//   document.getElementById('issues').appendChild(issueList)
// }
