class CollisionBlock {
  constructor({ position, height = 16 }) {
    this.position = position
    this.width = 16
    this.height = height
  }

  draw() {
    // Blocurile sunt complet invizibile - nu se desenează nimic
    // Chiar și în modul debug
  }

  update() {
    this.draw()
  }
}
