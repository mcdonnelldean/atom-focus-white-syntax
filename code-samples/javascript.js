// comment.

/** comment */
module.exports = function (input, callback) {
  if (!input) callback('invalid input');
  else callback(null, 'output');

  aMethod();
};

function aMethod () {
  var num = 0;
  var regex = /.*/;
  var nil = null;

  var three = ((((3 + 1) / 2) * 2) - 1);

  var call = function theCall () {
    return;
  };
};
