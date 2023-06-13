const PopularInstructorsCard = ({instructor}) => {

  const {photo,name}=instructor;
  return (
    <div className="card w-[70%] h-96 glass language-font">
    <figure className="h-1/2 w-full"><img src={photo} className="w-full h-full" alt="Instructor"/></figure>
    <div className="card-body">
      <h2 className="card-title text-2xl uppercase">{name}</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-secondary">Know More!</button>
      </div>
    </div>
  </div>
  );
};

export default PopularInstructorsCard;