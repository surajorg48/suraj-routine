/**
 * SURAJ AESTHETIC TRANSFORMATION PROGRAM — APPLICATION CONTROLLER
 * Fully Interactive Mobile-First Gym Logger, Rest Timer & Routine Hub
 * Version 3.0 | August 2026
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // STORAGE KEYS & APP STATE
  // -------------------------------------------------------------
  const STORAGE_KEY = 'suraj_gym_storage_v3';

  const defaultState = {
    selectedDayId: 'monday',
    activeFilter: 'all',
    searchQuery: '',
    selectedWeek: 1,
    checkedSets: {},      // { "monday_ex_1_1": true }
    customSetsData: {},   // { "monday_ex_1_1": { weight: "32.5", reps: "8" } }
    weeklyLogs: {},       // { "1": { bodyweight: "", belly: "", sleep: "", notes: "", lifts: {} } }
    todayProtein: 0,
    proteinDate: new Date().toISOString().slice(0, 10),
    activeWarmupKey: 'push'
  };

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return Object.assign({}, defaultState, parsed);
      }
    } catch (e) {
      console.warn('Could not read state from localStorage', e);
    }
    return Object.assign({}, defaultState);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not write state to localStorage', e);
    }
  }

  // -------------------------------------------------------------
  // AUDIO & VIBRATION REST ALERTS (Authentic iPhone Style Tone)
  // -------------------------------------------------------------
  let audioCtx = null;
  let isAudioUnlocked = false;

  // Global Audio Unlock on user interaction (essential for iPhone Safari)
  function unlockAudio() {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      const audioEl = document.getElementById('rest-chime-audio');
      if (audioEl && !isAudioUnlocked) {
        // Micro-play to prime iOS Safari audio buffer
        audioEl.volume = 0.01;
        audioEl.play().then(() => {
          audioEl.pause();
          audioEl.currentTime = 0;
          audioEl.volume = 1.0;
          isAudioUnlocked = true;
        }).catch(() => {});
      }
    } catch (e) {
      // Ignore background gesture errors
    }
  }

  // Melodic, crisp Apple / iPhone Tri-tone chime (G5 -> B5 -> E6 bell harmonics)
  function playSynthesizedChime() {
    try {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      if (audioCtx) {
        const now = audioCtx.currentTime;
        const notes = [
          { freq: 783.99, start: 0.00, dur: 0.22, gain: 0.35 },  // G5
          { freq: 987.77, start: 0.14, dur: 0.24, gain: 0.35 },  // B5
          { freq: 1318.51, start: 0.28, dur: 0.70, gain: 0.45 }  // E6 (bright completion)
        ];

        notes.forEach(n => {
          // Fundamental sine wave
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(n.freq, now + n.start);

          gain.gain.setValueAtTime(0.0001, now + n.start);
          gain.gain.exponentialRampToValueAtTime(n.gain, now + n.start + 0.006);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur);

          osc.connect(gain);
          gain.connect(audioCtx.destination);
          osc.start(now + n.start);
          osc.stop(now + n.start + n.dur);

          // Second harmonic for crystal bell timbre
          const oscHarm = audioCtx.createOscillator();
          const gainHarm = audioCtx.createGain();
          oscHarm.type = 'triangle';
          oscHarm.frequency.setValueAtTime(n.freq * 2, now + n.start);

          gainHarm.gain.setValueAtTime(0.0001, now + n.start);
          gainHarm.gain.exponentialRampToValueAtTime(n.gain * 0.25, now + n.start + 0.006);
          gainHarm.gain.exponentialRampToValueAtTime(0.0001, now + n.start + n.dur * 0.7);

          oscHarm.connect(gainHarm);
          gainHarm.connect(audioCtx.destination);
          oscHarm.start(now + n.start);
          oscHarm.stop(now + n.start + n.dur);
        });
      }
    } catch (err) {
      console.warn('AudioContext chime error:', err);
    }
  }

  function playRestAlarm() {
    let playedHtml5 = false;
    const audioEl = document.getElementById('rest-chime-audio');
    if (audioEl) {
      audioEl.volume = 1.0;
      audioEl.currentTime = 0;
      const playPromise = audioEl.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          playedHtml5 = true;
        }).catch(err => {
          console.log('HTML5 audio play blocked, falling back to synth:', err);
          playSynthesizedChime();
        });
      }
    } else {
      playSynthesizedChime();
    }

    // Mobile Vibration
    if ('vibrate' in navigator) {
      try {
        navigator.vibrate([250, 100, 250, 100, 400]);
      } catch (err) {}
    }
  }

  // -------------------------------------------------------------
  // REST TIMER CONTROLLER
  // -------------------------------------------------------------
  const timer = {
    totalSeconds: 90,
    remainingSeconds: 90,
    isRunning: false,
    start(seconds) {
      unlockAudio();
      if (seconds !== undefined) {
        this.totalSeconds = seconds;
        this.remainingSeconds = seconds;
      }
      if (this.remainingSeconds <= 0) {
        this.remainingSeconds = this.totalSeconds || 90;
      }
      this.isRunning = true;
      clearInterval(this.intervalId);
      this.intervalId = setInterval(() => this.tick(), 1000);
      this.updateUI();
    },

    pause() {
      this.isRunning = false;
      clearInterval(this.intervalId);
      this.updateUI();
    },

    toggle() {
      if (this.isRunning) {
        this.pause();
      } else {
        this.start();
      }
    },

    reset() {
      this.pause();
      this.remainingSeconds = this.totalSeconds;
      this.updateUI();
    },

    adjust(seconds) {
      this.remainingSeconds = Math.max(5, this.remainingSeconds + seconds);
      this.totalSeconds = Math.max(this.totalSeconds, this.remainingSeconds);
      this.updateUI();
    },

    tick() {
      if (this.remainingSeconds > 0) {
        this.remainingSeconds--;
        this.updateUI();
      } else {
        this.pause();
        playRestAlarm();
        showToast('Rest Complete! Time for your next set! 💪', 'success');
        this.updateUI(true);
      }
    },

    formatTime(sec) {
      const m = Math.floor(sec / 60);
      const s = sec % 60;
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    },

    updateUI(isFinished = false) {
      const timeStr = this.formatTime(this.remainingSeconds);
      const minDigits = document.getElementById('timer-min-digits');
      const ringDigits = document.getElementById('timer-ring-digits');
      const ringStatus = document.getElementById('timer-ring-status');
      const ringProgress = document.getElementById('timer-ring-progress');
      const toggleBtn = document.getElementById('btn-timer-toggle-play');
      const minToggleBtn = document.getElementById('btn-timer-min-toggle');

      if (minDigits) minDigits.textContent = timeStr;
      if (ringDigits) ringDigits.textContent = timeStr;

      if (ringStatus) {
        if (isFinished) {
          ringStatus.textContent = 'SET READY!';
          ringStatus.style.color = 'var(--success)';
        } else if (this.isRunning) {
          ringStatus.textContent = 'RESTING...';
          ringStatus.style.color = 'var(--primary)';
        } else {
          ringStatus.textContent = 'PAUSED';
          ringStatus.style.color = 'var(--surface-muted)';
        }
      }

      // SVG Ring Stroke (Circumference ~ 553px for r=88)
      if (ringProgress && this.totalSeconds > 0) {
        const circumference = 2 * Math.PI * 88;
        const progress = Math.max(0, Math.min(1, this.remainingSeconds / this.totalSeconds));
        const offset = circumference * (1 - progress);
        ringProgress.style.strokeDashoffset = offset;
      }

      // Play/Pause icon
      if (toggleBtn) {
        toggleBtn.textContent = this.isRunning ? 'Pause' : 'Resume';
      }
      if (minToggleBtn) {
        minToggleBtn.innerHTML = this.isRunning
          ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
          : '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
      }
    }
  };

  // -------------------------------------------------------------
  // TOAST SYSTEM
  // -------------------------------------------------------------
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${type === 'success' ? '✓' : 'ℹ'}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 2800);
  }

  // -------------------------------------------------------------
  // DAY OF WEEK HELPER
  // -------------------------------------------------------------
  const dayIndexMap = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  function getTodayDayId() {
    const d = new Date();
    return dayIndexMap[d.getDay()] || 'monday';
  }

  // -------------------------------------------------------------
  // RENDER: DAY SELECTOR PILLS
  // -------------------------------------------------------------
  function renderDayPills() {
    const container = document.getElementById('day-pills-container');
    if (!container || !ROUTINE_DATA) return;

    const todayId = getTodayDayId();
    container.innerHTML = '';

    ROUTINE_DATA.days.forEach(dayObj => {
      const pill = document.createElement('div');
      pill.className = `day-pill ${dayObj.id === state.selectedDayId ? 'active' : ''} ${dayObj.id === todayId ? 'is-today' : ''}`;
      pill.dataset.dayId = dayObj.id;

      const shortDay = dayObj.day.substring(0, 3);
      const karnageText = dayObj.preWorkout ? '⚡ 1 Scp' : 'Skip';

      pill.innerHTML = `
        <span class="day-pill-name">${shortDay}</span>
        <span class="day-pill-sub">${dayObj.sessionName.split('—')[0].trim()}</span>
        <span class="day-pill-karnage">${karnageText}</span>
      `;

      pill.addEventListener('click', () => {
        selectDay(dayObj.id);
      });

      container.appendChild(pill);
    });

    // Update today pill label in header
    const todayLabel = document.getElementById('today-label');
    if (todayLabel) {
      const todayObj = ROUTINE_DATA.days.find(d => d.id === todayId);
      todayLabel.textContent = todayObj ? `Today: ${todayObj.day.substring(0,3)}` : 'Today';
    }
  }

  function selectDay(dayId) {
    state.selectedDayId = dayId;
    saveState();

    // Update pill active classes
    document.querySelectorAll('.day-pill').forEach(el => {
      el.classList.toggle('active', el.dataset.dayId === dayId);
    });

    // Render workout view
    renderWorkoutView();

    // Scroll active pill into view smoothly
    const activePill = document.querySelector(`.day-pill[data-day-id="${dayId}"]`);
    if (activePill) {
      activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // -------------------------------------------------------------
  // RENDER: ACTIVE WORKOUT VIEW
  // -------------------------------------------------------------
  function renderWorkoutView() {
    const dayObj = ROUTINE_DATA.days.find(d => d.id === state.selectedDayId) || ROUTINE_DATA.days[0];
    const overviewCard = document.getElementById('day-overview-card');
    const exercisesContainer = document.getElementById('exercises-container');
    const auxCard = document.getElementById('aux-day-card');

    if (!overviewCard || !exercisesContainer) return;

    // Set active warmup key for modal
    state.activeWarmupKey = dayObj.warmupKey;

    // 1. Day Overview Hero
    const isRest = dayObj.id === 'sunday';
    overviewCard.innerHTML = `
      <div class="day-badge-row">
        <span class="badge-session">${dayObj.sessionName}</span>
        <span class="badge-karnage ${dayObj.preWorkout ? '' : 'skip'}">
          ${dayObj.preWorkout ? '⚡ Pre-Workout: YES (5:50 AM)' : '🌿 Pre-Workout: NO (Tolerance)'}
        </span>
      </div>
      <h2 class="day-title-main">${dayObj.title}</h2>
      <p class="day-focus-desc">${dayObj.primaryFocus}</p>
      <div class="day-meta-chips">
        <span class="meta-chip">⏱️ ${dayObj.duration}</span>
        <span class="meta-chip">🏋️ ${dayObj.exercises.length} Exercises</span>
        ${dayObj.cardio ? '<span class="meta-chip">❤️ Cardio Included</span>' : ''}
        ${!isRest ? `
          <button class="btn-open-warmup" id="btn-trigger-warmup">
            <span>🔥 Warm-Up Guide</span>
          </button>
        ` : ''}
      </div>
    `;

    // Hook warm-up trigger in hero
    const warmupBtn = document.getElementById('btn-trigger-warmup');
    if (warmupBtn) {
      warmupBtn.addEventListener('click', () => openWarmupModal(dayObj.warmupKey));
    }

    // 2. Render Exercises
    exercisesContainer.innerHTML = '';

    if (isRest) {
      exercisesContainer.innerHTML = `
        <div class="card glass-card text-center" style="padding: 30px 20px;">
          <div style="font-size: 2.8rem; margin-bottom: 10px;">💤</div>
          <h3 class="card-title-sm" style="font-size: 1.25rem; margin-bottom: 8px;">Rest is Mandatory — Not Optional</h3>
          <p class="text-muted-sm" style="max-width: 440px; margin: 0 auto 16px; font-size: 0.85rem; line-height: 1.5;">
            "Muscles are built during sleep and rest, not in the gym. The gym creates the stimulus. Sunday creates the muscle."
          </p>
          <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
            <span class="badge-tag highlight-sets">Minimum 8 Hours Sleep</span>
            <span class="badge-tag highlight-sets">Hit 130g Protein Target</span>
            <span class="badge-tag">Light Walking Only</span>
            <span class="badge-tag">Reduce Dinner Rice 1/2 Cup</span>
          </div>
        </div>
      `;
      auxCard.style.display = 'none';
      return;
    }

    // Apply Filter & Search
    let filteredList = dayObj.exercises;
    if (state.activeFilter && state.activeFilter !== 'all') {
      filteredList = filteredList.filter(ex => ex.muscleGroup.toLowerCase().includes(state.activeFilter.toLowerCase()) || ex.target.toLowerCase().includes(state.activeFilter.toLowerCase()));
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filteredList = filteredList.filter(ex => ex.name.toLowerCase().includes(q) || ex.target.toLowerCase().includes(q) || ex.muscleGroup.toLowerCase().includes(q));
    }

    if (filteredList.length === 0) {
      exercisesContainer.innerHTML = `
        <div class="card glass-card text-center" style="padding: 24px;">
          <p class="text-muted-sm">No exercises matching filter "${state.activeFilter || state.searchQuery}".</p>
        </div>
      `;
    } else {
      filteredList.forEach((ex, idx) => {
        exercisesContainer.appendChild(createExerciseCard(ex, idx + 1, dayObj.id));
      });
    }

    // 3. Aux Card (Cardio / Finisher)
    if (dayObj.finisher || dayObj.cardio) {
      auxCard.style.display = 'block';
      let html = '';
      if (dayObj.finisher) {
        html += `
          <div class="mb-3">
            <div class="aux-title">
              <span>🎯</span>
              <span>${dayObj.finisher.name}</span>
              <a href="${dayObj.finisher.youtubeUrl}" target="_blank" rel="noopener" class="btn-youtube-tutorial" style="margin-left:auto;">
                ▶ Tutorial
              </a>
            </div>
            <p class="aux-desc">
              <strong>${dayObj.finisher.setsReps} @ ${dayObj.finisher.weight}</strong> (${dayObj.finisher.rest} rest). ${dayObj.finisher.note}
            </p>
          </div>
        `;
      }
      if (dayObj.cardio) {
        html += `
          <div>
            <div class="aux-title">
              <span>❤️</span>
              <span>${dayObj.cardio.name}</span>
            </div>
            <p class="aux-desc">
              <strong>${dayObj.cardio.duration} (${dayObj.cardio.timing}):</strong> ${dayObj.cardio.note || dayObj.cardio.protocol}
            </p>
          </div>
        `;
      }
      auxCard.innerHTML = html;
    } else {
      auxCard.style.display = 'none';
    }
  }

  // -------------------------------------------------------------
  // CREATE SINGLE EXERCISE CARD
  // -------------------------------------------------------------
  function createExerciseCard(ex, displayIndex, dayId) {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.id = `card-${ex.id}`;

    // Determine completion
    let allChecked = ex.workingSets.length > 0;
    ex.workingSets.forEach(s => {
      const checkKey = `${dayId}_${ex.id}_${s.set}`;
      if (!state.checkedSets[checkKey]) {
        allChecked = false;
      }
    });
    if (allChecked && ex.workingSets.length > 0) {
      card.classList.add('completed');
    }

    // Warm-up sets strip
    let warmupHtml = '';
    if (ex.warmupSets && ex.warmupSets.length > 0) {
      warmupHtml = `
        <div class="warmup-sets-strip">
          <strong>Warm-Up:</strong> ${ex.warmupSets.join('  •  ')}
        </div>
      `;
    }

    // Working sets table
    let setsTableHtml = `
      <table class="working-sets-table">
        <thead>
          <tr>
            <th class="set-check-col">Done</th>
            <th>Set</th>
            <th>Target</th>
            <th>Weight (kg)</th>
            <th>Reps</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
    `;

    ex.workingSets.forEach(s => {
      const checkKey = `${dayId}_${ex.id}_${s.set}`;
      const isChecked = !!state.checkedSets[checkKey];
      const customData = state.customSetsData[checkKey] || {};
      const curWeight = customData.weight !== undefined ? customData.weight : (s.defaultWeight || '');
      const curReps = customData.reps !== undefined ? customData.reps : (s.defaultReps || '');

      setsTableHtml += `
        <tr class="set-row ${isChecked ? 'checked-row' : ''}" data-set-key="${checkKey}">
          <td class="set-check-col">
            <input type="checkbox" class="set-checkbox" data-set-key="${checkKey}" ${isChecked ? 'checked' : ''} aria-label="Mark set ${s.set} complete">
          </td>
          <td><span class="set-num-tag">Set ${s.set}</span></td>
          <td><span class="set-target-desc">${s.target}</span></td>
          <td>
            <input type="text" class="set-input-box input-weight" data-set-key="${checkKey}" value="${curWeight}" placeholder="kg">
          </td>
          <td>
            <input type="text" class="set-input-box input-reps" data-set-key="${checkKey}" value="${curReps}" placeholder="reps">
          </td>
          <td>
            <button class="btn-set-rest" data-rest-seconds="${ex.restSeconds || 90}">
              ${ex.rest.split(' ')[0] || '90s'}
            </button>
          </td>
        </tr>
      `;
    });
    setsTableHtml += `</tbody></table>`;

    // Progression banner
    let progHtml = '';
    if (ex.progression) {
      progHtml = `
        <div class="progression-banner">
          <strong>PROGRESSION:</strong> ${ex.progression}
        </div>
      `;
    }

    // DO THIS & NEVER DO Cues
    let cuesHtml = '';
    if (ex.doThis.length > 0 || ex.neverDo.length > 0) {
      cuesHtml = `
        <div class="form-guide-toggle">
          <span>Form Guidance &amp; Common Mistakes</span>
          <span class="toggle-icon">▼</span>
        </div>
        <div class="form-guide-body">
          ${ex.doThis.length > 0 ? `
            <div class="guide-box do-this">
              <div class="guide-title">DO THIS</div>
              <ul class="guide-list">
                ${ex.doThis.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          ${ex.neverDo.length > 0 ? `
            <div class="guide-box never-do">
              <div class="guide-title">NEVER DO</div>
              <ul class="guide-list">
                ${ex.neverDo.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="exercise-header-top">
        <div class="exercise-num-title">
          <span class="exercise-num-badge">${displayIndex}</span>
          <div>
            <h3 class="exercise-title">${ex.name}</h3>
            <p class="exercise-target-sub">${ex.target}</p>
          </div>
        </div>
        <a href="${ex.youtubeUrl}" target="_blank" rel="noopener" class="btn-youtube-tutorial" title="Open YouTube form tutorial for ${ex.name}">
          <svg width="14" height="14" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          ▶ Tutorial
        </a>
      </div>

      <div class="exercise-meta-row">
        <span class="badge-tag">${ex.equipment}</span>
        <span class="badge-tag">Tempo: ${ex.tempo}</span>
        <span class="badge-tag highlight-sets">${ex.setsReps}</span>
        <span class="badge-tag badge-rest-trigger" data-rest-seconds="${ex.restSeconds}">⏱️ Rest ${ex.rest}</span>
        <span class="badge-tag">${ex.rir}</span>
      </div>

      ${warmupHtml}
      ${setsTableHtml}
      ${progHtml}
      ${cuesHtml}
    `;

    // Hook Form Guide Accordion
    const guideToggle = card.querySelector('.form-guide-toggle');
    if (guideToggle) {
      guideToggle.addEventListener('click', () => {
        card.classList.toggle('guide-expanded');
        const icon = guideToggle.querySelector('.toggle-icon');
        if (icon) {
          icon.textContent = card.classList.contains('guide-expanded') ? '▲' : '▼';
        }
      });
    }

    // Hook Rest Trigger Buttons (badge and table button)
    card.querySelectorAll('[data-rest-seconds]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sec = parseInt(btn.dataset.restSeconds, 10) || 90;
        timer.start(sec);
        showToast(`Started ${sec}s rest timer!`, 'info');
      });
    });

    // Hook Set Checkboxes
    card.querySelectorAll('.set-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const key = cb.dataset.setKey;
        state.checkedSets[key] = cb.checked;
        saveState();

        const row = card.querySelector(`tr[data-set-key="${key}"]`);
        if (row) {
          row.classList.toggle('checked-row', cb.checked);
        }

        // Check if all sets for this exercise are complete
        let allSetsDone = true;
        ex.workingSets.forEach(s => {
          if (!state.checkedSets[`${dayId}_${ex.id}_${s.set}`]) {
            allSetsDone = false;
          }
        });
        card.classList.toggle('completed', allSetsDone);

        if (cb.checked) {
          // Auto-trigger rest timer if completed set
          timer.start(ex.restSeconds || 90);
          showToast(`Set completed! Rest timer started (${ex.rest})`, 'success');
        }
      });
    });

    // Hook Weight & Reps Inputs with auto-save
    card.querySelectorAll('.input-weight, .input-reps').forEach(input => {
      input.addEventListener('change', () => {
        const key = input.dataset.setKey;
        if (!state.customSetsData[key]) state.customSetsData[key] = {};

        if (input.classList.contains('input-weight')) {
          state.customSetsData[key].weight = input.value.trim();
        } else if (input.classList.contains('input-reps')) {
          state.customSetsData[key].reps = input.value.trim();
        }
        saveState();
      });
    });

    return card;
  }

  // -------------------------------------------------------------
  // RENDER: 6-DAY SPLIT AT A GLANCE
  // -------------------------------------------------------------
  function renderAllDaysSplit() {
    const container = document.getElementById('all-days-overview-container');
    if (!container || !ROUTINE_DATA) return;

    container.innerHTML = '';

    ROUTINE_DATA.days.forEach(dayObj => {
      const card = document.createElement('div');
      card.className = 'split-day-card';

      let exercisesSummaryHtml = '';
      if (dayObj.exercises.length === 0) {
        exercisesSummaryHtml = '<p class="text-muted-sm">Complete physical and central nervous system recovery. 130g protein &amp; 8+ hrs sleep.</p>';
      } else {
        exercisesSummaryHtml = '<ul class="split-ex-list">';
        dayObj.exercises.forEach((ex, i) => {
          const startW = (ex.workingSets[0] && ex.workingSets[0].target) ? ex.workingSets[0].target : ex.setsReps;
          exercisesSummaryHtml += `
            <li class="split-ex-item">
              <span>${i + 1}. ${ex.name}</span>
              <strong>${startW}</strong>
            </li>
          `;
        });
        if (dayObj.finisher) {
          exercisesSummaryHtml += `
            <li class="split-ex-item" style="color:var(--primary);">
              <span>+ Finisher: ${dayObj.finisher.name}</span>
              <strong>${dayObj.finisher.setsReps} @ ${dayObj.finisher.weight}</strong>
            </li>
          `;
        }
        if (dayObj.cardio) {
          exercisesSummaryHtml += `
            <li class="split-ex-item" style="color:#38bdf8;">
              <span>❤ Cardio: ${dayObj.cardio.name}</span>
              <strong>${dayObj.cardio.duration}</strong>
            </li>
          `;
        }
        exercisesSummaryHtml += '</ul>';
      }

      card.innerHTML = `
        <div class="split-card-header">
          <div>
            <span class="split-card-title">${dayObj.day} — ${dayObj.sessionName}</span>
            <p class="text-muted-sm">${dayObj.primaryFocus}</p>
          </div>
          <span class="split-card-meta">${dayObj.preWorkout ? '⚡ 5:50 AM' : 'No Pre-W'}</span>
        </div>
        ${exercisesSummaryHtml}
      `;

      card.addEventListener('click', () => {
        selectDay(dayObj.id);
        switchView('view-workout');
      });

      container.appendChild(card);
    });
  }

  // -------------------------------------------------------------
  // RENDER: NUTRITION & PROTEIN TRACKER
  // -------------------------------------------------------------
  function renderNutritionView() {
    const tbody = document.getElementById('protein-sources-tbody');
    const timeline = document.getElementById('meal-plan-timeline');
    const bellyList = document.getElementById('belly-rules-list');

    if (!tbody || !ROUTINE_DATA) return;

    // 1. Protein Sources Table
    tbody.innerHTML = '';
    ROUTINE_DATA.nutrition.proteinSources.forEach(src => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${src.food}</strong></td>
        <td>${src.serving}</td>
        <td><strong style="color:var(--success);">${src.protein}</strong></td>
        <td>${src.cost}</td>
        <td><span class="badge-tag" style="background:${src.color || 'var(--primary)'}22; color:${src.color || 'var(--primary)'}; border-color:${src.color || 'var(--primary)'}44;">${src.costPerGram}</span></td>
      `;
      tbody.appendChild(tr);
    });

    // 2. Meal Plan Timeline
    if (timeline) {
      timeline.innerHTML = '';
      ROUTINE_DATA.nutrition.mealPlan.forEach(m => {
        const div = document.createElement('div');
        div.className = 'meal-item';
        div.innerHTML = `
          <div class="meal-time-title">
            <strong>${m.meal}</strong>
            <span>${m.foods}</span>
          </div>
          <div class="meal-protein-badge">+${m.protein}</div>
        `;
        timeline.appendChild(div);
      });
    }

    // 3. Belly Fat Rules
    if (bellyList) {
      bellyList.innerHTML = '';
      ROUTINE_DATA.nutrition.bellyFatRules.forEach(r => {
        const div = document.createElement('div');
        div.className = 'rule-item';
        div.innerHTML = `
          <strong>${r.rule}</strong>
          <p>${r.reason}</p>
        `;
        bellyList.appendChild(div);
      });
    }

    // Update Interactive Protein Counter
    updateProteinUI();
  }

  function updateProteinUI() {
    const todayStr = new Date().toISOString().slice(0, 10);
    if (state.proteinDate !== todayStr) {
      state.todayProtein = 0;
      state.proteinDate = todayStr;
      saveState();
    }

    const currentSpan = document.getElementById('protein-current');
    const fillBar = document.getElementById('protein-progress-fill');
    if (currentSpan) currentSpan.textContent = state.todayProtein;

    if (fillBar) {
      const pct = Math.min(100, Math.round((state.todayProtein / 130) * 100));
      fillBar.style.width = `${pct}%`;
      if (pct >= 100) {
        fillBar.style.background = 'linear-gradient(90deg, #10b981, #22c55e)';
      }
    }
  }

  function addProtein(grams) {
    state.todayProtein = Math.min(250, (state.todayProtein || 0) + grams);
    saveState();
    updateProteinUI();
    showToast(`Added +${grams}g protein! Total: ${state.todayProtein}g / 130g`, 'success');
  }

  // -------------------------------------------------------------
  // RENDER: TRACKER VIEW (Lifts, Bodyweight, Sleep, Deloads)
  // -------------------------------------------------------------
  function renderTrackerView() {
    const weekSelect = document.getElementById('tracking-week-select');
    const deloadAlert = document.getElementById('week-deload-alert');
    const liftsForm = document.getElementById('compound-lifts-form');
    const historyTbody = document.getElementById('history-overview-tbody');

    if (!weekSelect || !ROUTINE_DATA) return;

    // 1. Populate Weeks (1 to 24)
    if (weekSelect.children.length === 0) {
      weekSelect.innerHTML = '';
      for (let w = 1; w <= 24; w++) {
        const opt = document.createElement('option');
        opt.value = w;
        const isDeload = (w % 6 === 0);
        opt.textContent = `Week ${w}${isDeload ? ' (DELOAD 40%)' : ''}`;
        weekSelect.appendChild(opt);
      }
      weekSelect.value = state.selectedWeek;
    }

    const curWeek = parseInt(weekSelect.value, 10) || 1;
    const isDeload = (curWeek % 6 === 0);
    if (deloadAlert) {
      deloadAlert.style.display = isDeload ? 'inline-block' : 'none';
    }

    // Week title
    const weekTitle = document.getElementById('week-entry-title');
    if (weekTitle) {
      weekTitle.textContent = `Week ${curWeek} Log ${isDeload ? '— DELOAD WEEK' : ''}`;
    }

    // Load active week log data
    if (!state.weeklyLogs[curWeek]) {
      state.weeklyLogs[curWeek] = {
        bodyweight: '',
        belly: '',
        sleep: '',
        notes: '',
        lifts: {}
      };
    }
    const curLog = state.weeklyLogs[curWeek];

    // Populate body inputs
    const bwInput = document.getElementById('stat-bodyweight');
    const bellyInput = document.getElementById('stat-belly');
    const sleepInput = document.getElementById('stat-sleep');
    const notesInput = document.getElementById('week-general-notes');

    if (bwInput) bwInput.value = curLog.bodyweight || '';
    if (bellyInput) bellyInput.value = curLog.belly || '';
    if (sleepInput) sleepInput.value = curLog.sleep || '';
    if (notesInput) notesInput.value = curLog.notes || '';

    // Populate Compound Lifts form
    if (liftsForm) {
      liftsForm.innerHTML = '';
      ROUTINE_DATA.trackingLifts.forEach(lift => {
        const row = document.createElement('div');
        row.className = 'compound-lift-row';

        const savedSets = curLog.lifts[lift.name] || ['', '', '', ''];

        row.innerHTML = `
          <div class="lift-name-tag">
            <strong>${lift.name}</strong>
            <span>${lift.target} • Base: ${lift.startingWeight}</span>
          </div>
          <div class="lift-set-inputs">
            ${[1, 2, 3, 4].map(sIdx => `
              <input type="text" class="lift-input-set-box" data-lift="${lift.name}" data-set-index="${sIdx - 1}" placeholder="Set ${sIdx}" value="${savedSets[sIdx - 1] || ''}">
            `).join('')}
          </div>
        `;
        liftsForm.appendChild(row);
      });

      // Hook inputs
      liftsForm.querySelectorAll('.lift-input-set-box').forEach(inp => {
        inp.addEventListener('change', () => {
          const lName = inp.dataset.lift;
          const sIdx = parseInt(inp.dataset.setIndex, 10);
          if (!curLog.lifts[lName]) curLog.lifts[lName] = ['', '', '', ''];
          curLog.lifts[lName][sIdx] = inp.value.trim();
          saveState();
          renderHistoryOverview();
        });
      });
    }

    renderHistoryOverview();
  }

  function renderHistoryOverview() {
    const historyTbody = document.getElementById('history-overview-tbody');
    if (!historyTbody) return;

    historyTbody.innerHTML = '';
    const recordedWeeks = Object.keys(state.weeklyLogs).map(k => parseInt(k, 10)).sort((a, b) => a - b);

    if (recordedWeeks.length === 0) {
      historyTbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted-sm" style="padding:14px;">No weekly logs saved yet. Start by entering Week 1 data above.</td></tr>`;
      return;
    }

    recordedWeeks.forEach(w => {
      const data = state.weeklyLogs[w];
      const tr = document.createElement('tr');
      const isDeload = (w % 6 === 0);

      const inclineSet = (data.lifts['Incline Barbell Press'] && data.lifts['Incline Barbell Press'][0]) || '—';
      const flatSet = (data.lifts['Flat Barbell Bench Press'] && data.lifts['Flat Barbell Bench Press'][0]) || '—';
      const squatSet = (data.lifts['Barbell Back Squat'] && data.lifts['Barbell Back Squat'][0]) || '—';

      tr.innerHTML = `
        <td><strong>Week ${w}${isDeload ? ' (DL)' : ''}</strong></td>
        <td>${data.bodyweight ? data.bodyweight + ' kg' : '—'}</td>
        <td>${data.belly ? data.belly + ' cm' : '—'}</td>
        <td>${data.sleep ? data.sleep + ' h' : '—'}</td>
        <td>${inclineSet}</td>
        <td>${flatSet}</td>
        <td>${squatSet}</td>
      `;
      historyTbody.appendChild(tr);
    });
  }

  // -------------------------------------------------------------
  // RENDER: MASTER GUIDE & PROTOCOLS
  // -------------------------------------------------------------
  function renderGuideView() {
    if (!ROUTINE_DATA) return;

    // 1. Preworkout Table
    const preworkoutTbody = document.getElementById('preworkout-schedule-tbody');
    if (preworkoutTbody) {
      preworkoutTbody.innerHTML = '';
      ROUTINE_DATA.preWorkout.schedule.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${item.day}</strong></td>
          <td>${item.session}</td>
          <td><span class="badge-tag ${item.preWorkout ? 'highlight-sets' : ''}">${item.preWorkout ? 'YES (1 Scoop)' : 'NO (Skip)'}</span></td>
          <td>${item.time}</td>
        `;
        preworkoutTbody.appendChild(tr);
      });
    }

    // 2. Deload Table & Early Signs
    const deloadTbody = document.getElementById('deload-schedule-tbody');
    const deloadSignsList = document.getElementById('deload-signs-list');
    if (deloadTbody) {
      deloadTbody.innerHTML = '';
      ROUTINE_DATA.deload.schedule.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><strong>${row.period}</strong></td>
          <td>${row.action}</td>
        `;
        deloadTbody.appendChild(tr);
      });
    }
    if (deloadSignsList) {
      deloadSignsList.innerHTML = '';
      ROUTINE_DATA.deload.earlyWarningSigns.forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        deloadSignsList.appendChild(li);
      });
    }

    // 3. 6-Month Roadmap
    const roadmapTimeline = document.getElementById('roadmap-timeline');
    if (roadmapTimeline) {
      roadmapTimeline.innerHTML = '';
      ROUTINE_DATA.monthlyProgression.forEach(step => {
        const div = document.createElement('div');
        div.className = 'roadmap-step';
        div.innerHTML = `
          <div class="roadmap-step-badge">${step.month}</div>
          <div class="roadmap-step-content">
            <strong>${step.focus}</strong>
            <p>🎯 Result: ${step.result}</p>
          </div>
        `;
        roadmapTimeline.appendChild(div);
      });
    }

    // 4. Terminology
    const termGrid = document.getElementById('terminology-grid');
    if (termGrid) {
      termGrid.innerHTML = '';
      ROUTINE_DATA.terminology.forEach(t => {
        const div = document.createElement('div');
        div.className = 'term-box';
        div.innerHTML = `
          <div class="term-name">${t.term}</div>
          <div class="term-def">${t.meaning}</div>
        `;
        termGrid.appendChild(div);
      });
    }
  }

  // -------------------------------------------------------------
  // WARM-UP MODAL
  // -------------------------------------------------------------
  function openWarmupModal(typeKey) {
    const modal = document.getElementById('warmup-modal');
    const titleEl = document.getElementById('warmup-modal-title');
    const stepsEl = document.getElementById('warmup-modal-steps');
    if (!modal || !ROUTINE_DATA) return;

    const warmupInfo = ROUTINE_DATA.warmup[typeKey] || ROUTINE_DATA.warmup.push;
    if (titleEl) titleEl.textContent = `${warmupInfo.title} (${warmupInfo.duration})`;

    if (stepsEl) {
      stepsEl.innerHTML = '';
      warmupInfo.steps.forEach((step, idx) => {
        const item = document.createElement('label');
        item.className = 'warmup-step-item';
        item.innerHTML = `
          <input type="checkbox" id="warmup-step-${idx}">
          <span>${step}</span>
        `;
        stepsEl.appendChild(item);
      });
    }

    modal.style.display = 'flex';
  }

  function closeWarmupModal() {
    const modal = document.getElementById('warmup-modal');
    if (modal) modal.style.display = 'none';
  }

  // -------------------------------------------------------------
  // VIEW SWITCHING
  // -------------------------------------------------------------
  function switchView(targetViewId) {
    document.querySelectorAll('.view-section').forEach(view => {
      view.classList.toggle('active', view.id === targetViewId);
    });

    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.view === targetViewId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (targetViewId === 'view-split') renderAllDaysSplit();
    if (targetViewId === 'view-nutrition') renderNutritionView();
    if (targetViewId === 'view-tracker') renderTrackerView();
    if (targetViewId === 'view-guide') renderGuideView();
    if (targetViewId === 'view-workout') renderWorkoutView();
  }

  // -------------------------------------------------------------
  // EXPORT / IMPORT LOCAL STORAGE (GYM DATABASE)
  // -------------------------------------------------------------
  function exportGymData() {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
      const downloadAnchor = document.createElement('a');
      const dateStr = new Date().toISOString().slice(0, 10);
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `suraj_gym_backup_${dateStr}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Gym backup exported successfully!', 'success');
    } catch (err) {
      alert('Export error: ' + err.message);
    }
  }

  function importGymData(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported && (imported.checkedSets || imported.weeklyLogs || imported.selectedDayId)) {
          state = Object.assign({}, defaultState, imported);
          saveState();
          showToast('Backup restored successfully!', 'success');
          renderWorkoutView();
          renderTrackerView();
          renderNutritionView();
        } else {
          alert('Invalid backup file format.');
        }
      } catch (err) {
        alert('Could not parse JSON file: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  function resetDayCheckboxes() {
    if (!confirm(`Reset completed checkmarks for ${state.selectedDayId.toUpperCase()}? (Weights and notes will be preserved).`)) return;

    const dayPrefix = `${state.selectedDayId}_`;
    Object.keys(state.checkedSets).forEach(k => {
      if (k.startsWith(dayPrefix)) {
        delete state.checkedSets[k];
      }
    });
    saveState();
    renderWorkoutView();
    showToast(`Checkboxes reset for ${state.selectedDayId}!`, 'info');
  }

  // -------------------------------------------------------------
  // INITIALIZATION & EVENT LISTENERS
  // -------------------------------------------------------------
  function init() {
    // 1. Initial renders
    renderDayPills();
    renderWorkoutView();
    renderNutritionView();
    renderGuideView();

    // 2. Bottom Nav Tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const viewId = tab.dataset.view;
        switchView(viewId);
      });
    });

    // 3. Quick "Today" Jump
    const todayBtn = document.getElementById('btn-quick-today');
    if (todayBtn) {
      todayBtn.addEventListener('click', () => {
        const todayId = getTodayDayId();
        selectDay(todayId);
        switchView('view-workout');
      });
    }

    // 4. Header Guide button
    const openGuideBtn = document.getElementById('btn-open-guide');
    if (openGuideBtn) {
      openGuideBtn.addEventListener('click', () => switchView('view-guide'));
    }

    // 5. Search & Filter Bar
    const searchInput = document.getElementById('exercise-search');
    const searchClear = document.getElementById('search-clear-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        if (searchClear) searchClear.style.display = state.searchQuery ? 'block' : 'none';
        renderWorkoutView();
      });
    }
    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClear.style.display = 'none';
        renderWorkoutView();
      });
    }

    // Filter Chips
    document.querySelectorAll('.filter-chips .chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        state.activeFilter = chip.dataset.filter;
        renderWorkoutView();
      });
    });

    // 6. Day Reset & Backup
    const resetBtn = document.getElementById('btn-reset-day');
    if (resetBtn) resetBtn.addEventListener('click', resetDayCheckboxes);

    const exportQuickBtn = document.getElementById('btn-export-quick');
    if (exportQuickBtn) exportQuickBtn.addEventListener('click', exportGymData);

    const exportJsonBtn = document.getElementById('btn-export-json');
    if (exportJsonBtn) exportJsonBtn.addEventListener('click', exportGymData);

    const importInput = document.getElementById('import-file-input');
    if (importInput) {
      importInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          importGymData(e.target.files[0]);
        }
      });
    }

    // 7. Rest Timer Floating Widget Controls
    const timerWidget = document.getElementById('rest-timer-widget');
    const timerExpandBtn = document.getElementById('btn-timer-expand');
    const timerMinimizeBtn = document.getElementById('btn-timer-minimize');
    const timerMinBar = document.getElementById('timer-minimized-bar');
    const timerMinToggle = document.getElementById('btn-timer-min-toggle');
    const timerTogglePlay = document.getElementById('btn-timer-toggle-play');
    const timerResetBtn = document.getElementById('btn-timer-reset');
    const timerSub10 = document.getElementById('btn-timer-sub10');
    const timerAdd10 = document.getElementById('btn-timer-add10');

    if (timerExpandBtn && timerWidget) {
      timerExpandBtn.addEventListener('click', () => {
        timerWidget.classList.add('expanded');
      });
    }
    if (timerMinimizeBtn && timerWidget) {
      timerMinimizeBtn.addEventListener('click', () => {
        timerWidget.classList.remove('expanded');
      });
    }
    if (timerMinBar && timerWidget) {
      timerMinBar.addEventListener('click', (e) => {
        if (!e.target.closest('.btn-timer-icon')) {
          timerWidget.classList.add('expanded');
        }
      });
    }
    if (timerMinToggle) {
      timerMinToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        timer.toggle();
      });
    }
    if (timerTogglePlay) {
      timerTogglePlay.addEventListener('click', () => timer.toggle());
    }
    if (timerResetBtn) {
      timerResetBtn.addEventListener('click', () => timer.reset());
    }
    if (timerSub10) {
      timerSub10.addEventListener('click', () => timer.adjust(-10));
    }
    if (timerAdd10) {
      timerAdd10.addEventListener('click', () => timer.adjust(10));
    }

    const testChimeBtn = document.getElementById('btn-test-chime');
    if (testChimeBtn) {
      testChimeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        unlockAudio();
        playRestAlarm();
        showToast('🔔 iPhone completion chime previewed!', 'success');
      });
    }

    // Global audio unlock for iPhone / Safari on any tap
    ['touchstart', 'touchend', 'click'].forEach(evt => {
      document.addEventListener(evt, unlockAudio, { passive: true });
    });

    // Preset Buttons
    document.querySelectorAll('.btn-preset').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sec = parseInt(btn.dataset.seconds, 10);
        timer.start(sec);
      });
    });

    // 8. Warmup Modal
    const warmupCloseBtn = document.getElementById('btn-close-warmup');
    const warmupDoneBtn = document.getElementById('btn-warmup-done');
    const warmupBackdrop = document.getElementById('warmup-modal-backdrop');

    if (warmupCloseBtn) warmupCloseBtn.addEventListener('click', closeWarmupModal);
    if (warmupDoneBtn) warmupDoneBtn.addEventListener('click', closeWarmupModal);
    if (warmupBackdrop) warmupBackdrop.addEventListener('click', closeWarmupModal);

    // 9. Nutrition Quick Protein Additions
    document.querySelectorAll('.btn-quick-add').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = parseInt(btn.dataset.add, 10) || 0;
        addProtein(g);
      });
    });
    const resetProteinBtn = document.getElementById('btn-reset-protein');
    if (resetProteinBtn) {
      resetProteinBtn.addEventListener('click', () => {
        state.todayProtein = 0;
        saveState();
        updateProteinUI();
        showToast('Protein tracker reset to 0g', 'info');
      });
    }

    // 10. Tracker Week Selector
    const weekSelect = document.getElementById('tracking-week-select');
    if (weekSelect) {
      weekSelect.addEventListener('change', () => {
        state.selectedWeek = parseInt(weekSelect.value, 10);
        saveState();
        renderTrackerView();
      });
    }

    // Body Stats Auto-save
    ['stat-bodyweight', 'stat-belly', 'stat-sleep'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('change', () => {
          const w = state.selectedWeek;
          if (!state.weeklyLogs[w]) state.weeklyLogs[w] = { bodyweight: '', belly: '', sleep: '', notes: '', lifts: {} };
          if (id === 'stat-bodyweight') state.weeklyLogs[w].bodyweight = el.value.trim();
          if (id === 'stat-belly') state.weeklyLogs[w].belly = el.value.trim();
          if (id === 'stat-sleep') state.weeklyLogs[w].sleep = el.value.trim();
          saveState();
          renderHistoryOverview();
        });
      }
    });

    const notesEl = document.getElementById('week-general-notes');
    if (notesEl) {
      notesEl.addEventListener('change', () => {
        const w = state.selectedWeek;
        if (!state.weeklyLogs[w]) state.weeklyLogs[w] = { bodyweight: '', belly: '', sleep: '', notes: '', lifts: {} };
        state.weeklyLogs[w].notes = notesEl.value.trim();
        saveState();
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
