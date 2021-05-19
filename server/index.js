const express = require('express');
const cookieParser = require('cookie-parser');

//client's routes
const authRoute = require('./routes/auth.route');
const supportRoute = require('./routes/support.route');
const profileRoute = require('./routes/profile.route');
const peopleRoute = require('./routes/people.route');
const filesRoute = require('./routes/files.route');


// admin's routes
const adminRoute = require('./routes/admin.route')
const adminFeedbackRoute = require('./routes/admin.feedback.route')

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

// client's settings to app
app.use('/auth', authRoute);
app.use('/support', supportRoute);
app.use('/profile', profileRoute);
app.use('/people', peopleRoute);
app.use('/files', filesRoute);
app.use(express.static('files'));

// admin's settings to app
app.use('/admin', adminRoute)
app.use('/admin/feedback', adminFeedbackRoute)

app.listen(PORT, () => {
    console.log(`Server stared in port ${PORT}`);
});