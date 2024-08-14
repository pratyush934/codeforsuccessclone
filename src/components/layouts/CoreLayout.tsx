import { ReactNode } from "react";
import AppBar from "../AppBar";
import { SidebarDemo } from "../Sidebar";

const CoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="flex flex-col h-screen w-screen overflow-hidden">
    //   <AppBar />
    //   <div className="flex flex-1 overflow-hidden">
    //     <main className="flex-1 bg-black p-4 overflow-auto">
    //       <div className="h-full w-full flex flex-col items-center">
    //         {children}
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <div className="flex flex-col h-screen w-screen">
      <AppBar />
      <div className="flex flex-1 h-full w-screen">
        <SidebarDemo>{children}</SidebarDemo>
      </div>
    </div>
  );
};

export default CoreLayout;
