/**
 * Created by trinm on 2022/06/27
 * handle model
 */
 var Promise = require('bluebird');
 var mongoose = require('mongoose');

 const moment = require('moment');

 module.exports = function(Entity){
     //mongoose check if model exists
     if(mongoose.models[Entity]){
         return {
             model: mongoose.models[Entity]
         }
     }
     /**
      * @module Collection
      * @description contain the details of Collection information, conditions and actions.
      */
  
     var Schema = mongoose.Schema;
     var CollectionSchema = new Schema({
        'urlId': { type: String, required: true},
        'origUrl': { type: String,required: true},
        'shortUrl': { type: String,required: true},
        'clicks': { type: Number,required: true, default: 0},
        'date': { type: String, default: Date.now},
     },{ versionKey: false });
     
     CollectionSchema.statics = {
 
         /**
          * find one. return the one Collection object.
          */
         get: function (query) {
             var that = this;
             return new Promise(function(resolve, reject) {
                 that.findOne(query, function(err, doc){
                     if (err) { Log.error(err.message); reject(Error(err.message)); }
                     //check data empty
                     if(doc){
                         resolve(doc);
                     }
                     reject(Error('Item is empty!'));
                 });
             });
         },
         
         /**
          * find all. return the Collection objects array.
          */
         getAll: function (query) {
             var that = this;
             return new Promise(function(resolve, reject) {
                 that.find(query, function(err, doc){
                     if (err) { Log.error(err.message); reject(Error(err.message)); }
                     //check data empty
                     if(doc && doc.length){
                         resolve(doc);
                     }
                     reject(Error('Collection is empty!'));
                 });
             });
 
         },
 
         /**
          * find all limit. return the Collection objects array.
          */
         getLimit: function (query, limit) {
             var that = this;
             return new Promise(function(resolve, reject) {
                 that.find(query)
                 .limit(limit || 10)
                 .sort({'_id': -1})
                 .exec(function(err, doc){
                     if (err) { Log.error(err.message); reject(Error(err.message)); }
                     //check data empty
                     if(doc && doc.length){
                         resolve(doc);
                     }
                     reject(Error('Collection is empty!'));
                 });
             });
 
         },
 
         create: function (data) {
             var that = this;
             return new Promise(function(resolve, reject) {
                 var Collection = new that(data);
                 Collection.save(function(err, doc){
                     if (!err) {
                         resolve(doc);
                     }
                     else { Log.error(err.message); reject(Error(err.message)); }
                 });
             });
 
         },
 
         updateById: function (id, data) {
             var that = this;
             return new Promise(function(resolve, reject) {
                 that.findOneAndUpdate({ _id: id }, data, function (err, doc) {
                     if (!err) {
                         var updateData = data;
                             updateData['_id'] = id;
                         resolve(updateData);
                     }
                     else { Log.error(err.message); reject(Error(err.message)); }
                 });
             });
 
         },
 
         removeById: function (id) {
             var that = this;
             return new Promise(function(resolve, reject) {
                 that.findByIdAndRemove(id, function(err, doc){
                     if (err) { Log.error(err.message); reject(Error(err.message)); }
                     if(doc){
                         resolve(doc);
                     }
                     reject(Error('Remove is empty!'));
                 });
             });
             
         },
          
     }
 
     var model = mongoose.model(Entity, CollectionSchema, Entity);
 
     /** export schema */
     return {
        model: model
     }
 
 };