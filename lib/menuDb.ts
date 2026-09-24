import fs from 'fs';
import path from 'path';
import { MenuItem } from '@/data/menu';

export const getMenuData = (): MenuItem[] => {
  try {
    const filePath = path.join(process.cwd(), 'data/menu.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read menu data", error);
    return [];
  }
};

export const saveMenuData = (data: MenuItem[]): boolean => {
  try {
    const filePath = path.join(process.cwd(), 'data/menu.json');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error("Failed to save menu data", error);
    return false;
  }
};
