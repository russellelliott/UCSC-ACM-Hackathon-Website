export function ArrowButton(props: {
  link: string;
  text: string;
}) {
  return (
    <a className="group" href={props.link} target="_blank" rel="noreferrer">
      {props.text} <span className="transition-all group-hover:pl-2">→</span>
    </a>
  );
}
