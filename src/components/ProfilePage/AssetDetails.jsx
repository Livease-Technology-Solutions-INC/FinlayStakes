import { React, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import InputField from '../Input';
import nextChevron from "../../assets/carbon_next-outline.svg"
import backChevron from "../../assets/carbon_back-outline.svg"


const AssetsDetail = ({ onNext, onPrev }) => {
  const [cash, setCash] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [shares, setShares] = useState('');
  const [businessAssets, setBusinessAssets] = useState('');
  const [others, setOthers] = useState('');
  const [totalAssets, setTotalAssets] = useState('');

  return (
    <Box width="100%" display={'flex'} flexDirection={"column"} gap={"32px"} paddingDown={"24px"} >
      <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="h5">Asset Details</Typography>
      <Box width={"100%"} display={'flex'} flexDirection={'column'} gap={"24px"}>
        <Box width={"100%"} display={'flex'} flexWrap={"wrap"} flexDirection={"row"} gap="92px" rowGap={"24px"} alignItems={"flex-start"} >
          <InputField
            label={"Cash in Hand & Bank"}
            placeholder={"Cash in Hand & Bank"}
            value={cash}
            onChange={(cash) => setCash(cash)}
          />
          <InputField
            label={"Property Value"}
            placeholder={"Property Value"}
            value={propertyValue}
            onChange={(propertyValue) => setPropertyValue(propertyValue)}
          />
          <InputField
            label={"Shares / Equities"}
            placeholder={"Shares / Equities"}
            value={shares}
            onChange={(shares) => setShares(shares)}
          />
          <InputField
            label={"Business Assets"}
            placeholder={"Business Assets"}
            value={businessAssets}
            onChange={(businessAssets) => setBusinessAssets(businessAssets)}
          />
          <InputField
            label={"Others"}
            placeholder={"Others"}
            value={others}
            onChange={(others) => setOthers(others)}
          />
          <InputField
            label={"Total Assets"}
            placeholder={"Total Assets"}
            value={totalAssets}
            onChange={(totalAssets) => setTotalAssets(totalAssets)}
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

export default AssetsDetail