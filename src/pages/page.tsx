import SignIn from "@/components/sign-in";
import Pie from "@/components/ui/svgs/github";
import Logo from "@/components/ui/svgs/logo";
import { ArrowUp } from "lucide-react";

export default function Home() {
  return (
    <main className="flex items-center h-screen">
      <aside className="w-1/2 relative hidden items-center justify-center h-full xl:flex">
        <Logo className="absolute bottom-0 opacity-30 -left-0 w-[240px]" />
        <div className="flex flex-col items-end w-fit">
          <div className="h-[170px] flex flex-col items-start rounded-3xl bg-background drop-shadow-xl border w-[450px]">
            <div className="flex items-center gap-4 w-full border-b px-6 py-4">
              <Logo className="w-8" />
              <span className="font-extrabold">
                AI to Detect & Autofix Bad Code
              </span>
            </div>
            <div className="flex items-center justify-evenly w-full px-2 flex-1">
              <div className="flex flex-col w-full items-center">
                <div className="font-bold text-lg">30+</div>
                <span className="font-medium text-sm">Language Support</span>
              </div>
              <div className="flex flex-col w-full items-center">
                <div className="font-bold text-lg">10K+</div>
                <span className="font-medium text-sm">Developers</span>
              </div>
              <div className="flex flex-col w-full items-center">
                <div className="font-bold text-lg">100K+</div>
                <span className="font-medium text-sm">Hours Saved</span>
              </div>
            </div>
          </div>
          <div className="h-[164px] rounded-3xl flex flex-col px-6 py-4 bg-background -translate-y-4 translate-x-4 drop-shadow-xl border w-[265px]">
            <div className="w-full flex items-center justify-between">
              <div className="w-14 h-14 p-2 flex items-center justify-center rounded-full bg-[#9D90FA40]">
                <Pie className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-[#0049C6]">
                  <ArrowUp className="w-4 h-4 font-extrabold" />
                  <span className="font-extrabold">14%</span>
                </div>
                <span className="text-xs font-normal">This Week</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1 items-start justify-center">
              <div>Issues Fixed</div>
              <div className="font-bold text-3xl">500K +</div>
            </div>
          </div>
        </div>
      </aside>
      <aside className="w-full flex flex-col gap-8 px-4 py-6 items-center bg-secondary justify-center xl:w-1/2 h-full">
        <SignIn />
        <div className="font-normal">
          By signing up you agree to the{" "}
          <span className="font-bold">Privacy Policy.</span>
        </div>
      </aside>
    </main>
  );
}
