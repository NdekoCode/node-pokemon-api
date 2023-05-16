export default class Operations {
  /**
   *
   * @param {number} a
   * @param {number} b
   * @returns  {number}
   */
  add = (a, b) => a + b;
  /**
   *
   * @param {number} a
   * @param {number} b
   * @returns  {number}
   */
  multiply = (a, b) => a * b;
  /**
   *
   * @param {number} a
   * @param {number} b
   * @returns  {number}
   */
  divide = (a, b) => {
    if (b == 0) {
      throw new Error("Divide by zero!");
    }
    return a / b;
  };
}
