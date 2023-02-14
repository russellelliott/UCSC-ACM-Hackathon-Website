import { useEffect } from "react";

export function Background(props: {
  children: any;
}) {
  // TODO

  useEffect(() => {
    const canvas = document.getElementById("background") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    if (!ctx) throw `????`;

    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let circles: [number, number, number, number][] = [];

    const radius = 100;

    for (let i = 0; i < 10; i++) {
      const speed = Math.random() * 5 + 5;
      const angle = Math.random() * Math.PI;
      circles.push([
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        angle,
        speed,
      ]);
    }

    setInterval(() => {
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const circle of circles) {
        const radgrad = ctx.createRadialGradient(
          circle[0] - radius,
          circle[1] - radius,
          0,
          circle[0] + radius,
          circle[1] + radius,
          60,
        );
        radgrad.addColorStop(0, "rgba(255,0,0,1)");
        radgrad.addColorStop(0.8, "rgba(228,0,0,.9)");
        radgrad.addColorStop(1, "rgba(228,0,0,0)");

        ctx.fillStyle = radgrad;
        ctx.fillRect(
          circle[0] - radius,
          circle[1] - radius,
          radius * 2,
          radius * 2,
        );

        circle[0] += Math.cos(circle[2]) * circle[3];
        circle[1] += Math.sin(circle[2]) * circle[3];

        circle[2] += (Math.random() - 0.5) * 1;

        if (circle[0] < -radius) {
          circle[0] = canvas.width + radius;
        }

        if (circle[0] > canvas.width + radius) {
          circle[0] = -radius;
        }

        if (circle[1] < -radius) {
          circle[1] = canvas.height + radius;
        }

        if (circle[1] > canvas.height + radius) {
          circle[1] = -radius;
        }

        ctx.fill();
      }
    }, 1000 / 60);
  }, []);

  return (
    <div className="relative w-full flex justify-center text-white">
      <canvas className="absolute z-[-1]" id="background" />
      {props.children}
    </div>
  );
}
