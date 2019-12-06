import { Component, OnInit } from '@angular/core';
import { FileHandle } from './dragDrop.directive';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage {

    name = 'Angular 5';
    files: FileHandle[] = [];
  
    filesDropped(files: FileHandle[]): void {
      this.files = files;
    }
  
    upload(): void {
      //get image upload file obj;
    }
}

