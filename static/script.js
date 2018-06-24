document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// Click del titulo
let title = document.getElementById('title');
title.addEventListener('click', () => {
  window.location.href = '/';
});

// Subida de un archivo
let archivoEntrada = document.getElementsByName('archivoEntrada');
let btnUploadFile = document.getElementById('btnUploadFile');

btnUploadFile.addEventListener('click', () => {
  var formData = new FormData();

  console.log(archivoEntrada);

  formData.append('archivo', archivoEntrada[0].files[0]);

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert(this.response);

      window.location.href = '/';
    }
  }

  xhttp.open('POST', '/send-file', true);
  xhttp.send(formData);

});