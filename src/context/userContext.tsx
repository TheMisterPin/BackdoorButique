import { createContext, useCallback, useReducer, useMemo, useEffect, useState } from "react";
import { UserLoginData } from "../data";
import { ProviderProps } from "../data/Types/PropsTypes";
import { useNavigate,  } from 'react-router-dom';

type LoginState = {
  isLogin: boolean;
  error: string;
};

const initialState: LoginState = {
  isLogin: false,
  error: "",
};

type LoginAction =
  | { type: "LOGIN_VALID" }
  | { type: "LOGIN_INVALID" }
  | { type: "LOGOUT" };

export const UserContext = createContext<{
  state: LoginState;
  loginHandler: (username: string, password: string) => void;
  logoutHandler: () => void;
}>({
  state: initialState,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export function UserProvider({ children }: ProviderProps) {
  const [users, setUsers] = useState<UserLoginData[]>([]);
  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (Array.isArray(existingUsers)) {
      setUsers(existingUsers);
    } else {
      console.error("Corrupted data in localStorage: 'users' should be an array");
    }
  }, []);

  const loginHandler = useCallback((username: string, password: string) => {
    const Navigate = useNavigate();
    const isUserValid = users.some(
      (user: UserLoginData) => user.username === username && user.password === password
    );

    if (isUserValid) {

      dispatch({ type: "LOGIN_VALID" });

    
      localStorage.setItem("isLoggedIn", "true");
      Navigate("/shop");

      alert(`Login successful! Good to see you again ${username}`);
    } else {
      dispatch({ type: "LOGIN_INVALID" });
      alert("Invalid username or password");
    }
  }, [users]);

  const createNewUser = (newUserData: UserLoginData) => {
    if (Array.isArray(users)) {
      setUsers([...users, newUserData]);
      localStorage.setItem("users", JSON.stringify([...users, newUserData]));
    } else {
      console.error("Corrupted data: 'users' should be an array");
    }
  };

  const reducer = (state: LoginState, action: LoginAction): LoginState => {
    switch (action.type) {
      case "LOGIN_VALID":
        return { ...state, isLogin: true, error: "" };
      case "LOGIN_INVALID":
        return {
          ...state,
          isLogin: false,
          error: "Invalid username or password",
        };
      case "LOGOUT":
        return { ...state, isLogin: false, error: "" };
      default:
        return state;
    }
  };

  const [loginState, dispatch] = useReducer(reducer, initialState);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("users");
    dispatch({ type: "LOGOUT" });
    localStorage.setItem("isLoggedIn", "false"); // Update login status in local storage
    alert("Logged out successfully");
  }, []);

  const contextValue = useMemo(
    () => ({
      state: loginState,
      loginHandler,
      createNewUser,
      logoutHandler,
    }),
    [loginState, loginHandler, createNewUser, logoutHandler]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
