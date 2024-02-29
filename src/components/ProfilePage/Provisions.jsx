import React from 'react'
import DonutChart from './Chart'
import { Typography, Box, Divider } from '@mui/material';
import chevronDown from "../../assets/system-uicons_chevron-up-double-red.svg";
import chevronUp from "../../assets/system-uicons_chevron-up-double.svg"

function Card2({ data, header, stat, status, percentage }) {
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", backgroundColor: "#fff", padding: "24px", gap:"16px" }}>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap:"16px" }}>
                <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="body1">
                    {header}
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" gap="8px">
                    <Typography sx={{ fontFamily: "Inter", color: "#414D55", fontWeight: "700", fontSize:"20px"}}>
                        {stat}
                    </Typography>
                    <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="body1">
                        {percentage}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: "76px", justifyContent: "center", alignItems: "flex-start" }}>
                <Box sx={{ width: "196px", height: "150px", flexShrink: 0 }} >
                    <DonutChart StatsData={data} inRadius={50} />
                </Box>
                <Box sx={{ width: "100%", display: 'flex', flexDirection: "column", alignItems: "flex-start", justifyContent: "center", gap: '24px' }}>
                    {data.map((item, index) => (
                        <Box key={index} sx={{ width: '100%', display: 'flex', flexDirection: 'row', position: 'relative' }}>
                            <Typography sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: "400px" }} variant="caption">
                                <span style={{ position: 'absolute', left: "-8%", top: '25%', transform: 'translateY(-50%)', fontSize: '20px', color: item.color }}>•</span>
                                {item.name}
                            </Typography>
                            <Typography sx={{ fontFamily: 'Inter', color: '#414D55', fontWeight: "bold" }} variant="caption" >
                                {item.stat}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Card2