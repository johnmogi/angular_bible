https://github.com/johnmogi/angular/tree/main/doc

0. ng new app --strict=false
0. ng add @angular/material
0. material-module.ts {FullMaterialModule import into app}:
import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  exports: [
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class FullMaterialModule {}


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
1-import import { HttpClientModule } from '@angular/common/http';
to app.module.ts...
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