class Bookings {
  constructor(data, rooms) {
    this.all = data;
    this.rooms = rooms;
  }
  
  bookRoom(user, date, rmNumber) {
    let book = {userID: user.id, date, roomNumber: rmNumber};
    this.all.push(book);
    return book;
  }

  unbookRoom(index) {
    this.all.splice(index, 1);
  }
  
  getAvailableRooms(today) {
    let rooms = this.rooms;
    let bookedRooms = this.all.filter(booking => booking.date === today)
      .map(booking => booking.roomNumber);
    let avail = rooms.all
      .filter(room => bookedRooms
        .includes(room.number) === false);
    return avail.sort((a, b) => a.roomType.length - b.roomType.length);
  }

  getOccupancyRatio(today) {
    let vacant = this.getAvailableRooms(today).length;
    let occupied = this.rooms.all.length - vacant;
    return (occupied / vacant) * 100;
  }

  findPopularBookingDate() {
    let counter = this.all.reduce((a, b) => {
      a[b.date] = (a[b.date] || 0) + 1;
      return a;
    }, {});
    let target = Math.max(...Object.values(counter));
    return Object.keys(counter).find(obj => counter[obj] === target);
  }

  findBestBookingDate() {
    let counter = this.all.reduce((a, b) => {
      a[b.date] = (a[b.date] || 0) + 1;
      return a;
    }, {});
    let target = Math.min(...Object.values(counter));
    return Object.keys(counter).find(obj => counter[obj] === target);
  }

  getUserHistory(userId) {
    return this.all.filter(booking => booking.userID === userId);
  }

  getCurrentBookings(today) {
    return this.all.filter(booking => booking.date === today);
  }

  calculateRevenue(today) {
    let books = this.getCurrentBookings(today);
    books = books.map(book => book.roomNumber);
    let rooms = books.reduce((a, b) => {
      a[b] = this.rooms.all.find(room => room.number === b);
      return a;
    }, {});
    return Object.values(rooms)
      .reduce((a, b) => a.costPerNight + b.costPerNight);
  }
}

export default Bookings;