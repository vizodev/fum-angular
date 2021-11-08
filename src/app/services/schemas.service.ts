import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, DocumentData, doc, docData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class SchemasService {
  schema: Observable<any>;

  loadingSchemas = true;
  error?: string;

  constructor(private firestore: Firestore) {
    const ref = doc(firestore, 'fum/schemas');
    this.schema = docData(ref).pipe(map((snap: DocumentData) => snap));
  }
}
