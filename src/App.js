import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import './app.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

const App = () => {

    return (
        <Container style={{paddingTop: '30px'}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>

                    <Card sx={{ width: '100%' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://media.istockphoto.com/vectors/types-of-triangle-vector-id1012035252?k=20&m=1012035252&s=612x612&w=0&h=nToroZjG3Uj8BENq3AVj75jyRkCCh-yz3MkbOPYevtQ="
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Площадь треугольника
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Чтобы найти площадь, нужно вывести формулу: Площадь треугольника равна половине произведения основания на высоту, проведенную к этому основанию. Так как в прямоугольном треугольнике катеты перпендикулярны, то один катет — это высота, проведенная ко второму катету.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Рассчитать площадь</Button>
                        </CardActions>
                    </Card>

                </Grid>
                <Grid item xs={8}>
                
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;