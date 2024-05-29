/**
 * Truncates a string to a specified maximum length and appends an ellipsis if the string exceeds the maximum length.
 *
 * @param {string} text - The string to be truncated.
 * @param {number} [max=50] - The maximum length of the truncated string. Defaults to 50.
 * @returns {string} - The truncated string with an appended ellipsis if it exceeds the maximum length, or the original string if it does not.
 *
 * @example
 * // returns "Hello, this is a sample text that excee ..."
 * textSlice("Hello, this is a sample text that exceeds the default maximum length.");
 *
 * @example
 * // returns "Short text"
 * textSlice("Short text");
 */
export function textSlice(text: string, max: number = 50) {
  if (text.length >= max) return `${text.slice(0, max)} ...`;
  return text;
}
