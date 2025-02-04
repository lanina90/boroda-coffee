export interface IProduct {
  id: string;
  name: string;
  roasting: string;
  taste: string;
  options: Record<string, number>;
  image?: string;
  composition: string;
}
