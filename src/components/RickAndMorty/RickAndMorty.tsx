import {useEffect, useState} from "react";
import * as React from "react";
import './RickAndMorty.css'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

interface Character {
  id: number;
  name: string;
  gender: string;
  location: {
    name: string;
  };
  image: string;
}

interface ApiResponse {
  results: Character[];
}

export default function RickAndMorty() {
  const [result, setResult] = useState<ApiResponse | null>(null)
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const result = await res.json()
      setResult(result)
      console.log(result)
    }
    fetchData()
    console.log(result)

  }, []);


  return (
     <div className="card-list">
       {result && result.results.map((item, index) => (
          <Card
             key={index}
             className="card-item"
          >
            <CardActionArea
               sx={{
                 height: '100%',
                 display: 'flex',
                 flexDirection: 'column'
               }}
            >
              <CardContent>
                <Typography variant='h6'>{`Name: ${item.name}`}</Typography>
                <Typography>{`Gender: ${item.gender}`}</Typography>
                <Typography>{`Location Name: ${item.location.name}`}</Typography>
                <Typography>{count}</Typography>
              </CardContent>
              <CardMedia
                 image={item.image}
                 component="img"
                 height="140"
                 sx={{
                   objectFit: "cover",
                   width: "100%",
                   marginTop: 'auto' // прижимает к низу
                 }}
              />
            </CardActionArea>
              <CardActions>
                <Button
                   onClick={() => setCount(count + 1)}
                   size="small"
                   color="success"
                   variant="contained"
                >
                  Счетчик
                </Button>
              </CardActions>
          </Card>
       ))}
     </div>
  )
}