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

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};
