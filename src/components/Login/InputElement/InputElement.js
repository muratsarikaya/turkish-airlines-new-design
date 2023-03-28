import React from 'react'

import useInputElementStyles from './InputElementStyles';

const InputElement = ({Label, id, type, name, placeholder, value}) => {
    const classes = useInputElementStyles();

  return (
    <label for={id} className={classes.inputWrapper}>
        <input id={id} type={type} name={name} value={value} placeholder={placeholder}/>
            {
                Label && Label
            }
    </label>
  )
}

export default InputElement