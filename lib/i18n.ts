export type Locale = "uk" | "en"

export const LOCALES: Locale[] = ["uk", "en"]

const uk = {
  common: {
    and: "та",
  },
  nav: {
    aria: "Навігація по сторінці",
    goTo: "Перейти до",
    hero: "Головна",
    invitation: "Запрошення",
    date: "Дата",
    location: "Локація",
    program: "Програма",
    dressCode: "Дрес-код",
    rsvp: "RSVP",
  },
  splash: {
    subtitle: "Весільне запрошення",
    open: "Відкрити запрошення",
    musicOn: "Вимкнути музику",
    musicOff: "Увімкнути музику",
  },
  languageSwitcher: {
    aria: "Змінити мову",
  },
  hero: {
    aria: "Головний екран весільного запрошення",
    name1: "Віталій",
    name2: "Тетяна",
    date: "11 · 07 · 2026  ·  ЛЬВІВ",
  },
  invitation: {
    kicker: "запрошення",
    title: "Дорогі гості!",
    photoAlt: "Пара тримається за руки",
    p1: "У нашому житті настає особливий день — день, коли ми станемо сім\u2019єю.",
    p2: "Ми щиро хочемо розділити цю радість разом із вами та зробити цей день теплим, щирим і незабутнім.",
  },
  story: {
    kicker: "збережіть дату",
    month: "липня",
    titleL1: "В цей день починається",
    titleL2: "наше назавжди",
    days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    aria: "Календар на липень 2026 року, де 11 число виділено як день весілля",
  },
  location: {
    kicker: "де ми зустрінемось",
    title: "Локація",
    venue: "Явір Резорт",
    desc: "Церемонія відбудеться в церкві Святої Анни у Львові, а святкування продовжиться в Явір Резорт.",
    mapTitle: "Маршрут на Google Maps до Yavir Resort",
  },
  program: {
    kicker: "розклад дня",
    title: "Програма",
    items: [
      {
        time: "11:30",
        title: "Шлюб",
        details: "Церква Святої Анни, вул. Городоцька, 32",
      },
      { time: "14:00", title: "Прибуття гостей до локації", details: "" },
      { time: "15:30", title: "Церемонія", details: "" },
      { time: "16:00", title: "Святковий банкет", details: "" },
      { time: "19:00", title: "Весільний торт", details: "" },
    ],
  },
  dressCode: {
    kicker: "палітра вечора",
    title: "Дрес-код",
    desc: "Ми будемо вдячні, якщо ви підтримаєте атмосферу свята та оберете вбрання у відповідній кольоровій гамі",
    colors: [
      "небесний",
      "темно-синій",
      "теплий брунатний",
      "шавлія",
      "слонова кість",
    ],
  },
  gifts: {
    kicker: "про подарунки",
    title: "Наші побажання",
    p1: "Для нас найважливіше — це розділити з вами радість нашого дня.",
    p2: "Якщо ви хочете нас підтримати, будемо раді грошовому подарунку, який допоможе здійснити наші спільні мрії.",
  },
  transfer: {
    kicker: "туди і назад",
    title: "Трансфер",
    desc: "Буде організовано трансфер від церкви Святої Анни до ресторану та назад до Львова після святкування.",
  },
  accommodation: {
    kicker: "залишайтесь з нами",
    title: "Проживання",
    intro:
      "У Yavir Resort для гостей весілля доступні три типи номерів. Сніданок включено у вартість.",
    porovinyNote:
      "Поправини відбудуться наступного дня на тій самій локації в заздалегідь заброньованій альтанці.",
    rooms: [
      { title: "Двомісний номер", capacity: "на 2 особи" },
      { title: "Тримісний номер", capacity: "на 3 особи" },
      { title: "Окремий будиночок", capacity: "на 6 осіб" },
    ],
    available: "вільно",
    soldOut: "немає",
    perNight: "/ ніч",
    breakfast: "Сніданок включено",
    howToBook: "як забронювати",
    bookingSteps: [
      "Зателефонуйте за номером нижче.",
      "Скажіть, що ви гість на весілля родини Когутів.",
      "Назвіть бажаний тип номера та дати проживання.",
    ],
  },
  rsvp: {
    title: "Ваша відповідь",
    subtitle:
      "Будь ласка, заповніть одну форму на особу, пару або сім\u2019ю.",
    deadlineNote:
      "Вам не обов\u2019язково відповідати зараз, якщо ви ще не впевнені, що зможете бути присутніми. Просимо повідомити нас не пізніше ніж за 4 тижні до події.",
    reminder: {
      button: "Додати нагадування в календар",
      popoverTitle: "Оберіть календар",
      popoverDescription: "Збережіть дату, щоб не забути відповісти.",
      google: "Google Calendar",
      ics: "Apple, Outlook (.ics)",
      eventTitle: "Відповісти на весілля Віталія та Тетяни",
      eventDetails:
        "Нагадування підтвердити присутність на весіллі 11 липня 2026 року.",
    },
    partyType: {
      label: "Хто відповідає",
      single: { title: "Одна особа", description: "сам / сама" },
      couple: { title: "Пара", description: "двоє" },
      family: { title: "Сім\u2019я", description: "з дітьми" },
    },
    nameLabel: "Імена та прізвища",
    nameLabelSingle: "Ім\u2019я та прізвище",
    namePlaceholder: "Наприклад, Іван Когут та Марія Ковальчук",
    namePlaceholderSingle: "Наприклад, Іван Когут",
    adults: "Кількість дорослих",
    children: "Кількість дітей",
    attending: "Ми будемо присутні",
    hotelBooking: "Ми будемо бронювати номер у готелі",
    transferNeeded: "Нам потрібен трансфер",
    attendingChurch: "Ми будемо присутні на церковній церемонії",
    roomType: "Тип номера",
    roomOptions: [
      { value: "double", title: "Двомісний", capacity: "на 2 особи" },
      { value: "triple", title: "Тримісний", capacity: "на 3 особи" },
      { value: "house", title: "Будиночок", capacity: "на 6 осіб" },
    ],
    submit: "Надіслати",
    submitting: "Надсилаємо...",
    footerNote: "Однієї відповіді на одне запрошення достатньо",
    errors: {
      duplicate: "Відповідь від цієї сім\u2019ї вже була надіслана.",
      rateLimit: "Забагато запитів. Зачекайте хвилину та спробуйте знову.",
      validation: "Некоректні дані.",
      surnameInvalid: "Некоректне прізвище.",
      generic: "Щось пішло не так. Спробуйте ще раз.",
    },
    success: "Дякуємо. Ваша відповідь успішно передана.",
  },
  footer: {
    outro: "З любов\u2019ю та вдячністю",
    date: "11 липня 2026 · Львів",
  },
}

