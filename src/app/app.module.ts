import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AjoutercongComponent } from './ajoutercong/ajoutercong.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ListecongComponent } from './listecong/listecong.component'  
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import {formatDate} from '@angular/common';
import { ConsultercongComponent } from './consultercong/consultercong.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { DeletecongComponent } from './deletecong/deletecong.component';
import { TraicongComponent } from './traicong/traicong.component';
import { TraicongspecifComponent } from './traicongspecif/traicongspecif.component';
import { ConsultercongparempComponent } from './consultercongparemp/consultercongparemp.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    AjoutercongComponent,
    ListecongComponent,
    ConsultercongComponent,
    DeletecongComponent,
    TraicongComponent,
    TraicongspecifComponent,
    ConsultercongparempComponent,

    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    NgbModule,MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    
    HttpClientModule,
    MatDialogModule,
    MatExpansionModule,MatPaginatorModule,MatDatepickerModule,MatFormFieldModule,MatInputModule,MatNativeDateModule,FormsModule,
  ],
  providers:  [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
