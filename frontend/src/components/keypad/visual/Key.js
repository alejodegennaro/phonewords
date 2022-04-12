
import React from 'react'
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

 const Key = ({primaryText, secondaryText,  onClick}) => {
     const newProp ={
        style: {minWidth: '100px', minHeight:'70px'}
     }
     if(onClick){
        newProp.onClick = () => onClick(primaryText);
     }
    return (
    <Button  {...newProp}> 
        <ListItemText primary={primaryText} secondary={secondaryText} />
    </Button>   
    )
}

export default Key;