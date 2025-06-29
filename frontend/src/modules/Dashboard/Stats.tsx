import { Box } from '@mui/material';
import StatCard from '../../components/Dashboard/StatCard';
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { getStats } from "../../services/statsService";
import { useEffect, useState } from 'react';

const Stats = () => {
    const [stats, setStats] = useState({
        balance: 0,
        revenue: 0,
        savings: 0,
        expenses: 0
    });

    useEffect(() => {
        getStats()
        .then(setStats)
        .catch((err) => console.log("Failed tp get data" , err.message));
    },[]);
    
    return(
        <Box
            sx = {{
                display: "flex",
                justifyContent: "flex-end",
                width: "90%",
                marginLeft: "9rem",
                padding: "20px"
            }}
        >
            <StatCard
                title='Balance'
                value= {` $ ${stats.balance.toLocaleString()}`}
                icon={<AccountBalanceWalletIcon color="primary" />}
            />
            <StatCard
                title='Revenue'
                value={`$ ${stats.revenue.toLocaleString()}`}
                icon={<AccountBalanceWalletIcon color="primary" />}
            />
            <StatCard
                title='Expenses'
                value={`$ ${stats.expenses.toLocaleString()}`}
                icon={<AccountBalanceWalletIcon color="error" />}
            />
            <StatCard
                title='Savings'
                value={`$ ${stats.savings.toLocaleString()}`}
                icon={<AccountBalanceWalletIcon color="warning" />}
            />
        </Box>
    )
}

export default Stats;