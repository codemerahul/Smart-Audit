/**
 * Created by Rahul Singh
 */

var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
    title: String,
    thumbnailUrl: String,
    videoUrl: String,
    duration: Number,
    created: {
        type: Date,
        default: Date.now
      }
});
var Video = mongoose.model('Video', videoSchema);

// Make this available to our users in our Node applications
module.exports = Video;
