https://github.com/johnmogi/angular/tree/main/doc

0. ng new app --strict=false
0. add mat support later from laptop:
ng add @angular/material

0. simple layout:
ng g c layouts/layout --skip-tests;
ng g c layouts/header --skip-tests;
ng g c layouts/footer --skip-tests;
ng g c pages/home --skip-tests;
ng g c pages/items --skip-tests;
ng g c pages/item --skip-tests;


0. package.json: ng s -o --hmr -port 4600
0. routing:
const routes: Routes = [ { path: "home", component: HomeComponent }, { path: "products", component: ProductsComponent }, { path: "about", component: AboutComponent }, { path: "", redirectTo: "/home", pathMatch: "full" }, // full = exact { path: "**", component: PageNotFoundComponent } ];
<router-outlet></router-outlet>
<a routerLink="/home" routerLinkActive="active"
[routerLinkActiveOptions]="{exact: true}">Home</a>
|
<a routerLink="/items" >Items</a>







0. edit tsconfig at project root:
"compilerOptions": {
"strictPropertyInitialization": false,

0. property bind:
<button [disabled]="!checkStat">log</button>

0. ngModel - import Formsmodule 2way bind

0. http:
mkdir src/app/models;
touch item.ts
export class ItemModel { 
    public constructor( 
        public _id?:string,
        public name?:string,
        public price?:number,
        public imageFile?:string | File ){} }

0. ng g s services/item --skip-tests;

0. add  HttpClient, Observable:
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
export class ItemsComponent implements OnInit {
  public myApi = 'http://localhost:3000/api/'; 
  constructor(private http: HttpClient){}
  public getAllItems(): Observable<ItemModel[]> { 
    return this.http.get<ItemModel[]>(this.myApi + "items"); }

0. itemsComponent consume api:
export class ItemsComponent implements OnInit {
  public items: ItemModel[] 
  constructor(private itemService: ItemService) { }
  ngOnInit() { 
    this.itemService.getAllItems().subscribe(
       (items) => (this.items = items, 
        console.log(this.items)), 
        (err) => alert(err.message)); 
      }

0. 