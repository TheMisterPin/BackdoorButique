import{ createContext, useCallback, useReducer, useMemo} from "react"
import {UserLoginData} from '../data/Types/UserLogin'
type LoginState={
  isLogin:boolean
  error : string
}

const initialState:LoginState = {
  isLogin:false,
  error:""
  }
  
  type LoginAction = 
 {   type:"LOGIN_VALID" }
 | {   type:"LOGIN_INVALID" }
 | {   type:"LOGOUT" }

 export const UserContext = createContext<{
  state: LoginState;
  loginHandler: (username: string, password: string) => void;       
  logoutHandler: () => void;                                
}>({
  state: initialState,
  loginHandler: () => {},
  logoutHandler: () => {},
});

type UserProviderProps = { children: React.ReactNode }
export function UserProvider({ children }: UserProviderProps) {
    const reducer =
      (state: LoginState, action: LoginAction): LoginState  => {
        switch (action.type) {
          case "LOGIN_VALID":
            return { ...state, isLogin: true, error: "" };
          case "LOGIN_INVALID":
            return { ...state, isLogin: false, error: "Invalid username or password" };
          case "LOGOUT":
            return { ...state, isLogin: false, error: "" };
          default:
            return state;
        }
      }
  
      const [loginState, dispatch] = useReducer(reducer, initialState);

      const loginHandler = useCallback((username: string, password: string) => {
        const tempUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const isUserValid = tempUsers.some((user: UserLoginData) =>
         user.username === username && user.password === password);
  
        if (isUserValid) {
          dispatch({ type: "LOGIN_VALID" });
          alert(`Login successful! Good to see you again ${username}`);
        }
        else {
          dispatch({ type: "LOGIN_INVALID" });
          alert("Invalid username or password");
        }
      }, [])
      const logoutHandler = useCallback(() => {
        localStorage.removeItem("users"); 
        dispatch({ type: "LOGOUT" });
        alert("Logged out successfully");
    }, []);
        const contextValue = useMemo(() => ({
        
          state: loginState,
          loginHandler,
          logoutHandler,
        }
       ), [loginState, loginHandler, logoutHandler])
   return( <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>);
      }

