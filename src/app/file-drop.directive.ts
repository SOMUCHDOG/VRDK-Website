import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[fileDrop]'
})
export class FileDropDirective {

  @Output() filesDropped = new EventEmitter<FileList>();
  @Output() filesHovered = new EventEmitter<boolean>();

  constructor() { }

  @HostListener('drop', ['$event'])
    onDrop($event){
      $event.preventDefault();

      let transfer = $event.dataTransfer;
      this.filesDropped.emit(transfer.files);
      this.filesHovered.emit(false); 
    }

  @HostListener('dragover', ['$event'])
    onDragOver($event){
      event.preventDefault();
      console.log("FILES ARE HOVERING");
      this.filesHovered.emit(true);
    }
  
  @HostListener('dragleave', ['$event'])
    onDragLeave($event) {
      this.filesHovered.emit(false);
     }
}
