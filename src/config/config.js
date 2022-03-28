export const events = [
  {
    title: "Smith",
    start: new Date(2022, 2, 29, 14, 0),
    end: new Date(2022, 2, 30, 14, 0)
  },
  {
    title: "Brown",
    start: new Date(2022, 3, 2, 10, 0),
    end: new Date(2022, 3, 4, 10, 0)
  },
  {
    title: "O'Nile",
    start: new Date(2022, 3, 7, 12, 0),
    end: new Date(2022, 3, 8, 12, 0)
  },
  {
    title: "Nelson",
    start: new Date(2022, 3, 11, 10, 0),
    end: new Date(2022, 3, 12, 10, 0)
  },
  {
    title: "O'Hara",
    start: new Date(2022, 3, 15, 14, 0),
    end: new Date(2022, 3, 16, 14, 0)
  },
  {
    title: "Tart",
    start: new Date(2022, 3, 19, 10, 0),
    end: new Date(2022, 3, 20, 10, 0)
  },
];

export const time = [new Date(0, 0, 0, 0, 0), new Date(0, 0, 0, 2, 0), new Date(0, 0, 0, 4, 0),new Date(0, 0, 0, 6, 0), new Date(0, 0, 0, 8, 0), new Date(0, 0, 0, 16, 0), new Date(0, 0, 0, 18, 0), new Date(0, 0, 0, 20, 0), new Date(0, 0, 0, 22, 0)]

export const data = []
  events.forEach(i => {
    data.push(i.start, i.end)
  })