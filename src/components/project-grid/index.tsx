import { Grid, Paper, Typography } from "@mui/material";

const ProjectGrid = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <Paper>
            <Typography>Hello World</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
