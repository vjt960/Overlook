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
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
// Example of how to use an image (need to link to it in index.html)
import './images/wallpaper.jpg';

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
    console.log(admin);
    domUpdates.selectUser(user);
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
  $('.customer-first-name').val('');
  $('.customer-last-name').val('');
  console.log(admin);
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
  console.log(admin)
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
  let books = admin.bookings.getCurrentBookings(showToday());
  let services = admin.services.getTotalDebt(showToday());
  let openRooms = admin.bookings.getAvailableRooms(showToday());
  let popularDate = admin.bookings.findPopularBookingDate();
  let unpopularDate = admin.bookings.findBestBookingDate();
  domUpdates.postBookingDates(popularDate, unpopularDate);
  domUpdates.postTodaysDebt(admin.services.getTotalDebt(showToday()));
  domUpdates.postNumOfOpenRooms(openRooms);
  domUpdates.postFillRate(admin.bookings.getOccupancyRatio(showToday()));
  domUpdates.postRoomAvailabilitMessage();
  books.forEach(book => domUpdates.postTodaysBookings(book));
  services.forEach(order => domUpdates.postTodaysOrders(order));
}