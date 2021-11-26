var express = require("express");
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var path = require('path');
var fs = require('fs');
var geoip = require('./geoip/ipfind.js');
var geoloc = require('./geoip/locationfind.js');
var multer = require('multer');


mongoose.connect("mongodb://localhost/medapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

var geoip = require('./geoip/ipfind.js');
var geoloc = require('./geoip/locationfind.js');




var bodyParser = require("body-parser");
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
        extended: true
}));


var medSchema = new mongoose.Schema({
        shopname: String,
        coordinates: [{
                type: Number
        }],
        medicines: [{
                type: String
        }],
        images: String,
        address: String,
        // img: 
        //   { data: Buffer, contentType: String },





});

var med = mongoose.model("med", medSchema);



// med.create({
//         shopname:'Himgiri medical store',
//         address:"chehru",

//         medicines:['avil','aciloc'],

//         images:"https://static01.nyt.com/images/2019/03/05/opinion/05Fixes-1/05Fixes-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
//     coordinates: [31.258171,75.706748],


// });

//med.create({

 //   shopname:'Som medical store',
 //   address:"nakodar",
//
 //   medicines:['soframycin','aciloc','randicide','apresoline'],

  //   images:"https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&w=1000&q=80",
  //   coordinates:[31.1270,75.4818],


        
 //   })
 //med.create({

   // shopname:'Garg medical store',
   // address:"jalandhar",

  //  medicines:['para','aciloc','randicide','citrizine','aspirin','soframycin'],

    // images:"https://static01.nyt.com/images/2019/03/05/opinion/05Fixes-1/05Fixes-1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
     //coordinates:[31.2809121,75.5777338],


        
  //  })
//   med.create({

//     shopname:'Chaudhary medical store',
//     address:"una",

//     medicines:['avil','aciloc','ketoconazole'],

//      images:"https://image.shutterstock.com/image-photo/pills-260nw-596838386.jpg",
//      coordinates:[31.4685,76.2708],


        
//     })
    
    /*med.create({

    shopname:'Health Centre',
    address:"University hospital,NIT ",

    medicines:['para','randicide','dextromethorphan','honitus','combiflame'],

     images:"https://lh5.googleusercontent.com/p/AF1QipM-Z8q5pYzBIBkqGhwRsVkb7rog8s4X91u9u33x=w408-h306-k-no",
     coordinates:[31.7076,76.5274],


        
    })
*/
/*med.create({

    shopname:'Prabha  Pharmacy',
    address:"jalandhar",
 
    medicines:['para','aciloc','randicide','altace'],

     images:"https://image.shutterstock.com/image-photo/pills-260nw-596838386.jpg",
     coordinates:[31.2444582,75.7022562],

        
    })


med.create({

    shopname:'Pawan pharmacy',
    address:"jalandhar",

    medicines:['para','aciloc','randicide','paracetamol','altace'],
    
 images:"https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
     coordinates:[31.2444582, 75.7022562],

    

        
    })
med.create({

    shopname:'India medicine centre',
    address:"jalandhar",

    medicines:['para','aciloc','acetazolamide','livicetrizine','aspirin'],

     images:"https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
     coordinates:[31.2444582, 75.702256231],


        
    })

med.create({

    shopname:'Garg medical store',
    address:"jalandhar",

    medicines:['para','aciloc','randicide','citrizine','aspirin','soframycin'],

     images:"https://image.shutterstock.com/image-photo/medicine-concept-various-capsules-pack-600w-1457061323.jpg",
     coordinates:[31.2809121,75.5777338],


        
    })
    */

/*med.create({

    shopname:'Som medical store',
    address:"nakodar",

    medicines:['soframycin','aciloc','randicide','apresoline'],

     images:"https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&w=1000&q=80",
     coordinates:[31.1270,75.4818],


        
    })
*/

/*med.create({

    shopname:'Mehmi Pharmacy',
    address:"dehsian sang",

    medicines:['para','ketoderm','combiflame','b12','apresoline'],

     images:"https://images.unsplash.com/photo-1549477752-31cd7327aed0?ixlib=rb-1.2.1&w=1000&q=80",
     coordinates:[31.1241,75.7415],


        
    })

med.create({

    shopname:'Man medical store',
    address:"lambra",

    medicines:['para','crocin','ketoconazole','fexofenadine'],

     images:"https://image.shutterstock.com/image-photo/pills-260nw-689358265.jpg",
     coordinates:[31.2697559,75.4795549],

    
  
    })
*/

// med.create({

//     shopname:'Chaudhary medical store',
//     address:"una",

//     medicines:['avil','aciloc','ketoconazole'],

//      images:"https://image.shutterstock.com/image-photo/pills-260nw-596838386.jpg",
//      coordinates:[31.4685,76.2708],


        
//     })

// med.create({

//     shopname:'Him medical store',
//     address:"shimla",

//     medicines:['para','avil','randicide','diegene'],

//  images:"https://image.shutterstock.com/image-photo/drug-prescription-treatment-medication-pharmaceutical-600w-1080582098.jpg",
//      coordinates:[31.1048,77.1734],

    

        
//     })
    
