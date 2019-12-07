import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';
import { RouterModule } from '@angular/router';

import { UploadPage } from './upload.page';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileUploadModule,
    RouterModule.forChild([
      {
        path: '',
        component: UploadPage
      }
    ]),
    UploadPageRoutingModule
  ],
  declarations: [UploadPage, MultiFileUploadComponent]
})
export class UploadPageModule {}
