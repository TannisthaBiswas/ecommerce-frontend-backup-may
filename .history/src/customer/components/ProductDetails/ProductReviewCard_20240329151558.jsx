import React from "react";
import { Avatar } from "@mui/material";
import { Rating, Box,  Grid } from "@mui/material";
//Typography,

const ProductReviewCard = ({item}) => {
  const [value, setValue] = React.useState(4.5);
  return (
    <div className="">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
             >
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div className="">
              <p className="font-semibold text-lg">David</p>
              <p className="opacity-70">April 23, 2024</p>
            </div>
            <div>
            

              <Rating
                value={4.5}
                name="half-rating"
                defaultValue={2.5}
                precision={0.5}
              />
             
            </div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis numquam placeat suscipit autem beatae odit consequatur cum corporis minima!</p>
          </div>
        </Grid>
      </Grid>
      <div className="col-span-1 flex"></div>
    </div>
  );
};

export default ProductReviewCard;
