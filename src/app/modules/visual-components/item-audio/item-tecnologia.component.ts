import { Component, OnInit, Input } from '@angular/core';
import { ItemTemplate } from '../item.interface';

@Component({
  selector: 'app-item-tecnologia',
  templateUrl: './item-tecnologia.component.html',
  styleUrls: ['./item-tecnologia.component.css']
})
export class ItemAudioComponent implements OnInit, ItemTemplate {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
