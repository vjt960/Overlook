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
    let newUser = {id: 235, name: 'Antonio Fry'};
    expect(bookings.bookRoom(newUser, '31/05/2022', 10).userID).to.equal(235);
  });

  it('should be able to unbook a room', function() {
    let origin = bookings.all.length;
    bookings.unbookRoom(5);
    expect(origin).to.be.gt(bookings.all.length);
  });

  it('should get the most popular booking date', function() {
    expect(bookings.findPopularBookingDate()).to.equal("31/08/2019");
  });

  it('should get a customer\'s booking information', function() {
    expect(bookings.getUserHistory(7).length).to.equal(1);
  });

  it('should return today\'s bookings', function() {
    expect(bookings.getCurrentBookings("31/08/2019").length).to.equal(3);
  });

});