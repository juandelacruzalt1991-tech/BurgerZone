"use server";

import { revalidatePath } from "next/cache";
import { MenuItem } from "@/data/menu";
import { getMenuData, saveMenuData } from "@/lib/menuDb";

export async function updateMenuItem(updatedItem: MenuItem) {
  const items = getMenuData();
  const index = items.findIndex((item) => item.id === updatedItem.id);
  
  if (index !== -1) {
    items[index] = updatedItem;
    const success = saveMenuData(items);
    if (success) {
      revalidatePath("/");
      revalidatePath("/admin");
      return { success: true };
    }
  }
  return { success: false, error: "Item not found or failed to save" };
}

export async function addMenuItem(newItem: MenuItem) {
  const items = getMenuData();
  
  // Ensure we have a unique ID
  const maxId = items.reduce((max, item) => {
    const idNum = parseInt(item.id);
    return !isNaN(idNum) && idNum > max ? idNum : max;
  }, 0);
  
  newItem.id = (maxId + 1).toString();
  
  items.push(newItem);
  const success = saveMenuData(items);
  if (success) {
    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true, item: newItem };
  }
  return { success: false, error: "Failed to save new item" };
}

export async function deleteMenuItem(id: string) {
  const items = getMenuData();
  const filtered = items.filter((item) => item.id !== id);
  
  if (filtered.length < items.length) {
    const success = saveMenuData(filtered);
    if (success) {
      revalidatePath("/");
      revalidatePath("/admin");
      return { success: true };
    }
  }
  return { success: false, error: "Item not found or failed to delete" };
}
