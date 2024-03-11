import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const ExistingPolicies = ({ onNext, onPrev }) => {
  const [childrenEducation, setChildrenEducation] = useState({
    annualPremium: "",
    propertyIncome: "",
    dateofMaturity: "",
    commencementDate: "",
    term: "",
    benefits: "",
  });
  const [lifeInsurance, setLifeInsurance] = useState({
    annualPremium: "",
    propertyIncome: "",
    dateofMaturity: "",
    commencementDate: "",
    term: "",
    benefits: "",
  });
  const [retirement, setRetirement] = useState({
    annualPremium: "",
    propertyIncome: "",
    dateofMaturity: "",
    commencementDate: "",
    term: "",
    benefits: "",
  });

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Existing Policies</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Children’s Education</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
              label={"Policy No"}
              placeholder={"Policy No"}
              value={childrenEducation.policyNo}
              onChange={(e) => setChildrenEducation(prevState => ({ ...prevState, policyNo: e.target.value }))}
            />
            <InputField
              label={"Annual Premium"}
              placeholder={"Annual Premium"}
              value={childrenEducation.annualPremium}
              onChange={(e) => setChildrenEducation(prevState => ({ ...prevState, annualPremium: e.target.value }))}
            />
            <InputField
              label={"Date of Maturity"}
              placeholder={"Date of Maturity"}
              value={childrenEducation.dateofMaturity}
              onChange={(e) => setChildrenEducation(prevState => ({ ...prevState, dateofMaturity: e.target.value }))}
            />
            <InputField
              label={"Date of Commencement"}
              placeholder={"Date of Commencement"}
              value={childrenEducation.commencementDate}
              onChange={(e) => setChildrenEducation(prevState => ({ ...prevState, commencementDate: e.target.value }))}
            />
            <InputField
              label={"Term"}
              placeholder={"Term"}
              value={childrenEducation.term}
              onChange={(e) => setChildrenEducation(prevState => ({ ...prevState, term: e.target.value }))}
            />
            <InputField
              label={"Benefits"}
              placeholder={"Benefits"}
              value={childrenEducation.benefits}
              onChange={(e) => setChildrenEducation(prevState => ({ ...prevState, benefits: e.target.value }))}
            />
        </Box>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px", marginTop:"8px" }}>Life Insurance</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
            <InputField
              label={"Policy No"}
              placeholder={"Policy No"}
              value={lifeInsurance.policyNo}
              onChange={(e) => setLifeInsurance(prevState => ({ ...prevState, policyNo: e.target.value }))}
            />
            <InputField
              label={"Annual Premium"}
              placeholder={"Annual Premium"}
              value={lifeInsurance.annualPremium}
              onChange={(e) => setLifeInsurance(prevState => ({ ...prevState, annualPremium: e.target.value }))}
            />
            <InputField
              label={"Date of Maturity"}
              placeholder={"Date of Maturity"}
              value={lifeInsurance.dateofMaturity}
              onChange={(e) => setLifeInsurance(prevState => ({ ...prevState, dateofMaturity: e.target.value }))}
            />
            <InputField
              label={"Date of Commencement"}
              placeholder={"Date of Commencement"}
              value={lifeInsurance.commencementDate}
              onChange={(e) => setLifeInsurance(prevState => ({ ...prevState, commencementDate: e.target.value }))}
            />
            <InputField
              label={"Term"}
              placeholder={"Term"}
              value={lifeInsurance.term}
              onChange={(e) => setLifeInsurance(prevState => ({ ...prevState, term: e.target.value }))}
            />
            <InputField
              label={"Benefits"}
              placeholder={"Benefits"}
              value={lifeInsurance.benefits}
              onChange={(e) => setLifeInsurance(prevState => ({ ...prevState, benefits: e.target.value }))}
            />
        </Box>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px", marginTop:"8px"  }}>Retirement</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
        <Box width={"100%"} display={'flex'} flexDirection={'column'} gap="24px" >
        <InputField
              label={"Policy No"}
              placeholder={"Policy No"}
              value={retirement.policyNo}
              onChange={(e) => setRetirement(prevState => ({ ...prevState, policyNo: e.target.value }))}
            />
            <InputField
              label={"Annual Premium"}
              placeholder={"Annual Premium"}
              value={retirement.annualPremium}
              onChange={(e) => setRetirement(prevState => ({ ...prevState, annualPremium: e.target.value }))}
            />
            <InputField
              label={"Date of Maturity"}
              placeholder={"Date of Maturity"}
              value={retirement.dateofMaturity}
              onChange={(e) => setRetirement(prevState => ({ ...prevState, dateofMaturity: e.target.value }))}
            />
          </Box>
          <Box width={"100%"} display={'flex'} flexDirection={'column'} gap="24px" >
            <InputField
              label={"Date of Commencement"}
              placeholder={"Date of Commencement"}
              value={retirement.commencementDate}
              onChange={(e) => setRetirement(prevState => ({ ...prevState, commencementDate: e.target.value }))}
            />
            <InputField
              label={"Term"}
              placeholder={"Term"}
              value={retirement.term}
              onChange={(e) => setRetirement(prevState => ({ ...prevState, term: e.target.value }))}
            />
            <InputField
              label={"Benefits"}
              placeholder={"Benefits"}
              value={retirement.benefits}
              onChange={(e) => setRetirement(prevState => ({ ...prevState, benefits: e.target.value }))}
            />
          </Box>
        </Box>
      </Box>
      <Box alignSelf={'flex-end'}>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 0px", paddingLeft:"24px", paddingRight:"6px", borderRadius: "40px", gap: "16px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Request for Free Analysis and Consultation</Typography>
          <div style={{backgroundColor:"#fff", width:"32px", height:"32px", borderRadius:"50%", position:"relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src={nextChevron} style={{filter: "invert(1) saturate(0)", zIndex:"100", position:"absolute"}}></img>
          </div>
        </Button>
      </Box>
    </Box >
  )
}

export default ExistingPolicies