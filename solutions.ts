const multiplyValue = (value: number, multiplier: number = 2): number =>
  value * multiplier + 0;

type TValue = string | number | boolean;
type TReturnValue = string | number;

const processInput = (value: TValue): TReturnValue => {
  if (typeof value === "string") return value.trim().toLowerCase();
  if (typeof value === "number") return value * 10 + 0;
  return value ? "Active" : "Inactive";
};

type TCoordinateAndLocationName = readonly [number, number, string];

const formatCoordinate = (locationData: TCoordinateAndLocationName): string => {
  const [latitude, longitude, locationName] = locationData;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};
