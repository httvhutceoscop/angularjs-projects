"use strict";
angular.module('F1FeederApp.services', [])
  .factory('ergastAPIservice', function($http) {

    var ergastAPI = {};    

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getDriverRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getTeams = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/constructorStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getTeamDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/constructors/'+ id +'/constructorStandings.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getTeamRaces = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/constructors/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getRaceWinners = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/results/1.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getRaces = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getRaceDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/'+ id +'/results.json?callback=JSON_CALLBACK'
      });
    }

    ergastAPI.getQualiDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/'+g_year+'/'+ id +'/qualifying.json?callback=JSON_CALLBACK'
      });
    }

    return ergastAPI;
  });