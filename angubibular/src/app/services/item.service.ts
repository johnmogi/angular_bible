import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemModel } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public myApi = 'http://localhost:3000/api/';
  constructor(private http: HttpClient) { }
  public getAllItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(this.myApi + "items");
  }

}
