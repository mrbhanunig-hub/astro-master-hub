// birth-profile.js — Comprehensive Location & Multi-Profile Manager (The Cosmic Counsellor)
(function (window) {
  var STORAGE_KEY = "cc_birth_profiles_list";
  var ACTIVE_KEY = "cc_active_profile_id";

  // --- Detailed Location Database (India States & Major Cities with Coordinates) ---
  var LOCATION_DATA = {
    "India": {
      "Andhra Pradesh": [
        { name: "Visakhapatnam", lat: 17.6868, lon: 83.2185 },
        { name: "Vijayawada", lat: 16.5062, lon: 80.6480 },
        { name: "Guntur", lat: 16.3067, lon: 80.4365 },
        { name: "Nellore", lat: 14.4426, lon: 79.9865 },
        { name: "Kurnool", lat: 15.8281, lon: 78.0373 },
        { name: "Tirupati", lat: 13.6288, lon: 79.4192 },
        { name: "Rajahmundry", lat: 17.0005, lon: 81.8040 },
        { name: "Kakinada", lat: 16.9891, lon: 82.2475 },
        { name: "Kadapa", lat: 14.4673, lon: 78.8242 },
        { name: "Anantapur", lat: 14.6819, lon: 77.6006 }
      ],
      "Arunachal Pradesh": [
        { name: "Itanagar", lat: 27.0844, lon: 93.6053 },
        { name: "Tawang", lat: 27.5860, lon: 91.8594 },
        { name: "Pasighat", lat: 28.0667, lon: 95.3333 },
        { name: "Ziro", lat: 27.5480, lon: 93.8340 }
      ],
      "Assam": [
        { name: "Guwahati", lat: 26.1445, lon: 91.7362 },
        { name: "Silchar", lat: 24.8333, lon: 92.7789 },
        { name: "Dibrugarh", lat: 27.4728, lon: 94.9120 },
        { name: "Jorhat", lat: 26.7509, lon: 94.2037 },
        { name: "Tezpur", lat: 26.6338, lon: 92.8000 },
        { name: "Nagaon", lat: 26.3480, lon: 92.6840 }
      ],
      "Bihar": [
        { name: "Patna", lat: 25.5941, lon: 85.1376 },
        { name: "Gaya", lat: 24.7955, lon: 84.9994 },
        { name: "Bhagalpur", lat: 25.2425, lon: 86.9842 },
        { name: "Muzaffarpur", lat: 26.1225, lon: 85.3906 },
        { name: "Darbhanga", lat: 26.1542, lon: 85.8918 },
        { name: "Purnia", lat: 25.7771, lon: 87.4753 },
        { name: "Arrah", lat: 25.5541, lon: 84.6636 },
        { name: "Begusarai", lat: 25.4182, lon: 86.1272 },
        { name: "Katihar", lat: 25.5394, lon: 87.5716 },
        { name: "Munger", lat: 25.3747, lon: 86.4735 },
        { name: "Chhapra", lat: 25.7810, lon: 84.7470 },
        { name: "Sasaram", lat: 24.9500, lon: 84.0333 }
      ],
      "Chhattisgarh": [
        { name: "Raipur", lat: 21.2514, lon: 81.6296 },
        { name: "Bhilai", lat: 21.1938, lon: 81.3509 },
        { name: "Bilaspur", lat: 22.0797, lon: 82.1409 },
        { name: "Korba", lat: 22.3595, lon: 82.7501 },
        { name: "Durg", lat: 21.1904, lon: 81.2849 },
        { name: "Rajnandgaon", lat: 21.0974, lon: 81.0388 }
      ],
      "Goa": [
        { name: "Panaji", lat: 15.4909, lon: 73.8278 },
        { name: "Margao", lat: 15.2832, lon: 73.9862 },
        { name: "Vasco da Gama", lat: 15.3955, lon: 73.8154 }
      ],
      "Gujarat": [
        { name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
        { name: "Surat", lat: 21.1702, lon: 72.8311 },
        { name: "Vadodara", lat: 22.3072, lon: 73.1812 },
        { name: "Rajkot", lat: 22.3039, lon: 70.8022 },
        { name: "Bhavnagar", lat: 21.7645, lon: 72.1519 },
        { name: "Jamnagar", lat: 22.4707, lon: 70.0577 },
        { name: "Gandhinagar", lat: 23.2156, lon: 72.6369 },
        { name: "Junagadh", lat: 21.5222, lon: 70.4579 },
        { name: "Anand", lat: 22.5645, lon: 72.9289 }
      ],
      "Haryana": [
        { name: "Gurugram", lat: 28.4595, lon: 77.0266 },
        { name: "Faridabad", lat: 28.4089, lon: 77.3178 },
        { name: "Panipat", lat: 29.3909, lon: 76.9635 },
        { name: "Ambala", lat: 30.3752, lon: 76.7821 },
        { name: "Karnal", lat: 29.6857, lon: 76.9905 },
        { name: "Hisar", lat: 29.1492, lon: 75.7217 },
        { name: "Rohtak", lat: 28.8955, lon: 76.6066 }
      ],
      "Himachal Pradesh": [
        { name: "Shimla", lat: 31.1048, lon: 77.1734 },
        { name: "Dharamshala", lat: 32.2190, lon: 76.3234 },
        { name: "Manali", lat: 32.2396, lon: 77.1887 },
        { name: "Kullu", lat: 31.9576, lon: 77.1095 },
        { name: "Solan", lat: 30.9045, lon: 77.0967 }
      ],
      "Jharkhand": [
        { name: "Ranchi", lat: 23.3441, lon: 85.3096 },
        { name: "Jamshedpur", lat: 22.8046, lon: 86.2029 },
        { name: "Dhanbad", lat: 23.7957, lon: 86.4304 },
        { name: "Bokaro", lat: 23.6693, lon: 86.1511 },
        { name: "Deoghar", lat: 24.4823, lon: 86.6961 }
      ],
      "Karnataka": [
        { name: "Bengaluru", lat: 12.9716, lon: 77.5946 },
        { name: "Mysuru", lat: 12.2958, lon: 76.6394 },
        { name: "Hubballi", lat: 15.3647, lon: 75.1240 },
        { name: "Mangaluru", lat: 12.9141, lon: 74.8560 },
        { name: "Belagavi", lat: 15.8497, lon: 74.4977 },
        { name: "Kalaburagi (Gulbarga)", lat: 17.3297, lon: 76.8343 },
        { name: "Shivamogga", lat: 13.9299, lon: 75.5681 },
        { name: "Udupi", lat: 13.3409, lon: 74.7421 }
      ],
      "Kerala": [
        { name: "Thiruvananthapuram", lat: 8.5241, lon: 76.9366 },
        { name: "Kochi", lat: 9.9312, lon: 76.2673 },
        { name: "Kozhikode", lat: 11.2588, lon: 75.7804 },
        { name: "Thrissur", lat: 10.5276, lon: 76.2144 },
        { name: "Kollam", lat: 8.8932, lon: 76.6141 },
        { name: "Kannur", lat: 11.8745, lon: 75.3704 }
      ],
      "Madhya Pradesh": [
        { name: "Bhopal", lat: 23.2599, lon: 77.4126 },
        { name: "Indore", lat: 22.7196, lon: 75.8577 },
        { name: "Gwalior", lat: 26.2183, lon: 78.1828 },
        { name: "Jabalpur", lat: 23.1815, lon: 79.9864 },
        { name: "Ujjain", lat: 23.1765, lon: 75.7885 },
        { name: "Sagar", lat: 23.8388, lon: 78.7378 },
        { name: "Rewa", lat: 24.5364, lon: 81.3037 },
        { name: "Satna", lat: 24.6005, lon: 80.8322 }
      ],
      "Maharashtra": [
        { name: "Mumbai", lat: 19.0760, lon: 72.8777 },
        { name: "Pune", lat: 18.5204, lon: 73.8567 },
        { name: "Nagpur", lat: 21.1458, lon: 79.0882 },
        { name: "Nashik", lat: 19.9975, lon: 73.7898 },
        { name: "Thane", lat: 19.2183, lon: 72.9781 },
        { name: "Chhatrapati Sambhajinagar", lat: 19.8762, lon: 75.3433 },
        { name: "Solapur", lat: 17.6599, lon: 75.9064 },
        { name: "Kolhapur", lat: 16.7050, lon: 74.2433 },
        { name: "Amravati", lat: 20.9374, lon: 77.7796 }
      ],
      "Manipur": [
        { name: "Imphal", lat: 24.8170, lon: 93.9368 },
        { name: "Thoubal", lat: 24.6333, lon: 93.9833 }
      ],
      "Meghalaya": [
        { name: "Shillong", lat: 25.5788, lon: 91.8933 },
        { name: "Tura", lat: 25.5138, lon: 90.2020 }
      ],
      "Mizoram": [
        { name: "Aizawl", lat: 23.7271, lon: 92.7176 },
        { name: "Lunglei", lat: 22.8879, lon: 92.7361 }
      ],
      "Nagaland": [
        { name: "Kohima", lat: 25.6751, lon: 94.1086 },
        { name: "Dimapur", lat: 25.9091, lon: 93.7266 }
      ],
      "Odisha": [
        { name: "Bhubaneswar", lat: 20.2961, lon: 85.8245 },
        { name: "Cuttack", lat: 20.4625, lon: 85.8830 },
        { name: "Rourkela", lat: 22.2604, lon: 84.8536 },
        { name: "Puri", lat: 19.8135, lon: 85.8312 },
        { name: "Sambalpur", lat: 21.4669, lon: 83.9756 }
      ],
      "Punjab": [
        { name: "Amritsar", lat: 31.6340, lon: 74.8723 },
        { name: "Ludhiana", lat: 30.9010, lon: 75.8573 },
        { name: "Jalandhar", lat: 31.3260, lon: 75.5762 },
        { name: "Patiala", lat: 30.3398, lon: 76.3869 },
        { name: "Bathinda", lat: 30.2110, lon: 74.9455 },
        { name: "Mohali", lat: 30.7046, lon: 76.7179 }
      ],
      "Rajasthan": [
        { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
        { name: "Jodhpur", lat: 26.2389, lon: 73.0243 },
        { name: "Kota", lat: 25.2138, lon: 75.8648 },
        { name: "Bikaner", lat: 28.0229, lon: 73.3119 },
        { name: "Ajmer", lat: 26.4499, lon: 74.6399 },
        { name: "Udaipur", lat: 24.5854, lon: 73.7125 },
        { name: "Bhilwara", lat: 25.3407, lon: 74.6313 },
        { name: "Alwar", lat: 27.5530, lon: 76.6346 }
      ],
      "Sikkim": [
        { name: "Gangtok", lat: 27.3389, lon: 88.6065 },
        { name: "Namchi", lat: 27.1656, lon: 88.3639 }
      ],
      "Tamil Nadu": [
        { name: "Chennai", lat: 13.0827, lon: 80.2707 },
        { name: "Coimbatore", lat: 11.0168, lon: 76.9558 },
        { name: "Madurai", lat: 9.9252, lon: 78.1198 },
        { name: "Tiruchirappalli", lat: 10.7905, lon: 78.7047 },
        { name: "Salem", lat: 11.6643, lon: 78.1460 },
        { name: "Tirunelveli", lat: 8.7139, lon: 77.7567 }
      ],
      "Telangana": [
        { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
        { name: "Warangal", lat: 17.9689, lon: 79.5941 },
        { name: "Nizamabad", lat: 18.6725, lon: 78.0941 },
        { name: "Karimnagar", lat: 18.4386, lon: 79.1288 }
      ],
      "Tripura": [
        { name: "Agartala", lat: 23.8315, lon: 91.2868 },
        { name: "Udaipur", lat: 23.5322, lon: 91.4830 }
      ],
      "Uttar Pradesh": [
        { name: "Kanpur", lat: 26.4499, lon: 80.3319 },
        { name: "Lucknow", lat: 26.8467, lon: 80.9462 },
        { name: "Varanasi", lat: 25.3176, lon: 82.9739 },
        { name: "Prayagraj", lat: 25.4358, lon: 81.8463 },
        { name: "Agra", lat: 27.1767, lon: 78.0081 },
        { name: "Noida", lat: 28.5355, lon: 77.3910 },
        { name: "Ghaziabad", lat: 28.6692, lon: 77.4538 },
        { name: "Meerut", lat: 28.9845, lon: 77.7064 },
        { name: "Gorakhpur", lat: 26.7606, lon: 83.3732 },
        { name: "Bareilly", lat: 28.3670, lon: 79.4304 },
        { name: "Aligarh", lat: 27.8974, lon: 78.0880 },
        { name: "Moradabad", lat: 28.8386, lon: 78.7733 },
        { name: "Saharanpur", lat: 29.9680, lon: 77.5460 },
        { name: "Ayodhya", lat: 26.7922, lon: 82.1998 },
        { name: "Jhansi", lat: 25.4484, lon: 78.5685 },
        { name: "Mathura", lat: 27.4924, lon: 77.6737 }
      ],
      "Uttarakhand": [
        { name: "Dehradun", lat: 30.3165, lon: 78.0322 },
        { name: "Haridwar", lat: 29.9457, lon: 78.1642 },
        { name: "Rishikesh", lat: 30.0869, lon: 78.2676 },
        { name: "Nainital", lat: 29.3919, lon: 79.4542 },
        { name: "Haldwani", lat: 29.2183, lon: 79.5130 },
        { name: "Roorkee", lat: 29.8543, lon: 77.8880 }
      ],
      "West Bengal": [
        { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
        { name: "Howrah", lat: 22.5958, lon: 88.2636 },
        { name: "Siliguri", lat: 26.7271, lon: 88.3953 },
        { name: "Durgapur", lat: 23.5204, lon: 87.3119 },
        { name: "Asansol", lat: 23.6739, lon: 86.9524 }
      ],
      "Delhi (UT)": [
        { name: "New Delhi", lat: 28.6139, lon: 77.2090 },
        { name: "Dwarka", lat: 28.5921, lon: 77.0460 },
        { name: "Rohini", lat: 28.7495, lon: 77.0565 }
      ],
      "Chandigarh (UT)": [
        { name: "Chandigarh", lat: 30.7333, lon: 76.7794 }
      ],
      "Jammu & Kashmir (UT)": [
        { name: "Srinagar", lat: 34.0837, lon: 74.7973 },
        { name: "Jammu", lat: 32.7266, lon: 74.8570 }
      ],
      "Ladakh (UT)": [
        { name: "Leh", lat: 34.1526, lon: 77.5771 },
        { name: "Kargil", lat: 34.5539, lon: 76.1349 }
      ],
      "Puducherry (UT)": [
        { name: "Puducherry", lat: 11.9416, lon: 79.8083 },
        { name: "Karaikal", lat: 10.9254, lon: 79.8380 }
      ],
      "Andaman & Nicobar (UT)": [
        { name: "Port Blair", lat: 11.6234, lon: 92.7265 }
      ],
      "Dadra & Nagar Haveli and Daman & Diu (UT)": [
        { name: "Daman", lat: 20.3974, lon: 72.8328 },
        { name: "Silvassa", lat: 20.2766, lon: 73.0169 }
      ],
      "Lakshadweep (UT)": [
        { name: "Kavaratti", lat: 10.5669, lon: 72.6420 }
      ]
    },
    "United States": {
      "Cities": [
        { name: "New York (EST)", lat: 40.7128, lon: -74.0060, tz: -5.0 },
        { name: "Chicago (CST)", lat: 41.8781, lon: -87.6298, tz: -6.0 },
        { name: "Los Angeles (PST)", lat: 34.0522, lon: -118.2437, tz: -8.0 },
        { name: "San Francisco", lat: 37.7749, lon: -122.4194, tz: -8.0 },
        { name: "Houston", lat: 29.7604, lon: -95.3698, tz: -6.0 }
      ]
    },
    "United Kingdom": {
      "Cities": [
        { name: "London", lat: 51.5074, lon: -0.1278, tz: 0.0 },
        { name: "Birmingham", lat: 52.4862, lon: -1.8904, tz: 0.0 },
        { name: "Manchester", lat: 53.4808, lon: -2.2426, tz: 0.0 }
      ]
    },
    "Canada": {
      "Cities": [
        { name: "Toronto", lat: 43.6532, lon: -79.3832, tz: -5.0 },
        { name: "Vancouver", lat: 49.2827, lon: -123.1207, tz: -8.0 },
        { name: "Montreal", lat: 45.5017, lon: -73.5673, tz: -5.0 }
      ]
    },
    "United Arab Emirates": {
      "Cities": [
        { name: "Dubai", lat: 25.2048, lon: 55.2708, tz: 4.0 },
        { name: "Abu Dhabi", lat: 24.4539, lon: 54.3773, tz: 4.0 },
        { name: "Sharjah", lat: 25.3463, lon: 55.4209, tz: 4.0 }
      ]
    },
    "Australia": {
      "Cities": [
        { name: "Sydney", lat: -33.8688, lon: 151.2093, tz: 10.0 },
        { name: "Melbourne", lat: -37.8136, lon: 144.9631, tz: 10.0 },
        { name: "Perth", lat: -31.9505, lon: 115.8605, tz: 8.0 }
      ]
    },
    "Singapore": {
      "Cities": [
        { name: "Singapore", lat: 1.3521, lon: 103.8198, tz: 8.0 }
      ]
    },
    "Nepal": {
      "Cities": [
        { name: "Kathmandu", lat: 27.7172, lon: 85.3240, tz: 5.75 },
        { name: "Pokhara", lat: 28.2096, lon: 83.9856, tz: 5.75 }
      ]
    }
  };

  // --- Storage Functions ---
  function getProfiles() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveProfiles(list) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (e) {}
  }

  function getActiveId() {
    return localStorage.getItem(ACTIVE_KEY) || "";
  }

  function setActiveId(id) {
    localStorage.setItem(ACTIVE_KEY, id);
  }

  function getActive() {
    var list = getProfiles();
    if (!list.length) return null;
    var id = getActiveId();
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === id) return list[i];
    }
    return list[0];
  }

  function saveProfile(data) {
    if (!data || !data.name) return;
    var list = getProfiles();
    var existingIndex = -1;

    if (data.id) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].id === data.id) {
          existingIndex = i;
          break;
        }
      }
    } else {
      for (var j = 0; j < list.length; j++) {
        if (list[j].name.trim().toLowerCase() === data.name.trim().toLowerCase()) {
          existingIndex = j;
          break;
        }
      }
    }

    var record = {
      id: data.id || "prof_" + Date.now(),
      name: data.name.trim(),
      day: parseInt(data.day, 10) || 1,
      month: parseInt(data.month, 10) || 1,
      year: parseInt(data.year, 10) || 2000,
      hour: data.hour !== undefined ? parseInt(data.hour, 10) : 12,
      minute: data.minute !== undefined ? parseInt(data.minute, 10) : 0,
      ampm: data.ampm || "AM",
      country: data.country || "India",
      state: data.state || "",
      city: data.city || "",
      lat: parseFloat(data.lat) || 26.4499,
      lon: parseFloat(data.lon) || 80.3319,
      tz: parseFloat(data.tz) !== undefined ? parseFloat(data.tz) : 5.5
    };

    if (existingIndex >= 0) {
      list[existingIndex] = record;
    } else {
      list.unshift(record);
    }

    saveProfiles(list);
    setActiveId(record.id);
    return record;
  }

  function deleteProfile(id) {
    var list = getProfiles().filter(function (p) {
      return p.id !== id;
    });
    saveProfiles(list);
    if (getActiveId() === id) {
      setActiveId(list.length ? list[0].id : "");
    }
  }

  // --- Dynamic Cascading Location Setup ---
  function bindLocationDropdowns(countryEl, stateEl, cityEl, latEl, lonEl, tzEl, customCityEl) {
    if (!countryEl || !stateEl || !cityEl) return;

    countryEl.innerHTML = "";
    Object.keys(LOCATION_DATA).forEach(function (c) {
      var opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      countryEl.appendChild(opt);
    });
    var manualCountry = document.createElement("option");
    manualCountry.value = "Manual";
    manualCountry.textContent = "Other / Fully Manual (Lat/Lon)";
    countryEl.appendChild(manualCountry);

    function updateStates() {
      var country = countryEl.value;
      stateEl.innerHTML = "";
      if (country === "Manual") {
        stateEl.style.display = "none";
        cityEl.style.display = "none";
        if (customCityEl) customCityEl.style.display = "block";
        return;
      }
      stateEl.style.display = "block";
      cityEl.style.display = "block";

      var states = LOCATION_DATA[country] ? Object.keys(LOCATION_DATA[country]) : [];
      states.forEach(function (s) {
        var opt = document.createElement("option");
        opt.value = s;
        opt.textContent = s;
        stateEl.appendChild(opt);
      });
      updateCities();
    }

    function updateCities() {
      var country = countryEl.value;
      var state = stateEl.value;
      cityEl.innerHTML = "";
      if (!LOCATION_DATA[country] || !LOCATION_DATA[country][state]) return;

      var cities = LOCATION_DATA[country][state];
      cities.forEach(function (ct) {
        var opt = document.createElement("option");
        opt.value = ct.name;
        opt.textContent = ct.name;
        opt.dataset.lat = ct.lat;
        opt.dataset.lon = ct.lon;
        opt.dataset.tz = ct.tz !== undefined ? ct.tz : 5.5;
        cityEl.appendChild(opt);
      });

      var customCity = document.createElement("option");
      customCity.value = "__other__";
      customCity.textContent = "Other / Manual City (Lat/Lon)";
      cityEl.appendChild(customCity);

      syncCoords();
    }

    function syncCoords() {
      var isManual = (countryEl.value === "Manual") || (cityEl.value === "__other__");
      if (customCityEl) {
        customCityEl.style.display = isManual ? "block" : "none";
      }

      var selOpt = cityEl.options[cityEl.selectedIndex];
      if (selOpt && selOpt.dataset && selOpt.dataset.lat && !isManual) {
        if (latEl) latEl.value = selOpt.dataset.lat;
        if (lonEl) lonEl.value = selOpt.dataset.lon;
        if (tzEl) tzEl.value = selOpt.dataset.tz;
      }
    }

    countryEl.onchange = updateStates;
    stateEl.onchange = updateCities;
    cityEl.onchange = syncCoords;

    countryEl.value = "India";
    updateStates();
    stateEl.value = "Uttar Pradesh";
    updateCities();
    cityEl.value = "Kanpur";
    syncCoords();
  }

  // --- Modal Interface ---
  function createUI() {
    if (document.getElementById("cc-profile-fab")) return;

    var fab = document.createElement("button");
    fab.id = "cc-profile-fab";
    fab.innerHTML = "👤";
    fab.title = "Janam Vivran Profiles (Saved)";
    fab.style.cssText =
      "position:fixed;bottom:24px;right:24px;width:52px;height:52px;border-radius:50%;" +
      "background:linear-gradient(135deg,#d97706,#b45309);color:#fff;border:2px solid #fbbf24;" +
      "box-shadow:0 6px 20px rgba(0,0,0,0.4);font-size:22px;cursor:pointer;z-index:99999;" +
      "display:flex;align-items:center;justify-content:center;transition:transform 0.2s;";
    fab.onmouseover = function () { fab.style.transform = "scale(1.08)"; };
    fab.onmouseout = function () { fab.style.transform = "scale(1)"; };

    var overlay = document.createElement("div");
    overlay.id = "cc-profile-modal";
    overlay.style.cssText =
      "display:none;position:fixed;top:0;left:0;width:100%;height:100%;" +
      "background:rgba(2,6,23,0.8);backdrop-filter:blur(6px);z-index:100000;" +
      "align-items:center;justify-content:center;padding:16px;box-sizing:border-box;";

    overlay.innerHTML =
      '<div style="background:#1e293b;border:1px solid rgba(251,191,36,0.3);border-radius:16px;' +
      'width:100%;max-width:500px;color:#f8fafc;padding:24px;box-shadow:0 12px 36px rgba(0,0,0,0.5);' +
      'font-family:system-ui,-apple-system,sans-serif;max-height:90vh;overflow-y:auto;">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">' +
      '<h3 style="margin:0;font-size:18px;color:#fbbf24;">Saved Birth Profiles (5+ Records)</h3>' +
      '<button id="cc-close-modal" style="background:none;border:none;color:#94a3b8;font-size:24px;cursor:pointer;">&times;</button>' +
      '</div>' +
      '<div id="cc-profile-list" style="margin-bottom:18px;"></div>' +
      '<div style="border-top:1px dashed #334155;padding-top:14px;">' +
      '<h4 style="margin:0 0 10px 0;font-size:14px;color:#f1f5f9;">Add / Update Janam Vivran</h4>' +
      '<input id="cc-in-name" placeholder="Full Name" style="width:100%;padding:9px;margin-bottom:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<div style="display:flex;gap:6px;margin-bottom:8px;">' +
      '<input id="cc-in-day" placeholder="DD" type="number" min="1" max="31" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-month" placeholder="MM" type="number" min="1" max="12" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-year" placeholder="YYYY" type="number" min="1900" max="2100" style="flex:1.5;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '</div>' +
      '<div style="display:flex;gap:6px;margin-bottom:8px;">' +
      '<input id="cc-in-time" type="time" style="flex:2;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<select id="cc-in-country" style="flex:2;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;"></select>' +
      '</div>' +
      '<div style="display:flex;gap:6px;margin-bottom:8px;">' +
      '<select id="cc-in-state" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;"></select>' +
      '<select id="cc-in-city" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;"></select>' +
      '</div>' +
      '<input id="cc-in-custom-city" placeholder="Type City Name Manually" style="display:none;width:100%;padding:9px;margin-bottom:8px;border-radius:6px;background:#0f172a;border:1px solid #f59e0b;color:#fff;box-sizing:border-box;" />' +
      '<div style="display:flex;gap:6px;margin-bottom:12px;">' +
      '<input id="cc-in-lat" placeholder="Latitude (e.g. 26.4499)" type="number" step="0.0001" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-lon" placeholder="Longitude (e.g. 80.3319)" type="number" step="0.0001" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-tz" placeholder="UTC (5.5)" type="number" step="0.25" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '</div>' +
      '<button id="cc-save-btn" style="width:100%;padding:11px;background:#d97706;border:none;border-radius:8px;color:#fff;font-weight:700;cursor:pointer;">Save to Profiles List</button>' +
      '</div>' +
      '</div>';

    document.body.appendChild(fab);
    document.body.appendChild(overlay);

    bindLocationDropdowns(
      document.getElementById("cc-in-country"),
      document.getElementById("cc-in-state"),
      document.getElementById("cc-in-city"),
      document.getElementById("cc-in-lat"),
      document.getElementById("cc-in-lon"),
      document.getElementById("cc-in-tz"),
      document.getElementById("cc-in-custom-city")
    );

    function renderModalList() {
      var listEl = document.getElementById("cc-profile-list");
      var profiles = getProfiles();
      var activeId = getActiveId();
      if (!profiles.length) {
        listEl.innerHTML = '<div style="color:#94a3b8;font-size:13px;text-align:center;padding:12px;">No profiles saved yet. Add one below.</div>';
        return;
      }
      var html = "";
      profiles.forEach(function (p) {
        var isAct = p.id === activeId;
        html +=
          '<div style="display:flex;justify-content:space-between;align-items:center;background:' +
          (isAct ? "rgba(217,119,6,0.2)" : "#0f172a") +
          ";border:1px solid " +
          (isAct ? "#fbbf24" : "#334155") +
          ';border-radius:8px;padding:9px 12px;margin-bottom:6px;">' +
          '<div style="cursor:pointer;flex:1;" class="cc-sel-profile" data-id="' + p.id + '">' +
          '<div style="font-weight:700;color:' + (isAct ? "#fbbf24" : "#f8fafc") + ';">' + p.name + (isAct ? " ⭐ (Selected)" : "") + '</div>' +
          '<div style="font-size:12px;color:#94a3b8;">' + p.day + "/" + p.month + "/" + p.year + (p.city ? " • " + p.city + " (" + p.lat + ", " + p.lon + ")" : "") + '</div>' +
          '</div>' +
          '<button class="cc-del-profile" data-id="' + p.id + '" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:16px;padding:4px 8px;">✕</button>' +
          '</div>';
      });
      listEl.innerHTML = html;

      var selBtns = listEl.querySelectorAll(".cc-sel-profile");
      selBtns.forEach(function (btn) {
        btn.onclick = function () {
          setActiveId(this.getAttribute("data-id"));
          renderModalList();
        };
      });

      var delBtns = listEl.querySelectorAll(".cc-del-profile");
      delBtns.forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          deleteProfile(this.getAttribute("data-id"));
          renderModalList();
        };
      });
    }

    fab.onclick = function () {
      overlay.style.display = "flex";
      renderModalList();
    };

    document.getElementById("cc-close-modal").onclick = function () {
      overlay.style.display = "none";
    };

    overlay.onclick = function (e) {
      if (e.target === overlay) overlay.style.display = "none";
    };

    document.getElementById("cc-save-btn").onclick = function () {
      var name = document.getElementById("cc-in-name").value.trim();
      var day = document.getElementById("cc-in-day").value;
      var month = document.getElementById("cc-in-month").value;
      var year = document.getElementById("cc-in-year").value;
      var time = document.getElementById("cc-in-time").value;
      var country = document.getElementById("cc-in-country").value;
      var state = document.getElementById("cc-in-state").value;
      var city = document.getElementById("cc-in-city").value;
      var customCity = document.getElementById("cc-in-custom-city").value.trim();
      var lat = document.getElementById("cc-in-lat").value;
      var lon = document.getElementById("cc-in-lon").value;
      var tz = document.getElementById("cc-in-tz").value;

      if (!name || !day || !month || !year) {
        alert("Please enter Name and full Date of Birth.");
        return;
      }

      var finalCity = (city === "__other__" || country === "Manual") ? (customCity || "Manual City") : city;

      var hour = 12, min = 0, ampm = "AM";
      if (time && time.indexOf(":") !== -1) {
        var parts = time.split(":");
        var h = parseInt(parts[0], 10);
        min = parseInt(parts[1], 10);
        ampm = h >= 12 ? "PM" : "AM";
        hour = h % 12 || 12;
      }

      saveProfile({
        name: name,
        day: day,
        month: month,
        year: year,
        hour: hour,
        minute: min,
        ampm: ampm,
        country: country,
        state: state,
        city: finalCity,
        lat: lat,
        lon: lon,
        tz: tz
      });

      document.getElementById("cc-in-name").value = "";
      document.getElementById("cc-in-day").value = "";
      document.getElementById("cc-in-month").value = "";
      document.getElementById("cc-in-year").value = "";
      document.getElementById("cc-in-time").value = "";
      document.getElementById("cc-in-custom-city").value = "";

      renderModalList();
    };
  }

  window.BirthProfile = {
    locations: LOCATION_DATA,
    bindLocations: bindLocationDropdowns,
    getAll: getProfiles,
    get: getActive,
    save: saveProfile,
    delete: deleteProfile,
    setActive: setActiveId,
    init: function () {
      createUI();
    }
  };
})(window);
