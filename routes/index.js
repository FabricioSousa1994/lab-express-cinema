const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/*GET home page*/

router.get('/movies',  async (req, res, next) => {
    try {
        const allMovies = await Movie.find();
        res.render('movies', {movies: allMovies})
    } catch(error) {
        //calling the error middleware
        next(error)
    }
});

router.get('/', (req, res, next) => {
    res.render("index")
})


router.get('movies/:Id', async (req, res, next) => {
    try {
        const {Id} = req.params;

        const movie = await Movie.findById(Id);
        res.render('movie-details', movie);
    } catch(error) {
        next(error)
    }
});

/*router.get("/movies/:id", (req, res, next) => {
    let movieID = req.params.id;
    console.log(movieID);
    Movie.findById(movieID)
      .then((theMovie) => {
        console.log("Retrieved movie from DB:", theMovie);
        res.render("movie-details", theMovie);
      })
      .catch((error) => {
        console.log("Error while getting the movie from the DB: ", error);
        next(error);
      });
  });*/


module.exports = router;
