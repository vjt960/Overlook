class Services {
  constructor(services) {
    this.all = services;
  }

  placeOrder(order) {
    this.all.push(order);
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

  findTodaysBill(userID, date) {
    let bills = this.getHistory(userID);
    let bill = bills.find(obj => obj.date === date);
    if (!bill) {
      return 0;
    } else {
      return bill.totalCost;
    }
  }

  calculateTotalDebt(today) {
    let bill = this.all.filter(order => order.date === today);
    if (bill.length < 1) {
      return 0;
    } else {
      bill = bill.map(obj => obj.totalCost)
      return bill.reduce((a, b) => a + b);
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