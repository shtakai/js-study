var fortuneCookies = [
  "Best", "Better", "So-so", "Bad"
];

exports.getFortune = function() {
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};
