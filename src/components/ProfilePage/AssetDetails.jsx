// AssetsDetail.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg";
import backChevron from "../../assets/carbon_back-outline.svg";
import { useSelector, useDispatch } from 'react-redux';
import { updateAssetsDetail } from '../../state-management/reducer/assetsDetailSlice';

const AssetsDetail = ({ onNext, onPrev }) => {
  const assetsDetail = useSelector((state) => state.assetsDetail);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(updateAssetsDetail({ [field]: value }));
  };

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} paddingDown={"24px"}>
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Asset Details</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"}>
          <InputField
            label={"Cash in Hand & Bank"}
            placeholder={"Cash in Hand & Bank"}
            value={assetsDetail.cash}
            onChange={(cash) => handleChange('cash', cash)}
          />
          <InputField
            label={"Property Value"}
            placeholder={"Property Value"}
            value={assetsDetail.propertyValue}
            onChange={(propertyValue) => handleChange('propertyValue', propertyValue)}
          />
          <InputField
            label={"Shares / Equities"}
            placeholder={"Shares / Equities"}
            value={assetsDetail.shares}
            onChange={(shares) => handleChange('shares', shares)}
          />
          <InputField
            label={"Business Assets"}
            placeholder={"Business Assets"}
            value={assetsDetail.businessAssets}
            onChange={(businessAssets) => handleChange('businessAssets', businessAssets)}
          />
          <InputField
            label={"Others"}
            placeholder={"Others"}
            value={assetsDetail.others}
            onChange={(others) => handleChange('others', others)}
          />
          <InputField
            label={"Total Assets"}
            placeholder={"Total Assets"}
            value={assetsDetail.totalAssets}
            onChange={(totalAssets) => handleChange('totalAssets', totalAssets)}
          />
        </Box>
      </Box>
      <Box marginTop={"110px"} display={'flex'} flexDirection={'row'} gap="16px" alignSelf={'flex-end'}>
        <Button sx={{ color: "#250C77", padding: "10px 43px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#fff" } }} onClick={onPrev} style={{ marginTop: '16px' }}>
          <img src={backChevron} alt="back-chevron"></img>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Back</Typography>
        </Button>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 24px", borderRadius: "8px", gap: "8px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={onNext} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Next Step</Typography>
          <img src={nextChevron} alt="next-chevron"></img>
        </Button>
      </Box>
    </Box>
  )
}

export default AssetsDetail;