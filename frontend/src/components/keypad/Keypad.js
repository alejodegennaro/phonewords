import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import KeyLayout from './visual/KeyLayout';
import WordList from './visual/WordList';
import { searchForWords, selectWords, selectIsError,selectErrorMsg, clearWords } from './reducer/keypadSlice';

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > *': {
    m: 1,
  },
}

const Keypad = ()  => {
  const dispatch = useDispatch();
  // API requests are stored in redux
  const words = useSelector(selectWords);
  const isError = useSelector(selectIsError);
  const error = useSelector(selectErrorMsg);

  // input number and dictionary toggle are kept in local state
  const [inputNumber, setInputNumber] = useState('');
  const [useDictionary, setUseDictionary] = useState(false);

  // handler for each number key
  const onKeyClick = (num )=>{
    const newInput = `${inputNumber}${num}`
    setInputNumber(newInput);
  }

  // handler for delete key
  const onDeleteClick = () => {
    //backspace-like delete
    setInputNumber(inputNumber.slice(0, inputNumber.length -1));
  }

  // handler for search key
  const onEnterClick = () => {
    if(inputNumber){
      dispatch(searchForWords({inputNumber, useDictionary}));
    } else {
      dispatch(clearWords());
    }
  }

  return (
    <>
    {isError && <Alert severity="error">{error}</Alert>}
    <Box sx={boxStyle}>
      <TextField id="standard-basic" variant="standard" value={inputNumber} />
      <KeyLayout onEnterClick={onEnterClick} onDeleteClick={onDeleteClick} onKeyClick={onKeyClick} />
      <Button variant={useDictionary ? 'contained' : 'outlined'} onClick={() => setUseDictionary(!useDictionary)} >Use Dictionary</Button>
      <WordList words={words} />
    </Box>
    </>
  );
}

export default Keypad