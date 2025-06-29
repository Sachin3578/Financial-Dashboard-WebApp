import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        user_id: userId,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid user ID");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 10,
          bgcolor: "#1e1e2f",
          color: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" mb={3} fontWeight="bold" color="primary">
          Login to Dashboard
        </Typography>

        <TextField
          label="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          fullWidth
          variant="outlined"
          margin="normal"
          sx={{
            input: { color: "#fff" },
            label: { color: "#aaa" },
          }}
        />

        {error && (
          <Typography color="error" variant="body2" mb={2}>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
