class Icon {
  constructor() {
    this.canvas = document.getElementById("icon");
    this.ctx = this.canvas.getContext("2d");
    this.width = 400;
    this.height = 300;
    this.src = "/img/icons.png";
  }

  drawIcon(id) {
    // array of 44 possible weather icons
    const iconId = [
      1, 1, 8, 8, 8, 8, 6, 6, 6, 6, 9, 3, 12, 5, 5, 5, 10, 3, 7, 12, 12, 15, 15,
      13, 14, 4, 15, 15, 14, 1, 13, 2, 17, 17, 17, 17, 17, 17, 16, 16, 18, 18,
      19, 19, 20,
    ][id];

    const icon = new Image();
    icon.src = this.src;

    this.drawCanvas();

    // coordinates of row/column in the sprite
    const x = iconId % 5 > 0 ? (iconId % 5) - 1 : 4;
    const y =
      id % 5 !== 0 ? Math.floor(iconId / 5) : Math.floor(iconId / 5) - 1;

    // draw icon from sprite
    this.ctx.drawImage(
      icon,
      x * this.width,
      y * this.height,
      this.width,
      this.height,
      0,
      0,
      this.width,
      this.height
    );
  }

  drawCanvas() {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
}
