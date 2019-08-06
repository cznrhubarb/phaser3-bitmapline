import Phaser from 'phaser'
import BitmapLine from './BitmapLine'

export default class Plugin extends Phaser.Plugins.BasePlugin {
  constructor(mgr) {
    super(mgr)
    mgr.registerGameObject('bitmapLine', this.addBitmapLine, this.makeBitmapLine)
  }

  addBitmapLine(...args) {
    const line = mkBmpLine(this.scene, args)
    this.displayList.add(line)
    return line
  }

  makeBitmapLine(...args) {
    return mkBmpLine(this.scene, args)
  }
}

const mkBmpLine = (scene, args) => {
  if (args.length === 3) {
    return new BitmapLine(scene, ...args)
  } else {
    throw new Error(
      "Wrong number of arguments used for a Bitmap Line."
    )
  }
}

const DefaultCfg = {
  key: 'BitmapLine',
  plugin: Plugin,
  start: true,
}

Plugin.DefaultCfg = DefaultCfg