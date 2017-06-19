// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// New York Times API
var API = "3baafedf5b5e4b10aa4e28dc82abcbfb";

// Helper Functions
var helpers = {

	query: function(topic, startYear, endYear){

		//Figure out the geolocation
		var URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + API + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";

		return axios.get(URL)
			.then(function(response){

				var myArticles = [];
				var results = response.data.response.docs;
				var num = 0;

				//Gets first 5 articles that have all 3 components
				for(var i = 0; i < results.length; i++){

					if(num > 4) {
						return myArticles;
					}

					if(results[num].headline.main && results[num].pub_date && results[num].web_url) {
						myArticles.push(results[num]);
						num++;
					}
				}

				return myArticles;
		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;
