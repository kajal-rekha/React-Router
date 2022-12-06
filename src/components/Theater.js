// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Theater = () => {
  const navigate = useNavigate();

  const handleTicketCounter = () => {
    navigate("/ticket-counter");
  };
  return (
    <div>
      <h1>Theater</h1>

      {/* first-way */}
      {/* <Link to="/ticket-counter">
        <button>Go to ticket counter</button>
      </Link> */}

      {/* second way */}
      <button onClick={handleTicketCounter}>Go to ticket countrt</button>

      <button onClick={() => navigate(-2)}>Go back</button>
    </div>
  );
};

export default Theater;
