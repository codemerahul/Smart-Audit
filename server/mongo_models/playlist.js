/**
 * Created by Rahul Singh
 */
var mongoose = require('mongoose');

var playlistSchema = new mongoose.Schema({
    name: String,
    videos: [],
    created: {
        type: Date,
        default: Date.now
      }
});
var Playlist = mongoose.model('Playlist', playlistSchema);

// Make this available to our users in our Node applications
module.exports = Playlist;
