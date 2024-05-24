import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tw-merge";
import { ZodIssue } from "zod";
import api from "./api";

export function validationErrorHandler(errors: ZodIssue[]): {
  [key: string]: string;
} {
  const newErrors: { [key: string]: string } = {};
  errors.forEach((err) => {
    const key = err.path.join(".");
    newErrors[key] = err.message;
  });
  return newErrors;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateColumns = (data: any, columnOrder: string[]) => {
  if (!data || data.length === 0) {
    return [];
  }

  const columns = columnOrder.map((key) => ({
    title: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize first letter
    dataIndex: key,
    key: key,
    width: 150,
    sorter: (a: any, b: any) => {
      // Customize sorting logic based on data type if needed
      if (typeof a[key] === "string") {
        return a[key].localeCompare(b[key]);
      } else {
        return a[key] - b[key];
      }
    },
    render: (value: any) => {
      // Customize rendering based on data type if needed
      return typeof value === "boolean" ? (value ? "Yes" : "No") : value;
    },
  }));

  return columns;
};

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await api.post("/graphql/", {
      query: `
        query MyQuery {
          allUsers {
            lastName
            isActive
            email
            firstName
            isSuperuser
          }
        }
      `,
    });
    return response.data.data.allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchCourses = async (): Promise<Course[]> => {
  try {
    const response = await api.post("/graphql/", {
      query: `
      query MyQuery {
        allCourses {
          description
          id
          name
        }
      }
      `,
    });
    return response.data.data.allCourses;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchSubjects = async (): Promise<Subject[]> => {
  try {
    const response = await api.post("/graphql/", {
      query: `
      query MyQuery {
        allProgram {
          description
          id
          name
        }
      }
      `,
    });
    return response.data.data.allProgram;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchAssets = async (): Promise<Assets[]> => {
  try {
    const response = await api.post("/graphql/", {
      query: `
      query MyQuery {
        allAsset {
          borrower
          borrowedAt
          description    
          name
          serialNumber
          status  
        }
      }
      `,
    });
    return response.data.data.allAsset;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
