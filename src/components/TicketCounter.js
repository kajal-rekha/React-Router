import { useNavigate } from "react-router-dom";

const TicketCounter = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Welcome to ticket counter</h1>
      <button onClick={handleHome}>Go to home</button>
    </div>
  );
};

export default TicketCounter;
