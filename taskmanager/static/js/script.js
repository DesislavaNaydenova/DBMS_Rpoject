document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    // datepicker initalization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, 
      format_ "dd mmmm, yyyy",
      i18n: {done: "Select"}
    );

    // select initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });
