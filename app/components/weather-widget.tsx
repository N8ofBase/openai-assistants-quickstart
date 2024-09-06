import React from "react";
import styles from "./weather-widget.module.css";


const WeatherWidget = ({
  location = "---",
  temperature = "---",
  conditions = "Sunny",
  isEmpty = false,
}) => {
  const conditionClassMap = {
    Cloudy: styles.weatherBGCloudy,
    Sunny: styles.weatherBGSunny,
    Rainy: styles.weatherBGRainy,
    Snowy: styles.weatherBGSnowy,
    Windy: styles.weatherBGWindy,
  };

  if (isEmpty) {
    return (
      
      <div className={`${styles.weatherWidget} ${styles.weatherEmptyState}`}>
        <div className={styles.weatherWidgetData}>
        
        <div>        
      <a href="https://prismcortex.net" target="_blank" rel="noopener noreferrer">
        <img height={200} src="https://s3.amazonaws.com/prismcortex.net/logos/PCLogoSupportblk.png" alt="Prism Cortex Logo" />
      </a>
    </div>
    <br></br><h2>This is a friendly informational bot that can answer questions about<br></br> The Urantia Book</h2><br></br>
          <h3>Try Asking: What is a the true nature of God?</h3><br></br>
          <h3>Or: What happens after we die?</h3><br></br>
          <h3>Even: Give me a quote about love</h3>
        </div>
      </div>
    );
  }

  const weatherClass = `${styles.weatherWidget} ${
    conditionClassMap[conditions] || styles.weatherBGSunny
  }`;

  return (
    <div className={weatherClass}>
      <div className={styles.weatherWidgetData}>
        <p>{location}</p>
        <h2>{temperature !== "---" ? `${temperature}°F` : temperature}</h2>
        <p>{conditions}</p>
      </div>
    </div>
  );
};

export default WeatherWidget;
