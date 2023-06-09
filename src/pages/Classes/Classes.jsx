import useApprove from "../../hooks/useApprove";

const Classes = () => {

const [isApprove,]=useApprove();
console.log(isApprove)


  return (
    <div>
      <h1>Classes Page:{isApprove.length}</h1>
    </div>
  );
};

export default Classes;