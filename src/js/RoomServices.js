import netData from '../../fetch-data/data';

class RoomServices {
  constructor(services = netData.serviceData) {
    this.services = services;
  }

  calculateBill(userID) {
    console.log(userID);
  }

  getHistory(userID) {
    console.log(userID)
  }

  getTotalDebt(today) {
    console.log(today);
  }

  returnError() {
    return 'Error';
  }
}

export default RoomServices;