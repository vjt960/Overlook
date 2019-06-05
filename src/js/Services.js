class Services {
  constructor(services) {
    this.all = services;
  }

  getServiceOrders(date) {
    return this.all.filter(order => order.date === date);
  }

  getHistory(userID) {
    return this.all.filter(service => service.userID === userID);
  }

  getTotalDebt(today) {
    return this.all.filter(order => order.date === today);
  }

  calculateTotalDebt(today) {
    let bill = this.all.filter(order => order.date === today);
    if (bill.length < 1) {
      return 0;
    } else {
      return bill.reduce((a, b) => a.totalCost + b.totalCost);
    }
  }

  checkout(userID) {
    let bill = this.getHistory(userID);
    if (bill.length < 1) {
      return 0;
    } else {
      let receipt = bill.map(obj => obj.totalCost);
      return receipt.reduce((a, b) => a + b);
    }
  }
}

export default Services;