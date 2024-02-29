import React from 'react';
import { Grid} from '@mui/material';

import ActionAreaCard from '../Components/Blog_Entry.tsx';
import Menu from '../Components/Menu.tsx';

const blogEntries=[
  {title: "Lizard", text:"Something.Sometimes.One day", img: "logo.svg"},
{title: "Gecko", text: "This is gecko text"}
]

export default function IndexPage() {
  let actionCard=[];
  //actionCard.push(<Menu/>);
  blogEntries.forEach((item)=>{
    console.log(item);
    actionCard.push(<ActionAreaCard title={item.title} text={item.text} img={item.img}/>);
  })
  return (
    <>
    <Menu/>
      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item xs={12} md={8}>
         {actionCard}


        {/* {actionCard}
    {actionCard} */}
      </Grid>
    </Grid>
    </>
    //<ActionAreaCard/>
   
  );
}
