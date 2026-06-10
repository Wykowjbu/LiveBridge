import { createContext, useContext } from 'react';

export const SidebarContext = createContext({ mobileOpen: false, setMobileOpen: () => {} });
export const useSidebar = () => useContext(SidebarContext);
