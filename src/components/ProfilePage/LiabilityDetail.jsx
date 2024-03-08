import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const LiabilityDetail = ({ onNext, onPrev }) => {
  const [bankLoans, setBankLoans] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [mortgages, setMortgages] = useState('');
  const [autoLoans, setAutoLoans] = useState('');
  const [handLoans, setHandLoans] = useState('');
  const [totalLiabilities, setTotalLiabilities] = useState('');
  
  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} paddingDown={"24px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Liability Details</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
        <Box display={'flex'} flexDirection={'row'} gap="92px" >
          <InputField
            label={"Bank Loans"}
            placeholder={"Bank Loans"}
            value={bankLoans}
            onChange={(bankLoans) => setBankLoans(bankLoans)}
          />
          <InputField
            label={"Credit Card Outstanding"}
            placeholder={"Credit Card Outstanding"}
            value={creditCard}
            onChange={(creditCard) => setCreditCard(creditCard)}
          />
        </Box>
        <Box display={'flex'} flexDirection={'row'} gap="92px" >
          <InputField
            label={"Mortgages"}
            placeholder={"Mortgages"}
            value={mortgages}
            onChange={(mortgages) => setMortgages(mortgages)}
          />
          <InputField
            label={"Auto Loans"}
            placeholder={"Auto Loans"}
            value={autoLoans}
            onChange={(autoLoans) => setAutoLoans(autoLoans)}
          />
        </Box>

        <Box display={'flex'} flexDirection={'row'} gap="92px" >
          <InputField
            label={"Hand Loans"}
            placeholder={"Hand Loans"}
            value={handLoans}
            onChange={(handLoans) => setHandLoans(handLoans)}
          />
          <InputField
            label={"Total Liabilities"}
            placeholder={"Total Liabilities"}
            value={totalLiabilities}
            onChange={(totalLiabilities) => setTotalLiabilities(totalLiabilities)}
          />
        </Box>
      </Box>
      <Box marginTop={"110px"} display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
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

export default LiabilityDetail