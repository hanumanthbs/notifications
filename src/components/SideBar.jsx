import {
  Box,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import pic from "../assets/pic.png";
import view from "../assets/view.png";
import list from "../assets/list.png";

const sideLayout = {
  background: "#EBF2F7",
  boxShadow:
    "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
  borderRadius: "0px 32px 32px 32px",
  padding: { md: 8, xs: 2 },
  height: { md: "771px", xs: "450px" },
};

function SideBar({ toggleValue, handleToggle, isFeedback, setIsFeedback }) {
  return (
    <Box sx={sideLayout}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            style={{
              padding: "16px",
              background: "#FFFFFF",
              boxShadow:
                "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
              borderRadius: "8px",
            }}
          >
            <Stack direction="row" spacing={3} alignItems="center">
              <img
                src={pic}
                alt="Pic"
                style={{ width: "50px", height: "50px" }}
              />
              <Box>
                <Typography
                  variant="subtitle2"
                  component="div"
                  style={{ fontWeight: 700, fontSize: "20px" }}
                >
                  Hi Reader,
                </Typography>
                <Typography variant="body1">Here’s your News!</Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} align="center">
          <Paper
            sx={{
              padding: "16px",
              background: "#FFFFFF",
              boxShadow:
                "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
              borderRadius: "8px",
            }}
          >
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: "33px",
                    color: "#212121",
                  }}
                >
                  View Toggle
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <ToggleButtonGroup
                  value={toggleValue}
                  exclusive
                  onChange={handleToggle}
                  sx={{
                    width: "'100%",
                    height: "78px",
                    background: "#EBF2F7",
                    boxShadow:
                      "inset 0px 8px 28px -6px rgba(24, 39, 75, 0.12), inset 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
                    borderRadius: "8px",
                  }}
                >
                  <ToggleButton
                    value="view"
                    sx={{
                      width: "50%",
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor:
                          toggleValue === "view" ? "#A3FFD3" : "transparent",
                      },
                    }}
                  >
                    <img src={view} />
                  </ToggleButton>
                  <ToggleButton
                    value="list"
                    sx={{
                      width: "50%",
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor:
                          toggleValue === "list" ? "#A3FFD3" : "transparent",
                      },
                    }}
                  >
                    <img src={list} />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} align="center">
          <Paper
            sx={{
              padding: "16px",
              background: "#FFFFFF",
              boxShadow:
                "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
              borderRadius: "8px",
            }}
          >
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: "33px",
                    color: "#212121",
                  }}
                >
                  Have a Feedback?
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Paper
                  sx={{
                    background: isFeedback ? "#FF9090" : "#A3FFD3",
                    boxShadow:
                      "inset 0px 8px 28px -6px rgba(24, 39, 75, 0.12), inset 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
                    borderRadius: "8px",
                    padding: 1,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    onClick={() => setIsFeedback(!isFeedback)}
                    sx={{
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "33px",
                      color: "#212121",
                      cursor: "pointer",
                    }}
                  >
                    We’re Listening!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SideBar;
