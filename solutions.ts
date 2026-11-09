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

interface ICourse {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: ICourse[],
  minStudents: number,
): ICourse[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  try {
    if (age < 18) {
      throw new Error("Access Denied: Must be 18 or older");
    }
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    return "Access Granted";
  } catch (error) {
    return error instanceof Error ? `Error: ${error.message}` : "";
  }
};
