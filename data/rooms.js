let roomsData = [
  {
    number: 1,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 344.58
  },
  {
    number: 2,
    roomType: "single room",
    bidet: true,
    bedSize: "twin",
    numBeds: 2,
    costPerNight: 462.7
  },
  {
    number: 3,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 344.89
  },
  {
    number: 4,
    roomType: "junior suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 192.48
  },
  {
    number: 5,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 269.65
  },
  {
    number: 6,
    roomType: "residential suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 426.45
  },
  {
    number: 7,
    roomType: "residential suite",
    bidet: true,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 441.66
  },
  {
    number: 8,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 254.9
  },
  {
    number: 9,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 405.85
  },
  {
    number: 10,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 275.32
  },
  {
    number: 11,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 493.85
  },
  {
    number: 12,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 176.99
  },
  {
    number: 13,
    roomType: "residential suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 417.08
  },
  {
    number: 14,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 217.17
  },
  {
    number: 15,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 159.65
  },
  {
    number: 16,
    roomType: "junior suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 239.54
  },
  {
    number: 17,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 259.06
  },
  {
    number: 18,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 444.27
  },
  {
    number: 19,
    roomType: "junior suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 229.67
  },
  {
    number: 20,
    roomType: "suite",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 258.1
  },
  {
    number: 21,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 440.09
  },
  {
    number: 22,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 158.81
  },
  {
    number: 23,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 447.75
  },
  {
    number: 24,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 157.83
  },
  {
    number: 25,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 377.66
  },
  {
    number: 26,
    roomType: "junior suite",
    bidet: true,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 277.55
  },
  {
    number: 27,
    roomType: "residential suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 275.09
  },
  {
    number: 28,
    roomType: "suite",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 280.43
  },
  {
    number: 29,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 290.21
  },
  {
    number: 30,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 300.61
  },
  {
    number: 31,
    roomType: "suite",
    bidet: true,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 230.2
  },
  {
    number: 32,
    roomType: "junior suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 375.33
  },
  {
    number: 33,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 272.92
  },
  {
    number: 34,
    roomType: "residential suite",
    bidet: false,
    bedSize: "king",
    numBeds: 1,
    costPerNight: 445.3
  },
  {
    number: 35,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 348.18
  },
  {
    number: 36,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 419.33
  },
  {
    number: 37,
    roomType: "single room",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 478.01
  },
  {
    number: 38,
    roomType: "single room",
    bidet: false,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 459.64
  },
  {
    number: 39,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 433.21
  },
  {
    number: 40,
    roomType: "single room",
    bidet: false,
    bedSize: "twin",
    numBeds: 1,
    costPerNight: 466.12
  },
  {
    number: 41,
    roomType: "single room",
    bidet: false,
    bedSize: "king",
    numBeds: 2,
    costPerNight: 281.26
  },
  {
    number: 42,
    roomType: "junior suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 452.79
  },
  {
    number: 43,
    roomType: "single room",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 382.01
  },
  {
    number: 44,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 377.35
  },
  {
    number: 45,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 216.73
  },
  {
    number: 46,
    roomType: "suite",
    bidet: true,
    bedSize: "queen",
    numBeds: 1,
    costPerNight: 319.37
  },
  {
    number: 47,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 1,
    costPerNight: 353.72
  },
  {
    number: 48,
    roomType: "suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 481.24
  },
  {
    number: 49,
    roomType: "suite",
    bidet: false,
    bedSize: "queen",
    numBeds: 2,
    costPerNight: 195.46
  },
  {
    number: 50,
    roomType: "residential suite",
    bidet: false,
    bedSize: "full",
    numBeds: 2,
    costPerNight: 471.8
  }
];

export default roomsData;