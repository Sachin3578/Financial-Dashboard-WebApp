import api from "./api";

export const getAllTransactions = async () => {
  const response = await api.get("/transactions");
  return response.data;
};
