var slice = Array.prototype.slice

function logger(namespace) {
  return function() {
  	var args = slice.call(arguments);
  	console.log.apply(null, [namespace].concat(args));
  }
}

module.exports = logger
