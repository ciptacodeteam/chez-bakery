import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Sidebar />
        <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-16 lg:ml-64">
                {children}
            </div>
        </main>
    </div>
  );
}