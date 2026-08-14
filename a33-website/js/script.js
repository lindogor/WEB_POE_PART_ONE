/* ==========================================================================
   A33 — Main JavaScript
   Handles: mobile navigation toggle, active nav link highlighting,
   and basic client-side validation feedback for the enquiry form.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile navigation toggle ---
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
  }

  // --- Highlight the current page in the nav ---
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

  // --- Basic enquiry form feedback (front-end only, no back-end submission yet) ---
  var enquiryForm = document.querySelector('#enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = enquiryForm.querySelector('#name').value.trim();
      var email = enquiryForm.querySelector('#email').value.trim();
      var message = enquiryForm.querySelector('#message').value.trim();
      var feedback = document.querySelector('#form-feedback');

      if (!name || !email || !message) {
        feedback.textContent = 'Please fill in your name, email and message before sending.';
        feedback.style.color = '#9C4C24';
        return;
      }

      // Placeholder confirmation — will be connected to a real submission
      // handler once back-end/API integration is added in a later phase.
      feedback.textContent = 'Thanks, ' + name + '! Your enquiry has been noted. We will get back to you at ' + email + ' soon.';
      feedback.style.color = '#2B6B3B';
      enquiryForm.reset();
    });
  }

});
