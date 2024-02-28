import * as fs from 'fs';

import { IDrone } from '../types/IDrone';
import { ILocation } from '../types/ILocation';

export function parseInputFile(inputFilePath: string): { drones: IDrone[], locations: ILocation[] } {
  const input: string[] = fs.readFileSync(inputFilePath, 'utf-8').split('\n').map(line => line.trim());
  const drones: IDrone[] = [];
  const locations: ILocation[] = [];

  const droneInfo: string[] = input[0].split(',').map(item => item.trim());

  for (let i = 0; i < droneInfo.length; i += 2) {
    drones.push({ 
      name: droneInfo[i], 
      maxWeight: parseInt(droneInfo[i + 1].substring(1, droneInfo[i + 1].length - 1)), 
      currentWeight: 0,
    });
  }

  for (let i = 1; i < input.length; i++) {
      const [location, weight] = input[i].split(',').map(item => item.trim());
      const parsedWeight = weight.substring(1, weight.length - 1);
      locations.push({
        name: location,
        packageWeight: parseInt(parsedWeight),
      });
  }
  return { drones, locations };
}