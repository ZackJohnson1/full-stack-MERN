import mongoose from 'mongoose';
import 'dotenv/config';

// Connects using .env
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Message
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500 error: Connection to the server failed.' });
    } else  {
        console.log('Success: Connected to MongoDB using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const tennisMatchSchema = mongoose.Schema({
	opponent:   { type: String, required: true },
	score:      { type: String, required: true },
	location:   { type: String, required: true },
    surface:    { type: String, required: true },
    winners:    { type: Number, required: true },
    unforcedErrors: { type: Number, required: true },
});

// Compile the model from the schema.
const TennisMatch = mongoose.model('Tennis Match', tennisMatchSchema);


// CREATE model *****************************************
const createMatch = async (opponent, score, location, surface, winners, unforcedErrors) => {
    const tennisMatch = new TennisMatch({ 
        opponent: opponent, 
        score: score, 
        location: location,
        surface: surface,
        winners: winners,
        unforcedErrors: unforcedErrors
    });
    return tennisMatch.save();
}


// RETRIEVE models 
const retrieveMatches = async () => {
    const query = TennisMatch.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMatchByID = async (_id) => {
    const query = TennisMatch.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  
const deleteMatchById = async (_id) => {
    const result = await TennisMatch.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model 
const updateMatch = async (_id, opponent, score, location, surface, winners, unforcedErrors) => {
    const result = await TennisMatch.replaceOne({_id: _id }, {
        opponent: opponent,
        score: score,
        location: location,
        surface: surface,
        winners: winners,
        unforcedErrors: unforcedErrors
    });
    return { 
        _id: _id, 
        opponent: opponent,
        score: score,
        location: location,
        surface: surface,
        winners: winners,
        unforcedErrors: unforcedErrors
    }
}

export { createMatch, retrieveMatches, retrieveMatchByID, updateMatch, deleteMatchById }