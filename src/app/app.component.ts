import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TforC_Frontend';
  items: MenuItem[]=[];
  
  ngOnInit(): void {
    this.items=[
      {
        "label":"Qui sommes nous ?", 
        "icon":"pi pi-home",
        routerLink: ['/']
      },
      {
        "label":"Nos associations",
        "icon":"pi pi-code",
        routerLink: ['/Associations']
      },
      {
        "label":"Articles",
        "icon":"pi pi-compass",
        routerLink: ['/Articles']
      }
    ]
  }
}