/*med.create({

    shopname:'Vaishno medical store',
    address:"anu",

    medicines:['zivi','strepcils','randicide'],

     images:"https://image.shutterstock.com/image-photo/pills-260nw-751878781.jpg",
     coordinates:[35.2777,149.1185],


        
    })
    */

/*med.create({

    shopname:'kamal AY medical store',
    address:"kuthera upperla, hamirpur",

    medicines:['crocil','aciloc','cafcit','b12','mefloquine','primaquine phosphate'],

     images:"https://image.shutterstock.com/image-photo/variety-medicines-drugs-260nw-1522933457.jpg",
     coordinates:[31.7113,76.5132],


        
    })
    */

/*med.create({

    shopname:'Rajeev medical store',
    address:"chauki, hamirpur",

    medicines:['para', 'wellbutrin','glucone-d'],

     images:"https://image.shutterstock.com/image-photo/drug-prescription-treatment-medication-pharmaceutical-600w-1436545523.jpg",
     coordinates:[31.7274,76.5072],


        
    })


med.create({

    shopname:'Abhishek Medicare',
    address:"near gandhi gate,",

    medicines:['para','mucinex','randicide','honitus','mefloquine','primaquine phosphate'],

 images:"https://lh5.googleusercontent.com/p/AF1QipN-o4ckUGSeJBqaXdTKmnGzx3tJMrBaYyM66KSU=w408-h244-k-no				",
     coordinates:[31.6862,76.5213],

    
        
    })

med.create({

    shopname:'Health Centre',
    address:"University hospital,NIT ",

    medicines:['para','randicide','dextromethorphan','honitus','combiflame'],

     images:"https://lh5.googleusercontent.com/p/AF1QipM-Z8q5pYzBIBkqGhwRsVkb7rog8s4X91u9u33x=w408-h306-k-no",
     coordinates:[31.7076,76.5274],


        
    })
*/

/*med.create({

    shopname:'Punam department and medical store',
    address:"hardaspur",

    medicines:['calcium','aciloc','zyvox','cough syrup'],

     images:"https://lh5.googleusercontent.com/p/AF1QipOTRb8t_8D05_QeQUMuQ_dXJyDbbiJlbMo-hH0E=w408-h544-k-no",
     coordinates:[31.6862,76.5213],


        
    })
*/

/*med.create({

    shopname:'Patanjali store',
    address:"hamirpur",

    medicines:['dantkanti','drishti','ashwagandha','divya medha vati'],

     images:"https://lh5.googleusercontent.com/p/AF1QipOEd0vahzCaWf-GnAze3oXP57jg6AFzx4tosBv_=w408-h306-k-no",
     coordinates:[31.6862,76.5213],


        
    })
    */

/*med.create({

    shopname:'osho medical store',
    address:"chehru",

    medicines:['para','aciloc','randicide','aspirin'],

    
 images:"https://image.shutterstock.com/z/stock-photo-drug-prescription-for-treatment-medication-pharmaceutical-medicament-cure-in-container-for-health-1538725766.jpg",
     coordinates:[31.5213092,75.5125855],

        
    })
*/

