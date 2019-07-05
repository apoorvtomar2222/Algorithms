function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }

  }
}

console.dir(add(2)(2)(2))