const Tracks: [string, string, number, string][] = [
  [
    "",
    "Community Care",
    0,
    "In this track, hackers will focus on issues pertinent to UC Santa Cruz and the Santa Cruz Area. ",
  ],
  [
    "https://www.un.org/en/global-issues",
    "World Vision",
    2,
    "In this track, hackers will focus on global issues. Feel free to gain inspiration from:",
  ],
];

export function Info() {
  return (
    <div id="theme" className="w-full max-w-screen-md">
      <div className="max-w-screen-md flex flex-col gap-4">
        <h2 className="text-4xl">Theme: Unity</h2>
        <p className="text-gray-500">
          The theme for ACMHacks 2023 is unity. Unity not only represents
          harmony but also embraces diversity in bringing together various
          aspects into a cohesive piece.
        </p>
        <p className="text-gray-500">
          Thus, we challenge hackers to incorporate different aspects of
          computer science and different technologies in their projects.
        </p>
        <p className="text-gray-500">
          We encourage hackers to look beyond the hackathon for solutions that
          can be implemented in the real world.
        </p>
        <p className="text-gray-500">
          As the Association for Computer Machinery, ACM delves into different
          fields from Artificial Intelligence to Web Development.
        </p>
        <p className="text-gray-500">
          Our hackathon will host workshops on these topics and more, thus no
          experience is required!
        </p>
      </div>
    </div>
  );
}
