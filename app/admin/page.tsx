import { getMenuData } from "@/lib/menuDb";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin CMS | Burger Zone",
};

export default async function AdminPage() {
  const menuItems = getMenuData();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-charcoal text-white py-4 px-6 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-primary rounded-full flex items-center justify-center font-bold text-xl">BZ</div>
          <h1 className="font-heading font-bold text-2xl tracking-wide">Menu Admin</h1>
        </div>
        <a href="/" className="text-sm text-gray-300 hover:text-white transition-colors underline underline-offset-4">Back to Storefront</a>
      </header>
      
      <main className="flex-grow p-4 md:p-8">
        <AdminDashboard initialItems={menuItems} />
      </main>
    </div>
  );
}
