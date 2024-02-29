// import React from "react";


// function IndexPage() {
//     return (
//     // <div className="wrapper">
//     //   <h1>Marine Mammals</h1>
//     <div>
//          <p>Hello</p>
         
//     </div>
//     )
//   };

// export default IndexPage;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CardActionArea,Button} from '@mui/material';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
	src:"https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.jpg",
  display: 'block'

});


export default function ActionAreaCard(props) {
  console.log(props);
  let title=props.title;
  let text=props.text;
  let img = props.img;

  return (
    <Card sx={{mb: 4}}>
      <Grid container>
        <Grid item md={1}></Grid>
        <Grid item xs={6} md={8}>
          <CardContent>
            {/*<Grid container-spacing={2}>*/}
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
              {/* <Grid item xs={2} md={4}>
                <Img alt="vlog-picture" src="C:\Users\Admin\Desktop\Blog\vlog\src\Components\snimka.avif"/>
              </Grid> */}
        
            <div>
              {text}
            </div>

        {/*</Grid>*/}

          </CardContent>
        </Grid>

        <Grid item xs={6} md={2}>
          <CardActionArea>
                <Img alt="vlog-picture" width={150} height={150} src={img}/>
                <Button size="small">Learn More</Button>
          </CardActionArea>
        </Grid>

      </Grid>
    </Card>
  );
}
