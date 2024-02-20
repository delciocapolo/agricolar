import ProgressTrackerPoint from "./components/main-components/ProgressTrackerPoint/ProgressTrackerPoint";
import { IProgressTrackerPoint } from "./components/main-components/ProgressTrackerPoint/interfaces/interfaces";

const App = () => {
  const points: IProgressTrackerPoint[] = [
    {
      statusPoint: 'mid-point',
      frame: <h1>Hello</h1>
    },
    {
      statusPoint: 'initial-point',
      frame: <h1>World</h1>
    },
    {
      statusPoint: 'initial-point',
      frame: <h1>Delcio</h1>
    },
  ]
  return (
    <main className="main">
      <div className="aux d-flex">
        <ProgressTrackerPoint TRACKER={points} />
      </div>
    </main>
  );
}

export default App;