export type Dict = typeof uk

const en: Dict = {
  common: {
    and: "and",
  },
  nav: {
    aria: "Page navigation",
    goTo: "Go to",
    hero: "Home",
    invitation: "Invitation",
    date: "Date",
    location: "Location",
    program: "Program",
    dressCode: "Dress code",
    rsvp: "RSVP",
  },
  splash: {
    subtitle: "Wedding invitation",
    open: "Open invitation",
    musicOn: "Mute music",
    musicOff: "Play music",
  },
  languageSwitcher: {
    aria: "Change language",
  },
  hero: {
    aria: "Wedding invitation hero",
    name1: "Vitalii",
    name2: "Tetiana",
    date: "11 · 07 · 2026  ·  LVIV",
  },
  invitation: {
    kicker: "invitation",
    title: "Dear guests!",
    photoAlt: "A couple holding hands",
    p1: "A very special day is coming into our lives \u2014 the day we become a family.",
    p2: "We truly want to share this joy with you and make this day warm, heartfelt, and unforgettable.",
  },
  story: {
    kicker: "save the date",
    month: "July",
    titleL1: "On this day begins",
    titleL2: "our forever",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    aria: "Calendar for July 2026 with the 11th highlighted as our wedding day",
  },
  location: {
    kicker: "where we\u2019ll meet",
    title: "Location",
    venue: "Yavir Resort",
    desc: "The ceremony will be held at Saint Anne\u2019s Church in Lviv, and the celebration will continue at Yavir Resort.",
    mapTitle: "Google Maps directions to Yavir Resort",
  },
  program: {
    kicker: "the day\u2019s schedule",
    title: "Program",
    items: [
      {
        time: "11:30",
        title: "Wedding ceremony",
        details: "Saint Anne\u2019s Church, 32 Horodotska St.",
      },
      { time: "14:00", title: "Guests arrive at the venue", details: "" },
      { time: "15:30", title: "Ceremony", details: "" },
      { time: "16:00", title: "Reception", details: "" },
      { time: "19:00", title: "Wedding cake", details: "" },
    ],
  },
  dressCode: {
    kicker: "palette of the evening",
    title: "Dress code",
    desc: "We\u2019d love for you to share the mood of the evening with attire in our colour palette.",
    colors: ["sky", "deep blue", "warm brown", "sage", "ivory"],
  },
  gifts: {
    kicker: "about gifts",
    title: "Our wishes",
    p1: "What matters most to us is sharing the joy of this day with you.",
    p2: "If you\u2019d like to support us, a monetary gift that helps bring our shared dreams to life would mean the world.",
  },
  transfer: {
    kicker: "there and back",
    title: "Transfer",
    desc: "We\u2019ll arrange a transfer from Saint Anne\u2019s Church to the venue, and back to Lviv after the celebration.",
  },
  accommodation: {
    kicker: "stay with us",
    title: "Accommodation",
    intro:
      "Three room types are available for wedding guests at Yavir Resort. Breakfast is included.",
    porovinyNote:
      "The day-after gathering will take place at the same venue, in a gazebo booked in advance.",
    rooms: [
      { title: "Double room", capacity: "for 2 guests" },
      { title: "Triple room", capacity: "for 3 guests" },
      { title: "Private cottage", capacity: "for 6 guests" },
    ],
    available: "available",
    soldOut: "sold out",
    perNight: "/ night",
    breakfast: "Breakfast included",
    howToBook: "how to book",
    bookingSteps: [
      "Call the number below.",
      "Mention that you\u2019re a guest at the Kohut family wedding.",
      "Name the room type and dates you\u2019d like to book.",
    ],
  },
  rsvp: {
    title: "Your response",
    subtitle: "Please fill out one form per person, couple, or family.",
    deadlineNote:
      "You don\u2019t have to reply right away if you\u2019re still unsure you can attend. Please let us know no later than 4 weeks before the event.",
    reminder: {
      button: "Add reminder to calendar",
      popoverTitle: "Choose calendar",
      popoverDescription: "Save the date so you don\u2019t forget to reply.",
      google: "Google Calendar",
      ics: "Apple, Outlook (.ics)",
      eventTitle: "RSVP to Vitalii & Tetiana\u2019s wedding",
      eventDetails:
        "Reminder to confirm attendance at the wedding on July 11, 2026.",
    },
    partyType: {
      label: "Who is replying",
      single: { title: "Single", description: "just me" },
      couple: { title: "Couple", description: "the two of us" },
      family: { title: "Family", description: "with children" },
    },
    nameLabel: "Names and surnames",
    nameLabelSingle: "Name and surname",
    namePlaceholder: "E.g., Ivan Kohut and Mariia Kovalchuk",
    namePlaceholderSingle: "E.g., Ivan Kohut",
    adults: "Adults",
    children: "Children",
    attending: "We\u2019ll be there",
    hotelBooking: "We\u2019ll book a room at the hotel",
    transferNeeded: "We need a transfer",
    attendingChurch: "We\u2019ll attend the church ceremony",
    roomType: "Room type",
    roomOptions: [
      { value: "double", title: "Double", capacity: "for 2" },
      { value: "triple", title: "Triple", capacity: "for 3" },
      { value: "house", title: "Cottage", capacity: "for 6" },
    ],
    submit: "Send",
    submitting: "Sending\u2026",
    footerNote: "One response per invitation is enough",
    errors: {
      duplicate: "A response from this family has already been submitted.",
      rateLimit: "Too many requests. Please wait a minute and try again.",
      validation: "Invalid data.",
      surnameInvalid: "Invalid name.",
      generic: "Something went wrong. Please try again.",
    },
    success: "Thank you. Your response has been submitted successfully.",
  },
  footer: {
    outro: "With love and gratitude",
    date: "July 11, 2026 · Lviv",
  },
}

export const translations: Record<Locale, Dict> = { uk, en }
