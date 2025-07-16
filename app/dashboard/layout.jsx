import Sidebar from " @/components/layouts/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex  min-h-screen pt-8"> 
      {/* Sidebar */}
      <aside className="hidden md:block w-72 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto  bg-white dark:bg-neutral-950 px-4 py-6">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
