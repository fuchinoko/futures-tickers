import { makeAutoObservable, reaction, runInAction } from "mobx";
import axios from "axios";

const fetchInterval = 5000;
const apiEndpoint = "https://futures-api.poloniex.com/api/v2/tickers";
class Store {
  quotes = [];

  isQuotesPageActive = false;

  interval = null;

  loading = true;

  error = null;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.isQuotesPageActive,
      (isQuotesPageActive) => {
        clearInterval(this.interval);
        if (isQuotesPageActive) {
          runInAction(() => {
            this.fetchQuotes();
            this.interval = setInterval(
              () => this.fetchQuotes(),
              fetchInterval,
            );
          });
        }
      },
    );
  }

  setPageActive() {
    this.isQuotesPageActive = true;
  }

  setPageInactive() {
    this.isQuotesPageActive = false;
  }

  async fetchQuotes() {
    runInAction(() => {
      this.loading = true;
    });
    try {
      const response = await axios.get(apiEndpoint);
      runInAction(() => {
        this.quotes = response.data.data;
        this.error = null;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error.message || "Unknown error";
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

const storeInstance = new Store();

export default storeInstance;
