/**
 * Created by Rahul Singh
 */
var Q = require('q');

var  express = require('express');

mongoose = require('mongoose'); //mongo connection
mongoose.Promise = require('q').Promise;
var db = require('../mongo_models/db');
var video = require('../mongo_models/video');


module.exports = {
    getAllVideos: function () {
        return mongoose.model('Video').find({}).exec();
    },
    getVideoById: function (id) {
        return mongoose.model('Video').findOne({
            _id: id.id
        }).exec();
    },
    videoRemoveID : function (id) {
        return mongoose.model('Video').findOne({
            _id: id.id
        }).remove().exec();
    },
    addVideo: function (data) {
        var deferred = Q.defer();

        if (data == null) {
            throw new Error("No Log");
        }

        var newItem = new video(data);

        newItem.save(function (err, result) {
            if (err)
                deferred.reject(err);
            deferred.resolve();
        });

        return deferred.promise;
    },
};