import React from 'react'
import NumberFormat from 'react-number-format'

const PhoneNumberFormat = ({ inputRef, onChange, name, ...other }) => {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name,
            value: values.value,
          },
        })
      }}
      format='(###) ###-####'
    />
  )
}

export default PhoneNumberFormat
