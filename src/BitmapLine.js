import Phaser from 'phaser'

const BASE = '__BASE';
const MISSING = '__MISSING';

export default class BitmapLine extends Phaser.GameObjects.RenderTexture {
  /**
   * @param {Phaser.Scene} scene the parent scene for this BitmapLine
   */
  constructor(scene, startPos, endPos, lineImageKey) {
    const texWidth = Math.round(Phaser.Math.Distance.Between(startPos.x, startPos.y, endPos.x, endPos.y));
    const texHeight = 8;

    super(scene, startPos.x, startPos.y, texWidth, texHeight);

    this.redraw = this.redraw.bind(this);

    this.sourceTex = scene.sys.textures.get(lineImageKey)
    if (!this.sourceTex || this.sourceTex.key === MISSING) {
      throw new Error(`Expected source image ${lineImageKey} not found.`)
    }

    this.start = startPos;
    this.end = endPos;
    this.setSize(this.width, this.sourceTex.frames[BASE].height);

    this._initalized = true;

    this.redraw();
  }

  get start() { return this._start }
  set start(start) {
    if (this._start !== start) {
      if (this._g) {
        this._g.clear()
      }

      this._start = start
      this.redraw()
    }
  }

  get end() { return this._end }
  set end (end){
    if (this._end !== end) {
      if (this._g) {
        this._g.clear()
      }

      this._end = end
      this.redraw()
    }
  }

  setGlobalTint(tint) {
    super.setGlobalTint(tint)
    this.redraw()
  }

  setGlobalAlpha(alpha) {
    super.setGlobalAlpha(alpha)
    this.redraw()
  }

  redraw() {
    if (!this._initalized) {
      return
    }

    this.clear();

    this.width = Math.round(Phaser.Math.Distance.Between(this.start.x, this.start.y, this.end.x, this.end.y));

    let xPos = 0;
    const texWidth = this.sourceTex.frames[BASE].width;
    while (xPos < this.width) {
      this.draw(this.sourceTex.key, xPos, 0);
      xPos += texWidth;
    }

    this.rotation = Math.atan2(this.end.y - this.start.y, this.end.x - this.start.y);
  }

  enableDebugDraw(enabled = true) {
    if (this._g) {
      this._g.clear()
    }

    if (enabled) {
      this._g = this.scene.add.graphics(this.x, this.y)
    } else {
      this._g = null
    }
    this.redraw()
  }
}