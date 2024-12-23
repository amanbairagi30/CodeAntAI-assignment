import Call from "@/components/ui/svgs/call";
import CloseMenu from "@/components/ui/svgs/close-menu";
import Logo from "@/components/ui/svgs/logo";
import Logout from "@/components/ui/svgs/logout";
import Menu from "@/components/ui/svgs/menu";
import { navigationItems } from "@/constants/data";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebaropen] = useState(false);
  const pathname = useParams();
  const navigate = useNavigate();
  // console.log("/dashboard/" + pathname?.["*"]);
  return (
    <>
      <main className="flex relative h-screen max-h-screen">
        <div className="w-[242px] hidden md:flex md:flex-col md:items-start border-r border-border gap-4 p-2">
          <div className="flex flex-col items-center justify-between">
            <div
              onClick={() => navigate("/")}
              className="flex cursor-pointer items-center gap-4 px-2 text-[24px]"
            >
              <Logo className="w-7" />
              <span>CodeAnt AI</span>
            </div>
          </div>
          <div className="flex flex-col w-full flex-1 gap-2">
            <div className="relative w-full px-2">
              <select
                className="bg-background font-medium px-2 appearance-none border rounded-lg border-border outline-none w-full h-[40px]"
                name=""
                id=""
              >
                <option
                  className="font-medium text-base"
                  value="UtkarshDhairyaPanwar"
                >
                  {"UtkarshDhairyaPanwar".slice(0, 16)}...
                </option>
              </select>
              <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7616 1.68173L7.79288 7.40048C7.60538 7.55673 7.41788 7.61923 7.26163 7.61923C7.07413 7.61923 6.88663 7.55673 6.73038 7.43173L0.730379 1.68173C0.417879 1.40048 0.417879 0.900484 0.699129 0.619234C0.980379 0.306734 1.48038 0.306734 1.76163 0.587984L7.26163 5.83798L12.7304 0.587984C13.0116 0.306734 13.5116 0.306734 13.7929 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z"
                    fill="#181D27"
                  />
                </svg>
              </div>
            </div>
            <nav className="flex-1 p-2">
              {navigationItems.map((item) => {
                const isCurrentRoute =
                  item.href === "/dashboard/" + pathname?.["*"];
                return (
                  <>
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`flex items-center gap-3 px-3 h-[44px] rounded-md text-sm ${
                        isCurrentRoute
                          ? "bg-primary text-background"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <item.icon
                        className={cn(
                          "w-5 text-foreground h-5",
                          isCurrentRoute ? "fill-[#fff]" : "fill-[#414651]"
                        )}
                      />
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  </>
                );
              })}
            </nav>
          </div>

          <div className="w-full px-2">
            {[
              { icon: Call, label: "Support", href: "/dashboard/support" },
              { icon: Logout, label: "Logout", href: "/dashboard/logout" },
            ].map((item) => {
              const isCurrentRoute =
                item.href === "/dashboard/" + pathname?.["*"];
              return (
                <>
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                      isCurrentRoute
                        ? "bg-primary text-background"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon
                      className={cn(
                        "w-5 text-foreground h-5",
                        isCurrentRoute ? "fill-[#fff]" : "fill-[#414651]"
                      )}
                    />
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <div className="md:hidden  border-b-2 border-border z-20 flex flex-col gap-4 bg-background p-4 fixed top-0 w-full h-fit">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-[24px]">
              <Logo className="w-7" />
              <span>CodeAnt AI</span>
            </div>
            {!sidebarOpen ? (
              <Menu
                className="cursor-pointer"
                onClick={() => setSidebaropen(true)}
              />
            ) : (
              <CloseMenu
                className="cursor-pointer"
                onClick={() => setSidebaropen(false)}
              />
            )}
          </div>
          {sidebarOpen && (
            <div className="flex flex-col gap-2">
              <div className="relative w-full">
                <select
                  className="bg-background px-2 appearance-none border border-border outline-none rounded-sm w-full h-[40px]"
                  name=""
                  id=""
                >
                  <option className="font-medium" value="UtkarshDhairyaPanwar">
                    UtkarshDhairyaPanwar
                  </option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <svg
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7616 1.68173L7.79288 7.40048C7.60538 7.55673 7.41788 7.61923 7.26163 7.61923C7.07413 7.61923 6.88663 7.55673 6.73038 7.43173L0.730379 1.68173C0.417879 1.40048 0.417879 0.900484 0.699129 0.619234C0.980379 0.306734 1.48038 0.306734 1.76163 0.587984L7.26163 5.83798L12.7304 0.587984C13.0116 0.306734 13.5116 0.306734 13.7929 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z"
                      fill="#181D27"
                    />
                  </svg>
                </div>
              </div>
              <nav className="flex-1 p-2">
                {[
                  ...navigationItems,
                  { icon: Call, label: "Support", href: "/dashboard/support" },
                  { icon: Logout, label: "Logout", href: "/dashboard/logout" },
                ].map((item) => {
                  const isCurrentRoute =
                    item.href === "/dashboard/" + pathname?.["*"];
                  return (
                    <>
                      <Link
                        key={item.label}
                        to={item.href}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                          isCurrentRoute
                            ? "bg-primary text-background"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <item.icon
                          className={cn(
                            "w-5 text-foreground h-5",
                            isCurrentRoute ? "fill-[#fff]" : "fill-[#414651]"
                          )}
                        />
                        <span className="font-semibold">{item.label}</span>
                      </Link>
                    </>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
        {sidebarOpen && (
          <div className="h-screen w-full bg-black/80 absolute"></div>
        )}
        <div className=" bg-secondary mt-[63px] md:mt-0 overflow-y-scroll flex-1 md:p-4 no-scrollbar">
          <Outlet />
        </div>
      </main>
    </>
  );
}
