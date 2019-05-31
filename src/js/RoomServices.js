import fetch from 'cross-fetch';

let netData;
fetch('https://fe-apps.herokuapp.com' 
  + '/api/v1/overlook/1903/room-services/roomServices')
  .then(response => response.json())
  .then(dataset => netData = dataset.roomServices);

class RoomServices {
  constructor(services = netData) {
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