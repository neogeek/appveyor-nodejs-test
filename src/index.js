const add = (/** @type {number} */ a, /** @type {number} */ b) => {
  if (isNaN(a)) throw new TypeError('The value for a is not a valid number.');
  if (isNaN(b)) throw new TypeError('The value for b is not a valid number.');

  return a + b;
};

module.exports = {
  add,
};
