import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const IncomeDetail=({ onNext, onPrev })=> {
  const [Interest, setInterest] = useState('');
  const [bankReturns, setBankReturns] = useState('');
  const [propertyIncome, setPropertyIncome] = useState('');
  const [salary, setSalary] = useState('');
  const [bonus, setBonus] = useState('');
  const [totalIncome, setTotalIncome] = useState('');
 

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Income Details</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
      <Typography sx={{ color:"#212844",fontWeight:"600",fontSize:"20px",fontFamily: 'Inter, sans-serif' , lineHeight:"24.2px"}}>Saving Details</Typography>
      <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
            <InputField
            label={"Interest"}
            placeholder={"Interest"}
            value={Interest}
            onChange={(Interest) => setInterest(Interest)}
          />
          <InputField
            label={"Income from Property"}
            placeholder={"Income from Property"}
            value={propertyIncome}
            onChange={(propertyIncome) => setPropertyIncome(propertyIncome)}
          />
          <InputField
            label={"Bank Returns"}
            placeholder={"Bank Returns"}
            value={bankReturns}
            onChange={(bankReturns) => setBankReturns(bankReturns)}
          />
        </Box>
        <Typography sx={{color:"#212844", fontWeight:"600", fontSize:"20px",fontFamily: 'Inter, sans-serif' }}>Non Saving Details</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Salary"}
            placeholder={"Salary"}
            value={salary}
            onChange={(salary) => setSalary(salary)}
          />
          <InputField
          label={"Total Income"}
          placeholder={"Total Income"}
          value={totalIncome}
          onChange={(totalIncome) => setTotalIncome(totalIncome)}
        />
          <InputField
            label={"Bonus"}
            placeholder={"Bonus"}
            value={bonus}
            onChange={(bonus) => setBonus(bonus)}
          />
        </Box>
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev} style={{ marginTop: '16px' }}>
          <img src={backChevron}></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button  sx={{backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron}></img>
        </Button>
      </Box>
    </Box>
  )
}

export default IncomeDetail