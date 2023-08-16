import moment from 'moment';
import Button from '@mui/material/Button';
export default async function NavbarWeather() {
    const ser = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=41.278689&lon=69.196221&appid=021c057b527020fa3da6fe6fddb068e0')
    const res = await ser.json()
    
    
    const tempMax = res.main.temp_max
    const realTemp = tempMax - 273.15
    const data_l = moment().format('dddd')
    const data_r = moment().format('LL')
    const truncateString = (string = '', maxLength = 50) =>
        string.length > maxLength
            ? `${string.substring(0, maxLength)}`
            : string
    const cityName = truncateString(res.name, 8)
    const data = truncateString(data_l, 3)
    const realTemps = Math.round(realTemp)
    return (
        <>
            <nav className='navbar'>
                <div className='container'>
                    <div className="navbar-content">
                        <Button variant="contained" className='navbar-content-btn'><span>refresh news</span></Button>
                        <div className="navbar-news-bottom">
                            <div className='navbar-news-bottom-group'>
                                <span>{data}&nbsp;,&nbsp;{data_r}</span>
                            </div>
                            <div className='navbar-news-bottom-group'>
                                <span>{realTemps}°C,{cityName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
