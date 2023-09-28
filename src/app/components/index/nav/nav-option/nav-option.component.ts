import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavOptions} from "./nav.options";

@Component({
  selector: 'app-nav-option',
  templateUrl: './nav-option.component.html',
  styleUrls: ['./nav-option.component.css']
})
export class NavOptionComponent implements OnInit {
  @Input() options: NavOptions[] = []
  @Input()  title: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.title = this.title.replace('-', ' ');
  }

  @Output() getTittle = new EventEmitter<string>();

  redirect(opt: NavOptions) {
    opt.text = opt.text.charAt(0).toUpperCase() + opt.text.slice(1);
    opt.route = opt.route.toLowerCase().replace(' ', '-');
    this.router.navigate([opt.route]);
    this.getTittle.emit(opt.text);
  }

}
