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
