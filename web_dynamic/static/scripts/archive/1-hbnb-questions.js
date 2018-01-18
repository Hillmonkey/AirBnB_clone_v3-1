$( function () {
  $('input[type=checkbox]').click( function () {
    console.log("click");
    if (this.checked) {
      console.log('checked');
      console.log(this);
      // console.log(this.data.id);
      console.log(this.attributes.getNamedItem('type'));
      console.log(this.dataset.id);
      console.log(this.dataset.name);
      console.log(this.attributes.getNamedItem('data-id'));
      let test = this.attributes.getNamedItem('data-name');
      console.log(test);
    } else {
      console.log('unchecked');
      console.log(this);
      console.log(this.attributes);
    }
  });
});
