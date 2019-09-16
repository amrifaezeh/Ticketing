import { Component, OnInit } from '@angular/core';
import TicketingService from '../../services/ticketing.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  loading = true;
  items = [];
  constructor(private ticketService: TicketingService) {

   }

  ngOnInit() {
    this.ticketService.getTickets().subscribe((_) => {

      this.items = _.map(x => ({data: x.payload.doc.data(), id: x.payload.doc.id }));

      this.loading = false;
    });
  }

  onBooking(id) {
    console.log(id);
    this.ticketService.Book(this.items.find(_ => _.id === id));
    return false;
  }

}
