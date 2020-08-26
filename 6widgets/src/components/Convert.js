//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
//https://translation.googleapis.com/language/translate/v2
import React, { useState, useEffect } from "react";
import axios from "axios";
const Convert = ({ text, language }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  // set timer and cancel it till user stop typing
  // then setDebouncedText
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  // make a request with debounced text
  useEffect(() => {
    const doTranslating = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslating();
  }, [debouncedText, language]);
  return <h1 className="ui header">{translated}</h1>;
};

export default Convert;
