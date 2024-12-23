import DB from "@/components/ui/svgs/db";
import { repositories } from "@/constants/data";
import { Plus, RefreshCw, Search } from "lucide-react";

export default function Repositories() {
  return (
    <>
      <div className="flex-1 relative border border-border rounded-xl bg-background overflow-auto">
        <div className="">
          <div className="flex flex-wrap gap-4 px-6 pt-4 items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Repositories
              </h1>
              <p className="text-sm text-[#414651] font-normal mt-1">
                33 total repositories
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 px-3 py-2 border font-medium border-border rounded-md text-sm text-foreground hover:bg-gray-50">
                <RefreshCw className="w-4 h-4" />
                Refresh All
              </button>
              <button className="inline-flex items-center gap-2 px-3 py-2 bg-primary font-medium text-background rounded-md text-sm hover:bg-primary">
                <Plus className="w-4 h-4" />
                Add Repository
              </button>
            </div>
          </div>
          <div className="px-6 border-b">
            <div className="relative mb-6">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search Repositories"
                className="w-full md:w-[366px] placeholder:font-semibold bg-transparent pl-10 pr-4 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="">
            {repositories.map((repo) => (
              <div
                key={repo.name}
                className="flex flex-col h-[108px] py-6 border-b border-border cursor-pointer hover:bg-gray-50"
              >
                <div className="flex px-6 flex-col items-start gap-3 justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-foreground font-medium text-xl">
                      {repo.name}
                    </h3>
                    <span className="px-2 py-1 border border-[#B2DDFF] text-primary font-medium bg-[#EFF8FF] text-xs rounded-full">
                      {repo.visibility}
                    </span>
                  </div>
                  <div className="flex items-center font-[400] gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      {repo.language}
                      <span className={`w-2 h-2 rounded-full bg-primary`} />
                    </div>
                    <span className="flex items-center gap-2">
                      <DB /> {repo.size}
                    </span>
                    <span>Updated {repo.updatedAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
