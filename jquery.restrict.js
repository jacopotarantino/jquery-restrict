jQuery.fn.restrict = function(pattern) {
  jQuery(this).keypress(function(event) {
    var regEx, string;
    if (event.which) {
      regEx = new RegExp(pattern);
      string = $(this).val() + String.fromCharCode(event.which);
      if (!regEx.test(string)) {
        return event.preventDefault();
      }
    }
  });
  return this;
};

//# sourceMappingURL=jquery.restrict.js.map
