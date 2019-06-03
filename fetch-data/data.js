import fetch from 'cross-fetch';

let roomsData = fetch('https://fe-apps.herokuapp.com' 
  + '/api/v1/overlook/1903/rooms/rooms')
  .then(response => response.json())
  .then(dataset => roomsData = dataset.rooms)
  .catch((err) => err);

let bookingsData = fetch('https://fe-apps.herokuapp.com' 
  + '/api/v1/overlook/1903/bookings/bookings')
  .then(response => response.json())
  .then(dataset => bookingsData = dataset.bookings)
  .catch((err) => err);

let serviceData = fetch('https://fe-apps.herokuapp.com' 
  + '/api/v1/overlook/1903/room-services/roomServices')
  .then(response => response.json())
  .then(dataset => serviceData = dataset.roomServices)
  .catch((err) => err);

let customerData = fetch('https://fe-apps.herokuapp.com' 
  + '/api/v1/overlook/1903/users/users')
  .then(response => response.json())
  .then(dataset => customerData = dataset.users)
  .catch((err) => err);
  
let netData = {
  'roomsData': {},
  'bookingsData': {},
  'serviceData': {},
  'customerData': {}
};
  
export let xData = Promise
  .all([roomsData, bookingsData, serviceData, customerData])
  .then(function(response) {
    netData["roomsData"] = response[0];
    netData["bookingsData"] = response[1];
    netData['serviceData'] = response[2];
    netData['customerData'] = response[3];
    return netData;
  }).then(function(dataset) {
    xData = dataset;
  });