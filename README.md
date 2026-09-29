# MonsoonAI React Prototype

Frontend-only hackathon prototype for "Regime-Aware AI Post-Processing of Monsoon Rainfall Forecasts".

## What is included

- React + Vite
- Recharts
- Lucide icons
- Three deterministic demo scenarios:
  - Active Monsoon
  - Low Pressure / Depression
  - Coastal Rainfall
- Simulated AI processing pipeline
- District rainfall table
- Rainfall intensity map-style visualization
- Verification metrics: RMSE, CSI, POD, FAR, FSS
- Responsive dark dashboard
- No backend, API, database, authentication, or external data dependency

## Run

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Important

This prototype uses simulated values. To connect a real backend later, replace the `scenarios` object and `runForecast` flow in `src/main.jsx` with API calls.
