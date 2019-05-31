// import netData from '../../fetch-data/data';

class Bookings {
  constructor(data = netData.bookingsData, rooms) {
    this.bookings = data;
    this.rooms = rooms;
  }
  
  bookRoom(user, date, rmNumber) {
    if (this.bookings.find(booking => booking.date === date)) {
      this.returnError();
    } else {
      let book = {userID: [user.id], date: [date], roomNumber: [rmNumber]};
      this.bookings.push(book);
    }
  }

  unbookRoom(rmNumber) {
    let index = this.bookings
      .indexOf(booking => booking.roomNumber === rmNumber);
    index === -1 ? this.returnError() 
      : this.bookings.splice(index, 1);
  }

  upgradeRoom(date) {
    console.log(date);
  }

  getAvailableRooms(today) {
    let rooms = this.rooms.slice();
    let bookedRooms = this.bookings.filter(booking => booking.date === today)
      .map(booking => booking.roomNumber);
    return rooms.filter(room => bookedRooms.includes(room.number) === false);
  }

  filterVacantRoomsByType(type) {
    //capture array of vacant rooms;
    //filter by type;
  }

  getOccupancyRatio(today) {
    let vacant = this.getAvailableRooms(today).length;
    let occupied = this.rooms.length - vacant;
    return (occupied / this.rooms.length) * 100;
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

  returnError() {
    return 'Error';
  }
}

export default Bookings;