import { Countries } from "src/data/countries";
import { ICountry } from "src/models/ICountry";

export const searchQuery = (query: string): ICountry[] => {
  return Countries.filter(country => {
    const term = query.toLowerCase();
    return country.name.toLowerCase().includes(term)
  });
}