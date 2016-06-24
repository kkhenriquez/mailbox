app.controller('HomeController', ['$scope', 'emails', function($scope, emails) {
	emails.success(function(data) {
		$scope.emails = data;
	})
	.error(function() {
		$scope.emails = [
  {
    "from": "Shawn Carter",
    "datetime": 1420816800000,
    "subject": "Current state of mind",
    "message": "Yeah I'm out that Brooklyn, now I'm down in Tribeca. Want to check out that new bistro?",
    "unread": true
  },

   {
    "from": "Jason Cornwell",
    "datetime": 1420809000000,
    "subject": "Please return my stapler",
    "message": "Hey my stapler is missing again. Please return it.",
    "unread": true
  },

  {
    "from": "Google Voice",
    "datetime": 1420694340000,
    "subject": "New voicemail from (877) 466-4411 at 5:19 AM",
    "message": "Missed call from: (877) 466-4411 at 9:05 AM",
    "unread": false
  },

  {
    "from": "Antwan Patton",
    "datetime": 1420543620000,
    "subject": "Shutterbugg",
    "message": "Hey man, did you have a chance to check out the new app? Just released it for iOS and Android. Curious to hear what you think!",
    "unread": false
  },

  {
    "from": "Tauheed Epps",
    "datetime": 1420509780000,
    "subject": "I'm different EOM",
    "message": "",
    "unread": false
  },

  {
    "from": "Emily Toff",
    "datetime": 1420386780000,
    "subject": "Why so serious?",
    "message": "I finally saw that movie you were talking about and really liked it! Thanks for the recommendation.",
    "unread": false
  },

  {
    "from": "Arielle Reinstein",
    "datetime": 1420224600000,
    "subject": "This weekend",
    "message": "Hi, are you around this weekend? Want to check out the new coffee shop that opened down the street?",
    "unread": false
  }
]
	});
}]);