import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export function DashboardLayout() {
  return (
    <div className="flex w-full h-[100vh]  m-0 p-0 ">
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

function Content({ children }) {
  return <div className="w-full h-full pl-10 pr-5 py-9">{children}</div>;
}
