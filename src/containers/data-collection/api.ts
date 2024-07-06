import { apiSlice } from '../../app/api/apiSlice';

export const eventApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    saveEvent: builder.mutation({
      query: (event: EventData) => ({
        url: '/events/information',
        method: 'POST',
        body: { ...event },
      }),
    }),
    getEvents: builder.query<{ data: EventData[] }, any>({
      query: () => ({
        url: 'events/information',
      }),
    }),
    getEventById: builder.query({
      query: (id) => ({ url: `events/information/${id}` }),
    }),
    saveVenue: builder.mutation({
      query: (venue: VenueInfo) => ({
        url: `/events/${venue.event_id}/venue-details`,
        method: 'POST',
        body: { ...venue },
      }),
    }),
    getVenue: builder.query<{ data: VenueInfo[] }, any>({
      query: (eventId: string) => ({
        url: `/events/${eventId}/venue-details`,
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetEventByIdQuery,
  useSaveEventMutation,
  useGetVenueQuery,
  useSaveVenueMutation,
} = eventApiSlice;
