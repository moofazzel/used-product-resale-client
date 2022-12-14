import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [userType, setUserType] = useState(false);
  const [userRole, setUserRole] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  // console.log(userType);
  useEffect(() => {
    if (email) {
      fetch(`https://used-procuct.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setIsAdmin(data.isAdmin);
          setUserType(data.accountType);
          setUserRole(data.user_role);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return { isAdmin, userType, userRole, isAdminLoading };
};

export default useAdmin;
