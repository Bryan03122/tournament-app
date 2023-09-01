import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdExit } from "react-icons/io";
import { TbPlayBasketball } from "react-icons/tb";
import { logout } from "../../auth/services/firebase-auth-service";
import { Button } from "./Button";
export function Sidebar() {
  const handleLogoutClick = async () => {
    await logout();
  };
  return (
    <FlowbiteSidebar className="h-[100%] max-h-[100%] border-l-0 flex flex-col w-[22rem] sticky top-0 left-0">
      <div className="flex flex-col h-full gap-6">
        <h1 className="text-3xl font-bold ">Torneo Basket</h1>
        <FlowbiteSidebar.Items className="h-full flex flex-col justify-between">
          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="/players" icon={TbPlayBasketball}>
              Jugadores
            </FlowbiteSidebar.Item>

            <FlowbiteSidebar.Item href="/tournaments" icon={GiTrophyCup}>
              Torneos
            </FlowbiteSidebar.Item>
          </FlowbiteSidebar.ItemGroup>

          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item className={"hover:bg-transparent  px-0"}>
              <Button onClick={handleLogoutClick} rightIcon={<IoMdExit />}>
                Cerrar Sesión
              </Button>
            </FlowbiteSidebar.Item>
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </div>
    </FlowbiteSidebar>
  );
}
