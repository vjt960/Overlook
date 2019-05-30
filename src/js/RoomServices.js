class RoomServices {
  constructor(services) {
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
}

export default RoomServices;