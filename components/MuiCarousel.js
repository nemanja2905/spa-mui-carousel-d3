import React from "react";
import Carousel from "react-material-ui-carousel";
import { Container, Box, Grid, Paper, Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const { item, handlePostSelected } = props;
  const { title, body, id, userid } = item;

  return (
    <Paper>
      <Grid
        container
        spacing={2}
        style={{
          height: "450px",
        }}
      >
        <Grid item xs={12} sm={3}>
          <Container
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              type="button"
              color="secondary"
              size="large"
              onClick={() => handlePostSelected(id)}
            >
              <Typography>Check it out!</Typography>
            </Button>
          </Container>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Container
            style={{
              // height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" my={2}>
              {title}
            </Typography>
            <Typography mx={2}>{body}</Typography>
          </Container>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default function MuiCarousel(props) {
  const {
    items = [
      {
        title: "Random Name #1",
        body: "Probably the most random thing you have ever seen!",
      },
      {
        title: "Random Name #2",
        body: "Hello World!",
      },
    ],
    handlePostSelected = () => {},
  } = props;

  console.log("MuiCarousel items=", items);

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} handlePostSelected={handlePostSelected} />
      ))}
    </Carousel>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
});
