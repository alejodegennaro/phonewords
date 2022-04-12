import Trie from '../../utils/trie';
import dictionaryJson from '../../../public/resources/words_dictionary.json';

const KeyLetterMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

// Prepends a given set of characters with the content of an array
// If no array is found, return the original characters
const stringMapper = (nextSet) => (chars) => nextSet?.map((nextChars) => `${chars}${nextChars}`) || chars;

/**
 * Recursively iterate a list of string arrays and combine them
 * to return a single flattened list
 * @param [] firstSet First group of letters to combine
 * @param [] remainingSet Nested array with all the remaining set of letters to combine
 * @returns Flattened array with all the possible letter combinations
 */
const combineStringArrays = (firstSet, remainingSet = []) => {
  const [nextSet, ...followingItems] = remainingSet;
  const result = firstSet.map(stringMapper(nextSet)).flat();
  if (followingItems.length) {
    return combineStringArrays(result, followingItems);
  }
  return result;
};

export default class Number2WordService {
  constructor() {
    this.dictionary = new Trie();
    // populate the dictionary
    const { words } = dictionaryJson;
    words.forEach((word) => {
      this.dictionary.insert(word);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  convertNumbersToWords(numbers = []) {
    // convert the query string into an array and return the matching letter map for each number
    const letterMaps = numbers.map((num) => KeyLetterMap[num]);
    // we need to match the first set of letters against all the keys on each subsequent array
    const [firstSet, ...arrayRest] = letterMaps;
    const combinedResult = combineStringArrays(firstSet, arrayRest);

    return combinedResult;
  }

  findWordsInDictionary(words = []) {
    return words.filter((word) => this.dictionary.contains(word));
  }
}
