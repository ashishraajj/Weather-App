import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({info}){
    const IMAGE_URL="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://media.istockphoto.com/id/1549063747/photo/hot-weather-thermometer-in-hand-in-front-of-street-with-trees-and-palms-during-heatwave-high.jpg?s=1024x1024&w=is&k=20&c=Jh6R6kkD42mipjcAmZECgFeYBgEv9_GInguS-9etOfQ=";
    const COLD_URL="https://media.istockphoto.com/id/1361158687/photo/houses-in-cold-chilly-and-frosty-winter-climate-snowy-walkway-city-street-covered-with-snow.jpg?s=1024x1024&w=is&k=20&c=848FRNeeqHnRYID5j3gTT_-FJ7qvizZMjbbIKZr_3JQ=";
    const RAIN_URL="https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0=";

 

    return(
        <div>
          

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
       
        image={info.humidity>80?RAIN_URL: info.temp>50? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80?<ThunderstormIcon/>: info.temp>50? <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temprature={info.temp}&deg;C</div>
      <div>Min. Tempreature={info.tempMin}&deg;C</div>
      <div>Max. Temprature={info.tempMax}&deg;C</div>
      <div>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}</div>
        </Typography>
      </CardContent>



    </Card>
        </div>
    );
}