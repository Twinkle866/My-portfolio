
  // Home icon click scrolls up smoothly
  document.querySelector('.home-icon').addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  // Show pop-up with message for 3 seconds
  function showPopup(message) {
    const popup = document.getElementById('popup-confirm');
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => {
      popup.classList.remove('show');
      popup.textContent = '';
    }, 3000);
  }

  // Form submission handling
  const form = document.getElementById('recommendation-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Get values
    const text = document.getElementById('rec-text').value.trim();
    const author = document.getElementById('rec-author').value.trim();
    if (!text || !author) return; // required validation

    // Create recommendation element
    const container = document.getElementById('recommendations-list');
    const card = document.createElement('article');
    card.className = 'recommendation-card';
    card.tabIndex = 0;

    const pText = document.createElement('p');
    pText.className = 'recommendation-text';
    pText.textContent = text;

    const pAuthor = document.createElement('p');
    pAuthor.className = 'recommendation-author';
    pAuthor.textContent = `– ${author}`;

    card.appendChild(pText);
    card.appendChild(pAuthor);

    // Append new recommendation at the end
    container.appendChild(card);

    // Reset form
    form.reset();

    // Show confirmation popup
    showPopup('Thank you! Your recommendation has been submitted.');
  });
