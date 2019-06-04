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
import './css/index.scss';
//--------- VARIABLES --------->
let admin;
//--------- EVENT LISTENERS --------->
$(document).ready(() => {
  setInterval(displayTimeNow, 1000);
  loadFetchData();
  loadMainTab();
});

$('ul.tabs li').click(function() {
  let tabID = $(this).attr('data-tab');
  $('ul.tabs li').removeClass('active');
  $('.tab-content').removeClass('active');
  $(this).addClass('active');
  $(`#${tabID}`).addClass('active');
});

$('.customer-search-form').submit(function(event) {
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

$('.customer-submit-btn').click(function(event) {
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

$('.rooms-search-form').submit(function(event) {
  event.preventDefault();
  let date = $('.rooms-search-input').val();
  let rooms = admin.bookings.getAvailableRooms(date);
  domUpdates.updateRoomsTable(rooms);
})

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

function showToday() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`
}

function showTime() {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  h = h < 10 ? `0${h}` : `${h}`;
  m = m < 10 ? `0${m}` : `${m}`;
  s = s < 10 ? `0${s}` : `${s}`;
  return `${h}:${m}:${s}`;
}

function displayTimeNow() {
  $('h2').text(`${showToday()} ${showTime()}`);
}

async function loadMainTab() {
  await data;
  const books = admin.bookings.getCurrentBookings(showToday());
  const services = admin.services.getTotalDebt(showToday());
  const openRooms = admin.bookings.getAvailableRooms(showToday());
  const popularDate = admin.bookings.findPopularBookingDate();
  const unpopularDate = admin.bookings.findBestBookingDate();
  domUpdates.postBookingDates(popularDate, unpopularDate);
  domUpdates.postTodaysDebt(admin.services.getTotalDebt(showToday()));
  domUpdates.postNumOfOpenRooms(openRooms);
  domUpdates.postFillRate(admin.bookings.getOccupancyRatio(showToday()));
  domUpdates.postTableMessage('.rooms-admin-table', 'Search Available Rooms');
  domUpdates.postTableMessage('.rooms-user-table', 'Select A Guest');
  domUpdates.postTableMessage('.rooms-orders-table', 'Select A Guest');
  books.forEach(book => domUpdates.postTodaysBookings(book));
  services.forEach(order => domUpdates.postTodaysOrders(order));
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