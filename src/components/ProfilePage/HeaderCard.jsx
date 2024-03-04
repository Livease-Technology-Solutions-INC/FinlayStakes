import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import chevronDown from "../../assets/system-uicons_chevron-up-double-red.svg";
import chevronUp from "../../assets/system-uicons_chevron-up-double.svg"

const HeaderCard = ({ HeaderCardData }) => {
    return (
        <Box display="flex" gap="20px" flexWrap="wrap">
            {HeaderCardData.map((item, index) => (
                <Card key={index} sx={{ padding: "0px 8px" , borderRadius:"15px",  paddingTop:"8px", boxShadow:"none"}}>
                    <CardHeader
                        avatar={<Avatar>{item.icon}</Avatar>}
                        title={<Typography variant="body1" sx={{ fontWeight: "700", color: "#212844", fontFamily: "Inter", padding:"8px" }}>{item.header}</Typography>}
                    />
                    <CardContent width="100%" display="flex" flexDirection="column" justifyContent="center" alignItem="center" sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center" }}>
                        <Typography variant="body1" textAlign="center" sx={{ fontWeight: "700", color: "#414D55", fontFamily: "Inter" }}>
                            {item.subHeader}
                        </Typography>
                        <Divider sx={{ margin: "16px" }} />
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row" gap="8px" marginBottom="9px">
                            {(item.stats && item.stats.status==="Increase") ? (<img src={chevronUp}></img>) : (<img src={chevronDown}></img>)}

                            <Typography sx={{fontFamily: "Inter", color:"#9397BB"}} textAlign="center"  variant="body1">
                           <span style={{fontWeight:"700", marginRight:"5px"}}>{item.stats.number}</span> 
                           {item.stats.status}
                            </Typography>
                        </Box>
                        <Typography  sx={{fontFamily: "Inter", color:"#9397BB", fontWeight:"400"}} textAlign="center" variant="caption">
                            {item.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default HeaderCard;
