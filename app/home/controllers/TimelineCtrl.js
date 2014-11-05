angular.module('Instangular').controller('TimelineCtrl', ['backend', TimelineCtrl]);

function TimelineCtrl($scope, $rootScope, backend) {

  $scope.timeline = [];
  backend.getTimeline().then(function(timeline) {
    $scope.timeline = timeline;
  });

  $scope.addNewComment = function(post) {
    post.comments.push({
      user: 'Jeremy Feinstein',
      userImage: 'http://lorempixel.com/200/200/cats',
      text: post.newComment
    });
    post.newComment = ''
  };
  $scope.likePost = function(post) {
    post.like = !post.like;
  }
  $rootScope.$on('newPost', function() {
    backend.getNewPost().then(function(post) {
      $scope.timeline.unshift(post);
    });
  });

}