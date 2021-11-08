import { Injectable } from '@angular/core';
import {
  Firestore,
  DocumentData,
  doc,
  docData,
  collection,
} from '@angular/fire/firestore';
import { Organization } from 'fum-models/lib';
import { collectionData } from 'rxfire/firestore';
import { Observable } from 'rxjs';
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


    
  getUsers() {
    const ref = collection(this.firestore, '/fum/entities/users');
    return collectionData(ref).pipe(
      map((snap: DocumentData) => (!snap ? [] : (snap as any)))
    );
  }
  
  getUser(userId: string) {
    const ref = doc(this.firestore, `/fum/entities/users/4J7ODG1qj6f4bdTRpVwC56aqWJK2`);
    return docData(ref).pipe(map((snap: DocumentData) => snap as any));
  }
}
