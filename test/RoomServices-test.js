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

  it('should be an instance of Services', function() {
    expect(services).to.be.an.instanceOf(Services);
  });

  it('should calulate total debt for a user', function() {
    expect(services.checkout(1)).to.equal(9.48);
  });

  it('should calculate all debt for a certain date', function() {
    expect(services.calculateTotalDebt("05/10/2019")).to.equal(24.24);
  });

  it('should find the bill for a user on a date', function() {
    expect(services.findTodaysBill(3, "05/10/2019")).to.equal(24.24);
  });

  it('should get the service order for a certain date', function() {
    expect(services.getTotalDebt("05/10/2019")[0]).to.equal(services.all[1]);
  });

  it('should be able to place an order', function() {
    let newOrder = {
      userID: 999,
      date: "21/09/2019",
      food: "Generic Plastic Sandwich",
      totalCost: 99.5
    };
    let origin = services.all.length;
    services.placeOrder(newOrder);
    expect(services.all.length).to.equal(origin + 1);
  });

});