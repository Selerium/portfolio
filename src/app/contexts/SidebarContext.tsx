// "use client"

// import { createContext, ReactNode, useState } from "react";

// export const sidebarContext = createContext<any>(null);

// export const sidebarContextProvider = (({ children }: { children: ReactNode }) => {
//     const [state, setState] = useState(false);

//     return (
//         <sidebarContext.Provider value={{ state, setState }}>
//             {children}
//         </sidebarContext.Provider>
//     )
// });