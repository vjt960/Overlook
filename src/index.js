import $ from 'jquery';

import {xData as data} from '.././fetch-data/data';
import Rooms from './js/Rooms';
import Bookings from './js/Bookings';
import RoomServices from './js/RoomServices';
import Hotel from './js/Hotel';
import CustomerRepo from './js/CustomerRepo';
import Admin from './js/Admin';
// An example of how you tell webpack to use a CSS (SCSS) file
import './css/index.scss';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

$(document).ready(() => {

  let rooms;
  let bookings;
  let services;
  let hotel;
  let customers;
  let admin;

  async function loadFetchData() {
    const delay = await data;
    rooms = new Rooms(data.roomsData);
    bookings = new Bookings(data.bookingsData, rooms);
    services = new RoomServices(data.serviceData);
    hotel = new Hotel(bookings, services);
    customers = new CustomerRepo(data.customerData);
    admin = new Admin(customers, hotel);
    console.log(admin.customers.all[0].name);
  }

  loadFetchData();
  
  $('ul.tabs li').click(function() {
		let tabID = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$(`#${tabID}`).addClass('active');
  })
  
  function showDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`
  }
  
  function showTime(){
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    return `${h}:${m}:${s}`;
  }
  
  setInterval(displayTimeNow, 1000);
  
  function displayTimeNow() {
    $('h2').text(`${showDate()} ${showTime()}`);
  }


});
