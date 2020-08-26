import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // make timer
    const timeId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 500);
    // cancel  previous timer after every rerender (term has changed)
    return () => {
      clearTimeout(timeId);
    };
  }, [term]);

  useEffect(() => {
    // declare asynchrouns server calling
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedTerm
        }
      });
      setResults(data.query.search);
    };

    if (debouncedTerm) {
      // server calling  after every rerender (debouncedTerm change)
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button "
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content ">
          <div className="header">{result.title}</div>
          {/* render tags in text  this bad way  */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="inputText">Enter Search Term</label>
          <input
            id="inputText"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
        <div className="ui celled list ">{renderedResults}</div>
      </div>
    </div>
  );
};
export default Search;
