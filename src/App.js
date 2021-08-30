import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "40em",
    border: "2px solid gray !important"
  },
  column: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray"
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowItem: {
    borderRight: "2px solid gray",
  },
  item: {
    padding: "1em",
    width: "9em",
    textAlign: "center",
    borderBottom: "2px solid gray",
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "15em",
  },
  imageItem: {
    width: "100%",
  }
}))

function App() {
  const [value, setValue] = useState("pikachu");
  const [data, setData] = useState([]);
  const classes = useStyles()

  const fetchData = async() => {
    const toArray = [];
    await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`).then(
      res => res.json())
      .then(result => {
        toArray.push(result)
        console.log(result)
        setData(toArray)
        console.log(`BUY ${result.data}`)
      })
    }
      console.log(data)

  // useEffect(() => {
  //   fetchData();
  // }, [])

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchData()
  }

  return (
    <Box className={classes.root}>
      <h1 style={{color: "green", margin: "0", marginTop: "2em"}}>Enter a Pokemon Type</h1>
      <form onSubmit={handleSubmit}>
        <h2>
          <input style={{height: "2.5em"}} value={value} onChange={handleChange}/>
          <button style={{height: "2em", fontSize: "0.8em", marginLeft: "0.5em"}} >Search</button>
        </h2>
      </form>
      {data.map((d, i) => (
      <Paper className={`${classes.row} ${classes.paper}`} variant="outlined">
        <Box  className={`${classes.image}`}>
          <img  className={`${classes.imageItem}`} src={d.sprites["front_shiny"]}/>
        </Box>
        <Box className={`${classes.column}`} variant="outlined">
          <Box className={`${classes.row}`}>
            <Typography className={`${classes.rowItem} ${classes.item}`} variant="h6">Type</Typography>
            <Typography fontWeight="700" className={`${classes.item}`} variant="h7">{d.types[0].type.name}</Typography>
          </Box>
          <Box className={`${classes.row}`}>
            <Typography className={`${classes.rowItem} ${classes.item}`} variant="h6">Weight</Typography>
            <Typography fontWeight="700" className={`${classes.item}`} variant="h7">{`${Math.round(d.weight/4.5)} pounds`}</Typography>

          </Box>
          <Box className={`${classes.row}`}>
            <Typography className={`${classes.rowItem} ${classes.item}`} variant="h6">Height</Typography>
            <Typography fontWeight="700" className={`${classes.item}`} variant="h7">{`${Math.round(d.height/3.1)} ft`}</Typography>
          </Box>
          <Box className={`${classes.row}`}>
            <Typography className={`${classes.rowItem} ${classes.item}`} variant="h6">Number of Battles</Typography>
            <Typography 
              fontWeight="700" 
              className={`${classes.item}`} 
              variant="h7">{d.game_indices.length}</Typography>
          </Box>
        </Box>
      </Paper>
      ))}
    </Box>
  );
}


export default App;
