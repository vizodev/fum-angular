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
export class TeamService {
  constructor(private firestore: Firestore) {}

  getTeams() {
    const ref = collection(this.firestore, '/fum/entities/teams');
    return collectionData(ref).pipe(
      map((snap: DocumentData) => (!snap ? [] : (snap as any)))
    );
  }

  getTeam(teamId: string) {
    const ref = doc(this.firestore, `/fum/entities/teams/${teamId}`);
    return docData(ref).pipe(map((snap: DocumentData) => snap as any));
  }
}
