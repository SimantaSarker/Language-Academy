import { motion } from "framer-motion";
const PopularCard = ({ item }) => {
  const { image, courseName, instructorName, price, enrolled } = item;
  return (
    <motion.div whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}  className="card card-side bg-base-100 shadow-xl mb-12 language-font">
  
      <figure className="">
        <img src={image} className="h-full object-cover" alt="Popular" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-2xl">{courseName}</h2>
        <p className="text-xl font-semibold">Instructor: {instructorName}</p>
        <div className="flex justify-between font-semibold">
          <span className="text-xs">Price: {price} $</span>
          <span className="text-xs">Enrolled: {enrolled}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularCard;
