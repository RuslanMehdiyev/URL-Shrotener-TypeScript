import axios from "axios";
import { IBaseModel } from "./../model/BaseModel";

class UrlShortener {
  private state: IBaseModel = {
    oldUrl: "",
    newUrl: {},
    error: "",
  };

  private setOldUrl(oldUrl: string) {
    this.state.oldUrl = oldUrl;
  }
  private setNewUrl(newUrl: object) {
    this.state.newUrl = newUrl;
  }
  private setError(error: string) {
    this.state.error = error;
  }

  private entryUrl: string = "https://api.shrtco.de/v2/shorten?url=";

  async getShortUrl(text: string): Promise<IBaseModel> {
    try {
      let response = await axios.get(this.entryUrl + text);
      this.setNewUrl(response.data.result);
      this.setOldUrl(text);
    } catch (error) {
      this.setOldUrl(text);
      this.setError(
        `Can't shorter given link "${text}". Please try to enter valid URL.`
      );
    }
    return this.state;
  }
}

export default UrlShortener;
