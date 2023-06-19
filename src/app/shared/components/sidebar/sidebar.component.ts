import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { LayoutService } from "../../services/layout/layout.service";

import { Menu, NavService } from "../../services/nav/nav.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  public menuItems: Menu[] = [];
  public myBtnIdClicked: boolean = false;
  public margin: any = 0;
  public width: any = window.innerWidth;
  public leftArrowNone: boolean = true;
  public rightArrowNone: boolean = false;
  public pined: boolean = false;
  public pinedItemIds: number[] = []; // Specify the ids of the menu items you want to pin

  constructor(
    private navService: NavService,
    private router: Router,
    private layout: LayoutService
  ) {
    this.navService.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
      console.log(menuItems);
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter((items) => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }

            items.children.filter((subItems) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      });
    });
  }

  close() {
    if (this.width < 1199) {
      document.querySelector(".sidebar-wrapper")?.classList.add("close_icon");
    }
  }
  //  Active Nav
  setNavActive(item: Menu) {
    this.menuItems.filter((menuItem) => {
      if (menuItem !== item) {
        menuItem.active = false;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }

  toggletNavActive(item: Menu) {
    if (!item.active) {
      this.menuItems.forEach((a) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) {
          return false;
        }
        a.children.forEach((b) => {
          if (a.children?.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }

  sidebarToggle() {
    this.navService.collapseSidebar = !this.navService.collapseSidebar;
  }

  scrollToLeft() {
    if (this.margin >= -this.width) {
      this.margin = 0;
      this.leftArrowNone = true;
      this.rightArrowNone = false;
    } else {
      this.margin += this.width;
      this.rightArrowNone = false;
    }
  }

  scrollToRight() {
    if (this.margin <= -2598 || this.margin <= -2034) {
      if (this.width === 492) {
        this.margin = -3000;
      } else {
        this.margin = -3250;
      }
      this.leftArrowNone = false;
      this.leftArrowNone = false;
    } else {
      this.leftArrowNone = false;
      this.margin += -this.width;
    }
  }

  isPined(itemId: number | undefined): boolean {
    return itemId !== undefined && this.pinedItemIds.includes(itemId);
  }

  togglePined(itemId: number | undefined): void {
    this.pined= true;
    if (itemId === undefined) {
      return;
    }
const index = this.pinedItemIds.indexOf(itemId);
    if (index !== -1) {
      this.pinedItemIds.splice(index, 1);
    } else {
      this.pinedItemIds.push(itemId);
    }
  }
}
