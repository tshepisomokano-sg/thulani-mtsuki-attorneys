// ─── CONTACT FORM ───
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form-submit');
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    successEl.style.display = 'none';
    errorEl.style.display = 'none';

    try {
      const response = await fetch('https://formspree.io/f/xeerqqky', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        successEl.style.display = 'block';
        contactForm.reset();
      } else {
        errorEl.style.display = 'block';
      }
    } catch {
      errorEl.style.display = 'block';
    }

    submitBtn.textContent = 'Send Message';
    submitBtn.disabled = false;
  });
}
