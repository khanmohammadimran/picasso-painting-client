import React from "react";
import { useQuery } from "react-query";
import UserRow from "../../Dashboard/UserRow";
import Loading from "../../Shared/Loading";
const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://mighty-everglades-23547.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-slate-600 font-raleway py-4 font-bold">
        This is My Profile: {users.length}
      </h2>
      <div className=" overflow-x-auto">
        <table className=" table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
