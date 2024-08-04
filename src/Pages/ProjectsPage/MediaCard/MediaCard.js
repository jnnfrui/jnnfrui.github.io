import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Collapse } from "@mui/material";
import ellipsis from "text-ellipsis";
import "./MediaCard.css";

export default function MediaCard(props) {
  const data = props.data;
  const [expanded, setExpanded] = React.useState([false, false, false, false]);

  const handleExpandClick = (e, index) => {
    console.log("Changing view");
    console.log(expanded);
    let new_expanded = [...expanded];
    new_expanded[index] = !new_expanded[index];
    setExpanded(new_expanded);
  };
  return (
    <div className="card-wrapper">
      <Card sx={{ width: 300, height: 500 }}>
        <CardMedia sx={{ height: 200 }} image={data.Image} title={data.Name} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {data.Name}
          </Typography>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            sx={{ color: "#F7931E" }}
          >
            {data.Date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {ellipsis(data.Description, 170)}
          </Typography>
          <div className="languages-box">
            {data.Language.map((language) => {
              return <Chip label={language} variant="outlined" size="small" />;
            })}
          </div>
        </CardContent>
        <CardActions>
          <Button>Github Link</Button>
        </CardActions>
      </Card>
    </div>
  );
}
