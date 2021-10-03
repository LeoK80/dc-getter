export default class User {
  constructor(id, username, characterName, characterClass, race, group) {
    this.id = id;
    this.username = username;
    this.characterName = characterName;
    this.characterClass = characterClass;
    this.race = race;
    this.group = group;
  }

  static comparator = (user1, user2) => {
    const groups = ['founder', 'guide', 'ascendant', 'member', 'initiate'];
    const user1GroupIndex = groups.indexOf(String(user1.group).toLowerCase());
    const user2GroupIndex = groups.indexOf(String(user2.group).toLowerCase());
    if (user1GroupIndex < user2GroupIndex) {
      return -1;
    } else if (user1GroupIndex > user2GroupIndex) {
      return 1;
    } else {
      if (user1.name < user2.name) {
        return -1;
      } else if (user1.name > user2.name) {
        return 1;
      } else {
        return 0;
      }
    }
  };

  toString() {
    console.log(`ID: ${this.id}, User: ${this.username}, character name: ${this.characterName}, class: ${this.characterClass}, race: ${this.race} in group: ${this.group}`);
  }
}
