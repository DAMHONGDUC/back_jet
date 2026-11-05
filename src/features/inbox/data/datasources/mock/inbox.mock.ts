import {
  MessageAuthor,
  NotificationKind,
  type AppNotification,
  type ChatMessage,
} from '../../../domain/entities/inbox';

const HOUR = 60 * 60 * 1000;
const ago = (now: Date, hours: number) =>
  new Date(now.getTime() - hours * HOUR).toISOString();

/** Notifications about the seeded trips and wallet (see booking's bookings.mock.ts). */
export function buildMockNotifications(now: Date): AppNotification[] {
  return [
    {
      id: 'nt-1',
      kind: NotificationKind.Flight,
      title: 'Your crew for Sydney → Melbourne',
      body: 'Captain Laura Mitchell and First Officer Tom Nguyen will fly you. Boarding opens 15 minutes before departure.',
      createdAt: ago(now, 1),
      read: false,
      bookingId: 'bk-seed-1',
    },
    {
      id: 'nt-2',
      kind: NotificationKind.Offer,
      title: 'Empty leg: Melbourne → Queenstown',
      body: 'A Citation Latitude repositions on Friday. Eight seats, the whole aircraft, from $11,400.',
      createdAt: ago(now, 3),
      read: false,
    },
    {
      id: 'nt-3',
      kind: NotificationKind.Concierge,
      title: 'Sophie answered about catering',
      body: 'Your menu for the Hamilton Island round trip is confirmed: sashimi, a cheese board and Krug.',
      createdAt: ago(now, 26),
      read: true,
      bookingId: 'bk-seed-2',
    },
    {
      id: 'nt-6',
      kind: NotificationKind.Offer,
      title: 'Empty leg: Perth → Broome',
      body: 'A Challenger 350 flies north on Sunday morning. Nine seats, the whole aircraft, from $9,800, back in time for sunset at Cable Beach.',
      createdAt: ago(now, 30),
      read: true,
    },
    {
      id: 'nt-7',
      kind: NotificationKind.Flight,
      title: 'Hamilton Island round trip confirmed',
      body: 'Your Challenger 350 is booked for three, with a child seat for Oliver. We will send the crew names the day before.',
      createdAt: ago(now, 48),
      read: true,
      bookingId: 'bk-seed-2',
    },
    {
      id: 'nt-8',
      kind: NotificationKind.Concierge,
      title: 'A car for Sydney → Melbourne',
      body: 'A driver will meet you at home two hours before departure and take you straight to the private terminal.',
      createdAt: ago(now, 60),
      read: true,
      bookingId: 'bk-seed-1',
    },
    {
      id: 'nt-4',
      kind: NotificationKind.Account,
      title: 'Wallet topped up',
      body: '$40,000 was added to your Sovereign Wallet. It pays for any booking at checkout.',
      createdAt: ago(now, 72),
      read: true,
    },
    {
      id: 'nt-9',
      kind: NotificationKind.Account,
      title: 'Refund on its way',
      body: 'Your Singapore seat was cancelled and $16,200 is going back to your Visa •••• 4242. It takes three to five business days.',
      createdAt: ago(now, 24 * 5),
      read: true,
      bookingId: 'bk-seed-4',
    },
    {
      id: 'nt-10',
      kind: NotificationKind.Account,
      title: 'Your Black Card benefits for 2027',
      body: 'Free lounge suites in every city, guaranteed aircraft with 24 hours notice, and a dedicated concierge around the clock.',
      createdAt: ago(now, 24 * 7),
      read: true,
    },
    {
      id: 'nt-5',
      kind: NotificationKind.Flight,
      title: 'Welcome home from the Gold Coast',
      body: 'We hope the flight was perfect. Tell your concierge anything we could do better.',
      createdAt: ago(now, 24 * 9),
      read: true,
      bookingId: 'bk-seed-3',
    },
    {
      id: 'nt-11',
      kind: NotificationKind.Offer,
      title: 'Ski season seats are open',
      body: 'Melbourne to Queenstown every Friday from June. Skis and boards fly free, and the car waits at the stairs.',
      createdAt: ago(now, 24 * 14),
      read: true,
    },
    {
      id: 'nt-12',
      kind: NotificationKind.Account,
      title: 'Receipt for your Gold Coast charter',
      body: '$27,000 was charged to your Amex •••• 1005 for the Gulfstream G280 from Melbourne. 4.1 tonnes of carbon balanced.',
      createdAt: ago(now, 24 * 39),
      read: true,
      bookingId: 'bk-seed-3',
    },
  ];
}

export function buildMockMessages(now: Date): ChatMessage[] {
  return [
    {
      id: 'msg-1',
      author: MessageAuthor.Concierge,
      text: 'Good evening, I am Sophie, your Sovereign concierge. Anything you need before or after a flight, ask me here.',
      sentAt: ago(now, 24 * 42),
      read: true,
    },
    {
      id: 'msg-5',
      author: MessageAuthor.Member,
      text: 'Hi Sophie. We land on the Gold Coast around lunchtime on Saturday. Could someone take us to the Langham?',
      sentAt: ago(now, 24 * 42 - 1),
      read: true,
    },
    {
      id: 'msg-6',
      author: MessageAuthor.Concierge,
      text: 'Of course. A driver will be at the stairs with a sign for Reed, and your bags go in the boot before you step off.',
      sentAt: ago(now, 24 * 42 - 1.2),
      read: true,
    },
    {
      id: 'msg-7',
      author: MessageAuthor.Member,
      text: 'Perfect. Sophia is gluten free, by the way.',
      sentAt: ago(now, 24 * 41),
      read: true,
    },
    {
      id: 'msg-8',
      author: MessageAuthor.Concierge,
      text: 'Noted on her profile, so every crew will know from now on. The chef is planning a gluten-free lunch: kingfish crudo, roast chicken and a pavlova.',
      sentAt: ago(now, 24 * 41 - 0.5),
      read: true,
    },
    {
      id: 'msg-9',
      author: MessageAuthor.Member,
      text: 'Thank you, the flight was wonderful. The crew were lovely with Sophia.',
      sentAt: ago(now, 24 * 39),
      read: true,
    },
    {
      id: 'msg-10',
      author: MessageAuthor.Concierge,
      text: 'So glad to hear it. I have passed that on to Captain Hayes and the team. Where would you like to go next?',
      sentAt: ago(now, 24 * 39 - 0.3),
      read: true,
    },
    {
      id: 'msg-2',
      author: MessageAuthor.Member,
      text: 'Could we have sashimi and champagne on the Hamilton Island round trip?',
      sentAt: ago(now, 27),
      read: true,
    },
    {
      id: 'msg-3',
      author: MessageAuthor.Concierge,
      text: 'Done: sashimi from Sokyo, a cheese board and Krug Grande Cuvée, for three.',
      sentAt: ago(now, 26),
      read: false,
    },
    {
      id: 'msg-4',
      author: MessageAuthor.Concierge,
      text: 'Would you like a transfer from qualia to the aircraft on Hamilton Island? I can hold a buggy for you and your bags.',
      sentAt: ago(now, 2),
      read: false,
    },
  ];
}
