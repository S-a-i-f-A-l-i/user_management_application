import { ADD_USER, DELETE_USER, EDIT_USER } from "./action";

let initialData = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case EDIT_USER: {
      const findUser = state.users.find((user) => user.id === action.payload);
      return findUser;
    }
    case DELETE_USER: {
      console.log("IN REDUCER", action.payload);
      let users = state.users.filter((user) => {
        console.log(user);
        // if (user.id === action.payload) console.log("FINE");
        return user.id !== action.payload;
      });
      localStorage.setItem("users", JSON.stringify(users));
      return users;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
