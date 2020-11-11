import { CandidatesService } from './services/candidates.service';
import { SearchComponent } from './components/search/search.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileService } from './services/user-profile.service';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { MatListModule } from '@angular/material/list';
import { NewNavComponent } from './new-nav/new-nav.component';
import { MainLayComponent } from './main-lay/main-lay.component';
import { GridComponent } from './grid/grid.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';


 import {UserModule} from './components/user/user.module';

 import { AppRoutes } from './app-routing.module';
import { AccountComponent } from './account/account.component';
import { ChartsModule, Label, MultiDataSet } from 'ng2-charts';
import { SettingsComponent } from './settings/settings.component';
import { ChartType } from 'chart.js';
import { PeoplePickerComponent } from './people-picker/people-picker.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EditModalComponent } from './edit-modal/edit-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NewNavComponent,
    MainLayComponent,
    GridComponent, AccountComponent, SettingsComponent, PeoplePickerComponent, ProgressBarComponent, EditModalComponent
   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatExpansionModule,MatMenuModule,
    MatListModule,FormsModule, MatGridListModule, MatCardModule,AppRoutes, UserModule,
    ChartsModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
    // ,ChartType,Label,MultiDataSet
  ],
  providers: [UserProfileService,CandidatesService],
  bootstrap: [AppComponent,NewNavComponent,SearchComponent,GridComponent,SettingsComponent,AccountComponent
  ]
})
export class AppModule { }




