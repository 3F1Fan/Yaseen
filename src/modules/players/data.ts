export interface Player {
  rank: number
  name: string
  country: string
  /** approximate peak years of their career */
  peak: string
  /** stable slug used as the watched-state key */
  id: string
  /** YouTube search URL for this player's highlights */
  youtube: string
}

// A curated all-time top 100. Rankings of this kind are subjective — this is
// a well-known consensus-style ordering, weighted toward legends and with
// plenty of Liverpool greats in the mix (Gerrard, Dalglish, Salah, ...).
// Peak years are approximate (the seasons a player was at their very best).
const raw: Array<[number, string, string, string]> = [
  [1, 'Pelé', 'Brazil', '1958-1970'],
  [2, 'Diego Maradona', 'Argentina', '1984-1990'],
  [3, 'Lionel Messi', 'Argentina', '2009-2019'],
  [4, 'Cristiano Ronaldo', 'Portugal', '2007-2018'],
  [5, 'Johan Cruyff', 'Netherlands', '1971-1976'],
  [6, 'Alfredo Di Stéfano', 'Argentina', '1953-1960'],
  [7, 'Franz Beckenbauer', 'Germany', '1971-1976'],
  [8, 'Ronaldo Nazário', 'Brazil', '1996-2002'],
  [9, 'Zinedine Zidane', 'France', '1998-2006'],
  [10, 'Ferenc Puskás', 'Hungary', '1950-1960'],
  [11, 'George Best', 'Northern Ireland', '1966-1972'],
  [12, 'Michel Platini', 'France', '1982-1987'],
  [13, 'Garrincha', 'Brazil', '1958-1962'],
  [14, 'Marco van Basten', 'Netherlands', '1987-1992'],
  [15, 'Ronaldinho', 'Brazil', '2004-2007'],
  [16, 'Paolo Maldini', 'Italy', '1990-2005'],
  [17, 'Lev Yashin', 'Russia', '1960-1966'],
  [18, 'Zico', 'Brazil', '1978-1986'],
  [19, 'Gerd Müller', 'Germany', '1970-1976'],
  [20, 'Bobby Charlton', 'England', '1960-1970'],
  [21, 'Xavi Hernández', 'Spain', '2008-2015'],
  [22, 'Andrés Iniesta', 'Spain', '2009-2015'],
  [23, 'Eusébio', 'Portugal', '1961-1968'],
  [24, 'Roberto Baggio', 'Italy', '1990-1995'],
  [25, 'Romário', 'Brazil', '1988-1997'],
  [26, 'Kaká', 'Brazil', '2004-2009'],
  [27, 'Thierry Henry', 'France', '2002-2006'],
  [28, 'Andrea Pirlo', 'Italy', '2004-2012'],
  [29, 'Steven Gerrard', 'England', '2005-2009'],
  [30, 'Kenny Dalglish', 'Scotland', '1977-1985'],
  [31, 'Bobby Moore', 'England', '1964-1970'],
  [32, 'Franco Baresi', 'Italy', '1988-1994'],
  [33, 'Lothar Matthäus', 'Germany', '1986-1994'],
  [34, 'Rivaldo', 'Brazil', '1998-2002'],
  [35, 'Cafu', 'Brazil', '1996-2006'],
  [36, 'Roberto Carlos', 'Brazil', '1997-2005'],
  [37, 'Didier Drogba', 'Ivory Coast', '2006-2012'],
  [38, 'Luís Figo', 'Portugal', '1998-2003'],
  [39, 'Raúl González', 'Spain', '1998-2004'],
  [40, 'Dennis Bergkamp', 'Netherlands', '1995-2002'],
  [41, 'Ruud Gullit', 'Netherlands', '1986-1990'],
  [42, 'Frank Rijkaard', 'Netherlands', '1988-1992'],
  [43, 'Sócrates', 'Brazil', '1980-1986'],
  [44, 'Gabriel Batistuta', 'Argentina', '1994-2000'],
  [45, 'Hristo Stoichkov', 'Bulgaria', '1990-1994'],
  [46, 'George Weah', 'Liberia', '1994-1996'],
  [47, 'Rivelino', 'Brazil', '1970-1978'],
  [48, 'Kylian Mbappé', 'France', '2018-2024'],
  [49, 'Neymar', 'Brazil', '2012-2017'],
  [50, 'Sergio Ramos', 'Spain', '2010-2018'],
  [51, 'Iker Casillas', 'Spain', '2007-2012'],
  [52, 'Gianluigi Buffon', 'Italy', '2003-2012'],
  [53, 'Carles Puyol', 'Spain', '2008-2012'],
  [54, 'Fernando Torres', 'Spain', '2007-2010'],
  [55, 'Luis Suárez', 'Uruguay', '2013-2016'],
  [56, 'Robert Lewandowski', 'Poland', '2019-2022'],
  [57, 'Wayne Rooney', 'England', '2009-2012'],
  [58, 'Frank Lampard', 'England', '2004-2010'],
  [59, 'Paul Scholes', 'England', '2000-2008'],
  [60, 'Ryan Giggs', 'Wales', '1996-2009'],
  [61, 'Eric Cantona', 'France', '1992-1996'],
  [62, 'Alan Shearer', 'England', '1994-1998'],
  [63, 'Ian Rush', 'Wales', '1983-1988'],
  [64, 'John Barnes', 'England', '1987-1991'],
  [65, 'Mohamed Salah', 'Egypt', '2017-2023'],
  [66, 'Virgil van Dijk', 'Netherlands', '2018-2020'],
  [67, 'Sadio Mané', 'Senegal', '2017-2022'],
  [68, 'Xabi Alonso', 'Spain', '2008-2014'],
  [69, 'Andriy Shevchenko', 'Ukraine', '1999-2006'],
  [70, 'Pavel Nedvěd', 'Czech Republic', '2000-2005'],
  [71, 'Rio Ferdinand', 'England', '2006-2009'],
  [72, 'Patrick Vieira', 'France', '2000-2004'],
  [73, 'Clarence Seedorf', 'Netherlands', '2003-2007'],
  [74, 'Edgar Davids', 'Netherlands', '1998-2004'],
  [75, 'Javier Zanetti', 'Argentina', '1998-2010'],
  [76, 'Alessandro Del Piero', 'Italy', '1996-2003'],
  [77, 'Francesco Totti', 'Italy', '2000-2007'],
  [78, 'David Beckham', 'England', '1999-2003'],
  [79, 'Michael Owen', 'England', '1998-2004'],
  [80, "Samuel Eto'o", 'Cameroon', '2005-2010'],
  [81, 'Yaya Touré', 'Ivory Coast', '2011-2014'],
  [82, 'Sergio Agüero', 'Argentina', '2013-2018'],
  [83, 'Zlatan Ibrahimović', 'Sweden', '2007-2016'],
  [84, 'Antoine Griezmann', 'France', '2016-2019'],
  [85, 'Luka Modrić', 'Croatia', '2016-2018'],
  [86, 'Toni Kroos', 'Germany', '2014-2020'],
  [87, 'Manuel Neuer', 'Germany', '2013-2016'],
  [88, 'Philipp Lahm', 'Germany', '2008-2014'],
  [89, 'Bastian Schweinsteiger', 'Germany', '2010-2014'],
  [90, 'Miroslav Klose', 'Germany', '2002-2010'],
  [91, 'Diego Forlán', 'Uruguay', '2009-2011'],
  [92, 'Carlos Valderrama', 'Colombia', '1990-1998'],
  [93, 'Roberto Firmino', 'Brazil', '2018-2020'],
  [94, 'Trent Alexander-Arnold', 'England', '2019-2022'],
  [95, 'Kevin De Bruyne', 'Belgium', '2017-2022'],
  [96, 'Eden Hazard', 'Belgium', '2015-2019'],
  [97, 'Gareth Bale', 'Wales', '2011-2018'],
  [98, 'Erling Haaland', 'Norway', '2020-2024'],
  [99, 'Ruud van Nistelrooy', 'Netherlands', '2001-2006'],
  [100, 'Jürgen Klinsmann', 'Germany', '1990-1996'],
]

function slug(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export const players: Player[] = raw.map(([rank, name, country, peak]) => ({
  rank,
  name,
  country,
  peak,
  id: slug(name),
  youtube:
    'https://www.youtube.com/results?search_query=' +
    encodeURIComponent(`${name} highlights goals skills`),
}))
