import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const FinancialPlanningShortfall = ({ onNext, onPrev }) => {
  const [childrenEducation, setChildrenEducation] = useState('');
  const [retirement, setRetirement] = useState('');
  const [lifeInsurance, setLifeInsurance] = useState('');
  const [criticalIllness, setCriticalIllness] = useState('');
  const [disability, setDisability] = useState('');
  
  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} paddingDown={"24px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Financial Planning Shortfall</Typography>
      <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Children’s Education"}
            placeholder={"Children’s Education"}
            value={childrenEducation}
            onChange={(childrenEducation) => setChildrenEducation(childrenEducation)}
          />
          <InputField
            label={"Life Insurance"}
            placeholder={"Life Insurance"}
            value={lifeInsurance}
            onChange={(lifeInsurance) => setLifeInsurance(lifeInsurance)}
          />
          <InputField
            label={"Disability"}
            placeholder={"Disability"}
            value={disability}
            onChange={(disability) => setDisability(disability)}
          />
          <InputField
            label={"Retirement"}
            placeholder={"Retirement"}
            value={retirement}
            onChange={(retirement) => setRetirement(retirement)}
          />
          <InputField
            label={"Critical Illness"}
            placeholder={"Critical Illness"}
            value={criticalIllness}
            onChange={(criticalIllness) => setCriticalIllness(criticalIllness)}
          />
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

export default FinancialPlanningShortfall