import useApprove from "../../hooks/useApprove";
import ClassCard from "./ClassCard";

const Classes = () => {

const [isApprove,]=useApprove();
console.log(isApprove)


  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-auto ">
    {
      isApprove.map((card)=><ClassCard key={card._id} card={card}></ClassCard>)
    }
    </div>
  );
};

export default Classes;