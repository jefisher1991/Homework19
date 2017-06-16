var axios = require ("axios"); 

var API = "3baafedf5b5e4b10aa4e28dc82abcbfb"; 

var helpers = {
	query: function (topic, startYear, endYear){
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + API + "&q=" + topic + "&begin_date=" + startYear + "&end_date=" + endYear;


		return axios.get(url)
			.then(function(response) {
				console.log(response);
				var results = response.data.response.docs;
				var myArticles = [];

				for (var i = 0; i < 5; i++) {
					if (results[i].headline.main && results[i].pub_date && results[i].web_url) {
						myArticles.push(results[i]); 
					}
				}
				return myArticles; 

			});
	},

	saveArticle: function(title, date, url){
		axios.post('/api/saved', {title: title, date: date, url: url})
		.then(function(response){
			console.log("SAVED TO DATABASE WOOOOHOOO!!!!")
			return (response); 


		})
	}
	
}

module.exports = helpers;

