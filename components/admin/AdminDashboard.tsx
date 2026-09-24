"use client";

import { useState, useTransition } from "react";
import { MenuItem, CATEGORIES } from "@/data/menu";
import { updateMenuItem, addMenuItem, deleteMenuItem } from "@/app/admin/actions";
import { Search, Plus, Edit2, Trash2, X, Save, AlertCircle } from "lucide-react";

export default function AdminDashboard({ initialItems }: { initialItems: MenuItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const [isPending, startTransition] = useTransition();
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [isAddingMode, setIsAddingMode] = useState(false);

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.arabicName.includes(search);
    const matchesCat = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    startTransition(async () => {
      if (isAddingMode) {
        const result = await addMenuItem(editingItem);
        if (result.success && result.item) {
          setItems([...items, result.item]);
          setIsAddingMode(false);
          setEditingItem(null);
        }
      } else {
        const result = await updateMenuItem(editingItem);
        if (result.success) {
          setItems(items.map(i => i.id === editingItem.id ? editingItem : i));
          setEditingItem(null);
        }
      }
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      startTransition(async () => {
        const result = await deleteMenuItem(id);
        if (result.success) {
          setItems(items.filter(i => i.id !== id));
        }
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      
      {/* TOOLBAR */}
      <div className="p-4 md:p-6 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-64">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search items..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-primary outline-none"
            />
          </div>
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-primary outline-none bg-white"
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <button 
          onClick={() => {
            setIsAddingMode(true);
            setEditingItem({ id: "", name: "", arabicName: "", price: "", category: CATEGORIES[0], badge: "" });
          }}
          className="w-full md:w-auto bg-teal-primary hover:bg-teal-dark text-white px-5 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <Plus className="w-5 h-5" /> Add New Item
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm border-b border-gray-100">
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium" dir="rtl">الاسم العربي</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Price (AED)</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredItems.map(item => (
              <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <span className="font-semibold text-charcoal block">{item.name}</span>
                  {item.badge && <span className="text-xs bg-yellow-accent/20 text-yellow-600 px-2 py-0.5 rounded-full font-bold mt-1 inline-block">{item.badge}</span>}
                </td>
                <td className="px-6 py-4 text-right font-arabic" dir="rtl">{item.arabicName}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{item.category}</td>
                <td className="px-6 py-4 font-bold text-teal-primary">{item.price}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button 
                      onClick={() => { setIsAddingMode(false); setEditingItem(item); }}
                      className="p-2 text-gray-400 hover:text-teal-primary bg-gray-50 hover:bg-teal-50 rounded-lg transition-colors"
                      title="Edit Item"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id, item.name)}
                      className="p-2 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  No items found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL OVERLAY */}
      {editingItem && (
        <div className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-bold text-xl text-charcoal">{isAddingMode ? "Add New Item" : "Edit Item"}</h3>
              <button onClick={() => setEditingItem(null)} className="text-gray-400 hover:text-charcoal transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">English Name</label>
                <input 
                  required
                  type="text" 
                  value={editingItem.name} 
                  onChange={e => setEditingItem({...editingItem, name: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-primary outline-none"
                  placeholder="e.g. Chicken Spicy Charcoal" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Arabic Name</label>
                <input 
                  required
                  dir="rtl"
                  type="text" 
                  value={editingItem.arabicName} 
                  onChange={e => setEditingItem({...editingItem, arabicName: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-primary outline-none font-arabic"
                  placeholder="دجاج على الفحم حار" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                  <input 
                    required
                    type="text" 
                    value={editingItem.price} 
                    onChange={e => setEditingItem({...editingItem, price: e.target.value})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-primary outline-none"
                    placeholder="e.g. 15/22/42 or 15.00" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select 
                    required
                    value={editingItem.category} 
                    onChange={e => setEditingItem({...editingItem, category: e.target.value as any})}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-primary outline-none bg-white"
                  >
                    {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Badge (Optional)</label>
                <input 
                  type="text" 
                  value={editingItem.badge || ""} 
                  onChange={e => setEditingItem({...editingItem, badge: e.target.value})}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-teal-primary outline-none"
                  placeholder="e.g. New Arrival, Spicy" 
                />
              </div>

              <div className="pt-4 mt-2 border-t border-gray-100 flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setEditingItem(null)}
                  className="px-5 py-2.5 rounded-lg font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="px-5 py-2.5 rounded-lg font-medium bg-teal-primary hover:bg-teal-dark text-white flex items-center gap-2 transition-colors disabled:opacity-50"
                >
                  <Save className="w-5 h-5" /> {isPending ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
