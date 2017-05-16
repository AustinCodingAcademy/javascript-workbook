function duckCount() {

  return Array.prototype.slice.call(arguments).filter(obj =>
Object.prototype.hasOwnProperty.call(obj, 'quack')).length}
module.exports = duckCount
