import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  bgColor?: string;
  color?: string;
}

const StatCard = ({ title, value, icon, bgColor = "rgba(26, 28, 34, 1)", color = "white" }: StatCardProps) => {
  return (
    <Box
      bgcolor={bgColor}
      color={color}
      p={3}
      borderRadius={2}
      boxShadow={2}
      display="flex"
      flexDirection="column"
      gap={1}
      minWidth="214.82px"
      minHeight="95.75px"
      sx = {{
        marginLeft: "100px"
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle2">{title}</Typography>
        {icon}
      </Box>
      <Typography variant="h5" fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
};

export default StatCard;
