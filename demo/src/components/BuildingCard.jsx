import {
    Grid,
    Avatar,
    Card,
    CardActions,
    CardHeader,
    Collapse,
    IconButton,
    Typography,
    Paper
  } from "@mui/material"
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import { useState } from "react";
  
function BuildingCard(props) {
    var name = props.name
    var info = props.info
    const [expand, setExpand] = useState();
    return (
      <>
        <Paper>
          <Card style={{ textAlign: "center" }}>
            {/* <CardHeader
              title={name}
            /> */}
            <CardActions>
              <Grid container justifyContent="center" alignItems="center">
              <Typography variant="button" display="table-cell" gutterBottom>
                {name}
                </Typography>
                <IconButton onClick={() => setExpand(!expand)} alignSelf="flex-end">
                  <ArrowDropDownIcon />
                </IconButton>
              </Grid>
            </CardActions>
            <Collapse in={expand}>
              <Typography>{info}</Typography>
            </Collapse>
          </Card>
        </Paper>
      </>
    );
  }

export default BuildingCard
  