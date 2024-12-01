# Device Monitoring Dashboard

## Overview

This project implements a **Device Monitoring Dashboard** using React, TypeScript, and Vite. It retrieves and displays device and temperature data for monitoring purposes. The application demonstrates clean architecture, reusable hooks, and responsive design, prioritizing maintainability and performance.

## Key Features

- **Device Information Display**: Displays detailed information about the device and its associated site.
- **Temperature Data Table**: Provides hourly average temperature data over a specific date range.
- **Reusable Hooks**: Utilizes `useDataFetch` for API data retrieval, promoting modularity.
- **Optimized API Integration**: Efficient API calls through a centralized service layer with error handling.
- **Responsive Design**: Adapts to different screen sizes for seamless usage on various devices.

## Key Decisions and Optimizations

1. **React + Vite for Development**:
   - Chosen for fast development and HMR (Hot Module Replacement).
   - SWC (Speedy Web Compiler) plugin for efficient React transpilation.
2. **Component-based Architecture**:
   - Modular components for `SiteInfo` and `TemperatureTable`.
   - Centralized hooks for API interaction.
3. **Styling**:
   - Scoped CSS for each component to avoid conflicts.
   - Responsive layouts using CSS media queries.
4. **TypeScript Integration**:
   - Ensures type safety across the codebase.
   - Includes comprehensive type definitions for API responses.
5. **API Optimization**:
   - Centralized service functions (`getSiteDetails` and `getTemperatureData`) to avoid redundancy.
   - Dynamic query parameter handling for flexible data fetching.
6. **Error Handling**:
   - User-friendly error and loading states for each component.
   - Graceful handling of missing or invalid data.

## Project Timeline

- **Expected Completion**: 2 hours
- **Actual Completion**: 1 hour and 40 minutes

Time was saved on the styling of the components, and the handling of data thanks to typescript types.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- Environment variables configured for API keys and base URL in a `.env` file.

### Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Possible Improvements

- Implement unit tests for hooks and components.
- Add more granular filtering options for temperature data.
- Include a dark mode for better accessibility.
