# cripto-app

## Overview
`cripto-app` is a TypeScript-based application that provides users with real-time information about various cryptocurrencies. The app features a list of cryptocurrencies, detailed views for each cryptocurrency, and visualizations of price history through charts.

## Features
- **Cryptocurrency List**: Displays a list of available cryptocurrencies fetched from an API.
- **Detailed View**: Shows detailed information about a selected cryptocurrency, including price, market cap, and volume.
- **Price History Chart**: Visualizes the price history of a selected cryptocurrency using charts.

## Project Structure
```
cripto-app
├── src
│   ├── components
│   │   ├── CryptoList.tsx
│   │   ├── CryptoDetail.tsx
│   │   └── CryptoChart.tsx
│   ├── services
│   │   └── api.ts
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   └── helpers.ts
│   └── App.tsx
├── tests
│   └── __tests__
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage
To start the application, use the following command:

```bash
npm start
```

## Testing
To run the tests, execute:

```bash
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.