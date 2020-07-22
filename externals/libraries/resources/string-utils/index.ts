/**
 *
 * @param word
 */
export function capitalize(word: string) {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}

/**
 *
 * @param word
 */
export function uncapitalize(word: string) {
  return word.substring(0, 1).toLowerCase() + word.substring(1);
}

/**
 *
 * @param text
 * @param firstLower
 */
export function toCamelCase(text: string, firstLower: boolean = true) {
  const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
  return text.match(regex).reduce((camelCase, word, index) => {
    return camelCase + (firstLower && index === 0 ? uncapitalize(word) : capitalize(word));
  }, '');
}
