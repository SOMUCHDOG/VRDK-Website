//import { FileDropDirective } from './../file-drop.directive';
import { Component, ViewChild } from '@angular/core';
import { UploadService } from './../upload.service';
import { Upload } from './../upload';
import * as _ from "lodash";
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage {

  @ViewChild(MultiFileUploadComponent, _) fileField: MultiFileUploadComponent;
    // name = 'Angular 5';
    // files: FileDropDirective[] = [];
  
    // filesDropped(files: FileDropDirective[]): void {
    //   this.files = files;
    // }

    upload(): void {
       //get image upload file obj;
       console.log("upload files");
       let files = this.fileField.getFiles();
       console.log(files);
   
       let formData = new FormData();
       formData.append('somekey', 'some value') // Add any other data you want to send
   
       files.forEach((file) => {
         formData.append('files[]', file.rawFile, file.name);
       });
    }
    

  currentUpload: Upload;
  dropzoneActive: boolean = false;

  constructor(private upSvc: UploadService) { }

  dropzoneState($event: boolean) {
    this.dropzoneActive = $event;
    console.log("please");
  }

  handleDrop(fileList) {

    let filesIndex = _.range(fileList.length)

    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(fileList[idx]);
      this.upSvc.pushUpload(this.currentUpload)}
      )
  }
}

