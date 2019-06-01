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
    $('main').text(`here is ${admin.services.all[0].date}`);
  }
  loadFetchData();
  



});
