import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

function FeedbackForm() {
  return (
    <Box sx={{ padding: { md: 8, xs: 2 } }}>
      <Grid container rowSpacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "33px",
            }}
          >
            Thank you so much for taking time !
          </Typography>
          <Typography>Please provide the below details !</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={1}>
            <Typography>Full Name</Typography>
            <TextField
              label="Enter your Full Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
                width: "80%",
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="column" spacing={1}>
            <Typography>Address</Typography>
            <TextField
              label="Enter your full Postal Address"
              multiline
              rows={3}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={1}>
            <Typography>Country</Typography>
            <TextField
              label="Enter Your Country Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
                width: "80%",
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={1}>
            <Typography>State</Typography>
            <TextField
              label="Enter Your State Name"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
                width: "80%",
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={1}>
            <Typography>Email Id</Typography>
            <TextField
              label="Enter Your Mail id"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
                width: "80%",
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Stack direction="column" spacing={1}>
            <Typography>Mobile Number</Typography>
            <TextField
              label="Enter Your Mobile Number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
                width: "80%",
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack direction="column" spacing={1}>
            <Typography>Feedback</Typography>
            <TextField
              label="Write Your Feedback"
              multiline
              rows={3}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#B6B6B6",
                },
                "& .MuiInputLabel-root": {
                  color: "#B6B6B6",
                },
                background: "#FFFFFF",
                borderRadius: "7px",
              }}
            />
          </Stack>
        </Grid>

        <Grid item xs={12} align="right">
          <Button
            variant="contained"
            sx={{
              padding: "14px, 40px, 14px, 40px",
              backgroundColor: "#5CC8A1",
              ":hover": {
                bgcolor: "#5CC8A1",
              },
            }}
          >
            <Typography variant="subtitle2">Submit Feedback</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeedbackForm;
