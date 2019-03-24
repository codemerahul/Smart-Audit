/**
 * Created by Rahul Singh
 */
var Q = require('q');
var express = require('express');

mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

var video_dao = require('../dao/video');

module.exports = {

    getAllVideos: function (req, res, next) {
        return video_dao.getAllVideos()
            .then(function (result) {
                if (req.query.shuffle == '1') {
                    console.log(JSON.stringify(result));
                    var array = result;
                    var i = array.length, j, temp;
                    while (--i > 0) {
                        // getting random nr. as per array size.
                        j = Math.floor(Math.random() * (i + 1));
                        temp = array[j];
                        array[j] = array[i];
                        array[i] = temp;
                    }
                    console.log(array);
                    return res.status(200).json({ status: 'success', video: array });
                }
                else {
                    return res.status(200).json({ status: 'success', video: result });
                }
            })
            .catch(function (error) {
                return res.status(400).json({ status: 'error', error: error.message });
            });
    },
    getVideosID: function (req, res, next) {
        return video_dao.getVideoById(req.query)
            .then(function (result) {
                return res.status(200).json({ status: 'success', video: result });
            })
            .catch(function (error) {
                return res.status(400).json({ status: 'error', error: error.message });
            });
    },
    videoRemoveID: function (req, res, next) {
        return video_dao.videoRemoveID(req.query)
            .then(function (result) {
                return res.status(200).json({ status: 'success', video: result });
            })
            .catch(function (error) {
                return res.status(400).json({ status: 'error', error: error.message });
            });
    },
    addVideo: function (req, res, next) {
        return video_dao.addVideo(req.body)
            .then(function (result) {
                return res.status(200).json({ status: 'success' });
            })
            .catch(function (error) {
                return res.status(400).json({ status: 'error', error: error.message });
            });
    },
};