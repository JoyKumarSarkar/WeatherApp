import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LightModeIcon from '@mui/icons-material/LightMode';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import FlareRoundedIcon from '@mui/icons-material/FlareRounded';
import OpacityRoundedIcon from '@mui/icons-material/OpacityRounded';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import "./InfoBox.css"



export default function InfoBox({ info }) {

    const Img_Url = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FybSUyMGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Hot_Url = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Rainy_Url = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const Cold_Url = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Snow_Url = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const Charm_Url = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoYXJtJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let styles = { backgroundColor: info.humidity > 80 ? "gray" : info.temp > 27 ? "rgb(241, 186, 85)" : info.temp > 18 ? "pink" : info.temp > 0 ? "rgb(173,216,230)" : "White" };

    return (
        <div className="infoBox">

            <div className="container">
                <Card sx={{ width: 700 }} style={styles}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={info.humidity > 80 ? Rainy_Url : info.temp > 27 ? Hot_Url : info.temp > 18 ? Charm_Url : info.temp > 0 ? Cold_Url : Snow_Url}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{ color: "blue", fontWeight: "bold" }}>
                            <div className="city">
                                {info.city}
                            </div>


                        </Typography>
                        <Typography variant="body2" color="text.secondary">

                            <div className="container1">
                                <div className="smallContainer1">
                                    <span className='scity'>{info.humidity > 80 ? <ThunderstormIcon style={{ fontSize: 90 }} /> : info.temp > 27 ? <WbSunnyIcon style={{ fontSize: 90 }} /> : info.temp > 18 ? <LightModeIcon style={{ fontSize: 90 }} /> : info.temp > 0 ? <AcUnitIcon style={{ fontSize: 90 }} /> : <AcUnitIcon style={{ fontSize: 90 }} />}</span>
                                </div>

                                <div className="smallContainer2">
                                    <div className="temperature">

                                        <p> {info.temp} °C</p>
                                    </div>

                                    <div className="weath">
                                        <p> {info.weather}</p>
                                    </div>
                                </div>

                                <div className="tempe">

                                    <p> <span className='sicon'>Feels:&nbsp;</span> {info.feelsLike}°</p>

                                </div>

                            </div>


                            <div className="container2">
                                <div className="min">
                                    <p>Min Temp</p>
                                    <FlareRoundedIcon style={{ fontSize: 40, color: 'yellow' }} />
                                    <p>{info.tempMin}°</p>
                                </div>

                                <div className="max">
                                    <p>Max Temp</p>
                                    <WbSunnyRoundedIcon style={{ fontSize: 40, color: 'yellow' }} />
                                    <p>{info.tempMax}°</p>
                                </div>

                                <div className="humi">
                                    <p>Humidity</p>
                                    <OpacityRoundedIcon style={{ fontSize: 40, color: 'white' }} />
                                    <p className='p1'>{info.humidity}%</p>
                                </div>

                                <div className="pres">
                                    <p>Pressure</p>
                                    <CompareArrowsIcon style={{ fontSize: 40, color: 'white' }} />
                                    <p className='p1'>{info.pressure}mb</p>

                                </div>

                                <div className="speed">
                                    <p>Wind speed</p>
                                    <AirRoundedIcon style={{ fontSize: 40, color: 'white' }} />
                                    <p>{info.windSpeed}m/h</p>
                                </div>
                            </div>

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}