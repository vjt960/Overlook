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

  getAvailableRooms(today) {
    console.log(today);
  }

  getOccupiedRoomsRatio(today) {
    console.log(today);
  }

  findPopularBookingDate() {
    //
  }

  findBestBookingDate() {
    //
  }

  getBookingHistory() {
    //
  }

  getCurrentBookings() {
    //
  }
}

export default Bookings;