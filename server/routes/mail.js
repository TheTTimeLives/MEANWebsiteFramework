const express = require('express');
const router = express.Router();
"use strict";
const nodemailer = require("nodemailer");
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


/* GET api listing. */
router.post('/', (req, res) => {
    //   res.send('mail works');

    //going to need to send a name/company/email and phone from our front end forms with Angular http to do this

    console.log(req.body.name);

    const output = `
<p>You have a new contact request</p>
<h3>Contact Details</h3>
<ul>  
  <li>Name: ${req.body.name}</li>
  <li>Company: ${req.body.company}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone: ${req.body.phone}</li>
</ul>
<h3>Message</h3>
<p>${req.body.message}</p>
`;

    //Gmail is fighting me on this

    // var transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: 'melnikprod@gmail.com',
    //         clientId: '453004191448-u016ibe9f46brsu77edf2qk0o09o6ibp.apps.googleusercontent.com',
    //         clientSecret: 'TNIkl2dsvrCIpi-jTx6xP1rI',
    //         refreshToken: '1/nYzA0yxC2y2_ZIovQZQ4EXHgscVrk6S51btTPDXd7Rw'

    //         // pass: 'NaturalLubricant@5132'
    //     }
    // });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            //   user: serverConfig.gmail.client_user,
            //   clientId: serverConfig.gmail.client_id,
            //   clientSecret: serverConfig.gmail.secret,
            //   refreshToken: serverConfig.gmail.refresh_token,
            //   accessToken: serverConfig.gmail.access_token,
            user: 'melnikprod@gmail.com',
            clientId: '453004191448-u016ibe9f46brsu77edf2qk0o09o6ibp.apps.googleusercontent.com',
            clientSecret: 'TNIkl2dsvrCIpi-jTx6xP1rI',
            refreshToken: '1/nYzA0yxC2y2_ZIovQZQ4EXHgscVrk6S51btTPDXd7Rw',
            accessToken: 'ya29.GluYBlBXKtJSFw_sA3u6nYl2DsS5IjusxdgjXk8-o376NO5kzkdVwOKSN-CnlPqJh8x9URrugyFzCfquPM2eYiaD9U_2ojxIsITabVBuImhzsohVUA-v_v6kKwuB'
        },
    });

    var mailOptions = {
        from: 'melnikprod@gmail.com', //the from email whatever service you are using
        to: 'melnikprod@gmail.com', //which should be my email
        subject: "Hello " + req.body.email,
        text: 'Hello ' + req.body.email + '✔',
        html: output,

    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
            res.send(200);
        }
    });
});



module.exports = router;