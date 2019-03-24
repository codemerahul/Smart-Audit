/**
 * Created by Rahul Singh
 */
var express = require('express');
var router = express.Router();
//********************** */

//Controllers

var video = require('../../controllers/video');
var playlist = require('../../controllers/playlist');


//Path Routes
router.get('/', function (req, res, next) {
    res.json('Welcome.. Smart Audit happens here !! ');
});

// Videos Api :
router.get('/allvideo', video.getAllVideos); // pass params shuffle=1 for shuffled result.
router.get('/video', video.getVideosID);
router.get('/video_remove', video.videoRemoveID);
router.post('/addVideo', video.addVideo);

//playlist Api :
router.post('/addplaylist', playlist.addplaylist);
router.get('/allplaylists', playlist.getAllPlaylists); // pass params shuffle=1 for shuffled result.
router.get('/playlist', playlist.getPlaylistID);
router.get('/playlist_remove', playlist.playlistRemoveID);




module.exports = router;