import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Activity, AlertTriangle, BarChart3, BrainCircuit, ChevronRight,
  CloudRain, Database, Gauge, Layers3, MapPin, MapPinned, Moon, Play, RefreshCw,
  ShieldCheck, Sparkles, Sun, Target, Upload, Wind, X
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip,
  CartesianGrid, LineChart, Line, Legend
} from "recharts";
import { INDIAN_STATES, ZONES, generateStateData } from "./indianStates.js";
import "./styles.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("monsoon_theme") || "dark";
  });
  const [selectedStateId, setSelectedStateId] = useState(() => {
    return localStorage.getItem("monsoon_state") || "andhra-pradesh";
  });
  const [dataSeed, setDataSeed] = useState(0);
  const [generating, setGenerating] = useState(false);
  const [scenarioKey, setScenarioKey] = useState("depression");
  const [page, setPage] = useState("dashboard");
  const [running, setRunning] = useState(false);
  const [ran, setRan] = useState(true);
  const [step, setStep] = useState(4);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("monsoon_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  // Generate complete state-specific meteorological data
  const statePayload = useMemo(() => {
    return generateStateData(selectedStateId, dataSeed);
  }, [selectedStateId, dataSeed]);

  const { state, scenarios } = statePayload;
  const data = scenarios[scenarioKey] || scenarios.depression;

  const handleStateChange = (newStateId) => {
    setSelectedStateId(newStateId);
    localStorage.setItem("monsoon_state", newStateId);
    setGenerating(true);
    setRan(false);
    setTimeout(() => {
      setGenerating(false);
      setRan(true);
      setStep(4);
    }, 450);
  };

  const handleRegenerate = () => {
    setGenerating(true);
    setRan(false);
    setStep(0);
    setTimeout(() => {
      setDataSeed(prev => prev + 1);
      setGenerating(false);
      setRan(true);
      setStep(4);
    }, 600);
  };

  const chartColors = useMemo(() => {
    if (theme === "dark") {
      return {
        grid: "#1e2d48",
        axis: "#94a3b8",
        nwp: "#64748b",
        ai: "#3b82f6",
        tooltipBg: "#131c2e",
        tooltipBorder: "#1e2d48",
        tooltipText: "#f8fafc"
      };
    } else {
      return {
        grid: "#e2e8f0",
        axis: "#64748b",
        nwp: "#94a3b8",
        ai: "#2563eb",
        tooltipBg: "#ffffff",
        tooltipBorder: "#e2e8f0",
        tooltipText: "#0f172a"
      };
    }
  }, [theme]);

  const runForecast = () => {
    setRunning(true);
    setRan(false);
    setStep(0);
    const timers = [500, 1000, 1500, 2100];
    timers.forEach((t, i) => setTimeout(() => setStep(i + 1), t));
    setTimeout(() => {
      setRunning(false);
      setRan(true);
      setStep(4);
    }, 2700);
  };

  const chartData = data.districts.map(d => ({district: d[0], nwp: d[1], ai: d[2]}));
  const metrics = [
    ["RMSE", data.verification.rmseNwp, data.verification.rmseAi, "mm", "↓"],
    ["CSI", data.verification.csiNwp, data.verification.csiAi, "", "↑"],
    ["POD", data.verification.podNwp, data.verification.podAi, "", "↑"],
    ["FAR", data.verification.farNwp, data.verification.farAi, "", "↓"],
    ["FSS", data.verification.fssNwp, data.verification.fssAi, "", "↑"]
  ];

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark"><CloudRain size={20} strokeWidth={2.2}/></div>
          <div><b>Monsoon<span>AI</span></b><small>Operational Post-Processing</small></div>
        </div>

        {/* State Selector in place of operational test bench badge */}
        <div className="stateSelectorBox">
          <div className="stateSelectorHeader">
            <div className="stateSelectorTitle">
              <span className="stateLivePulse"></span>
              <span>STATE / SUBDIVISION</span>
            </div>
            <span className="stateCount">{INDIAN_STATES.length} States</span>
          </div>

          <select
            id="state-select"
            value={selectedStateId}
            onChange={(e) => handleStateChange(e.target.value)}
            className="stateSelectDropdown"
            title="Select an Indian State to generate calibrated regional forecasts"
          >
            {ZONES.map(zone => {
              const statesInZone = INDIAN_STATES.filter(s => s.zone.includes(zone.split(" ")[0]));
              if (!statesInZone.length) return null;
              return (
                <optgroup key={zone} label={zone}>
                  {statesInZone.map(st => (
                    <option key={st.id} value={st.id}>
                      {st.name} ({st.districts.length} Districts)
                    </option>
                  ))}
                </optgroup>
              );
            })}
          </select>

          <div className="stateSelectorMeta">
            <span className="stateZoneText" title={state.zone}>{state.name}</span>
            <button
              className="regenerateStateBtn"
              onClick={handleRegenerate}
              disabled={generating}
              title="Generate fresh simulated AWS observations and NWP fields for this state"
            >
              <RefreshCw size={11} className={generating ? "spin" : ""}/>
              <span>{generating ? "Computing..." : "Generate Data"}</span>
            </button>
          </div>
        </div>

        <nav>
          <NavItem icon={<Activity/>} label="Forecast Dashboard" active={page === "dashboard"} onClick={() => setPage("dashboard")}/>
          <NavItem icon={<Layers3/>} label="Regime Detection" active={page === "regime"} onClick={() => setPage("regime")}/>
          <NavItem icon={<MapPinned/>} label="District Forecast" active={page === "district"} onClick={() => setPage("district")}/>
          <NavItem icon={<BarChart3/>} label="Verification Benchmarks" active={page === "verification"} onClick={() => setPage("verification")}/>
        </nav>

        <div className="sideBottom">
          <div className="dataStatus">
            <span className="liveDot"></span>
            <div>
              <b>{state.name} Mesh Active</b>
              <small>{state.districts.length} AWS Synoptic Grid Points</small>
            </div>
          </div>
          <div className="version">v2.4 · Coupled IMD-GFS / ECMWF</div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <div className="eyebrow">{state.name.toUpperCase()} · SYNOPTIC RAINFALL INTELLIGENCE</div>
            <h1>{page === "dashboard" ? `${state.name} Forecast Operations` : pageTitle(page, state.name)}</h1>
          </div>
          <div className="topActions">
            <button className="themeToggleBtn" onClick={toggleTheme} title="Switch Light / Dark Theme">
              {theme === "dark" ? <Sun size={15}/> : <Moon size={15}/>}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
            <button className="ghostBtn" onClick={() => setUploaded(!uploaded)}>
              <Upload size={15}/>
              {uploaded ? "NWP Feed Connected" : "Import NWP Run"}
            </button>
            <div className="dateChip">
              <span>●</span> 29 SEP 2026 · 0000 UTC
            </div>
          </div>
        </header>

        {page === "dashboard" && (
          <>
            <section className="heroGrid">
              <div className="heroCard">
                <div className="heroTop">
                  <div>
                    <span className="sectionTag blue">
                      <Sparkles size={12}/> {state.name} Post-Processing
                    </span>
                    <h2>Turn raw NWP forecasts into<br/><em>regime-calibrated guidance.</em></h2>
                    <p>
                      Automatically diagnose prevailing synoptic atmospheric regimes across {state.name} ({state.zone}), activate specialized machine learning correction experts, and compute calibrated district-scale rainfall probabilities.
                    </p>
                  </div>
                  <div className="modelTelemetry">
                    <div className="telemetryHeader">
                      <span className="telemetryPulse"></span>
                      <span className="telemetryLabel">Model Telemetry</span>
                    </div>
                    <div className="telemetryGrid">
                      <div>
                        <small>Active Regime</small>
                        <b>{data.short}</b>
                      </div>
                      <div>
                        <small>Confidence</small>
                        <b>{data.confidence}%</b>
                      </div>
                      <div>
                        <small>AWS Stations</small>
                        <b>{state.districts.length} Districts</b>
                      </div>
                      <div>
                        <small>Terrain Zone</small>
                        <b title={state.zone} style={{fontSize: "10px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                          {state.zone.split(" ")[0]}
                        </b>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="scenarioRow">
                  {Object.entries(scenarios).map(([key, s]) => (
                    <button
                      key={key}
                      className={"scenario " + (scenarioKey === key ? "selected" : "")}
                      onClick={() => { setScenarioKey(key); setRan(false); }}
                    >
                      <span>{s.icon}</span>
                      <div>
                        <b>{s.label}</b>
                        <small>{s.raw} mm raw NWP</small>
                      </div>
                      {scenarioKey === key && <span className="check">✓</span>}
                    </button>
                  ))}
                </div>

                <button className="runBtn" onClick={runForecast} disabled={running}>
                  {running ? (
                    <><RefreshCw className="spin" size={16}/> Generating calibrated {state.name} forecast...</>
                  ) : (
                    <><Play size={16} fill="currentColor"/> Run Calibrated AI Forecast</>
                  )}
                </button>
              </div>

              <ProcessingCard step={step} running={running} data={data} state={state}/>
            </section>

            {ran && <Results data={data} chartData={chartData} metrics={metrics} setPage={setPage} chartColors={chartColors} state={state}/>}
            {!ran && (
              <div className="emptyState">
                <Gauge size={32}/>
                <h3>Ready to execute calibration pipeline for {state.name}</h3>
                <p>Select a meteorological regime above and click 'Run Calibrated AI Forecast' to compute district guidance.</p>
              </div>
            )}
          </>
        )}

        {page === "regime" && <RegimePage data={data} state={state}/>}
        {page === "district" && <DistrictPage data={data} state={state}/>}
        {page === "verification" && <VerificationPage data={data} chartData={chartData} metrics={metrics} chartColors={chartColors} state={state}/>}
      </main>
    </div>
  );
}

function NavItem({icon, label, active, onClick}) {
  return (
    <button className={"navItem " + (active ? "active" : "")} onClick={onClick}>
      {icon}
      <span>{label}</span>
      {active && <ChevronRight size={14}/>}
    </button>
  );
}

function pageTitle(p, stateName) {
  return ({
    regime: `Atmospheric Regime Intelligence — ${stateName}`,
    district: `District Rainfall Outlook & Probabilities — ${stateName}`,
    verification: `Objective Verification & Skill Scores — ${stateName}`
  }[p]);
}

function ProcessingCard({step, running, data, state}) {
  const steps = [
    { title: "Preprocess NWP variables", sub: `Ingest IMD-GFS / ECMWF fields for ${state.name}` },
    { title: "Diagnose synoptic regime", sub: `${data.short} pattern (${data.confidence}% confidence)` },
    { title: "Dispatch specialized model", sub: data.model },
    { title: "Calibrated rainfall output", sub: `${state.districts.length} district quantiles downscaled` }
  ];

  return (
    <div className="processingCard">
      <div className="cardHead">
        <div>
          <span className="sectionTag blue">PIPELINE</span>
          <h3>Operational Pipeline</h3>
        </div>
        <span className={"status " + (running ? "processing" : "ready")}>
          {running ? "PROCESSING" : "STANDBY"}
        </span>
      </div>

      <div className="pipeline">
        {steps.map((s, i) => (
          <div className={"pipeStep " + (step > i ? "done" : step === i && running ? "current" : "")} key={s.title}>
            <div className="pipeIcon">{step > i ? "✓" : i + 1}</div>
            <div>
              <b>{s.title}</b>
              <small>{s.sub}</small>
            </div>
          </div>
        ))}
      </div>

      <div className="pipelineFoot">
        <span>Classifier Confidence</span>
        <b>{data.confidence}%</b>
      </div>
    </div>
  );
}

function Results({data, chartData, metrics, setPage, chartColors, state}) {
  return (
    <section className="results">
      <div className="resultHeader">
        <div>
          <span className="sectionTag green">Guidance Ready</span>
          <h2>Calibrated 24-Hour Rainfall Outlook</h2>
          <p>Synoptic Scenario: {data.label} · {state.name} Meteorological Grid ({state.zone})</p>
        </div>
        <button className="outlineBtn" onClick={() => setPage("district")}>
          Open detailed district view <ChevronRight size={15}/>
        </button>
      </div>

      <div className="kpiGrid">
        <Kpi
          icon={<Wind/>}
          label="Diagnosed Regime"
          value={data.short}
          sub={`${data.confidence}% confidence score`}
          tone="regime"
        />
        <Kpi
          icon={<CloudRain/>}
          label="Raw NWP Baseline"
          value={`${data.raw} mm`}
          sub="Uncorrected numerical physics"
          tone="baseline"
        />
        <Kpi
          icon={<Sparkles/>}
          label="AI Calibrated Output"
          value={`${data.corrected} mm`}
          sub={`+${Math.round((data.corrected / data.raw - 1) * 100)}% bias correction adjustment`}
          tone="calibrated"
        />
        <Kpi
          icon={<AlertTriangle/>}
          label="Heavy Rainfall Risk"
          value={`${data.heavy}%`}
          sub="Exceedance probability >64 mm"
          tone="warning"
        />
      </div>

      <div className="contentGrid">
        <div className="panel chartPanel">
          <div className="panelTitle">
            <div>
              <h3>Raw NWP vs. Calibrated Output</h3>
              <p>{state.name} district-level mean accumulation (mm)</p>
            </div>
            <span className="miniLegend">
              <i></i> NWP Baseline <i></i> AI Calibrated
            </span>
          </div>
          <ResponsiveContainer width="100%" height={290}>
            <BarChart data={chartData} margin={{top: 10, right: 8, left: -16, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={chartColors.grid}/>
              <XAxis dataKey="district" tick={{fill: chartColors.axis, fontSize: 11, fontWeight: 500}} axisLine={false} tickLine={false}/>
              <YAxis tick={{fill: chartColors.axis, fontSize: 11}} axisLine={false} tickLine={false}/>
              <Tooltip
                contentStyle={{
                  background: chartColors.tooltipBg,
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: 8,
                  color: chartColors.tooltipText,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)"
                }}
              />
              <Bar dataKey="nwp" name="Raw NWP" fill={chartColors.nwp} radius={[4, 4, 0, 0]}/>
              <Bar dataKey="ai" name="AI Calibrated" fill={chartColors.ai} radius={[4, 4, 0, 0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <RainMap data={data} state={state}/>
      </div>

      <div className="sectionHeader">
        <div>
          <h3>Objective Verification Benchmark — {state.name}</h3>
          <p>Independent evaluation: raw NWP vs. regime-aware calibrated guidance against ground truth observations.</p>
        </div>
        <button className="textBtn" onClick={() => setPage("verification")}>
          View full verification suite →
        </button>
      </div>
      <div className="metricGrid">
        {metrics.map(m => <Metric key={m[0]} m={m}/>)}
      </div>
    </section>
  );
}

function Kpi({icon, label, value, sub, tone}) {
  return (
    <div className={"kpi " + tone}>
      <div className="kpiIcon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{sub}</small>
    </div>
  );
}

function Metric({m}) {
  let [name, nwp, ai, unit, arrow] = m;
  let improved = arrow === "↑" ? ai > nwp : ai < nwp;
  return (
    <div className="metric">
      <div className="metricName">
        <b>{name}</b>
        <span>{arrow}</span>
      </div>
      <div className="metricVals">
        <div>
          <small>NWP Baseline</small>
          <b>{unit === "mm" ? nwp : nwp.toFixed(2)}{unit}</b>
        </div>
        <div>
          <small>Calibrated AI</small>
          <b className={improved ? "improved" : ""}>{unit === "mm" ? ai : ai.toFixed(2)}{unit}</b>
        </div>
      </div>
      <div className="metricBar">
        <span style={{width: `${Math.min(100, Math.max(15, (ai / (Math.max(nwp, ai) || 1)) * 100))}%`}}/>
      </div>
    </div>
  );
}

function RainMap({data, state}) {
  return (
    <div className="panel mapPanel">
      <div className="panelTitle">
        <div>
          <h3>{state.name} Precipitation Map</h3>
          <p>{state.districts.length} Synoptic monitoring stations ({state.zone})</p>
        </div>
        <MapPinned size={18} style={{color: "var(--primary)"}}/>
      </div>
      <div className="fakeMap">
        <div className="mapCoords">{state.coords}</div>
        <div className="mapWater">{state.waterBody}</div>
        <div className="mapLand">
          {state.districts.map(c => {
            const d = data.districts.find(x => x[0] === c.name);
            const val = d ? d[2] : 0;
            const cls = val > 115 ? "red" : val > 64 ? "orange" : val > 32 ? "yellow" : "green";
            return (
              <div key={c.name} className="mapPin" style={{left: c.x + "%", top: c.y + "%"}}>
                <span className={cls}></span>
                <label>
                  {c.name}
                  <b>{val} mm</b>
                </label>
              </div>
            );
          })}
        </div>
        <div className="mapLegend">
          <span><i className="greenDot"/> &lt;32 mm (Light)</span>
          <span><i className="yellowDot"/> 32–64 mm (Moderate)</span>
          <span><i className="orangeDot"/> 64–115 mm (Heavy)</span>
          <span><i className="redDot"/> &gt;115 mm (Extreme)</span>
        </div>
      </div>
    </div>
  );
}

function RegimePage({data, state}) {
  const regimes = [
    ["ACTIVE", `Widespread ${state.name} monsoon trough convective flow`, data.model, "91%"],
    ["BREAK", "Suppressed regional convection with isolated showers", "Random Forest Expert v1.9", "—"],
    ["DEPRESSION", `Organized cyclonic vortex affecting ${state.name} belt`, data.model, "94%"],
    ["COASTAL / LOCAL", "Moist boundary convergence & sea-breeze squalls", "Gradient Booster v2.0", "89%"],
    ["OROGRAPHIC", `Terrain-forced rainfall along ${state.zone}`, "Ensemble Orographic Expert", "—"],
    ["WESTERN DISTURBANCE", "Upper-tropospheric westerly trough system", "Neural Ensemble v1.5", "—"]
  ];

  return (
    <div className="pageBody">
      <div className="pageIntro">
        <div>
          <span className="sectionTag purple">Atmospheric Classifier</span>
          <h2>Weather Regime Classification — {state.name}</h2>
          <p>The post-processing engine automatically diagnoses the dominant synoptic weather regime to route predictions through specialized machine learning experts.</p>
        </div>
        <div className="confidenceRing">
          <b>{data.confidence}%</b>
          <small>Confidence</small>
        </div>
      </div>

      <div className="regimeHero">
        <div className="regimeIcon">{data.icon}</div>
        <div>
          <span>Diagnosed Synoptic Regime</span>
          <h2>{data.label}</h2>
          <p>{data.description}</p>
        </div>
        <div className="selectedModel">
          <small>Active Correction Expert</small>
          <b>{data.model}</b>
        </div>
      </div>

      <div className="regimeGrid">
        {regimes.map(r => (
          <div className={"regimeCard " + (r[0] === data.short ? "selected" : "")} key={r[0]}>
            <div className="regimeTop">
              <b>{r[0]}</b>
              <span>{r[3]}</span>
            </div>
            <p>{r[1]}</p>
            <small>{r[2]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function DistrictPage({data, state}) {
  return (
    <div className="pageBody">
      <div className="pageIntro">
        <div>
          <span className="sectionTag blue">District Bulletin</span>
          <h2>24-Hour District Rainfall & Exceedance — {state.name}</h2>
          <p>Active Synoptic Regime: <b>{data.label}</b> · {state.districts.length} Synoptic Observation Stations</p>
        </div>
        <div className="selectedPill">
          {data.heavy}% Regional Heavy Rain Alert ({state.zone})
        </div>
      </div>

      <div className="tablePanel">
        <table>
          <thead>
            <tr>
              <th>District</th>
              <th>Regime</th>
              <th>Raw NWP</th>
              <th>Calibrated AI</th>
              <th>P(&gt;64 mm Heavy)</th>
              <th>P(&gt;115 mm Very Heavy)</th>
              <th>Alert Level</th>
            </tr>
          </thead>
          <tbody>
            {data.districts.map(d => (
              <tr key={d[0]}>
                <td><b>{d[0]}</b></td>
                <td><span className="tableRegime">{data.short}</span></td>
                <td>{d[1]} mm</td>
                <td className="aiValue">{d[2]} mm</td>
                <td>
                  <div className="prob">
                    <span style={{width: d[3] + "%"}}></span>
                    {d[3]}%
                  </div>
                </td>
                <td>{d[4]}%</td>
                <td>
                  <span className={"severity " + (d[2] > 115 ? "danger" : d[2] > 64 ? "warning" : "normal")}>
                    {d[2] > 115 ? "Very Heavy Warning" : d[2] > 64 ? "Heavy Advisory" : "Normal / Moderate"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VerificationPage({data, chartData, metrics, chartColors, state}) {
  return (
    <div className="pageBody">
      <div className="pageIntro">
        <div>
          <span className="sectionTag green">Verification Benchmarks</span>
          <h2>Objective Model Skill & Error Analysis — {state.name}</h2>
          <p>Standard meteorological verification scores evaluating bias reduction across {state.name} stations.</p>
        </div>
      </div>

      <div className="verifyGrid">
        <div className="panel">
          <div className="panelTitle">
            <div>
              <h3>Skill Metrics Summary</h3>
              <p>Lower RMSE/FAR is superior; higher CSI/POD/FSS is superior.</p>
            </div>
            <ShieldCheck size={18} style={{color: "var(--primary)"}}/>
          </div>
          <div className="metricGrid full">
            {metrics.map(m => <Metric key={m[0]} m={m}/>)}
          </div>
        </div>

        <div className="panel">
          <div className="panelTitle">
            <div>
              <h3>District Comparison Profile — {state.name}</h3>
              <p>Rainfall accumulation profile: Raw NWP vs. Calibrated Output</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={330}>
            <LineChart data={chartData} margin={{top: 10, right: 15, left: -16, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={chartColors.grid}/>
              <XAxis dataKey="district" tick={{fill: chartColors.axis, fontSize: 11}} axisLine={false} tickLine={false}/>
              <YAxis tick={{fill: chartColors.axis, fontSize: 11}} axisLine={false} tickLine={false}/>
              <Tooltip
                contentStyle={{
                  background: chartColors.tooltipBg,
                  border: `1px solid ${chartColors.tooltipBorder}`,
                  borderRadius: 8,
                  color: chartColors.tooltipText,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.12)"
                }}
              />
              <Legend wrapperStyle={{paddingTop: 10, fontSize: 12}}/>
              <Line
                type="monotone"
                dataKey="nwp"
                name="Raw NWP Baseline"
                stroke={chartColors.nwp}
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={{r: 3, fill: chartColors.nwp}}
              />
              <Line
                type="monotone"
                dataKey="ai"
                name="AI Calibrated Output"
                stroke={chartColors.ai}
                strokeWidth={2.5}
                dot={{r: 4, fill: chartColors.ai}}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="note">
        <Target size={18}/>
        <div>
          <b>Operational Benchmark Note — {state.name} Sub-division</b>
          <p>
            Verification scores are benchmarked against 48-hour AWS gauge observations across {state.name} ({state.zone}). The regime-aware expert framework reduces regional root-mean-square error (RMSE) by ~42% during {data.label.toLowerCase()} events compared to raw global numerical weather prediction models.
          </p>
        </div>
      </div>
    </div>
  );
}

function AppRoot() {
  return <App/>;
}

createRoot(document.getElementById("root")).render(<AppRoot/>);
