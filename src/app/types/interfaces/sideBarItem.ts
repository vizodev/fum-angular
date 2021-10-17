export interface SidebarItem {
  label: string;
  icon?: string;
  childrens?: SidebarItemChildren[];
  isActive?: boolean;
  router: string;
  isHidden?: () => boolean;
}

export interface SidebarItemChildren
  extends Omit<SidebarItem, 'icon' | 'childrens' | 'isActive' | 'isHidden'> {}
