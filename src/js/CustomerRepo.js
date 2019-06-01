class CustomerRepo {
  constructor(data) {
    this.all = data;
  }

  findUsername(name) {
    return this.all.find(user => user.name === name);
  }

  findUserID(id) {
    return this.all.find(user => user.id === id);
  }

  addUser(firstName, lastName) {
    let userName = `${firstName} ${lastName}`;
    let userID = this.all.length + 1;
    this.all.push({id: [userID], name: [userName]});
  }
}

export default CustomerRepo;