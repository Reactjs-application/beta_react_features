import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../../api";

export default function Albums() {
  const [SculptureList, setSculptureList] = useState([]);

  useEffect(() => {
    async function LoadData() {
      try {
        const response = await axios.get(api.entries);

        if (response.status === 200) {
          setSculptureList(response.data.entries);
        }
      } catch (error) {
        setSculptureList([]);
      }
    }
    LoadData();
    return () => {
      setSculptureList([]);
    };
  }, []);

  return (
    <ul>
      {SculptureList.map((artist, ind) => {
        return (
          <li key={ind}>
            <p>{artist.Description}</p>
          </li>
        );
      })}
    </ul>
  );
}
