angular.module('Instangular').service('backend', ['$q', backend]);

function backend($q) {

  var names = ['Hani Altwaijry', 'Jeremy Feinstein', 'Serge Belongie'];
  var time = 0;

  function randomName() {
    return names[Math.floor(Math.random()*names.length)];
  }

  function getNewPost() {
    var userImageSize = Math.floor(Math.random()*200 + 50);
    var photoSize = Math.floor(Math.random()*400 + 300);
    return {
      user: randomName(),
      time: time++,
      userImage: 'http://lorempixel.com/'+userImageSize+'/'+userImageSize+'/cats',
      imageUrl: 'http://lorempixel.com/'+photoSize+'/'+photoSize+'/cats',
      numLikes: Math.floor(Math.random()*100),
      like: false,
      comments: [{
        user: randomName(),
        userImage: 'http://lorempixel.com/200/200/cats',
        text: 'This is a really cool picture!'
      }, {
        user: randomName(),
        userImage: 'http://lorempixel.com/200/200/cats',
        text: 'I totally agree!'
      }]
    };
  }

  this.getTimeline = function() {
    return $q(function(resolve, reject) {
      var timeline = [];
      for (var i = 0; i < 10; i++) {
        timeline.push(getNewPost());
      }
      resolve(timeline);
    });
  };

  this.getNewPost = function() {
    return $q(function(resolve, reject) {
      resolve(getNewPost());
    });
  };

}