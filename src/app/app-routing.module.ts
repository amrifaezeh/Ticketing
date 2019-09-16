import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './ticketing/booking/booking.component';


const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  { path: '', redirectTo: '/booking', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
