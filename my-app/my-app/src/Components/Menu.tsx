import * as React from 'react';
import { Button } from '@mui/material';
// import {Grid} from '@mui/material';


export default function Menu(): React.JSX.Element{
    const handleClick=(event: React.MouseEvent<HTMLButtonElement>)=>{
    };

    return(
        <div className="menu">
            {/* <Grid> md={1}</Grid>
            <Grid xs={6} md={8}> */}
            <Button onClick={handleClick}>
                Home
            </Button>
        
            <Button onClick={handleClick}>
                New
            </Button>
            {/* </Grid> */}

        </div>
    );
}