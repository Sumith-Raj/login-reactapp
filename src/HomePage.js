import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <h2>hi {localStorage.getItem("u$ername")}</h2>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
