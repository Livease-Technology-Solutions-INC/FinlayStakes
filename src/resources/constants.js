import icon1 from "../assets/Icon.svg";
import icon2 from "../assets/Mask group.svg";
import icon3 from "../assets/Mask group3.svg";
import icon4 from "../assets/Mask group4.svg";
import icon5 from "../assets/ant-design_project-filled.svg";
import icon6 from "../assets/iconamoon_profile-fill.svg";
import icon7 from "../assets/dashboard.svg"
import income from "../assets/income.svg";
import expenses from "../assets/expenses.svg";
import liabilities from "../assets/liabilities.svg";
import assets from "../assets/assets.svg";
import useAxios from "../utlis/useAxios"
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react";


export const SidebarData = [
  { label: 'Dashboard', icon: <img src={icon7} alt="Dashboard" />, url: "/" },
  { label: 'Profile Page', icon: <img src={icon6} alt="Profile" />, url: "/profile" },
  { label: 'Investment Amount', icon: <img src={icon2} alt="Investment" />, url: "/investment" },
  { label: 'Business categories', icon: <img src={icon1} alt="Buissness" />, url: "/buissness" },
  { label: 'Purpose of Investments', icon: <img src={icon3} alt="Investment" />, url: "/investment" },
  { label: 'Sources of Funds', icon: <img src={icon4} alt="Fund" />, url: "/Fund" },
  { label: 'Available Projects', icon: <img src={icon5} alt="Project" />, url: "/project" },
];

export const ProfilePageCardData = [
  {
    header: 'Total Income',
    icon: <img src={income} alt="Profile" />,
    subHeader: 'AED109,943',
    stats: {
      stats: "'0.25%",
      status: "Increase"
    },
    description: 'Total amount of income generated',
  },
  {
    header: 'Total Expenses',
    icon: <img src={expenses} alt="Profile" />,
    subHeader: 'AED78,943',
    stats: {
      stats: "'0.25%",
      status: "Decrease"
    },
    description: 'Total amount of Expense generated',
  },
  {
    header: 'Total Assets',
    icon: <img src={assets} alt="Profile" />,
    subHeader: 'AED209,943',
    stats: {
      stats: "0.35%",
      status: "Increase"
    },
    description: 'Total amount of Assets generated',
  },
  {
    header: 'Total Liabilities',
    icon: <img src={liabilities} alt="Profile" />,
    subHeader: 'AED500,000',
    stats: {
      stats: "0.15%",
      status: "Increase"
    },
    description: 'Total amount of Liabilities generated',
  },
]

