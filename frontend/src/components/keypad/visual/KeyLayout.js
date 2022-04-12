import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Key from './Key';
import keyboardItems, { ClickActions } from '../../../resources/keypadLayout'

// small util to convert and style Icon components if present
const parseComponent = (secondaryText = '') => {
    if(typeof secondaryText !== 'string'){
        const IconComponent = secondaryText;
        return <IconComponent fontSize="small"/>;
    }
    return secondaryText;
}

 const KeyLayout = (props) => {
    return (
        <>
        {
            // iterate the config file to get rows data
            keyboardItems.map(({rows}, idx) => (
              <ButtonGroup key={idx} variant="outlined" aria-label="outlined button group">
                {rows.map(({primaryText, secondaryText, clickHandler}, index) => {
                    const componentProps = {
                        primaryText: parseComponent(primaryText),
                        secondaryText: parseComponent(secondaryText)
                    };
                    if(clickHandler === ClickActions.SEARCH){
                        componentProps.onClick = props.onEnterClick;
                    } else if(clickHandler === ClickActions.DELETE){
                        componentProps.onClick = props.onDeleteClick;
                    } else if(clickHandler === ClickActions.KEY) {
                        componentProps.onClick = props.onKeyClick;
                    }
    
                return <Key key={index} {...componentProps}/>;
              })}
              </ButtonGroup>
            ))
          }
    </> 
    )
}

export default KeyLayout;