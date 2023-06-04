export interface WeatherData {
    name: string;
    weather: {
        main: string;
        icon: string;
    }[];
    main: {
        temp: number;
    };
    message?: string;
}
