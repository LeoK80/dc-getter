export default class User {
  constructor(id, username, characterName, characterClass, race, group) {
    this.id = id;
    this.username = username;
    this.characterName = characterName;
    this.characterClass = characterClass;
    this.race = race;
    this.group = group;
  }

  groups = ['founder', 'guide', 'ascendant', 'member', 'iniitate'];

  comparator = (user1, user2) => {
    user1GroupIndex = groups.indexof(user1.group.toLowercase());
    user2GroupIndex = groups.indexof(user2.group.toLowercase());
    if (user1GroupIndex < user2GroupIndex) {
      return -1;
    } else if (user1GroupIndex > user2GroupIndex) {
      return 1;
    } else {
      return 0;
    }
  };

  toString() {
    console.log(`ID: ${this.id}, User: ${this.username}, character name: ${this.characterName}, class: ${this.characterClass}, race: ${this.race} in group: ${this.group}`);
  }
}
