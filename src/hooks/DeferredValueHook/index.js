import React, {
  useState,
  useDeferredValue,
  useEffect,
  useTransition,
  memo,
} from "react";

const ArrayItems = [...Array(20000).keys()];

export default function DeferredValueHook() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, starTransition] = useTransition();
  const deferQuery = useDeferredValue(query);
  const isStale = query !== deferQuery;

  useEffect(() => {
    starTransition(() => {
      const Result = ArrayItems.filter((item) => {
        return item.toString().includes(deferQuery);
      });
      setList(Result);
    });

    return () => setList([]);
  }, [deferQuery]);

  return (
    <div>
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <input
          type="text"
          value={query}
          placeholder="Enter Number"
          onChange={(e) => setQuery(e.target.value)}
        />
        <p>Searching for: {deferQuery || "All"}</p>
        {isPending && <p>Loading...</p>}
      </div>

      <Product query={deferQuery} list={list} />
    </div>
  );
}

const Product = memo(function Product({ list }) {
  return (
    <div>
      <ul>
        {list?.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    </div>
  );
});
