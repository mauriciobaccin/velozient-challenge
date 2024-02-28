import { optimizeTrips } from "./src/utils/optimizeTrips";
import { parseInputFile } from "./src/utils/parseFile";
import { generateOutput } from "./src/utils/generateOutput";

function main(inputFilePath: string) {
    const { drones, locations } = parseInputFile(inputFilePath);
    const trips = optimizeTrips(drones, locations);
    generateOutput(trips);
}

main('files/Input.txt');

