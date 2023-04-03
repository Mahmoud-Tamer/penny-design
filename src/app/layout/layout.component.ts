import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

export interface MenuItem {
  name: string;
  icon: string;
  isActive?: boolean;
}

const MAIN_MENU_ITEMS: MenuItem[] = [
  { name: 'Request(s)', icon: 'file_copy' },
  { name: 'E-Source', icon: 'sell', isActive: true },
  { name: 'Order(s) & Contract(s)', icon: 'shopping_cart' },
  { name: 'GRN(s)', icon: 'list_alt' },
  { name: 'Bill(s)', icon: 'receipt_long' },
  { name: 'Payment(s)', icon: 'payments' },
];

const SECONDARY_MENU_ITEMS: MenuItem[] = [
  { name: 'Product(s) / Service(s)', icon: 'category' },
  { name: 'Workspace(s)', icon: 'work' },
  { name: 'Vendor(s)', icon: 'storefront' },
  { name: 'Report(s)', icon: 'bar_chart' },
];

const SMALL_SCREEN_SIZE = 1100;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  mainMenuItems: MenuItem[] = MAIN_MENU_ITEMS;
  secondaryMenuItems: MenuItem[] = SECONDARY_MENU_ITEMS;

  @ViewChild('drawer') drawer!: MatDrawer;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize(event.target.innerWidth);
  }

  ngAfterViewInit() {
    this.checkWindowSize(window.innerWidth);
  }

  checkWindowSize(size: number) {
    if (size < SMALL_SCREEN_SIZE) {
      this.drawer.close();
    } else {
      this.drawer.open();
    }
  }

  toggleSidebar(): void {
    this.drawer.toggle();
  }
}
