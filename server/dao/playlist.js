/**
 * Created by Rahul Singh
 */
var Q = require('q');

var express = require('express');

mongoose = require('mongoose'); //mongo connection
mongoose.Promise = require('q').Promise;
var playlist = require('../mongo_models/playlist');

module.exports = {
    getAllPlaylists: function () {
        return mongoose.model('Playlist').find({}).exec();
    },
    getPlaylistID: function (id) {
        return mongoose.model('Playlist').findOne({
            _id: id.id
        }).exec();
    },
    playlistRemoveID : function (id) {
        return mongoose.model('Playlist').findOne({
            _id: id.id
        }).remove().exec();
    },
    addplaylist: function (data) {
        var deferred = Q.defer();

        if (data == null) {
            throw new Error("No Log");
        }

        var newItem = new playlist(data);

        newItem.save(function (err, result) {
            if (err)
                deferred.reject(err);
            deferred.resolve();
        });

        return deferred.promise;
    },
};