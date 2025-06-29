import { useEffect, useState } from "react";
import OverviewChart from "../../components/Dashboard/OverviewGraph";
import { getMonthlyChartData } from "../../services/chartService";

const DashboardPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const [incomeData, setIncomeData] = useState<number[]>([]);
  const [expenseData, setExpenseData] = useState<number[]>([]);

  useEffect(() => {
    getMonthlyChartData(selectedYear, selectedMonth)
      .then((data) => {
        setIncomeData(data.income);
        setExpenseData(data.expense);
      })
      .catch((err) => {
        console.error("Failed to load chart data:", err);
      });
  }, [selectedYear, selectedMonth]);

  return (
    <OverviewChart
      labels={["Week 1", "Week 2", "Week 3"]}
      incomeData={incomeData}
      expenseData={expenseData}
      selectedMonth={selectedMonth}
      selectedYear={selectedYear}
      onMonthChange={setSelectedMonth}
      onYearChange={setSelectedYear}
    />
  );
};

export default DashboardPage;
