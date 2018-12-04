'use strict';

class GiphySvc {
  constructor($http) {
    this.$http = $http;
    this.apiItems = {
      aKey: '7DXpPRJfcUB88B0He7jdFe0nGrW8oAj4',
      baseUrl: 'https://api.giphy.com/v1/gifs/',
      limit: 25,
      offset:2,
      rating: 'G',
      lang: 'en',
      searchType:'search',
      query:'fun',
    }
  }

  getGiphy(pageType,id) {
   let oldApiCall = this.apiItems;
   let newApiCall = {};
   let compiledApi = '';
    angular.forEach(oldApiCall, (item, i) => {
      newApiCall[i] = item;
    })
    
    compiledApi = newApiCall.baseUrl+newApiCall.searchType+'?api_key='+newApiCall.aKey+'&q='+newApiCall.query+'&limit='+newApiCall.limit+'&offset='+newApiCall.offset+'&rating='+newApiCall.rating+'&lang='+newApiCall.lang; 

   return this.$http.get(compiledApi);
  }

}


console.log('firing off in service')
angular.module('giphyGet').
        service('giphySvc', GiphySvc);

/*        service('giphySvc', function() {
          console.log('in giphySvC');
        });*/