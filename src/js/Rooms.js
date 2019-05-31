import fetch from 'cross-fetch';

let netData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(response => response.json())
  .then(dataset => netData = dataset.rooms);

class Rooms {
  constructor(data = netData) {
    this.all = data;
  }

  findByNumber(num) {
    return this.all.find(room => room.number === num);
  }

  filterByType(type) {
    return this.all.filter(room => room.roomType === type);
  }
}

export default Rooms;