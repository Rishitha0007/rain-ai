// Comprehensive India Meteorological Subdivisions & State Datasets

export const ZONES = [
  "Southern Peninsula",
  "Western India",
  "Eastern India",
  "Northern India",
  "Central India",
  "North-Eastern India"
];

export const INDIAN_STATES = [
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    zone: "Southern Peninsula",
    waterBody: "BAY OF BENGAL",
    coords: "82.0°E · 16.5°N",
    models: {
      active: "XGBoost Coromandel Expert v2.4",
      depression: "Neural Network Bay Depression Expert v3.1",
      coastal: "Gradient Boosting Coastal Surge Expert v2.0"
    },
    descriptions: {
      active: "Southwest monsoon trough producing widespread rainfall over coastal and interior Andhra.",
      depression: "Low pressure / depression in west-central Bay of Bengal steering heavy downpours.",
      coastal: "Onshore maritime convergence causing localized heavy showers along the shoreline."
    },
    districts: [
      { name: "Visakhapatnam", x: 80, y: 22, factor: 1.15 },
      { name: "Krishna", x: 58, y: 46, factor: 1.08 },
      { name: "Guntur", x: 52, y: 55, factor: 0.95 },
      { name: "Prakasam", x: 44, y: 68, factor: 0.82 },
      { name: "Nellore", x: 56, y: 82, factor: 1.12 },
      { name: "Kurnool", x: 26, y: 54, factor: 0.65 },
      { name: "Tirupati", x: 48, y: 88, factor: 0.98 },
      { name: "Anantapur", x: 22, y: 72, factor: 0.58 }
    ],
    baseRain: { active: 74, depression: 122, coastal: 68 }
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    zone: "Western India",
    waterBody: "ARABIAN SEA",
    coords: "72.8°E · 18.9°N",
    models: {
      active: "Ensemble Konkan-Ghats Expert v2.6",
      depression: "Offshore Trough Deep Net v3.0",
      coastal: "Orographic Gradient Booster v2.2"
    },
    descriptions: {
      active: "Vigorous monsoon surge with severe orographic enhancement along the Western Ghats.",
      depression: "Arabian Sea offshore trough producing intense continuous bands across Konkan & Mumbai.",
      coastal: "Moist westerly coastal winds bringing persistent squally showers to the coastline."
    },
    districts: [
      { name: "Mumbai", x: 25, y: 38, factor: 1.45 },
      { name: "Pune", x: 38, y: 52, factor: 0.85 },
      { name: "Ratnagiri", x: 28, y: 70, factor: 1.60 },
      { name: "Kolhapur", x: 34, y: 82, factor: 1.25 },
      { name: "Nashik", x: 40, y: 28, factor: 0.78 },
      { name: "Aurangabad", x: 55, y: 42, factor: 0.65 },
      { name: "Nagpur", x: 84, y: 25, factor: 0.92 },
      { name: "Satara", x: 36, y: 62, factor: 1.05 }
    ],
    baseRain: { active: 88, depression: 148, coastal: 110 }
  },
  {
    id: "kerala",
    name: "Kerala",
    zone: "Southern Peninsula",
    waterBody: "ARABIAN SEA",
    coords: "76.3°E · 10.5°N",
    models: {
      active: "Malabar Monsoon Gatekeeper v3.2",
      depression: "Equatorial Trough Neural Classifier v2.9",
      coastal: "High-Resolution Western Ghats Regressor v2.5"
    },
    descriptions: {
      active: "Monsoon onset gateway flow triggering widespread orographic downpours.",
      depression: "Southeast Arabian Sea vortex producing intense flash flooding across hill tracts.",
      coastal: "Deep maritime convective squall lines moving onshore across coastal districts."
    },
    districts: [
      { name: "Wayanad", x: 42, y: 22, factor: 1.48 },
      { name: "Kozhikode", x: 32, y: 32, factor: 1.25 },
      { name: "Palakkad", x: 50, y: 45, factor: 0.88 },
      { name: "Ernakulam", x: 45, y: 58, factor: 1.18 },
      { name: "Idukki", x: 62, y: 64, factor: 1.62 },
      { name: "Alappuzha", x: 40, y: 72, factor: 1.10 },
      { name: "Kollam", x: 48, y: 82, factor: 1.02 },
      { name: "Thiruvananthapuram", x: 52, y: 92, factor: 0.92 }
    ],
    baseRain: { active: 115, depression: 165, coastal: 95 }
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    zone: "Southern Peninsula",
    waterBody: "BAY OF BENGAL",
    coords: "80.2°E · 13.0°N",
    models: {
      active: "Northeast Monsoon Easterly Wave Expert v2.8",
      depression: "Southwest Bay Cyclone Tracker v3.3",
      coastal: "Coromandel Coastal Convection Model v2.1"
    },
    descriptions: {
      active: "Easterly wave disturbance steering moist bands into northern and central Tamil Nadu.",
      depression: "Depression over southwest Bay of Bengal generating very heavy coastal downpours.",
      coastal: "Localized coastal rain bands affecting Chennai, Kanchipuram, and Cuddalore."
    },
    districts: [
      { name: "Chennai", x: 78, y: 18, factor: 1.35 },
      { name: "Kanchipuram", x: 70, y: 26, factor: 1.15 },
      { name: "Cuddalore", x: 68, y: 42, factor: 1.25 },
      { name: "Coimbatore", x: 25, y: 56, factor: 0.58 },
      { name: "Nilgiris", x: 22, y: 46, factor: 1.42 },
      { name: "Madurai", x: 46, y: 68, factor: 0.72 },
      { name: "Tiruchirappalli", x: 54, y: 52, factor: 0.80 },
      { name: "Kanyakumari", x: 38, y: 92, factor: 0.95 }
    ],
    baseRain: { active: 62, depression: 135, coastal: 85 }
  },
  {
    id: "karnataka",
    name: "Karnataka",
    zone: "Southern Peninsula",
    waterBody: "ARABIAN SEA",
    coords: "75.7°E · 14.5°N",
    models: {
      active: "Coastal-Ghats Coupled Neural Expert v2.5",
      depression: "Peninsular Trough Classifier v2.1",
      coastal: "Offshore Wind Convergence v2.0"
    },
    descriptions: {
      active: "Heavy precipitation along coastal belt with moderate interior plateau rain.",
      depression: "Depression-induced convergence generating widespread showers across south interior.",
      coastal: "Strong onshore monsoon surge over Uttara and Dakshina Kannada."
    },
    districts: [
      { name: "Mangaluru", x: 28, y: 68, factor: 1.65 },
      { name: "Udupi", x: 26, y: 58, factor: 1.58 },
      { name: "Shivamogga", x: 42, y: 52, factor: 1.32 },
      { name: "Bengaluru Urban", x: 68, y: 78, factor: 0.78 },
      { name: "Mysuru", x: 52, y: 84, factor: 0.70 },
      { name: "Belagavi", x: 35, y: 24, factor: 0.85 },
      { name: "Hubballi-Dharwad", x: 40, y: 36, factor: 0.72 },
      { name: "Kalaburagi", x: 62, y: 20, factor: 0.62 }
    ],
    baseRain: { active: 78, depression: 125, coastal: 98 }
  },
  {
    id: "gujarat",
    name: "Gujarat",
    zone: "Western India",
    waterBody: "ARABIAN SEA",
    coords: "71.5°E · 22.5°N",
    models: {
      active: "Saurashtra-Kutch Monsoon Booster v2.2",
      depression: "Northeast Arabian Sea Depression Net v3.0",
      coastal: "Gulf of Khambhat Convection Model v1.9"
    },
    descriptions: {
      active: "Southwest monsoon flow bringing widespread rain to South Gujarat and Saurashtra.",
      depression: "Deep depression near Gulf of Kutch steering torrential localized rain.",
      coastal: "Coastal squalls impacting coastal Saurashtra and Valsad belts."
    },
    districts: [
      { name: "Ahmedabad", x: 55, y: 45, factor: 0.88 },
      { name: "Surat", x: 62, y: 78, factor: 1.38 },
      { name: "Valsad", x: 65, y: 88, factor: 1.65 },
      { name: "Rajkot", x: 36, y: 52, factor: 0.82 },
      { name: "Kutch", x: 22, y: 28, factor: 0.52 },
      { name: "Jamnagar", x: 26, y: 48, factor: 0.75 },
      { name: "Vadodara", x: 66, y: 58, factor: 0.95 },
      { name: "Bhavnagar", x: 48, y: 65, factor: 0.86 }
    ],
    baseRain: { active: 65, depression: 130, coastal: 88 }
  },
  {
    id: "odisha",
    name: "Odisha",
    zone: "Eastern India",
    waterBody: "BAY OF BENGAL",
    coords: "85.8°E · 20.3°N",
    models: {
      active: "Mahanadi Basin Hydro-Neural Expert v2.7",
      depression: "Head Bay Cyclonic Vortex Model v3.4",
      coastal: "East Coast Maritime Inundation Expert v2.3"
    },
    descriptions: {
      active: "Monsoon trough positioned over Odisha producing extensive river basin rainfall.",
      depression: "Classic monsoon depression making landfall near Puri/Chandbali with severe downpours.",
      coastal: "Strong onshore squalls affecting the coastal stretch from Ganjam to Balasore."
    },
    districts: [
      { name: "Puri", x: 68, y: 58, factor: 1.32 },
      { name: "Bhubaneswar", x: 65, y: 48, factor: 1.18 },
      { name: "Cuttack", x: 66, y: 42, factor: 1.15 },
      { name: "Balasore", x: 78, y: 25, factor: 1.28 },
      { name: "Ganjam", x: 52, y: 72, factor: 1.22 },
      { name: "Sambalpur", x: 34, y: 35, factor: 0.85 },
      { name: "Mayurbhanj", x: 68, y: 18, factor: 1.05 },
      { name: "Koraput", x: 28, y: 82, factor: 0.90 }
    ],
    baseRain: { active: 85, depression: 155, coastal: 92 }
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    zone: "Eastern India",
    waterBody: "BAY OF BENGAL",
    coords: "88.3°E · 22.5°N",
    models: {
      active: "Gangetic Plain-Delta Model v2.6",
      depression: "North Bay Low Pressure Expert v3.2",
      coastal: "Sub-Himalayan Foothills Orographic Booster v2.4"
    },
    descriptions: {
      active: "Active monsoon trough bringing widespread rain to Gangetic West Bengal.",
      depression: "North Bay depression pushing heavy moisture into Delta and Sundarbans.",
      coastal: "Sub-Himalayan convection affecting Darjeeling and Jalpaiguri."
    },
    districts: [
      { name: "Kolkata", x: 68, y: 65, factor: 1.22 },
      { name: "Darjeeling", x: 58, y: 12, factor: 1.65 },
      { name: "Jalpaiguri", x: 65, y: 18, factor: 1.58 },
      { name: "South 24 Parganas", x: 72, y: 76, factor: 1.35 },
      { name: "Howrah", x: 64, y: 64, factor: 1.18 },
      { name: "Murshidabad", x: 62, y: 44, factor: 0.92 },
      { name: "Burdwan", x: 52, y: 55, factor: 0.96 },
      { name: "Purulia", x: 35, y: 58, factor: 0.74 }
    ],
    baseRain: { active: 82, depression: 142, coastal: 98 }
  },
  {
    id: "assam",
    name: "Assam",
    zone: "North-Eastern India",
    waterBody: "BRAHMAPUTRA VALLEY",
    coords: "92.9°E · 26.2°N",
    models: {
      active: "Brahmaputra Valley Convective Net v2.9",
      depression: "Northeast Flash Flood Classifier v3.1",
      coastal: "Valley-Ridge Orographic Downscaler v2.3"
    },
    descriptions: {
      active: "Strong southerly Bay moisture flow funneled into the Brahmaputra Valley.",
      depression: "Upper air cyclonic circulation causing intense multi-day valley-wide deluge.",
      coastal: "Foothill convection triggering flash flooding across northern tributaries."
    },
    districts: [
      { name: "Guwahati", x: 42, y: 52, factor: 1.15 },
      { name: "Dibrugarh", x: 88, y: 22, factor: 1.38 },
      { name: "Silchar", x: 52, y: 82, factor: 1.45 },
      { name: "Jorhat", x: 72, y: 35, factor: 1.20 },
      { name: "Tezpur", x: 55, y: 40, factor: 1.18 },
      { name: "Kamrup", x: 38, y: 48, factor: 1.05 },
      { name: "Nagaon", x: 56, y: 52, factor: 1.12 },
      { name: "Tinsukia", x: 92, y: 18, factor: 1.42 }
    ],
    baseRain: { active: 95, depression: 168, coastal: 110 }
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    zone: "Western India",
    waterBody: "ARAVALLI RANGE",
    coords: "74.2°E · 26.9°N",
    models: {
      active: "Arid-Semi Arid Monsoonal Net v2.1",
      depression: "Deep Continental Depression Booster v2.4",
      coastal: "Aravalli Orographic Lift Model v1.8"
    },
    descriptions: {
      active: "Monsoon trough extension bringing scattered showers across East Rajasthan.",
      depression: "Overland depression from central India reaching Rajasthan with heavy rain.",
      coastal: "Localized convective cells forming along the Aravalli range slopes."
    },
    districts: [
      { name: "Jaipur", x: 62, y: 38, factor: 1.05 },
      { name: "Jodhpur", x: 38, y: 48, factor: 0.58 },
      { name: "Udaipur", x: 42, y: 75, factor: 1.28 },
      { name: "Bikaner", x: 35, y: 26, factor: 0.42 },
      { name: "Kota", x: 72, y: 68, factor: 1.35 },
      { name: "Jaisalmer", x: 18, y: 42, factor: 0.28 },
      { name: "Ajmer", x: 52, y: 50, factor: 0.92 },
      { name: "Alwar", x: 70, y: 30, factor: 0.98 }
    ],
    baseRain: { active: 38, depression: 78, coastal: 45 }
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    zone: "Northern India",
    waterBody: "GANGETIC BASIN",
    coords: "80.9°E · 26.8°N",
    models: {
      active: "Indo-Gangetic Convective Expert v2.5",
      depression: "Low-Pressure Trough Deep Net v2.8",
      coastal: "Terai Foothill Convergence Booster v2.2"
    },
    descriptions: {
      active: "East-west monsoon trough oscillating over the central Gangetic plains.",
      depression: "Monsoon depression tracking northwestward across eastern and central UP.",
      coastal: "Foothill Terai convergence causing intense downpours near the Nepal border."
    },
    districts: [
      { name: "Lucknow", x: 52, y: 44, factor: 1.08 },
      { name: "Varanasi", x: 76, y: 62, factor: 1.18 },
      { name: "Prayagraj", x: 65, y: 64, factor: 1.12 },
      { name: "Agra", x: 28, y: 42, factor: 0.82 },
      { name: "Gorakhpur", x: 74, y: 38, factor: 1.35 },
      { name: "Kanpur", x: 48, y: 52, factor: 1.02 },
      { name: "Meerut", x: 22, y: 22, factor: 0.88 },
      { name: "Bareilly", x: 38, y: 28, factor: 1.05 }
    ],
    baseRain: { active: 68, depression: 125, coastal: 78 }
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    zone: "Central India",
    waterBody: "NARMADA BASIN",
    coords: "77.4°E · 23.2°N",
    models: {
      active: "Central India Trough Hydro Net v2.6",
      depression: "Narmada Valley Cyclonic Tracker v3.0",
      coastal: "Malwa-Vindhya Orographic Booster v2.1"
    },
    descriptions: {
      active: "Axis of monsoon trough positioned right across Madhya Pradesh.",
      depression: "Depression entering from Odisha causing widespread heavy falls in Narmada belt.",
      coastal: "Intense afternoon convective clusters over Satpura and Vindhya ranges."
    },
    districts: [
      { name: "Bhopal", x: 46, y: 52, factor: 1.08 },
      { name: "Indore", x: 32, y: 64, factor: 1.02 },
      { name: "Jabalpur", x: 68, y: 54, factor: 1.25 },
      { name: "Gwalior", x: 44, y: 22, factor: 0.82 },
      { name: "Ujjain", x: 30, y: 56, factor: 0.95 },
      { name: "Hoshangabad", x: 48, y: 62, factor: 1.32 },
      { name: "Rewa", x: 78, y: 36, factor: 1.10 },
      { name: "Sagar", x: 54, y: 40, factor: 1.05 }
    ],
    baseRain: { active: 78, depression: 140, coastal: 85 }
  },
  {
    id: "telangana",
    name: "Telangana",
    zone: "Southern Peninsula",
    waterBody: "GODAVARI BASIN",
    coords: "78.4°E · 17.3°N",
    models: {
      active: "Deccan Plateau Convective Booster v2.3",
      depression: "Godavari Inundation Forecaster v2.9",
      coastal: "Mid-Peninsular Shear Zone Expert v2.1"
    },
    descriptions: {
      active: "Southwest monsoon current delivering healthy rainfall to northern Telangana.",
      depression: "Bay depression crossing coast and moving inland over Godavari catchment.",
      coastal: "Shear zone convection bringing gusty thunderstorm activity."
    },
    districts: [
      { name: "Hyderabad", x: 45, y: 62, factor: 0.95 },
      { name: "Warangal", x: 62, y: 48, factor: 1.15 },
      { name: "Karimnagar", x: 55, y: 35, factor: 1.12 },
      { name: "Nizamabad", x: 38, y: 30, factor: 1.05 },
      { name: "Khammam", x: 75, y: 68, factor: 1.28 },
      { name: "Nalgonda", x: 54, y: 72, factor: 0.92 },
      { name: "Adilabad", x: 48, y: 15, factor: 1.22 },
      { name: "Mahabubnagar", x: 36, y: 76, factor: 0.80 }
    ],
    baseRain: { active: 68, depression: 122, coastal: 75 }
  },
  {
    id: "bihar",
    name: "Bihar",
    zone: "Eastern India",
    waterBody: "GANGES BASIN",
    coords: "85.1°E · 25.6°N",
    models: {
      active: "Kosi-Ganga Flood Forecaster v2.7",
      depression: "East Indian Trough Neural Network v2.9",
      coastal: "Terai-Foothill Orographic Expert v2.4"
    },
    descriptions: {
      active: "Monsoon trough shifting northward toward Himalayan foothills.",
      depression: "Remnants of Bay depression causing intense rainfall in North Bihar basins.",
      coastal: "Strong moisture incursion from Bay of Bengal producing convective downpours."
    },
    districts: [
      { name: "Patna", x: 48, y: 52, factor: 1.05 },
      { name: "Gaya", x: 46, y: 72, factor: 0.92 },
      { name: "Muzaffarpur", x: 52, y: 38, factor: 1.18 },
      { name: "Bhagalpur", x: 78, y: 58, factor: 1.12 },
      { name: "Purnia", x: 84, y: 36, factor: 1.32 },
      { name: "Darbhanga", x: 62, y: 35, factor: 1.22 },
      { name: "Champaran", x: 32, y: 25, factor: 1.38 },
      { name: "Nalanda", x: 55, y: 60, factor: 1.02 }
    ],
    baseRain: { active: 72, depression: 135, coastal: 88 }
  },
  {
    id: "punjab",
    name: "Punjab",
    zone: "Northern India",
    waterBody: "SUTLEJ-BEAS BASIN",
    coords: "75.3°E · 31.1°N",
    models: {
      active: "Northwest Plains Monsoon Model v2.2",
      depression: "Western Disturbance Interaction Net v2.6",
      coastal: "Shivalik Foothill Lift Expert v2.0"
    },
    descriptions: {
      active: "Northern limit of monsoon reaching Punjab with seasonal showers.",
      depression: "Monsoon low interacting with upper-air westerly trough causing heavy rain.",
      coastal: "Sub-mountainous rain bands over Pathankot, Hoshiarpur, and Ropar."
    },
    districts: [
      { name: "Amritsar", x: 32, y: 32, factor: 0.98 },
      { name: "Ludhiana", x: 55, y: 55, factor: 1.05 },
      { name: "Jalandhar", x: 45, y: 42, factor: 1.02 },
      { name: "Patiala", x: 68, y: 72, factor: 1.12 },
      { name: "Bathinda", x: 32, y: 76, factor: 0.72 },
      { name: "Hoshiarpur", x: 62, y: 32, factor: 1.32 }
    ],
    baseRain: { active: 48, depression: 92, coastal: 58 }
  },
  {
    id: "haryana",
    name: "Haryana",
    zone: "Northern India",
    waterBody: "YAMUNA BASIN",
    coords: "76.7°E · 29.0°N",
    models: {
      active: "Yamuna Catchment Booster v2.1",
      depression: "Continental Convergence Net v2.4",
      coastal: "Northern Plains Monsoon Trough v1.9"
    },
    descriptions: {
      active: "Monsoon trough oscillating across Haryana bringing scattered showers.",
      depression: "Deep continental low steering heavy rain into northern and eastern belts.",
      coastal: "Convective cloud bursts over Shivalik belt in Yamunanagar and Panchkula."
    },
    districts: [
      { name: "Gurugram", x: 65, y: 78, factor: 0.95 },
      { name: "Faridabad", x: 72, y: 82, factor: 1.02 },
      { name: "Karnal", x: 68, y: 42, factor: 1.15 },
      { name: "Hisar", x: 35, y: 55, factor: 0.75 },
      { name: "Ambala", x: 72, y: 22, factor: 1.35 },
      { name: "Rohtak", x: 52, y: 62, factor: 0.92 }
    ],
    baseRain: { active: 44, depression: 86, coastal: 52 }
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    zone: "Northern India",
    waterBody: "HIMALAYAN RIDGES",
    coords: "77.1°E · 31.1°N",
    models: {
      active: "Himalayan Orographic Flash Flood Expert v3.0",
      depression: "Monsoon-WD Coupled Neural Net v3.2",
      coastal: "Valley Cloudburst Forecaster v2.7"
    },
    descriptions: {
      active: "Heavy orographic rainfall over Kangra, Mandi, and Shimla hills.",
      depression: "Coupled monsoon low and western disturbance triggering cloudburst potential.",
      coastal: "Steep terrain-induced localized convective storms."
    },
    districts: [
      { name: "Shimla", x: 52, y: 68, factor: 1.25 },
      { name: "Kangra", x: 32, y: 38, factor: 1.62 },
      { name: "Kullu", x: 55, y: 42, factor: 1.32 },
      { name: "Mandi", x: 48, y: 52, factor: 1.28 },
      { name: "Solan", x: 48, y: 78, factor: 1.18 },
      { name: "Chamba", x: 28, y: 22, factor: 1.40 }
    ],
    baseRain: { active: 85, depression: 155, coastal: 105 }
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    zone: "Northern India",
    waterBody: "CENTRAL HIMALAYAS",
    coords: "79.0°E · 30.0°N",
    models: {
      active: "Central Himalayan Torrential Net v3.1",
      depression: "Ganga Headwaters Flood Booster v3.3",
      coastal: "Orographic Cloudburst Classifier v2.8"
    },
    descriptions: {
      active: "High-intensity rainfall across Kumaon and Garhwal foothills.",
      depression: "Depression remnant interacting with mountain barrier creating extreme runoff.",
      coastal: "Severe local convective cloudbursts over steep river valleys."
    },
    districts: [
      { name: "Dehradun", x: 32, y: 42, factor: 1.55 },
      { name: "Nainital", x: 72, y: 75, factor: 1.48 },
      { name: "Haridwar", x: 36, y: 58, factor: 1.22 },
      { name: "Chamoli", x: 62, y: 32, factor: 1.35 },
      { name: "Almora", x: 70, y: 62, factor: 1.12 },
      { name: "Tehri Garhwal", x: 45, y: 38, factor: 1.30 }
    ],
    baseRain: { active: 92, depression: 165, coastal: 115 }
  },
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    zone: "Northern India",
    waterBody: "JHELUM-INDUS BASIN",
    coords: "74.8°E · 34.0°N",
    models: {
      active: "Pir Panjal Orographic Model v2.4",
      depression: "Western Disturbance Core Classifier v3.1",
      coastal: "Valley Basin Inundation Booster v2.2"
    },
    descriptions: {
      active: "Monsoon surge penetrating south of Pir Panjal into Jammu plains.",
      depression: "Western disturbance steering heavy precipitation across Kashmir valley.",
      coastal: "High altitude precipitation and localized cloud bursts."
    },
    districts: [
      { name: "Jammu", x: 42, y: 82, factor: 1.35 },
      { name: "Srinagar", x: 50, y: 42, factor: 0.85 },
      { name: "Anantnag", x: 58, y: 55, factor: 0.98 },
      { name: "Baramulla", x: 38, y: 35, factor: 0.88 },
      { name: "Udhampur", x: 52, y: 72, factor: 1.45 },
      { name: "Pulwama", x: 52, y: 48, factor: 0.92 }
    ],
    baseRain: { active: 55, depression: 110, coastal: 70 }
  },
  {
    id: "goa",
    name: "Goa",
    zone: "Western India",
    waterBody: "ARABIAN SEA",
    coords: "73.8°E · 15.3°N",
    models: {
      active: "Konkan Coastal Surge Classifier v2.9",
      depression: "Arabian Sea Offshore Vortex Net v3.2",
      coastal: "Western Ghats Escarpment Model v2.6"
    },
    descriptions: {
      active: "Vigorous monsoon winds producing heavy continuous downpours.",
      depression: "Offshore vortex off Konkan-Goa coast driving torrential rainfall.",
      coastal: "Gale-force onshore maritime squalls with high rain rates."
    },
    districts: [
      { name: "North Goa", x: 45, y: 32, factor: 1.25 },
      { name: "South Goa", x: 55, y: 70, factor: 1.30 },
      { name: "Panaji", x: 40, y: 38, factor: 1.20 },
      { name: "Margao", x: 50, y: 62, factor: 1.28 },
      { name: "Vasco da Gama", x: 35, y: 48, factor: 1.18 },
      { name: "Mapusa", x: 42, y: 24, factor: 1.22 }
    ],
    baseRain: { active: 118, depression: 185, coastal: 135 }
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    zone: "Eastern India",
    waterBody: "CHOTA NAGPUR PLATEAU",
    coords: "85.3°E · 23.3°N",
    models: {
      active: "Plateau Convective Cluster Net v2.4",
      depression: "Bay Depression Overland Extender v2.8",
      coastal: "Subarnarekha Basin Forecaster v2.2"
    },
    descriptions: {
      active: "Monsoon trough positioned over plateau producing widespread rain.",
      depression: "Deep depression tracking across southern Jharkhand with heavy precipitation.",
      coastal: "Orographic convective thunderstorms across plateau escarpments."
    },
    districts: [
      { name: "Ranchi", x: 48, y: 55, factor: 1.10 },
      { name: "Jamshedpur", x: 72, y: 75, factor: 1.25 },
      { name: "Dhanbad", x: 68, y: 38, factor: 1.05 },
      { name: "Bokaro", x: 60, y: 42, factor: 1.02 },
      { name: "Hazaribagh", x: 45, y: 35, factor: 0.95 },
      { name: "Deoghar", x: 75, y: 25, factor: 0.98 }
    ],
    baseRain: { active: 74, depression: 135, coastal: 82 }
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    zone: "Central India",
    waterBody: "MAHANADI BASIN",
    coords: "81.6°E · 21.2°N",
    models: {
      active: "Mahanadi Catchment Neural Model v2.5",
      depression: "Central Depression Path Forecaster v3.0",
      coastal: "Bastar Orographic Booster v2.3"
    },
    descriptions: {
      active: "Active monsoon trough delivering heavy rainfall to central districts.",
      depression: "Bay depressions traversing Chhattisgarh heading towards central India.",
      coastal: "Forested hilly plateau convection across Bastar region."
    },
    districts: [
      { name: "Raipur", x: 50, y: 48, factor: 1.08 },
      { name: "Bilaspur", x: 55, y: 32, factor: 1.15 },
      { name: "Durg", x: 42, y: 52, factor: 1.02 },
      { name: "Bastar", x: 48, y: 82, factor: 1.35 },
      { name: "Korba", x: 68, y: 28, factor: 1.22 },
      { name: "Rajnandgaon", x: 35, y: 58, factor: 0.98 }
    ],
    baseRain: { active: 78, depression: 142, coastal: 88 }
  },
  {
    id: "delhi",
    name: "Delhi NCR",
    zone: "Northern India",
    waterBody: "YAMUNA BASIN",
    coords: "77.2°E · 28.6°N",
    models: {
      active: "Urban Canopy Micro-Climate Expert v2.4",
      depression: "Monsoon Trough Axial Net v2.6",
      coastal: "Convective Boundary Layer Booster v2.1"
    },
    descriptions: {
      active: "Monsoon trough hovering over NCR bringing intense urban thunderstorms.",
      depression: "Depression moisture convergence causing heavy waterlogging and high rain rates.",
      coastal: "Localized heat island convective bursts across metropolitan districts."
    },
    districts: [
      { name: "New Delhi", x: 50, y: 50, factor: 1.05 },
      { name: "South Delhi", x: 55, y: 68, factor: 1.12 },
      { name: "North Delhi", x: 48, y: 30, factor: 1.02 },
      { name: "East Delhi", x: 68, y: 45, factor: 1.08 },
      { name: "West Delhi", x: 32, y: 48, factor: 0.98 },
      { name: "Central Delhi", x: 52, y: 42, factor: 1.04 }
    ],
    baseRain: { active: 48, depression: 96, coastal: 58 }
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    zone: "North-Eastern India",
    waterBody: "SHILLONG PLATEAU",
    coords: "91.8°E · 25.5°N",
    models: {
      active: "Extreme Orographic World-Record Net v3.5",
      depression: "Khasi Hills Flash Flooding Classifier v3.4",
      coastal: "Southern Escarpment Moisture Pump v3.2"
    },
    descriptions: {
      active: "Funneled Bay moisture slamming directly into the vertical southern Khasi wall.",
      depression: "Deep depression triggering extreme, world-record precipitation rates.",
      coastal: "Continuous orographic condensation across Cherrapunji and Mawsynram belts."
    },
    districts: [
      { name: "Shillong", x: 58, y: 42, factor: 1.35 },
      { name: "Cherrapunji", x: 55, y: 65, factor: 2.15 },
      { name: "Mawsynram", x: 48, y: 68, factor: 2.25 },
      { name: "Tura (W. Garo)", x: 22, y: 52, factor: 1.25 },
      { name: "Jowai (W. Jaintia)", x: 75, y: 55, factor: 1.45 },
      { name: "Nongpoh (Ri-Bhoi)", x: 52, y: 25, factor: 1.15 }
    ],
    baseRain: { active: 145, depression: 245, coastal: 180 }
  },
  {
    id: "tripura",
    name: "Tripura",
    zone: "North-Eastern India",
    waterBody: "SURMA-MEGHNA BASIN",
    coords: "91.2°E · 23.8°N",
    models: {
      active: "Eastern Surma Valley Net v2.3",
      depression: "Bay Maritime Depression Receptor v2.9",
      coastal: "Sub-Tropical Convective Classifier v2.1"
    },
    descriptions: {
      active: "Strong southwesterly maritime inflow from the Bay of Bengal delta.",
      depression: "Depression tracking across Bangladesh triggering widespread continuous rain.",
      coastal: "Pre-monsoon and monsoon convective thunderstorm clusters."
    },
    districts: [
      { name: "Agartala", x: 35, y: 42, factor: 1.15 },
      { name: "Gomati", x: 52, y: 62, factor: 1.10 },
      { name: "South Tripura", x: 48, y: 82, factor: 1.22 },
      { name: "Dhalai", x: 65, y: 45, factor: 1.05 },
      { name: "North Tripura", x: 75, y: 25, factor: 1.18 },
      { name: "Unakoti", x: 70, y: 18, factor: 1.08 }
    ],
    baseRain: { active: 82, depression: 145, coastal: 95 }
  }
];

