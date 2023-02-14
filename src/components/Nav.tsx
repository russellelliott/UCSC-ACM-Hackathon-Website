import Link from "next/link";

export function Nav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <div className="p-2 w-screen flex justify-center">
      <div className="w-full max-w-screen-lg flex items-center gap-4">
        <Link href="/">
          <img className="h-12" src="/images/acm.png" alt="logo" />
        </Link>

        <div className="flex gap-4 ml-auto">
          {/* <button onClick={() => scrollTo("theme")}>Theme</button> */}
        </div>
      </div>
    </div>
  );
}
