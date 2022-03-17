import { Component, OnInit } from '@angular/core';
import { ItemModel } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {
  public items: ItemModel[]
  // constructor(private itemService: ItemService) { }

  ngOnInit() {
  //   this.itemService.getAllItems().subscribe(
  //     (items) => (this.items = items,
  //       console.log(this.items)),
  //     (err) => alert(err.message));
  }

}
