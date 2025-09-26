document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('rainCanvas');
  const ctx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  const rainSettings = {
    count: 200,
    minSpeed: 5,
    maxSpeed: 15,
    minLength: 10,
    maxLength: 20,
    opacity: 0.6
  };
  
  const raindrops = [];
  
  for (let i = 0; i < rainSettings.count; i++) {
    raindrops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * (rainSettings.maxSpeed - rainSettings.minSpeed) + rainSettings.minSpeed,
      length: Math.random() * (rainSettings.maxLength - rainSettings.minLength) + rainSettings.minLength,
      opacity: Math.random() * rainSettings.opacity
    });
  }
  
  function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const isLightTheme = document.body.classList.contains('light');
    const rainColor = isLightTheme ? 'rgba(100, 149, 237, ' : 'rgba(174, 194, 224, ';
    
    raindrops.forEach(drop => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.length);
      ctx.strokeStyle = rainColor + drop.opacity + ')';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      drop.y += drop.speed;
      
      if (drop.y > canvas.height) {
        drop.y = 0 - drop.length;
        drop.x = Math.random() * canvas.width;
        drop.speed = Math.random() * (rainSettings.maxSpeed - rainSettings.minSpeed) + rainSettings.minSpeed;
      }
    });
    
    requestAnimationFrame(drawRain);
  }
  
  drawRain();
});