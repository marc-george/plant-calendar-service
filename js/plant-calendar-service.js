(function () {
  'use strict';

  Polymer({

    is: 'plant-calendar-service',

    properties: {
      /**
       * Root URL used to access the plant calendar API
       */
      rootUrl: {
        type: String,
        value: '/plantCalendar/api/v1'
        // value: 'https://site-calendar-api-test.run.aws-usw02-pr.ice.predix.io/api/v1'
      },
      /**
       * UAA Bearer token with access to the specified API
       *
       * Best practice: use a proxy server to inject tokens
       * */
      token: {
        type: String
      }
    },

    /**
     * Get a shift by ID.
     * @param {String} id Parent Location ID
     * @return {Promise}
     * */
    getShiftById: function (id) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/shifts/' + id,
        method: 'GET'
      });
    },

    /**
     * Get shifts by parent location ID.
     * @param {String} id Parent Location ID
     * @return {Promise}
     * */
    getShiftsBySiteId: function (id) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/locations/' + id + '/shifts',
        method: 'GET'
      });
    },

    /**
     * Get shifts by parent location ID.
     * @param {String} id Parent Location ID
     * @return {Promise}
     * */
    postShiftForSite: function (id, shift) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/locations/' + id + '/shifts',
        method: 'POST',
        body: shift
      });
    },

    /**
     * Get all events for a site  by site id
     *
     * @param {String} id site from context
     * @return {Promise} promise
     * */
    getEventsBySiteId: function (id) {
      console.log('sending event request!');
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/locations/' + id + '/events',
        method: 'GET'
      });
    },

    /**
     * Get a single event by event id
     * @param {String} id id from context
     * @return {Promise} promise
     * */
    getEventByEventId: function (id) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/event/' + id,
        method: 'GET'
      });
    },

     /**
      * Create a new event for a site given a site Id
      *
      * @param {Object} body event object
      * @param {String} id site Id to associate with the event
      * @return {Promise} promise
      * */
    createEvent: function (body, id) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/locations/'+ id + '/events',
        method: 'POST',
        body: body
      });
    },

     /**
      * Delete an event by event Id
      *
      * @param {String} id id of event to delete
      * @return {Promise} promise
      * */
    deleteEvent: function (id) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/events/' + id,
        method: 'DELETE'
      });
    },

     /**
      * Update an event by event Id
      * @param {String} id id of event to delete
      * @param {Object} body new event object
      * @return {Promise} promise
      * */
    updateEvent: function (id, body) {
      return this.$.promiseUtility.sendRequest({
        url: this.rootUrl + '/events/' + id,
        method: 'PUT',
        body: body
      });
    }
  });
}());
