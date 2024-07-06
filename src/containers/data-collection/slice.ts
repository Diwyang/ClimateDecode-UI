import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface Data {
  event: EventInfo;
  events: EventData[];
  transport: any;
  venue: Venue;
  food: any;
  accomodation: any;
  travel: any;
  material: any;
  waste: any;
  marketing: any;
  preparation: any;
  water: any;
  streaming: any;
}

interface InitialState {
  loading: boolean;
  data: Data;
  error: any;
  success: boolean;
}

const initialState: InitialState = {
  loading: false,
  data: {
    event: {
      data: {
        venue_detail_list: [],
      },
    },
    events: [],
    venue: {
      information: [],
      electricity: [],
      energyOfHeating: [],
      energyOfCooling: [],
      otherFuelConsumption: [],
    },
    transport: {
      organiser: [],
      subContractors: [],
      attendee: [],
    },
    food: undefined,
    accomodation: undefined,
    travel: undefined,
    material: undefined,
    waste: undefined,
    marketing: undefined,
    preparation: undefined,
    water: undefined,
    streaming: undefined,
  },
  error: null,
  success: false,
};

const eventSlice = createSlice({
  name: 'data-collection',
  initialState,
  reducers: {
    dataLoading: (state) => {
      if (!state.loading) {
        state.loading = true;
      }
    },
    eventSaved: (state, action) => {
      if (state.loading) {
        state.loading = false;
        const { event } = action.payload;
        state.data.event = event;
      }
    },
    eventReceived: (state, action) => {
      if (state.loading) {
        state.loading = false;
      }
      const events: EventData[] = action.payload;
      state.data.events = events;
    },
    venueSaved: (state, action) => {
      if (state.loading) {
        state.loading = false;
        const {
          venue,
        }: {
          venue: Venue;
        } = action.payload;
        state.data.venue = { ...state.data.venue, ...venue };
      }
    },
    venueReceived: (state, action) => {
      if (state.loading) {
        state.loading = false;
        const {
          venue,
        }: {
          venue: Venue;
        } = action.payload;
        state.data.venue = venue;
      }
    },
    setFood: (state, action) => {
      const { food } = action.payload;
      state.data.food = food;
    },
    setAccomodation: (state, action) => {
      const { accomodation } = action.payload;
      state.data.accomodation = accomodation;
    },
    setTravel: (state, action) => {
      const { travel } = action.payload;
      state.data.travel = travel;
    },
    setTransport: (state, action) => {
      const { transport, subType } = action.payload;
      state.data.transport[subType] = transport;
    },
    setMaterial: (state, action) => {
      const { material } = action.payload;
      state.data.material = material;
    },
    setWaste: (state, action) => {
      const { waste } = action.payload;
      state.data.waste = waste;
    },
    setMarketing: (state, action) => {
      const { marketing } = action.payload;
      state.data.marketing = marketing;
    },
    setPrepration: (state, action) => {
      const { preparation } = action.payload;
      state.data.preparation = preparation;
    },
    setWater: (state, action) => {
      const { water } = action.payload;
      state.data.water = water;
    },
    setStreaming: (state, action) => {
      const { streaming } = action.payload;
      state.data.streaming = streaming;
    },
  },
});

export const {
  dataLoading,
  eventSaved,
  eventReceived,
  venueReceived,
  venueSaved,
  setFood,
  setAccomodation,
  setTravel,
  setTransport,
  setMaterial,
  setWaste,
  setMarketing,
  setPrepration,
  setStreaming,
  setWater,
} = eventSlice.actions;

export default eventSlice.reducer;

export const getEvent = (state: RootState) => state.dataCollection.data.event;
export const getVenue = (
  state: RootState,
  type:
    | 'information'
    | 'electricity'
    | 'energyOfHeating'
    | 'energyOfCooling'
    | 'otherFuelConsumption'
) => state.dataCollection.data.venue[type];
export const getTransport = (
  state: RootState,
  type: 'organiser' | 'attendee' | 'subContractors'
) => state.dataCollection.data.transport[type];
