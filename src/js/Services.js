// import netData from '../../fetch-data/data';

class Services {
  constructor(services) {
    this.all = services;
  }

  calculateBill(userID) {
    console.log(userID);
  }

  getHistory(userID) {
    return this.all.filter(service => service.userID === userID);
  }

  getTotalDebt(today) {
    return this.all.filter(order => order.date === today);
  }

  returnError() {
    return 'Error';
  }
}

export default Services;