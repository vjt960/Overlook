import chai from 'chai';
const expect = chai.expect;
import Bookings from '../src/js/Bookings';
import bookingsData from '../mock-data/bookings';
import roomsData from '../mock-data/rooms';

describe('Bookings', function() {
  let bookings;

  beforeEach(function() {
    bookings = new Bookings(bookingsData, roomsData);
  });

  it('should be a function', function() {
    expect(Bookings).to.be.a('function');
  });

  it('should be an instance of Bookings', function() {
    expect(bookings).to.be.an.instanceOf(Bookings);
  });

  it('should be able to book a room for a customer', function() {
    let newUser = {id: 2, name: 'Antonio Fry'};
    bookings.bookRoom(newUser, '31/05/2022', 10);
    expect(bookings.all.find(book => book.userId === 2)
      .roomNumber).to.equal(10);
  });

  it('should be able to unbook a room', function() {
    let newUser = {id: 2, name: 'Antonio Fry'};
    bookings.bookRoom(newUser, '31/05/2022', 10);
    expect(bookings.all.find(book => book.userId === 2)
      .roomNumber).to.equal(10);
    bookings.unbookRoom(10);
    expect(bookings.all.find(book => book.userId === 2)
      .roomNumber).to.equal(undefined);
  });

  it('should be able to upgrade a room', function() {
    bookings.upgradeRoom(5, "31/08/2019", 50);
    expect(bookings.all.find(booking => booking.userID === 5)
      .roomNumber).to.equal(50);
  });

  it('should be able to get vacant rooms based on date', function() {
    expect(bookings.getAvailableRooms("31/08/2019").length).to.equal(3);
  });

  it('should filter rooms by type', function() {
    const vacantRooms = bookings.getAvailableRooms("31/08/2019");
    expect(bookings.filterRoomsByType(vacantRooms, 'single room')
      .length).to.equal(1);
    expect(bookings.filterRoomsByType(vacantRooms, 'junior suite')
      .length).to.equal(1);
    expect(bookings.filterRoomsByType(bookings.rooms.all, 'residential suite')
      .length).to.equal(11);
  });

  it('should be able to get percentage of occupied rooms', function() {
    expect(bookings.getOccupancyRatio("31/08/2019")).to.equal(6);
  });

  it('should get the most popular booking date', function() {
    expect(bookings.findPopularBookingDate()).to.equal("31/08/2019");
  });

  it('should get the date with most rooms vacant', function() {
    expect(bookings.findBestBookingDate("07/10/2019")).to.equal("21/10/2019");
  });

  it('should get a customer\'s booking information', function() {
    expect(bookings.getUserHistory(7).length).to.equal(1);
  });

  it('should return today\'s bookings', function() {
    expect(bookings.getCurrentBookings("31/08/2019").length).to.equal(3);
  });

});