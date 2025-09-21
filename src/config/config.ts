import Phaser from 'phaser';
import { PreloaderScene } from '../scenes/PreloaderScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1289,
  height: 600,
  scene: [PreloaderScene],
};