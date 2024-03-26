import React from 'react';
import step1 from "../../assets/personal-information (1) 1.svg";
import step2 from "../../assets/income (1) 1.svg";
import step3 from "../../assets/budget (2) 1.svg";
import step4 from "../../assets/assets (1).svg";
import step5 from "../../assets/claim (1).svg";
import step6 from "../../assets/target (1).svg";
import step7 from "../../assets/indemnity (1).svg";
import step8 from "../../assets/business-strategy.svg";
import step9 from "../../assets/existingpolicy.svg";
import { Box } from '@mui/material';

function Progressbar({ activeStep }) {
    const stepImages = [
        step1, step2, step3, step4, step5, step6, step7, step8, step9
    ];
    console.log(activeStep)
    return (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} marginTop="100px">
            {stepImages.map((stepImg, index) => (
                <div key={index + 1} style={{ display: 'flex', alignItems: 'center', flexDirection: "column", alignItems: "center"}}>
                    <div style={activeStep === index + 1? { width: "44px", height: "44px", backgroundColor: '#DEDFEE', display: 'flex', justifyContent: 'center', alignItems: 'center', translate: "-20px" } : {}}>
                        <img src={stepImg} style={activeStep === index + 1 ? { transform: "scale(1.35)" , } : {filter: index + 1> activeStep ? 'grayscale(100%) brightness(100%)' : 'none' }} />
                    </div>
                    {index  < stepImages.length - 1 && <div style={{ height: "40px", width: "2px", backgroundColor: index >= activeStep ? '#A6A9D1':"#250C77", marginBottom:"4px" }}></div>}
                </div>
            ))}
        </Box>
    )
}

export default Progressbar;
