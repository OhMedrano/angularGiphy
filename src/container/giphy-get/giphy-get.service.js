'use strict';

class GiphySvc {
  constructor($http) {
    this.$http = $http;
    this.ratings = ['Y','G','PG','PG-13','R'];
    this.apiItems = {
      aKey: '7DXpPRJfcUB88B0He7jdFe0nGrW8oAj4',
      baseUrl: 'https://api.giphy.com/v1/gifs/',
      limit: 25,
      offset:2,
      rating: 4,
      lang: 'en',
      searchType:'search',
      query:'anime',
    }
  }

  getGiphy(searchType,query,limit,rating,lang,offset) {
   let oldApiCall = this.apiItems;
   let newApiCall = {};
   let compiledApi = '';
    angular.forEach(oldApiCall, (item, i) => {

      newApiCall[i] = item;
      if(arguments[0]) {
        newApiCall[i] = arguments[0][i]; // Need to redo this for more of a spread
      }
      console.log(arguments[0][i]);
    })
/*    
    compiledApi = newApiCall.baseUrl+
                  newApiCall.searchType+
                  '?api_key='+newApiCall.aKey+
                  '&q='+newApiCall.query+
                  '&limit='+newApiCall.limit+
                  '&offset='+newApiCall.offset+
                  '&rating='+newApiCall.rating+
                  '&lang='+newApiCall.lang; */



    compiledApi = this.apiItems.baseUrl+
                  newApiCall.searchType+
                  '?api_key='+this.apiItems.aKey+
                  '&q='+newApiCall.query+
                  '&limit='+newApiCall.limit+
                  '&offset='+newApiCall.offset+
                  '&rating='+this.ratings[newApiCall.rating]+
                  '&lang='+newApiCall.lang; 



   return this.$http.get(compiledApi);
  }

}


console.log('firing off in service')
angular.module('giphyGet').
        service('giphySvc', GiphySvc);

/*        service('giphySvc', function() {
          console.log('in giphySvC');
        });*/