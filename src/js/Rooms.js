class Rooms {
  constructor(data) {
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