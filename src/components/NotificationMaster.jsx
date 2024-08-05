import { useState } from "react";
import { Box, Grid } from "@mui/material";
import SideBar from "./SideBar";
import NotificationContent from "./NotificationContent";
import FeedbackForm from "./FeedbackForm";

const layout = {
  margin: 4,
  background: "#EBF2F7",
  boxShadow:
    "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
  borderRadius: "32px",
  height: { md: "900px", xs: "auto" },
};

function NotificationMaster() {
  const [toggleValue, setToogleValue] = useState("view");
  const [isFeedback, setIsFeedback] = useState(false);

  const handleToggle = (event, newAlignment) => {
    setToogleValue(newAlignment);
  };

  return (
    <Box sx={layout}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <SideBar
            toggleValue={toggleValue}
            handleToggle={handleToggle}
            isFeedback={isFeedback}
            setIsFeedback={setIsFeedback}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          {isFeedback ? (
            <FeedbackForm />
          ) : (
            <NotificationContent toggleValue={toggleValue} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default NotificationMaster;
