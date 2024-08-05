import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

function NotificationContent({ toggleValue }) {
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const rowsPerPage = 6;

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    updateData();
  }, [page, rowsPerPage]);

  const getData = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=43cfc6d526f546518d4ffbb70d2e55ec"
      )
      .then((res) => {
        setData(res.data.articles);
        setPage(1);
        setTotalPages(Math.ceil(res.data.totalResults / rowsPerPage));
      })
      .catch((err) => console.error(err));
  };

  const updateData = (remove, id) => {
    const lastIndex = page * rowsPerPage;
    const firstIndex = lastIndex - rowsPerPage;
    const filterData = remove ? data.filter((obj, i) => i !== id) : data;
    const currentPage = filterData.slice(firstIndex, lastIndex);
    setData(filterData);
    setPageData(currentPage);
    setTotalPages(Math.ceil(filterData.length / rowsPerPage));
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ padding: { md: 4, xs: 0 } }}>
      {toggleValue === "view" ? (
        <>
          <Grid container>
            {pageData?.map((obj, i) => {
              return (
                <Grid item xs={12} md={4} key={i}>
                  <Card
                    key={i}
                    elevation={3}
                    sx={{
                      background: "#FFFFFF",
                      boxShadow:
                        "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
                      borderRadius: "8px",
                      margin: "20px",
                      maxHeight: 400,
                      overflow: "auto",
                    }}
                  >
                    <CardHeader
                      action={
                        <IconButton
                          onClick={() => updateData(true, i)}
                          sx={{ padding: 0 }}
                        >
                          <CloseIcon sx={{ color: "#FF9090", fontSize: 25 }} />
                        </IconButton>
                      }
                    />
                    <CardContent>
                      <Grid container rowSpacing={1}>
                        <Grid item xs={12}>
                          <Typography
                            variant="subtitle2"
                            component="div"
                            style={{
                              fontWeight: 700,
                              fontSize: "15px",
                              textAlign: "justify",
                            }}
                          >
                            {obj.title}
                          </Typography>
                        </Grid>

                        <Grid item xs={12}>
                          <Typography
                            component="div"
                            style={{ fontSize: "15px", textAlign: "justify" }}
                          >
                            {obj.description}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="body2"
                            sx={{ color: "#B9B9B9", fontSize: 12 }}
                          >
                            {obj.publishedAt
                              ? moment(obj.publishedAt).format(
                                  "dddd, DD MMM YYYY HH:mm [GMT]"
                                )
                              : obj.publishedAt}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <img
                            src={obj.urlToImage}
                            alt="pic"
                            style={{ width: "100%", height: "150px" }}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        pageData?.map((obj, i) => {
          return (
            <Paper
              key={i}
              elevation={3}
              style={{
                padding: "16px",
                background: "#FFFFFF",
                boxShadow:
                  "0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)",
                borderRadius: "8px",
                margin: "20px",
              }}
            >
              <Grid container alignItems="center">
                <Grid item xs={12} md={1}>
                  <Avatar
                    src={obj.urlToImage}
                    sx={{ width: 80, height: 80, backgroundColor: "#FFFFFF" }}
                  />
                </Grid>

                <Grid item xs={12} md={10}>
                  <Stack direction="row">
                    <Box>
                      <Typography
                        variant="subtitle2"
                        component="div"
                        style={{ fontWeight: 700, fontSize: "15px" }}
                      >
                        {obj.title}
                      </Typography>
                      <Typography
                        style={{ fontSize: "15px", textAlign: "justify" }}
                      >
                        {obj.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#B9B9B9", fontSize: 12 }}
                      >
                        {obj.publishedAt
                          ? moment(obj.publishedAt).format(
                              "dddd, DD MMM YYYY HH:mm [GMT]"
                            )
                          : obj.publishedAt}
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={1} align="center" alignItems="center">
                  <Avatar
                    component={Paper}
                    elevation={1}
                    onClick={() => updateData(true, i)}
                    sx={{
                      width: 34,
                      height: 34,
                      backgroundColor: "#FFFFFF",
                      padding: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <CloseIcon sx={{ color: "#FF9090", fontSize: 40 }} />
                  </Avatar>
                </Grid>
              </Grid>
            </Paper>
          );
        })
      )}

      {pageData.length > 0 ? (
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default NotificationContent;
