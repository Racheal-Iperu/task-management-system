import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-role-upgrade',
  templateUrl: './role-upgrade.component.html',
  styleUrls: ['./role-upgrade.component.css']
})
export class RoleUpgradeComponent implements OnInit , AfterViewInit{
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder,private el: ElementRef, private renderer: Renderer2) { }
roles = [{
  id: 3,
  name: "Transport",
  cost: 500,
  icon:"./assets/transporte.svg"
},
  {
    id: 2,
    name: "allevatore Hobbista",
    cost: 500,
    icon:"./assets/allevatore Hobbista.svg"
  },{
    id: 4,
    name: "allevatore hobbista pro",
    cost: 500,
    icon:"./assets/allevatore hobbista pro.svg"
  },{
    id: 5,
    name: "agronomo",
    cost: 500,
    icon:"./assets/agronomo.svg"
  },{
    id: 6,
    name: "veterinario",
    cost: 500,
    icon:"./assets/veterinario.svg"
  },
  {
    id: 1,
    name: "allevatore Hobbista",
    cost: 500,
    icon:"./assets/utente base.svg"
  }]
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      username: [''],
      indrizzi: ['',],
      province: ['',[Validators.required]],
      cognome: ['',[Validators.required]],
      dateOfBirth: [""],
      CAP: [""],
      city: [""],
      description: [""],
      state: [null, [Validators.required]]
    });
  }


  ngAfterViewInit() {
    const contents = this.el.nativeElement.querySelectorAll('.mat-content');
    contents.forEach((content: HTMLElement) => {
      this.renderer.setStyle(content, 'overflow', 'visible');
    });
  }
}
