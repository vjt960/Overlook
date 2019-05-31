class Admin {
  constructor(customers, hotel) {
    this.customers = customers;
    this.rooms = hotel.bookings.rooms;
    this.bookings = hotel.bookings;
    this.services = hotel.services;
    this.currentCustomer;
  }
}

export default Admin;