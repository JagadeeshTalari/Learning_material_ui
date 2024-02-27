import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <h1>MuiTypography</h1>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>
      {/* body1 is default value */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        repellendus autem ullam ea eius rerum possimus inventore culpa
        voluptatem excepturi, voluptatum numquam dolor nisi. Veritatis
        aspernatur consequatur magnam reiciendis veniam.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fugit ea
        non nesciunt natus quos dolor magnam aspernatur, molestiae, consectetur
        dolorum, placeat dolore optio nam cumque perferendis ipsa dolorem
        ratione!
      </Typography>
    </div>
  );
};

export default MuiTypography;
