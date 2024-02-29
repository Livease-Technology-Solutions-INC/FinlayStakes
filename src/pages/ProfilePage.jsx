import React from 'react'
import HeaderCard from '../components/ProfilePage/HeaderCard'
import { ProfilePageCardData,chartData, IncomeStats, ExpensesStats, AssetsStats,LiabilitiesStats, Goals, tableData } from '../resources/constants'
import NetStats from '../components/ProfilePage/NetStats'
import GoalCards from '../components/ProfilePage/Goals'
import Card2 from '../components/ProfilePage/Provisions'
import PolicyTable from "../components/ProfilePage/Policies"

import { Box } from '@mui/material'

function ProfilePage() {
    return (
        <Box sx={{ width:"100%", display:"flex", flexDirection:"column", gap:"24px", justifyContent:"center", alignItems:"flex-start"}}>
            <HeaderCard  HeaderCardData={ProfilePageCardData}/>
            <NetStats data1={IncomeStats} data2={ExpensesStats} Header={"NET INCOME"} subHeader1={"Income"} subHeader2={"Expenses"}/>
            <NetStats data1={AssetsStats} data2={LiabilitiesStats} Header={"NET WORTH"} subHeader1={"Assets"} subHeader2={"Liabilities"}/>
            <GoalCards goalData={Goals}/>
            <Box sx={{ width:"100%", display:"flex", flexDirection:"row", gap:"20px", justifyContent:"center", alignItems:"center"}}>
            <Card2 data={chartData}  header="EXISTING PROVISIONS" stat="AED24,000" status="increase"  percentage="5.5%"/>
            <Card2 data={chartData}  header="EXISTING PROVISIONS" stat="AED24,000" status="increase"  percentage="5.5%"/>
            </Box>
            <PolicyTable data={tableData}/>

        </Box>
    )
}

export default ProfilePage