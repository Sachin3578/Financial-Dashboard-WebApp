import { Box, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import type { Transaction } from "../../types/Transactions";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <Box
      bgcolor="rgba(26, 28, 34, 1)"
      p={2}
      borderRadius={2}
      color="#fff"
      boxShadow={1}
      width={301}
      height={256}
      marginLeft={10}
    >
      <Typography variant="h6" mb={2}>
        Recent Transactions
      </Typography>
      <List>
        {transactions.slice(0, 5).map((txn, i) => (
          <Box key={i}>
            <ListItem disableGutters>
              <ListItemText
                primary={txn.user_name}
                secondary={`₹ ${txn.amount.toLocaleString()}`}
                primaryTypographyProps={{ fontWeight: 500, color: "#fff" }}
                secondaryTypographyProps={{ color: "#ccc" }}
              />
            </ListItem>
            {i !== transactions.length - 1 && (
              <Divider sx={{ backgroundColor: "#444" }} />
            )}
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default RecentTransactions;
