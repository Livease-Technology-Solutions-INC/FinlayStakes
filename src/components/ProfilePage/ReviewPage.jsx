import React from 'react'
import HeaderCard from '../ProfilePage/reviewPage/HeaderCard'
import { ProfilePageCardData,chartData, IncomeStats, ExpensesStats, AssetsStats,LiabilitiesStats, Goals, tableData } from '../../resources/constants'
import NetStats from '../ProfilePage/reviewPage/NetStats'
import GoalCards from '../ProfilePage/reviewPage/Goals'
import BoxCard from './reviewPage/BoxCard'
import PolicyTable from "../ProfilePage/reviewPage/Policies"
import { Box } from '@mui/material'
import { Button } from '@mui/material'

function ReviewPage({onNext, onPrev}) {
    return (
        <Box sx={{ position:"static" ,width:"100%", display:"flex", flexDirection:"column", gap:"24px", justifyContent:"center", alignItems:"flex-start"}}>
            <HeaderCard  HeaderCardData={ProfilePageCardData}/>
            <NetStats data1={IncomeStats} data2={ExpensesStats} Header={"NET INCOME"} subHeader1={"Income"} subHeader2={"Expenses"}/>
            <NetStats data1={AssetsStats} data2={LiabilitiesStats} Header={"NET WORTH"} subHeader1={"Assets"} subHeader2={"Liabilities"}/>
            <GoalCards goalData={Goals}/>
            <Box sx={{ width:"100%", display:"flex", flexWrap:"wrap",rowGap:"20px", gap:"20px", justifyContent:"flex-start", alignItems:"flex-start"}}>
            <BoxCard data={chartData}  header="EXISTING PROVISIONS" stat="AED24,000" status="increase"  percentage="5.5%"/>
            <BoxCard data={chartData}  header="EXISTING PROVISIONS" stat="AED24,000" status="increase"  percentage="5.5%"/>
            </Box>
            <PolicyTable data={tableData}/>
        </Box>
    )
}

export default ReviewPage