//--------- IMPORTS --------->
import $ from 'jquery';
import {xData as data} from '.././fetch-data/data';
import Rooms from './js/Rooms';
import Bookings from './js/Bookings';
import Services from './js/Services';
import Hotel from './js/Hotel';
import CustomerRepo from './js/CustomerRepo';
import Admin from './js/Admin';
import domUpdates from './js/domUpdates';
import utility from './js/utility';
import './css/index.scss';
//--------- VARIABLES --------->
let admin;
//--------- EVENT LISTENERS --------->
$(document).ready(() => {
  loadFetchData();
  loadMainTab();
  setInterval(utility.displayClock, 1000);
});

$('ul.tabs li').click(function() {
  let tabID = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('active');
  $('.tab-content').removeClass('active');
  $(this).addClass('active');
  $(`#${tabID}`).addClass('active');
});

$('.customer-search-form').submit(event => {
  event.preventDefault();
  let user = admin.customers.findUsername($('.customer-search-input').val());
  if (user) {
    admin.currentCustomer = user;
    domUpdates.selectUser(user);
    loadSelectedUserData(user);
    $('.customer-search-input').val('');
  } else {
    domUpdates.noUserError($('.customer-search-input').val());
    $('.customer-search-input').val('');
  }
});

$('.customer-submit-btn').click(event => {
  event.preventDefault();
  let firstName = $('.customer-first-name').val();
  let lastName = $('.customer-last-name').val();
  let newUser = admin.customers.addUser(firstName, lastName);
  admin.currentCustomer = newUser;
  domUpdates.selectUser(newUser);
  loadSelectedUserData(newUser);
  $('.customer-first-name').val('');
  $('.customer-last-name').val('');
});

$('.rooms-search-form').submit(event => {
  event.preventDefault();
  let date = $('.rooms-search-input').val();
  let rooms = admin.bookings.getAvailableRooms(date);
  domUpdates.updateRoomsTable(rooms);
  let type = $('.select-suite').val();
  domUpdates.filterRoomsList(type);
});

$('.rooms-user-table').click(event => {
  event.preventDefault();
  unbookRoom(event);
  // upgradeRoom(event);
});

$('.rooms-search-form').click(() => {
  let type = $('.select-suite').val();
  domUpdates.filterRoomsList(type);
});

//--------- FUNCTIONS --------->

async function loadFetchData() {
  await data;
  const rooms = new Rooms(data.roomsData);
  const bookings = new Bookings(data.bookingsData, rooms);
  const services = new Services(data.serviceData);
  const hotel = new Hotel(bookings, services);
  const customers = new CustomerRepo(data.customerData);
  admin = new Admin(customers, hotel);
}

async function loadMainTab() {
  await data;
  const books = admin.bookings.getCurrentBookings(utility.showToday());
  const services = admin.services.getTotalDebt(utility.showToday());
  const openRooms = admin.bookings.getAvailableRooms(utility.showToday());
  const popularDate = admin.bookings.findPopularBookingDate();
  const unpopularDate = admin.bookings.findBestBookingDate();
  displayPlaceholders();
  domUpdates.postBookingDates(popularDate, unpopularDate);
  domUpdates.postTodaysDebt(admin.services.getTotalDebt(utility.showToday()));
  domUpdates.postNumOfOpenRooms(openRooms);
  domUpdates.postFillRate(admin.bookings
    .getOccupancyRatio(utility.showToday()));
  books.forEach(book => domUpdates.postTodaysBookings(book, admin.customers.all, admin.rooms.all));
  services.forEach(order => domUpdates.postTodaysOrders(order));
}

function displayPlaceholders() {
  domUpdates.postTableMessage('.rooms-admin-table', 'Search Available Rooms');
  domUpdates.postTableMessage('.rooms-user-table', 'Select A Guest');
  domUpdates.postTableMessage('.rooms-orders-table', 'Select A Guest');
}

function loadSelectedUserData(user) {
  loadUserBookings(user);
  loadUserOrders(user);
}

function loadUserBookings(user) {
  const books = admin.bookings.getUserHistory(user.id);
  domUpdates.postUserBookings(admin, books);
}

function loadUserOrders() {
  //
}

function unbookRoom(event) {
  if (!$(event.target).hasClass('unbook')) {
    return null;
  } else {
    let user = admin.currentCustomer;
    let dataID = $(event.target).closest('tr').attr('data-id');
    let index = admin.bookings.all
      .findIndex(booking => {
        return booking.date === dataID && booking.userID === user.id;
      });
    admin.bookings.unbookRoom(index);
    $(event.target).closest('tr').remove();
  }
}