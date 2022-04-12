import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

 const WordList = ({words}) => {
    return (
        <List style={{
            display: "flex",
            flexDirection: "row",
            width: '50vw',
            overflow: 'scroll'
        }}>
            {words.map((word, idx) => 
                <ListItem key={idx} style={{textAlign: 'center'}}>
                    <ListItemText primary={word}/>
                </ListItem>
            )}
        </List>
    )
}

export default WordList;