export default function ProjectCard(props) {
  const { cards } = props;

  return (
    <div>
      <div>projects</div>
      {cards.map((project) => {
        return <div key={project}>{project}</div>;
      })}
    </div>
  );
}
