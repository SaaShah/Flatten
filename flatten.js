 exports.fn = function fn(input) {
  var isArray = Object.prototype.toString.call(input) === '[object Array]';

  if (isArray && input.length > 0) { 
    var head = input[0];
    var tail = input.slice(1);
    return fn(head).concat(fn(tail));
  } else { 
    return [].concat(input);
  }
};
