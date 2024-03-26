import React from 'react';
import {Card,Box} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GoalCard = ({ goalData }) => {
  return (
    <Box sx={{ width: { xs: '70%', md: '100%' }, display:"flex", flexDirection:"column",  backgroundColor:"#fff", padding:"24px" , gap:"24px" }}>
    <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="body1">
                GOALS
            </Typography>
    <Box sx={{ width: "100%", display: 'flex', flexWrap:"wrap", rowGap:"24px",gap: '36px', borderRadius:"20px" }}>
    {goalData.map((goal, index) => (
        <Card key={index} variant="outlined" sx={{ width:"100%", maxWidth:"229px", border:"1px solid #DEDFEE",borderRadius:"20px"}} >
          <CardContent sx={{display:"flex", flexDirection:"column", gap:"16px"}}>
            <Typography variant="body2"  sx={{ fontWeight: "600", color: "#212844", fontFamily: "Inter" }}>
              {goal.header}
            </Typography>
            <Box sx={{width:"100%", display:"flex", flexDirection:"column", gap:"8px"}}>
            <Typography  variant="caption" sx={{fontWeight: "500", fontFamily: "Inter" ,color:"#9397BB"}} gutterBottom>
              {goal.status}
            </Typography>
            <Typography sx={{fontWeight: "700", fontFamily: "Inter" ,color:"#212844"}} variant="h5">
              {goal.stats}
            </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
    </Box>
  );
};
export default GoalCard;

