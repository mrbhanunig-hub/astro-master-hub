// birth-profile.js — Multi-profile manager for The Cosmic Counsellor
(function (window) {
  var STORAGE_KEY = "cc_birth_profiles_list";
  var ACTIVE_KEY = "cc_active_profile_id";

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
      state: data.state || "",
      city: data.city || "",
      lat: data.lat || "",
      lon: data.lon || "",
      tz: data.tz || 5.5
    };

    if (existingIndex >= 0) {
      list[existingIndex] = record;
    } else {
      list.unshift(record); // newest first
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

  // Floating UI modal on dashboard / pages
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
      "background:rgba(2,6,23,0.75);backdrop-filter:blur(6px);z-index:100000;" +
      "align-items:center;justify-content:center;padding:16px;box-sizing:border-box;";

    overlay.innerHTML =
      '<div style="background:#1e293b;border:1px solid rgba(251,191,36,0.3);border-radius:16px;' +
      'width:100%;max-width:440px;color:#f8fafc;padding:24px;box-shadow:0 12px 36px rgba(0,0,0,0.5);' +
      'font-family:system-ui,-apple-system,sans-serif;max-height:90vh;overflow-y:auto;">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">' +
      '<h3 style="margin:0;font-size:18px;color:#fbbf24;">Saved Birth Profiles (5+)</h3>' +
      '<button id="cc-close-modal" style="background:none;border:none;color:#94a3b8;font-size:24px;cursor:pointer;">&times;</button>' +
      '</div>' +
      '<div id="cc-profile-list" style="margin-bottom:18px;"></div>' +
      '<div style="border-top:1px dashed #334155;padding-top:14px;">' +
      '<h4 style="margin:0 0 10px 0;font-size:14px;color:#f1f5f9;">Add / Update Profile</h4>' +
      '<input id="cc-in-name" placeholder="Name" style="width:100%;padding:8px 10px;margin-bottom:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<div style="display:flex;gap:6px;margin-bottom:8px;">' +
      '<input id="cc-in-day" placeholder="DD" type="number" min="1" max="31" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-month" placeholder="MM" type="number" min="1" max="12" style="flex:1;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-year" placeholder="YYYY" type="number" min="1900" max="2100" style="flex:1.5;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '</div>' +
      '<div style="display:flex;gap:6px;margin-bottom:12px;">' +
      '<input id="cc-in-time" type="time" style="flex:2;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '<input id="cc-in-city" placeholder="City" style="flex:2;padding:8px;border-radius:6px;background:#0f172a;border:1px solid #475569;color:#fff;box-sizing:border-box;" />' +
      '</div>' +
      '<button id="cc-save-btn" style="width:100%;padding:10px;background:#d97706;border:none;border-radius:8px;color:#fff;font-weight:700;cursor:pointer;">Save Profile</button>' +
      '</div>' +
      '</div>';

    document.body.appendChild(fab);
    document.body.appendChild(overlay);

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
          ';border-radius:8px;padding:8px 12px;margin-bottom:6px;">' +
          '<div style="cursor:pointer;flex:1;" class="cc-sel-profile" data-id="' + p.id + '">' +
          '<div style="font-weight:700;color:' + (isAct ? "#fbbf24" : "#f8fafc") + ';">' + p.name + (isAct ? " (Active)" : "") + '</div>' +
          '<div style="font-size:12px;color:#94a3b8;">' + p.day + "/" + p.month + "/" + p.year + (p.city ? " • " + p.city : "") + '</div>' +
          '</div>' +
          '<button class="cc-del-profile" data-id="' + p.id + '" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:14px;padding:4px 8px;">✕</button>' +
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
      var city = document.getElementById("cc-in-city").value.trim();

      if (!name || !day || !month || !year) {
        alert("Please enter Name and full Date of Birth.");
        return;
      }

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
        city: city
      });

      document.getElementById("cc-in-name").value = "";
      document.getElementById("cc-in-day").value = "";
      document.getElementById("cc-in-month").value = "";
      document.getElementById("cc-in-year").value = "";
      document.getElementById("cc-in-time").value = "";
      document.getElementById("cc-in-city").value = "";

      renderModalList();
    };
  }

  window.BirthProfile = {
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
