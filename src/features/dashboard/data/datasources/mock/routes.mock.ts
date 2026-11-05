import type { PopularRouteDto } from '../../models/popular-route-dto';

const route = (
  id: string,
  [origin_iata, origin_city]: [string, string],
  [destination_iata, destination_city]: [string, string],
  duration_min: number,
  from_price: number,
  image_key: string,
): PopularRouteDto => ({
  id,
  origin_iata,
  origin_city,
  destination_iata,
  destination_city,
  duration_min,
  from_price,
  currency: 'AUD',
  image_key,
});

/** Airports the airport sheet offers, so a tapped route always fills the form. */
export function buildMockRoutes(): PopularRouteDto[] {
  return [
    route('r1', ['SYD', 'Sydney'], ['MEB', 'Melbourne'], 85, 14900, 'jet-20'),
    route(
      'r2',
      ['BNE', 'Brisbane'],
      ['HTI', 'Hamilton Island'],
      100,
      17800,
      'jet-24',
    ),
    route(
      'r3',
      ['MEB', 'Melbourne'],
      ['OOL', 'Gold Coast'],
      140,
      23600,
      'jet-7',
    ),
    route('r4', ['SYD', 'Sydney'], ['SIN', 'Singapore'], 480, 98500, 'jet-18'),
    route('r5', ['SYD', 'Sydney'], ['CBR', 'Canberra'], 40, 7900, 'jet-12'),
    route('r6', ['MEB', 'Melbourne'], ['HBA', 'Hobart'], 75, 12400, 'jet-23'),
    route('r7', ['BNE', 'Brisbane'], ['CNS', 'Cairns'], 135, 21900, 'jet-6'),
    route('r8', ['PER', 'Perth'], ['BME', 'Broome'], 150, 25800, 'jet-16'),
    route('r9', ['SYD', 'Sydney'], ['AYQ', 'Uluru'], 195, 34800, 'jet-27'),
    route(
      'r10',
      ['MEB', 'Melbourne'],
      ['ZQN', 'Queenstown'],
      215,
      38900,
      'jet-31',
    ),
    route('r11', ['BNE', 'Brisbane'], ['NAN', 'Fiji'], 260, 46500, 'jet-44'),
    route('r12', ['PER', 'Perth'], ['DPS', 'Bali'], 230, 41200, 'jet-50'),
    route('r13', ['SYD', 'Sydney'], ['HND', 'Tokyo'], 600, 132000, 'jet-14'),
  ];
}
