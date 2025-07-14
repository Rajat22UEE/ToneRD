import Sidebar from " @/components/layouts/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen pt-16"> {/* pt-16 to offset sticky Navbar height */}
      {/* Sidebar */}
      <aside className="hidden md:block w-64 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto border-r border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-6">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 py-10">
        {children}
      </main>
    </div>
  );
}
