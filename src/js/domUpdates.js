import $ from 'jquery';

export default {

  test() {
    console.log('placeholder for domUpdate');
  },

  postTodaysBookings(booking) {
    $('.main-booking').append(`<p>here some ${booking.date} shit</p>`);
  },

  postTodaysOrders(order) {
    $('.main-orders').append(`<p>here some ${order.date} shit</p>`);
  }
}