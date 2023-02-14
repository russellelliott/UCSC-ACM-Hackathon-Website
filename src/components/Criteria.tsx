export function Criteria() {
  return (
    <div
      id="criteria"
      className="w-full max-w-screen-lg flex flex-col items-center gap-4"
    >
      <h1 className="text-2xl text-center">Criteria</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="max-w-sm border p-4 rounded hover:scale-105 transition">
          <h2>Community Care</h2>
          <p className="text-gray-600">
            In this track, hackers will focus on issues pertinent to UC Santa
            Cruz and the Santa Cruz Area.
          </p>
        </div>
        <div className="max-w-sm border p-4 rounded hover:scale-105 transition">
          <h2>World Vision</h2>
          <p className="text-gray-600">
            In this track, hackers will focus on global issues. Feel free to
            gain inspiration from:{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://www.un.org/en/global-issues"
            >
              https://www.un.org/en/global-issues
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
