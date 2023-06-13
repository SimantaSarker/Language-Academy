import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

const PopularClass = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div className="p-5 language-font">
      <h1 className="text-center week text-5xl text-black mb-12 mt-4">
        Popular Classes
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {popular.map((item)=><PopularCard key={item._id} item={item}></PopularCard>)}

      </div>
    </div>
  );
};

export default PopularClass;
