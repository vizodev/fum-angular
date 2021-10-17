import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Schema } from 'fum-models/lib';
import {
  Firestore,
  collectionData,
  collection,
  DocumentData,
  doc,
  docData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SchemasService {
  userSchema?: Schema;
  organizationSchema?: Schema;
  teamSchema?: Schema;

  loadingSchemas = true;
  error?: string;

  constructor(private firestore: Firestore) {
    const c = doc(firestore, 'fum/schemas');
    docData(c)
      .pipe(
        catchError((err) => {
          this.error = err?.message ?? err?.details ?? err?.code ?? `${err}`;
          console.error(this.error);
          return of({});
        })
      )
      .subscribe((snap: DocumentData) => {
        if (snap) {
          this.userSchema = snap.user;
          this.organizationSchema = snap.organization;
          this.teamSchema = snap.team;
          this.loadingSchemas = false;
        }
      });
  }
}
