// المكتبة الرقمية - منصة السياحة السعودية
document.addEventListener('DOMContentLoaded', function () {
  // تبديل قائمة الجوال
  var toggle = document.getElementById('menuToggle');
  var menu = document.getElementById('navMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('active');
      });
    });
  }

  // التمرير السلس للروابط الداخلية
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // التعامل مع نموذج الحجز
  var form = document.getElementById('bookingForm');
  var msg = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      var dest = document.getElementById('destination');
      var destText = dest.options[dest.selectedIndex].text;
      if (msg) {
        msg.textContent = 'شكراً ' + name + '! تم استلام طلب حجزك إلى ' + destText + ' وسنتواصل معك قريباً.';
      }
      form.reset();
    });
  }

  // نموذج بحث الطيران
  var flightForm = document.getElementById('flightForm');
  if (flightForm) {
    flightForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var from = document.getElementById('from').value || 'مدينتك';
      var to = document.getElementById('to').value || 'وجهتك';
      alert('جاري البحث عن رحلات من ' + from + ' إلى ' + to + '. اختر إحدى شركات الطيران أو منصات الحجز أدناه للمتابعة.');
    });
  }

  // نموذج بحث الفنادق
  var hotelForm = document.getElementById('hotelForm');
  if (hotelForm) {
    hotelForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var city = document.getElementById('hCity').value || 'المدينة المختارة';
      alert('جاري البحث عن فنادق في ' + city + '. اختر إحدى منصات الحجز الفندقي أدناه للمتابعة.');
    });
  }

  // تأثير ظهور البطاقات عند التمرير
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .guide-card, .stat-item, .airline-card, .hotel-card').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
});
