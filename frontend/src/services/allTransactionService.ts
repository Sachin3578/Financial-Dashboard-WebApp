import api from "./api";

export const getallTransactions = async () => {
  const response = await api.get("/alltransactions");
  return response.data;
};
