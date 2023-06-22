import { ADD_USER, DELETE_USER, EDIT_USER } from "./action";

let initialData = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_USER: {
      console.log("PAYLOAD IN ADD", action.payload);
      state = {
        ...state,
        users: [...state.users, action.payload],
      };
      console.log("state", state.users);
      localStorage.setItem("users", JSON.stringify(state.users));
      console.log("localStorage", localStorage.getItem("users"));
      return state;
    }
    case EDIT_USER: {
      if (state.users && state.users.length > 0) {
        state.users = state.users.map((user) => {
          if (user.id === action.payload.id) {
            user.name = action.payload.name;
            user.email = action.payload.email;
            user.phone = action.payload.phone;
          }
          return user;
        });
        console.log("RESULT IN EDIT REDUCER", state.users);
        localStorage.setItem("users", JSON.stringify(state.users));
        return state;
      }
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
