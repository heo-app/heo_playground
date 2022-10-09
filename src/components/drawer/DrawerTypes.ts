import { ForwardedRef } from 'react';

export type ToggleDrawer = () => void;

export interface DrawerControllerProps {
  ref?: ForwardedRef<{ toggleDrawer: ToggleDrawer }>;
  openDrawerWidth?: number;
  closeDrawerWidth?: number;
}

export interface DrawerViewProps {
  isDrawerOpen: boolean;
  openDrawerWidth?: number;
  closeDrawerWidth?: number;
}

export interface DrawerStylesProps {
  openDrawerWidth: number;
  closeDrawerWidth: number;
}
