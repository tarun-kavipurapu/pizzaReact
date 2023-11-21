import axios from "axios";

interface Coordinates {
  lat: number;
  lng: number;
}

interface LocationInfo {
  // Define the structure of the location information here
  // For example:
  city: string;
  country: string;
  // Add more properties as needed
}

export const apiGeoCoding = async ({
  lat,
  lng,
}: Coordinates): Promise<LocationInfo | null> => {
  try {
    const response = await axios.get(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    if (response.status === 200) {
      const data: LocationInfo = response.data; // Replace with the actual structure of location information
      return data;
    }
    return null;
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
};
