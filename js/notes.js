let noteStore = []
class Note {
  constructor(obj) {
    this.id = obj["id"];
    this.title = obj.title;
    this.body = obj.body;
    this.user = obj.user;
    noteStore.push(this)
  }
}
