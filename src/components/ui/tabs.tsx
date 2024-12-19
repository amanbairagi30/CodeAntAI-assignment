"use client";

import React, { createContext, useContext, useState } from "react";

type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export function Tabs({
  children,
  defaultTab,
}: {
  children: React.ReactNode;
  defaultTab?: string;
}) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "");

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full flex flex-col">{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex p-1 bg-gray-50 rounded-lg gap-2 w-full mb-4">
      {children}
    </div>
  );
}

export function Tab({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within a Tabs component");

  const { activeTab, setActiveTab } = context;

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        px-6 py-2 h-[60px] text-lg w-full font-medium rounded-md transition-all duration-200
        ${
          activeTab === id
            ? "bg-primary text-white shadow-sm"
            : "text-foreground bg-accent"
        }
      `}
      aria-selected={activeTab === id}
      role="tab"
    >
      {children}
    </button>
  );
}

export function TabContent({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const context = useContext(TabsContext);
  if (!context)
    throw new Error("TabContent must be used within a Tabs component");

  const { activeTab } = context;

  if (activeTab !== id) return null;

  return <div className="w-full h-full flex-1 flex flex-col">{children}</div>;
}
