const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample data for attractions
const attractions = [
  {
        id: 1,
        name: 'البحة البيضاء',
        location: 'الضهرة - البحة',
        description: 'منطقة حاره بيضاء زاخرة بالثروة الجيولوجية',
        image: 'https://via.placeholder.com/400x300?text=AlBaha'
  },
  {
        id: 2,
        name: 'مدينة العلا',
        location: 'تبوك',
        description: 'موقع أثري قديم به نقوش عربية وآثار تاريخية',
        image: 'https://via.placeholder.com/400x300?text=AlUla'
  },
  {
        id: 3,
        name: 'كهوف طنية',
        location: 'الباحة',
        description: 'ممرات جميلة رائعة للاستكشاف والمشي',
        image: 'https://via.placeholder.com/400x300?text=Taniya'
  },
  {
        id: 4,
        name: 'جبال السروات',
        location: 'الباحة وعسير',
        description: 'جبال شاهقة بطبيعة خلابة وطرق جميلة',
        image: 'https://via.placeholder.com/400x300?text=Sarawat'
  },
  {
        id: 5,
        name: 'رحبة ابن عباس',
        location: 'جدة',
        description: 'حديقة تاريخية بها معالم معمارية رائعة',
        image: 'https://via.placeholder.com/400x300?text=RahabaTours'
  },
  {
        id: 6,
        name: 'وادي الديسة',
        location: 'تبوك',
        description: 'منطقة صحراوية برية برية رائعة للاستكشاف',
        image: 'https://via.placeholder.com/400x300?text=WadiDisah'
  }
  ];

// Sample guides
const guides = [
  {
        id: 1,
        name: 'محمد العبيدي',
        region: 'المنطقة الشرقية',
        rating: 4.8,
        phone: '+966501234567',
        image: 'https://via.placeholder.com/150?text=Guide1'
  },
  {
        id: 2,
        name: 'فاطمة الزهراني',
        region: 'مكة والمدينة',
        rating: 4.9,
        phone: '+966502345678',
        image: 'https://via.placeholder.com/150?text=Guide2'
  },
  {
        id: 3,
        name: 'علي الدعجاني',
        region: 'الرياض',
        rating: 4.7,
        phone: '+966503456789',
        image: 'https://via.placeholder.com/150?text=Guide3'
  }
  ];

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API Routes
app.get('/api/attractions', (req, res) => {
    res.json(attractions);
});

app.get('/api/attractions/:id', (req, res) => {
    const attraction = attractions.find(a => a.id === parseInt(req.params.id));
    if (!attraction) return res.status(404).json({ message: 'Not found' });
    res.json(attraction);
});

app.get('/api/guides', (req, res) => {
    res.json(guides);
});

app.post('/api/bookings', (req, res) => {
    const { name, email, phone, tourType, startDate, endDate, guests } = req.body;

           if (!name || !email || !phone) {
                 return res.status(400).json({ message: 'Missing required fields' });
           }

           const booking = {
                 id: Math.random().toString(36).substr(2, 9),
                 name,
                 email,
                 phone,
                 tourType,
                 startDate,
                 endDate,
                 guests,
                 status: 'pending',
                 createdAt: new Date()
           };

           console.log('New booking:', booking);
    res.status(201).json({
          message: 'تم استقبال حجزك بنجاح! سيتم التواصل معك قريباً',
          booking
    });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

           if (!name || !email || !message) {
                 return res.status(400).json({ message: 'Missing required fields' });
           }

           console.log('New contact:', { name, email, message });
    res.status(201).json({
          message: 'شكراً لتواصلك معنا، سنرد عليك قريباً'
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running', timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Saudi Tourism Platform Backend Started ✓');
});
