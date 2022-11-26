import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userType, setUserType] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  // console.log(userType);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data.isAdmin);
          setUserType(data.accountType);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return {isAdmin, userType, isAdminLoading};
};

export default useAdmin;
