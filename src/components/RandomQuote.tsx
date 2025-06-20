import { useEffect } from "react";
import { quotes } from "./Quotes";
import { useUserStore } from "../store/store";

const RandomQuote = () => {
  const { quote } = useUserStore();
  useEffect(() => {
    const firstIndex = Math.floor(Math.random() * quotes.length);
    useUserStore.setState({
      quote: quotes[firstIndex],
    });
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      useUserStore.setState({
        quote: quote,
      });
    }, 5000);
    return () => clearInterval(interval);
    ``;
  }, []);

  return (
    <div
      className="text-white md:max-w-3xl max-w-2xl text-center p-4 text-1xl font-bold uppercase"
      style={{ textShadow: "2px 2px 4px #72120d " }}
    >
      <p>{quote}</p>
    </div>
  );
};

export default RandomQuote;
