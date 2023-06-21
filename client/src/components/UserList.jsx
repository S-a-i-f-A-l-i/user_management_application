import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction, editUserAction } from "../redux/action";
const UserList = () => {
  const [users, setUser] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    sort: "ascending",
  });
  const dispatch = useDispatch();
  const getUsers = useSelector((store) => {
    return store.users;
  });
  const handleChange = (e) => {
    console.log("HANDLE CHANGE");
    setFilters((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAccording = () => {
    console.log("HANDLE ACCORDING");
    if (getUsers && getUsers.length > 0) {
      let filtersUser = [];
      for (let i = 0; i < getUsers.length; i++) {
        console.log(typeof getUsers[i]);
        for (let key in getUsers[i]) {
          if (
            getUsers[i][key]
              .toLowerCase()
              .indexOf(filters.search.toLowerCase()) != -1
          ) {
            filtersUser.push(getUsers[i]);
            break;
          }
        }
      }
      console.log(getUsers.length);
      console.log(filtersUser);
      if (filters.sort === "descending") {
        const reverseArr = filtersUser.reverse();
        setUser(reverseArr);
        console.log(reverseArr);
      } else setUser(filtersUser);
    }
  };
  useEffect(() => {
    // setUser(getUsers);
    handleAccording();
  }, [filters.search, filters.sort]);
  return (
    <div>
      <div>
        <label>Search</label>
        <br />
        <input
          type="search"
          name="search"
          value={filters.search}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Sort</label>
        <br />
        <select name="sort" defaultValue={filters.sort} onChange={handleChange}>
          <option value="ascending">Ascending ⬇</option>
          <option value="descending">Descending ⬆</option>
        </select>
      </div>
      <div>
        {users && users.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button onClick={() => editUserAction(user.id, dispatch)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteUserAction(user.id, dispatch)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          "NO USER"
        )}
      </div>
    </div>
  );
};

export default UserList;