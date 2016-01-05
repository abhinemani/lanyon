$.getJSON('https://spreadsheets.google.com/feeds/list/1IT57mBl8Eu8r-yCRt8srnxYb9nAtp57U1ZpHq5nosY0/od6/public/values?alt=json', function(data) {

  for (i = 0; i < data.feed.entry.length; i++) {
    var state = data.feed.entry[i]['gsx$state']['$t'];
    var title = data.feed.entry[i]['gsx$title']['$t'];

      careers = $('<ul class="bulleted"/>');
      careers.append('<li>' + title + '</li>');

      if (state == 'California') {
        $('.california-list').append(careers);
      }

      if (state == 'Colorado') {
        $('.colorado-list').append(careers);
      }

      if (state == 'Texas') {
        $('.texas-list').append(careers);
      }

      if (state == 'Utah') {
        $('.utah-list').append(careers);
      }
  }

});