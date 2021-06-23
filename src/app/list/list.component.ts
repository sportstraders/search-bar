import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Item } from '../model/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  items: Item[];
  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(item: Item) {
    alert(`You clicked ${item.name} with id ${item.id}`);
  }
}
