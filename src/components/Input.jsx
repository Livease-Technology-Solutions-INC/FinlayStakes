import React, {useState} from 'react';
import { Typography, Box, InputAdornment, TextField, MenuItem } from '@mui/material';

const InputField = ({ value, leftIcon, rightIcon, placeholder, label, multiline, rows, dropdown, options, required, type ,onChange,maxWidth, ...rest }) => {
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    return isValid;
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value); 
    }
  };

  const handleBlur = (e) => {
    const { value } = e.target;
    if (required && !value) {
      setError(`${label} is required`);
    } else if (type === "email" && value && !validateEmail(value)) {
      setError(`Invalid ${label}`);
    } else {
      setError("");
    }
  };
  const defaultValue = value || (dropdown ? options[0].value : '');

  return (
    <Box sx={{ width: "100%",   maxWidth: maxWidth ? maxWidth : "435px" , display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
      {label && (
        <Typography  sx={{ color: "#212844", fontFamily: "Inter", fontWeight: "600",lineHeight:"19.36px", fontSize:"16px" }}>
          {label}
        </Typography>
      )}
      {dropdown ? (
        <TextField
          select
          variant="outlined"
          fullWidth
          value={defaultValue}
          size="small"
          onChange={handleChange} 
          InputProps={{
            startAdornment: leftIcon && (
              <InputAdornment position="start">{leftIcon}</InputAdornment>
            ),
            endAdornment: rightIcon && (
              <InputAdornment position="end">{rightIcon}</InputAdornment>
            ),
            style: {
              borderRadius: 8,
              backgroundColor: '#fff',
              color: '#212844',
              fontFamily: 'Inter, sans-serif',
              lineHeight:"19.36px"
            },
            sx: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#DEDFEE',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#B2B5D0',
              },
              '&:focus .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6560F0',
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6560F0',
              },
            },
          }}
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField
          type={type}
          variant="outlined"
          fullWidth
          size="small"
          multiline={multiline}
          rows={rows}
          onChange={handleChange}
          value={defaultValue}
          InputProps={{
            startAdornment: leftIcon && (
              <InputAdornment position="start" sx={{ marginRight: '16px' }}>{leftIcon}</InputAdornment>
            ),
            endAdornment: rightIcon && (
              <InputAdornment position="end">{rightIcon}</InputAdornment>
            ),
            style: {
              borderRadius: 8,
              backgroundColor: '#fff',
              color: '#212844',
              fontFamily: 'Inter, sans-serif',
              lineHeight:"19.36px"
            },
            placeholder: placeholder,
            sx: {
              '& input::placeholder': {
                color: '#9397BB',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#DEDFEE',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#B2B5D0',
              },
              '&:focus .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6560F0',
              },
              '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#6560F0',
              },
            },
          }}
          onBlur={handleBlur}
          error={Boolean(error)}
          helperText={error}
          {...rest}
        />
      )}
    </Box>
  );
};

export default InputField;
