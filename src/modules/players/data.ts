export interface Player {
  rank: number
  name: string
  country: string
  /** stable slug used as the watched-state key */
  id: string
  /** YouTube search URL for this player's highlights */
  youtube: string
}

// A curated all-time top 100. Rankings of this kind are subjective — this is
// a well-known consensus-style ordering, weighted toward legends and with
// plenty of Liverpool greats in the mix (Gerrard, Dalglish, Salah, ...).
const raw: Array<[number, string, string]> = [
  [1, 'Pelé', 'Brazil'],
  [2, 'Diego Maradona', 'Argentina'],
  [3, 'Lionel Messi', 'Argentina'],
  [4, 'Cristiano Ronaldo', 'Portugal'],
  [5, 'Johan Cruyff', 'Netherlands'],
  [6, 'Alfredo Di Stéfano', 'Argentina'],
  [7, 'Franz Beckenbauer', 'Germany'],
  [8, 'Ronaldo Nazário', 'Brazil'],
  [9, 'Zinedine Zidane', 'France'],
  [10, 'Ferenc Puskás', 'Hungary'],
  [11, 'George Best', 'Northern Ireland'],
  [12, 'Michel Platini', 'France'],
  [13, 'Garrincha', 'Brazil'],
  [14, 'Marco van Basten', 'Netherlands'],
  [15, 'Ronaldinho', 'Brazil'],
  [16, 'Paolo Maldini', 'Italy'],
  [17, 'Lev Yashin', 'Russia'],
  [18, 'Zico', 'Brazil'],
  [19, 'Gerd Müller', 'Germany'],
  [20, 'Bobby Charlton', 'England'],
  [21, 'Xavi Hernández', 'Spain'],
  [22, 'Andrés Iniesta', 'Spain'],
  [23, 'Eusébio', 'Portugal'],
  [24, 'Roberto Baggio', 'Italy'],
  [25, 'Romário', 'Brazil'],
  [26, 'Kaká', 'Brazil'],
  [27, 'Thierry Henry', 'France'],
  [28, 'Andrea Pirlo', 'Italy'],
  [29, 'Steven Gerrard', 'England'],
  [30, 'Kenny Dalglish', 'Scotland'],
  [31, 'Bobby Moore', 'England'],
  [32, 'Franco Baresi', 'Italy'],
  [33, 'Lothar Matthäus', 'Germany'],
  [34, 'Rivaldo', 'Brazil'],
  [35, 'Cafu', 'Brazil'],
  [36, 'Roberto Carlos', 'Brazil'],
  [37, 'Didier Drogba', 'Ivory Coast'],
  [38, 'Luís Figo', 'Portugal'],
  [39, 'Raúl González', 'Spain'],
  [40, 'Dennis Bergkamp', 'Netherlands'],
  [41, 'Ruud Gullit', 'Netherlands'],
  [42, 'Frank Rijkaard', 'Netherlands'],
  [43, 'Sócrates', 'Brazil'],
  [44, 'Gabriel Batistuta', 'Argentina'],
  [45, 'Hristo Stoichkov', 'Bulgaria'],
  [46, 'George Weah', 'Liberia'],
  [47, 'Rivelino', 'Brazil'],
  [48, 'Kylian Mbappé', 'France'],
  [49, 'Neymar', 'Brazil'],
  [50, 'Sergio Ramos', 'Spain'],
  [51, 'Iker Casillas', 'Spain'],
  [52, 'Gianluigi Buffon', 'Italy'],
  [53, 'Carles Puyol', 'Spain'],
  [54, 'Fernando Torres', 'Spain'],
  [55, 'Luis Suárez', 'Uruguay'],
  [56, 'Robert Lewandowski', 'Poland'],
  [57, 'Wayne Rooney', 'England'],
  [58, 'Frank Lampard', 'England'],
  [59, 'Paul Scholes', 'England'],
  [60, 'Ryan Giggs', 'Wales'],
  [61, 'Eric Cantona', 'France'],
  [62, 'Alan Shearer', 'England'],
  [63, 'Ian Rush', 'Wales'],
  [64, 'John Barnes', 'England'],
  [65, 'Mohamed Salah', 'Egypt'],
  [66, 'Virgil van Dijk', 'Netherlands'],
  [67, 'Sadio Mané', 'Senegal'],
  [68, 'Xabi Alonso', 'Spain'],
  [69, 'Andriy Shevchenko', 'Ukraine'],
  [70, 'Pavel Nedvěd', 'Czech Republic'],
  [71, 'Rio Ferdinand', 'England'],
  [72, 'Patrick Vieira', 'France'],
  [73, 'Clarence Seedorf', 'Netherlands'],
  [74, 'Edgar Davids', 'Netherlands'],
  [75, 'Javier Zanetti', 'Argentina'],
  [76, 'Alessandro Del Piero', 'Italy'],
  [77, 'Francesco Totti', 'Italy'],
  [78, 'David Beckham', 'England'],
  [79, 'Michael Owen', 'England'],
  [80, "Samuel Eto'o", 'Cameroon'],
  [81, 'Yaya Touré', 'Ivory Coast'],
  [82, 'Sergio Agüero', 'Argentina'],
  [83, 'Zlatan Ibrahimović', 'Sweden'],
  [84, 'Antoine Griezmann', 'France'],
  [85, 'Luka Modrić', 'Croatia'],
  [86, 'Toni Kroos', 'Germany'],
  [87, 'Manuel Neuer', 'Germany'],
  [88, 'Philipp Lahm', 'Germany'],
  [89, 'Bastian Schweinsteiger', 'Germany'],
  [90, 'Miroslav Klose', 'Germany'],
  [91, 'Diego Forlán', 'Uruguay'],
  [92, 'Carlos Valderrama', 'Colombia'],
  [93, 'Roberto Firmino', 'Brazil'],
  [94, 'Trent Alexander-Arnold', 'England'],
  [95, 'Kevin De Bruyne', 'Belgium'],
  [96, 'Eden Hazard', 'Belgium'],
  [97, 'Gareth Bale', 'Wales'],
  [98, 'Erling Haaland', 'Norway'],
  [99, 'Ruud van Nistelrooy', 'Netherlands'],
  [100, 'Jürgen Klinsmann', 'Germany'],
]

function slug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const players: Player[] = raw.map(([rank, name, country]) => ({
  rank,
  name,
  country,
  id: slug(name),
  youtube:
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(`${name} highlights goals skills`),
}))
