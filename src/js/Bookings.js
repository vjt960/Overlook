import fetch from 'cross-fetch';

let netData;
fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(response => response.json())
  .then(dataset => netData = dataset.bookings);

class Bookings {
  constructor(data = netData, rooms) {
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

  getOccupiedRoomsRatio(today) {
    let open = this.getAvailableRooms(today).length;
    let closed = 200 - open;
    return (closed / 200) * 100;
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