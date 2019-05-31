import Hotel from '.Hotel';

class Admin extends Hotel {
  constructor(bookings, rmServices, customers) {
    super(bookings, rmServices, customers)
    this.customers = customers;
    this.currentCustomer;
  }
}

export default Admin;