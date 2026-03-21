// ===== FAQ/SECTION TOGGLE FUNCTION =====
// Targets ALL elements with class 'faq-toggle' (applies to multiple FAQs/sections)
// Source: Adapted from W3Schools accordion example (https://www.w3schools.com/howto/howto_js_accordion.asp)
// CHANGE: Original site has static content; added interactive expand/collapse for better UX

function initToggles() {
  const toggles = document.querySelectorAll('.faq-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const isVisible = answer.classList.contains('show');
      
      // Close all other answers first (accordion behavior)
      document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.remove('show'));
      
      if (!isVisible) {
        answer.classList.add('show');
        this.textContent = 'Hide details';  // Dynamic text
      } else {
        this.textContent = 'Show details';
      }
    });
  });
}

// Run when page loads
document.addEventListener('DOMContentLoaded', initToggles);

