import { ITrips } from '../types/ITrips';

export function generateOutput(trips: ITrips) {
  for (const tripName in trips) {
    console.log(tripName);
    trips[tripName].forEach((trip, index) => {
      console.log(`Trip #${index+1}`);
      console.log(trip.join(', '));
    });
    console.log();
  }
}