import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 300;

const menuItems = [
  { label: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { label: "Analytics", icon: <AssessmentIcon />, path: "/analytics" },
  { label: "Personal", icon: <PersonIcon />, path: "/personal" },
  { label: "Transactions", icon: <ReceiptIcon />, path: "/transactions" },
  { label: "Messages", icon: <MessageIcon />, path: "/messages" },
  { label: "Wallet", icon: <WalletIcon />, path: "/wallet" },
  { label: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "rgba(26, 28, 34, 1)",
          color: "#fff",
        },
      }}
    >
      <Box p={2}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Penta
        </Typography>
      </Box>
      <Divider sx={{ borderColor: "#444" }} />

      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  my: 0.5,
                  backgroundColor: isActive ? "rgba(255, 152, 0, 0.15)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 152, 0, 0.1)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{ color: isActive ? "#FF9800" : "#bbb", minWidth: "40px" }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    color: isActive ? "#FF9800" : "#fff",
                    fontWeight: isActive ? "bold" : "normal",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
