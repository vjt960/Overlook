import $ from 'jquery';

export default {

  showToday() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return `${dd}/${mm}/${yyyy}`
  },

  showTime() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    h = h < 10 ? `0${h}` : `${h}`;
    m = m < 10 ? `0${m}` : `${m}`;
    s = s < 10 ? `0${s}` : `${s}`;
    return `${h}:${m}:${s}`;
  },

  displayClock() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let showToday = `${dd}/${mm}/${yyyy}`;
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    h = h < 10 ? `0${h}` : `${h}`;
    m = m < 10 ? `0${m}` : `${m}`;
    s = s < 10 ? `0${s}` : `${s}`;
    let showTime = `${h}:${m}:${s}`;
    $('h2').text(`${showToday} _ ${showTime}`);
  }
}