var db = require('../models');

module.exports = function(app){

    // NEW TRIP
    app.post('/api/trip/new',function(req,res){
        var new_trip = req.body;
        console.log(new_trip);
        db.Trip.create(new_trip).then(data =>{
            res.json(data);
        })
    })

    // UPDATE A TRIP'S DETAILS
    app.put('/api/trip/update/:trip_id', (req,res) => {
        var trip_id = req.params.trip_id;
        db.Trip.update(
            req.body,
            {
                where:
                {id: trip_id}
            }
        )
    })

}