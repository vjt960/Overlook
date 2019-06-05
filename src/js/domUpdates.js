import $ from 'jquery';

export default {

  postTodaysBookings(booking, userList, rooms) {
    let user = userList.find(user => user.id === booking.userID).name;
    let room = rooms.find(room => room.number === booking.roomNumber).roomType;
    $('.main-booking')
      .append(`<p>${user} | Room #${booking.roomNumber} | ${room}</p>`);
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
    $('.main-orders').append(`<p>Today's earnings: $${debt}</p>`);
  },

  postBookingDates(date1, date2) {
    let banner = `Busiest Booking Date:${date1} | Open Booking Date:${date2}`
    $('.rooms-booking-date').text(banner);
  },

  postTableMessage(selector, message) {
    $(selector)
      .append(`
      <tr class="message">
      <td colspan="7">${message}</td>
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
    if (rooms.length < 1) {
      $('.message').remove();
      $('.book').remove();
      this.noRoomsError();
    } else {
      $('.book').remove();
      $('.message').remove();
      rooms.forEach(room => {
        let avail = room.bidet ? 'Yes' : 'No';
        let newClass = [...room.roomType]
          .filter(letter => letter !== ' ')
          .join('');
        $('.rooms-admin-table').append(`
          <tr data-id="${room.number}" class="book ${newClass}">
          <td>${room.number}</td>
          <td>${room.roomType.toUpperCase()}</td>
          <td>${room.numBeds}</td>
          <td>${room.bedSize.toUpperCase()}</td>
          <td>${avail}</td>
          <td>$${room.costPerNight}</td>
          <td><input class="book-room" value="Book" type="submit"></td>
          </tr>`);
      });
      $('#rooms-count')
        .text(`${rooms.length} rooms available on ${$('.rooms-search-input')
          .val()}`);
      $('.rooms-search-input').val('');
    }
  },

  noRoomsError() {
    $('.rooms-admin-table')
      .append(`
      <tr class="book error">
      <td colspan="7">Error: No Rooms Available</td>
      </tr>`);
  },

  postUserBookings(admin, books) {
    if (books.length < 1) {
      $('.booked').remove();
      $('.message').remove();
      this.noBookingsError();
    } else {
      $('.booked').remove();
      $('.message').remove();
      books.forEach(book => {
        let room = admin.rooms.all.find(rm => rm.number === book.roomNumber);
        let avail = room.bidet ? 'Yes' : 'No';
        $('.rooms-user-table').append(`
        <tr data-id="${book.date}" class="booked">
        <td>${room.number}</td>
        <td><input type="submit" 
        value="${room.roomType.toUpperCase()}" 
        id="upgrade${room.number}">
        </td>
        <td>${room.numBeds}</td>
        <td>${room.bedSize}</td>
        <td>${avail}</td>
        <td>${book.date}</td>
        <td><input class="unbook" value="Cancel" type="submit"></td>
        </tr>`);
      });
    }
  },

  noBookingsError() {
    $('.rooms-user-table').append(`<tr class="booked error">
    <td colspan="7">Error: No Rooms Booked Under This Guest</td>
    </tr>`);
  },

  filterRoomsList(type) {
    if (type === 'no-val') {
      $('.book').show();
    } else {
      $('.book').hide();
      $(`.${type}`).show();
    }
  },

  postUserOrders(orders) {
    if (orders.length < 1) {
      $('.ordered').remove();
      $('.message').remove();
      this.noOrdersError();
    } else {
      $('.ordered').remove();
      $('.message').remove();
      orders.forEach(order => {
        $('.orders-user-table').append(`
        <tr data-id="${order.date}" class="ordered">
        <td>${order.date}</td>
        <td>${order.food}</td>
        <td>${order.totalCost}</td>
        <td><input class="cancel-food" value="Cancel" type="submit"></td>
        </tr>`);
      });
    }
  },

  noOrdersError(key) {
    $('.orders-orders-table').append(`<tr class="ordered error">
        <td colspan="4">No Orders Today</td>
        </tr>`);
    if (!key) {
      $('.orders-user-table').append(`<tr class="ordered error">
        <td colspan="4">Error: No Orders Under This Guest</td>
        </tr>`);
    }
  },

  postServiceOrders(admin, date) {
    let orders = admin.services.getServiceOrders(date);
    if (orders.length < 1) {
      this.noOrdersError(true);
    } else {
      orders.forEach(order => {
        $('.orders-orders-table').append(`
        <tr data-id="${order.date}" class="services">
        <td>${order.date}</td>
        <td>${order.food}</td>
        <td>${order.totalCost}</td>
        </tr>
        `);
      })
    }
  },

  postUserBilling(admin, date) {
    let user = admin.currentCustomer;
    let debtNow = admin.services.calculateTotalDebt(date);
    let debtAll = admin.services.checkout(user.id);
    $('#bills-count').text(`Billing Today: $${debtNow}  |  Total: $${debtAll}`);
  }
}