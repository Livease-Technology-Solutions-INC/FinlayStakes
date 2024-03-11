import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Radio, RadioGroup, FormGroup, FormControl, FormControlLabel, FormLabel, InputLabel, Select, MenuItem } from '@mui/material';
import InputField from '../Input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const PersonalDetail = ({ onNext, onPrev }) => {
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [age, setAge] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [residentCountry, setResidentCountry] = useState('');
  const [nationality, setNationality] = useState('');
  const [residentialAddress, setResidentialAddress] = useState('');
  const [smoker, setSmoker] = useState("");
  const [medicalHistory, setMedicalHistory] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Personal Details</Typography>
      <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
        <InputField
          label={"Name"}
          placeholder={"Name"}
          value={name}
          onChange={(name) => setName(name)}
        />
        <InputField
          margin="dense"
          id="date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          label={"Date of Birth"}
          placeholder={"Date of Birth"}
          value={DOB}
          onChange={(DOB) => setDOB(DOB)}
        />

        <InputField
          label={"Age"}
          placeholder={"Age"}
          value={age}
          onChange={(age) => setAge(age)}
        />
        <InputField
          dropdown={true}
          options={[
            { value: 'single', label: 'Single' },
            { value: 'married', label: 'Married' },
            { value: 'divorced', label: 'Divorced' },
            { value: 'widowed', label: 'Widowed' },
          ]}
          label={"Marital Status"}
          placeholder={"Marital Status"}
          value={maritalStatus}
          onChange={(maritalStatus) => setMaritalStatus(maritalStatus)}
        />
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} >
          <Box maxWidth="435px" width={"100%"} display={'flex'} flexDirection={'column'} gap="24px" >

            <Typography sx={{ color: "#212844", fontFamily: "Inter", fontWeight: "600", lineHeight: "19.36px", fontSize: "16px" }}>
              Phone Number
            </Typography>
            <PhoneInput
              country="us"
              label="Contact Number"
              placeholder='Contact Number'
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              inputClass="phone-input"
              dropdownStyle={{ width: '200px' }}
              buttonStyle={{ backgroundColor: 'transparent', border: 'none', marginRight: "200px" }}
              inputProps={{
                style: {
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  color: '#212844',
                  fontSize: '16px',
                  padding: "20px 30px",
                  paddingLeft: "48px",
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: "19.36px",
                },
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
            />
          </Box>
          <InputField
            label={"Email ID"}
            placeholder={"Email ID"}
            value={email}
            onChange={(email) => setEmail(email)}
          />
        </Box>
        <InputField
          label={"Country of Residence"}
          placeholder={"Country of Residence"}
          value={residentCountry}
          onChange={(residentCountry) => setResidentCountry(residentCountry)}
        />
        <InputField
          label={"Nationality & Country of Birth"}
          placeholder={"Nationality & Country of Birth"}
          value={nationality}
          onChange={(nationality) => setNationality(nationality)}
        />
        <InputField
          label={"Physical Residential Address"}
          placeholder={"Physical Residential Address"}
          value={residentialAddress}
          onChange={(residentialAddress) => setResidentialAddress(residentialAddress)}
        />
        <Box maxWidth="435px" width={"100%"} display={'flex'} flexDirection={'column'} gap="24px" >
          <FormControl component="fieldset" style={{ width: "100%", display: 'flex' }}>
            <FormLabel component="legend">
              <Typography sx={{ color: "#212844", fontFamily: "Inter", fontWeight: "600", lineHeight: "19.36px", fontSize: "16px" }}>
                Smoker
              </Typography>
            </FormLabel>
            <RadioGroup value={smoker} onChange={(event) => setSmoker(event.target.value)}>
              <FormGroup row>
                <FormControlLabel value="yes" sx={{ color: "#9397BB" }} control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1.25rem', color: "#250C77" } }} />} label="Yes" />
                <FormControlLabel value="no" sx={{ color: "#9397BB" }} control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: '1.25rem', color: "#250C77" } }} />} label="No" />
              </FormGroup>
            </RadioGroup>
          </FormControl>
        </Box>
        <InputField
          label={"Medical History"}
          placeholder={"Type here"}
          multiline={true}
          rows={"4.5"}
          value={medicalHistory}
          onChange={(medicalHistory) => setMedicalHistory(medicalHistory)}
        />
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev} style={{ marginTop: '16px' }}>
          <img src={backChevron}></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron}></img>
        </Button>
      </Box>
    </Box>
  )
}

export default PersonalDetail