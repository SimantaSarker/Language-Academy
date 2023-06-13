import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructor = () => {


  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularInstructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);



  return (
    <div className="mb-16 p-5">
        <h1 className="text-center week text-5xl mb-12 mt-4 language-font">
        Popular Instructor
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {instructors.map((instructor)=><PopularInstructorsCard key={instructor._id} instructor={instructor}></PopularInstructorsCard>)}
      </div>
    </div>
  );
};

export default PopularInstructor;