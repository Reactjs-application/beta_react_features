import { PackingItems } from "../../assets";

export default function PackingList() {
  return (
    <section>
      <ul>
        {PackingItems.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
}

const Item = ({ name, isPacked }) => {
  if (isPacked) {
    return <li>{name} ✔</li>;
  } else {
    return <li>{name}</li>;
  }
};
