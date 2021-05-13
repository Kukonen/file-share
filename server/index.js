const express = require('express');
const authRoute = require('./routes/auth.route');
const supportRoute = require('./routes/support.route');
const profileRoute = require('./routes/profile.route');
const peopleRoute = require('./routes/people.route');
const filesRoute = require('./routes/files.route');
const cookieParser = require('cookie-parser');

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoute);
app.use('/support', supportRoute);
app.use('/profile', profileRoute);
app.use('/people', peopleRoute);
app.use('/files', filesRoute);

app.listen(PORT, () => {
    console.log(`Server stared in port ${PORT}`);
});