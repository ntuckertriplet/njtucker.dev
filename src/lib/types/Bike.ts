import { Geometry } from "./Geometry";

export type Bike = {
  manufacturer: string;
  model: string;
  year: number;
  sizes: Geometry[];
};