/*med.create({

    shopname:'Uni Hospital,LPU',
    address:"kapurthala,lpu",

    medicines:['antihistamin','aciloc','robitusin','para','aspirin','honitus','combiflame'],

     images:"https://lh5.googleusercontent.com/p/AF1QipPeRpQS3Ao9XoAyZ2jMgAWwBLITKs56X3_y-9is=w408-h306-k-no",
     coordinates:[31.2517723,75.6942763],


        
    })

    med.create({

    shopname:'kamadhenu medical store',
    address:"lucknow,U.P",

    medicines:['antihistamin','aciloc','robitusin','para','altace','apresoline'],

     images:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtIJ-Tq8wFuQceiq7dQXK70CT8seqKt-rHGeIW3LKH1I8tdd05",
     coordinates:[27.211772,81.013445],


        
    })


    med.create({

    shopname:'anurag medical store',
    address:"lucknow,U.P",

    medicines:['antihistamin','aciloc','loratadine','fexofenadine','aspirin','honitus','combiflame'],

     images:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ21KfQ8UA11nQnA_zCaWsBqPJLGNiKhN7B_yu4CHyUTi6562EJ",
     coordinates:[27.116316,80.949584],


        
    })


    med.create({

    shopname:'friends medical store',
    address:"punjab",

    medicines:['antihistamin','aciloc','isoniazid','rifampicin','pyrazinamide','ethambutol','combiflame'],

     images:"https://image.shutterstock.com/image-photo/drug-prescription-treatment-medication-pharmaceutical-260nw-512525938.jpg",
     coordinates:[31.258171,75.706748],


        
    })



    med.create({

    shopname:'surjit medical store',
    address:"mehat,punjab",

    medicines:['antihistamin','aciloc','cipzer','aspirin','honitus','combiflame'],

     images:"https://previews.123rf.com/images/alexfamous/alexfamous1610/alexfamous161000015/67666225-drug-ampules-prescription-for-treatment-medication-pharmacy-theme-pharmaceutical-medicament-for-heal.jpg",
     coordinates:[31.246429, 75.734605],


        
    })
*/


   /* med.create({

    shopname:'guru nanak medical store',
    address:"sapror,punjab",

    medicines:['antihistamin','cipzer','robitusin','isoniazid','rifampicin','honitus','combiflame'],

     images:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT00tTEJDt5U4mmOnuvfJQ3ExiRKDCDz6qime63WVgdIxWYazbf",
     coordinates:[31.255515, 75.723780],


        
    })
*/



   /* med.create({

    shopname:'verma medical store',
    address:"opposite regional hospital,agriculture colony,hamirpur",

    medicines:['antihistamin','cipzer','aceon','para','aspirin','honitus','combiflame'],

     images:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMee9XZhTPNnYmD2rs_EDhD0zlOyXWBQkxYZlWLsNT6ThIAxfz",
     coordinates:[31.752806, 76.534028],


        
    })


    med.create({

    shopname:'jai medical store',
    address:"kohta,hamirpur",

    medicines:['Laxatives','cipzer','Antacid','para','aspirin','honitus','combiflame'],

     images:"https://www.pexels.com/assets/icons/safari-pinned-tab-c3a22dad034351c9cda8c3bb257bc04b235e17785a945a3295ed21d0c340c7de.svg",
     coordinates:[31.752811, 76.532094],


        
    })
*/

   /* med.create({

    shopname:'tianjin chinese and western drug store 天津市中西大药房 ',
    address:"nakai,tianjin,China",

    medicines:['antihistamin','cipzer','ors','Laxatives','aspirin','honitus','combiflame'],

     images:"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     coordinates:[40.325803, 116.917700],


        
    })
*/

   /* med.create({

    shopname:'Guoyitang Medicine Store',
    address:"hebei,tianjin,China",

    medicines:['antihistamin','aciloc','robitusin','cipzer','aspirin','honitus','combiflame'],

     images:"https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     coordinates:[40.491771, 117.131538],


        
    })
*/

   /* med.create({

    shopname:'Tianjin Kangyuan Drug Store',
    address:"tianjin,China",

    medicines:['antihistamin','ors','cipzer','para','aspirin','mefloquine' ,'primaquine phosphate','combiflame'],

     images:"https://images.pexels.com/photos/47073/nutrient-additives-medicine-pills-bless-you-47073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     coordinates:[40.470254, 117.466376],


        
    })
*/

    /*med.create({

    shopname:'dev Hospital,LPU',
    address:"kohta ,hamirpur",

    medicines:['antihistamin','aciloc','robitusin','para','aspirin','honitus','combiflame'],

     images:"https://images.pexels.com/photos/2280568/pexels-photo-2280568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
     coordinates:[31.731789, 76.532090],


        
    })


    med.create({

    shopname:'Uni Hospital,LPU',
    address:"kapurthala,lpu",

    medicines:['antihistamin','aciloc','robitusin','para','aspirin','honitus','combiflame'],

     images:"https://lh5.googleusercontent.com/p/AF1QipPeRpQS3Ao9XoAyZ2jMgAWwBLITKs56X3_y-9is=w408-h306-k-no",
     coordinates:[31.2517723,75.6942763],


        
    })
*/

app.get('/', (req, res) => {

        res.render('index.html');
}).listen(8080)


// app.get('/maps', (req, res) => {
//         res.render('map.html',{



//         });
// });

// app.get('/find',cors(), function (req, res) {
//     var medi = req.params.query;
//     console.log(medi.name);
//     med.find({
//         'medicines': medi
//     }, function (err, result) {
//         if (err) {
//             console.log(err)
//         };
//         if (result) {
//             console.log(res.medicines);
//         } else {
//             res.send(JSON.stringify({
//                 error: 'Error'
//             }))
//         }
//     })
// });


app.post('/find', cors(), function (req, res) {
        var medi = req.body.name.toLowerCase();
        // console.log(req.body);
        med.find({
                'medicines': medi
        }, function (err, shops) {
                if (err) {
                        console.log(err);
                };
                if (shops) {
                        // res.json(shops[0].shopname);
                        // console.log(result[0].shopname);
                        res.render('shop.html', {
                                shops: shops
                        });
                } else {
                        res.send(JSON.stringify({
                                error: 'Error'
                        }))
                }
        })
});


app.get('/maps', (req, res) => {


        



        var coordinates = {
                latitude: Number(req.query.latitude),
                longitude: Number(req.query.longitude)
        };
        // var coordinatesarray=[Number(req.query.latitude),Number(req.query.longitude)];

        console.log(coordinates);
        res.render('map.html', {
                coordinates
        });

});


app.post('/maps', function (req, res) {
        var coordinates = {
                latitude: Number(req.query.latitude),
                longitude: Number(req.query.longitude)
        };
        // var coordinatesarray=[Number(req.query.latitude),Number(req.query.longitude)];

        // console.log(coordinates);
        res.render('map.html', {
                coordinates
        });

});