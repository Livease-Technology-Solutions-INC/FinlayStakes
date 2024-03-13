import React from 'react'
import HeaderCard from '../ProfilePage/reviewPage/HeaderCard'
import { ProfilePageCardData,chartData, IncomeStats, ExpensesStats, AssetsStats,LiabilitiesStats, Goals, tableData } from '../../resources/constants'
import NetStats from '../ProfilePage/reviewPage/NetStats'
import GoalCards from '../ProfilePage/reviewPage/Goals'
import BoxCard from './reviewPage/BoxCard'
import PolicyTable from "../ProfilePage/reviewPage/Policies"
import nextChevron from "../../assets/carbon_next-outline.svg"
import exportIcon from "../../assets/export.svg"
import PageTitle from '../Pagetitle'
import { Box, Typography, Button } from '@mui/material'

function ReviewPage({onNext, exportPage}) {
    const ScheduleCall=()=>{
        onNext()  ;  
    }
    return (
        <Box sx={{ position:"static" ,width:"100%", display:"flex", flexDirection:"column", gap:"24px", justifyContent:"center", alignItems:"flex-start"}}>
            <Box sx={{ width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <Box>
              <PageTitle header={"Personal Financial Review"} title={"Profile page"} />
              </Box>
              <Box>
              <Button sx={{ display:"flex", color: "#9397BB", padding: "7px 16px", borderRadius: "8px", gap: "8px", backgroundColor: "#fff", '&:hover': { backgroundColor: "#fff" } }} onClick={exportPage} >
            <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Export</Typography>
            <img src={exportIcon} alt="exportIcon"/>
          </Button>  
              </Box>
                     
           </Box>
            <HeaderCard  HeaderCardData={ProfilePageCardData}/>
            <NetStats data1={IncomeStats} data2={ExpensesStats} Header={"NET INCOME"} subHeader1={"Income"} subHeader2={"Expenses"}/>
            <NetStats data1={AssetsStats} data2={LiabilitiesStats} Header={"NET WORTH"} subHeader1={"Assets"} subHeader2={"Liabilities"}/>
            <GoalCards goalData={Goals}/>
            <Box sx={{ width:"100%", display:"flex", flexWrap:"wrap",rowGap:"20px", gap:"20px", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <BoxCard data={chartData}  header="EXISTING PROVISIONS" stat="AED24,000" status="increase"  percentage="5.5%"/>
            <BoxCard data={chartData}  header="EXISTING PROVISIONS" stat="AED24,000" status="increase"  percentage="5.5%"/>
            </Box>
            <PolicyTable data={tableData}/>
            <Box alignSelf={'flex-end'}>
        <Button sx={{ backgroundColor: "#250C77", color: "#fff", padding: "10px 0px", paddingLeft:"24px", paddingRight:"6px", borderRadius: "40px", gap: "16px", '&:hover': { backgroundColor: "#250C94" } }} variant="contained" onClick={ScheduleCall} style={{ marginTop: '16px' }}>
          <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', textTransform: 'none' }}>Request for Free Analysis and Consultation</Typography>
          <div style={{backgroundColor:"#fff", width:"32px", height:"32px", borderRadius:"50%", position:"relative", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img src={nextChevron} style={{filter: "invert(1) saturate(0)", zIndex:"100", position:"absolute"}}></img>
          </div>
        </Button>
      </Box>
        </Box>
    )
}

export default ReviewPage