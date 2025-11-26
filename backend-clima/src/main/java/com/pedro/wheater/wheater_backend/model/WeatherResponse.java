package com.pedro.wheater.wheater_backend.model;

public class WeatherResponse {
    private Main main;
    private String name;
    private Wind wind;  

    public Main getMain() {
        return main;
    }

    public String getName() {
        return name;
    }

    public Wind getWind() {
        return wind;
    }

    public static class Main {
        private double temp;
        private double feels_like;
        private double temp_min;     
        private double temp_max;     
        private int humidity;        

        public double getTemp() {
            return temp;
        }

        public double getFeels_like() {
            return feels_like;
        }

        public double getTemp_min() {
            return temp_min;
        }

        public double getTemp_max() {
            return temp_max;
        }

        public int getHumidity() {
            return humidity;
        }
    }

    public static class Wind {
        private double speed;

        public double getSpeed() {
            return speed;
        }
    }
}
