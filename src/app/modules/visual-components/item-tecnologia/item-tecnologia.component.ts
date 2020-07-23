import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tecnologia',
  templateUrl: './item-tecnologia.component.html',
  styleUrls: ['./item-tecnologia.component.css']
})
export class ItemTecnologiaComponent implements OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
