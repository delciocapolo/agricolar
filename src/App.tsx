import ProgressTrackerPoint, { IProgressTrackerPoint } from "./components/main-components/ProgressTrackerPoint/ProgressTrackerPoint";

const App = () => {
  const tracker: Array<IProgressTrackerPoint> = [
    {
      statusPoint: 'initial-point'
    },
    {
      statusPoint: 'initial-point'
    },
    {
      statusPoint: 'initial-point'
    },
    {
      statusPoint: 'initial-point'
    },
    {
      statusPoint: 'initial-point'
    },
    {
      statusPoint: 'initial-point'
    },
  ]
  return (
    <main className="main">
      <div className="aux d-flex">
        <ProgressTrackerPoint tracker={tracker} />
      </div>
    </main>
  );
}

export default App;
