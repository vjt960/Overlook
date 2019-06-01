// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

import {xData as data} from '.././fetch-data/data';
import Rooms from './js/Rooms';
import Bookings from './js/Bookings';
import RoomServices from './js/RoomServices';
import Hotel from './js/Hotel';
import CustomerRepo from './js/CustomerRepo';
import Admin from './js/Admin';


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// import CustomerRepo from './js/CustomerRepo';

console.log('This is the JavaScript entry file - your code begins here.');


$(document).ready(() => {
  let delay;
  let rooms;
  let bookings;
  let services;
  let hotel;
  let customers;
  let admin;
  async function loadFetchData() {
    delay = await data;
    rooms = new Rooms(data.roomsData);
    bookings = new Bookings(data.bookingsData, rooms);
    services = new RoomServices(data.serviceData);
    hotel = new Hotel(bookings, services);
    customers = new CustomerRepo(data.customerData);
    admin = new Admin(customers, hotel);
    console.log(admin.customers.all[0].name);
    console.log(delay);
    $('main').text(`here is ${admin.services.all[0].date}`);
  }
  loadFetchData();
})
