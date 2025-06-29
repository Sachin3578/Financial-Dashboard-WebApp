import Stats from "./Stats";
import Navbar from "./Navbar";
import Overview from "./Overview";
import RecentTransactions from "../Transactions/Recent"
import { useEffect, useState } from "react";
import TransactionTable from "../../components/Dashboard/Transactions";
import { getAllTransactions } from "../../services/transactionService";
import { getallTransactions } from "../../services/allTransactionService";
import { Box } from "@mui/material";
import type { Transaction } from "../../types/Transactions";

const Landing = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        getAllTransactions()
        .then((data) => setTransactions(data))
        .catch((err) => console.error("Failed to fetch transactions", err));
    }, []);

    const [alltransactions, setAllTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        getallTransactions()
        .then((data) => setAllTransactions(data))
        .catch((err) => console.error("Failed to fetch transactions", err));
    }, []);
    
    return(
        <>
         <Navbar/>
         <Stats/>
         <Box
            sx = {{
                display: "flex",
                marginBottom: "30px"
            }}
         >
            <Overview/>
            <RecentTransactions transactions={transactions}/>
         </Box>
         <TransactionTable transactions={alltransactions} />
        </>
    )
}

export default Landing;