import api from "./api";

// Already exists:
export const getMonthlyChartData = async (year: string, month: string) => {
  const res = await api.get("/chart", { params: { year, month } });
  return res.data;
};

export const getYearlyChartData = async (year: string) => {
  const res = await api.get("/chart/yearly", { params: { year } });
  return res.data;
};
