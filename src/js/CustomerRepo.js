class CustomerRepo {
  constructor(data) {
    this.customers = data;
  }

  findUsername(name) {
    return this.customers.find(user => user.name === name);
  }

  findUserID(id) {
    return this.customers.find(user => user.id === id);
  }

  addUser(firstName, lastName) {
    let userName = `${firstName} ${lastName}`;
    let userID = this.customers.length + 1;
    this.customers.push({id: [userID], name: [userName]});
  }
}

export default CustomerRepo;