import chai from 'chai';
const expect = chai.expect;
import Rooms from '../src/js/Rooms';
import roomsData from '../data/rooms';

describe('Rooms', function() {
  let rooms;

  beforeEach(() => {
    rooms = new Rooms(roomsData);
  });

  it('should be a function', function() {
    expect(Rooms).to.be.a('function');
  });

  it('should be an instance of Rooms', function() {
    expect(rooms).to.be.an.instanceOf(Rooms);
  });

  it('should contain all bookable rooms in the hotel', function() {
    expect(rooms.all.length).to.equal(50);
  })

  it('should be able to find a room by its number', function() {
    expect(rooms.findByNumber(14)).to.equal(rooms.all[13]);
  });

  it('should be able to filter rooms by type', function() {
    expect(rooms.filterByType('single room').length).to.equal(16);
  });
})