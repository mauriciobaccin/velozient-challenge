import { IDrone } from "../types/IDrone";
import { ILocation } from "../types/ILocation";
import { ITrips } from "../types/ITrips";

export function optimizeTrips(drones: IDrone[], locations: ILocation[]): ITrips {
  const undeliveredLocations = [...locations];
  const trips: ITrips = drones.reduce(
    (acc, cur) => ({...acc, [cur.name]: []}),
    {}
  );

  while(undeliveredLocations.length > 0) {
    drones.forEach(drone => {
      let remainingWeight = drone.maxWeight;
      const newTrips: string[] = [];

      undeliveredLocations.every((location, index) => {
        if (location.packageWeight <= remainingWeight) {
          newTrips.push(location.name);
          remainingWeight -= location.packageWeight;
          undeliveredLocations.splice(index, 1);
        } else {
          return true;
        }
      });

      trips[drone.name].push(newTrips);
    })
  }
  return trips;
}
