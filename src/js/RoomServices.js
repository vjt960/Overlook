// import netData from '../../fetch-data/data';

class RoomServices {
  constructor(services) {
    this.all = services;
  }

  calculateBill(userID) {
    console.log(userID);
  }

  getHistory(userID) {
    console.log(userID)
  }

  getTotalDebt(today) {
    return this.all.filter(order => order.date === today);
  }

  returnError() {
    return 'Error';
  }
}

export default RoomServices;