import { useState } from "react";

import { Box, IconButton, Badge, Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Tooltip } from "@mui/material";

import SearchBar from "../../components/Dashboard/SearchBar";
import SideDrawer from "../../components/Dashboard/SideDrawer";

const Navbar = () =>{

    const [searchQuery, setSearchQuery] = useState("");

    return(
        <Box
            sx = {{
                display: "flex"
            }}
        >
            <SideDrawer/>
            <Box
            sx = {{
                width:"90%",
                display:"flex",
                flexWrap:"nowrap",
                justifyContent:"space-between",
                alignItems:"center",
                padding: '5px',
                bgcolor: "rgba(26, 28, 34, 1)",
                color: "white"
            }}
        >
            <Typography 
                variant="h5"
                 sx = {{ 
                    fontWeight: "bold" 
                }}
            > Dashboard
            </Typography>
            <SearchBar
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or amount"
            />
            <IconButton color="secondary" >
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Tooltip title="Profile">
            <IconButton>
                <Avatar src="/user.png" alt="User" />
            </IconButton>
            </Tooltip>
            </Box>
        </Box>
        
    )
}

export default Navbar;
