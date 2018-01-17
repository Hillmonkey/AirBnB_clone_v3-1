$( function () {
  $('input[type=checkbox]').click( function () {
    console.log("click");
    if (this.checked) {
      console.log('checked');
      console.log(this);
    } else {
      console.log('unchecked');
      console.log(this);
    }
  });
});
