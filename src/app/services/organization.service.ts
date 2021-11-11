import { Injectable } from '@angular/core';
import {
  Firestore,
  DocumentData,
  doc,
  docData,
  collection,
} from '@angular/fire/firestore';
import { collectionData } from 'rxfire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class OrganizationService {
  constructor(private firestore: Firestore) {}

  getOrganizations() {
    const ref = collection(this.firestore, '/fum/entities/organizations');
    return collectionData(ref).pipe(
      map((snap: DocumentData) => (!snap ? [] : (snap as any)))
    );
  }
  
  getOrganization(orgId: string) {
    console.log(orgId)
    const ref = doc(this.firestore, `/fum/entities/organizations/${orgId}`);
    return docData(ref).pipe(map((snap: DocumentData) => snap as any));
  }
}
