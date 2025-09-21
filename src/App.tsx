import { GameComponent } from "./components/game-component/index";
import { config } from "./config/config";

function App() {
  return (
    <main>
      <GameComponent config={config} />
    </main>
  );
}

export default App;
