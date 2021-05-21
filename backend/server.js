const express = require('express');
const app = express();

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

const PORT = process.env.BACKEND_PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));