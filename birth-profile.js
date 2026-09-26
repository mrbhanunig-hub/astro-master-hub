// birth-profile.js — Comprehensive Location, Detailed Districts, Gender & Multi-Profile Transfer Engine
// The Cosmic Counsellor — Astrologer Vivek Nigam
(function (window) {
  var STORAGE_KEY = "cc_birth_profiles_list";
  var ACTIVE_KEY = "cc_active_profile_id";

  // --- Complete India Districts & Major Global Hubs Database ---
  var LOCATION_DATA = {
    "India": {
      "Andhra Pradesh": [
        { name: "Anantapur", lat: 14.6819, lon: 77.6006 },
        { name: "Chittoor", lat: 13.2172, lon: 79.1003 },
        { name: "East Godavari (Kakinada)", lat: 16.9891, lon: 82.2475 },
        { name: "Eluru", lat: 16.7107, lon: 81.0952 },
        { name: "Guntur", lat: 16.3067, lon: 80.4365 },
        { name: "Kadapa (YSR)", lat: 14.4673, lon: 78.8242 },
        { name: "Kakinada", lat: 16.9891, lon: 82.2475 },
        { name: "Kurnool", lat: 15.8281, lon: 78.0373 },
        { name: "Machilipatnam", lat: 16.1875, lon: 81.1389 },
        { name: "Nellore (SPSR)", lat: 14.4426, lon: 79.9865 },
        { name: "Nandyal", lat: 15.4886, lon: 78.4836 },
        { name: "Ongole (Prakasam)", lat: 15.5057, lon: 80.0499 },
        { name: "Rajahmundry", lat: 17.0005, lon: 81.8040 },
        { name: "Srikakulam", lat: 18.2949, lon: 83.8938 },
        { name: "Tirupati", lat: 13.6288, lon: 79.4192 },
        { name: "Vijayawada", lat: 16.5062, lon: 80.6480 },
        { name: "Visakhapatnam", lat: 17.6868, lon: 83.2185 },
        { name: "Vizianagaram", lat: 18.1124, lon: 83.3978 },
        { name: "West Godavari (Bhimavaram)", lat: 16.5449, lon: 81.5212 }
      ],
      "Arunachal Pradesh": [
        { name: "Along (West Siang)", lat: 28.1667, lon: 94.8000 },
        { name: "Bomdila", lat: 27.2645, lon: 92.4159 },
        { name: "Changlang", lat: 27.1260, lon: 95.7330 },
        { name: "Itanagar", lat: 27.0844, lon: 93.6053 },
        { name: "Naharlagun", lat: 27.1064, lon: 93.6961 },
        { name: "Pasighat", lat: 28.0667, lon: 95.3333 },
        { name: "Roing", lat: 28.1408, lon: 95.8427 },
        { name: "Tawang", lat: 27.5860, lon: 91.8594 },
        { name: "Tezu", lat: 27.9133, lon: 96.1667 },
        { name: "Ziro", lat: 27.5480, lon: 93.8340 }
      ],
      "Assam": [
        { name: "Barpeta", lat: 26.3216, lon: 91.0059 },
        { name: "Bongaigaon", lat: 26.5024, lon: 90.5562 },
        { name: "Cachar (Silchar)", lat: 24.8333, lon: 92.7789 },
        { name: "Darrang (Mangaldai)", lat: 26.4389, lon: 92.0354 },
        { name: "Dhubri", lat: 26.0207, lon: 89.9744 },
        { name: "Dibrugarh", lat: 27.4728, lon: 94.9120 },
        { name: "Diphu (Karbi Anglong)", lat: 25.8450, lon: 93.4350 },
        { name: "Goalpara", lat: 26.1706, lon: 90.6247 },
        { name: "Golaghat", lat: 26.5200, lon: 93.9700 },
        { name: "Guwahati (Kamrup)", lat: 26.1445, lon: 91.7362 },
        { name: "Hailakandi", lat: 24.6800, lon: 92.5600 },
        { name: "Jorhat", lat: 26.7509, lon: 94.2037 },
        { name: "Karimganj", lat: 24.8690, lon: 92.3580 },
        { name: "Lakhimpur", lat: 27.2359, lon: 94.1037 },
        { name: "Morigaon", lat: 26.2500, lon: 92.3400 },
        { name: "Nagaon", lat: 26.3480, lon: 92.6840 },
        { name: "Nalbari", lat: 26.4447, lon: 91.4428 },
        { name: "Sivasagar", lat: 26.9826, lon: 94.6425 },
        { name: "Sonitpur (Tezpur)", lat: 26.6338, lon: 92.8000 },
        { name: "Tinsukia", lat: 27.4922, lon: 95.3468 }
      ],
      "Bihar": [
        { name: "Araria", lat: 26.1500, lon: 87.5200 },
        { name: "Arrah (Bhojpur)", lat: 25.5541, lon: 84.6636 },
        { name: "Aurangabad", lat: 24.7500, lon: 84.3700 },
        { name: "Banka", lat: 24.8800, lon: 86.9200 },
        { name: "Begusarai", lat: 25.4182, lon: 86.1272 },
        { name: "Bettiah (West Champaran)", lat: 26.8020, lon: 84.5052 },
        { name: "Bhagalpur", lat: 25.2425, lon: 86.9842 },
        { name: "Bihar Sharif (Nalanda)", lat: 25.1988, lon: 85.5236 },
        { name: "Buxar", lat: 25.5600, lon: 83.9800 },
        { name: "Chhapra (Saran)", lat: 25.7810, lon: 84.7470 },
        { name: "Darbhanga", lat: 26.1542, lon: 85.8918 },
        { name: "Dehri on Sone", lat: 24.9100, lon: 84.1800 },
        { name: "Gaya", lat: 24.7955, lon: 84.9994 },
        { name: "Gopalganj", lat: 26.4700, lon: 84.4400 },
        { name: "Hajipur (Vaishali)", lat: 25.6862, lon: 85.2094 },
        { name: "Jamui", lat: 24.9200, lon: 86.2200 },
        { name: "Jehanabad", lat: 25.2100, lon: 84.9800 },
        { name: "Katihar", lat: 25.5394, lon: 87.5716 },
        { name: "Khagaria", lat: 25.5000, lon: 86.4800 },
        { name: "Kishanganj", lat: 26.0700, lon: 87.9500 },
        { name: "Madhubani", lat: 26.3600, lon: 86.0800 },
        { name: "Motihari (East Champaran)", lat: 26.6485, lon: 84.9161 },
        { name: "Munger", lat: 25.3747, lon: 86.4735 },
        { name: "Muzaffarpur", lat: 26.1225, lon: 85.3906 },
        { name: "Nawada", lat: 24.8800, lon: 85.5400 },
        { name: "Patna", lat: 25.5941, lon: 85.1376 },
        { name: "Purnia", lat: 25.7771, lon: 87.4753 },
        { name: "Saharsa", lat: 25.8804, lon: 86.6008 },
        { name: "Samastipur", lat: 25.8600, lon: 85.7800 },
        { name: "Sasaram (Rohtas)", lat: 24.9500, lon: 84.0333 },
        { name: "Sheikhpura", lat: 25.1300, lon: 85.8500 },
        { name: "Sheohar", lat: 26.5100, lon: 85.2900 },
        { name: "Sitamarhi", lat: 26.6000, lon: 85.4900 },
        { name: "Siwan", lat: 26.2183, lon: 84.3542 },
        { name: "Supaul", lat: 26.1200, lon: 86.6000 }
      ],
      "Chhattisgarh": [
        { name: "Ambikapur (Surguja)", lat: 23.1200, lon: 83.2000 },
        { name: "Bhilai", lat: 21.1938, lon: 81.3509 },
        { name: "Bilaspur", lat: 22.0797, lon: 82.1409 },
        { name: "Chirmiri", lat: 23.1800, lon: 82.3500 },
        { name: "Dhamtari", lat: 20.7100, lon: 81.5500 },
        { name: "Durg", lat: 21.1904, lon: 81.2849 },
        { name: "Jagdalpur (Bastar)", lat: 19.0700, lon: 82.0300 },
        { name: "Janjgir-Champa", lat: 22.0100, lon: 82.5700 },
        { name: "Kanker", lat: 20.2700, lon: 81.4900 },
        { name: "Kawardha (Kabirdham)", lat: 22.0100, lon: 81.2500 },
        { name: "Korba", lat: 22.3595, lon: 82.7501 },
        { name: "Mahasamund", lat: 21.1100, lon: 82.1000 },
        { name: "Raigarh", lat: 21.9000, lon: 83.4000 },
        { name: "Raipur", lat: 21.2514, lon: 81.6296 },
        { name: "Rajnandgaon", lat: 21.0974, lon: 81.0388 }
      ],
      "Goa": [
        { name: "Bicholim", lat: 15.5900, lon: 73.9500 },
        { name: "Canacona", lat: 15.0100, lon: 74.0500 },
        { name: "Mapusa", lat: 15.6000, lon: 73.8100 },
        { name: "Margao (Madgaon)", lat: 15.2832, lon: 73.9862 },
        { name: "Mormugao", lat: 15.4000, lon: 73.8000 },
        { name: "Panaji", lat: 15.4909, lon: 73.8278 },
        { name: "Ponda", lat: 15.4000, lon: 74.0200 },
        { name: "Vasco da Gama", lat: 15.3955, lon: 73.8154 }
      ],
      "Gujarat": [
        { name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },
        { name: "Amreli", lat: 21.6000, lon: 71.2200 },
        { name: "Anand", lat: 22.5645, lon: 72.9289 },
        { name: "Bharuch", lat: 21.7051, lon: 72.9959 },
        { name: "Bhavnagar", lat: 21.7645, lon: 72.1519 },
        { name: "Bhuj (Kutch)", lat: 23.2500, lon: 69.6700 },
        { name: "Botad", lat: 22.1700, lon: 71.6700 },
        { name: "Dahod", lat: 22.8300, lon: 74.2600 },
        { name: "Gandhidham", lat: 23.0800, lon: 70.1300 },
        { name: "Gandhinagar", lat: 23.2156, lon: 72.6369 },
        { name: "Godhra (Panchmahal)", lat: 22.7800, lon: 73.6200 },
        { name: "Himmatnagar", lat: 23.6000, lon: 72.9600 },
        { name: "Jamnagar", lat: 22.4707, lon: 70.0577 },
        { name: "Junagadh", lat: 21.5222, lon: 70.4579 },
        { name: "Mehsana", lat: 23.6000, lon: 72.4000 },
        { name: "Morbi", lat: 22.8200, lon: 70.8300 },
        { name: "Nadiad (Kheda)", lat: 22.7000, lon: 72.8600 },
        { name: "Navsari", lat: 20.9500, lon: 72.9300 },
        { name: "Palanpur (Banaskantha)", lat: 24.1700, lon: 72.4300 },
        { name: "Patan", lat: 23.8500, lon: 72.1200 },
        { name: "Porbandar", lat: 21.6400, lon: 69.6000 },
        { name: "Rajkot", lat: 22.3039, lon: 70.8022 },
        { name: "Surat", lat: 21.1702, lon: 72.8311 },
        { name: "Surendranagar", lat: 22.7200, lon: 71.6300 },
        { name: "Vadodara", lat: 22.3072, lon: 73.1812 },
        { name: "Valsad", lat: 20.6100, lon: 72.9300 },
        { name: "Vapi", lat: 20.3900, lon: 72.9100 },
        { name: "Veraval (Gir Somnath)", lat: 20.9000, lon: 70.3700 }
      ],
      "Haryana": [
        { name: "Ambala", lat: 30.3752, lon: 76.7821 },
        { name: "Bahadurgarh", lat: 28.6925, lon: 76.9240 },
        { name: "Bhiwani", lat: 28.7900, lon: 76.1300 },
        { name: "Faridabad", lat: 28.4089, lon: 77.3178 },
        { name: "Fatehabad", lat: 29.5200, lon: 75.4500 },
        { name: "Gurugram (Gurgaon)", lat: 28.4595, lon: 77.0266 },
        { name: "Hisar", lat: 29.1492, lon: 75.7217 },
        { name: "Jhajjar", lat: 28.6100, lon: 76.6500 },
        { name: "Jind", lat: 29.3200, lon: 76.3200 },
        { name: "Kaithal", lat: 29.8000, lon: 76.4000 },
        { name: "Karnal", lat: 29.6857, lon: 76.9905 },
        { name: "Kurukshetra", lat: 29.9700, lon: 76.8800 },
        { name: "Narnaul (Mahendragarh)", lat: 28.0400, lon: 76.1100 },
        { name: "Palwal", lat: 28.1400, lon: 77.3300 },
        { name: "Panchkula", lat: 30.6942, lon: 76.8606 },
        { name: "Panipat", lat: 29.3909, lon: 76.9635 },
        { name: "Rewari", lat: 28.1800, lon: 76.6200 },
        { name: "Rohtak", lat: 28.8955, lon: 76.6066 },
        { name: "Sirsa", lat: 29.5300, lon: 75.0300 },
        { name: "Sonipat", lat: 28.9900, lon: 77.0200 },
        { name: "Yamunanagar", lat: 30.1300, lon: 77.2800 }
      ],
      "Himachal Pradesh": [
        { name: "Bilaspur", lat: 31.3300, lon: 76.7600 },
        { name: "Chamba", lat: 32.5500, lon: 76.1300 },
        { name: "Dharamshala (Kangra)", lat: 32.2190, lon: 76.3234 },
        { name: "Hamirpur", lat: 31.6800, lon: 76.5200 },
        { name: "Kullu", lat: 31.9576, lon: 77.1095 },
        { name: "Manali", lat: 32.2396, lon: 77.1887 },
        { name: "Mandi", lat: 31.7100, lon: 76.9300 },
        { name: "Nahan (Sirmaur)", lat: 30.5600, lon: 77.3000 },
        { name: "Shimla", lat: 31.1048, lon: 77.1734 },
        { name: "Solan", lat: 30.9045, lon: 77.0967 },
        { name: "Una", lat: 31.4700, lon: 76.2700 }
      ],
      "Jharkhand": [
        { name: "Bokaro Steel City", lat: 23.6693, lon: 86.1511 },
        { name: "Chaibasa (West Singhbhum)", lat: 22.5500, lon: 85.8100 },
        { name: "Deoghar", lat: 24.4823, lon: 86.6961 },
        { name: "Dhanbad", lat: 23.7957, lon: 86.4304 },
        { name: "Dumka", lat: 24.2700, lon: 87.2500 },
        { name: "Giridih", lat: 24.1800, lon: 86.3000 },
        { name: "Hazaribagh", lat: 23.9900, lon: 85.3600 },
        { name: "Jamshedpur (East Singhbhum)", lat: 22.8046, lon: 86.2029 },
        { name: "Koderma", lat: 24.4700, lon: 85.6000 },
        { name: "Medininagar (Daltonganj)", lat: 24.0400, lon: 84.0700 },
        { name: "Ramgarh", lat: 23.6300, lon: 85.5200 },
        { name: "Ranchi", lat: 23.3441, lon: 85.3096 }
      ],
      "Karnataka": [
        { name: "Bagalkot", lat: 16.1800, lon: 75.7000 },
        { name: "Ballari (Bellary)", lat: 15.1394, lon: 76.9214 },
        { name: "Belagavi (Belgaum)", lat: 15.8497, lon: 74.4977 },
        { name: "Bengaluru (Bangalore)", lat: 12.9716, lon: 77.5946 },
        { name: "Bidar", lat: 17.9100, lon: 77.5200 },
        { name: "Chamarajanagar", lat: 11.9200, lon: 76.9400 },
        { name: "Chikkamagaluru", lat: 13.3200, lon: 75.7700 },
        { name: "Chitradurga", lat: 14.2300, lon: 76.4000 },
        { name: "Davanagere", lat: 14.4644, lon: 75.9218 },
        { name: "Dharwad", lat: 15.4600, lon: 75.0100 },
        { name: "Gadag", lat: 15.4300, lon: 75.6300 },
        { name: "Hassan", lat: 13.0100, lon: 76.1000 },
        { name: "Haveri", lat: 14.8000, lon: 75.4000 },
        { name: "Hosapete (Hospet)", lat: 15.2700, lon: 76.3900 },
        { name: "Hubballi (Hubli)", lat: 15.3647, lon: 75.1240 },
        { name: "Kalaburagi (Gulbarga)", lat: 17.3297, lon: 76.8343 },
        { name: "Kolar", lat: 13.1400, lon: 78.1300 },
        { name: "Mandya", lat: 12.5200, lon: 76.9000 },
        { name: "Mangaluru (Mangalore)", lat: 12.9141, lon: 74.8560 },
        { name: "Mysuru (Mysore)", lat: 12.2958, lon: 76.6394 },
        { name: "Raichur", lat: 16.2000, lon: 77.3600 },
        { name: "Shivamogga (Shimoga)", lat: 13.9299, lon: 75.5681 },
        { name: "Tumakuru (Tumkur)", lat: 13.3400, lon: 77.1000 },
        { name: "Udupi", lat: 13.3409, lon: 74.7421 },
        { name: "Vijayapura (Bijapur)", lat: 16.8300, lon: 75.7100 }
      ],
      "Kerala": [
        { name: "Alappuzha (Alleppey)", lat: 9.4981, lon: 76.3388 },
        { name: "Ernakulam", lat: 9.9816, lon: 76.2999 },
        { name: "Idukki (Painavu)", lat: 9.8500, lon: 76.9700 },
        { name: "Kannur", lat: 11.8745, lon: 75.3704 },
        { name: "Kasaragod", lat: 12.5000, lon: 75.0000 },
        { name: "Kochi (Cochin)", lat: 9.9312, lon: 76.2673 },
        { name: "Kollam (Quilon)", lat: 8.8932, lon: 76.6141 },
        { name: "Kottayam", lat: 9.5916, lon: 76.5222 },
        { name: "Kozhikode (Calicut)", lat: 11.2588, lon: 75.7804 },
        { name: "Malappuram", lat: 11.0700, lon: 76.0700 },
        { name: "Palakkad", lat: 10.7867, lon: 76.6548 },
        { name: "Pathanamthitta", lat: 9.2647, lon: 76.7870 },
        { name: "Thiruvananthapuram (Trivandrum)", lat: 8.5241, lon: 76.9366 },
        { name: "Thrissur (Trichur)", lat: 10.5276, lon: 76.2144 },
        { name: "Wayanad (Kalpetta)", lat: 11.6100, lon: 76.0800 }
      ],
      "Madhya Pradesh": [
        { name: "Balaghat", lat: 21.8000, lon: 80.1800 },
        { name: "Betul", lat: 21.9000, lon: 77.9000 },
        { name: "Bhind", lat: 26.5600, lon: 78.7800 },
        { name: "Bhopal", lat: 23.2599, lon: 77.4126 },
        { name: "Burhanpur", lat: 21.3100, lon: 76.2300 },
        { name: "Chhatarpur", lat: 24.9100, lon: 79.5900 },
        { name: "Chhindwara", lat: 22.0574, lon: 78.9382 },
        { name: "Damoh", lat: 23.8300, lon: 79.4400 },
        { name: "Dewas", lat: 22.9676, lon: 76.0534 },
        { name: "Dhar", lat: 22.6000, lon: 75.3000 },
        { name: "Guna", lat: 24.6470, lon: 77.3110 },
        { name: "Gwalior", lat: 26.2183, lon: 78.1828 },
        { name: "Hoshangabad (Narmadapuram)", lat: 22.7500, lon: 77.7200 },
        { name: "Indore", lat: 22.7196, lon: 75.8577 },
        { name: "Jabalpur", lat: 23.1815, lon: 79.9864 },
        { name: "Katni", lat: 23.8339, lon: 80.3936 },
        { name: "Khandwa", lat: 21.8300, lon: 76.3500 },
        { name: "Khargone (West Nimar)", lat: 21.8200, lon: 75.6100 },
        { name: "Mandsaur", lat: 24.0700, lon: 75.0700 },
        { name: "Morena", lat: 26.5000, lon: 78.0000 },
        { name: "Neemuch", lat: 24.4700, lon: 74.8700 },
        { name: "Panna", lat: 24.7200, lon: 80.2000 },
        { name: "Ratlam", lat: 23.3315, lon: 75.0367 },
        { name: "Rewa", lat: 24.5364, lon: 81.3037 },
        { name: "Sagar", lat: 23.8388, lon: 78.7378 },
        { name: "Satna", lat: 24.6005, lon: 80.8322 },
        { name: "Sehore", lat: 23.2000, lon: 77.0800 },
        { name: "Shivpuri", lat: 25.4231, lon: 77.6592 },
        { name: "Singrauli", lat: 24.1997, lon: 82.6747 },
        { name: "Tikamgarh", lat: 24.7400, lon: 78.8300 },
        { name: "Ujjain", lat: 23.1765, lon: 75.7885 },
        { name: "Vidisha", lat: 23.5251, lon: 77.8080 }
      ],
      "Maharashtra": [
        { name: "Ahmednagar (Ahilyanagar)", lat: 19.0952, lon: 74.7496 },
        { name: "Akola", lat: 20.7002, lon: 77.0082 },
        { name: "Amravati", lat: 20.9374, lon: 77.7796 },
        { name: "Chhatrapati Sambhajinagar (Aurangabad)", lat: 19.8762, lon: 75.3433 },
        { name: "Beed", lat: 18.9900, lon: 75.7600 },
        { name: "Bhandara", lat: 21.1700, lon: 79.6500 },
        { name: "Buldhana", lat: 20.5300, lon: 76.1800 },
        { name: "Chandrapur", lat: 19.9500, lon: 79.3000 },
        { name: "Dhule", lat: 20.9042, lon: 74.7749 },
        { name: "Gondia", lat: 21.4600, lon: 80.2000 },
        { name: "Jalgaon", lat: 21.0077, lon: 75.5626 },
        { name: "Jalna", lat: 19.8400, lon: 75.8800 },
        { name: "Kolhapur", lat: 16.7050, lon: 74.2433 },
        { name: "Latur", lat: 18.4088, lon: 76.5604 },
        { name: "Mumbai City", lat: 18.9388, lon: 72.8354 },
        { name: "Mumbai Suburban", lat: 19.0760, lon: 72.8777 },
        { name: "Nagpur", lat: 21.1458, lon: 79.0882 },
        { name: "Nanded", lat: 19.1383, lon: 77.3210 },
        { name: "Nashik", lat: 19.9975, lon: 73.7898 },
        { name: "Navi Mumbai", lat: 19.0330, lon: 73.0297 },
        { name: "Osmanabad (Dharashiv)", lat: 18.1700, lon: 76.0400 },
        { name: "Palghar", lat: 19.7000, lon: 72.7600 },
        { name: "Parbhani", lat: 19.2700, lon: 76.7800 },
        { name: "Pune", lat: 18.5204, lon: 73.8567 },
        { name: "Raigad (Alibag)", lat: 18.6400, lon: 72.8700 },
        { name: "Ratnagiri", lat: 16.9900, lon: 73.3000 },
        { name: "Sangli", lat: 16.8524, lon: 74.5815 },
        { name: "Satara", lat: 17.6800, lon: 73.9900 },
        { name: "Sindhudurg (Oros)", lat: 16.1200, lon: 73.7000 },
        { name: "Solapur", lat: 17.6599, lon: 75.9064 },
        { name: "Thane", lat: 19.2183, lon: 72.9781 },
        { name: "Wardha", lat: 20.7400, lon: 78.6000 },
        { name: "Yavatmal", lat: 20.4000, lon: 78.1300 }
      ],
      "Manipur": [
        { name: "Bishnupur", lat: 24.6300, lon: 93.7600 },
        { name: "Churachandpur", lat: 24.3300, lon: 93.6700 },
        { name: "Imphal", lat: 24.8170, lon: 93.9368 },
        { name: "Kakching", lat: 24.4900, lon: 93.9800 },
        { name: "Senapati", lat: 25.2600, lon: 94.0100 },
        { name: "Thoubal", lat: 24.6333, lon: 93.9833 },
        { name: "Ukhrul", lat: 25.1100, lon: 94.3600 }
      ],
      "Meghalaya": [
        { name: "Baghmara (South Garo)", lat: 25.2000, lon: 90.6300 },
        { name: "Jowai (West Jaintia)", lat: 25.4500, lon: 92.2000 },
        { name: "Nongpoh (Ri-Bhoi)", lat: 25.9000, lon: 91.8800 },
        { name: "Nongstoin (West Khasi)", lat: 25.5200, lon: 91.2700 },
        { name: "Shillong", lat: 25.5788, lon: 91.8933 },
        { name: "Tura (West Garo)", lat: 25.5138, lon: 90.2020 },
        { name: "Williamnagar", lat: 25.6000, lon: 90.5800 }
      ],
      "Mizoram": [
        { name: "Aizawl", lat: 23.7271, lon: 92.7176 },
        { name: "Champhai", lat: 23.4700, lon: 93.3300 },
        { name: "Kolasib", lat: 24.2200, lon: 92.6800 },
        { name: "Lawngtlai", lat: 22.5300, lon: 92.8900 },
        { name: "Lunglei", lat: 22.8879, lon: 92.7361 },
        { name: "Mamit", lat: 23.9300, lon: 92.4900 },
        { name: "Saiha", lat: 22.4900, lon: 92.9700 },
        { name: "Serchhip", lat: 23.3100, lon: 92.8500 }
      ],
      "Nagaland": [
        { name: "Dimapur", lat: 25.9091, lon: 93.7266 },
        { name: "Kohima", lat: 25.6751, lon: 94.1086 },
        { name: "Mokokchung", lat: 26.3200, lon: 94.5200 },
        { name: "Mon", lat: 26.7500, lon: 95.0600 },
        { name: "Phek", lat: 25.6700, lon: 94.5000 },
        { name: "Tuensang", lat: 26.2800, lon: 94.8300 },
        { name: "Wokha", lat: 26.1000, lon: 94.2600 },
        { name: "Zunheboto", lat: 25.9700, lon: 94.5200 }
      ],
      "Odisha": [
        { name: "Angul", lat: 20.8400, lon: 85.1000 },
        { name: "Balasore (Baleswar)", lat: 21.4900, lon: 86.9300 },
        { name: "Bargarh", lat: 21.3300, lon: 83.6200 },
        { name: "Berhampur (Ganjam)", lat: 19.3149, lon: 84.7941 },
        { name: "Bhadrak", lat: 21.0500, lon: 86.5000 },
        { name: "Bhubaneswar", lat: 20.2961, lon: 85.8245 },
        { name: "Bolangir", lat: 20.7100, lon: 83.4800 },
        { name: "Cuttack", lat: 20.4625, lon: 85.8830 },
        { name: "Dhenkanal", lat: 20.6700, lon: 85.6000 },
        { name: "Jeypore (Koraput)", lat: 18.8600, lon: 82.5700 },
        { name: "Jharsuguda", lat: 21.8500, lon: 84.0100 },
        { name: "Kendujhar (Keonjhar)", lat: 21.6300, lon: 85.5800 },
        { name: "Puri", lat: 19.8135, lon: 85.8312 },
        { name: "Rourkela (Sundargarh)", lat: 22.2604, lon: 84.8536 },
        { name: "Sambalpur", lat: 21.4669, lon: 83.9756 }
      ],
      "Punjab": [
        { name: "Abohar", lat: 30.1400, lon: 74.2000 },
        { name: "Amritsar", lat: 31.6340, lon: 74.8723 },
        { name: "Barnala", lat: 30.3800, lon: 75.5500 },
        { name: "Bathinda", lat: 30.2110, lon: 74.9455 },
        { name: "Faridkot", lat: 30.6700, lon: 74.7600 },
        { name: "Fazilka", lat: 30.4000, lon: 74.0300 },
        { name: "Firozpur", lat: 30.9200, lon: 74.6100 },
        { name: "Gurdaspur", lat: 32.0400, lon: 75.4000 },
        { name: "Hoshiarpur", lat: 31.5300, lon: 75.9200 },
        { name: "Jalandhar", lat: 31.3260, lon: 75.5762 },
        { name: "Kapurthala", lat: 31.3800, lon: 75.3800 },
        { name: "Ludhiana", lat: 30.9010, lon: 75.8573 },
        { name: "Mansa", lat: 29.9800, lon: 75.3800 },
        { name: "Moga", lat: 30.8200, lon: 75.1700 },
        { name: "Mohali (SAS Nagar)", lat: 30.7046, lon: 76.7179 },
        { name: "Muktsar", lat: 30.4800, lon: 74.5200 },
        { name: "Pathankot", lat: 32.2643, lon: 75.6421 },
        { name: "Patiala", lat: 30.3398, lon: 76.3869 },
        { name: "Rupnagar (Ropar)", lat: 30.9700, lon: 76.5300 },
        { name: "Sangrur", lat: 30.2500, lon: 75.8400 }
      ],
      "Rajasthan": [
        { name: "Ajmer", lat: 26.4499, lon: 74.6399 },
        { name: "Alwar", lat: 27.5530, lon: 76.6346 },
        { name: "Banswara", lat: 23.5500, lon: 74.4500 },
        { name: "Baran", lat: 25.1000, lon: 76.5100 },
        { name: "Barmer", lat: 25.7500, lon: 71.4000 },
        { name: "Bharatpur", lat: 27.2173, lon: 77.4901 },
        { name: "Bhilwara", lat: 25.3407, lon: 74.6313 },
        { name: "Bikaner", lat: 28.0229, lon: 73.3119 },
        { name: "Chittorgarh", lat: 24.8900, lon: 74.6300 },
        { name: "Churu", lat: 28.3006, lon: 74.9634 },
        { name: "Dausa", lat: 26.8900, lon: 76.3400 },
        { name: "Dholpur", lat: 26.7000, lon: 77.9000 },
        { name: "Hanumangarh", lat: 29.5800, lon: 74.3200 },
        { name: "Jaipur", lat: 26.9124, lon: 75.7873 },
        { name: "Jaisalmer", lat: 26.9200, lon: 70.9000 },
        { name: "Jalore", lat: 25.3500, lon: 72.6200 },
        { name: "Jhalawar", lat: 24.6000, lon: 76.1600 },
        { name: "Jhunjhunu", lat: 28.1300, lon: 75.4000 },
        { name: "Jodhpur", lat: 26.2389, lon: 73.0243 },
        { name: "Karauli", lat: 26.5000, lon: 77.0200 },
        { name: "Kishangarh", lat: 26.5833, lon: 74.8500 },
        { name: "Kota", lat: 25.2138, lon: 75.8648 },
        { name: "Nagaur", lat: 27.2000, lon: 73.7333 },
        { name: "Pali", lat: 25.7711, lon: 73.3234 },
        { name: "Pratapgarh", lat: 24.0300, lon: 74.7800 },
        { name: "Rajsamand", lat: 25.0700, lon: 73.8800 },
        { name: "Sawai Madhopur", lat: 26.0000, lon: 76.3500 },
        { name: "Sikar", lat: 27.6094, lon: 75.1399 },
        { name: "Sirohi", lat: 24.8800, lon: 72.8600 },
        { name: "Sri Ganganagar", lat: 29.9094, lon: 73.8800 },
        { name: "Tonk", lat: 26.1600, lon: 75.7900 },
        { name: "Udaipur", lat: 24.5854, lon: 73.7125 }
      ],
      "Sikkim": [
        { name: "Gangtok", lat: 27.3389, lon: 88.6065 },
        { name: "Gyalshing", lat: 27.2800, lon: 88.2300 },
        { name: "Mangan", lat: 27.5100, lon: 88.5300 },
        { name: "Namchi", lat: 27.1656, lon: 88.3639 },
        { name: "Rangpo", lat: 27.1700, lon: 88.5300 }
      ],
      "Tamil Nadu": [
        { name: "Chennai", lat: 13.0827, lon: 80.2707 },
        { name: "Coimbatore", lat: 11.0168, lon: 76.9558 },
        { name: "Cuddalore", lat: 11.7500, lon: 79.7500 },
        { name: "Dindigul", lat: 10.3700, lon: 77.9800 },
        { name: "Erode", lat: 11.3410, lon: 77.7172 },
        { name: "Hosur", lat: 12.7400, lon: 77.8300 },
        { name: "Kanchipuram", lat: 12.8300, lon: 79.7000 },
        { name: "Kanyakumari (Nagercoil)", lat: 8.1800, lon: 77.4100 },
        { name: "Karur", lat: 10.9600, lon: 78.0800 },
        { name: "Madurai", lat: 9.9252, lon: 78.1198 },
        { name: "Nagapattinam", lat: 10.7700, lon: 79.8400 },
        { name: "Salem", lat: 11.6643, lon: 78.1460 },
        { name: "Thanjavur (Tanjore)", lat: 10.7900, lon: 79.1400 },
        { name: "Thoothukudi (Tuticorin)", lat: 8.7600, lon: 78.1300 },
        { name: "Tiruchirappalli (Trichy)", lat: 10.7905, lon: 78.7047 },
        { name: "Tirunelveli", lat: 8.7139, lon: 77.7567 },
        { name: "Tiruppur", lat: 11.1100, lon: 77.3400 },
        { name: "Vellore", lat: 12.9165, lon: 79.1325 }
      ],
      "Telangana": [
        { name: "Adilabad", lat: 19.6700, lon: 78.5300 },
        { name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
        { name: "Karimnagar", lat: 18.4386, lon: 79.1288 },
        { name: "Khammam", lat: 17.2500, lon: 80.1500 },
        { name: "Mahbubnagar", lat: 16.7400, lon: 77.9900 },
        { name: "Mancherial", lat: 18.8700, lon: 79.4600 },
        { name: "Nalgonda", lat: 17.0600, lon: 79.2700 },
        { name: "Nizamabad", lat: 18.6725, lon: 78.0941 },
        { name: "Ramagundam", lat: 18.7600, lon: 79.4800 },
        { name: "Secunderabad", lat: 17.4400, lon: 78.5000 },
        { name: "Siddipet", lat: 18.1000, lon: 78.8500 },
        { name: "Suryapet", lat: 17.1400, lon: 79.6200 },
        { name: "Warangal", lat: 17.9689, lon: 79.5941 }
      ],
      "Tripura": [
        { name: "Agartala", lat: 23.8315, lon: 91.2868 },
        { name: "Belonia", lat: 23.2500, lon: 91.4500 },
        { name: "Dharmanagar", lat: 24.3800, lon: 92.1700 },
        { name: "Kailashahar", lat: 24.3300, lon: 92.0000 },
        { name: "Khowai", lat: 24.0600, lon: 91.6000 },
        { name: "Udaipur", lat: 23.5322, lon: 91.4830 }
      ],
      "Uttar Pradesh": [
        { name: "Agra", lat: 27.1767, lon: 78.0081 },
        { name: "Aligarh", lat: 27.8974, lon: 78.0880 },
        { name: "Ambedkar Nagar (Akbarpur)", lat: 26.4300, lon: 82.5400 },
        { name: "Amethi (Gauriganj)", lat: 26.1500, lon: 81.8200 },
        { name: "Amroha", lat: 28.9000, lon: 78.4700 },
        { name: "Auraiya", lat: 26.4700, lon: 79.5200 },
        { name: "Ayodhya (Faizabad)", lat: 26.7922, lon: 82.1998 },
        { name: "Azamgarh", lat: 26.0685, lon: 83.1836 },
        { name: "Baghpat", lat: 28.9400, lon: 77.2200 },
        { name: "Bahraich", lat: 27.5742, lon: 81.5949 },
        { name: "Ballia", lat: 25.7600, lon: 84.1500 },
        { name: "Balrampur", lat: 27.4300, lon: 82.1800 },
        { name: "Banda", lat: 25.4762, lon: 80.3355 },
        { name: "Barabanki", lat: 26.9300, lon: 81.1800 },
        { name: "Bareilly", lat: 28.3670, lon: 79.4304 },
        { name: "Basti", lat: 26.8148, lon: 82.7332 },
        { name: "Bhadohi (Gyanpur)", lat: 25.3400, lon: 82.5700 },
        { name: "Bijnor", lat: 29.3700, lon: 78.1300 },
        { name: "Budaun", lat: 28.0300, lon: 79.1200 },
        { name: "Bulandshahr", lat: 28.4041, lon: 77.8498 },
        { name: "Chandauli", lat: 25.2600, lon: 83.2700 },
        { name: "Chitrakoot (Karwi)", lat: 25.2000, lon: 80.9200 },
        { name: "Deoria", lat: 26.5024, lon: 83.7791 },
        { name: "Etah", lat: 27.6300, lon: 78.6700 },
        { name: "Etawah", lat: 26.7855, lon: 79.0154 },
        { name: "Farrukhabad (Fatehgarh)", lat: 27.3927, lon: 79.5803 },
        { name: "Fatehpur", lat: 25.9308, lon: 80.8134 },
        { name: "Firozabad", lat: 27.1592, lon: 78.3957 },
        { name: "Gautam Buddha Nagar (Noida)", lat: 28.5355, lon: 77.3910 },
        { name: "Ghaziabad", lat: 28.6692, lon: 77.4538 },
        { name: "Ghazipur", lat: 25.5833, lon: 83.5833 },
        { name: "Gonda", lat: 27.1300, lon: 81.9600 },
        { name: "Gorakhpur", lat: 26.7606, lon: 83.3732 },
        { name: "Hamirpur", lat: 25.9500, lon: 80.1500 },
        { name: "Hapur", lat: 28.7300, lon: 77.7800 },
        { name: "Hardoi", lat: 27.3966, lon: 80.1308 },
        { name: "Hathras (Mahamaya Nagar)", lat: 27.6000, lon: 78.0500 },
        { name: "Jalaun (Orai)", lat: 25.9891, lon: 79.4507 },
        { name: "Jaunpur", lat: 25.7479, lon: 82.6837 },
        { name: "Jhansi", lat: 25.4484, lon: 78.5685 },
        { name: "Kannauj", lat: 27.0553, lon: 79.9153 },
        { name: "Kanpur City", lat: 26.4499, lon: 80.3319 },
        { name: "Kanpur Dehat (Akbarpur-Mati)", lat: 26.4200, lon: 79.9500 },
        { name: "Kasganj (Kanshi Ram Nagar)", lat: 27.8100, lon: 78.6500 },
        { name: "Kaushambi (Manjhanpur)", lat: 25.5300, lon: 81.3800 },
        { name: "Kushinagar (Padrauna)", lat: 26.9000, lon: 83.9800 },
        { name: "Lakhimpur Kheri", lat: 27.9475, lon: 80.7826 },
        { name: "Lalitpur", lat: 24.6900, lon: 78.4100 },
        { name: "Lucknow", lat: 26.8467, lon: 80.9462 },
        { name: "Maharajganj", lat: 27.1400, lon: 83.5600 },
        { name: "Mahoba", lat: 25.2900, lon: 79.8700 },
        { name: "Mainpuri", lat: 27.2300, lon: 79.0300 },
        { name: "Mathura", lat: 27.4924, lon: 77.6737 },
        { name: "Mau", lat: 25.9417, lon: 83.5611 },
        { name: "Meerut", lat: 28.9845, lon: 77.7064 },
        { name: "Mirzapur", lat: 25.1460, lon: 82.5690 },
        { name: "Moradabad", lat: 28.8386, lon: 78.7733 },
        { name: "Muzaffarnagar", lat: 29.4727, lon: 77.7085 },
        { name: "Pilibhit", lat: 28.6300, lon: 79.8000 },
        { name: "Pratapgarh (Bela)", lat: 25.8969, lon: 81.9457 },
        { name: "Prayagraj (Allahabad)", lat: 25.4358, lon: 81.8463 },
        { name: "Rae Bareli", lat: 26.2309, lon: 81.2337 },
        { name: "Rampur", lat: 28.8152, lon: 79.0250 },
        { name: "Saharanpur", lat: 29.9680, lon: 77.5460 },
        { name: "Sambhal", lat: 28.5800, lon: 78.5500 },
        { name: "Sant Kabir Nagar (Khalilabad)", lat: 26.7800, lon: 83.0700 },
        { name: "Shahjahanpur", lat: 27.8814, lon: 79.9110 },
        { name: "Shamli", lat: 29.4500, lon: 77.3100 },
        { name: "Shravasti (Binki)", lat: 27.7000, lon: 81.9000 },
        { name: "Siddharthnagar (Naugarh)", lat: 27.3000, lon: 83.1000 },
        { name: "Sitapur", lat: 27.5666, lon: 80.6820 },
        { name: "Sonbhadra (Robertsganj)", lat: 24.6800, lon: 83.0700 },
        { name: "Sultanpur", lat: 26.2647, lon: 82.0716 },
        { name: "Unnao", lat: 26.5464, lon: 80.4879 },
        { name: "Varanasi", lat: 25.3176, lon: 82.9739 }
      ],
      "Uttarakhand": [
        { name: "Almora", lat: 29.6000, lon: 79.6700 },
        { name: "Bageshwar", lat: 29.8500, lon: 79.7700 },
        { name: "Chamoli (Gopeshwar)", lat: 30.4000, lon: 79.3300 },
        { name: "Champawat", lat: 29.3300, lon: 80.1000 },
        { name: "Dehradun", lat: 30.3165, lon: 78.0322 },
        { name: "Haldwani", lat: 29.2183, lon: 79.5130 },
        { name: "Haridwar", lat: 29.9457, lon: 78.1642 },
        { name: "Kashipur", lat: 29.2100, lon: 78.9500 },
        { name: "Kotdwar", lat: 29.7500, lon: 78.5300 },
        { name: "Mussoorie", lat: 30.4500, lon: 78.0800 },
        { name: "Nainital", lat: 29.3919, lon: 79.4542 },
        { name: "Pauri Garhwal", lat: 30.1500, lon: 78.7800 },
        { name: "Pithoragarh", lat: 29.5800, lon: 80.2200 },
        { name: "Rishikesh", lat: 30.0869, lon: 78.2676 },
        { name: "Roorkee", lat: 29.8543, lon: 77.8880 },
        { name: "Rudrapur (Udham Singh Nagar)", lat: 28.9800, lon: 79.4000 },
        { name: "Tehri Garhwal (New Tehri)", lat: 30.3800, lon: 78.4800 },
        { name: "Uttarkashi", lat: 30.7300, lon: 78.4500 }
      ],
      "West Bengal": [
        { name: "Alipurduar", lat: 26.4900, lon: 89.5300 },
        { name: "Asansol", lat: 23.6739, lon: 86.9524 },
        { name: "Baharampur (Murshidabad)", lat: 24.1000, lon: 88.2500 },
        { name: "Balurghat (Dakshin Dinajpur)", lat: 25.2200, lon: 88.7600 },
        { name: "Bankura", lat: 23.2300, lon: 87.0700 },
        { name: "Bardhaman (Burdwan)", lat: 23.2324, lon: 87.8615 },
        { name: "Cooch Behar", lat: 26.3200, lon: 89.4500 },
        { name: "Darjeeling", lat: 27.0410, lon: 88.2663 },
        { name: "Durgapur", lat: 23.5204, lon: 87.3119 },
        { name: "Habra", lat: 22.8300, lon: 88.6300 },
        { name: "Haldia", lat: 22.0600, lon: 88.0600 },
        { name: "Howrah", lat: 22.5958, lon: 88.2636 },
        { name: "Jalpaiguri", lat: 26.5200, lon: 88.7300 },
        { name: "Kalimpong", lat: 27.0600, lon: 88.4700 },
        { name: "Kharagpur", lat: 22.3460, lon: 87.2320 },
        { name: "Kolkata", lat: 22.5726, lon: 88.3639 },
        { name: "Krishnanagar (Nadia)", lat: 23.4000, lon: 88.5000 },
        { name: "Malda (English Bazar)", lat: 25.0108, lon: 88.1411 },
        { name: "Midnapore (Paschim Medinipur)", lat: 22.4200, lon: 87.3200 },
        { name: "Purulia", lat: 23.3300, lon: 86.3600 },
        { name: "Raiganj (Uttar Dinajpur)", lat: 25.6200, lon: 88.1200 },
        { name: "Siliguri", lat: 26.7271, lon: 88.3953 },
        { name: "Tamluk (Purba Medinipur)", lat: 22.3000, lon: 87.9200 }
      ],
      "Delhi (UT)": [
        { name: "Central Delhi", lat: 28.6400, lon: 77.2200 },
        { name: "Dwarka", lat: 28.5921, lon: 77.0460 },
        { name: "East Delhi", lat: 28.6300, lon: 77.3000 },
        { name: "Karol Bagh", lat: 28.6500, lon: 77.1900 },
        { name: "New Delhi", lat: 28.6139, lon: 77.2090 },
        { name: "North Delhi", lat: 28.7041, lon: 77.1025 },
        { name: "Rohini", lat: 28.7495, lon: 77.0565 },
        { name: "Saket (South Delhi)", lat: 28.5200, lon: 77.2100 },
        { name: "West Delhi", lat: 28.6600, lon: 77.1100 }
      ],
      "Chandigarh (UT)": [
        { name: "Chandigarh", lat: 30.7333, lon: 76.7794 }
      ],
      "Jammu & Kashmir (UT)": [
        { name: "Anantnag", lat: 33.7300, lon: 75.1500 },
        { name: "Baramulla", lat: 34.2000, lon: 74.3400 },
        { name: "Jammu", lat: 32.7266, lon: 74.8570 },
        { name: "Kathua", lat: 32.3700, lon: 75.5200 },
        { name: "Kupwara", lat: 34.5300, lon: 74.2500 },
        { name: "Poonch", lat: 33.7700, lon: 74.1000 },
        { name: "Rajouri", lat: 33.3800, lon: 74.3000 },
        { name: "Sopore", lat: 34.3000, lon: 74.4700 },
        { name: "Srinagar", lat: 34.0837, lon: 74.7973 },
        { name: "Udhampur", lat: 32.9300, lon: 75.1400 }
      ],
      "Ladakh (UT)": [
        { name: "Kargil", lat: 34.5539, lon: 76.1349 },
        { name: "Leh", lat: 34.1526, lon: 77.5771 }
      ],
      "Puducherry (UT)": [
        { name: "Karaikal", lat: 10.9254, lon: 79.8380 },
        { name: "Mahe", lat: 11.7000, lon: 75.5300 },
        { name: "Puducherry (Pondicherry)", lat: 11.9416, lon: 79.8083 },
        { name: "Yanam", lat: 16.7300, lon: 82.2100 }
      ],
      "Andaman & Nicobar (UT)": [
        { name: "Car Nicobar", lat: 9.1700, lon: 92.7700 },
        { name: "Diglipur", lat: 13.2600, lon: 93.0000 },
        { name: "Mayabunder", lat: 12.9300, lon: 92.9300 },
        { name: "Port Blair", lat: 11.6234, lon: 92.7265 }
      ],
      "Dadra & Nagar Haveli and Daman & Diu (UT)": [
        { name: "Daman", lat: 20.3974, lon: 72.8328 },
        { name: "Diu", lat: 20.7100, lon: 70.9800 },
        { name: "Silvassa", lat: 20.2766, lon: 73.0169 }
      ],
      "Lakshadweep (UT)": [
        { name: "Agatti", lat: 10.8500, lon: 72.1800 },
        { name: "Amini", lat: 11.1200, lon: 72.7300 },
        { name: "Kavaratti", lat: 10.5669, lon: 72.6420 },
        { name: "Minicoy", lat: 8.2800, lon: 73.0500 }
      ]
    },
    "United States": {
      "Cities": [
        { name: "Atlanta (EST)", lat: 33.7490, lon: -84.3880, tz: -5.0 },
        { name: "Chicago (CST)", lat: 41.8781, lon: -87.6298, tz: -6.0 },
        { name: "Dallas (CST)", lat: 32.7767, lon: -96.7970, tz: -6.0 },
        { name: "Denver (MST)", lat: 39.7392, lon: -104.9903, tz: -7.0 },
        { name: "Houston (CST)", lat: 29.7604, lon: -95.3698, tz: -6.0 },
        { name: "Los Angeles (PST)", lat: 34.0522, lon: -118.2437, tz: -8.0 },
        { name: "New York (EST)", lat: 40.7128, lon: -74.0060, tz: -5.0 },
        { name: "Phoenix (MST)", lat: 33.4484, lon: -112.0740, tz: -7.0 },
        { name: "San Francisco (PST)", lat: 37.7749, lon: -122.4194, tz: -8.0 },
        { name: "Seattle (PST)", lat: 47.6062, lon: -122.3321, tz: -8.0 },
        { name: "Washington DC (EST)", lat: 38.9072, lon: -77.0369, tz: -5.0 }
      ]
    },
    "United Kingdom": {
      "Cities": [
        { name: "Birmingham", lat: 52.4862, lon: -1.8904, tz: 0.0 },
        { name: "Edinburgh", lat: 55.9533, lon: -3.1883, tz: 0.0 },
        { name: "Glasgow", lat: 55.8642, lon: -4.2518, tz: 0.0 },
        { name: "Leeds", lat: 53.8008, lon: -1.5491, tz: 0.0 },
        { name: "London", lat: 51.5074, lon: -0.1278, tz: 0.0 },
        { name: "Manchester", lat: 53.4808, lon: -2.2426, tz: 0.0 }
      ]
    },
    "Canada": {
      "Cities": [
        { name: "Calgary", lat: 51.0447, lon: -114.0719, tz: -7.0 },
        { name: "Edmonton", lat: 53.5461, lon: -113.4938, tz: -7.0 },
        { name: "Montreal", lat: 45.5017, lon: -73.5673, tz: -5.0 },
        { name: "Ottawa", lat: 45.4215, lon: -75.6972, tz: -5.0 },
        { name: "Toronto", lat: 43.6532, lon: -79.3832, tz: -5.0 },
        { name: "Vancouver", lat: 49.2827, lon: -123.1207, tz: -8.0 }
      ]
    },
    "United Arab Emirates": {
      "Cities": [
        { name: "Abu Dhabi", lat: 24.4539, lon: 54.3773, tz: 4.0 },
        { name: "Ajman", lat: 25.4052, lon: 55.5136, tz: 4.0 },
        { name: "Dubai", lat: 25.2048, lon: 55.2708, tz: 4.0 },
        { name: "Ras Al Khaimah", lat: 25.6741, lon: 55.9804, tz: 4.0 },
        { name: "Sharjah", lat: 25.3463, lon: 55.4209, tz: 4.0 }
      ]
    },
    "Australia": {
      "Cities": [
        { name: "Adelaide", lat: -34.9285, lon: 138.6007, tz: 9.5 },
        { name: "Brisbane", lat: -27.4698, lon: 153.0251, tz: 10.0 },
        { name: "Canberra", lat: -35.2809, lon: 149.1300, tz: 10.0 },
        { name: "Melbourne", lat: -37.8136, lon: 144.9631, tz: 10.0 },
        { name: "Perth", lat: -31.9505, lon: 115.8605, tz: 8.0 },
        { name: "Sydney", lat: -33.8688, lon: 151.2093, tz: 10.0 }
      ]
    },
    "Singapore": {
      "Cities": [
        { name: "Singapore", lat: 1.3521, lon: 103.8198, tz: 8.0 }
      ]
    },
    "Nepal": {
      "Cities": [
        { name: "Biratnagar", lat: 26.4525, lon: 87.2718, tz: 5.75 },
        { name: "Kathmandu", lat: 27.7172, lon: 85.3240, tz: 5.75 },
        { name: "Lalitpur", lat: 27.6710, lon: 85.3218, tz: 5.75 },
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
      gender: data.gender || "Male",
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

  // --- Dynamic Cascading Location Dropdowns ---
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
    cityEl.value = "Kanpur City";
    syncCoords();
  }

  // --- Universal URL Generator to Send Data to ANY Tool ---
  function getAppUrl(baseUrl) {
    var p = getActive();
    if (!p) return baseUrl;
    var nameParts = (p.name || "").trim().split(/\s+/).filter(Boolean);
    var first = nameParts[0] || "";
    var middle = nameParts.length > 2 ? nameParts.slice(1, -1).join(" ") : "";
    var last = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
    var dobIso = p.year + "-" + String(p.month).padStart(2, "0") + "-" + String(p.day).padStart(2, "0");
    var dobDdmmyyyy = String(p.day).padStart(2, "0") + "/" + String(p.month).padStart(2, "0") + "/" + p.year;

    var h24 = p.hour || 12;
    if (p.ampm === "PM" && h24 < 12) h24 += 12;
    if (p.ampm === "AM" && h24 === 12) h24 = 0;
    var timeStr = String(h24).padStart(2, "0") + ":" + String(p.minute || 0).padStart(2, "0");

    var params = new URLSearchParams({
      name: p.name,
      first: first,
      middle: middle,
      last: last,
      gender: p.gender || "Male",
      day: p.day,
      month: p.month,
      year: p.year,
      dob_iso: dobIso,
      dob_ddmmyyyy: dobDdmmyyyy,
      time: timeStr,
      hour: p.hour,
      minute: p.minute,
      ampm: p.ampm,
      country: p.country,
      state: p.state,
      city: p.city,
      lat: p.lat,
      lon: p.lon,
      tz: p.tz
    });

    var separator = baseUrl.indexOf("?") !== -1 ? "&" : "?";
    return baseUrl + separator + params.toString();
  }

  // --- Universal Form Filler for Any Child Tool ---
  function fillForm(profile) {
    var p = profile || getActive();
    if (!p) return;

    function setVal(id, val) {
      var el = document.getElementById(id);
      if (el && val !== undefined && val !== null && val !== "") {
        el.value = val;
        el.dispatchEvent(new Event("input", { bubbles: true }));
        el.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    var dStr = String(p.day).padStart(2, "0");
    var mStr = String(p.month).padStart(2, "0");
    var formattedDate = dStr + "/" + mStr + "/" + p.year;

    // Date fields
    setVal("dateInput", formattedDate);
    setVal("dob", formattedDate);
    setVal("dobDay", p.day);
    setVal("dobMonth", p.month);
    setVal("dobYear", p.year);
    setVal("birth-day", p.day);
    setVal("birth-month", p.month);
    setVal("birth-year", p.year);

    // Name field
    setVal("nameInput", p.name);

    // Time fields
    var h12 = p.hour % 12 || 12;
    var minStr = String(p.minute || 0).padStart(2, "0");
    setVal("hourInput", h12);
    setVal("minuteInput", minStr);
    setVal("tobHour", h12);
    setVal("tobMin", p.minute || 0);

    var h24 = p.hour || 12;
    if (p.ampm === "PM" && h24 < 12) h24 += 12;
    if (p.ampm === "AM" && h24 === 12) h24 = 0;
    var time24Str = String(h24).padStart(2, "0") + ":" + minStr;
    setVal("tob", time24Str);
    setVal("birth-time", time24Str);

    var ampmBtn = document.getElementById("ampmBtn");
    if (ampmBtn && ampmBtn.textContent !== p.ampm) {
      ampmBtn.textContent = p.ampm;
      ampmBtn.dispatchEvent(new Event("click", { bubbles: true }));
    }

    var tobAmpm = document.getElementById("tobAmpm");
    if (tobAmpm) {
      tobAmpm.value = p.ampm;
      tobAmpm.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Gender field
    var genderEl = document.getElementById("cc-in-gender") || document.getElementById("gender") || document.getElementById("genderSelect");
    if (genderEl) {
      genderEl.value = p.gender || "Male";
      genderEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Cascading Location Dropdowns Auto-selection
    var countryEl = document.getElementById("countrySelect") || document.getElementById("pobCountry");
    var stateEl = document.getElementById("stateSelect") || document.getElementById("pobState") || document.getElementById("birth-state");
    var cityEl = document.getElementById("citySelect") || document.getElementById("pobCity") || document.getElementById("birth-city");
    var customCityEl = document.getElementById("customCityInput") || document.getElementById("cc-in-custom-city");

    if (countryEl && p.country) {
      countryEl.value = p.country;
      countryEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (stateEl && p.state) {
      stateEl.value = p.state;
      stateEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    if (cityEl && p.city) {
      var cityExists = false;
      for (var i = 0; i < cityEl.options.length; i++) {
        if (cityEl.options[i].value === p.city || cityEl.options[i].text === p.city) {
          cityEl.selectedIndex = i;
          cityExists = true;
          break;
        }
      }

      if (!cityExists) {
        cityEl.value = "__other__";
        if (customCityEl) {
          customCityEl.style.display = "block";
          customCityEl.value = p.city;
        }
      }
      cityEl.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Coordinates and Locations
    setVal("latInput", p.lat);
    setVal("lonInput", p.lon);
    setVal("tzInput", p.tz || 5.5);
    setVal("lat", p.lat);
    setVal("lon", p.lon);
    setVal("tz", p.tz || 5.5);
    setVal("manLat", p.lat);
    setVal("manLon", p.lon);
    setVal("manUtc", p.tz || 5.5);
    setVal("birth-lat", p.lat);
    setVal("birth-lon", p.lon);
    setVal("birth-utc", p.tz || 5.5);
  }

  // --- Auto-fill from URL parameters on page load ---
  function autofillPage() {
    var p = getActive();
    var params = new URLSearchParams(window.location.search);
    if (!p && !params.has("name")) return;

    if (params.has("name")) {
      var queryProfile = {
        name: params.get("name") || "",
        gender: params.get("gender") || "Male",
        day: parseInt(params.get("day"), 10) || 1,
        month: parseInt(params.get("month"), 10) || 1,
        year: parseInt(params.get("year"), 10) || 2000,
        hour: parseInt(params.get("hour"), 10) || 12,
        minute: parseInt(params.get("minute"), 10) || 0,
        ampm: params.get("ampm") || "AM",
        country: params.get("country") || "India",
        state: params.get("state") || "",
        city: params.get("city") || "",
        lat: parseFloat(params.get("lat")) || 26.4499,
        lon: parseFloat(params.get("lon")) || 80.3319,
        tz: parseFloat(params.get("tz")) || 5.5
      };
      fillForm(queryProfile);
    } else if (p) {
      fillForm(p);
    }
  }

  // --- Attach Dropdown Selector into any App Header/Card ---
  function attachProfileSelector(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    var profiles = getProfiles();
    var selectHtml = '<div style="margin-bottom:14px;background:rgba(242,200,121,0.1);padding:10px 12px;border-radius:8px;border:1px dashed #f2c879;">' +
      '<label style="margin:0 0 6px 0;font-size:12px;color:#f2c879;display:block;font-weight:600;">👤 Saved Birth Profile chunein:</label>' +
      '<select id="cc-app-profile-picker" style="width:100%;padding:8px 10px;border-radius:6px;background:rgba(15,23,42,0.9);color:#f2ead9;border:1px solid #f2c879;font-family:inherit;font-size:13.5px;">' +
      '<option value="">-- Choose from saved profiles --</option>';

    profiles.forEach(function (prof) {
      var genderIcon = prof.gender === "Female" ? "♀" : (prof.gender === "Other" ? "⚧" : "♂");
      selectHtml += '<option value="' + prof.id + '">' + genderIcon + ' ' + prof.name + ' (' + prof.day + '/' + prof.month + '/' + prof.year + (prof.city ? ' - ' + prof.city : '') + ')</option>';
    });

    selectHtml += '</select></div>';
    container.insertAdjacentHTML("afterbegin", selectHtml);

    var picker = document.getElementById("cc-app-profile-picker");
    picker.addEventListener("change", function () {
      var selectedId = this.value;
      if (!selectedId) return;
      var found = profiles.find(function (x) { return x.id === selectedId; });
      if (found) {
        setActiveId(found.id);
        fillForm(found);
      }
    });

    var activeProf = getActive();
    if (activeProf) {
      picker.value = activeProf.id;
      fillForm(activeProf);
    }
  }

  // --- Floating UI Modal Interface ---
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
      '<div style="display:flex;gap:8px;margin-bottom:8px;">' +
      '<input id="cc-in-name" placeholder="Full Name" style="flex:2;padding:9px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<select id="cc-in-gender" style="flex:1;padding:9px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;">' +
      '<option value="Male">Male (पुरुष)</option>' +
      '<option value="Female">Female (स्त्री)</option>' +
      '<option value="Other">Other (अन्य)</option>' +
      '</select>' +
      '</div>' +
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
        var genderBadge = p.gender === "Female" ? "♀ Female" : (p.gender === "Other" ? "⚧ Other" : "♂ Male");
        html +=
          '<div style="display:flex;justify-content:space-between;align-items:center;background:' +
          (isAct ? "rgba(217,119,6,0.2)" : "#0f172a") +
          ";border:1px solid " +
          (isAct ? "#fbbf24" : "#334155") +
          ';border-radius:8px;padding:9px 12px;margin-bottom:6px;">' +
          '<div style="cursor:pointer;flex:1;" class="cc-sel-profile" data-id="' + p.id + '">' +
          '<div style="font-weight:700;color:' + (isAct ? "#fbbf24" : "#f8fafc") + ';">' + p.name + ' <span style="font-size:11px;padding:2px 6px;border-radius:4px;background:#334155;color:#fbbf24;">' + genderBadge + '</span>' + (isAct ? " ⭐ (Selected)" : "") + '</div>' +
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
          var prof = profiles.find(function(x) { return x.id === btn.getAttribute("data-id"); });
          if (prof) fillForm(prof);
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
      var gender = document.getElementById("cc-in-gender").value;
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

      var savedRec = saveProfile({
        name: name,
        gender: gender,
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
      if (savedRec) fillForm(savedRec);
    };
  }

  // --- Public API ---
  window.BirthProfile = {
    locations: LOCATION_DATA,
    bindLocations: bindLocationDropdowns,
    getAll: getProfiles,
    get: getActive,
    save: saveProfile,
    delete: deleteProfile,
    setActive: setActiveId,
    getUrl: getAppUrl,
    fillForm: fillForm,
    attachProfileSelector: attachProfileSelector,
    init: function () {
      createUI();
      autofillPage();
    }
  };
})(window);
