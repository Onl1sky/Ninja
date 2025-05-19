class Coin {
  constructor({ position }) {
    this.position = position;
    this.width = 15;
    this.height = 15;
    this.collected = false;
    this.animationTimer = 0;
  }
  
  draw() {
    if (this.collected) return;
    
    // Animație de plutire
    this.animationTimer += 0.05;
    const floatOffset = Math.sin(this.animationTimer) * 3;
    
    // Desenăm un cerc auriu
    c.beginPath();
    c.arc(
      this.position.x + this.width/2,
      this.position.y + this.height/2 + floatOffset,
      this.width/2,
      0,
      Math.PI * 2
    );
    c.fillStyle = 'gold';
    c.fill();
    
    // Strălucire interioară
    c.beginPath();
    c.arc(
      this.position.x + this.width/2,
      this.position.y + this.height/2 + floatOffset,
      this.width/3,
      0,
      Math.PI * 2
    );
    c.fillStyle = 'rgba(255, 255, 200, 0.8)';
    c.fill();
    
    // Contur
    c.beginPath();
    c.arc(
      this.position.x + this.width/2,
      this.position.y + this.height/2 + floatOffset,
      this.width/2,
      0,
      Math.PI * 2
    );
    c.strokeStyle = 'rgba(150, 100, 0, 0.8)';
    c.lineWidth = 1;
    c.stroke();
  }
  
  update() {
    this.draw();
  }
  
  // Verifică coliziunea cu jucătorul
  checkCollision(player) {
    if (this.collected) return false;
    
    // Calculează poziția hitbox-ului jucătorului
    const playerHitbox = {
      x: player.position.x + 35,
      y: player.position.y + 26, 
      width: 14,
      height: 27
    };
    
    // Verifică coliziunea
    if (
      playerHitbox.x < this.position.x + this.width &&
      playerHitbox.x + playerHitbox.width > this.position.x &&
      playerHitbox.y < this.position.y + this.height &&
      playerHitbox.y + playerHitbox.height > this.position.y
    ) {
      this.collected = true;
      console.log('Coin collected!', this.position);
      return true;
    }
    
    return false;
  }
} 