import EvenCard from "./EvenCard";
import OddCard from "./OddCard";

/* eslint-disable react/prop-types */
export default function ProjectCard(props) {
  const { card } = props;
  return <>{card.isOdd ? <OddCard card={card} /> : <EvenCard card={card} />}</>;
}
