document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    // datepicker initalization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, 
      format_ "dd mmmm, yyyy",
      i18n: {done: "Select"}
    );
  });
