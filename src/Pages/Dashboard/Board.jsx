import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Board = () => {
  const { user } = useContext(AuthContext);

  const today = new Date();
  const time = today.getHours();

  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-800">
        {time < 23 && time < 12 && <>Good Morning</>}
        {time >= 12 && time <= 17 && <>Good Afternoon</>}
        {time > 17 && time <= 24 && <>Good Evening</>}, {user?.displayName}
      </h1>
      <h2 className="text-md text-gray-400">
        Here&#x27;s what&#x27;s happening with your account today.
      </h2>
    </>
  );
};

export default Board;
