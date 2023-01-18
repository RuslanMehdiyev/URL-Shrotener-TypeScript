import { SyntheticEvent, useState } from "react";
import { IBaseModel } from "../model/BaseModel";
import UrlShortener from "../service/UrlShortener";
import List from "./List";

function UrlShorter() {
  const urlShorter = new UrlShortener();

  const [text, setText] = useState<string>("");
  const [newUrl, setNewUrl] = useState<IBaseModel[]>([]);

  const handleChange = (e: SyntheticEvent) => {
    setText((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    urlShorter.getShortUrl(text).then((res) => {
      setNewUrl([...newUrl, res]);
    });
    setText("");
  };

  return (
    <div className="container">
      <h1>URL Shortener</h1>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          <button>Shorten It</button>
        </form>
      </div>
      <List URLlist={newUrl} />
    </div>
  );
}

export default UrlShorter;
