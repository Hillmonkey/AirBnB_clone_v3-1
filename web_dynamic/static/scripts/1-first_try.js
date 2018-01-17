$.when($.ready).then(function () {
  ('li#amnty input:checkbox').change(function () {
    // this will contain a reference to the checkbox
    if (this.checked) {
      // the checkbox is now checked
      console.log('checked');
      console.log(this);
    } else {
      console.log('unchecked');
      console.log(this);
    }
  });
});
