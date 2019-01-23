
var db = require('../../models');
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const nodemailer = require("nodemailer");

module.exports = function (app) {

    // Get all posts (this correlates to the route api/posts because remember these routes are relative in express)
    app.get('/api/posts', (req, res) => {
        // Get posts from the mock api

        // This should ideally be replaced with a service that connects to MongoDB
        // axios.get(`${API}/posts`)
        //     .then(posts => {
        //         //just some basic handling on a normal get request
        //         res.status(200).json(posts.data);
        //     })
        //     .catch(error => {
        //         res.status(500).send(error)
        //     });

            db.Blogs.findAll({}).then(function (allresults) {
                res.json(allresults);
            })
    });

    app.get('/api/posts/:id', (req, res) => {
        // Get posts from the mock api

            // db.Blogs.findAll({}).then(function (allresults) {
            //     res.json(allresults);
            // })

                db.Blogs.findAll({
            where: {
                id: req.params.id
            }
        }).then(function (allresults) {
            console.log('Response object below');
            console.log(allresults);
            res.json(allresults);
        })
    });

    /* GET api listing. */
    app.post('/mail', (req, res) => {
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


    app.get('/api/users', function (req, res) {
        db.Users.findAll({}).then(function (allresults) {
            res.json(allresults);
        })
    });

    // app.get('/api/classes', function (req, res) {
    //     db.Class.findAll({}).then(function (allresults) {
    //         res.json(allresults);
    //     })
    // });

    // app.get('/api/messages', function (req, res) {
    //     db.Message.findAll({}).then(function (allresults) {
    //         res.json(allresults);
    //     })
    // });

    // app.get(`/api/users/updateclass/:classfilter`, function (req, res) {
    //     db.Class.findAll({
    //         where: {
    //             subject: req.params.classfilter
    //         }
    //     }).then(function (allresults) {
    //         console.log('Response object below');
    //         console.log(allresults);
    //         res.json(allresults);
    //     })
    // });


    // app.get('/api/messages/hasRating', function (req, res) {
    //     var dingus = '';

    //     db.Message.findAll({
    //         where: {
    //             rating: {
    //                 $not: dingus //it doesn't like the ! operator so I'm not sure how to do work this
    //             }
    //         }
    //     }).then(function (allresults) {
    //         console.log('Response object below');
    //         console.log(allresults);
    //         res.json(allresults);
    //     })
    // });

    // app.get('/api/messages/sellingTextbook', function (req, res) {
    //     var dingus = '';

    //     db.Message.findAll({
    //         where: {
    //             textbookSale: {
    //                 $not: dingus //it doesn't like the ! operator so I'm not sure how to do work this
    //             }
    //         }
    //     }).then(function (allresults) {
    //         console.log('Response object below');
    //         console.log(allresults);
    //         res.json(allresults);
    //     })
    // });

    // app.get('/api/messages/buyingTextbook', function (req, res) {
    //     var dingus = '';

    //     db.Message.findAll({
    //         where: {
    //             textbookBuy: {
    //                 $not: dingus //it doesn't like the ! operator so I'm not sure how to do work this
    //             }
    //         }
    //     }).then(function (allresults) {
    //         console.log('Response object below');
    //         console.log(allresults);
    //         res.json(allresults);
    //     })
    // });



    // app.get('/api/messages/message', function (req, res) {
    //     var dingus = '';

    //     db.Message.findAll({
    //         where: {
    //             message: {
    //                 $not: dingus //it doesn't like the ! operator so I'm not sure how to do work this
    //             }
    //         }
    //     }).then(function (allresults) {
    //         console.log('Response object below');
    //         console.log(allresults);
    //         res.json(allresults);
    //     })
    // });

    // app.get('/index/:index', function (req, res) {



    //     var id = req.params.index;
    //     console.log('PARAMETER RECIEVED BELOW');
    //     console.log(id);

    //     db.Users.findAll({
    //         where: {
    //             userid: id
    //         }
    //     })
    //         .then(function (dbPost) {
    //             console.log('Params call below!');
    //             console.log(dbPost[0].dataValues);
    //             res.render('loggedin', dbPost[0].dataValues); //populate this info on logged in /w handlebars
    //         });
    // });


    // app.get('/api/users/updatenames', function (req, res) {
    //     db.Users.findAll({}).then(function (allresults) {
    //         res.json(allresults);
    //     })
    // });

    // app.get('/api/users/updateemail', function (req, res) {
    //     db.Users.findAll({}).then(function (allresults) {
    //         res.json(allresults);
    //     })
    // });




    // app.post('/api', function (req, res) {
    //     db.Users.create({
    //         name: req.body.name,
    //         userid: req.body.id,
    //         email: req.body.email
    //     })
    //         .then(function (dbPost) {
    //             console.log('Post was ran!')
    //             res.json(dbPost);
    //         });


    // });

    // var postObject = {
    //     name: $("#nameEntry").val(),
    //     courseid: $("#courseIDEntry").val(),
    //     subject: $('#subjectEntry').val(),
    //     instructor: $('#instructorEntry').val()
    // }


    // app.post('/class', function (req, res) {
    //     db.Class.create({
    //         name: req.body.name,
    //         courseid: req.body.courseid,
    //         subject: req.body.subject,
    //         instructor: req.body.instructor

    //     })
    //         .then(function (dbPost) {
    //             console.log('Class post was ran!')
    //             res.json(dbPost);
    //         });


    // });

    // app.post('/messages', function (req, res) {
    //     db.Message.create({
    //         name: req.body.name,
    //         message: req.body.message,
    //         rating: req.body.rating,
    //         textbookSale: req.body.textbookSale,
    //         textbookBuy: req.body.textbookBuy,
    //         classid: req.body.classid,
    //         creator: req.body.creator

    //     })
    //         .then(function (dbPost) {
    //             console.log('Class post was ran!')
    //             res.json(dbPost);
    //         });


    // });

    // name: $("#mynameEntry").val(),
    //         message: $("#messageEntry").val(),
    //         rating: $("#ratingEntry").val(),
    //         textbookSale: $('#sellbookEntry').val(),
    //         textbookBuy: $('#sellbookEntry').val(),

    // app.put('/api/update', function (req, res) {
    //     db.Message.update({
    //         message: req.body.message,
    //         rating: req.body.rating,
    //         textbookSale: req.body.textbookSale,
    //         textbookBuy: req.body.textbookBuy,

    //     },
    //         {
    //             where: {
    //                 id: req.body.classid
    //             }
    //         })
    //         .then(function (dbPost) {
    //             console.log('SUCCESS!');
    //             res.json(dbPost);
    //         });


    // });

    // var update = {
    //     name: $(this).parent().find('#mynameEntry').val(),
    //     message: $(this).parent().find('#messageEntry').val(),
    //     rating: $(this).parent().find('#ratingEntry').val(),
    //     textbookSale: $(this).parent().find('#sellbookEntry').val(),
    //     textbookBuy: $(this).parent().find('#buybookEntry').val(),
    //     classid: postedId //this is the only thing that is working for any post other than the first elements post
    // }

    // app.delete('/api/delete/:id', function (req, res) {
    //     console.log('Below is req.params');
    //     console.log(req.params.id);

    //     db.Message.destroy({
    //         where: {
    //             id: req.params.id
    //         }
    //     })
    //         .then(function (dbPost) {
    //             console.log('SUCCESSFULLY DESTROYED!');
    //             res.json(dbPost);
    //         });
    // });

}

