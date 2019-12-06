import { FileDropDirective } from './../file-drop.directive';
import { Component } from '@angular/core';
import { UploadService } from './../upload.service';
import { Upload } from './../upload';
import * as _ from "lodash";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage {

    name = 'Angular 5';
    files: FileDropDirective[] = [];
  
    filesDropped(files: FileDropDirective[]): void {
      this.files = files;
    }

    upload(): void {
      //get image upload file obj;
    }
    

  currentUpload: Upload;
  dropzoneActive: boolean = false;

  constructor(private upSvc: UploadService) { }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
  }

  handleDrop(fileList) {

    let filesIndex = _.range(fileList.length)

    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
      )
  }
}

