import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg";
import backChevron from "../../assets/carbon_back-outline.svg";
import { useSelector, useDispatch } from 'react-redux';
import { updateLiabilityDetail } from '../../state-management/reducer/liabilityDetailSlice';

const LiabilityDetail = ({ onNext, onPrev }) => {
  const liabilityDetail = useSelector((state) => state.liabilityDetail);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(updateLiabilityDetail({ [field]: value }));
  };

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Liability Details</Typography>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
            <InputField
              label={"Bank Loans"}
              placeholder={"Bank Loans"}
              value={liabilityDetail.bankLoans}
              onChange={(bankLoans) => handleChange('bankLoans', bankLoans)}
            />
            <InputField
              label={"Credit Card Outstanding"}
              placeholder={"Credit Card Outstanding"}
              value={liabilityDetail.creditCard}
              onChange={(creditCard) => handleChange('creditCard', creditCard)}
            />
            <InputField
              label={"Mortgages"}
              placeholder={"Mortgages"}
              value={liabilityDetail.mortgages}
              onChange={(mortgages) => handleChange('mortgages', mortgages)}
            />
            <InputField
              label={"Auto Loans"}
              placeholder={"Auto Loans"}
              value={liabilityDetail.autoLoans}
              onChange={(autoLoans) => handleChange('autoLoans', autoLoans)}
            />
            <InputField
              label={"Hand Loans"}
              placeholder={"Hand Loans"}
              value={liabilityDetail.handLoans}
              onChange={(handLoans) => handleChange('handLoans', handLoans)}
            />
            <InputField
              label={"Total Liabilities"}
              placeholder={"Total Liabilities"}
              value={liabilityDetail.totalLiabilities}
              onChange={(totalLiabilities) => handleChange('totalLiabilities', totalLiabilities)}
            />
        </Box>
      <Box position={"absolute"} bottom="-100px" right="135px" display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev} >
          <img src={backChevron} alt="back-chevron"></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron} alt="next-chevron"></img>
        </Button>
      </Box>
    </Box>
  )
}

export default LiabilityDetail;
