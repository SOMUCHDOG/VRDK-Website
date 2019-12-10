import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, ViewChild } from '@angular/core';
import { Upload } from './upload';
import { AngularFireDatabase } from 'angularfire2/database';

import * as firebase from 'firebase';

@Injectable({

  providedIn: 'root'
})
export class UploadService {

  constructor(private db: AngularFireDatabase){ }

  pushUpload(upload: Upload, idx) { 

    console.log("pushingUpload:", upload);

    console.log("idx:", idx);
    let storageRef = firebase.storage().ref();
    console.log("StorageRef:",storageRef);

    let uploadTask = storageRef.child('uploads/'+ upload.file.name).put(upload.file);
    console.log(uploadTask);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      //upload in progress
      upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    },
    (error) => {
      //upload failed :(
        console.log("sent file was: ", upload);
        console.log(error)
    },
    () => {
      //upload success! 
      upload.url = uploadTask.snapshot.downloadURL
      upload.name = upload.file.name
      this.saveFileData(upload)
    }
  );
}

  
  //Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list('uploads').push(upload.file);
    console.log("got: ", upload);

  }
}


