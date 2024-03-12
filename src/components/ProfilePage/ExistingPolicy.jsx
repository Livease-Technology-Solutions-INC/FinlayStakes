import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg";
import backChevron from "../../assets/carbon_back-outline.svg";
import { useSelector, useDispatch } from 'react-redux';
import { updateChildrenEducation, updateLifeInsurance, updateRetirement } from '../../state-management/reducer/existingPoliciesSlice';

const ExistingPolicies = ({ onNext, onPrev }) => {
  const existingPolicies = useSelector((state) => state.existingPolicies);
  const dispatch = useDispatch();

  const handleChildrenEducationChange = (field, value) => {
    dispatch(updateChildrenEducation({ [field]: value }));
  };

  const handleLifeInsuranceChange = (field, value) => {
    dispatch(updateLifeInsurance({ [field]: value }));
  };

  const handleRetirementChange = (field, value) => {
    dispatch(updateRetirement({ [field]: value }));
  };

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Existing Policies</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Children’s Education</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
          <InputField
            label={"Policy No"}
            placeholder={"Policy No"}
            value={existingPolicies.childrenEducation.policyNo}
            onChange={(value) => handleChildrenEducationChange('policyNo',value)}
          />
          <InputField
            label={"Annual Premium"}
            placeholder={"Annual Premium"}
            value={existingPolicies.childrenEducation.annualPremium}
            onChange={(value) => handleChildrenEducationChange('annualPremium',value)}
          />
          <InputField
            label={"Date of Maturity"}
            placeholder={"Date of Maturity"}
            value={existingPolicies.childrenEducation.dateofMaturity}
            onChange={(value) => handleChildrenEducationChange('dateofMaturity', value)}
          />
          <InputField
            label={"Date of Commencement"}
            placeholder={"Date of Commencement"}
            value={existingPolicies.childrenEducation.commencementDate}
            onChange={(value) => handleChildrenEducationChange('commencementDate', value)}
          />
          <InputField
            label={"Term"}
            placeholder={"Term"}
            value={existingPolicies.childrenEducation.term}
            onChange={(value) => handleChildrenEducationChange('term', value)}
          />
          <InputField
            label={"Benefits"}
            placeholder={"Benefits"}
            value={existingPolicies.childrenEducation.benefits}
            onChange={(value) => handleChildrenEducationChange('benefits', value)}
          />
        </Box>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Life Insurance</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
          <InputField
            label={"Policy No"}
            placeholder={"Policy No"}
            value={existingPolicies.lifeInsurance.policyNo}
            onChange={(value) => handleLifeInsuranceChange('policyNo',value)}
          />
          <InputField
            label={"Annual Premium"}
            placeholder={"Annual Premium"}
            value={existingPolicies.lifeInsurance.annualPremium}
            onChange={(value) => handleLifeInsuranceChange('annualPremium', value)}
          />
          <InputField
            label={"Date of Maturity"}
            placeholder={"Date of Maturity"}
            value={existingPolicies.lifeInsurance.dateofMaturity}
            onChange={(value) => handleLifeInsuranceChange('dateofMaturity', value)}
          />
          <InputField
            label={"Date of Commencement"}
            placeholder={"Date of Commencement"}
            value={existingPolicies.lifeInsurance.commencementDate}
            onChange={(value) => handleLifeInsuranceChange('commencementDate', value)}
          />
          <InputField
            label={"Term"}
            placeholder={"Term"}
            value={existingPolicies.lifeInsurance.term}
            onChange={(value) => handleLifeInsuranceChange('term', value)}
          />
          <InputField
            label={"Benefits"}
            placeholder={"Benefits"}
            value={existingPolicies.lifeInsurance.benefits}
            onChange={(value) => handleLifeInsuranceChange('benefits',value)}
          />
        </Box>
        <Typography sx={{ color: "#212844", fontWeight: "600", fontSize: "20px", fontFamily: 'Inter, sans-serif', lineHeight: "24.2px" }}>Retirement</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
          <InputField
            label={"Policy No"}
            placeholder={"Policy No"}
            value={existingPolicies.retirement.policyNo}
            onChange={(value) => handleRetirementChange('policyNo', value)}
          />
          <InputField
            label={"Annual Premium"}
            placeholder={"Annual Premium"}
            value={existingPolicies.retirement.annualPremium}
            onChange={(value) => handleRetirementChange('annualPremium', value)}
          />
          <InputField
            label={"Date of Maturity"}
            placeholder={"Date of Maturity"}
            value={existingPolicies.retirement.dateofMaturity}
            onChange={(value) => handleRetirementChange('dateofMaturity', value)}
          />
          <InputField
            label={"Date of Commencement"}
            placeholder={"Date of Commencement"}
            value={existingPolicies.retirement.commencementDate}
            onChange={(value) => handleRetirementChange('commencementDate', value)}
          />
          <InputField
            label={"Term"}
            placeholder={"Term"}
            value={existingPolicies.retirement.term}
            onChange={(value) => handleRetirementChange('term', value)}
          />
          <InputField
            label={"Benefits"}
            placeholder={"Benefits"}
            value={existingPolicies.retirement.benefits}
            onChange={(value) => handleRetirementChange('benefits', value)}
          />
        </Box>
      </Box>
      <Box alignSelf={'flex-end'}>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 0px", paddingLeft: "24px", paddingRight: "6px", borderRadius: "40px", gap: "16px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Request for Free Analysis and Consultation</Typography>
          <div style={{ backgroundColor: "#fff", width: "32px", height: "32px", borderRadius: "50%", position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={nextChevron} style={{ filter: "invert(1) saturate(0)", zIndex: "100", position: "absolute" }} alt="next-chevron"></img>
          </div>
        </Button>
      </Box>
    </Box >
  )
}

export default ExistingPolicies;
