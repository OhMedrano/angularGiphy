'use strict';




angular.module('giphyList').
  component('giphyList', {
    controller: function(giphySvc) {
      const _giphyList = this;

      _giphyList.state = {
        currentGiphyList: [],
        loaded: false,
      }

      
      giphySvc.getGiphy().then((res) => {
        angular.forEach(res.data, (giphy, i) => {
          _giphyList.state.currentGiphyList.push(giphy);
        })
        _giphyList.state.loaded = true;
      })



/*            giphySvc.getGiphy().then((res) => {
              vm.results = res.data;
              console.log(res.data);
              console.log('sup');
            });*/

      console.log(_giphyList);

      _giphyList.title = 'hey';
      _giphyList.click = 0;
      _giphyList.somethingClick = () => {
        console.log('clicked');
        _giphyList.click += 1;
        _giphyList.title = 'Clicked ' + _giphyList.click + ' times';
      }
    },
    controllerAs: 'vm',
    templateUrl: '/src/templates/giphy-list.html'  
  })



/*  controller('GiphyListController',function($scope) {
    console.log('hey from giphyListCtrl in giphyListComponent');

      $scope.title = 'Hey';
      $scope.clicks= 0 ;
      $scope.somethingClick = () => {
        console.log('clicked');
        $scope.clicks += 1;
        $scope.title = 'clicked';
      }
  });*/