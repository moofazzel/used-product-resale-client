// import { useEffect, useState } from "react";

// const useCheckUserType = (email) => {
//   const [userType, setUserType] = useState(null);
//   const [isAdminLoading, setIsAdminLoading] = useState(true);
//   useEffect(() => {
//     if (email) {
//       fetch(`http://localhost:5000/users/admin/${email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setUserType(data.accountType);
//           setIsAdminLoading(false);
//         });
//     }
//   }, [email]);
//   // console.log("inside hooks", userType);
//   return [isAdminLoading, userType];
// };

// export default useCheckUserType;
