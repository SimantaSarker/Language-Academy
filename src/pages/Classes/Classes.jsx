import useApprove from "../../hooks/useApprove";
import ClassCard from "./ClassCard";

const Classes = () => {

const [isApprove,]=useApprove();



  return (
    <div className="grid  md:grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200  ">
    {
      isApprove.map((card)=><ClassCard key={card._id} card={card}></ClassCard>)
    }
    </div>
  );
};

export default Classes;