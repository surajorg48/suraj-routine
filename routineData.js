/**
 * SURAJ AESTHETIC TRANSFORMATION PROGRAM — DATABASE
 * Updated V6.1 with Restructured Abs, Progress Report & Daily Mobility Flow
 * November 2026
 */

const ROUTINE_DATA = {
  "athlete": {
    "name": "Suraj",
    "title": "6-Month Aesthetic Transformation Program",
    "age": 25,
    "height": "5'8\"",
    "weight": "65-66 kg",
    "status": "Natural Athlete",
    "standard": "Men's Physique Standard",
    "split": "6 Days / Week (Push / Pull / Legs / Push / Pull / Arms)",
    "duration": "Extended to April–May 2027 (Originally 6 Months)",
    "version": "Version 6.1 (Restructured Abs + Mobility)",
    "date": "November 2026",
    "theme": {
      "primary": "#F4510B",
      "secondary": "#263137",
      "background": "#77848D",
      "surface": "#C6D0D4",
      "accent": "#BC3E0D",
      "textOnDark": "#FFFFFF"
    }
  },
  "terminology": [
    {
      "term": "REP",
      "meaning": "One complete movement. Lower bar to chest, press up = 1 rep. Do 8 = '8 reps'."
    },
    {
      "term": "SET",
      "meaning": "A group of reps without stopping. '4 × 8' = 4 sets of 8 reps."
    },
    {
      "term": "WORKING SET",
      "meaning": "Real sets with target weight. These build muscle. Every rep counts."
    },
    {
      "term": "WARM-UP SET",
      "meaning": "Light sets before working sets. Prepare joints and CNS. Never count toward volume."
    },
    {
      "term": "RIR 0",
      "meaning": "Absolute failure — cannot do one more clean rep. Last set of isolation only."
    },
    {
      "term": "RIR 1",
      "meaning": "Could do 1 more if forced. Most isolation working sets."
    },
    {
      "term": "RIR 2",
      "meaning": "Could do 2 more. All compound working sets."
    },
    {
      "term": "TEMPO 3-1-1-0",
      "meaning": "3 sec lower → 1 sec pause → 1 sec lift → 0 pause at top."
    },
    {
      "term": "PROGRESSIVE OVERLOAD",
      "meaning": "Systematically increasing weight over time. Without this, muscles stop growing."
    }
  ],
  "preWorkout": {
    "brand": "Karnage Pre-Workout",
    "standardScoop": "1 scoop ONLY (approx. 100mg caffeine equivalent)",
    "timing": "20-30 minutes prior to lifting (at 5:50 AM)",
    "rules": [
      "1 scoop ONLY (100mg). Never take 2.",
      "Take 20-30 min before training at 5:50 AM.",
      "Never consume after 4:00 PM to avoid disrupting deep sleep.",
      "Skip entire 4th week to reset caffeine tolerance and keep receptors sensitive."
    ],
    "schedule": [
      {
        "day": "Monday",
        "session": "Push A — Upper Chest + Shoulders",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Tuesday",
        "session": "Pull A — Lats + Biceps",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Wednesday",
        "session": "Legs + Abs",
        "preWorkout": false,
        "amount": "Skip (Save tolerance)",
        "time": "None"
      },
      {
        "day": "Thursday",
        "session": "Push B — Mid + Lower Chest + Triceps",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Friday",
        "session": "Pull B — Rear Delts + Back + Abs",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Saturday",
        "session": "Shoulders + Arms + Abs",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Sunday",
        "session": "Complete Rest",
        "preWorkout": false,
        "amount": "None",
        "time": "Rest"
      }
    ]
  },
  "warmup": {
    "push": {
      "title": "Push Warm-Up (Monday & Thursday)",
      "duration": "5-7 min",
      "steps": [
        {
          "text": "Arm circles ×20 each way (forward & backward)",
          "youtubeUrl": "https://www.youtube.com/results?search_query=arm+circles+shoulder+warmup+proper+form"
        },
        {
          "text": "Band pull-aparts ×20 (squeeze upper back)",
          "youtubeUrl": "https://www.youtube.com/results?search_query=band+pull+apart+shoulder+warmup+upper+back"
        },
        {
          "text": "Push-ups controlled tempo ×20",
          "youtubeUrl": "https://www.youtube.com/results?search_query=push+up+controlled+tempo+chest+warmup"
        },
        {
          "text": "Shoulder rotations / Cuban press ×10",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cuban+press+shoulder+rotation+warmup"
        },
        {
          "text": "Specific progressive warm-up sets for Exercise 1",
          "youtubeUrl": "https://www.youtube.com/results?search_query=pyramid+warmup+sets+compound+lifting+form"
        }
      ]
    },
    "pull": {
      "title": "Pull Warm-Up (Tuesday & Friday)",
      "duration": "5-7 min",
      "steps": [
        {
          "text": "Dead hang from pull-up bar for 30 seconds",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dead+hang+pullup+bar+lat+warmup+form"
        },
        {
          "text": "Scapular retractions / pull-downs ×15",
          "youtubeUrl": "https://www.youtube.com/results?search_query=scapular+retraction+pulldown+shoulder+blade+warmup"
        },
        {
          "text": "Band pull-aparts ×30",
          "youtubeUrl": "https://www.youtube.com/results?search_query=band+pull+apart+upper+back+rear+delt+warmup"
        },
        {
          "text": "Light cable face pulls ×20",
          "youtubeUrl": "https://www.youtube.com/results?search_query=light+cable+face+pull+rear+delt+warmup"
        },
        {
          "text": "Specific progressive warm-up sets for Exercise 1",
          "youtubeUrl": "https://www.youtube.com/results?search_query=pyramid+warmup+sets+compound+lifting+form"
        }
      ]
    },
    "legs": {
      "title": "Legs Warm-Up (Wednesday)",
      "duration": "7-9 min",
      "steps": [
        {
          "text": "5 minutes stationary bike or incline treadmill (Zone 1/2)",
          "youtubeUrl": "https://www.youtube.com/results?search_query=stationary+bike+warmup+legs+zone+2"
        },
        {
          "text": "10 bodyweight squats full depth with pause",
          "youtubeUrl": "https://www.youtube.com/results?search_query=bodyweight+squat+full+depth+pause+warmup+form"
        },
        {
          "text": "10 leg swings forward/backward & sideways (each leg)",
          "youtubeUrl": "https://www.youtube.com/results?search_query=leg+swings+hip+mobility+warmup"
        },
        {
          "text": "10 bodyweight glute bridges (hold top squeeze)",
          "youtubeUrl": "https://www.youtube.com/results?search_query=bodyweight+glute+bridge+activation+warmup"
        },
        {
          "text": "Specific progressive warm-up sets for Barbell Squat",
          "youtubeUrl": "https://www.youtube.com/results?search_query=squat+warmup+pyramid+sets+proper+depth"
        }
      ]
    },
    "shoulders": {
      "title": "Shoulders & Arms Warm-Up (Saturday)",
      "duration": "5-7 min",
      "steps": [
        {
          "text": "Arm circles ×20 each way",
          "youtubeUrl": "https://www.youtube.com/results?search_query=arm+circles+shoulder+warmup+proper+form"
        },
        {
          "text": "Band pull-aparts ×25",
          "youtubeUrl": "https://www.youtube.com/results?search_query=band+pull+apart+shoulder+warmup+upper+back"
        },
        {
          "text": "Controlled push-ups ×10",
          "youtubeUrl": "https://www.youtube.com/results?search_query=push+up+controlled+tempo+chest+warmup"
        },
        {
          "text": "5kg light dumbbell lateral raises ×15",
          "youtubeUrl": "https://www.youtube.com/results?search_query=light+dumbbell+lateral+raise+shoulder+warmup"
        },
        {
          "text": "Specific progressive warm-up sets for Exercise 1",
          "youtubeUrl": "https://www.youtube.com/results?search_query=pyramid+warmup+sets+compound+lifting+form"
        }
      ]
    }
  },
  "deload": {
    "title": "Deload Protocol (Every 6th Week)",
    "description": "Every 6th week is a mandatory deload week. Weights are reduced by 40% while preserving sets and reps to let tendons, ligaments, and the central nervous system supercompensate.",
    "schedule": [
      {
        "period": "Weeks 1-5",
        "action": "Full program at full weights — progressive overload every session."
      },
      {
        "period": "Week 6 — DELOAD",
        "action": "All weights reduced 40%. Same sets, same reps. No pre-workout this week."
      },
      {
        "period": "Weeks 7-11",
        "action": "Resume full program. You will return noticeably stronger."
      },
      {
        "period": "Week 12 — DELOAD",
        "action": "Repeat deload protocol (40% weight drop, no pre-workout)."
      },
      {
        "period": "Weeks 13-17",
        "action": "Full intensity progression cycle."
      },
      {
        "period": "Week 18 — DELOAD",
        "action": "Deload week (40% reduction)."
      },
      {
        "period": "Weeks 19-23",
        "action": "Peak transformation cycle."
      },
      {
        "period": "Week 24 — DELOAD",
        "action": "Final deload / physique photoshoot readiness."
      }
    ],
    "earlyWarningSigns": [
      "Sleep disruption or waking up fatigued despite 8 hours in bed",
      "Dreading the gym (CNS fatigue, not laziness)",
      "Strength drops across multiple core lifts in the same week",
      "Joints, shoulders, or tendons constantly irritated"
    ]
  },
  "nutrition": {
    "dailyTarget": "130g protein / day minimum (2g × 65kg bodyweight = 130g)",
    "bellyFatPhilosophy": "80% of belly fat reduction is nutrition. One extra roti adds back what you burned in 5 minutes of cardio. You cannot out-train a bad diet.",
    "proteinSources": [
      {
        "food": "Soy Chunks / Nutrela",
        "serving": "100g dry",
        "protein": "52g",
        "cost": "Rs. 30-40 per 200g",
        "costPerGram": "Rs. 0.4 / g",
        "badge": "Cheapest",
        "color": "#16a34a"
      },
      {
        "food": "Dal (Moong/Chana/Toor)",
        "serving": "100g dry",
        "protein": "22-25g",
        "cost": "Rs. 15-20 per 100g",
        "costPerGram": "Rs. 0.8 / g",
        "badge": "Excellent",
        "color": "#16a34a"
      },
      {
        "food": "Whole Eggs",
        "serving": "1 egg",
        "protein": "6g",
        "cost": "Rs. 6-7 each",
        "costPerGram": "Rs. 1.1 / g",
        "badge": "Best Value",
        "color": "#f59e0b"
      },
      {
        "food": "Chicken Breast",
        "serving": "100g cooked",
        "protein": "31g",
        "cost": "Rs. 30-40 per 100g",
        "costPerGram": "Rs. 1.2 / g",
        "badge": "Lean Muscle",
        "color": "#f59e0b"
      },
      {
        "food": "Milk",
        "serving": "500 ml",
        "protein": "16g",
        "cost": "Rs. 25-30",
        "costPerGram": "Rs. 1.7 / g",
        "badge": "Easy Intake",
        "color": "#0284c7"
      },
      {
        "food": "Whey Protein",
        "serving": "1 scoop",
        "protein": "24g",
        "cost": "Rs. 65-80 per scoop",
        "costPerGram": "Rs. 2.8 / g",
        "badge": "Convenient",
        "color": "#8b5cf6"
      }
    ],
    "mealPlan": [
      {
        "meal": "Morning (Pre-Gym)",
        "foods": "4 whole eggs + 250ml milk",
        "protein": "32g"
      },
      {
        "meal": "Post-Gym",
        "foods": "1 scoop whey protein OR 50g soy chunks",
        "protein": "24-26g"
      },
      {
        "meal": "Lunch",
        "foods": "2 roti + large bowl dal + seasonal sabzi",
        "protein": "20-25g"
      },
      {
        "meal": "Evening Snack",
        "foods": "2 boiled eggs + handful of peanuts",
        "protein": "19g"
      },
      {
        "meal": "Dinner",
        "foods": "2 roti + large bowl dal + 50g soy chunks or paneer",
        "protein": "25-30g"
      },
      {
        "meal": "Before Sleep",
        "foods": "250ml warm milk",
        "protein": "8g"
      }
    ],
    "mealPlanTotal": "~128 - 130g protein",
    "bellyFatRules": [
      {
        "rule": "No eating 2 hours before sleep",
        "reason": "Lowers nighttime insulin spikes so body burns stored adipose tissue overnight."
      },
      {
        "rule": "Eat protein FIRST at every meal",
        "reason": "Triggers peptide YY and satiety hormones, preventing carbohydrate overconsumption."
      },
      {
        "rule": "Drink 3-4 litres of water daily",
        "reason": "Essential for glycogen storage in muscle bellies and flushing sodium water retention."
      },
      {
        "rule": "If weight unchanged for 2 weeks, reduce dinner rice by 1/2 cup",
        "reason": "Slight deficit reduction without crashing metabolic rate or workout energy."
      },
      {
        "rule": "Sugar is the enemy — eliminate entirely",
        "reason": "Cold drinks, biscuits, bakery treats, and mithai must be completely eliminated, not just reduced."
      }
    ]
  },
  "monthlyProgression": [
    {
      "month": "Month 1-2",
      "focus": "Form mastery + systematic progressive overload begins. Hit 130g protein daily without fail.",
      "result": "Upper chest and back silhouette visible. Arms noticeably thickening."
    },
    {
      "month": "Month 3",
      "focus": "Add 1 set to weakest lagging muscles (rear delts & upper chest). Introduce drop sets on final isolation.",
      "result": "Shoulders visibly wider. V-taper emerges. Bicep peak sharpens."
    },
    {
      "month": "Month 4",
      "focus": "Rest-pause sets on the final compound movement. Reduce isolation rest periods by 15 seconds.",
      "result": "Upper-to-lower chest separation clearly carved. Shoulder caps pop."
    },
    {
      "month": "Month 5",
      "focus": "Progress to advanced calisthenics variations. Daily morning core anti-extension hold.",
      "result": "Abdominal wall outline and serratus visible. Waist visually tapered."
    },
    {
      "month": "Month 6",
      "focus": "Weeks 21-23 peak high-intensity volume. Week 24 deload 40% for optimal aesthetic fullness.",
      "result": "Complete 6-month aesthetic transformation — Men's Physique standard achieved."
    }
  ],
  "trackingLifts": [
    {
      "name": "Incline Barbell Press",
      "target": "Upper Chest",
      "startingWeight": "32.5kg"
    },
    {
      "name": "Flat Barbell Bench Press",
      "target": "Mid Chest",
      "startingWeight": "40kg"
    },
    {
      "name": "Barbell Back Squat",
      "target": "Quads & Glutes",
      "startingWeight": "50kg"
    },
    {
      "name": "Wide Grip Lat Pulldown",
      "target": "Lats (Width)",
      "startingWeight": "32.5kg"
    },
    {
      "name": "Barbell Row (Overhand)",
      "target": "Back Thickness",
      "startingWeight": "40kg"
    }
  ],
  "days": [
    {
      "id": "monday",
      "day": "Monday",
      "title": "Push A — Upper Chest + Shoulders",
      "sessionName": "Push A",
      "primaryFocus": "Upper Chest Clavicular Priority + Side Delts + Triceps",
      "duration": "~75 min",
      "preWorkout": true,
      "preWorkoutTiming": "5:50 AM (1 scoop Karnage)",
      "warmupKey": "push",
      "finisher": {
        "name": "Cable Face Pull (Rear Delt Finisher)",
        "target": "Rear Delts (high weekly frequency)",
        "setsReps": "2 x 12",
        "weight": "15kg",
        "rest": "60 sec",
        "restSeconds": 60,
        "note": "Rear delts are currently your most underdeveloped muscle and need maximum weekly frequency.",
        "youtubeUrl": "https://www.youtube.com/results?search_query=cable+face+pull+rear+delts+external+rotation+proper+form"
      },
      "cardio": {
        "name": "Stationary Cycling (Zone 2)",
        "duration": "15-20 min",
        "timing": "After lifting, never before",
        "intensity": "Conversational pace (Zone 2)",
        "note": "Supports cardiovascular work capacity and recovery without eating into pressing strength or leg recovery."
      },
      "exercises": [
        {
          "id": "ex_1",
          "name": "Incline Barbell Press",
          "rawName": "Incline Barbell Press",
          "muscleGroup": "Upper Chest",
          "target": "Upper chest (clavicular head) — #1 Priority",
          "equipment": "Barbell + Bench 30-35°",
          "tempo": "3-1-1-0",
          "setsReps": "4 x 8",
          "rest": "3 min",
          "restSeconds": 180,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "10kg x 15",
            "20kg x 10",
            "27.5kg x 5"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "32.5kg x 8",
              "defaultWeight": "32.5",
              "defaultReps": "8"
            },
            {
              "set": 2,
              "target": "32.5kg x 8",
              "defaultWeight": "32.5",
              "defaultReps": "8"
            },
            {
              "set": 3,
              "target": "32.5kg x 7",
              "defaultWeight": "32.5",
              "defaultReps": "7"
            },
            {
              "set": 4,
              "target": "32.5kg x 6",
              "defaultWeight": "32.5",
              "defaultReps": "6"
            }
          ],
          "progression": "All 4x8 at RIR 2 → increase to 35kg. Stay if any set drops below 6.",
          "doThis": [
            "Set bench EXACTLY 30-35° — NOT 45°",
            "Retract scapula before unracking and hold throughout",
            "Elbows at 60-70° from torso",
            "Bar touches upper chest not neck",
            "Drive feet into floor"
          ],
          "neverDo": [
            "Angle above 35° — shifts load to front delt",
            "Elbows flared to 90° — impingement risk",
            "Bouncing bar off chest",
            "Losing scapular retraction mid-set"
          ],
          "youtubeQuery": "incline barbell bench press upper chest clavicular head proper form technique",
          "youtubeUrl": "https://www.youtube.com/results?search_query=incline+barbell+bench+press+upper+chest+clavicular+head+proper+form+technique",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Incline%20Barbell%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_2",
          "name": "Incline Dumbbell Press",
          "rawName": "Incline Dumbbell Press",
          "muscleGroup": "Upper Chest",
          "target": "Upper chest — second compound for upper chest priority",
          "equipment": "Dumbbells + Incline Bench 30-35°",
          "tempo": "3-1-2-0",
          "setsReps": "3 x 10",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "10kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "16kg x 10",
              "defaultWeight": "16",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "16kg x 10",
              "defaultWeight": "16",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "16kg x 10",
              "defaultWeight": "16",
              "defaultReps": "10"
            }
          ],
          "progression": "All 3x10 → increase to 18kg",
          "doThis": [
            "Same angle as barbell press — 30-35°",
            "Full stretch at bottom, feel upper pec open",
            "Press up and slightly inward at top",
            "3-second controlled descent"
          ],
          "neverDo": [
            "Going above 35° angle",
            "Partial reps at top",
            "Rushing the negative"
          ],
          "youtubeQuery": "incline dumbbell press upper chest proper form technique",
          "youtubeUrl": "https://www.youtube.com/results?search_query=incline+dumbbell+press+upper+chest+proper+form+technique",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Incline%20Dumbbell%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_3",
          "name": "Cable Low-to-High Fly",
          "rawName": "Cable Low-to-High Fly",
          "muscleGroup": "Upper Chest",
          "target": "Upper chest — constant cable tension through full range",
          "equipment": "Cable Machine — Low Pulley",
          "tempo": "2-1-2-1 (1 sec squeeze at top)",
          "setsReps": "2 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "5kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "8kg x 12",
              "defaultWeight": "8",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "8kg x 12",
              "defaultWeight": "8",
              "defaultReps": "12"
            }
          ],
          "progression": "2x12 → add 2.5kg",
          "doThis": [
            "Pulleys set at LOWEST position",
            "Fly upward and inward — matching upper chest fiber direction",
            "Squeeze at top like clapping above your head"
          ],
          "neverDo": [
            "Elbows bending too much — becomes a press",
            "Standing too close to the cable stack"
          ],
          "youtubeQuery": "cable low to high fly upper chest clavicular head proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cable+low+to+high+fly+upper+chest+clavicular+head+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20Low-to-High%20Fly%20exercise%20proper%20form"
        },
        {
          "id": "ex_4",
          "name": "Cable Reverse Fly",
          "rawName": "Cable Reverse Fly",
          "muscleGroup": "Rear Delts",
          "target": "Rear delt isolation — cable constant-tension variation",
          "equipment": "Cable Machine — Low Pulley (crossed handles)",
          "tempo": "2-1-2-1 (1 sec squeeze at contraction)",
          "setsReps": "3 x 12-15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "5kg x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "7.5kg x 15",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "7.5kg x 15",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "7.5kg x 15",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            }
          ],
          "progression": "3x15 → add 2.5kg (one pin)",
          "doThis": [
            "Cross the handles, pull hands apart and back",
            "Squeeze shoulder blades together at the peak",
            "Slight elbow bend throughout, held constant",
            "Control the return — don't let the cables snap back"
          ],
          "neverDo": [
            "Using momentum or leaning back to move the weight",
            "Going too heavy — this is a feel exercise, not a strength one",
            "Bending elbows too much — turns it into a row"
          ],
          "youtubeQuery": "cable reverse fly rear delts cross cable proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cable+reverse+fly+rear+delts+cross+cable+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20Reverse%20Fly%20exercise%20proper%20form"
        },
        {
          "id": "ex_5",
          "name": "Dumbbell Lateral Raise",
          "rawName": "Dumbbell Lateral Raise",
          "muscleGroup": "Side Delts",
          "target": "Side delts — most important muscle for visible width",
          "equipment": "Dumbbells",
          "tempo": "1-0-3-0 (raise fast, LOWER SLOWLY 3 sec)",
          "setsReps": "4 x 15 + Drop Set on Set 4",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "Sets 1-3: RIR 2 \\",
          "warmupSets": [
            "5kg x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "8kg x 15",
              "defaultWeight": "8",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "8kg x 15",
              "defaultWeight": "8",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "8kg x 15",
              "defaultWeight": "8",
              "defaultReps": "15"
            },
            {
              "set": 4,
              "target": "8kg x 15 then immediately 5kg x 10 — NO rest between weights",
              "defaultWeight": "8",
              "defaultReps": "15"
            }
          ],
          "progression": "All 4x15 clean → increase to 10kg",
          "doThis": [
            "Slight forward lean at hips (10-15°)",
            "Lead with ELBOWS not hands",
            "Pinky slightly higher than thumb at top",
            "Stop at shoulder height — not above",
            "3 full seconds on the way DOWN every rep"
          ],
          "neverDo": [
            "Swinging torso for momentum",
            "Raising above shoulder height — traps take over",
            "Shrugging during the raise",
            "Going too heavy"
          ],
          "youtubeQuery": "dumbbell lateral raise side delts proper form technique hypertrophy",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dumbbell+lateral+raise+side+delts+proper+form+technique+hypertrophy",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Dumbbell%20Lateral%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_6",
          "name": "Tricep Rope Pushdown",
          "rawName": "Tricep Rope Pushdown",
          "muscleGroup": "Triceps",
          "target": "Triceps lateral + medial head",
          "equipment": "Cable Machine — High Pulley",
          "tempo": "2-1-2-1 (1 sec hold at bottom)",
          "setsReps": "3 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "10kg x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "17.5kg x 12",
              "defaultWeight": "17.5",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "17.5kg x 12",
              "defaultWeight": "17.5",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "17.5kg x 12",
              "defaultWeight": "17.5",
              "defaultReps": "12"
            }
          ],
          "progression": "3x12 → add 2.5kg",
          "doThis": [
            "Pin elbows to sides — they do NOT move",
            "Spread rope apart at bottom for max contraction",
            "Full extension at bottom, full stretch at top"
          ],
          "neverDo": [
            "Elbows drifting forward",
            "Partial reps",
            "Excessive forward lean"
          ],
          "youtubeQuery": "cable tricep rope pushdown lateral head proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cable+tricep+rope+pushdown+lateral+head+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Tricep%20Rope%20Pushdown%20exercise%20proper%20form"
        },
        {
          "id": "ex_mon_abs",
          "name": "Hanging Knee Raise (Monday Abs Finisher)",
          "rawName": "⭐ CALISTHENICS — Hanging Knee Raise",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Calisthenics knee curl) — Frequency addition without CNS fatigue",
          "equipment": "Pull-Up Bar",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 × 12",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "Bodyweight × 12",
              "defaultWeight": "",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "Bodyweight × 12",
              "defaultWeight": "",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "Bodyweight × 12",
              "defaultWeight": "",
              "defaultReps": "12"
            }
          ],
          "progression": "3×12 clean without swing → progress to straight-leg raise",
          "doThis": [
            "Dead hang start on bar",
            "Curl knees up toward chest using the lower abs, not momentum",
            "Tuck pelvis slightly at the top for maximum lower ab activation",
            "Lower slowly with 3-second control"
          ],
          "neverDo": [
            "Swinging the body or kipping to lift legs",
            "Using momentum from the shoulders instead of the abs",
            "Dropping legs fast without eccentric control"
          ],
          "youtubeQuery": "hanging knee raise lower abs calisthenics proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=hanging+knee+raise+lower+abs+calisthenics+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Hanging+Knee+Raise+exercise+proper+form"
        }
      ]
    },
    {
      "id": "tuesday",
      "day": "Tuesday",
      "title": "Pull A — Lats + Biceps",
      "sessionName": "Pull A",
      "primaryFocus": "Lat Width (V-Taper) + Horizontal Thickness + Biceps",
      "duration": "~75 min",
      "preWorkout": true,
      "preWorkoutTiming": "5:50 AM (1 scoop Karnage)",
      "warmupKey": "pull",
      "finisher": null,
      "cardio": null,
      "exercises": [
        {
          "id": "ex_7",
          "name": "Pull-Ups",
          "rawName": "⭐ CALISTHENICS — Pull-Ups",
          "muscleGroup": "Lats & Biceps",
          "target": "Lats + biceps (Calisthenics compound)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 sets",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "Sets 1-2: RIR 1-2 | Set 3: RIR 1 (AMRAP)",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "Bodyweight x 6-8 (RIR 1-2)",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 6-8 (RIR 1-2)"
            },
            {
              "set": 2,
              "target": "Bodyweight x 6-8 (RIR 1-2)",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 6-8 (RIR 1-2)"
            },
            {
              "set": 3,
              "target": "Bodyweight x AMRAP (RIR 1)",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x AMRAP (RIR 1)"
            }
          ],
          "progression": "",
          "doThis": [
            "Full dead hang at bottom, chin clears the bar at top. Add weight once 3x10 is clean."
          ],
          "neverDo": [
            "Kipping or swinging for momentum. Partial range at the top."
          ],
          "youtubeQuery": "pull ups proper form lat activation calisthenics tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=pull+ups+proper+form+lat+activation+calisthenics+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Pull-Up%20exercise%20proper%20form"
        },
        {
          "id": "ex_8",
          "name": "Straight-Arm Pulldown",
          "rawName": "Straight-Arm Pulldown",
          "muscleGroup": "Lats",
          "target": "Lat activation — isolates lats without biceps; builds mind-muscle connection before heavy pulling",
          "equipment": "Cable Machine — High Pulley, straight bar",
          "tempo": "2-1-2-0",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "5kg x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "10kg x 15",
              "defaultWeight": "10",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "10kg x 15",
              "defaultWeight": "10",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "10kg x 15",
              "defaultWeight": "10",
              "defaultReps": "15"
            }
          ],
          "progression": "3x15 → add 2.5kg",
          "doThis": [
            "Slight forward hip hinge, arms stay almost straight throughout",
            "Pull the bar down in an arc to your thighs",
            "Squeeze the lats — think \"elbows to pockets\"",
            "Control the bar back up to the top"
          ],
          "neverDo": [
            "Bending the elbows — turns it into a pushdown",
            "Using the lower back to heave the weight",
            "Going heavy — this is a feel/activation exercise, not a strength one"
          ],
          "youtubeQuery": "straight arm lat pulldown cable proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=straight+arm+lat+pulldown+cable+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Straight-Arm%20Pulldown%20exercise%20proper%20form"
        },
        {
          "id": "ex_9",
          "name": "Wide Grip Lat Pulldown",
          "rawName": "Wide Grip Lat Pulldown",
          "muscleGroup": "Lats (Width)",
          "target": "Lat width — primary V-taper muscle",
          "equipment": "Cable Machine — Lat Pulldown Bar",
          "tempo": "3-1-2-0",
          "setsReps": "4 x 10",
          "rest": "2.5 min",
          "restSeconds": 150,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "15kg x 15",
            "22.5kg x 8",
            "27.5kg x 4"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "32.5kg x 9",
              "defaultWeight": "32.5",
              "defaultReps": "9"
            },
            {
              "set": 4,
              "target": "32.5kg x 8",
              "defaultWeight": "32.5",
              "defaultReps": "8"
            }
          ],
          "progression": "All 4x10 → increase to 37.5kg",
          "doThis": [
            "Start from dead hang — full lat stretch every rep",
            "Pull elbows DOWN and BACK — think elbows to back pockets",
            "Chin clears the bar at bottom",
            "3-second controlled return to dead hang"
          ],
          "neverDo": [
            "Not achieving full hang — removes lat stretch",
            "Pulling with biceps instead of elbows",
            "Kipping or swinging"
          ],
          "youtubeQuery": "wide grip lat pulldown back width v taper proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=wide+grip+lat+pulldown+back+width+v+taper+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Wide%20Grip%20Lat%20Pulldown%20exercise%20proper%20form"
        },
        {
          "id": "ex_10",
          "name": "Seated Cable Row (Close Grip)",
          "rawName": "Seated Cable Row (Close Grip)",
          "muscleGroup": "Back (Thickness)",
          "target": "Back thickness + lats — horizontal pull",
          "equipment": "Cable Machine — V-Bar Attachment",
          "tempo": "3-1-2-1 (1 sec squeeze)",
          "setsReps": "4 x 10",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "Sets 1-3: RIR 2 \\",
          "warmupSets": [
            "15kg x 15",
            "25kg x 8"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 4,
              "target": "32.5kg x 9",
              "defaultWeight": "32.5",
              "defaultReps": "9"
            }
          ],
          "progression": "All 4x10 → add 5kg",
          "doThis": [
            "Pull to LOWER STERNUM — not belly button",
            "Squeeze shoulder blades together and hold 1 sec",
            "Full lat stretch at front every rep",
            "Sit tall with slight lower back arch"
          ],
          "neverDo": [
            "Rounding lower back",
            "Leaning back excessively",
            "Pulling to belly button — lats disengage"
          ],
          "youtubeQuery": "seated cable row close grip v bar back thickness proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=seated+cable+row+close+grip+v+bar+back+thickness+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Seated%20Cable%20Row%20(Close%20Grip"
        },
        {
          "id": "ex_11",
          "name": "Single Arm Dumbbell Row",
          "rawName": "Single Arm Dumbbell Row",
          "muscleGroup": "Lats (Unilateral)",
          "target": "Lats + mid back — unilateral, fixes imbalances",
          "equipment": "Dumbbell + Flat Bench",
          "tempo": "3-0-2-1 (1 sec squeeze at top)",
          "setsReps": "2 x 10 each side",
          "rest": "90 sec between sides",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "10kg x 12 each side"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "20kg x 10 each side",
              "defaultWeight": "20",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "20kg x 10 each side",
              "defaultWeight": "20",
              "defaultReps": "10"
            }
          ],
          "progression": "2x10 both sides clean → increase to 22.5kg",
          "doThis": [
            "Drive ELBOW TO CEILING — not out to the side",
            "Spine neutral and parallel to floor",
            "Pause and squeeze lat hard at top",
            "Lower slowly — feel lat lengthen"
          ],
          "neverDo": [
            "Rotating torso to generate the row",
            "Pulling to hip level (should reach lower rib)",
            "Rushing the movement"
          ],
          "youtubeQuery": "single arm dumbbell row lat isolation proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=single+arm+dumbbell+row+lat+isolation+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Single%20Arm%20Dumbbell%20Row%20exercise%20proper%20form"
        },
        {
          "id": "ex_12",
          "name": "Dumbbell Pullover",
          "rawName": "Dumbbell Pullover",
          "muscleGroup": "Lats (Stretch)",
          "target": "Lats in FULLY STRETCHED position — loaded stretch = maximum hypertrophy",
          "equipment": "Dumbbell + Flat Bench",
          "tempo": "3-2-1-0 (2 sec pause at bottom stretch)",
          "setsReps": "2 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "10kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "16kg x 12",
              "defaultWeight": "16",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "16kg x 12",
              "defaultWeight": "16",
              "defaultReps": "12"
            }
          ],
          "progression": "2x12 → increase to 18kg",
          "doThis": [
            "Upper back on bench, hips dropped down",
            "Lower dumbbell slowly behind head in wide arc",
            "Feel the lat FULLY STRETCH at the bottom",
            "Pull back using lats — think pulling from armpits"
          ],
          "neverDo": [
            "Bending elbows too much — becomes tricep exercise",
            "Dropping hips — removes lat stretch",
            "Rushing — the 2 sec stretch pause is the entire point"
          ],
          "youtubeQuery": "dumbbell pullover lats loaded stretch chest proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dumbbell+pullover+lats+loaded+stretch+chest+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Dumbbell%20Pullover%20exercise%20proper%20form"
        },
        {
          "id": "ex_13",
          "name": "Incline Dumbbell Curl",
          "rawName": "Incline Dumbbell Curl",
          "muscleGroup": "Biceps (Long Head)",
          "target": "Biceps in fully lengthened/stretched position",
          "equipment": "Dumbbells + Incline Bench 45-60°",
          "tempo": "3-1-2-0",
          "setsReps": "4 x 10",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "8kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "10kg x 10",
              "defaultWeight": "10",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "10kg x 10",
              "defaultWeight": "10",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "10kg x 10",
              "defaultWeight": "10",
              "defaultReps": "10"
            },
            {
              "set": 4,
              "target": "10kg x 10",
              "defaultWeight": "10",
              "defaultReps": "10"
            }
          ],
          "progression": "All 4x10 → increase to 12kg",
          "doThis": [
            "Arms hang STRAIGHT DOWN behind torso",
            "Elbows stay BEHIND torso — non-negotiable",
            "Curl with supination (wrist rotates outward)",
            "Slow the bottom — feel the full stretch"
          ],
          "neverDo": [
            "Elbows drifting forward — kills the stretched position entirely",
            "Not supinating wrist",
            "Rushing the descent"
          ],
          "youtubeQuery": "incline dumbbell curl bicep long head stretch proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=incline+dumbbell+curl+bicep+long+head+stretch+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Incline%20Dumbbell%20Curl%20exercise%20proper%20form"
        },
        {
          "id": "ex_14",
          "name": "Preacher Curl (EZ Bar)",
          "rawName": "Preacher Curl (EZ Bar)",
          "muscleGroup": "Biceps (Peak)",
          "target": "Bicep peak — the bottom stretch builds the peak",
          "equipment": "EZ Bar + Preacher Bench",
          "tempo": "3-2-1-0 (2 sec pause at full stretch)",
          "setsReps": "3 x 10",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "10kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "17.5kg x 10",
              "defaultWeight": "17.5",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "17.5kg x 10",
              "defaultWeight": "17.5",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "17.5kg x 10",
              "defaultWeight": "17.5",
              "defaultReps": "10"
            }
          ],
          "progression": "3x10 → add 2.5kg",
          "doThis": [
            "Lower to FULL extension — this is where growth happens",
            "2 second pause at bottom every rep",
            "Upper arms fully on pad throughout"
          ],
          "neverDo": [
            "Not going to full extension — directly kills bicep peak development",
            "Lifting arms off the pad",
            "Swinging the weight up"
          ],
          "youtubeQuery": "ez bar preacher curl bicep peak short head proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=ez+bar+preacher+curl+bicep+peak+short+head+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Preacher%20Curl%20(EZ%20Bar"
        }
      ]
    },
    {
      "id": "wednesday",
      "day": "Wednesday",
      "title": "Legs + Abs (Session 1 of 3) — Abs FIRST Priority",
      "sessionName": "Legs + Abs",
      "primaryFocus": "ABS FIRST PRIORITY (Cable Crunch → Hanging Leg Raise → Reverse Crunch) before Leg Fatigue, followed by Squat Strength & Hypertrophy",
      "duration": "~85 min",
      "preWorkout": false,
      "preWorkoutTiming": "Skip pre-workout today to preserve caffeine receptor sensitivity",
      "warmupKey": "legs",
      "finisher": null,
      "cardio": {
        "name": "Fast Walk or Light Stationary Bike (Zone 2 Fat Loss)",
        "duration": "15 min",
        "timing": "After lifting session",
        "intensity": "Conversational pace (Zone 2)",
        "note": "NEW from November — 3rd weekly cardio session to accelerate belly fat reduction alongside Monday cycling & Thursday jump rope."
      },
      "exercises": [
        {
          "id": "ex_21",
          "name": "Cable Crunch (Weighted)",
          "rawName": "Cable Crunch (Weighted)",
          "muscleGroup": "Upper/Mid Abs",
          "target": "Upper/mid abs (Spinal flexion) — MUST DO FIRST, never skip. Highest yield weighted ab lift.",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 15",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "15kg x 12",
              "defaultWeight": "15",
              "defaultReps": "12"
            }
          ],
          "progression": "Increase by 2.5kg every 2 weeks. If at 15kg, progress to 17.5kg–20kg in November.",
          "doThis": [
            "Flex at the SPINE not just hips. Round lower back at bottom. Hold 2 sec. Progress weight every 2 weeks."
          ],
          "neverDo": [
            "Hinging at hips instead of spine — becomes a hip exercise not abs."
          ],
          "youtubeQuery": "kneeling cable rope crunch abs spinal flexion proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=kneeling+cable+rope+crunch+abs+spinal+flexion+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20Crunch%20(Weighted"
        },
        {
          "id": "ex_20",
          "name": "Hanging Leg Raise",
          "rawName": "Hanging Leg Raise",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Pelvic curl) — MUST DO SECOND, never skip. Hardest lower ab movement.",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "Bodyweight x 12",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 12"
            },
            {
              "set": 2,
              "target": "Bodyweight x 12",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 12"
            },
            {
              "set": 3,
              "target": "Bodyweight x 10",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 10"
            }
          ],
          "progression": "Progress to straight-leg raises once 3×12 with bent knee feels easy.",
          "doThis": [
            "Dead hang start. Raise legs to parallel min. Do NOT swing. Lower slowly."
          ],
          "neverDo": [
            "Swinging body — removes ab engagement. Dropping legs fast."
          ],
          "youtubeQuery": "hanging leg raise lower abs pelvic tilt proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=hanging+leg+raise+lower+abs+pelvic+tilt+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Hanging%20Leg%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_wed_reverse_crunch",
          "name": "Reverse Crunch (Floor/Bench)",
          "rawName": "Reverse Crunch",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Pelvic curl off floor) — Third ab movement before squats",
          "equipment": "Floor Mat / Flat Bench",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 × 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "Bodyweight × 15",
              "defaultWeight": "",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "Bodyweight × 15",
              "defaultWeight": "",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "Bodyweight × 15",
              "defaultWeight": "",
              "defaultReps": "15"
            }
          ],
          "progression": "3×15 clean → incline decline bench or add small ankle weight",
          "doThis": [
            "Lie flat, knees bent at 90°",
            "Curl pelvis UP off floor bringing knees toward chest",
            "Squeeze lower abs at top for 1 full second",
            "Lower slowly without lower back overarching"
          ],
          "neverDo": [
            "Swinging legs for momentum",
            "Only bending knees without lifting pelvis",
            "Dropping down fast"
          ],
          "youtubeQuery": "reverse crunch floor lower abs pelvic curl proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+crunch+floor+lower+abs+pelvic+curl+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Reverse+Crunch+exercise+proper+form"
        },
        {
          "id": "ex_15",
          "name": "Barbell Back Squat",
          "rawName": "Barbell Back Squat",
          "muscleGroup": "Quads & Glutes",
          "target": "Quads, glutes, hamstrings",
          "equipment": "Barbell + Squat Rack",
          "tempo": "3-1-2-0",
          "setsReps": "4 x 8",
          "rest": "3 min",
          "restSeconds": 180,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "10kg x 15",
            "30kg x 8",
            "40kg x 5"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "50kg x 8",
              "defaultWeight": "50",
              "defaultReps": "8"
            },
            {
              "set": 2,
              "target": "50kg x 8",
              "defaultWeight": "50",
              "defaultReps": "8"
            },
            {
              "set": 3,
              "target": "50kg x 7",
              "defaultWeight": "50",
              "defaultReps": "7"
            },
            {
              "set": 4,
              "target": "50kg x 6",
              "defaultWeight": "50",
              "defaultReps": "6"
            }
          ],
          "progression": "All 4x8 → add 5kg",
          "doThis": [
            "Bar on upper traps — NOT neck",
            "Toes out 15-30°, slightly wide stance",
            "Sit back AND down simultaneously",
            "Hit parallel or below — above parallel is a wasted rep",
            "Drive through mid-foot"
          ],
          "neverDo": [
            "Heels rising — ankle mobility issue",
            "Knees caving inward",
            "Good morning squat — hips rise before shoulders",
            "Partial reps above parallel"
          ],
          "youtubeQuery": "barbell back squat proper form depth hypertrophy quads glutes",
          "youtubeUrl": "https://www.youtube.com/results?search_query=barbell+back+squat+proper+form+depth+hypertrophy+quads+glutes",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Barbell%20Back%20Squat%20exercise%20proper%20form"
        },
        {
          "id": "ex_16",
          "name": "Romanian Deadlift",
          "rawName": "Romanian Deadlift",
          "muscleGroup": "Hamstrings",
          "target": "Hamstrings (lengthened) + glutes",
          "equipment": "Barbell",
          "tempo": "3-1-2-0",
          "setsReps": "3 x 10",
          "rest": "2.5 min",
          "restSeconds": 150,
          "rir": "RIR 2 all sets",
          "warmupSets": [
            "20kg x 12",
            "30kg x 8"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "40kg x 10",
              "defaultWeight": "40",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "40kg x 10",
              "defaultWeight": "40",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "40kg x 10",
              "defaultWeight": "40",
              "defaultReps": "10"
            }
          ],
          "progression": "3x10 → add 5kg",
          "doThis": [
            "Hip hinge — push hips BACK not down",
            "Maintain arch in lower back throughout",
            "Bar stays touching legs the entire time",
            "Stop when lower back starts to round"
          ],
          "neverDo": [
            "Bending knees too much — becomes a deadlift",
            "Rounding lower back — injury risk",
            "Bar drifting away from legs"
          ],
          "youtubeQuery": "romanian deadlift barbell hamstrings glutes hip hinge form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=romanian+deadlift+barbell+hamstrings+glutes+hip+hinge+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Romanian%20Deadlift%20exercise%20proper%20form"
        },
        {
          "id": "ex_17",
          "name": "Leg Press",
          "rawName": "Leg Press",
          "muscleGroup": "Quads",
          "target": "Quads — extra volume, zero spinal load",
          "equipment": "Leg Press Machine",
          "tempo": "3-0-2-0",
          "setsReps": "3 x 12",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "40kg x 15",
            "60kg x 8"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "80kg x 12",
              "defaultWeight": "80",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "80kg x 12",
              "defaultWeight": "80",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "80kg x 12",
              "defaultWeight": "80",
              "defaultReps": "12"
            }
          ],
          "progression": "3x12 → add 10kg",
          "doThis": [
            "Feet low-to-mid on platform, hip width",
            "Lower until knees reach 90°",
            "Do NOT lock out at top — keeps tension on quads"
          ],
          "neverDo": [
            "Partial reps — most common mistake",
            "Lower back peeling off seat at bottom",
            "Locking knees at top"
          ],
          "youtubeQuery": "leg press machine quad hypertrophy foot placement proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=leg+press+machine+quad+hypertrophy+foot+placement+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Leg%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_18",
          "name": "Lying Leg Curl",
          "rawName": "Lying Leg Curl",
          "muscleGroup": "Hamstrings",
          "target": "Hamstrings — shortened position, completes hamstring development",
          "equipment": "Leg Curl Machine",
          "tempo": "2-1-2-1 (1 sec hold at top)",
          "setsReps": "4 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets, RIR 0 last set",
          "warmupSets": [
            "Light x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "25kg x 12",
              "defaultWeight": "25",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "25kg x 12",
              "defaultWeight": "25",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "25kg x 12",
              "defaultWeight": "25",
              "defaultReps": "12"
            },
            {
              "set": 4,
              "target": "25kg x 10",
              "defaultWeight": "25",
              "defaultReps": "10"
            }
          ],
          "progression": "3x12 → add 5kg",
          "doThis": [
            "Hips stay FLAT on pad",
            "Curl heels fully toward glutes",
            "Hold top contraction 1 second",
            "Lower slowly — 2 full seconds"
          ],
          "neverDo": [
            "Hips rising to generate momentum",
            "Partial range of motion",
            "Rushing the descent"
          ],
          "youtubeQuery": "lying leg curl machine hamstrings shortened position proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=lying+leg+curl+machine+hamstrings+shortened+position+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Lying%20Leg%20Curl%20exercise%20proper%20form"
        },
        {
          "id": "ex_19",
          "name": "Standing Calf Raise",
          "rawName": "Standing Calf Raise",
          "muscleGroup": "Calves (Gastrocnemius)",
          "target": "Gastrocnemius, soleus — full ROM essential for growth",
          "equipment": "Calf Raise Machine",
          "tempo": "1-2-1-2 (2 sec pause TOP and BOTTOM)",
          "setsReps": "5 x 20",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 0 on last 2 sets",
          "warmupSets": [
            "Bodyweight x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "20kg x 20",
              "defaultWeight": "20",
              "defaultReps": "20"
            },
            {
              "set": 2,
              "target": "20kg x 20",
              "defaultWeight": "20",
              "defaultReps": "20"
            },
            {
              "set": 3,
              "target": "20kg x 20",
              "defaultWeight": "20",
              "defaultReps": "20"
            },
            {
              "set": 4,
              "target": "20kg x 15",
              "defaultWeight": "20",
              "defaultReps": "15"
            },
            {
              "set": 5,
              "target": "20kg x 15",
              "defaultWeight": "20",
              "defaultReps": "15"
            }
          ],
          "progression": "All 4 sets full ROM → add 5kg",
          "doThis": [
            "Rise as HIGH as possible at top",
            "Heel BELOW platform at bottom",
            "2 sec pause at BOTH top and bottom — non-negotiable"
          ],
          "neverDo": [
            "Partial reps — the only reason calves do not grow for most people",
            "Bouncing at bottom",
            "Skipping the pauses"
          ],
          "youtubeQuery": "standing calf raise full stretch gastrocnemius proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=standing+calf+raise+full+stretch+gastrocnemius+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Standing%20Calf%20Raise%20exercise%20proper%20form"
        }
      ]
    },
    {
      "id": "thursday",
      "day": "Thursday",
      "title": "Push B — Mid + Lower Chest + Triceps",
      "sessionName": "Push B",
      "primaryFocus": "Flat Heavy Bench, Lower Pec Cable Arc + Close Grip Triceps",
      "duration": "~65 min",
      "preWorkout": true,
      "preWorkoutTiming": "5:50 AM (1 scoop Karnage)",
      "warmupKey": "push",
      "finisher": null,
      "cardio": {
        "name": "Jump Rope Intervals (HIIT / Calf Stiffness)",
        "duration": "10 min total (10 rounds)",
        "timing": "After lifting",
        "protocol": "30 sec skipping / 30 sec rest x 10 rounds",
        "note": "Trains coordination, foot and calf stiffness without spinal compression. 2 days away from Wednesday squats and Saturday soleus."
      },
      "exercises": [
        {
          "id": "ex_22",
          "name": "Flat Barbell Bench Press",
          "rawName": "Flat Barbell Bench Press",
          "muscleGroup": "Mid Chest",
          "target": "Mid chest (sternal head) — foundational chest mass builder",
          "equipment": "Barbell + Flat Bench",
          "tempo": "3-1-1-0",
          "setsReps": "4 x 8",
          "rest": "3 min",
          "restSeconds": 180,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "10kg x 15",
            "20kg x 10",
            "30kg x 5",
            "35kg x 3"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "40kg x 8",
              "defaultWeight": "40",
              "defaultReps": "8"
            },
            {
              "set": 2,
              "target": "40kg x 8",
              "defaultWeight": "40",
              "defaultReps": "8"
            },
            {
              "set": 3,
              "target": "40kg x 7",
              "defaultWeight": "40",
              "defaultReps": "7"
            },
            {
              "set": 4,
              "target": "40kg x 6",
              "defaultWeight": "40",
              "defaultReps": "6"
            }
          ],
          "progression": "All 4x8 at RIR 2 → increase to 42.5kg (1.25kg each side)",
          "doThis": [
            "Grip slightly wider than shoulder width",
            "Bar touches LOWER pec line — not upper chest",
            "Elbows at 60-70° from torso",
            "Retract scapula — hold throughout every rep",
            "Drive feet into floor"
          ],
          "neverDo": [
            "Elbows flared to 90° — shoulder impingement",
            "Bouncing bar off chest",
            "Losing upper back tightness mid-set"
          ],
          "youtubeQuery": "flat barbell bench press mid chest scapular retraction proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=flat+barbell+bench+press+mid+chest+scapular+retraction+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Flat%20Barbell%20Bench%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_23",
          "name": "Decline Dumbbell Press",
          "rawName": "Decline Dumbbell Press",
          "muscleGroup": "Lower Chest",
          "target": "Lower chest (lower pec head) — dedicated lower chest exercise",
          "equipment": "Dumbbells + Decline Bench 20-25°",
          "tempo": "3-1-2-0",
          "setsReps": "3 x 10",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "10kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "16kg x 10",
              "defaultWeight": "16",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "16kg x 10",
              "defaultWeight": "16",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "16kg x 10",
              "defaultWeight": "16",
              "defaultReps": "10"
            }
          ],
          "progression": "All 3x10 → increase to 18kg",
          "doThis": [
            "Bench EXACTLY 20-25° decline — not steeper",
            "Lower to lower chest — feel lower pec stretch",
            "Control descent — 3 full seconds",
            "Secure feet firmly before starting"
          ],
          "neverDo": [
            "Angle too steep — shifts load away from lower pec",
            "Not using full range of motion",
            "Elbows flaring wide"
          ],
          "youtubeQuery": "decline dumbbell press lower chest proper form technique",
          "youtubeUrl": "https://www.youtube.com/results?search_query=decline+dumbbell+press+lower+chest+proper+form+technique",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Decline%20Dumbbell%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_24",
          "name": "Cable High-to-Low Fly",
          "rawName": "Cable High-to-Low Fly",
          "muscleGroup": "Lower Chest",
          "target": "Lower chest — constant cable tension",
          "equipment": "Cable Machine — High Pulley",
          "tempo": "2-1-2-1 (1 sec squeeze at bottom)",
          "setsReps": "2 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "5kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "8kg x 12",
              "defaultWeight": "8",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "8kg x 12",
              "defaultWeight": "8",
              "defaultReps": "12"
            }
          ],
          "progression": "2x12 → add 2.5kg",
          "doThis": [
            "Pulleys at HIGHEST position",
            "Fly downward and inward — matching lower chest fiber direction",
            "Squeeze at bottom like clapping below waist"
          ],
          "neverDo": [
            "Elbows bending too much — becomes a press",
            "Standing too close to cable"
          ],
          "youtubeQuery": "high to low cable fly lower chest proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=high+to+low+cable+fly+lower+chest+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20High-to-Low%20Fly%20exercise%20proper%20form"
        },
        {
          "id": "ex_25",
          "name": "Close Grip Bench Press",
          "rawName": "Close Grip Bench Press",
          "muscleGroup": "Triceps",
          "target": "Triceps — long head + lateral head",
          "equipment": "Barbell + Flat Bench",
          "tempo": "3-1-1-1 (1 sec hold at lockout)",
          "setsReps": "4 x 10",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "20kg x 12",
            "27.5kg x 6"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "32.5kg x 10",
              "defaultWeight": "32.5",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "32.5kg x 9",
              "defaultWeight": "32.5",
              "defaultReps": "9"
            },
            {
              "set": 4,
              "target": "32.5kg x 8",
              "defaultWeight": "32.5",
              "defaultReps": "8"
            }
          ],
          "progression": "All 4x10 → add 2.5kg",
          "doThis": [
            "Grip 30-35cm between hands",
            "Elbows tuck CLOSE to ribs as you lower",
            "Full lockout at top — feel tricep squeeze"
          ],
          "neverDo": [
            "Grip too narrow — wrist strain",
            "Elbows flaring out — becomes a chest press",
            "No lockout at top"
          ],
          "youtubeQuery": "close grip bench press triceps proper form technique",
          "youtubeUrl": "https://www.youtube.com/results?search_query=close+grip+bench+press+triceps+proper+form+technique",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Close%20Grip%20Bench%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_26",
          "name": "Overhead Tricep Extension",
          "rawName": "Overhead Tricep Extension",
          "muscleGroup": "Triceps (Long Head)",
          "target": "Tricep long head in fully stretched position",
          "equipment": "Cable or EZ Bar",
          "tempo": "3-1-2-0",
          "setsReps": "3 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "Light x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "12.5kg x 12",
              "defaultWeight": "12.5",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "12.5kg x 12",
              "defaultWeight": "12.5",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "12.5kg x 10",
              "defaultWeight": "12.5",
              "defaultReps": "10"
            }
          ],
          "progression": "3x12 → add 2.5kg",
          "doThis": [
            "Elbows point FORWARD — they do NOT flare outward",
            "Only the forearm moves — upper arm stays locked",
            "Feel deep stretch in back of arm at bottom"
          ],
          "neverDo": [
            "Elbows flaring out to sides",
            "Upper arm moving with the forearm"
          ],
          "youtubeQuery": "overhead tricep extension cable long head stretch proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=overhead+tricep+extension+cable+long+head+stretch+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Overhead%20Tricep%20Extension%20exercise%20proper%20form"
        }
      ]
    },
    {
      "id": "friday",
      "day": "Friday",
      "title": "Pull B — Rear Delts + Back + Abs (Session 2 of 3)",
      "sessionName": "Pull B + Abs",
      "primaryFocus": "Rear Delt Thickness, Overhand Rows, Forearms & Targeted Belly Circuit",
      "duration": "~95 min",
      "preWorkout": true,
      "preWorkoutTiming": "5:50 AM (1 scoop Karnage)",
      "warmupKey": "pull",
      "finisher": null,
      "cardio": null,
      "exercises": [
        {
          "id": "ex_27",
          "name": "Barbell Row (Overhand)",
          "rawName": "Barbell Row (Overhand)",
          "muscleGroup": "Back (Rhomboids & Traps)",
          "target": "Mid traps, rhomboids, back thickness",
          "equipment": "Barbell",
          "tempo": "3-1-2-1 (1 sec squeeze)",
          "setsReps": "4 x 8",
          "rest": "2.5 min",
          "restSeconds": 150,
          "rir": "Sets 1-3: RIR 2 \\",
          "warmupSets": [
            "20kg x 12",
            "30kg x 8",
            "35kg x 4"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "40kg x 8",
              "defaultWeight": "40",
              "defaultReps": "8"
            },
            {
              "set": 2,
              "target": "40kg x 8",
              "defaultWeight": "40",
              "defaultReps": "8"
            },
            {
              "set": 3,
              "target": "40kg x 8",
              "defaultWeight": "40",
              "defaultReps": "8"
            },
            {
              "set": 4,
              "target": "40kg x 7",
              "defaultWeight": "40",
              "defaultReps": "7"
            }
          ],
          "progression": "All 4x8 → add 5kg",
          "doThis": [
            "Torso at 45° or more toward parallel to floor",
            "Pull bar to LOWER CHEST — not belly button",
            "Squeeze scapula together at top — hold 1 sec",
            "Control the descent — do not drop the bar"
          ],
          "neverDo": [
            "Standing too upright — completely different exercise",
            "Jerking lower back to initiate",
            "Pulling to belly button — lats disengage"
          ],
          "youtubeQuery": "bent over barbell row overhand mid back thickness proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=bent+over+barbell+row+overhand+mid+back+thickness+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Barbell%20Row%20(Overhand"
        },
        {
          "id": "ex_28",
          "name": "Cable Face Pull",
          "rawName": "Cable Face Pull",
          "muscleGroup": "Rear Delts",
          "target": "Rear delts, external rotators — PRIORITY given rear delt weakness",
          "equipment": "Cable Machine — Rope Attachment High",
          "tempo": "2-1-3-1 (3 sec slow return)",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "7.5kg x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            }
          ],
          "progression": "3x15 → add 2.5kg",
          "doThis": [
            "Pull rope to FACE — nose level",
            "Elbows stay HIGH — at ear level or above throughout",
            "Both hands end beside ears — make a W shape",
            "Thumbs pointing behind you at end — external rotation is the key"
          ],
          "neverDo": [
            "Elbows dropping below ears — removes rear delt activation completely",
            "Pulling to chin not to face",
            "Going too heavy — form collapses entirely"
          ],
          "youtubeQuery": "cable face pull rear delts external rotation proper form tutorial",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cable+face+pull+rear+delts+external+rotation+proper+form+tutorial",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20Face%20Pull%20exercise%20proper%20form"
        },
        {
          "id": "ex_29",
          "name": "Chest Supported Dumbbell Row",
          "rawName": "Chest Supported Dumbbell Row",
          "muscleGroup": "Mid Back & Lats",
          "target": "Mid back + lats — no lower back fatigue, 100% back effort",
          "equipment": "Dumbbells + Incline Bench 30°",
          "tempo": "3-0-2-2 (2 sec squeeze)",
          "setsReps": "3 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "12kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "18kg x 12",
              "defaultWeight": "18",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "18kg x 12",
              "defaultWeight": "18",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "18kg x 10",
              "defaultWeight": "18",
              "defaultReps": "10"
            }
          ],
          "progression": "3x12 → add 2kg each side",
          "doThis": [
            "Lie face down — chest fully on pad throughout",
            "Row to HIPS — not armpits",
            "Squeeze shoulder blades 2 full seconds at top"
          ],
          "neverDo": [
            "Rowing to armpits — becomes rear delt row, wrong target",
            "Lifting chest off pad to generate momentum"
          ],
          "youtubeQuery": "chest supported dumbbell row incline bench back thickness form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=chest+supported+dumbbell+row+incline+bench+back+thickness+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Chest%20Supported%20Dumbbell%20Row%20exercise%20proper%20form"
        },
        {
          "id": "ex_30",
          "name": "Chest-Supported Incline Rear Delt Raise",
          "rawName": "Chest-Supported Incline Rear Delt Raise",
          "muscleGroup": "Rear Delts",
          "target": "Rear delt isolation — chest support removes balance and lower-back demand",
          "equipment": "Dumbbells + Incline Bench (face-down, 45°)",
          "tempo": "2-1-2-0",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "5kg x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "8kg x 15",
              "defaultWeight": "8",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "8kg x 15",
              "defaultWeight": "8",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "8kg x 15",
              "defaultWeight": "8",
              "defaultReps": "15"
            }
          ],
          "progression": "3x15 → add 2kg",
          "doThis": [
            "Chest pressed flat into the bench the entire set",
            "Lead with elbows, raise to shoulder height",
            "Squeeze shoulder blades together at the top",
            "Slow 2-3 sec descent on every rep"
          ],
          "neverDo": [
            "Lifting the chest off the bench to cheat the weight up",
            "Going too heavy",
            "Using momentum instead of feeling the squeeze"
          ],
          "youtubeQuery": "chest supported rear delt raise dumbbell incline bench form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=chest+supported+rear+delt+raise+dumbbell+incline+bench+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Chest%20Supported%20Incline%20Rear%20Delt%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_31",
          "name": "Chin-Ups",
          "rawName": "⭐ CALISTHENICS — Chin-Ups",
          "muscleGroup": "Lats & Biceps",
          "target": "Lats + biceps (Underhand calisthenics)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 sets",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "Sets 1-2: RIR 1-2 | Set 3: RIR 1 (AMRAP)",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "Bodyweight x 6-8 (RIR 1-2)",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 6-8 (RIR 1-2)"
            },
            {
              "set": 2,
              "target": "Bodyweight x 6-8 (RIR 1-2)",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 6-8 (RIR 1-2)"
            },
            {
              "set": 3,
              "target": "Bodyweight x AMRAP (RIR 1)",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x AMRAP (RIR 1)"
            }
          ],
          "progression": "",
          "doThis": [
            "Underhand grip, full dead hang at bottom, chin clears bar at top. Add weight once 3x10 is clean."
          ],
          "neverDo": [
            "Half reps. Using back swing to assist the pull."
          ],
          "youtubeQuery": "chin ups proper form underhand grip lats biceps calisthenics",
          "youtubeUrl": "https://www.youtube.com/results?search_query=chin+ups+proper+form+underhand+grip+lats+biceps+calisthenics",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Chin-Up%20exercise%20proper%20form"
        },
        {
          "id": "ex_32",
          "name": "Hammer Curl",
          "rawName": "Hammer Curl",
          "muscleGroup": "Brachialis & Arms",
          "target": "Brachialis + brachioradialis — pushes bicep peak UP",
          "equipment": "Dumbbells",
          "tempo": "3-0-2-1",
          "setsReps": "3 x 12 each",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "8kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "12kg x 12 each",
              "defaultWeight": "12",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "12kg x 12 each",
              "defaultWeight": "12",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "12kg x 10 each",
              "defaultWeight": "12",
              "defaultReps": "10"
            }
          ],
          "progression": "3x12 → increase to 14kg",
          "doThis": [
            "Neutral grip — palms face each other THROUGHOUT",
            "Elbows pinned to sides",
            "Full extension at bottom",
            "Full contraction at top"
          ],
          "neverDo": [
            "Rotating wrist during movement",
            "Elbows drifting forward",
            "Swinging body"
          ],
          "youtubeQuery": "dumbbell hammer curl brachialis arm thickness proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dumbbell+hammer+curl+brachialis+arm+thickness+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Hammer%20Curl%20exercise%20proper%20form"
        },
        {
          "id": "ex_33",
          "name": "Reverse Curl (EZ Bar) — Forearms",
          "rawName": "Reverse Curl (EZ Bar) — Forearms",
          "muscleGroup": "Forearms",
          "target": "Forearms — brachioradialis + extensors, visible in everyday clothes",
          "equipment": "EZ Bar",
          "tempo": "3-0-2-0",
          "setsReps": "2 x 12",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "10kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "15kg x 12",
              "defaultWeight": "15",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "15kg x 12",
              "defaultWeight": "15",
              "defaultReps": "12"
            }
          ],
          "progression": "2x12 → add 2.5kg",
          "doThis": [
            "Overhand grip (knuckles facing up)",
            "Elbows pinned to sides",
            "Full extension at bottom",
            "Slow the descent — forearms need eccentric loading"
          ],
          "neverDo": [
            "Using underhand grip — defeats the purpose entirely",
            "Swinging body",
            "Partial reps"
          ],
          "youtubeQuery": "ez bar reverse curl forearms brachioradialis proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=ez+bar+reverse+curl+forearms+brachioradialis+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Reverse%20Curl%20(EZ%20Bar"
        },
        {
          "id": "ex_34",
          "name": "Farmer Carry (Forearms)",
          "rawName": "Farmer Carry (Forearms)",
          "muscleGroup": "Grip & Traps",
          "target": "Grip strength + traps (Loaded carry)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 30-40m",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "30-40m (heaviest DBs you can carry with a neutral grip)",
              "defaultWeight": "",
              "defaultReps": "30-40m (heaviest DBs you can carry with a neutral grip)"
            },
            {
              "set": 2,
              "target": "30-40m",
              "defaultWeight": "",
              "defaultReps": "30-40m"
            },
            {
              "set": 3,
              "target": "30-40m",
              "defaultWeight": "",
              "defaultReps": "30-40m"
            }
          ],
          "progression": "",
          "doThis": [
            "Shoulders back and down, ribs stacked over hips, grip crushed hard the whole walk."
          ],
          "neverDo": [
            "Shrugging shoulders up toward ears. Letting the weight swing."
          ],
          "youtubeQuery": "dumbbell farmers walk carry grip strength traps proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dumbbell+farmers+walk+carry+grip+strength+traps+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Farmer%20Carry%20exercise%20proper%20form"
        },
        {
          "id": "ex_35",
          "name": "Dumbbell Shrug",
          "rawName": "Dumbbell Shrug",
          "muscleGroup": "Upper Traps",
          "target": "Upper traps — builds the neck-to-shoulder line visible from behind",
          "equipment": "Dumbbells",
          "tempo": "1-2-1-0 (2 sec hold at top)",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "22.5kg x 15",
              "defaultWeight": "22.5",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "22.5kg x 15",
              "defaultWeight": "22.5",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "22.5kg x 15",
              "defaultWeight": "22.5",
              "defaultReps": "15"
            }
          ],
          "progression": "3x15 → add 2.5kg",
          "doThis": [
            "Shrug STRAIGHT UP — not forward or backward",
            "Hold at top 2 full seconds — squeeze hard",
            "Full drop at bottom — stretch the trap"
          ],
          "neverDo": [
            "Rolling shoulders — no benefit and strains AC joint",
            "Rushing — the 2 sec hold IS the stimulus",
            "Going too heavy — loses the hold"
          ],
          "youtubeQuery": "dumbbell shrug upper traps pause at top proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dumbbell+shrug+upper+traps+pause+at+top+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Dumbbell%20Shrug%20exercise%20proper%20form"
        },
        {
          "id": "ex_36",
          "name": "Reverse Crunch",
          "rawName": "Reverse Crunch",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Pelvic tilt off floor)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 15",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "x 15 reps",
              "defaultWeight": "",
              "defaultReps": "x 15 reps"
            },
            {
              "set": 2,
              "target": "x 15 reps",
              "defaultWeight": "",
              "defaultReps": "x 15 reps"
            },
            {
              "set": 3,
              "target": "x 12 reps",
              "defaultWeight": "",
              "defaultReps": "x 12 reps"
            }
          ],
          "progression": "",
          "doThis": [
            "Lie flat, knees bent to 90°. Curl the pelvis UP off the floor bringing knees to chest. Lower with control."
          ],
          "neverDo": [
            "Using momentum to swing the legs. Only moving the knees without curling the pelvis — that skips the lower abs."
          ],
          "youtubeQuery": "reverse crunch floor lower abs pelvic curl proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+crunch+floor+lower+abs+pelvic+curl+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Reverse%20Crunch%20exercise%20proper%20form"
        },
        {
          "id": "ex_fri_bicycle",
          "name": "Bicycle Crunch (Obliques & Waist)",
          "rawName": "Bicycle Crunch",
          "muscleGroup": "Obliques & Abs",
          "target": "Obliques + Rectus Abdominis — Essential for tightening the waistline and narrowing waist-to-shoulder ratio",
          "equipment": "Floor Mat",
          "tempo": "Controlled 2-1-2-0",
          "setsReps": "3 × 20 (10 each side)",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "20 reps (10/side)",
              "defaultWeight": "",
              "defaultReps": "20"
            },
            {
              "set": 2,
              "target": "20 reps (10/side)",
              "defaultWeight": "",
              "defaultReps": "20"
            },
            {
              "set": 3,
              "target": "20 reps (10/side)",
              "defaultWeight": "",
              "defaultReps": "20"
            }
          ],
          "progression": "3×20 slow with 2-sec hold on each side",
          "doThis": [
            "Light fingertips behind ears — DO NOT pull neck",
            "Rotate opposite shoulder/elbow to opposite knee",
            "Fully extend the other leg out straight (hovering above floor)",
            "Pause and squeeze the oblique for 1 second on each twist"
          ],
          "neverDo": [
            "Yanking on the neck with hands",
            "Rushing reps without full torso rotation",
            "Letting extended leg touch the ground"
          ],
          "youtubeQuery": "bicycle crunch obliques abs core waist proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=bicycle+crunch+obliques+abs+core+waist+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Bicycle+Crunch+exercise+proper+form"
        },
        {
          "id": "ex_37",
          "name": "Plank",
          "rawName": "Plank",
          "muscleGroup": "Core (Anti-Extension)",
          "target": "Anti-extension core stability",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 × 45 sec",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "Hold to RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "45 sec hold",
              "defaultWeight": "",
              "defaultReps": "45 sec"
            },
            {
              "set": 2,
              "target": "45 sec hold",
              "defaultWeight": "",
              "defaultReps": "45 sec"
            },
            {
              "set": 3,
              "target": "45 sec hold",
              "defaultWeight": "",
              "defaultReps": "45 sec"
            }
          ],
          "progression": "",
          "doThis": [
            "Forearms and toes on floor, straight line head to heels. Brace core and glutes."
          ],
          "neverDo": [
            "Hips sagging or piking. Holding your breath."
          ],
          "youtubeQuery": "forearm plank core anti extension proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=forearm+plank+core+anti+extension+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Plank%20exercise%20proper%20form"
        }
      ]
    },
    {
      "id": "saturday",
      "day": "Saturday",
      "title": "Shoulders + Arms + Abs (Session 3 of 3) — Abs FIRST Priority",
      "sessionName": "Shoulders + Arms + Abs",
      "primaryFocus": "ABS FIRST (Flat Bench Leg Raise → Weighted Crunch → Plank) before Shoulder & Arm Fatigue, followed by 3D Deltoid Caps & Horseshoe Triceps",
      "duration": "~95 min",
      "preWorkout": true,
      "preWorkoutTiming": "5:50 AM (1 scoop Karnage)",
      "warmupKey": "shoulders",
      "finisher": null,
      "cardio": null,
      "exercises": [
        {
          "id": "ex_47",
          "name": "Flat Bench Leg Raise",
          "rawName": "Flat Bench Leg Raise",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Hip & spinal control)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "x 15",
              "defaultWeight": "",
              "defaultReps": "x 15"
            },
            {
              "set": 2,
              "target": "x 15",
              "defaultWeight": "",
              "defaultReps": "x 15"
            },
            {
              "set": 3,
              "target": "x 12",
              "defaultWeight": "",
              "defaultReps": "x 12"
            }
          ],
          "progression": "",
          "doThis": [
            "Raise to 90°. Lower slowly without touching bench. Tilt pelvis upward at top for max lower ab contraction."
          ],
          "neverDo": [
            "Swinging legs with momentum. Lower back arching off bench. Touching bench between reps."
          ],
          "youtubeQuery": "flat bench leg raise lower abs pelvic tilt proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=flat+bench+leg+raise+lower+abs+pelvic+tilt+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=L-Sit%20progression%20exercise%20tutorial"
        },
        {
          "id": "ex_48",
          "name": "Weighted Ab Crunch (Decline Bench)",
          "rawName": "Weighted Ab Crunch (Decline Bench)",
          "muscleGroup": "Upper/Mid Abs",
          "target": "Upper/mid abs (Weighted crunch)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "10kg plate x 15",
              "defaultWeight": "",
              "defaultReps": "10kg plate x 15"
            },
            {
              "set": 2,
              "target": "10kg plate x 15",
              "defaultWeight": "",
              "defaultReps": "10kg plate x 15"
            },
            {
              "set": 3,
              "target": "10kg plate x 12",
              "defaultWeight": "",
              "defaultReps": "10kg plate x 12"
            }
          ],
          "progression": "Increase from 5kg plate to 7.5kg plate in November.",
          "doThis": [
            "Decline bench, plate held at chest. Curl the torso up flexing the SPINE — this is a crunch, not a sit-up. Exhale hard at the top."
          ],
          "neverDo": [
            "Using hip flexors to yank the torso up (full sit-up motion). Going too heavy before the movement is controlled."
          ],
          "youtubeQuery": "decline weighted ab crunch plate spinal flexion proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=decline+weighted+ab+crunch+plate+spinal+flexion+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Weighted%20Ab%20Crunch%20(Decline%20Bench"
        },
        {
          "id": "ex_sat_plank",
          "name": "Plank (Anti-Extension Core Stability)",
          "rawName": "Plank",
          "muscleGroup": "Core (Anti-Extension)",
          "target": "Anti-extension core stability & transverse abdominis activation before heavy pressing",
          "equipment": "Floor Mat",
          "tempo": "Hold",
          "setsReps": "3 × 45 sec",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "Hold to RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "45 sec hold",
              "defaultWeight": "",
              "defaultReps": "45 sec"
            },
            {
              "set": 2,
              "target": "45 sec hold",
              "defaultWeight": "",
              "defaultReps": "45 sec"
            },
            {
              "set": 3,
              "target": "45 sec hold",
              "defaultWeight": "",
              "defaultReps": "45 sec"
            }
          ],
          "progression": "Progress hold from 45s to 60s without hips sagging",
          "doThis": [
            "Forearms and toes on floor, straight line head to heels",
            "Brace core hard like preparing for a punch",
            "Squeeze glutes to lock pelvis in neutral position",
            "Breathe rhythmically into the diaphragm"
          ],
          "neverDo": [
            "Hips sagging down toward floor (strains lower back)",
            "Piking hips up into the air",
            "Holding breath"
          ],
          "youtubeQuery": "forearm plank core anti extension proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=forearm+plank+core+anti+extension+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Plank+exercise+proper+form"
        },
        {
          "id": "ex_38",
          "name": "Seated Dumbbell Shoulder Press",
          "rawName": "Seated Dumbbell Shoulder Press",
          "muscleGroup": "Deltoids (Front/Side)",
          "target": "Front + side delts — heavy strength press",
          "equipment": "Dumbbells + Upright Bench",
          "tempo": "2-1-2-0",
          "setsReps": "4 x 10",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "8kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "14kg x 10",
              "defaultWeight": "14",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "14kg x 10",
              "defaultWeight": "14",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "14kg x 9",
              "defaultWeight": "14",
              "defaultReps": "9"
            },
            {
              "set": 4,
              "target": "14kg x 8",
              "defaultWeight": "14",
              "defaultReps": "8"
            }
          ],
          "progression": "All 4x10 → increase to 16kg",
          "doThis": [
            "Bench exactly 90°",
            "Press up and slightly inward at top",
            "Lower to ear height only",
            "Core braced throughout"
          ],
          "neverDo": [
            "Leaning back — shifts load to upper chest",
            "Partial reps at top — removes delt tension",
            "Pressing too fast"
          ],
          "youtubeQuery": "seated dumbbell shoulder press deltoids overhead press proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=seated+dumbbell+shoulder+press+deltoids+overhead+press+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Seated%20Dumbbell%20Shoulder%20Press%20exercise%20proper%20form"
        },
        {
          "id": "ex_39",
          "name": "Cable Lateral Raise",
          "rawName": "Cable Lateral Raise",
          "muscleGroup": "Side Delts",
          "target": "Side delts — constant tension variation to Monday dumbbells",
          "equipment": "Cable Machine — Low Pulley",
          "tempo": "1-0-3-0",
          "setsReps": "4 x 15 each side",
          "rest": "60 sec between sides",
          "restSeconds": 60,
          "rir": "Sets 1-3: RIR 1 \\",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "7.5kg x 15 each",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "7.5kg x 15 each",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "7.5kg x 15 each",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            },
            {
              "set": 4,
              "target": "7.5kg x 15 each",
              "defaultWeight": "7.5",
              "defaultReps": "15"
            }
          ],
          "progression": "4x15 → add 2.5kg",
          "doThis": [
            "Stand side-on, grab handle with FAR arm",
            "Lead with elbow, stop at shoulder height",
            "3 sec slow descent"
          ],
          "neverDo": [
            "Swinging or leaning excessively",
            "Raising above shoulder height"
          ],
          "youtubeQuery": "cable lateral raise side delts constant tension proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cable+lateral+raise+side+delts+constant+tension+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20Lateral%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_40",
          "name": "EZ Bar Curl",
          "rawName": "EZ Bar Curl",
          "muscleGroup": "Biceps (Mass)",
          "target": "Bicep overall mass and thickness",
          "equipment": "EZ Bar",
          "tempo": "3-0-2-1",
          "setsReps": "4 x 10",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "Sets 1-2: RIR 2 \\",
          "warmupSets": [
            "10kg x 15",
            "15kg x 8"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "20kg x 10",
              "defaultWeight": "20",
              "defaultReps": "10"
            },
            {
              "set": 2,
              "target": "20kg x 10",
              "defaultWeight": "20",
              "defaultReps": "10"
            },
            {
              "set": 3,
              "target": "20kg x 10",
              "defaultWeight": "20",
              "defaultReps": "10"
            },
            {
              "set": 4,
              "target": "20kg x 8",
              "defaultWeight": "20",
              "defaultReps": "8"
            }
          ],
          "progression": "All 4x10 → add 2.5kg",
          "doThis": [
            "Elbows pinned to sides throughout",
            "Full extension at bottom every single rep",
            "Squeeze hard at top — hold 1 sec"
          ],
          "neverDo": [
            "Swinging body to generate momentum",
            "Partial reps at the bottom"
          ],
          "youtubeQuery": "standing ez bar bicep curl mass proper form technique",
          "youtubeUrl": "https://www.youtube.com/results?search_query=standing+ez+bar+bicep+curl+mass+proper+form+technique",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=EZ%20Bar%20Curl%20exercise%20proper%20form"
        },
        {
          "id": "ex_41",
          "name": "Leaning Cable Lateral Raise",
          "rawName": "Leaning Cable Lateral Raise",
          "muscleGroup": "Side Delts (Stretch)",
          "target": "Side delts — leaning increases tension at the bottom of the raise, where DB laterals are weakest",
          "equipment": "Cable Machine — Low Pulley (hold frame for lean)",
          "tempo": "1-0-3-0",
          "setsReps": "4 x 15 each side",
          "rest": "60 sec between sides",
          "restSeconds": 60,
          "rir": "Sets 1-3: RIR 1 \\",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "5kg x 15 each",
              "defaultWeight": "5",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "5kg x 15 each",
              "defaultWeight": "5",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "5kg x 15 each",
              "defaultWeight": "5",
              "defaultReps": "15"
            },
            {
              "set": 4,
              "target": "5kg x 15 each",
              "defaultWeight": "5",
              "defaultReps": "15"
            }
          ],
          "progression": "4x15 → add 1.25kg (small increments — stretch-position exercise)",
          "doThis": [
            "Lean AWAY from the cable, holding the frame with your free hand",
            "Lead with elbow, raise to shoulder height",
            "Feel the stretch at the bottom before each rep"
          ],
          "neverDo": [
            "Leaning so far you lose control of the weight",
            "Using the free hand to assist the lift"
          ],
          "youtubeQuery": "leaning cable lateral raise side delts lengthened stretch proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=leaning+cable+lateral+raise+side+delts+lengthened+stretch+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Leaning%20Cable%20Lateral%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_42",
          "name": "Dips (Forward Lean)",
          "rawName": "Dips (Forward Lean)",
          "muscleGroup": "Lower Chest & Triceps",
          "target": "Lower chest + triceps — bodyweight compound",
          "equipment": "Dip Bars",
          "tempo": "3-1-1-0",
          "setsReps": "4 x 12",
          "rest": "2 min",
          "restSeconds": 120,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "5 easy bodyweight dips to warm shoulder"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "Bodyweight x 12",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 12"
            },
            {
              "set": 2,
              "target": "Bodyweight x 12",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 12"
            },
            {
              "set": 3,
              "target": "Bodyweight x 10",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 10"
            },
            {
              "set": 4,
              "target": "Bodyweight x 10",
              "defaultWeight": "",
              "defaultReps": "Bodyweight x 10"
            }
          ],
          "progression": "All 4x12 → add 5kg weight belt",
          "doThis": [
            "Forward lean 15-20° — chest and tricep version",
            "Lower until upper arms parallel to floor",
            "Full lockout at top",
            "3 sec controlled descent"
          ],
          "neverDo": [
            "Dipping too low — shoulder impingement risk",
            "No lockout at top",
            "Going too fast"
          ],
          "youtubeQuery": "parallel bar dips forward lean lower chest triceps proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=parallel+bar+dips+forward+lean+lower+chest+triceps+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Dips%20(Forward%20Lean"
        },
        {
          "id": "ex_43",
          "name": "Skull Crusher (EZ Bar)",
          "rawName": "Skull Crusher (EZ Bar)",
          "muscleGroup": "Triceps (Long Head)",
          "target": "Tricep long head — builds the horseshoe arm shape",
          "equipment": "EZ Bar + Flat Bench",
          "tempo": "3-1-1-0",
          "setsReps": "3 x 12",
          "rest": "90 sec",
          "restSeconds": 90,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "10kg x 12"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "17.5kg x 12",
              "defaultWeight": "17.5",
              "defaultReps": "12"
            },
            {
              "set": 2,
              "target": "17.5kg x 12",
              "defaultWeight": "17.5",
              "defaultReps": "12"
            },
            {
              "set": 3,
              "target": "17.5kg x 10",
              "defaultWeight": "17.5",
              "defaultReps": "10"
            }
          ],
          "progression": "3x12 → add 2.5kg",
          "doThis": [
            "Bar directly above eyes to start",
            "Elbows stay fixed pointing straight up",
            "Lower toward forehead — NOT behind head",
            "Only the forearm moves"
          ],
          "neverDo": [
            "Elbows flaring outward",
            "Lowering behind head — shoulder strain risk",
            "Upper arm moving with forearm"
          ],
          "youtubeQuery": "ez bar skull crusher lying triceps extension long head form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=ez+bar+skull+crusher+lying+triceps+extension+long+head+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Skull%20Crusher%20(EZ%20Bar"
        },
        {
          "id": "ex_44",
          "name": "Seated Calf Raise",
          "rawName": "Seated Calf Raise",
          "muscleGroup": "Calves (Soleus)",
          "target": "Soleus emphasis — complements Wednesday standing calf raise (gastrocnemius bias)",
          "equipment": "Seated Calf Raise Machine",
          "tempo": "1-2-1-2 (2 sec pause TOP and BOTTOM)",
          "setsReps": "4 x 15-20",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 0 on last 2 sets",
          "warmupSets": [
            "Bodyweight x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "15kg x 20",
              "defaultWeight": "15",
              "defaultReps": "20"
            },
            {
              "set": 2,
              "target": "15kg x 20",
              "defaultWeight": "15",
              "defaultReps": "20"
            },
            {
              "set": 3,
              "target": "15kg x 18",
              "defaultWeight": "15",
              "defaultReps": "18"
            },
            {
              "set": 4,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            }
          ],
          "progression": "All 4 sets full ROM → add 5kg",
          "doThis": [
            "Rise as HIGH as possible at top",
            "Knees bent throughout — this is what shifts emphasis to the soleus",
            "2 sec pause at BOTH top and bottom — non-negotiable"
          ],
          "neverDo": [
            "Partial reps — same mistake as standing version, kills the stimulus",
            "Bouncing at bottom",
            "Skipping the pauses"
          ],
          "youtubeQuery": "seated calf raise soleus full stretch and pause proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=seated+calf+raise+soleus+full+stretch+and+pause+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Seated%20Calf%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_46",
          "name": "Reverse Pec Deck Fly",
          "rawName": "Reverse Pec Deck Fly",
          "muscleGroup": "Rear Delts",
          "target": "Rear delt isolation — machine-guided path, easiest exercise in the program to control",
          "equipment": "Pec Deck Machine (reverse-facing)",
          "tempo": "2-1-2-1 (1 sec squeeze at contraction)",
          "setsReps": "3 x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1 all sets",
          "warmupSets": [
            "light x 15"
          ],
          "workingSets": [
            {
              "set": 1,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            },
            {
              "set": 2,
              "target": "15kg x 15",
              "defaultWeight": "15",
              "defaultReps": "15"
            },
            {
              "set": 3,
              "target": "12.5kg x 15",
              "defaultWeight": "12.5",
              "defaultReps": "15"
            }
          ],
          "progression": "3x15 → add 2.5kg",
          "doThis": [
            "Chest against the pad the entire set",
            "Slight elbow bend held constant throughout",
            "Squeeze shoulder blades together at the back",
            "Control the return — do not let the arms fly back"
          ],
          "neverDo": [
            "Using momentum to swing the handles back",
            "Shrugging shoulders up toward ears",
            "Going so heavy the range of motion shortens"
          ],
          "youtubeQuery": "reverse pec deck machine rear delt fly isolation proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+pec+deck+machine+rear+delt+fly+isolation+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Reverse%20Pec%20Deck%20Fly%20exercise%20proper%20form"
        }
      ]
    },
    {
      "id": "sunday",
      "day": "Sunday",
      "title": "Complete Rest & Recovery",
      "sessionName": "Complete Rest",
      "primaryFocus": "Full Nervous System Recovery, Muscle Protein Synthesis, Sleep",
      "duration": "24 Hours Rest",
      "preWorkout": false,
      "preWorkoutTiming": "No pre-workout. Sleep 8+ hours. Hit 130g protein. Light walking only.",
      "warmupKey": "none",
      "finisher": null,
      "cardio": null,
      "exercises": []
    }
  ],
  "progress": {
    "lastUpdated": "October 31, 2026",
    "dayNumber": 131,
    "totalDaysOriginal": 180,
    "extendedDeadline": "April–May 2027",
    "overallPercent": 39,
    "assessment": "Muscle development (chest, back, arms) is 50-58% complete (ahead of schedule). Belly fat regressed in October (-5%) due to skipped end-of-session abs and dietary looseness. Program extended to April–May 2027.",
    "muscles": [
      {
        "muscle": "Back (thickness)",
        "percent": 58,
        "note": "Ahead of schedule. Dense mid-back."
      },
      {
        "muscle": "Back (width + V-taper)",
        "percent": 55,
        "note": "Best muscle. Relaxed V-taper visible."
      },
      {
        "muscle": "Chest (upper + mid)",
        "percent": 50,
        "note": "3D projection confirmed."
      },
      {
        "muscle": "Biceps",
        "percent": 50,
        "note": "Clear peak forming."
      },
      {
        "muscle": "Triceps",
        "percent": 42,
        "note": "Horseshoe outline present."
      },
      {
        "muscle": "Shoulders (side delt)",
        "percent": 42,
        "note": "Progressing steadily but needs volume."
      },
      {
        "muscle": "Rear delts",
        "percent": 22,
        "note": "Still weakest muscle group. Priority face-pulls & raises."
      },
      {
        "muscle": "Upper abs",
        "percent": 14,
        "note": "Blocked by superficial fat layer."
      },
      {
        "muscle": "Lower belly reduction",
        "percent": -5,
        "note": "⚠️ Regressed in October. Expanded. Primary bottleneck!"
      }
    ],
    "timeline": [
      {
        "goal": "Chest complete",
        "original": "Dec 2026",
        "realistic": "Feb 2027",
        "status": "On Track"
      },
      {
        "goal": "Back V-taper obvious",
        "original": "Already present",
        "realistic": "Cleaner by Jan 2027",
        "status": "Ahead"
      },
      {
        "goal": "Shoulders complete",
        "original": "Dec 2026",
        "realistic": "Mar 2027",
        "status": "Adjusted"
      },
      {
        "goal": "Rear delts complete",
        "original": "Feb 2027",
        "realistic": "May 2027",
        "status": "Lagging"
      },
      {
        "goal": "Visible upper abs",
        "original": "Dec 2026",
        "realistic": "Feb 2027 (Strict diet)",
        "status": "Critical"
      },
      {
        "goal": "Lower belly flat",
        "original": "Apr 2027",
        "realistic": "Apr–May 2027",
        "status": "Diet Bound"
      },
      {
        "goal": "Complete Men's Physique Standard",
        "original": "Apr 2027",
        "realistic": "Apr–May 2027",
        "status": "Achievable"
      }
    ],
    "keyDietRules": [
      "Cut 1 roti at dinner every single day (Non-negotiable).",
      "No food consumption after 9:00 PM (Shutdown late-night startup snacking).",
      "Weigh in Monday morning every week without fail. If weight climbs 2 weeks in a row, cut another roti.",
      "20-minute brisk walk after dinner 5 nights/week (Cheapest fat loss intervention)."
    ],
    "absSummary": {
      "totalSetsPerWeek": 27,
      "previousSetsPerWeek": "15-18 (frequently skipped)",
      "sessionsWithAbsFirst": "2 of 4 sessions (Wednesday & Saturday)",
      "structure": [
        {
          "day": "Monday (End)",
          "exercises": "Hanging Knee Raise",
          "sets": "3 × 12"
        },
        {
          "day": "Wednesday (START)",
          "exercises": "Cable Crunch (3×15) + Hanging Leg Raise (3×12) + Reverse Crunch (3×15)",
          "sets": "9 sets"
        },
        {
          "day": "Friday (End)",
          "exercises": "Reverse Crunch (3×15) + Bicycle Crunch (3×20) + Plank (3×45s)",
          "sets": "9 sets"
        },
        {
          "day": "Saturday (START)",
          "exercises": "Flat Bench Leg Raise (3×15) + Weighted Crunch (3×15) + Plank (3×45s)",
          "sets": "9 sets"
        }
      ]
    }
  },
  "mobility": {
    "title": "Weekly Mobility Flow",
    "subtitle": "For all-day energy + joint health & injury prevention",
    "version": "V1 — November 2026",
    "duration": "8–10 minutes total",
    "howToUse": "Morning, before breakfast or gym. Non-negotiable on rest days — especially not on rest days. Do this flow BEFORE your existing warm-up on training days, separately on rest days.",
    "goals": [
      "Clear joint stiffness from 7-8 hours of sleep immobility",
      "Reactivate glutes and core (which shut off from long sitting)",
      "Reset shoulder and thoracic posture before training or desk work",
      "Raise baseline alertness and breathing capacity for the first 4-5 hours of the day"
    ],
    "baseBlock": {
      "title": "Daily Base Block (5 min, non-negotiable)",
      "duration": "5 min",
      "description": "These five movements address the universal desk-worker + heavy-lifter problem areas: hip flexors, thoracic spine, glutes, shoulders.",
      "exercises": [
        {
          "name": "90/90 Hip Rotation",
          "reps": "5 reps per side",
          "cue": "Sit on floor. Both knees bent at 90° — one in front, one to the side. Keep torso upright. Slowly rotate both legs together to swap which leg is in front. Hold 2 sec at each end.",
          "why": "The single most important movement if you sit for work. Frees hip capsules and deep rotators.",
          "youtubeUrl": "https://www.youtube.com/results?search_query=90+90+hip+rotation+mobility+tutorial"
        },
        {
          "name": "Cat-Cow",
          "reps": "10 reps slow",
          "cue": "On hands and knees. Inhale: drop belly, lift head (cow). Exhale: round spine, tuck chin (cat). Move vertebra by vertebra.",
          "why": "Spinal articulation — not a stretch. If done fast it does nothing. Restores segmental control.",
          "youtubeUrl": "https://www.youtube.com/results?search_query=cat+cow+spinal+articulation+proper+form"
        },
        {
          "name": "Thoracic Rotation (Thread the Needle)",
          "reps": "6 reps per side",
          "cue": "On hands and knees. Take one hand, slide it under your torso as far as possible toward opposite side, rotating the upper spine. Return.",
          "why": "Directly counteracts forward rounding from phone/desk work. Restores upper back rotational mobility.",
          "youtubeUrl": "https://www.youtube.com/results?search_query=thread+the+needle+thoracic+rotation+proper+form"
        },
        {
          "name": "Glute Bridge Hold",
          "reps": "2 sets × 20 sec hold",
          "cue": "Lie on back, knees bent, feet flat. Push hips up. At top: squeeze glutes hard, tuck pelvis slightly, breathe.",
          "why": "Reactivates glutes that shut off from desk sitting. Directly improves squat, deadlift, and hip hinge mechanics.",
          "youtubeUrl": "https://www.youtube.com/results?search_query=glute+bridge+hold+activation+tutorial"
        },
        {
          "name": "World's Greatest Stretch",
          "reps": "4 reps per side",
          "cue": "Start in lunge (right foot forward). Place right hand inside right foot on floor. Hold 2 sec. Then rotate right arm up toward ceiling, eyes following. Hold 2 sec. Step through.",
          "why": "Hits hip flexor + thoracic rotation + ankle mobility in one comprehensive movement.",
          "youtubeUrl": "https://www.youtube.com/results?search_query=worlds+greatest+stretch+proper+form+tutorial"
        }
      ]
    },
    "daySpecific": {
      "monday": {
        "title": "Monday Add-on (Push Day — Chest / Shoulder / Triceps)",
        "duration": "3-4 min (Total ~9 min)",
        "exercises": [
          {
            "name": "Doorframe Chest Stretch",
            "reps": "30 sec each arm",
            "cue": "Stand in doorframe, arm at 90°, step through. Stretches pec minor which chronically shortens from pressing.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=doorframe+chest+stretch+pec+minor+form"
          },
          {
            "name": "Band (or Towel) Shoulder Dislocate",
            "reps": "10 reps",
            "cue": "Hold a towel wide with both hands, raise overhead and rotate behind you, keeping arms straight. Opens shoulder capsule. Non-negotiable before bench pressing.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=shoulder+dislocates+with+band+towel+tutorial"
          },
          {
            "name": "Scapular Wall Slides",
            "reps": "10 reps",
            "cue": "Stand against wall, arms at 90° against wall, slide up and down. Activates lower traps which stabilize the shoulder during pressing.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=scapular+wall+slides+proper+form"
          }
        ]
      },
      "tuesday": {
        "title": "Tuesday Add-on (Pull Day — Back / Biceps)",
        "duration": "3-4 min (Total ~9 min)",
        "exercises": [
          {
            "name": "Lat Hang",
            "reps": "30 sec",
            "cue": "Hang from a bar with straight arms (or grip a doorframe and lean back). Decompresses spine and opens lats before loading.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=lat+hang+dead+hang+spinal+decompression"
          },
          {
            "name": "Face-down Y-T-W Raises",
            "reps": "8 reps each letter",
            "cue": "Lie face down, arms extended. Make Y shape (overhead), T shape (wide), W shape (elbows bent). Lift and lower slowly. Activates rear delts and lower traps.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=ytw+raises+prone+lower+traps+rear+delt"
          },
          {
            "name": "Neck Side Stretch",
            "reps": "20 sec per side",
            "cue": "Tilt ear to shoulder, hold. Removes neck tension built from phone/screens that limits chin-up range.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=neck+side+stretch+upper+traps+mobility"
          }
        ]
      },
      "wednesday": {
        "title": "Wednesday Add-on (Leg Day — Squats / Hip Hinge)",
        "duration": "3-4 min (Total ~10 min)",
        "exercises": [
          {
            "name": "Couch Stretch",
            "reps": "60 sec per side",
            "cue": "Kneel with one shin against wall behind you, other foot forward. Hold upright. Best hip flexor stretch for people who sit.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=couch+stretch+hip+flexor+proper+form"
          },
          {
            "name": "Deep Squat Hold",
            "reps": "60 sec",
            "cue": "Feet shoulder-width, squat as low as possible, hold onto rack if needed. Natural resting position that directly improves squat depth.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=deep+squat+hold+mobility+drill"
          },
          {
            "name": "Ankle Circles",
            "reps": "10 each direction, each foot",
            "cue": "Full rotation at the ankle. Ankle dorsiflexion is the first limiting factor in squat depth.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=ankle+circles+mobility+drill"
          }
        ]
      },
      "thursday": {
        "title": "Thursday Add-on (Push Day — Chest / Triceps)",
        "duration": "3-4 min (Total ~9 min)",
        "exercises": [
          {
            "name": "Doorframe Chest Stretch",
            "reps": "30 sec each arm",
            "cue": "Stand in doorframe, arm at 90°, step through. Stretches pec minor.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=doorframe+chest+stretch+pec+minor+form"
          },
          {
            "name": "Band (or Towel) Shoulder Dislocate",
            "reps": "10 reps",
            "cue": "Hold towel/band wide, rotate overhead and behind. Opens shoulder capsule.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=shoulder+dislocates+with+band+towel+tutorial"
          },
          {
            "name": "Scapular Wall Slides",
            "reps": "10 reps",
            "cue": "Stand against wall, arms at 90°, slide up and down. Lower trap stabilizer activation.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=scapular+wall+slides+proper+form"
          }
        ]
      },
      "friday": {
        "title": "Friday Add-on (Pull Day + Jefferson Curl)",
        "duration": "4 min (Total ~10 min)",
        "exercises": [
          {
            "name": "Lat Hang",
            "reps": "30 sec",
            "cue": "Hang with straight arms. Decompresses the lumbar and thoracic spine.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=lat+hang+dead+hang+spinal+decompression"
          },
          {
            "name": "Face-down Y-T-W Raises",
            "reps": "8 reps each letter",
            "cue": "Prone raises in Y, T, W shapes to prime rear delts and mid/lower traps.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=ytw+raises+prone+lower+traps+rear+delt"
          },
          {
            "name": "Neck Side Stretch",
            "reps": "20 sec per side",
            "cue": "Tilt ear to shoulder, breathe out, decompress cervical tension.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=neck+side+stretch+upper+traps+mobility"
          },
          {
            "name": "Jefferson Curl (Decompression)",
            "reps": "5 reps very slow",
            "cue": "Stand on a step, hold light weight (2-5kg), slowly roll down vertebra by vertebra: chin to chest first, upper back, lower back. Return in reverse. Safest hamstring & spinal decompression when controlled.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=jefferson+curl+spinal+mobility+proper+form"
          }
        ]
      },
      "saturday": {
        "title": "Saturday Add-on (Legs & Hips + Pigeon Pose)",
        "duration": "4 min (Total ~11 min)",
        "exercises": [
          {
            "name": "Couch Stretch",
            "reps": "60 sec per side",
            "cue": "One shin against wall, other foot forward on floor. Hold upright to open quads and psoas.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=couch+stretch+hip+flexor+proper+form"
          },
          {
            "name": "Deep Squat Hold",
            "reps": "60 sec",
            "cue": "Full resting squat depth. Relax hips, chest proud, breathe.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=deep+squat+hold+mobility+drill"
          },
          {
            "name": "Ankle Circles",
            "reps": "10 each direction, each foot",
            "cue": "Max range circular articulation of talocrural joint.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=ankle+circles+mobility+drill"
          },
          {
            "name": "Pigeon Pose",
            "reps": "60 sec per side",
            "cue": "From plank, bring one knee toward wrist, shin diagonal across body, extend back leg. Targets piriformis and external hip rotators compressed from squatting frequency.",
            "youtubeUrl": "https://www.youtube.com/results?search_query=pigeon+pose+hip+rotators+piriformis+form"
          }
        ]
      },
      "sunday": {
        "title": "Sunday (Rest Day — 5-min Base Block Only)",
        "duration": "5-8 min",
        "exercises": []
      }
    },
    "shortOnTime": {
      "fiveMinutes": "Do the 5-move base block. Skip day-specific additions.",
      "threeMinutes": "Cat-Cow + Glute Bridge + World's Greatest Stretch (covers spinal articulation, glute activation, and hip flexor + thoracic rotation)."
    },
    "progressionPlan": [
      {
        "period": "Month 1 (November)",
        "focus": "Build the habit. All 5 base movements daily."
      },
      {
        "period": "Month 2 (December)",
        "focus": "Add the day-specific blocks consistently."
      },
      {
        "period": "Month 3 (January)",
        "focus": "Add Jefferson curl on Fridays. Increase World's Greatest Stretch to 6 reps per side."
      },
      {
        "period": "Month 4+ (February Onward)",
        "focus": "Replace Glute Bridge with Single-Leg Glute Bridge for deeper hip stability."
      }
    ]
  }
};

if (typeof module !== 'undefined') {
  module.exports = ROUTINE_DATA;
}
