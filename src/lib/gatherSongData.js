var gatherSongData = (callback) => {
  $.ajax({
    url: 'https://api.parse.com/1/classes/songs/',
    headers: {
      'X-Parse-Application-Id': 'OWawBR069jvFwWln4zrgOJR2wOCN6oetbBdvMLJq',
      'X-Parse-REST-API-Key': 'GH78f2KLgWQT16v2OtQjI0WJZXBd7czwegMoIogB'
    },
    type: 'GET',
    success: function(data) {
      console.log('success');
      callback(data.results);
    },
    error: function(error) {
      console.log('error');
    }
  });
};

window.gatherSongData = gatherSongData;