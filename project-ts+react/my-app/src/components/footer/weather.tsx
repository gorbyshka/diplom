import {
    useState,
    useEffect,
    FC
} from 'react';

import { WeatherData } from '../../types/footerTypes/WeatherData';

import {
    WeatherContainer,
    WeatherHeader,
    WeatherMain,
    WeatherCity,
    WeatherStatus,
    WeatherIcon,
    WeatherTemp,
    Img
} from './footerStyle.style';

export const Weather: FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    useEffect(() => {
        async function loadWeather(): Promise<void> {
            const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Odessa&appid=74880e3eb01e3a60d85ae65d0348f32b';

            try {
                const response = await fetch(server);
                const data = await response.json();

                if (response.ok) {
                    setWeatherData(data);
                } else {
                    throw new Error(data.message);
                }

            } catch (error) {
                console.error(error);
                setWeatherData(null);
            }
        }

        loadWeather();
    }, []);

    return (
        <WeatherContainer>

            <WeatherHeader />

            <WeatherMain>

                {weatherData && (
                    <>
                        <WeatherCity>
                            {weatherData.name}
                        </WeatherCity>

                        <WeatherStatus>
                            {weatherData.weather[0].main}
                        </WeatherStatus>

                        <WeatherIcon>

                            <Img
                                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                                alt={weatherData.weather[0].main}
                            />

                        </WeatherIcon>

                        <WeatherTemp>
                            {Math.round(weatherData.main.temp)}
                        </WeatherTemp>
                    </>
                )}

            </WeatherMain>

        </WeatherContainer>
    );
};
