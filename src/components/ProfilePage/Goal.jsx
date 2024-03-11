import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const Goals = ({ onNext, onPrev }) => {
  const [childrenEducation, setChildrenEducation] = useState('');
  const [universityCapital, setUniversityCapital] = useState('');
  const [universityYearsLeft, setUniversityYearsLeft] = useState('');
  const [retire, setRetire] = useState('');
  const [retirementIncome, setRetirementIncome] = useState('');
  const [incomeIncaseOfDeath, setIncomeIncaseOfDeath] = useState('');
  const [incomeIncaseOfCriticalIllness, setIncomeIncaseOfCriticalIllness] = useState('');
  const [incomeIncaseOfDisablity, setIncomeIncaseOfDisablity] = useState('');


  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} paddingDown={"24px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Goals</Typography>
      <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
        <InputField
          label={"Children's Education"}
          placeholder={"Children's Education"}
          value={childrenEducation}
          onChange={(childrenEducation) => setChildrenEducation(childrenEducation)}
        />
        <InputField
          label={"Capital Required for University"}
          placeholder={"Capital Required for University"}
          value={universityCapital}
          onChange={(universityCapital) => setUniversityCapital(universityCapital)}
        />
        <InputField
          label={"Years Left for University"}
          placeholder={"Years Left for University"}
          value={universityYearsLeft}
          onChange={(universityYearsLeft) => setUniversityYearsLeft(universityYearsLeft)}
        />
        <InputField
          label={"Where would you like to Retire?"}
          placeholder={"Where would you like to Retire?"}
          value={retire}
          onChange={(retire) => setRetire(retire)}
        />
        <InputField
          label={"Income Required after Retirement?"}
          placeholder={"Income Required after Retirement?"}
          value={retirementIncome}
          onChange={(retirementIncome) => setRetirementIncome(retirementIncome)}
        />
        <InputField
          label={"Annual Income for Family Incase of Death"}
          placeholder={"Annual Income for Family Incase of Death"}
          value={incomeIncaseOfDeath}
          onChange={(incomeIncaseOfDeath) => setIncomeIncaseOfDeath(incomeIncaseOfDeath)}
        />
        <InputField
          label={"Annual Income for Family Incase of Critical Illness"}
          placeholder={"Annual Income for Family Incase of Critical Illness"}
          value={incomeIncaseOfCriticalIllness}
          onChange={(incomeIncaseOfCriticalIllness) => setIncomeIncaseOfCriticalIllness(incomeIncaseOfCriticalIllness)}
        />
        <InputField
          label={"Annual Income for Family Incase of Disability"}
          placeholder={"Annual Income for Family Incase of Disability"}
          value={incomeIncaseOfDisablity}
          onChange={(incomeIncaseOfDisablity) => setIncomeIncaseOfDisablity(incomeIncaseOfDisablity)}
        />
      </Box>
      <Box marginTop={"32px"} display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev}>
          <img src={backChevron}></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron}></img>
        </Button>
      </Box>
    </Box>
  )
}

export default Goals