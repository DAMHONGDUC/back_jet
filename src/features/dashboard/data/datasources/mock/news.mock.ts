import type { NewsPostDto } from '../../models/news-post-dto';

const post = (
  id: string,
  title: string,
  summary: string,
  image: string,
  flags: { isDraft?: boolean; isArchived?: boolean } = {},
): NewsPostDto => ({
  id,
  isDraft: flags.isDraft ?? false,
  isArchived: flags.isArchived ?? false,
  fieldData: {
    'meta-title': title,
    summery: summary,
    'main-image': { key: image },
    ...(BODIES[id] ? { 'post-body': BODIES[id] } : {}),
  },
});

const BODIES: Record<string, string> = {
  n1: `From November, a Global 6500 leaves Sydney at 21:30 every Thursday and Sunday. Dinner is served after take-off, the cabin lights dim, and the flat beds are made up over the Red Centre.

You land at Changi at 03:15 local time, rested, with a car waiting at the steps and your bags going straight to the hotel.

Seats on the shared flight start at $8,100. Charter the whole aircraft any night of the week from the Home tab.`,
  n2: `Private terminals are built for people who would rather not wait. Arrive fifteen minutes before departure, hand your passport to the host, and walk to the aircraft while your luggage is loaded.

Security happens in a quiet room with no queue. Pets, golf bags and surfboards go with you, not to a carousel.

Every Sovereign booking includes the private terminal at both ends.`,
  n3: `Our Essendon Fields lounge opens on 1 December: six private suites with showers, a cocktail bar, and floor-to-ceiling windows over the apron.

Members can book a suite for free on the day of any departure from Melbourne, and guests are always welcome.`,
  n5: `From December to February we fly Sydney, Melbourne and Brisbane to Hamilton Island and the Gold Coast every Friday, and back every Sunday evening.

Shared seats open sixty days ahead. Book a whole aircraft for the long weekend now; summer slots on the Reef fill early.`,
  n7: `Dogs and cats of every size travel in the cabin with you on every charter, with no crate and no paperwork beyond what the state asks for.

Tell your concierge their name and the crew will bring a bed, a bowl and treats on board.`,
  n8: `Choose your menu when you book, or ask the concierge for anything at all: sashimi from Sokyo, a birthday cake, your favourite Barossa shiraz.

Our chefs work with the best kitchens at every airport we fly from, so dinner is fresh, not reheated.`,
  n9: `Queenstown is the most dramatic approach we fly: down the Kawarau valley with the Remarkables off the left wing. From June to September a Challenger 350 leaves Melbourne every Friday at 07:00 and lands in time for the first chair.

Skis, boards and boots travel free and are waiting by the car at the foot of the stairs. Your concierge can book lift passes, a heli-ski morning or a table at Amisfield.

Charter the whole aircraft for the season and keep the same crew every weekend.`,
  n10: `Empty legs are flights we have to make anyway: an aircraft heading home after dropping someone off. Instead of flying them empty, we offer them to members at up to 75 percent off.

Turn on notifications and we will tell you the moment one opens on a route you have flown. Most are listed 24 to 72 hours ahead, so they suit a flexible weekend.

You still get the whole aircraft, the private terminal and the same catering.`,
  n11: `Every Sovereign aircraft now has Starlink on board. Expect 200 Mbps from gate to gate, enough for a video call over the Tasman or a film streamed in 4K over the Indian Ocean.

There is nothing to set up: join the cabin network, accept once, and stay connected for the whole flight. It is included in every booking.`,
  n12: `Uluru has no airline that waits for you. Our sunrise charter leaves Sydney at 03:30, lands at Ayers Rock as the sky turns orange, and a guide takes you straight to the base walk.

Lunch is at Sails in the Desert, and you are home in time for dinner. Up to eight guests on a Citation Latitude, from $21,500 for the whole aircraft.`,
  n13: `Carbon from every flight you take is now balanced at no cost to you. We buy sustainable aviation fuel at Brisbane and Melbourne, and fund verified reforestation in the Daintree for the rest.

Your trip receipt shows the tonnes balanced, and your profile adds them up for the year.`,
};

export function buildMockNews(): NewsPostDto[] {
  return [
    post(
      'n1',
      'Overnight to Singapore',
      'Leave Sydney after dinner and wake up at Changi.',
      'news-1',
    ),
    post(
      'n2',
      'Skip the terminal',
      'Arrive fifteen minutes before wheels up and walk straight to the stairs.',
      'news-2',
    ),
    post(
      'n3',
      'Our new Essendon Fields lounge',
      'Private suites, a cocktail bar and a view of the apron.',
      'news-3',
    ),
    post('n4', 'Draft: winter schedule', 'Not ready yet.', 'news-4', {
      isDraft: true,
    }),
    post(
      'n5',
      'Summer on the Reef',
      'Hamilton Island and the Gold Coast every weekend this summer.',
      'news-4',
    ),
    post('n6', 'Archived: 2025 recap', 'Last year in numbers.', 'news-1', {
      isArchived: true,
    }),
    post(
      'n7',
      'Flying with your pets',
      'Cabins that welcome dogs and cats of every size.',
      'news-5',
    ),
    post(
      'n8',
      'Catering by request',
      'Tell us your menu; the chef meets you on board.',
      'news-6',
    ),
    post(
      'n9',
      'Ski season in Queenstown',
      'Melbourne to the Remarkables every Friday, skis in the hold.',
      'jet-31',
    ),
    post(
      'n10',
      'Empty legs, up to 75% off',
      'The whole aircraft on flights that would otherwise fly empty.',
      'jet-44',
    ),
    post(
      'n11',
      'Starlink on every aircraft',
      'Gate-to-gate Wi-Fi fast enough for video calls over the ocean.',
      'cabin-3',
    ),
    post(
      'n12',
      'Sunrise at Uluru',
      'Leave Sydney before dawn, watch the rock turn red, home for dinner.',
      'jet-27',
    ),
    post(
      'n13',
      'Every flight, carbon balanced',
      'Sustainable fuel and Daintree reforestation, included in every fare.',
      'jet-50',
    ),
  ];
}
