import React, { useEffect, useState } from "react";
import { Search } from "../components/Search";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
var randomWords = require("random-words");

interface Result {
  definition: string;
  valid: boolean;
  word: string;
}
export const Home = () => {
  const [word, setWord] = useState<string>("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const searchWord = (word: String) => {
    setLoading(true);
    setResult(null);
    fetch(
      `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "dictionary-by-api-ninjas.p.rapidapi.com",
          "x-rapidapi-key":
            "f6a72b977bmshafc3dc66d44772ep15d948jsn80ee9bb60488",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.valid) {
          setResult(data);
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        setLoading(false);
        return err;
      });
  };

  useEffect(() => {
    if (word === "") {
      searchWord(randomWords());
    }
  }, []);

  return (
    <div className="container">
      <Search
        word={word}
        setWord={setWord}
        searchWord={searchWord}
        loader={loading}
      ></Search>
      {error && word && (
        <div className="notfound">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="80"
            height="80"
            className="notfound__icon"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15zm-3.847-8.699a2 2 0 1 0 2.646 2.646 4 4 0 1 1-2.646-2.646z" />
          </svg>
          <h1 className="notfound__title">No result</h1>
          <p className="notfound__text">
            We couldn't find anything for <strong>{word}</strong>
          </p>
        </div>
      )}
      {!error && (
        <section className="result">
          <div>
            <h1 className="result__title">
              {(result && result.word) || <Skeleton width={70} />}
            </h1>
            <p className="result__text">
              {(result && result.definition) || <Skeleton count={20} />}
            </p>
          </div>
        </section>
      )}
    </div>
  );
};
