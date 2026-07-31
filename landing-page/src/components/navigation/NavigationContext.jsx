import { createContext, useContext } from "react";
export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigationContext must be used within a NavigationProvider");
  }
  return context;
}
export default NavigationContext;
