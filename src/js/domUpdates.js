import $ from 'jquery';

export default {

  postTodaysBookings(booking) {
    $('.main-booking').append(`<p>here some ${booking.date} shit</p>`);
  },

  postTodaysOrders(order) {
    $('.main-orders').append(`<p>here some ${order.date} shit</p>`);
  },

  postNumOfOpenRooms(rooms) {
    $('.main-rooms')
      .append(`<p>Rooms available: ${rooms.length} out of ${200}`);
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
  },

  postBookingDates(date1, date2) {
    let banner = `Busiest Booking Date:${date1} | Open Booking Date:${date2}`
    $('.rooms-booking-date').text(banner);
  },

  postRoomAvailabilitMessage() {
    $('.rooms-admin-table')
      .append(`
      <tr class="book">
      <td colspan="7">Search For Available Rooms</td>
      </tr>`);
  },

  selectUser(user) {
    $('#active-guest').text('');
    $('figure').text('');
    $('#active-guest').text(user.name).hide().fadeIn(1000);
    $('figure').text(user.name).hide().fadeIn(1000);
  },

  noUserError(attempt) {
    const error = `Error: ${attempt} is not a guest here. CALL SECURITY.`;
    $('#active-guest').text('');
    $('#error').text(error).hide().fadeIn(1000);
  },

  updateRoomsTable(rooms) {
    if (!rooms) {
      $('.book').remove();
      noRoomsError();
    } else {
      $('.book').remove();
      rooms.forEach(room => {
        let avail = room.bidet ? 'Yes' : 'No';
        $('.rooms-admin-table')
          .append(`
          <tr class="book">
          <td>${room.number}</td>
          <td>${room.roomType}</td>
          <td>${room.numBeds}</td>
          <td>${room.bedSize}</td>
          <td>${avail}</td>
          <td>$${room.costPerNight}</td>
          <td><input id="${room.number}" value="Book" type="submit"></td>
          </tr>`);
      });
      $('.rooms-search-input').val('');
    }
  },

  noRoomsError() {
    $('.rooms-admin-table')
      .append(`
      <tr class="book">
      <td colspan="7">Error: No Rooms Available</td>
      </tr>`);
  }
}