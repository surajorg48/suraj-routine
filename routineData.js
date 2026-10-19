/**
 * SURAJ 6-MONTH AESTHETIC TRANSFORMATION PROGRAM
 * Comprehensive Program Data & Interactive Database
 * Version 3.0 | August 2026
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
    "duration": "6 Months",
    "version": "Version 3.0",
    "date": "August 2026",
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
      "meaning": "A group of reps without stopping. '4 \u00d7 8' = 4 sets of 8 reps."
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
      "meaning": "Absolute failure \u2014 cannot do one more clean rep. Last set of isolation only."
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
      "meaning": "3 sec lower \u2192 1 sec pause \u2192 1 sec lift \u2192 0 pause at top."
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
        "session": "Push A \u2014 Upper Chest + Shoulders",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Tuesday",
        "session": "Pull A \u2014 Lats + Biceps",
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
        "session": "Push B \u2014 Mid + Lower Chest + Triceps",
        "preWorkout": true,
        "amount": "1 scoop",
        "time": "5:50 AM"
      },
      {
        "day": "Friday",
        "session": "Pull B \u2014 Rear Delts + Back + Abs",
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
        "Arm circles x20 each way (forward & backward)",
        "Band pull-aparts x20 (squeeze upper back)",
        "Push-ups controlled tempo x20",
        "Shoulder rotations / Cuban press x10",
        "Specific progressive warm-up sets for Exercise 1"
      ]
    },
    "pull": {
      "title": "Pull Warm-Up (Tuesday & Friday)",
      "duration": "5-7 min",
      "steps": [
        "Dead hang from pull-up bar for 30 seconds",
        "Scapular retractions / pull-downs x15",
        "Band pull-aparts x30",
        "Light cable face pulls x20",
        "Specific progressive warm-up sets for Exercise 1"
      ]
    },
    "legs": {
      "title": "Legs Warm-Up (Wednesday)",
      "duration": "7-9 min",
      "steps": [
        "5 minutes stationary bike or incline treadmill (Zone 1/2)",
        "10 bodyweight squats full depth with pause",
        "10 leg swings forward/backward & sideways (each leg)",
        "10 bodyweight glute bridges (hold top squeeze)",
        "Specific progressive warm-up sets for Barbell Squat"
      ]
    },
    "shoulders": {
      "title": "Shoulders & Arms Warm-Up (Saturday)",
      "duration": "5-7 min",
      "steps": [
        "Arm circles x20 each way",
        "Band pull-aparts x25",
        "Controlled push-ups x10",
        "5kg light dumbbell lateral raises x15",
        "Specific progressive warm-up sets for Exercise 1"
      ]
    }
  },
  "deload": {
    "title": "Deload Protocol (Every 6th Week)",
    "description": "Every 6th week is a mandatory deload week. Weights are reduced by 40% while preserving sets and reps to let tendons, ligaments, and the central nervous system supercompensate.",
    "schedule": [
      {
        "period": "Weeks 1-5",
        "action": "Full program at full weights \u2014 progressive overload every session."
      },
      {
        "period": "Week 6 \u2014 DELOAD",
        "action": "All weights reduced 40%. Same sets, same reps. No pre-workout this week."
      },
      {
        "period": "Weeks 7-11",
        "action": "Resume full program. You will return noticeably stronger."
      },
      {
        "period": "Week 12 \u2014 DELOAD",
        "action": "Repeat deload protocol (40% weight drop, no pre-workout)."
      },
      {
        "period": "Weeks 13-17",
        "action": "Full intensity progression cycle."
      },
      {
        "period": "Week 18 \u2014 DELOAD",
        "action": "Deload week (40% reduction)."
      },
      {
        "period": "Weeks 19-23",
        "action": "Peak transformation cycle."
      },
      {
        "period": "Week 24 \u2014 DELOAD",
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
    "dailyTarget": "130g protein / day minimum (2g \u00d7 65kg bodyweight = 130g)",
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
        "rule": "Sugar is the enemy \u2014 eliminate entirely",
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
      "result": "Complete 6-month aesthetic transformation \u2014 Men's Physique standard achieved."
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
      "title": "Push A \u2014 Upper Chest + Shoulders",
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
          "target": "Upper chest (clavicular head) \u2014 #1 Priority",
          "equipment": "Barbell + Bench 30-35\u00b0",
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
          "progression": "All 4x8 at RIR 2 \u2192 increase to 35kg. Stay if any set drops below 6.",
          "doThis": [
            "Set bench EXACTLY 30-35\u00b0 \u2014 NOT 45\u00b0",
            "Retract scapula before unracking and hold throughout",
            "Elbows at 60-70\u00b0 from torso",
            "Bar touches upper chest not neck",
            "Drive feet into floor"
          ],
          "neverDo": [
            "Angle above 35\u00b0 \u2014 shifts load to front delt",
            "Elbows flared to 90\u00b0 \u2014 impingement risk",
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
          "target": "Upper chest \u2014 second compound for upper chest priority",
          "equipment": "Dumbbells + Incline Bench 30-35\u00b0",
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
          "progression": "All 3x10 \u2192 increase to 18kg",
          "doThis": [
            "Same angle as barbell press \u2014 30-35\u00b0",
            "Full stretch at bottom, feel upper pec open",
            "Press up and slightly inward at top",
            "3-second controlled descent"
          ],
          "neverDo": [
            "Going above 35\u00b0 angle",
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
          "target": "Upper chest \u2014 constant cable tension through full range",
          "equipment": "Cable Machine \u2014 Low Pulley",
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
          "progression": "2x12 \u2192 add 2.5kg",
          "doThis": [
            "Pulleys set at LOWEST position",
            "Fly upward and inward \u2014 matching upper chest fiber direction",
            "Squeeze at top like clapping above your head"
          ],
          "neverDo": [
            "Elbows bending too much \u2014 becomes a press",
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
          "target": "Rear delt isolation \u2014 cable constant-tension variation",
          "equipment": "Cable Machine \u2014 Low Pulley (crossed handles)",
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
          "progression": "3x15 \u2192 add 2.5kg (one pin)",
          "doThis": [
            "Cross the handles, pull hands apart and back",
            "Squeeze shoulder blades together at the peak",
            "Slight elbow bend throughout, held constant",
            "Control the return \u2014 don't let the cables snap back"
          ],
          "neverDo": [
            "Using momentum or leaning back to move the weight",
            "Going too heavy \u2014 this is a feel exercise, not a strength one",
            "Bending elbows too much \u2014 turns it into a row"
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
          "target": "Side delts \u2014 most important muscle for visible width",
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
              "target": "8kg x 15 then immediately 5kg x 10 \u2014 NO rest between weights",
              "defaultWeight": "8",
              "defaultReps": "15"
            }
          ],
          "progression": "All 4x15 clean \u2192 increase to 10kg",
          "doThis": [
            "Slight forward lean at hips (10-15\u00b0)",
            "Lead with ELBOWS not hands",
            "Pinky slightly higher than thumb at top",
            "Stop at shoulder height \u2014 not above",
            "3 full seconds on the way DOWN every rep"
          ],
          "neverDo": [
            "Swinging torso for momentum",
            "Raising above shoulder height \u2014 traps take over",
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
          "equipment": "Cable Machine \u2014 High Pulley",
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
          "progression": "3x12 \u2192 add 2.5kg",
          "doThis": [
            "Pin elbows to sides \u2014 they do NOT move",
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
        }
      ]
    },
    {
      "id": "tuesday",
      "day": "Tuesday",
      "title": "Pull A \u2014 Lats + Biceps",
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
          "rawName": "\u2b50 CALISTHENICS \u2014 Pull-Ups",
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
          "target": "Lat activation \u2014 isolates lats without biceps; builds mind-muscle connection before heavy pulling",
          "equipment": "Cable Machine \u2014 High Pulley, straight bar",
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
          "progression": "3x15 \u2192 add 2.5kg",
          "doThis": [
            "Slight forward hip hinge, arms stay almost straight throughout",
            "Pull the bar down in an arc to your thighs",
            "Squeeze the lats \u2014 think \"elbows to pockets\"",
            "Control the bar back up to the top"
          ],
          "neverDo": [
            "Bending the elbows \u2014 turns it into a pushdown",
            "Using the lower back to heave the weight",
            "Going heavy \u2014 this is a feel/activation exercise, not a strength one"
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
          "target": "Lat width \u2014 primary V-taper muscle",
          "equipment": "Cable Machine \u2014 Lat Pulldown Bar",
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
          "progression": "All 4x10 \u2192 increase to 37.5kg",
          "doThis": [
            "Start from dead hang \u2014 full lat stretch every rep",
            "Pull elbows DOWN and BACK \u2014 think elbows to back pockets",
            "Chin clears the bar at bottom",
            "3-second controlled return to dead hang"
          ],
          "neverDo": [
            "Not achieving full hang \u2014 removes lat stretch",
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
          "target": "Back thickness + lats \u2014 horizontal pull",
          "equipment": "Cable Machine \u2014 V-Bar Attachment",
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
          "progression": "All 4x10 \u2192 add 5kg",
          "doThis": [
            "Pull to LOWER STERNUM \u2014 not belly button",
            "Squeeze shoulder blades together and hold 1 sec",
            "Full lat stretch at front every rep",
            "Sit tall with slight lower back arch"
          ],
          "neverDo": [
            "Rounding lower back",
            "Leaning back excessively",
            "Pulling to belly button \u2014 lats disengage"
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
          "target": "Lats + mid back \u2014 unilateral, fixes imbalances",
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
          "progression": "2x10 both sides clean \u2192 increase to 22.5kg",
          "doThis": [
            "Drive ELBOW TO CEILING \u2014 not out to the side",
            "Spine neutral and parallel to floor",
            "Pause and squeeze lat hard at top",
            "Lower slowly \u2014 feel lat lengthen"
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
          "target": "Lats in FULLY STRETCHED position \u2014 loaded stretch = maximum hypertrophy",
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
          "progression": "2x12 \u2192 increase to 18kg",
          "doThis": [
            "Upper back on bench, hips dropped down",
            "Lower dumbbell slowly behind head in wide arc",
            "Feel the lat FULLY STRETCH at the bottom",
            "Pull back using lats \u2014 think pulling from armpits"
          ],
          "neverDo": [
            "Bending elbows too much \u2014 becomes tricep exercise",
            "Dropping hips \u2014 removes lat stretch",
            "Rushing \u2014 the 2 sec stretch pause is the entire point"
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
          "equipment": "Dumbbells + Incline Bench 45-60\u00b0",
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
          "progression": "All 4x10 \u2192 increase to 12kg",
          "doThis": [
            "Arms hang STRAIGHT DOWN behind torso",
            "Elbows stay BEHIND torso \u2014 non-negotiable",
            "Curl with supination (wrist rotates outward)",
            "Slow the bottom \u2014 feel the full stretch"
          ],
          "neverDo": [
            "Elbows drifting forward \u2014 kills the stretched position entirely",
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
          "target": "Bicep peak \u2014 the bottom stretch builds the peak",
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
          "progression": "3x10 \u2192 add 2.5kg",
          "doThis": [
            "Lower to FULL extension \u2014 this is where growth happens",
            "2 second pause at bottom every rep",
            "Upper arms fully on pad throughout"
          ],
          "neverDo": [
            "Not going to full extension \u2014 directly kills bicep peak development",
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
      "title": "Legs + Abs (Session 1 of 3)",
      "sessionName": "Legs + Abs",
      "primaryFocus": "Squat Strength, Quad & Hamstring Hypertrophy + Lower Abs",
      "duration": "~85 min",
      "preWorkout": false,
      "preWorkoutTiming": "Skip pre-workout today to preserve caffeine receptor sensitivity",
      "warmupKey": "legs",
      "finisher": null,
      "cardio": null,
      "exercises": [
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
          "progression": "All 4x8 \u2192 add 5kg",
          "doThis": [
            "Bar on upper traps \u2014 NOT neck",
            "Toes out 15-30\u00b0, slightly wide stance",
            "Sit back AND down simultaneously",
            "Hit parallel or below \u2014 above parallel is a wasted rep",
            "Drive through mid-foot"
          ],
          "neverDo": [
            "Heels rising \u2014 ankle mobility issue",
            "Knees caving inward",
            "Good morning squat \u2014 hips rise before shoulders",
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
          "progression": "3x10 \u2192 add 5kg",
          "doThis": [
            "Hip hinge \u2014 push hips BACK not down",
            "Maintain arch in lower back throughout",
            "Bar stays touching legs the entire time",
            "Stop when lower back starts to round"
          ],
          "neverDo": [
            "Bending knees too much \u2014 becomes a deadlift",
            "Rounding lower back \u2014 injury risk",
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
          "target": "Quads \u2014 extra volume, zero spinal load",
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
          "progression": "3x12 \u2192 add 10kg",
          "doThis": [
            "Feet low-to-mid on platform, hip width",
            "Lower until knees reach 90\u00b0",
            "Do NOT lock out at top \u2014 keeps tension on quads"
          ],
          "neverDo": [
            "Partial reps \u2014 most common mistake",
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
          "target": "Hamstrings \u2014 shortened position, completes hamstring development",
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
          "progression": "3x12 \u2192 add 5kg",
          "doThis": [
            "Hips stay FLAT on pad",
            "Curl heels fully toward glutes",
            "Hold top contraction 1 second",
            "Lower slowly \u2014 2 full seconds"
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
          "target": "Gastrocnemius, soleus \u2014 full ROM essential for growth",
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
          "progression": "All 4 sets full ROM \u2192 add 5kg",
          "doThis": [
            "Rise as HIGH as possible at top",
            "Heel BELOW platform at bottom",
            "2 sec pause at BOTH top and bottom \u2014 non-negotiable"
          ],
          "neverDo": [
            "Partial reps \u2014 the only reason calves do not grow for most people",
            "Bouncing at bottom",
            "Skipping the pauses"
          ],
          "youtubeQuery": "standing calf raise full stretch gastrocnemius proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=standing+calf+raise+full+stretch+gastrocnemius+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Standing%20Calf%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_20",
          "name": "Hanging Leg Raise",
          "rawName": "Hanging Leg Raise",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Pelvic curl)",
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
          "progression": "",
          "doThis": [
            "Dead hang start. Raise legs to parallel min. Do NOT swing. Lower slowly."
          ],
          "neverDo": [
            "Swinging body \u2014 removes ab engagement. Dropping legs fast."
          ],
          "youtubeQuery": "hanging leg raise lower abs pelvic tilt proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=hanging+leg+raise+lower+abs+pelvic+tilt+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Hanging%20Leg%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_21",
          "name": "Cable Crunch (Weighted)",
          "rawName": "Cable Crunch (Weighted)",
          "muscleGroup": "Upper/Mid Abs",
          "target": "Upper/mid abs (Spinal flexion)",
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
          "progression": "",
          "doThis": [
            "Flex at the SPINE not just hips. Round lower back at bottom. Hold 2 sec. Progress weight every 2 weeks."
          ],
          "neverDo": [
            "Hinging at hips instead of spine \u2014 becomes a hip exercise not abs."
          ],
          "youtubeQuery": "kneeling cable rope crunch abs spinal flexion proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=kneeling+cable+rope+crunch+abs+spinal+flexion+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Cable%20Crunch%20(Weighted"
        }
      ]
    },
    {
      "id": "thursday",
      "day": "Thursday",
      "title": "Push B \u2014 Mid + Lower Chest + Triceps",
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
          "target": "Mid chest (sternal head) \u2014 foundational chest mass builder",
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
          "progression": "All 4x8 at RIR 2 \u2192 increase to 42.5kg (1.25kg each side)",
          "doThis": [
            "Grip slightly wider than shoulder width",
            "Bar touches LOWER pec line \u2014 not upper chest",
            "Elbows at 60-70\u00b0 from torso",
            "Retract scapula \u2014 hold throughout every rep",
            "Drive feet into floor"
          ],
          "neverDo": [
            "Elbows flared to 90\u00b0 \u2014 shoulder impingement",
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
          "target": "Lower chest (lower pec head) \u2014 dedicated lower chest exercise",
          "equipment": "Dumbbells + Decline Bench 20-25\u00b0",
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
          "progression": "All 3x10 \u2192 increase to 18kg",
          "doThis": [
            "Bench EXACTLY 20-25\u00b0 decline \u2014 not steeper",
            "Lower to lower chest \u2014 feel lower pec stretch",
            "Control descent \u2014 3 full seconds",
            "Secure feet firmly before starting"
          ],
          "neverDo": [
            "Angle too steep \u2014 shifts load away from lower pec",
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
          "target": "Lower chest \u2014 constant cable tension",
          "equipment": "Cable Machine \u2014 High Pulley",
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
          "progression": "2x12 \u2192 add 2.5kg",
          "doThis": [
            "Pulleys at HIGHEST position",
            "Fly downward and inward \u2014 matching lower chest fiber direction",
            "Squeeze at bottom like clapping below waist"
          ],
          "neverDo": [
            "Elbows bending too much \u2014 becomes a press",
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
          "target": "Triceps \u2014 long head + lateral head",
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
          "progression": "All 4x10 \u2192 add 2.5kg",
          "doThis": [
            "Grip 30-35cm between hands",
            "Elbows tuck CLOSE to ribs as you lower",
            "Full lockout at top \u2014 feel tricep squeeze"
          ],
          "neverDo": [
            "Grip too narrow \u2014 wrist strain",
            "Elbows flaring out \u2014 becomes a chest press",
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
          "progression": "3x12 \u2192 add 2.5kg",
          "doThis": [
            "Elbows point FORWARD \u2014 they do NOT flare outward",
            "Only the forearm moves \u2014 upper arm stays locked",
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
      "title": "Pull B \u2014 Rear Delts + Back + Abs (Session 2 of 3)",
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
          "progression": "All 4x8 \u2192 add 5kg",
          "doThis": [
            "Torso at 45\u00b0 or more toward parallel to floor",
            "Pull bar to LOWER CHEST \u2014 not belly button",
            "Squeeze scapula together at top \u2014 hold 1 sec",
            "Control the descent \u2014 do not drop the bar"
          ],
          "neverDo": [
            "Standing too upright \u2014 completely different exercise",
            "Jerking lower back to initiate",
            "Pulling to belly button \u2014 lats disengage"
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
          "target": "Rear delts, external rotators \u2014 PRIORITY given rear delt weakness",
          "equipment": "Cable Machine \u2014 Rope Attachment High",
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
          "progression": "3x15 \u2192 add 2.5kg",
          "doThis": [
            "Pull rope to FACE \u2014 nose level",
            "Elbows stay HIGH \u2014 at ear level or above throughout",
            "Both hands end beside ears \u2014 make a W shape",
            "Thumbs pointing behind you at end \u2014 external rotation is the key"
          ],
          "neverDo": [
            "Elbows dropping below ears \u2014 removes rear delt activation completely",
            "Pulling to chin not to face",
            "Going too heavy \u2014 form collapses entirely"
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
          "target": "Mid back + lats \u2014 no lower back fatigue, 100% back effort",
          "equipment": "Dumbbells + Incline Bench 30\u00b0",
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
          "progression": "3x12 \u2192 add 2kg each side",
          "doThis": [
            "Lie face down \u2014 chest fully on pad throughout",
            "Row to HIPS \u2014 not armpits",
            "Squeeze shoulder blades 2 full seconds at top"
          ],
          "neverDo": [
            "Rowing to armpits \u2014 becomes rear delt row, wrong target",
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
          "target": "Rear delt isolation \u2014 chest support removes balance and lower-back demand",
          "equipment": "Dumbbells + Incline Bench (face-down, 45\u00b0)",
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
          "progression": "3x15 \u2192 add 2kg",
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
          "rawName": "\u2b50 CALISTHENICS \u2014 Chin-Ups",
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
          "target": "Brachialis + brachioradialis \u2014 pushes bicep peak UP",
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
          "progression": "3x12 \u2192 increase to 14kg",
          "doThis": [
            "Neutral grip \u2014 palms face each other THROUGHOUT",
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
          "name": "Reverse Curl (EZ Bar) \u2014 Forearms",
          "rawName": "Reverse Curl (EZ Bar) \u2014 Forearms",
          "muscleGroup": "Forearms",
          "target": "Forearms \u2014 brachioradialis + extensors, visible in everyday clothes",
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
          "progression": "2x12 \u2192 add 2.5kg",
          "doThis": [
            "Overhand grip (knuckles facing up)",
            "Elbows pinned to sides",
            "Full extension at bottom",
            "Slow the descent \u2014 forearms need eccentric loading"
          ],
          "neverDo": [
            "Using underhand grip \u2014 defeats the purpose entirely",
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
          "target": "Upper traps \u2014 builds the neck-to-shoulder line visible from behind",
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
          "progression": "3x15 \u2192 add 2.5kg",
          "doThis": [
            "Shrug STRAIGHT UP \u2014 not forward or backward",
            "Hold at top 2 full seconds \u2014 squeeze hard",
            "Full drop at bottom \u2014 stretch the trap"
          ],
          "neverDo": [
            "Rolling shoulders \u2014 no benefit and strains AC joint",
            "Rushing \u2014 the 2 sec hold IS the stimulus",
            "Going too heavy \u2014 loses the hold"
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
            "Lie flat, knees bent to 90\u00b0. Curl the pelvis UP off the floor bringing knees to chest. Lower with control."
          ],
          "neverDo": [
            "Using momentum to swing the legs. Only moving the knees without curling the pelvis \u2014 that skips the lower abs."
          ],
          "youtubeQuery": "reverse crunch floor lower abs pelvic curl proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+crunch+floor+lower+abs+pelvic+curl+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Reverse%20Crunch%20exercise%20proper%20form"
        },
        {
          "id": "ex_37",
          "name": "Plank",
          "rawName": "Plank",
          "muscleGroup": "Core (Anti-Extension)",
          "target": "Anti-extension core stability",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 x 30-40 sec",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "Hold to RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "40 sec hold",
              "defaultWeight": "",
              "defaultReps": "40 sec hold"
            },
            {
              "set": 2,
              "target": "35 sec hold",
              "defaultWeight": "",
              "defaultReps": "35 sec hold"
            },
            {
              "set": 3,
              "target": "30 sec hold",
              "defaultWeight": "",
              "defaultReps": "30 sec hold"
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
      "title": "Shoulders + Arms + Abs (Session 3 of 3)",
      "sessionName": "Shoulders + Arms + Abs",
      "primaryFocus": "3D Shoulder Caps, Bicep Peak, Horseshoe Triceps & Calves",
      "duration": "~95 min",
      "preWorkout": true,
      "preWorkoutTiming": "5:50 AM (1 scoop Karnage)",
      "warmupKey": "shoulders",
      "finisher": null,
      "cardio": null,
      "exercises": [
        {
          "id": "ex_38",
          "name": "Seated Dumbbell Shoulder Press",
          "rawName": "Seated Dumbbell Shoulder Press",
          "muscleGroup": "Deltoids (Front/Side)",
          "target": "Front + side delts \u2014 heavy strength press",
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
          "progression": "All 4x10 \u2192 increase to 16kg",
          "doThis": [
            "Bench exactly 90\u00b0",
            "Press up and slightly inward at top",
            "Lower to ear height only",
            "Core braced throughout"
          ],
          "neverDo": [
            "Leaning back \u2014 shifts load to upper chest",
            "Partial reps at top \u2014 removes delt tension",
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
          "target": "Side delts \u2014 constant tension variation to Monday dumbbells",
          "equipment": "Cable Machine \u2014 Low Pulley",
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
          "progression": "4x15 \u2192 add 2.5kg",
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
          "progression": "All 4x10 \u2192 add 2.5kg",
          "doThis": [
            "Elbows pinned to sides throughout",
            "Full extension at bottom every single rep",
            "Squeeze hard at top \u2014 hold 1 sec"
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
          "target": "Side delts \u2014 leaning increases tension at the bottom of the raise, where DB laterals are weakest",
          "equipment": "Cable Machine \u2014 Low Pulley (hold frame for lean)",
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
          "progression": "4x15 \u2192 add 1.25kg (small increments \u2014 stretch-position exercise)",
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
          "target": "Lower chest + triceps \u2014 bodyweight compound",
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
          "progression": "All 4x12 \u2192 add 5kg weight belt",
          "doThis": [
            "Forward lean 15-20\u00b0 \u2014 chest and tricep version",
            "Lower until upper arms parallel to floor",
            "Full lockout at top",
            "3 sec controlled descent"
          ],
          "neverDo": [
            "Dipping too low \u2014 shoulder impingement risk",
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
          "target": "Tricep long head \u2014 builds the horseshoe arm shape",
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
          "progression": "3x12 \u2192 add 2.5kg",
          "doThis": [
            "Bar directly above eyes to start",
            "Elbows stay fixed pointing straight up",
            "Lower toward forehead \u2014 NOT behind head",
            "Only the forearm moves"
          ],
          "neverDo": [
            "Elbows flaring outward",
            "Lowering behind head \u2014 shoulder strain risk",
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
          "target": "Soleus emphasis \u2014 complements Wednesday standing calf raise (gastrocnemius bias)",
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
          "progression": "All 4 sets full ROM \u2192 add 5kg",
          "doThis": [
            "Rise as HIGH as possible at top",
            "Knees bent throughout \u2014 this is what shifts emphasis to the soleus",
            "2 sec pause at BOTH top and bottom \u2014 non-negotiable"
          ],
          "neverDo": [
            "Partial reps \u2014 same mistake as standing version, kills the stimulus",
            "Bouncing at bottom",
            "Skipping the pauses"
          ],
          "youtubeQuery": "seated calf raise soleus full stretch and pause proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=seated+calf+raise+soleus+full+stretch+and+pause+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Seated%20Calf%20Raise%20exercise%20proper%20form"
        },
        {
          "id": "ex_45",
          "name": "Wrist Curl + Wrist Extension (Forearms)",
          "rawName": "Wrist Curl + Wrist Extension (Forearms)",
          "muscleGroup": "Forearms",
          "target": "Forearms (Flexors & Extensors)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "2 rounds x 15",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "Wrist Curl \u2014 DB x 15",
              "defaultWeight": "",
              "defaultReps": "Wrist Curl \u2014 DB x 15"
            },
            {
              "set": 2,
              "target": "Wrist Extension \u2014 DB x 15",
              "defaultWeight": "",
              "defaultReps": "Wrist Extension \u2014 DB x 15"
            },
            {
              "set": 3,
              "target": "Repeat both x 15 (2 total rounds)",
              "defaultWeight": "",
              "defaultReps": "Repeat both x 15 (2 total rounds)"
            }
          ],
          "progression": "",
          "doThis": [
            "Forearms resting on bench/thighs, full wrist ROM both directions, light weight."
          ],
          "neverDo": [
            "Using momentum. Going heavy \u2014 this is a small-muscle, high-rep exercise."
          ],
          "youtubeQuery": "dumbbell wrist curl and extension forearms hypertrophy form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=dumbbell+wrist+curl+and+extension+forearms+hypertrophy+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Wrist%20Curl%20Wrist%20Extension%20exercise%20proper%20form"
        },
        {
          "id": "ex_46",
          "name": "Reverse Pec Deck Fly",
          "rawName": "Reverse Pec Deck Fly",
          "muscleGroup": "Rear Delts",
          "target": "Rear delt isolation \u2014 machine-guided path, easiest exercise in the program to control",
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
          "progression": "3x15 \u2192 add 2.5kg",
          "doThis": [
            "Chest against the pad the entire set",
            "Slight elbow bend held constant throughout",
            "Squeeze shoulder blades together at the back",
            "Control the return \u2014 do not let the arms fly back"
          ],
          "neverDo": [
            "Using momentum to swing the handles back",
            "Shrugging shoulders up toward ears",
            "Going so heavy the range of motion shortens"
          ],
          "youtubeQuery": "reverse pec deck machine rear delt fly isolation proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=reverse+pec+deck+machine+rear+delt+fly+isolation+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Reverse%20Pec%20Deck%20Fly%20exercise%20proper%20form"
        },
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
            "Raise to 90\u00b0. Lower slowly without touching bench. Tilt pelvis upward at top for max lower ab contraction."
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
          "progression": "",
          "doThis": [
            "Decline bench, plate held at chest. Curl the torso up flexing the SPINE \u2014 this is a crunch, not a sit-up. Exhale hard at the top."
          ],
          "neverDo": [
            "Using hip flexors to yank the torso up (full sit-up motion). Going too heavy before the movement is controlled."
          ],
          "youtubeQuery": "decline weighted ab crunch plate spinal flexion proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=decline+weighted+ab+crunch+plate+spinal+flexion+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Weighted%20Ab%20Crunch%20(Decline%20Bench"
        },
        {
          "id": "ex_49",
          "name": "Hanging Knee Raise",
          "rawName": "\u2b50 CALISTHENICS \u2014 Hanging Knee Raise",
          "muscleGroup": "Lower Abs",
          "target": "Lower abs (Calisthenics knee curl)",
          "equipment": "Gym standard",
          "tempo": "Controlled (3-1-1-0)",
          "setsReps": "3 sets",
          "rest": "60 sec",
          "restSeconds": 60,
          "rir": "RIR 1",
          "warmupSets": [],
          "workingSets": [
            {
              "set": 1,
              "target": "bodyweight x 12",
              "defaultWeight": "",
              "defaultReps": "bodyweight x 12"
            },
            {
              "set": 2,
              "target": "bodyweight x 12",
              "defaultWeight": "",
              "defaultReps": "bodyweight x 12"
            },
            {
              "set": 3,
              "target": "bodyweight x 10",
              "defaultWeight": "",
              "defaultReps": "bodyweight x 10"
            }
          ],
          "progression": "",
          "doThis": [
            "Dead hang start, curl knees up toward chest using the lower abs, not momentum. Lower with control."
          ],
          "neverDo": [
            "Swinging the body. Using momentum from the shoulders instead of the abs."
          ],
          "youtubeQuery": "hanging knee raise lower abs calisthenics proper form",
          "youtubeUrl": "https://www.youtube.com/results?search_query=hanging+knee+raise+lower+abs+calisthenics+proper+form",
          "originalYoutubeUrl": "https://www.youtube.com/results?search_query=Hanging%20Knee%20Raise%20exercise%20proper%20form"
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
  ]
};

if (typeof module !== 'undefined') {
  module.exports = ROUTINE_DATA;
}
