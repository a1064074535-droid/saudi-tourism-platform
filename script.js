// Saudi Tourism Platform - JavaScript

document.addEventListener('DOMContentLoaded', function() {
      console.log('Saudi Tourism Platform loaded');
      initializeEventListeners();
});

function initializeEventListeners() {
      // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
              btn.addEventListener('click', function() {
                            const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];
                            showTab(tabName);
              });
    });

    // Button click handlers
    document.querySelectorAll('.btn-primary').forEach(btn => {
              btn.addEventListener('click', handleBooking);
    });

    document.querySelectorAll('.btn-secondary').forEach(btn => {
              btn.addEventListener('click', handleTourBook);
    });
}

function showTab(tabName) {
      // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
              tab.classList.remove('active');
    });

    // Remove active class from buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
              btn.classList.remove('active');
    });

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
      if (selectedTab) {
                selectedTab.classList.add('active');
      }

    // Add active class to clicked button
    event.target.classList.add('active');
}

function handleBooking() {
      const form = event.target.closest('form');
      if (form && form.checkValidity()) {
                const formData = new FormData(form);
                console.log('Booking submitted:', Object.fromEntries(formData));
                alert('تم استقبال طلب الحجز الخاص بك!');
                form.reset();
      }
}

function handleTourBook() {
      console.log('Tour booking initiated');
      const tourName = event.target.closest('.card').querySelector('h3').textContent;
      alert(`سيتم التواصل معك قريباً بخصوص: ${tourName}`);
}

function openWhatsApp() {
      const phoneNumber = '+966501234567';
      const message = 'السلام عليكم، أود الاستفسار عن الخدمات';
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
}
