// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500 error: Connection to the server failed.' });
    } else  {
        console.log('Success: Connected to MongoDB using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const tennisMatchSchema = mongoose.Schema({
	opponent:    { type: String, required: true },
	score:     { type: Number, required: true },
	location: { type: String, required: true },
    surface: { type: String, required: true }
});

// Compile the model from the schema.
const TennisMatch = mongoose.model('Tennis Match', tennisMatchSchema);


// CREATE model *****************************************
const createMatch = async (opponent, score, location, surface) => {
    const tennisMatch = new TennisMatch({ 
        opponent: opponent, 
        score: score, 
        location: location,
        surface: surface
    });
    return tennisMatch.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveMatches = async () => {
    const query = TennisMatch.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMatchByID = async (_id) => {
    const query = TennisMatch.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMatchById = async (_id) => {
    const result = await TennisMatch.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateMatch = async (_id, opponent, score, location, surface) => {
    const result = await TennisMatch.replaceOne({_id: _id }, {
        opponent: opponent,
        score: score,
        location: location,
        surface: surface
    });
    return { 
        _id: _id, 
        opponent: opponent,
        score: score,
        location: location,
        surface: surface 
    }
}



// Export our variables for use in the controller file.
export { createMatch, retrieveMatches, retrieveMatchByID, updateMatch, deleteMatchById }