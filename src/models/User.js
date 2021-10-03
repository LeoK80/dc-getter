export default class User {
  constructor(id, username, characterClass, race, group) {
    this.id = id;
    this.username = username;
    this.characterClass = characterClass;
    this.race = race;
    this.group = group;
  }

  toString() {
    console.log(`ID: ${this.id}, User: ${this.username}, class: ${this.characterClass}, race: ${this.race} in group: ${this.group}`);
  }
}
