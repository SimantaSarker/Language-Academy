import useApprove from "../../hooks/useApprove";
import ClassCard from "./ClassCard";

const Classes = () => {

const [isApprove,]=useApprove();



  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  ">
    {
      isApprove.map((card)=><ClassCard key={card._id} card={card}></ClassCard>)
    }
    </div>
  );
};

export default Classes;