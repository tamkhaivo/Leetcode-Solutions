function carPackageTransfer(cars, packetTransfers) {
  const carsInTransit = new Set(cars);

  for (const [fromCar, toCar] of packetTransfers) {
    if (carsInTransit.has(fromCar)) {
      return `ERROR: Car ${fromCar} does not Contain a Packet to Transfer`;
    }
    if (fromCar != toCar && carsInTransit.has(toCar)) {
      return `ERROR: Car ${toCar} is already in Transit!`;
    }
    carsInTransit.delete(fromCar);
    carsInTransit.add(toCar);
  }
  return Array.from(carsInTransit).sort((a, b) => a - b);
}
