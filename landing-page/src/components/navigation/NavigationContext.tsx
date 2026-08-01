import { createContext, useContext } from "react";
export interface NavigationContextType {
  activeTabIndex: number;
  setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
  activeSubMenuIndex: number;
  setActiveSubMenuIndex: React.Dispatch<React.SetStateAction<number>>;
}
const NavigationContext = createContext<NavigationContextType | null>(null);

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigationContext must be used within a NavigationProvider");
  }
  return context;
}
export default NavigationContext;