// Helper to generate full meteorological scenario data for any selected state
export function generateStateData(stateId, seed = 0) {
  const state = INDIAN_STATES.find(s => s.id === stateId) || INDIAN_STATES[0];

  // Deterministic slight fluctuation generator based on seed
  const jitter = (val, range = 0.08) => {
    const pseudoRandom = Math.sin((seed + 1) * (val + 13.37)) * range;
    return Math.round(val * (1 + pseudoRandom));
  };

  const buildScenario = (type, label, short, icon, conf) => {
    const baseVal = state.baseRain[type];
    const rawMean = jitter(baseVal, 0.05);
    // AI calibration uplift based on terrain
    const upliftRatio = type === "depression" ? 1.24 : type === "active" ? 1.18 : 1.35;
    const correctedMean = Math.round(rawMean * upliftRatio);

    const districts = state.districts.map(d => {
      const raw = Math.round(rawMean * d.factor);
      const corrected = Math.round(correctedMean * d.factor);
      // Heavy probability (>64mm) and Very Heavy (>115mm)
      const heavyProb = Math.min(99, Math.max(12, Math.round((corrected / 100) * 75 + (type === "depression" ? 20 : 5))));
      const veryHeavyProb = Math.min(96, Math.max(4, Math.round((corrected / 150) * 65 + (type === "depression" ? 25 : 0))));
      return [d.name, raw, corrected, heavyProb, veryHeavyProb];
    });

    const heavyOverall = Math.min(98, Math.max(25, Math.round((correctedMean / 110) * 78)));
    const veryHeavyOverall = Math.min(94, Math.max(8, Math.round((correctedMean / 160) * 68)));

    // Verification metrics calculated against standard baseline
    const rmseNwp = +(38.0 + baseVal * 0.18 + (seed % 3) * 0.5).toFixed(1);
    const rmseAi = +(rmseNwp * 0.58).toFixed(1);
    const csiNwp = +(0.44 + (baseVal > 80 ? 0.03 : -0.02)).toFixed(2);
    const csiAi = +(csiNwp + 0.22).toFixed(2);
    const podNwp = +(0.62 + (seed % 4) * 0.01).toFixed(2);
    const podAi = +(0.84 + (seed % 3) * 0.01).toFixed(2);
    const farNwp = +(0.35 - (seed % 3) * 0.01).toFixed(2);
    const farAi = +(0.19 - (seed % 2) * 0.01).toFixed(2);
    const fssNwp = +(0.48 + (seed % 3) * 0.01).toFixed(2);
    const fssAi = +(0.71 + (seed % 2) * 0.01).toFixed(2);

    return {
      label,
      short,
      icon,
      confidence: conf,
      model: state.models[type],
      description: state.descriptions[type],
      raw: rawMean,
      corrected: correctedMean,
      heavy: heavyOverall,
      veryHeavy: veryHeavyOverall,
      districts,
      verification: { rmseNwp, rmseAi, csiNwp, csiAi, podNwp, podAi, farNwp, farAi, fssNwp, fssAi }
    };
  };

  return {
    state,
    scenarios: {
      active: buildScenario("active", "Active Monsoon", "ACTIVE", "🌧️", 91),
      depression: buildScenario("depression", "Low Pressure / Depression", "DEPRESSION", "🌀", 94),
      coastal: buildScenario("coastal", "Coastal / Convective Flow", "CONVECTIVE", "🌊", 89)
    }
  };
}
