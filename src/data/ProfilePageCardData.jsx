import React, { useEffect, useState } from "react";
import useAxios from "../utlis/useAxios";
import { jwtDecode } from 'jwt-decode';
import incomeIcon from "../assets/income.svg";
import expensesIcon from "../assets/expenses.svg";
import liabilitiesIcon from "../assets/liabilities.svg";
import assetsIcon from "../assets/assets.svg";

function ProfilePageCardData() {
    const [totalIncome, setTotalIncome] = useState("");
    const [totalExpenses, setTotalExpenses] = useState("");
    const [totalAssets, setTotalAssets] = useState("");
    const [totalLiabilities, setTotalLiabilities] = useState("");
    const api = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("authTokens");
            if (token) {
                const decode = jwtDecode(token);
                const user_id = decode.user_id;
                try {
                    const incomeResponse = await api.get(`/income_details/${encodeURIComponent(user_id)}/`);
                    const expensesResponse = await api.get(`/expense_details/${encodeURIComponent(user_id)}/`);
                    const assetsResponse = await api.get(`/asset_details/${encodeURIComponent(user_id)}/`);
                    const liabilitiesResponse = await api.get(`/liability_details/${encodeURIComponent(user_id)}/`);
                    setTotalIncome(incomeResponse.data.total_income);
                    setTotalExpenses(expensesResponse.data.total_expenses);
                    setTotalAssets(assetsResponse.data.total_assets);
                    setTotalLiabilities(liabilitiesResponse.data.totalLiabilities);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        fetchData();
    }, []);

    return [
        {
            header: 'Total Income',
            icon: <img src={incomeIcon} alt="Income" />,
            subHeader: 'AED' + (totalIncome || "0"),
            stats: {
                stats: "0.25%",
                status: "Increase"
            },
            description: 'Total amount of income generated',
        },
        {
            header: 'Total Expenses',
            icon: <img src={expensesIcon} alt="Expenses" />,
            subHeader: 'AED' + (totalExpenses || "0"),
            stats: {
                stats: "0.25%",
                status: "Decrease"
            },
            description: 'Total amount of Expense generated',
        },
        {
            header: 'Total Assets',
            icon: <img src={assetsIcon} alt="Assets" />,
            subHeader: 'AED' + (totalAssets || "0"),
            stats: {
                stats: "0.35%",
                status: "Increase"
            },
            description: 'Total amount of Assets generated',
        },
        {
            header: 'Total Liabilities',
            icon: <img src={liabilitiesIcon} alt="Liabilities" />,
            subHeader: 'AED' + (totalLiabilities || "0"),
            stats: {
                stats: "0.15%",
                status: "Increase"
            },
            description: 'Total amount of Liabilities generated',
        }
    ];
}

export default ProfilePageCardData;
