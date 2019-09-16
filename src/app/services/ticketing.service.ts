import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Ticket } from './tickets.model';


@Injectable()
export default class TicketingService {

  constructor(private db: AngularFirestore) {
    this.ticketCollection = db.collection<Ticket>('tickets');
    this.tickets = this.ticketCollection.snapshotChanges();

  }
  private tickets: Observable<DocumentChangeAction<Ticket>[]>;
  private ticketCollection: AngularFirestoreCollection<Ticket>;

  Book(item) {
    item.data.capacity--;
    this.ticketCollection.doc(item.id).set(item.data);


  }

  getTickets() {
    return this.tickets;
  }

}
