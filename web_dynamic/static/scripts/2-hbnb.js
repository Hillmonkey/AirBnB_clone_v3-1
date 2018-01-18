let amens = {};
$(function () {
  $('input[type=checkbox]').click(function () {
    console.log('click');
    if (this.checked) {
      amens[this.dataset.id] = this.dataset.name;
    } else {
      delete amens[this.dataset.id];
    }
    if ($.isEmptyObject(amens)) {
      $('div.amenities > h4').html('&nbsp;');
    } else {
      let amenStr = Object.values(amens).toString();
      $('div.amenities > h4').html(amenStr);
    }
  });
});
$.ajax({
  // The URL for the request
  url: 'http://0.0.0.0:5001/api/v1/status/',
  // The data to send (will be converted to a query string)
  // Whether this is a POST or GET request
  type: 'GET',

  // The type of data we expect back
  dataType: 'json'
})
  // Code to run if the request succeeds (is done);
  // The response is passed to the function
  .done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    }
  });
