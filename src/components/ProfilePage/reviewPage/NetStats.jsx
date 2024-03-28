import React from 'react'
import DonutChart from './Chart'
import { Typography, Box, Divider } from '@mui/material';
import chevronDown from "../../../assets/system-uicons_chevron-up-double-red.svg";
import chevronUp from "../../../assets/system-uicons_chevron-up-double.svg"

function NetStats({ data1, data2, Header, subHeader1, subHeader2 }) {
    return (
        <Box sx={{ width: { xs: '70%', md: '100%' }, display: "flex", flexDirection: "column", backgroundColor: "#fff", padding: "24px", borderRadius: '16px' }}>
            <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700", marginBottom: "32px" }} variant="body1">
                {Header}
            </Typography>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "row", gap: "76px", justifyContent: "center", alignItems: "flex-start" }}>
                <Box sx={{ width: { xs: '0', md: '196px' }, height: "150px", flexShrink: 0 }} >
                    <DonutChart StatsData={data1} inRadius={30} />
                </Box>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="body1">
                        {subHeader1}
                    </Typography>
                    <Box sx={{ width: "100%", display: 'flex', flexWrap:"wrap", gap: '72px', rowGap: "24px"}}>
                        {data1.map((item, index) => (
                            <Box key={index} sx={{ width: '100%',  maxWidth:"200px", display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <Typography sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: "400px" }} variant="body1">
                                    <span style={{ position: 'absolute', left: "-8%", top: '25%', transform: 'translateY(-50%)', fontSize: '20px', color: item.color }}>•</span>
                                    {item.name}
                                </Typography>
                                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" gap="8px">
                                    <Typography sx={{ fontFamily: 'Inter', color: '#414D55', fontWeight: "bold" }} variant="body1" >
                                        {item.stat}
                                    </Typography>
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" gap="4px">

                                        <Typography>
                                            {(item.status && item.status === "increase") ? (<img style={{ width: "16px" }} src={chevronUp}></img>) : (<img style={{ width: "16px" }} src={chevronDown}></img>)}
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Inter', color: '#9397BB', fontWeight: "bold" }} variant="caption" >
                                            {item.percentage}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ margin: "24px" }} />

            <Box sx={{ width: { xs: '70%', md: '100%' }, display: "flex", flexDirection: "row", gap: "76px", justifyContent: "center", alignItems: "flex-start" }}>
                <Box sx={{ width: { xs: '0', md: '196px' }, height: "196px", flexShrink: 0 }} >
                    <DonutChart StatsData={data2}inRadius={30} />
                </Box>
                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <Typography sx={{ fontFamily: "Inter", color: "#212844", fontWeight: "700" }} variant="body1">
                        {subHeader2}
                    </Typography>
                    <Box sx={{ width: "100%", display: 'flex', flexWrap:"wrap", gap: '72px', rowGap: "24px"}}>
                        {data2.map((item, index) => (
                            <Box key={index} sx={{ width: '100%', maxWidth:"200px", display: 'flex', flexDirection: 'column', position: 'relative' }}>
                                <Typography sx={{ fontFamily: 'Inter', color: '#212844', fontWeight: "400px" }} variant="body1">
                                    <span style={{ position: 'absolute', left: "-8%", top: '25%', transform: 'translateY(-50%)', fontSize: '20px', color: item.color }}>•</span>
                                    {item.name}
                                </Typography>
                                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" gap="8px">
                                    <Typography sx={{ fontFamily: 'Inter', color: '#414D55', fontWeight: "bold" }} variant="body1" >
                                        {item.stat}
                                    </Typography>
                                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" gap="4px">

                                        <Typography>
                                            {(item.status && item.status === "increase") ? (<img style={{ width: "16px" }} src={chevronUp}></img>) : (<img style={{ width: "16px" }} src={chevronDown}></img>)}
                                        </Typography>
                                        <Typography sx={{ fontFamily: 'Inter', color: '#9397BB', fontWeight: "bold" }} variant="caption" >
                                            {item.percentage}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NetStats