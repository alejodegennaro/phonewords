import keypadReducer, {
  clearWords, 
  setWordsResult,
} from './keypadSlice';

describe('keypad reducer', () => {
  const initialState = {
    status: 'idle',
    words: ['qwerty'],
    isError: true,
    error: 'error',
  };
  it('should handle initial state', () => {
    expect(keypadReducer(undefined, { type: 'unknown' })).toEqual({
      status: 'idle',
      words: [],
      isError: false,
      error: '',
    });
  });

  it('should clear all the list of words', () => {
    const actual = keypadReducer(initialState, clearWords());
    expect(actual.words.length).toEqual(0);
  });

  it('should save the API result', () => {
    const actual = keypadReducer(initialState, setWordsResult(['test']));
    expect(actual.words.length).toEqual(1);
    expect(actual.words[0]).toEqual('test');
  });
});
