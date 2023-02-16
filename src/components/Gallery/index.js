import { Scientists } from "../../assets";
import "./gallery.css";
import { Button } from "../../layout/Button";

export default function Gallery() {
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <div className="gallery">
      <h3>Amazing scientists</h3>
      {Scientists.map((profile) => {
        return (
          <Profile key={profile.id} url={profile.url} name={profile.name} />
        );
      })}
      <Profile />
      <div className="viewMore">
        <Button
          className="primaryBtn"
          padding="1rem"
          size="1rem"
          weight="600"
          borderRadius="4px"
          onClick={handleClick}
        >
          View more
        </Button>
      </div>
    </div>
  );
}

export function Profile({ url, name }) {
  return <img src={url} alt={name} />;
}
