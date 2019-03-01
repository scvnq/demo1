import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@IonicPage()
@NgModule({
    declarations: [
      TabsPage
    ],
    imports: [
      IonicPageModule.forChild(TabsPage),
    ],
    exports: [
      TabsPage
    ]
  })
  export class TabsPageModule {}