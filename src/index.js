//--------- IMPORTS --------->
import $ from 'jquery';
import {xData as data} from '.././fetch-data/data';
import Rooms from './js/Rooms';
import Bookings from './js/Bookings';
import RoomServices from './js/RoomServices';
import Hotel from './js/Hotel';
import CustomerRepo from './js/CustomerRepo';
import Admin from './js/Admin';
import domUpdates from './js/domUpdates';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
// Example of how to use an image (need to link to it in index.html)
import './images/turing-logo.png';

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

//--------- FUNCTIONS --------->

async function loadFetchData() {
  await data;
  const rooms = new Rooms(data.roomsData);
  const bookings = new Bookings(data.bookingsData, rooms);
  const services = new RoomServices(data.serviceData);
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
  // let books = admin.bookings.getCurrentBookings(showToday());
  // let services = admin.services.getTotalDebt(showToday());
  // let report = admin.bookings.getOccupancyRatio(showToday());
  let openRooms = admin.bookings.getAvailableRooms(showToday());
  let books = [{date: 'booking1'}, {date: 'booking2'}, {date: 'booking3'}];
  let services = [{date: 'order'}, {date: 'order'}, {date: 'order'}];
  domUpdates.postTodaysDebt(admin.services.getTotalDebt(showToday()));
  domUpdates.postNumOfOpenRooms(openRooms);
  domUpdates.postFillRate(admin.bookings.getOccupancyRatio(showToday()));
  books.forEach(book => domUpdates.postTodaysBookings(book));
  services.forEach(order => domUpdates.postTodaysOrders(order));
}