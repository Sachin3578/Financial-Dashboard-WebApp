import {
  Avatar,
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton
} from "@mui/material";
import { useState } from "react";
import type { Transaction } from "../../types/Transactions";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";

const statusColor = {
  Paid: "success",
  Unpaid: "error",
  Pending: "warning",
} as const;

const TransactionTable = ({ transactions }: { transactions: Transaction[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filtered = transactions
    .filter((txn) => txn.user_name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((txn) => (statusFilter ? txn.status === statusFilter : true))
    .sort((a, b) =>
      sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount
    );

  return (
    <Box bgcolor="#1e1e2f" p={2} borderRadius={2} color="#fff" boxShadow={1} marginLeft={40} width={1200}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">All Transactions</Typography>
        <Box display="flex" gap={2}>
          <TextField
            size="small"
            placeholder="Search name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#ccc" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: "#2a2a3b",
              input: { color: "#fff" },
            }}
          />
          <TextField
            select
            size="small"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{
              backgroundColor: "#2a2a3b",
              color: "#fff",
              minWidth: 120,
            }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Paid">Paid</MenuItem>
            <MenuItem value="Unpaid">Unpaid</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </TextField>
          <IconButton onClick={handleSortToggle} title="Sort by amount" sx={{ color: "#fff" }}>
            <SortIcon />
          </IconButton>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ backgroundColor: "#1e1e2f" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Date</TableCell>
              <TableCell sx={{ color: "#fff" }}>
                Amount{" "}
                <IconButton size="small" onClick={handleSortToggle} sx={{ color: "#aaa" }}>
                  <SortIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((txn, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Avatar src={txn.user_profile} alt={txn.user_name} />
                      <Typography color="#fff">{txn.user_name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#ccc" }}>
                    {new Date(txn.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell sx={{ color: "#eee" }}>
                    ₹ {txn.amount.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={txn.status}
                      color={statusColor[txn.status]}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} sx={{ textAlign: "center", color: "#888" }}>
                  No transactions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TransactionTable;
