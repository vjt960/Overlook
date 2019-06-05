import chai from 'chai';
const expect = chai.expect;
import Services from '../src/js/Services';
import roomServices from '../mock-data/roomServices';

describe('Services', function() {
  let services;

  beforeEach(function() {
    services = new Services(roomServices);
  });

  it('should be a function', function() {
    expect(Services).to.be.a('function');
  });

  it('should be an instance of Bookings', function() {
    expect(services).to.be.an.instanceOf(Services);
  });

  it('should calulate total debt for a user', function() {
    expect(services.checkout(1)).to.equal(9.48);
  });

});