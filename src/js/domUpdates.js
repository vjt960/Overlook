import $ from 'jquery';

export default {

  postTodaysBookings(booking) {
    $('.main-booking').append(`<p>here some ${booking.date} shit</p>`);
  },

  postTodaysOrders(order) {
    $('.main-orders').append(`<p>here some ${order.date} shit</p>`);
  },

  postNumOfOpenRooms(rooms) {
    $('.main-rooms').append(`<p>Rooms available: ${rooms.length}`);
  },

  postFillRate(ratio) {
    $('.main-rooms')
      .append(`<p>Hotel occupancy is currently at ${Math.round(ratio)}%`);
  },

  postTodaysDebt(orders) {
    let debt;
    debt = orders.length < 1 ? 0 
      : orders.reduce((a, b) => a + b.totalCost);
    $('.main-orders').append(`<p>Today's debt: $${debt}</p>`);
  }
}