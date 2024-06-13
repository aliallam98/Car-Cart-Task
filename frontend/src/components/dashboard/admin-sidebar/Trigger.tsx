import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import useSideBar from "@/hooks/useSidebar";

const Trigger = () => {
  const { isCollapsed, onExpand, onCollapse } = useSideBar();

  return (
    <div className="hidden lg:block">
      {!isCollapsed && (
        <div className="flex items-center w-full mt-2">
          <p className="font-semibold">Dashboard</p>
          <Button
            className="ml-auto h-auto p-2"
            variant={"ghost"}
            onClick={onCollapse}
          >
            <ArrowLeftFromLineIcon size={16} />
          </Button>
        </div>
      )}

      {isCollapsed && (
        <div className="flex items-center justify-center mt-2">
          <Button className="h-auto p-2" variant={"ghost"} onClick={onExpand}>
            <ArrowRightFromLineIcon size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Trigger;
