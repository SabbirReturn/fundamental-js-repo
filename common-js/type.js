// let numbers = [1,2,3,4,5,6,7,8,];
// let age = 28;
// let name = 'Sabbbir';
// let products={
//      id:1,
//      name:'Sabbir'
// }
// let isStudent = true;

// console.log(typeof numbers,typeof age,typeof name,typeof products,typeof isStudent);

// let array = Array.isArray(numbers);
// console.log(array);
// let numbers = [1,2,3,4,5,6,7,8,];
// let age = 28;
// let name = 'Sabbbir';
// let products={
//      id:1,
//      name:'Sabbir'
// }
// let isStudent = true;

// console.log(typeof numbers,typeof age,typeof name,typeof products,typeof isStudent);

// let array = Array.isArray(numbers);
// console.log(array);
// let numbers = [1,2,3,4,5,6,7,8,];
// let age = 28;
// let name = 'Sabbbir';
// let products={
//      id:1,
//      name:'Sabbir'
// }
// let isStudent = true;

// console.log(typeof numbers,typeof age,typeof name,typeof products,typeof isStudent);

// let array = Array.isArray(numbers);
// console.log(array);
// let numbers = [1,2,3,4,5,6,7,8,];
// let age = 28;
// let name = 'Sabbbir';
// let products={
//      id:1,
//      name:'Sabbir'
// }
// let isStudent = true;

// console.log(typeof numbers,typeof age,typeof name,typeof products,typeof isStudent);

// let array = Array.isArray(numbers);
// console.log(array);

class TimeLimitedCache {
  constructor() {
    this.store = new Map(); // key -> { value, expiresAt }
  }

  /**
   * Sets a key with a value and duration (in ms).
   * @param {number} key
   * @param {number} value
   * @param {number} duration
   * @return {boolean} true if unexpired key existed, false otherwise
   */
  set(key, value, duration) {
    const now = Date.now();
    const expiresAt = now + duration;

    const hasUnexpired = this.store.has(key) && this.store.get(key).expiresAt > now;

    this.store.set(key, { value, expiresAt });

    return hasUnexpired;
  }

  /**
   * Gets the value for an unexpired key.
   * @param {number} key
   * @return {number} value or -1 if expired or not found
   */
  get(key) {
    const now = Date.now();
    const entry = this.store.get(key);
    if (entry && entry.expiresAt > now) {
      return entry.value;
    }
    this.store.delete(key); // Clean expired key
    return -1;
  }

  /**
   * Counts how many keys are still valid.
   * @return {number}
   */
  count() {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (entry.expiresAt <= now) {
        this.store.delete(key);
      }
    }
    return this.store.size;
  }
}

// Export if needed for testing
// module.exports = TimeLimitedCache;
