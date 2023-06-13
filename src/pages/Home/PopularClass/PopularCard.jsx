const PopularCard = ({ item }) => {
  console.log(item);
  const {image,courseName,instructorName,price,enrolled}=item;
  return (
    <div className="card card-side bg-base-100 shadow-xl mb-12">
      <figure className="w-1/2">
        <img
          src={image}
          className="h-full object-cover"
          alt="Popular"
        />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title text-4xl">{courseName}</h2>
        <p className="text-xl font-semibold mb-10">Instructor: {instructorName}</p>
        <div className="card-actions justify-between font-semibold">
          <span className='text-xl'>Price: {price} $</span>
          <span className='text-xl'>Enrolled: {enrolled}</span>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
