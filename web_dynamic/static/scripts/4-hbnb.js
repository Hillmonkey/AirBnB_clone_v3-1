let amens = {};
let amensPlaceUrl = 'http://0.0.0.0:5001/api/v1/places_search/';

// ============================================================================
$(function () {
  $('input[type=checkbox]').click(function () {
    if (this.checked) {
      amens[this.dataset.id] = this.dataset.name;
    } else {
      delete amens[this.dataset.id];
    }
    if ($.isEmptyObject(amens)) {
      $('div.amenities > h4').html('&nbsp;');
    } else {
      let amenStr = Object.values(amens).join(', ');
      $('div.amenities > h4').html(amenStr);
    }
  });
});

// ===========================================================================

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json'
})
  .done(function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    }
  });

// ===========================================================================

$(function () {
  $('button#search').click(function () {
    let AmensIDs = Object.keys(amens);
    AmensIDs = JSON.stringify({'amenities': AmensIDs});
    console.log(AmensIDs);
    $.ajax({
      url: amensPlaceUrl,
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: AmensIDs
    })
      .done(function (data) {
        $('SECTION.places').children().remove();
        data.forEach(function (place) {
          $('SECTION.places').append(
            '<article>' +
             '<h2>' + place.name + '</h2>' +
             '<div class="price_by_night">' +
               '<p>$' + place.price_by_night + '</p>' +
             '</div>' +
             '<div class="information">' +
               '<div class="max_guest">' +
                 '<div class="guest_image"></div>' +
                   '<p>' + place.max_guest + '</p>' +
                 '</div>' +
               '<div class="number_rooms">' +
                 '<div class="bed_image"></div>' +
                 '<p>' + place.number_rooms + '</p>' +
               '</div>' +
               '<div class="number_bathrooms">' +
                 '<div class="bath_image"></div>' +
                 '<p>' + place.number_bathrooms + '</p>' +
               '</div>' +
             '</div>' +
             '<div class="description">' +
               '<p>' + place.description + '</p>' +
             '</div>' +
           '</article>');
        });
      });
  });
});

// ===========================================================================

$.ajax({
  // The URL for the request
  url: amensPlaceUrl,
  // The data to send (will be converted to a query string)
  // Whether this is a POST or GET request
  type: 'POST',

  // The type of data we expect back
  contentType: 'application/json',
  dataType: 'json',
  data: JSON.stringify({})
})
  // The response is passed to the function
  .done(function (places) {
    places.forEach(function (place) {
      $('SECTION.places').append('<article><h2>' + place.name + '</h2><div class="price_by_night"><p>$' + place.price_by_night + '</p></div><div class="information"><div class="max_guest"><div class="guest_image"></div><p>' + place.max_guest + '</p></div><div class="number_rooms"><div class="bed_image"></div><p>' + place.number_rooms + '</p></div><div class="number_bathrooms"><div class="bath_image"></div><p>' + place.number_bathrooms + '</p></div></div><div class="description"><p>' + place.description + '</p></div></article>');
    });
  });
