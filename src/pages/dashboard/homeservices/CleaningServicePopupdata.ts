// cleaningServicesPopupData.ts
import generalcleaning from "../../../assets/HomeServices/HomeCleaning/GeneralHome.jpg";
import plumbing from "../../../assets/HomeServices/HomeCleaning/Leak repairs.jpg";
import painting from "../../../assets/HomeServices/HomeCleaning/painting.jpg";      
import electrican from "../../../assets/HomeServices/HomeCleaning/Electrian.jpg";
import kitchen from "../../../assets/HomeServices/HomeCleaning/kitchen cleaning.jpg";
import acrepair from "../../../assets/HomeServices/HomeCleaning/Acrepair.jpg";
import carpentary from "../../../assets/HomeServices/HomeCleaning/Custom furniture making.jpg";
import tilesfloorrepair from "../../../assets/HomeServices/HomeCleaning/tiles.jpg";
import car from "../../../assets/HomeServices/VehicleCleaning/car.jpg"
import bikes from "../../../assets/HomeServices/VehicleCleaning/bikes.jpg"
import office from "../../../assets/HomeServices/CommercialCleaning/office.jpg"
import pool from "../../../assets/HomeServices/CommercialCleaning/pool.jpg"
import residential from "../../../assets/HomeServices/CommercialCleaning/residential.jpg"
import villa from "../../../assets/HomeServices/CommercialCleaning/villa.jpg"

export interface CleaningSubService {
  title: string;
  description: string;
  image: string;
 
}

export interface CleaningServicePopup {
  mainTitle: string;
  subServices: CleaningSubService[];
}

export const cleaningServicesPopupData = {
  "Home Cleaning": {
    mainTitle: "Home Cleaning",
    subServices: [
      {
        title: "Cleaning",
        description:
          "General Home",
        image: generalcleaning,
   
      },
      {
        title: "Plumbing",
        description:
          "Repairs & Fixes",
        image: plumbing,
  
      },
       {
        title: "Painting",
        description:
          "Walls & Decor",
        image: painting,
   
      },
       {
        title: "Electrian",
        description:
          "Wiring & Installation",
        image: electrican,
        
      },
       {
        title: "Kitchen",
        description:
          "Deep Cleaning",
        image: kitchen,
       
      },
       {
        title: "AC Repair",
        description:
          "Service & Gas",
        image: acrepair,
      
      },
       {
        title: "Carpentary",
        description:
          "Furniture Work",
        image: carpentary,
    
      },
       {
        title: "Tiles/Floor Repair",
        description:
          "Restoration",
        image: tilesfloorrepair,
       
      },
      
    ],
  },

  "Commercial Cleaning": {
    mainTitle: "Commercial Cleaning",
    subServices: [
        {
        title: "Residential",
        description:
          "Full House",
        image: residential,
       
      },
        {
        title: "Villa Cleaning",
        description:
          "Large Properties",
        image: villa,
       
      },
      {
        title: "Office Cleaning",
        description:
          "Workspaces",
        image: office,
       
      },
     
       {
        title: "Pool Cleaning",
        description:
          "Maintaince",
        image: pool,
       
      },
     
      
    ],
  },

  "Vehicle Cleaning": {
    mainTitle: "Vehicle Cleaning",
    subServices: [
        {
        title: "Bike Cleaning",
        description:
          "Two Wheelers Services",
        image: bikes,
       
      },
      {
        title: "Car Cleaning",
        description:
          "Interior & Exterior",
        image: car,
       
      },
    
    ],
  },
} satisfies Record<string, CleaningServicePopup>;


export type CleaningServiceKey = keyof typeof cleaningServicesPopupData;

