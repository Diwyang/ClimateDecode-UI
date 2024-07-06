interface EventData {
  event_id?: string;
  event_type?: string;
  event_name?: string;
  event_organiser?: string;
  contact_person_name?: string;
  contact_person_email?: string;
  event_hosted_country?: string;
  event_start_date?: string;
  event_end_date?: string;
  timezone?: string;
  total_no_of_days?: number;
  venue_detail_list?: any[];
}

interface EventInfo {
  data: EventData;
}

interface VenueInfo {
  venue_id?: string;
  event_id?: string;
  energy_type?: string;
  annual_consumption?: string;
  percentage_renewable_energy?: string;
  event_period_consumption?: string;
  per_guest_consumption?: string;
  origin_type?: string;
  unit?: number;
  fuel_type?: string;
  comments?: string;
  event_date_time?: string;
  update_date_time?: string;
}

interface Venue {
  information: VenueInfo[];
  electricity: any[];
  energyOfHeating: any[];
  energyOfCooling: any[];
  otherFuelConsumption: any[];
}
