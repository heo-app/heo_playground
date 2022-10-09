import { ForwardedRef } from 'react';

export type ToggleDrawer = () => void;

export interface DrawerControllerProps {
  ref?: ForwardedRef<{ toggleDrawer: ToggleDrawer }>;
}

export interface DrawerViewProps {
  isDrawerOpen: boolean;
}
