import {Component, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ActivatedRoute, Router} from "@angular/router";
import {NavOptions} from "./nav-option/nav.options";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  isHiddeMenu: any;
  title: any;
  isToggle:boolean = false;


  messagesOptions: NavOptions[] = [];
  appointmentsOptions: NavOptions[] = [];
  branchesOptions: NavOptions[] = [];
  adminOptions: NavOptions[] = [];
  reportOptions: NavOptions[] = [];

  constructor(private breakpointObserver: BreakpointObserver, private route: ActivatedRoute, private router: Router) {
    this.isHiddeMenu = false;
  }

  ngOnInit(): void {
    this.feedMessageOptions();
    this.feedAppointmentsOptions();
    this.feedBranchesOptions();
    this.feedAdminOptions();
    this.feedReportOptions();
  }

  private feedMessageOptions() {
    this.messagesOptions.push(new NavOptions('qw'));
    }

  private feedAppointmentsOptions() {
    this.appointmentsOptions.push(new NavOptions('as'));
    }
  private feedBranchesOptions() {
    this.branchesOptions.push(new NavOptions('zx'));
    }

  private feedAdminOptions() {
    this.adminOptions.push(new NavOptions('qa'))
  }

  private feedReportOptions() {
    this.reportOptions.push(new NavOptions('az'))
  }


  onClickedOutside(e: Event) {
    if(this.isToggle){
      this.toggle();
    }
  }


  getTittle(e: string) {
    this.title = e;
  }

  toggle() {
    this.accordion.closeAll();
    this.isToggle = !this.isToggle;
  }
}
