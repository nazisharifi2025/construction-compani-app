 // استایل‌ها از اینجا میاد
 export default function WeatherRainSpinner() {
  return (
    <div className="spinner-container">
      <div className="sun-container">
        <div className="sun"></div>
        <div className="sun-glow"></div>
        <div className="sun-glow"></div>
      </div>

      <div className="rain-container">
        <div className="raindrop delay-0"></div>
        <div className="raindrop delay-1"></div>
        <div className="raindrop delay-2"></div>
        <div className="raindrop delay-3"></div>
      </div>
    </div>
  );
}
