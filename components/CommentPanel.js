import { InfoOutlined, PersonPinCircleOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
// import { PersonIcon } from "@mui/icons-material";
import {
  Box,
  View,
  Typography,
  Container,
  CardContent,
  Grid,
  Card,
  CardHeader,
} from "@mui/material";

export default function CommentPanel(props) {
  const { cards = [] } = props;
  console.log("PostPanel cards=", cards);
  /**  {
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  }, */
  return (
    <Grid container spacing={2} justifyContent="space-between">
      {cards.map((card, idx) => (
        <Grid item xs={12} sm={6} md={3} style={{}}>
          <Card>
            <CardHeader
              style={{
                height: "150px",
              }}
              title={
                <Typography variant="h5">{`Post ${card.name}`}</Typography>
              }
              subheader="Legend"
              avatar={
                <Avatar>
                  {" "}
                  <PersonPinCircleOutlined />
                </Avatar>
              }
            />

            <CardContent style={{ minHeight: "350px" }}>
              <Box>
                <Typography>{card.body}</Typography>
              </Box>
              <Box alignSelf="flex-end" my={1}>
                <Typography>From: {card.email}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
