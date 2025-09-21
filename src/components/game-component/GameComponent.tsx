import { useRef, useEffect, useState } from "react";
import Phaser from "phaser";
import styles from "./game-component.module.css";

type GameComponentProps = {
  config: Phaser.Types.Core.GameConfig;
};

export const GameComponent: React.FC<GameComponentProps> = ({ config }) => {
  const gameRef = useRef<HTMLDivElement>(null);
  const [, setGame] = useState<Phaser.Game | null>(null);

  useEffect(() => {
    const phaserGame = new Phaser.Game({
      ...config,
      parent: gameRef.current,
    });

    setGame(phaserGame);

    return () => {
      if (phaserGame) {
        phaserGame.destroy(true);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={gameRef} className={styles.main} />
    </div>
  );
};
