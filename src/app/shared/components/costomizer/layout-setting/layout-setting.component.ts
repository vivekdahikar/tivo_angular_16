import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-layout-setting',
  templateUrl: './layout-setting.component.html',
  styleUrls: ['./layout-setting.component.scss'],
})
export class LayoutSettingComponent {
  public customizer: string = '';
  public sidebarType: string = '';
  public layoutType: any = 'ltr';

  public sidebarSetting: string = 'default-sidebar';
  public screenwidth: any = window.innerWidth;
  public MIXLayout: string = 'default';
  @HostBinding('@.disabled')
  public selectedValue: any;

  constructor(
    public layout: LayoutService,
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document) {}
    layoutvalue: string;
    sidebarvalue : string

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((params:any) => {
        this.layoutvalue = params.layout;
        this.sidebarvalue = params.sidebar;
        console.log(this.sidebarvalue);
        
      //  this.document.body.classList.add(params.layout);
      }
    );

    document.getElementsByTagName('html')[0].setAttribute('dir', this.layoutvalue);
    document.getElementsByTagName('body')[0].setAttribute('class', this.layoutvalue);
    document.getElementsByTagName('body')[0].setAttribute('had', this.sidebarvalue);
    this.layout.config.settings.sidebar = this.sidebarvalue ? this.sidebarvalue : 'compact-wrapper';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;
  }

  Customizer(val: any) {
    this.customizer = val;
  }

  customizeSidebarType(val: any) {
    this.sidebarType = val;
    this.layout.config.settings.sidebar = val;
    if (val == 'horizontal-wrapper') {
      this.router.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
          queryParams: { sidebar: 'horizontal-wrapper' },
          queryParamsHandling: 'merge'
        });

      document.getElementsByTagName('body')[0].setAttribute('had', val);

    } else {
      this.router.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
          queryParams: { sidebar: 'compact-wrapper' },
          queryParamsHandling: 'merge'
        });

      document.getElementsByTagName('body')[0].removeAttribute('had');

    }
  }

  customizeLayoutType(val: any) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { layout: 'box-layout' },
        queryParamsHandling: 'merge'
      });

    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    document.getElementsByTagName('html')[0].removeAttribute('dir');
    document.getElementsByTagName('body')[0].removeAttribute('class');

    document.body?.classList.remove('box-layout');
    
    if(val == 'rtl'){
      this.router.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
          queryParams: { layout: 'rtl' },
          queryParamsHandling: 'merge'
        });

      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.getElementsByTagName('body')[0].setAttribute('class', val);

    }else if(val == 'ltr'){
      this.router.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
        });

      document.getElementsByTagName('html')[0].setAttribute('dir', val);
      document.getElementsByTagName('body')[0].setAttribute('class', val);
    }else{
      document.body?.classList.add('box-layout');
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }

  getAnimation() {
    if (this.selectedValue) {
      localStorage.setItem(
        'animate',
        this.selectedValue || localStorage.getItem('animate')
      );
      window.location.reload();
    }
  }
}
