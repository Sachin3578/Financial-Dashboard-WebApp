import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getMonthlyChartData, getYearlyChartData } from "../../services/chartService"; // 👈 use your service

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Filler, Legend);

const filterOptions = ["Month-wise", "Year-wise"];

const OverviewChart = () => {
  const [viewMode, setViewMode] = useState("Month-wise");
  const [labels, setLabels] = useState<string[]>([]);
  const [incomeData, setIncomeData] = useState<number[]>([]);
  const [expenseData, setExpenseData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (viewMode === "Month-wise") {
          const month = "January"; // Optional: dynamic selection
          const year = "2024";
          const res = await getMonthlyChartData(year, month);
          setLabels(["Week 1", "Week 2", "Week 3"]);
          setIncomeData(res.income);
          setExpenseData(res.expense);
        } else {
          const year = "2024";
          const res = await getYearlyChartData(year); // you need to create this API if not exists
          setLabels([
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ]);
          setIncomeData(res.income);
          setExpenseData(res.expense);
        }
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [viewMode]);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        borderColor: "#4CAF50",
        backgroundColor: "#4CAF50",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
      },
      {
        label: "Expense",
        data: expenseData,
        borderColor: "#FF9800",
        backgroundColor: "#FF9800",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "nearest" as const,
      intersect: false,
    },
    plugins: {
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "#888",
        borderWidth: 1,
        callbacks: {
          label: function (context: any) {
            const label = context.dataset.label || "";
            const value = context.parsed.y || 0;
            return `${label}: ₹ ${value}`;
          },
        },
      },
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#fff",
          font: {
            weight: "700" as const,
            size: 12,
            family: "Roboto",
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "#555",
          borderDash: [4, 4],
        },
        ticks: {
          color: "#bbb",
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#555",
          borderDash: [4, 4],
        },
        ticks: {
          color: "#bbb",
        },
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 8,
      },
      line: {
        borderWidth: 2,
      },
    },
  };

  return (
    <Box
      p={2}
      borderRadius={2}
      boxShadow={2}
      bgcolor="rgba(26, 28, 34, 1)"
      color="#fff"
      sx={{
        width: "613.65px",
        // maxWidth: 613.65,
        marginLeft: "20rem",
        height: "297.25px",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight="bold" color="white">
          Income vs Expense
        </Typography>

        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel sx={{ color: "#aaa" }}>View by</InputLabel>
          <Select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value)}
            label="View by"
            sx={{ color: "#fff" }}
          >
            {filterOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Line data={data} options={options} />
    </Box>
  );
};

export default OverviewChart;
