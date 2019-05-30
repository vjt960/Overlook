class Bookings {
  constructor(data, rooms) {
    this.bookings = data;
    this.rooms = rooms;
  }
  
  bookRoom(user, date) {
    console.log(user, date);
  }

  unbookRoom(room) {
    console.log(room);
  }

  upgradeRoom(date) {
    console.log(date);
  }
}

export default Bookings;