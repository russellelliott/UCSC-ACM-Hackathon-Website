export function PrizeTracks() {
  return (
    <div
      id="prize-tracks"
      className="w-full max-w-screen-lg flex flex-col items-center gap-4"
    >
      <h1 className="text-2xl text-center">Prize Tracks</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="max-w-sm border p-4 rounded hover:scale-105 transition">
          <h2>Newcomer Award</h2>
          <p className="text-gray-600">
            Prize for first-time hackers
          </p>
        </div>
        <div className="max-w-sm border p-4 rounded hover:scale-105 transition">
          <h2>Distinction Award</h2>
          <p className="text-gray-600">
            Prize for most innovative, useful solution
          </p>
        </div>
        <div className="max-w-sm border p-4 rounded hover:scale-105 transition">
          <h2>Best Community Solution</h2>
          <p className="text-gray-600">
            Prize for best project developed through Community Care Track
          </p>
        </div>
        <div className="max-w-sm border p-4 rounded hover:scale-105 transition">
          <h2>Best Global Impact Solution</h2>
          <p className="text-gray-600">
            Prize for best project developed through World Vision Track
          </p>
        </div>
      </div>
    </div>
  );
}
