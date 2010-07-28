function TwitterApi () {
  this.base_url = "http://search.twitter.com/search.json"
}

TwitterApi.prototype.search = function(query, callbacks) {
  new Ajax.Request(this.base_url, {
    method: 'get',
    parameters: {
      q: query
    },
    onSuccess:  callbacks.onSuccess,
    onFailure:  callbacks.onFailure,
    onComplete: callbacks.onComplete,
    on403:      callbacks.onRateLimit
  });
}