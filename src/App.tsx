import { Component, createResource, For } from "solid-js";

import axios from "axios";

interface Quotes {
  id: number;
  quote: string;
  author: string;
}

const fetchQuotes = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/quotes");
    const quotes = res.data.quotes;
    return quotes;
  } catch (err) {
    console.error(err);
  }
};

const App: Component = () => {
  const [quotes] = createResource<Quotes[]>(fetchQuotes);
  return (
    <>
      <For each={quotes()}>
        {(quote) => (
          <div>
            <h3>{quote.quote}</h3>
            <p>{quote.author}</p>
            <span>-----------------------</span>
          </div>
        )}
      </For>
    </>
  );
};

export default App;
