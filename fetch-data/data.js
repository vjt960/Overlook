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

let netData = {
  'roomsData': {}, 
  'bookingsData': {}, 
  'serviceData': {}
};

Promise.all([roomsData, bookingsData, serviceData])
  .then(function(values) {
    netData["roomsData"] = values[0];
    netData["bookingsData"] = values[1];
    netData['serviceData'] = values[2];
    return netData;
  });

export default netData;