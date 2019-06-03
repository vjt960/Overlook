// import netData from '../../fetch-data/data';

class Bookings {
  constructor(data, rooms) {
    this.all = data;
    this.rooms = rooms;
  }
  
  bookRoom(user, date, rmNumber) {
    if (this.all.find(booking => booking.date === date)) {
      this.returnError();
    } else {
      let book = {userID: [user.id], date: [date], roomNumber: [rmNumber]};
      this.all.push(book);
    }
  }

  unbookRoom(rmNumber) {
    let index = this.all
      .indexOf(booking => booking.roomNumber === rmNumber);
    index === -1 ? this.returnError() 
      : this.all.splice(index, 1);
  }

  upgradeRoom(userID, date, newRoom) {
    console.log(date);
  }

  getAvailableRooms(today) {
    let rooms = this.rooms;
    let bookedRooms = this.all.filter(booking => booking.date === today)
      .map(booking => booking.roomNumber);
    return rooms.all.filter(room => bookedRooms.includes(room.number) === false);
  }

  filterRoomsByType(rooms, type) {
    //capture array of vacant rooms;
    //filter by type;
  }

  getOccupancyRatio(today) {
    let vacant = this.getAvailableRooms(today).length;
    let occupied = this.rooms.all.length - vacant;
    return (occupied / vacant) * 100;
  }

  findPopularBookingDate() {
    //
  }

  findBestBookingDate(today) {
    //
  }

  getUserHistory(userId) {
    //
  }

  getCurrentBookings(today) {
    return this.all.filter(booking => booking.date === today);
  }

  returnError() {
    return 'Error';
  }
}

export default Bookings;