export const IncomeStats = [
  {
    name: "Interest",
    stat: "AED20,943",
    status: "increase",
    percentage: "0.25%",
    color: "#06B48A"
  },
  {
    name: "Bank Returns",
    stat: "AED2,300",
    status: "decrease",
    percentage: "0.25%",
    color: "#6560F0"
  },
  {
    name: "Income from Property",
    stat: "AED2,700",
    status: "decrease",
    percentage: "0.25%",
    color: "#3DD9EB"
  },
  {
    name: "Salary",
    stat: "AED26,700",
    status: "increase",
    percentage: "0.35%",
    color: "#D76B66"
  },
  {
    name: "Bonus",
    stat: "AED25,700",
    status: "increase",
    percentage: "0.15%",
    color: "#F6CF7D"
  },
]
export const ExpensesStats = [
  {
    name: "Utility Bill",
    stat: "AED20,943",
    status: "increase",
    percentage: "0.25%",
    color: "#06B48A"

  },
  {
    name: "Loan",
    stat: "AED2,300",
    status: "decrease",
    percentage: "0.25%",
    color: "#6560F0"
  },
  {
    name: "Rent",
    stat: "AED2,700",
    status: "decrease",
    percentage: "0.25%",
    color: "#3DD9EB"
  },
  {
    name: "Shopping",
    stat: "AED26,700",
    status: "increase",
    percentage: "0.35%",
    color: "#D76B66"
  },
  {
    name: "Medical",
    stat: "AED25,700",
    status: "increase",
    percentage: "0.15%",
    color: "#F6CF7D"
  },
  {
    name: "Leisure",
    stat: "AED3,000",
    status: "decrease",
    percentage: "0.15%",
    color: "#9F00AD"
  },
]
export const AssetsStats = [
  {
    name: "Cash in Hand & Bank",
    stat: "AED20,943",
    status: "increase",
    percentage: "0.25%",
    color: "#06B48A"

  },
  {
    name: "Property Value",
    stat: "AED2,300",
    status: "decrease",
    percentage: "0.25%",
    color: "#6560F0"
  },
  {
    name: "Shares / Equities",
    stat: "AED2,700",
    status: "decrease",
    percentage: "0.25%",
    color: "#3DD9EB"
  },
  {
    name: "Business Assets",
    stat: "AED26,700",
    status: "increase",
    percentage: "0.35%",
    color: "#D76B66"
  },
  {
    name: "Others",
    stat: "AED25,700",
    status: "increase",
    percentage: "0.15%",
    color: "#F6CF7D"
  },
]
export const LiabilitiesStats = [
  {
    name: "Bank Loans",
    stat: "AED20,943",
    status: "increase",
    percentage: "0.25%",
    color: "#06B48A"

  },
  {
    name: "Credit Card Outstanding",
    stat: "AED2,300",
    status: "decrease",
    percentage: "0.25%",
    color: "#6560F0"
  },
  {
    name: "Mortgages",
    stat: "AED2,700",
    status: "decrease",
    percentage: "0.25%",
    color: "#3DD9EB"
  },
  {
    name: "Auto Loans",
    stat: "AED26,700",
    status: "increase",
    percentage: "0.35%",
    color: "#D76B66"
  },
  {
    name: "Hand Loans",
    stat: "AED25,700",
    status: "increase",
    percentage: "0.15%",
    color: "#F6CF7D"
  },
]
export const Goals = [
  {
    header: "Children's Education",
    status: "Budget",
    stats: "AED15,000"
  },
  {
    header: "Capital Required for University",
    status: "Budget",
    stats: "AED15,000"
  },
  {
    header: "Years left for University",
    status: "Year",
    stats: "2 Years"
  },
  {
    header: "Where would you like to retire?",
    status: "Location",
    stats: "Dubai"
  },
  {
    header: "Income required after retirement?",
    status: "Budget",
    stats: "AED15,000"
  },
  {
    header: "Annual income for family incase of death",
    status: "Budget",
    stats: "AED15,00,000"
  },
  {
    header: "Annual income for family incase of critical illness",
    status: "Budget",
    stats: "AED15,000"
  },
  {
    header: "Annual income for family incase of disability",
    status: "Budget",
    stats: "AED15,000"
  },
]
export const chartData = [
  {
    name: "Children’s  Education -",
    stat: "AED11,500",
    color: "#06B48A"
  },
  {
    name: "Retirement - ",
    stat: "AED3,600",
    color: "#6560F0"
  },
  {
    name: "Life Insurance -",
    stat: "AED11,500",
    color: "#3DD9EB"
  },
  {
    name: "Critical Illness",
    stat: "AED11,500",
    color: "#D76B66"
  },
  {
    name: "Disability",
    stat: "AED11,500",
    color: "#F6CF7D"
  }
]
export const tableData = [
  {
    header: 'Policy No',
    childrenEducation: '101L132V01',
    lifeInsurance: '201L152S01',
    retirement: '101B126L01',
  },
  {
    header: 'Date of Commencement',
    childrenEducation: '12/02/2024',
    lifeInsurance: '12/02/2024',
    retirement: '12/02/2024',
  },
  {
    header: 'Annual Premium',
    childrenEducation: 'AED10,000',
    lifeInsurance: 'AED15,000',
    retirement: 'AED7,000',
  },
  {
    header: 'Term',
    childrenEducation: '10 Years',
    lifeInsurance: '20 Years',
    retirement: '15 Years',
  },
  {
    header: 'Date of Maturity',
    childrenEducation: '12/02/2034',
    lifeInsurance: '12/02/2044',
    retirement: '12/02/2039',
  },
  {
    header: 'Benefits',
    childrenEducation: 'Lorem ipsum',
    lifeInsurance: 'Lorem ipsum',
    retirement: 'Lorem ipsum',
  },
];

