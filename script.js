/* =========================
   BOITE A OUTILS — script.js
   (HTML: index.html, CSS: main.css)
========================= */

// -------------------------
// DATA (Fiches)
// -------------------------
const TOOLS = [
    
      // --- Cartes Exercices - Renforcement --- //

    {
    id: "planche-10",
    title: "Planche 3x 10 sec",
    category: "Exercices",
    tags: ["renforcement", "muscle", "abdos"],
    duration: "1-2 min",
    intervalTimer: { totalSec: 90, exerciseSec: 10, breakSec: 30 },   
    position: "planche",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale"],
    summary: "Renforce ton corps.",
    steps: [
      "Positionne toi en planche, sur les mains.",
      "Si tu préfères te positionner sur les coudes, fais bien attention à abaisser tes omoplates.", 
      "Ecarte les pieds à largeur de hanches pour une meilleure stabilité.",
      "Regarde le sol et rentre le menton légèrement pour protéger ta nuque.",
      "Tiens 10 secondes.",
      "Pendant la pause, mets-toi en posture du chiot. Les genoux au sol, en repos sur tes talons, les bras allongés devant et le front au sol.",
      "Fais 3 répétitions."
    ],
       low: "Version low battery: fais juste 2 répétitions.",
       stop: "Stop si douleurs ou fourmillements.",
       note: "Plus tu pratiques, plus tu renforces ton corps et plus c'est facile.",

      i18n: {
       en: {
         title: "Planck 3x 10sec",
         category: "Exercise",
         position: "planck",
         intensity: "Very gentle",
         summary: "Strengthen your body.",
         steps: [
            "Position yourself in planck posture, on your hands.",
            "If you prefer to stand on your elbows, make sure to lower your shoulder plates.",
            "Place your feet hip-width apart for better stability.",
            "Look at the floor and tuck your chin slightly to protect your neck.",
            "Hold for 10 seconds.",
            "During break time, move into puppy pose. Kneel on the floor, resting on your heels, arms extended in front of you, and forehead on the floor.",
            "Repeat 3 times."
          ]
        }
      }
    },
   {
    id: "planche-30",
    title: "Planche 3x 30 sec",
    category: "Exercices",
    tags: ["renforcement", "muscle", "abdos"],
    duration: "2-3 min",
    intervalTimer: { totalSec: 150, exerciseSec: 30, breakSec: 30 },   
    position: "planche",
    intensity: "moyen",
    modes: ["ok","fatigue_mentale"],
    summary: "Renforce ton corps.",
    steps: [
      "Positionne toi en planche, sur les mains. Ecarte les pieds à largeur de hanches pour une meilleure stabilité. Regarde le sol et rentre le menton légèrement pour protéger ta nuque.",
      "Tiens 30 secondes.",
      "Pendant la pause, mets-toi en posture du chiot. Les genoux au sol, en repos sur tes talons, les bras allongés devant et le front au sol.",
      "Fais 3 répétitions."
    ],
    low: "Version low battery: tiens juste 10 secondes.",
    stop: "Stop si douleurs ou fourmillements.",
    note: "Plus tu pratiques, plus tu renforces ton corps et plus c'est facile.",

      i18n: {
       en: {
         title: "Planck 3x 30sec",
         category: "Exercise",
         position: "planck",
         intensity: "moderate",
         summary: "Strengthen your body.",
         steps: [
            "Position yourself in planck posture. Place your feet hip-width apart for better stability. Look at the floor and tuck your chin slightly to protect your neck.",
            "Hold for 30 seconds.",
            "During break time, move into puppy pose. Kneel on the floor, resting on your heels, arms extended in front of you, and forehead on the floor.",
            "Repeat 3 times."
         ],
         low: "Low battery version: hold for just 10 seconds.",
         stop: "Stop if you experience pain or tingling.",
         note: "The more you practice, the more you strengthen your body and the easier it gets." 
       }
     }
  },

    // --- Cartes Exercices - Contracté-Relaché --- //
   
   {
    id: "contracte-relache-stress",
    title: "Contracté–relâché pour le stress",
    category: "Exercices",
    tags: ["Contracté–relâché", "stress", "douleur", "relâchement"],
    duration: "5 min",
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","fatigue_mentale","courbatures","sos"],
    summary: "Relâcher les tensions sans forcer, en alternant contraction légère et détente.",
    steps: [
      "Inspire doucement.",
      "Contracte très légèrement (mains/épaules) 3 secondes.",
      "Expire longuement, relâche complètement.",
      "Pause 10 secondes.",
      "Répète 5 fois."
    ],
    low: "Version low battery : contracte seulement les mains.",
    stop: "Stop si douleur articulaire inhabituelle, vertige, crispation.",
    note: "Ce n’est pas la performance qui apaise. C’est la permission.",

   i18n: {
    en: {
      title: "Contract-Relax for stress",
      category: "Exercises",
      position: "sitting/lying down",
      intensity: "very gentle",
      summary: "Release tension without forcing it, by alternating light contraction and relaxation.",
      steps: [
        "Inhale gently.",
        "Contract very slightly (hands/shoulders) for 3 seconds.",
        "Exhale fully, relax completely.",
        "Pause for 10 seconds.",
        "Repeat 5 times."
      ],
      low: "Low battery version: contract only the hands.",
      stop: "Stop if you experience unusual joint pain, dizziness, or muscle tension.",
      note: "It is not performance that brings peace. It is permission."
    }
  }   
   },
   {
      id: "contracte-relache-omoplates",
      title: "Contracté–relâché des omoplates",
      category: "Exercices",
      tags: ["Contracté–relâché", "stress", "douleur", "relâchement"],
      duration: "3 min",
      position: "A quatre pattes",
      intensity: "doux",
      modes: ["ok","fatigue_phys","fatigue_mentale","courbatures","sos"],
      summary: "Relâcher les tensions sans forcer, en alternant contraction légère et détente.",
      steps: [
         "Inspire doucement en position neutre.",
         "Souffle en poussant sur tes mains pour faire le dos rond, enroule ta tête en direction de ton torse en rentrant le menton.",
         "Inspire en revenant en position neutre.",
         "Souffle en creusant le torse, comme si tes omoplates pouvaient se toucher.",
         "Inspire en revenant en position neutre.", 
         "Répète 6 fois."
      ],
      low: "Version low battery : reduis l'amplitude des mouvements.",
      stop: "Stop si douleur articulaire inhabituelle, vertige, crispation.",
      note: "Ce n’est pas la performance qui apaise. C’est la permission.",
      
      i18n: {
         en: {
            title: "Shoulder plates contract-Relax",
            category: "Exercises",
            position: "On all fours",
            intensity: "gentle",
            summary: "Release tension without forcing it, by alternating light contraction and relaxation.",
            steps: [
               "Inhale gently through your nose in a neutral position.",
               "Exhale through your mouth as you push through your hands to round your back, rolling your head towards your chest and tucking your chin.",
               "Inhale as you return to a neutral position.",
               "Exhale as you draw your chest in, as if your shoulder blades could touch.",
               "Inhale as you return to a neutral position.",
               "Repeat 6 times."
            ],
       low: "Low battery version: reduce the range of movement.",
       stop: "Stop if you experience unusual joint pain, dizziness, or muscle tension.",
       note: "It is not performance that brings peace. It is permission."
    }
  }   
   },
   
  {
    id: "mobilisation-douce",
    title: "Mobilisation douce",
    category: "Exercices",
    tags: ["Mobilisation douce", "énergie", "douceur", "SED"],
    duration: "6–8 min",
    position: "assis/debout",
    intensity: "doux",
    modes: ["ok","fatigue_phys","fatigue_mentale","courbatures"],
    summary: "Réveiller le corps comme un chat: micro-cercles, amplitude mini, respiration lente.",
    steps: [
      "Cercles d’épaules (petits) x 6.",
      "Rotations de nuque très mini (sans aller au bout) x 4.",
      "Cercles poignets/chevilles x 6.",
      "Balance du poids d’un pied à l’autre x 8.",
      "Termine par 3 expirations longues."
    ],
    low: "Version low battery : uniquement poignets + chevilles.",
    stop: "Stop si instabilité, douleur vive, pincement.",
    note: "Petit mouvement = grand signal de sécurité.",

   i18n: {
    en: {
      title: "Gentle mobilisation",
      category: "Exercises",
      position: "sitting/standing",
      intensity: "gentle",
      summary: "Awaken the body like a cat: micro-circles, minimal amplitude, slow breathing.",
      steps: [
        "Shoulder circles (small) - 6 times.",
        "Very small neck rotations (without going all the way) - 4 times.",
        "Wrist/ankle circles - 6 times.",
        "Balance of weight from one foot to the other - 8 times.",
        "Finish with 3 long exhalations."
      ],
      low: "Low battery version: only wrists and ankles.",
      stop: "Stop if you experience instability, sharp pain, or pinching.",
      note: "Small movement = big safety signal."
    }
  }  
  },
  {
    id: "etirements-doux",
    title: "Étirements doux",
    category: "Exercices",
    tags: ["Étirements doux", "souplesse", "SED"],
    duration: "4–6 min",
    position: "assis",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","courbatures"],
    summary: "Étirements non-performants: on cherche le confort, pas l’amplitude.",
    steps: [
      "Étirement latéral assis (très léger) 2 respirations de chaque côté.",
      "Ouverture poitrine (mains derrière la tête, coudes ouverts) 3 respirations.",
      "Auto-étreinte (avant-bras contre avant-bras) 4 respirations.",
      "Fin : mains sur ventre, expiration longue."
    ],
    low: "Version low battery: auto-étreinte + 3 respirations.",
    stop: "Stop si hyperlaxité qui 'tire trop', douleur articulaire.",
    note: "Ton corps n’est pas un projet. C’est un vivant.",

   i18n: {
    en: {
      title: "Gentle stretches",
      category: "Exercises",
      position: "sitting",
      intensity: "very gentle",
      summary: "Non-performative stretching: the focus is on comfort, not range of motion.",
      steps: [
        "Seated side stretch (very light) 2 breaths on each side.",
        "Chest opening (hands behind head, elbows open) 3 breaths.",
        "Self-hugging (forearm against forearm) 4 breaths.",
        "End: hands on stomach, long exhalation."
      ],
      low: "Low battery version: self-hugging + 3 deep breaths.",
      stop: "Stop if hypermobility causes 'too much pulling' or joint pain.",
      note: "Your body is not a project. It is a living being."
    }
  }  
  },
   
   // --- Cartes somatiques --- //
   
   {
    id: "bodyscan",
    title: "Body scan",
    category: "Somatique",
    tags: ["Orientation","ancrage","somatique","surcharge","cohérence cardiaque","respiration","stress","douleurs"],
    duration: "2-4 min",
    position: "allongé",
    intensity: "très doux",
    modes: ["fatigue_mentale","fatigue_emo","fatigue_phys","douleurs","sos"],
    summary: "On scan le corps des pieds à la tête, calmement.",
    steps: [
      "Respire tranquillement.",
      "Commence par sentir tes pieds, tes orteils, remue les légérement si besoin, juste pour t'y connecter.",
      "Remonte tranquillement, en sentant tes chevilles, puis tes mollets, tes genoux, tes cuisses.",
      "Note mentalement si tu sens des tensions.",
      "Continue avec ton bassin, le bas de ton dos, remonte doucement en prenant le temps de sentir chaque muscle.",
      "Puis tes mains, tes poignets, remonte jusqu'aux coudes, puis les épaule, le haut du dos.",
      "Est-ce que ça tire? Note le mentalement.",
      "Puis enfin ta nuque, ta gorge, ta mâchoire, tes pomettes, ton front et le haut de ton crâne.",
      "Respire calmement."
    ],
    low: "Version low battery : juste le scan.",
    stop: "Stop si douleurs trop fortes.",
    note: "A faire idéalement avant des étirements ou cohérence cardiaque, et après pour noter une éventuellement différence.",
   
   i18n: {
    en: {
      title: "Body scan",
      category: "Somatic",
      position: "lying down",
      intensity: "very gentle",
      summary: "Scan the body from feet to head, calmly.",
      steps: [
        "Breathe gently.",
        "Start by noticing your feet and toes; wiggle them slightly if needed, just to connect.",
        "Move up slowly: ankles, calves, knees, thighs.",
        "Mentally note any tension you notice.",
        "Continue with your pelvis and lower back; move up slowly, taking time to feel each muscle.",
        "Then your hands and wrists, up to elbows, shoulders, and upper back.",
        "Is anything pulling or tight? Note it.",
        "Finally your neck, throat, jaw, cheeks, forehead, and the top of your head.",
        "Keep breathing calmly."
      ],
      low: "Low battery version: just do the scan.",
      stop: "Stop if pain becomes too intense.",
      note: "Ideally do this before stretching or heart coherence, and again after to notice any change."
    }
  }
  }, 
  {
    id: "orientation",
    title: "Orientation",
    category: "Somatique",
    tags: ["Orientation", "ancrage", "somatique", "surcharge"],
    duration: "2–3 min",
    position: "assis/debout",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","sos"],
    summary: "Revenir au présent via les yeux, en cherchant le neutre/agréable.",
    steps: [
      "Regarde 5 objets autour de toi, lentement.",
      "Nomme 3 couleurs.",
      "Trouve 1 détail agréable (texture/lumière).",
      "Pose une main sur le cœur, expire longuement."
    ],
    low: "Version low battery : 3 objets + 1 expiration longue.",
    stop: "Stop si ça augmente l’anxiété: fais uniquement l’expiration longue.",
    note: "Tu n’as rien à prouver. Tu te retrouves.",

   i18n: {
    en: {
      title: "Orientation",
      category: "Somatic",
      position: "sitting/standing",
      intensity: "very gentle",
      summary: "Returning to the present through the eyes, seeking the neutral/pleasant.",
      steps: [
        "Look at 5 objects around you, slowly.",
        "Name 3 colours you can see.",
        "Find 1 pleasant detail (texture/light).",
        "Place a hand on your heart, exhale slowly."
      ],
      low: "Low battery version: 3 objects + 1 long exhalation.",
      stop: "Stop if it increases anxiety: just do the long exhalation.",
      note: "You have nothing to prove. You're finding yourself."
    }
  }   
  },
  {
    id: "ancrage5sens",
    title: "Encrage des 5 sens",
    category: "Somatique",
    tags: ["Orientation", "ancrage", "somatique", "surcharge"],
    duration: "2–3 min",
    position: "assis/debout",
    intensity: "très doux",
    modes: ["fatigue_mentale","fatigue_emo","sos"],
    summary: "Revenir en pleine conscience en activant les 5 sens.",
    steps: [
      "Repère 5 choses que tu peux voir.",
      "Repère 4 choses que tu peux toucher.",
      "Repère 3 choses que tu peux entendre.",
      "Capte 2 senteurs que tu peux sentir.",
      "Savoure 1 chose que tu peux goûter."
    ],
    low: "Version low battery: 3 objets + 1 expiration longue.",
    stop: "Stop si ça augmente l’anxiété: fais uniquement l’expiration longue.",
    note: "Tu n’as rien à prouver. Tu te retrouves.",

   i18n: {
    en: {
      title: "Anchoring the 5 senses",
      category: "Somatic",
      position: "sitting/standing",
      intensity: "very gentle",
      summary: "Returning to full awareness by activating the 5 senses.",
      steps: [
        "Identify 5 things you can see.",
        "Identify 4 things you can touch.",
        "Identify 3 things you can hear.",
        "Identify 2 scents that you can smell.",
        "Savour 1 thing you can taste." 
      ],
      low: "Low battery version: 3 objects + 1 long exhalation.",
      stop: "Stop if it increases anxiety: just do the long exhalation.",
      note: "You are safe. Your body is a safe place."
    }
  }  
  }, 
  {
    id: "auto-contact",
    title: "Auto-contact sécurisant",
    category: "Somatique",
    tags: ["Auto-contact", "somatique", "sécurité"],
    duration: "1–3 min",
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","sos"],
    summary: "Le toucher comme signal de sécurité: paumes + pression douce + expirations longues.",
    steps: [
      "Une main sur le cœur, une sur le ventre.",
      "Pression très douce (comme une couverture).",
      "3 expirations longues.",
      "Option : tapotements légers sur les bras."
    ],
    low: "Version low battery: une main sur le cœur + 2 expirations.",
    stop: "Stop si le contact te met mal à l’aise: main sur la cuisse.",
    note: "Sécurité d’abord. Toujours.",

   i18n: {
    en: {
      title: "Self-soothing touch",
      category: "Somatic",
      position: "sitting/lying down",
      intensity: "very gentle",
      summary: "Touch as a safety signal: palms + gentle pressure + long exhalations.",
      steps: [
        "One hand on the heart, one on the stomach.",
        "Very gentle pressure (like a blanket).",
        "3 long exhalations.",
        "Option: light tapping on the arms." 
      ],
      low: "Low battery version: a hand on the heart + 2 exhalations.",
      stop: "Stop if the contact makes you uncomfortable: hand on thigh.",
      note: "Safety first. Always."
    }
  }   
  },
  {
    id: "pendulation",
    title: "Pendulation",
    category: "Somatique",
    tags: ["Pendulation", "somatique", "douleur"],
    duration: "4–6 min",
    position: "assis",
    intensity: "doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","fatigue_phys"],
    summary: "Aller-retour entre une zone OK et une zone tendue pour aider le système à ne pas se figer.",
    steps: [
      "Choisis une zone neutre (main, pieds) = Zone A.",
      "Choisis une zone tendue (nuque, mâchoire) = Zone B.",
      "Observe 10 sec la Zone A (respire).",
      "Observe 5 sec la Zone B (sans se laisser envahir).",
      "Retour Zone A. Répète 5 fois."
    ],
    low: "Version low battery: 2 allers-retours seulement.",
    stop: "Stop si la Zone B déclenche panique: reste sur Zone A.",
    note: "On dose. On n’envahit pas.",

     i18n: {
       en: {
         title: "Pendulation",
         category: "Somatic",
         position: "sitting",
         intensity: "gentle",
         summary: "Moving back and forth between an OK zone and a tense zone to help the system not to freeze up.",
         steps: [
           "Choose a neutral zone (hand, feet) = Zone A.",
           "Choose a tense area (neck, jaw) = Zone B.",
           "Observe Zone A for 10 seconds (breathe).",
           "Observe Zone B for 5 seconds (without getting pulled in).",
           "Go back to Zone A. Repeat 5 times." 
         ],
         low: "Low battery version: 2 times only.",
         stop: "Stop if Zone B triggers panic: stay in Zone A.",
         note: "We measure it out. We don't overdo it."
       }
     }   
  },

    // --- Cartes Respiration --- //

  {
    id: "coherence",
    title: "Cohérence cardiaque",
    category: "Respiration",
    tags: ["cohérence cardiaque", "respiration", "stress"],
    duration: "5 min",
    timer: { totalSec: 300, inhaleSec: 5, exhaleSec: 5 }, 
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["ok","fatigue_mentale","fatigue_emo","fatigue_phys","douleurs","sos"],
    summary: "Respiration régulière : inspire 5 secondes, expire 5 secondes.",
    steps: [
      "Inspire par le nez 5 secondes.",
      "Expire 5 secondes"
    ],
    low: "Version low battery: 5 cycles.",
    stop: "Stop si essoufflement: respiration naturelle + expirations longues.",
    note: "Pas besoin de forcer, le rythme vient naturellement.",

     i18n: {
       en: {
         title: "Heart coherence",
         category: "Breathing",
         position: "sitting/lying down",
         intensity: "very gentle",
         summary: "Regular breathing: inhale for 5 seconds, exhale for 5 seconds.",
         steps: [
           "Inhale through your nose for 5 seconds.",
           "Exhale for 5 seconds." 
         ],
         low: "Low battery version: 5 rounds.",
         stop: "Stop if short of breath: natural breathing + long exhalations.",
         note: "No need to force it, pacing will come naturally."
       }
     }  
  }, 
  {
    id: "soupir",
    title: "Soupir physiologique",
    category: "Respiration",
    tags: ["soupir", "respiration", "sos", "stress"],
    duration: "1 min",
    position: "assis/debout",
    intensity: "très doux",
    modes: ["fatigue_phys","fatigue_emo","fatigue_mentale","douleurs","sos"],
    summary: "Reset rapide: deux petites inspirations + une longue expiration.",
    steps: [
      "Inspire normalement.",
      "Re-inspire un petit 'complément'.",
      "Expire très longuement par la bouche.",
      "Répète 3 fois."
    ],
    low: "Version low battery: 1 seule fois.",
    stop: "Stop si vertige: fais une expiration longue simple.",
    note: "Mini reset quand tout déborde.",

      i18n: {
       en: {
         title: "Physiological sigh",
         category: "Breathing",
         position: "sitting/standing",
         intensity: "very gentle",
         summary: "Quick reset: two short breaths + one long exhale.",
         steps: [
           "Inhale normally.",
           "Re-inhale a little 'complement'.",
           "Exhale very slowly with your mouth.",
           "Repeat 3 times." 
         ],
         low: "Low battery version: just 1 time.",
         stop: "Stop if you feel dizzy: take a simple, long exhalation.",
         note: "Mini reset when everything is overwhelming."
       }
     } 
  },
  {
    id: "check-energie",
    title: "Check énergie",
    category: "Pacing",
    tags: ["Check énergie", "pacing", "cuillères"],
    duration: "2–4 min",
    position: "assis",
    intensity: "très doux",
    modes: ["ok","fatigue_phys","fatigue_mentale","fatigue_emo","sos"],
    summary: "Faire le point sans jugement: énergie, douleur, priorités vitales.",
    steps: [
      "Énergie 0–10 ?",
      "Douleur 0–10 ?",
      "1 besoin vital (eau / manger / repos) ?",
      "Choisis 1 micro-action."
    ],
    low: "Version low battery: énergie + 1 micro-action.",
    stop: "Si ça stresse: remplace par ‘je bois un verre d’eau’.",
    note: "Tu ajustes. Tu ne t’arraches pas.",

     i18n: {
       en: {
         title: "Energy check",
         category: "Pacing",
         position: "sitting",
         intensity: "very gentle",
         summary: "A gentle check-in: energy, pain, and essential needs.",
         steps: [
           "Energy 0-10?",
           "Pain 0-10?",
           "1 essential need (water / food / rest)?",  
           "Choose 1 minor action." 
         ],
         low: "Low battery version: energy + 1 minor action.",
         stop: "If it's stressful: replace it with 'I'm drinking a glass of water'.",
         note: "You adjust. You don't tear yourself apart."
       }
     } 
  },
  {
    id: "mvd",
    title: "Minimum vital",
    category: "Pacing",
    tags: ["Minimum vital", "pacing", "fatigue"],
    duration: "3–6 min",
    position: "assis",
    intensity: "très doux",
    modes: ["fatigue_phys","fatigue_mentale","fatigue_emo","douleurs","sos"],
    summary: "Construire une journée 'minimum vital' pour arrêter de se battre contre soi.",
    steps: [
      "3 besoins: eau/manger/repos (choisis 1).",
      "1 mini tâche: 5 minutes max.",
      "1 récup: respiration/sieste/poser le corps.",
      "Tout le reste = bonus."
    ],
    low: "Version low battery: eau + repos.",
    stop: "Stop si honte: ‘aujourd’hui je me protège’.",
    note: "Minimum vital = victoire.",

     i18n: {
       en: {
         title: "Vital minimum",
         category: "Pacing",
         position: "sitting",
         intensity: "very gentle",
         summary: "Build a 'vital minimum' day to stop fighting against yourself.",
         steps: [
           "3 needs: water/food/rest (choose 1).",
           "1 mini task: 5 minutes max.",
           "1 recovery: breathing/nap/resting the body.",  
           "Anything else = bonus." 
         ],
         low: "Low battery version: water + rest.",
         stop: "If you're feeling ashamed, say this: 'Today I'm protecting myself'.",
         note: "Vital minimum = victory."
       }
     } 
  },
  {
    id: "nuque",
    title: "Nuque — base du crâne",
    category: "Douleur",
    tags: ["Nuque", "douleur", "chaleur"],
    duration: "3–10 min",
    position: "assis/allongé",
    intensity: "très doux",
    modes: ["fatigue_phys","douleurs","sos"],
    summary: "Protocole doux: chaleur + respiration + relâchement de mâchoire.",
    steps: [
      "Chaleur à la base du crâne (si ok).",
      "Respire longuement 6 fois.",
      "Relâche la langue (elle se décolle du palais)."
    ],
    low: "Version low battery: chaleur + 3 respirations.",
    stop: "Stop si chaleur impossible: remplace par mains tièdes sur nuque.",
    note: "Tu ne combats pas. Tu apaises.",

     i18n: {
       en: {
         title: "Neck - base of skull",
         category: "Pain",
         position: "sitting/lying down",
         intensity: "very gentle",
         summary: "Gentle protocol: warmth + breathing + jaw relaxation.",
         steps: [
           "Warmth at the base of the skull (if ok).",
           "Breathe in and out slowly 6 times.",
           "Relax your tongue (detach it from the palate)."
         ],
         low: "Low battery version: warmth + 3 breaths.",
         stop: "Stop if warmth is too much: replace with warm hands on the back of the neck.",
         note: "You don't fight. You soothe."
       }
     }
  },
  {
    id: "machoire",
    title: "Mâchoire — déverrouillage doux",
    category: "Douleur",
    tags: ["Mâchoire", "douleur", "trijumeau"],
    duration: "2–5 min",
    position: "assis",
    intensity: "très doux",
    modes: ["fatigue_phys","fatigue_mentale","douleurs","sos"],
    summary: "Décharger la mâchoire sans étirer fort.",
    steps: [
      "Lèvres fermées, mâchoires desserrées.",
      "Langue au repos (bas de bouche).",
      "Mini ‘oui/non’ (très petit).",
      "2 soupirs physiologiques."
    ],
    low: "Version low battery: mâchoires desserrées + 1 soupir.",
    stop: "Stop si douleur trijumeau: uniquement respiration + dents séparées.",
    note: "La mâchoire peut être une armure. On l’invite à lâcher.",

     i18n: {
       en: {
         title: "Jaws — soft unlocking",
         category: "Pain",
         position: "sitting",
         intensity: "very gentle",
         summary: "Release tension in the jaws without stretching too hard.",
         steps: [
           "Lips closed, jaws unclenched.",
           "Tongue at rest (lower part of the mouth).",
           "Mini ‘yes/no’ (very small).",
           "2 physiological sighs." 
         ],
         low: "Low battery version: unclenched jaws + 1 sigh.",
         stop: "Stop if trigeminal pain: only breathing + unclenched jaws.",
         note: "Jaws can be like a shield. We invite them to let go."
       }
     }
  },
  {
    id: "rouleau-picots",
    title: "Rouleau à picots (haut du dos)",
    category: "Douleur",
    tags: ["Rouleau", "rouleau à picots", "fascia", "dos", "récup", "douleur"],
    duration: "5–7 min",
    position: "allongé",
    intensity: "doux à modéré",
    modes: ["fatigue_phys","douleurs","sos"],
    summary: "Décompression + fascia : on dose pour éviter l’habituation (pas tous les jours).",
    steps: [
      "Pose-toi sur le rouleau (haut/milieu du dos), bassin relevé, mains derrière la tête en soutien.",
      "Micro-roule très lentement (amplitude mini) 20–30 sec.",
      "Trouve un point de tension et reste dessus, repose le bassin au sol sans trop cambrer.",  
      "Inspire en écartant les coudes et en abaissant le haut du dos vers le sol.",
      "Expire en remontant, sans forcer. C'est OK si tu entends des 'cracs', c'est que les tensions se relâchent.", 
      "Répète 3 fois pour chaque point douloureux."
    ],
    low: "Version low battery: 1 minute en roulant doucement + respiration.",
    stop: "Stop si douleur vive, engourdissement, pincement nerveux.",
    note: "Pas tous les jours: laisse au corps le temps d’intégrer (sinon il s’habitue).",

     i18n: {
       en: {
         title: "Spiky roll - upper back",
         category: "Pain",
         position: "lying down",
         intensity: "very gentle",
         summary: "Decompression + fascia: don't use every day to avoid habituation.",
         steps: [
           "Lay down on the spiky roll (upper/middle back), pelvis raised, hands behind your head for support.",
           "Micro-roll very slowly (minimum amplitude) 20–30 sec.",
           "Find a tension spot and stay on it, rest your pelvis on the ground without arching your back too much.",
           "Inhale while openning your elbows and lowering your upper back towards the floor.",
           "Exhale as you rise, without forcing it. It's OK if you hear 'cracks', it means the tension is being released.",
           "Repeat 3 times for each tension spot." 
         ],
         low: "Low battery version: 1 minute of micro-roll + breathing.",
         stop: "Stop if you experience sharp pain, numbness, or nerve pinching.",
         note: "Not every day: allow the body time to integrate (otherwise it gets used to it)." 
       }
     }
  },
  {
    id: "rouleau-picots-nuque",
    title: "Rouleau à picots (nuque)",
    category: "Douleur",
    tags: ["Rouleau", "rouleau à picots", "fascia", "dos", "récup", "douleur"],
    duration: "5 min",
    position: "allongé",
    intensity: "moyen",
    modes: ["fatigue_phys","douleurs","sos"],
    summary: "Décompression + fascia : on dose pour éviter l’habituation (pas tous les jours).",
    steps: [
      "Pose-toi le rouleau sous ta nuque, le corps bien à plat au sol, et les bras le long du corps.",
      "Tourne la tête de gauche à droite, puis de droite à gauche, tout doucement pendant 20 sec.",
      "N'oublie pas de respirer!", 
      "Trouve un point de tension et reste dessus.",
      "Tout en restant sur le point de tension, monte la tête de haut en bas. Aide toi de tes yeux en regardant en haut, puis en bas.",  
      "Répète 6 fois pour chaque point douloureux."
    ],
    low: "Version low battery: 1 minute en tourant la tête doucement d'un côté à l'autre + respiration.",
    stop: "Stop si douleur vive, engourdissement, pincement nerveux.",
    note: "Pas tous les jours: laisse au corps le temps d’intégrer (sinon il s’habitue).",

     i18n: {
       en: {
         title: "Spiky roll - neck",
         category: "Pain",
         position: "lying down",
         intensity: "moderate",
         summary: "Decompression + fascia: don't use every day to avoid habituation.",
         steps: [
           "Place the spiky roll under your neck, with your body flat on the floor and your arms at your sides.",
           "Turn your head from left to right, then from right to left, very slowly for 20 seconds.",
           "Don't forget to breath!",
           "Find a tension spot and stay on it.",
           "While remaining on the tension spot, move your head up and down. Use your eyes to help, by looking up, then down.",
           "Repeat 6 times for each tension spot." 
         ],
         low: "Low battery version: 1 minute gently turning your head from side to side + breathing.",
         stop: "Stop if you experience sharp pain, numbness, or nerve pinching.",
         note: "Not every day: allow the body time to integrate (otherwise it gets used to it)." 
       }
     }
  }, 
  {
    id: "balle-fascia-trapeze",
    title: "Balle fascia - trapèze",
    category: "Douleur",
    tags: ["Balle fascia", "Balle", "trapèze", "épaule", "fascia", "nuque"],
    duration: "2–6 min",
    position: "allongé",
    intensity: "moyen",
    modes: ["ok","fatigue_phys","douleurs","sos"],
    summary: "Déverrouillage doux : pression + mouvement du bras.",
    steps: [
      "Allonge-toi sur le dos.",
      "Place la balle derrière le trapèze (pas sur l’os).",
      "Lève le bras du côté concerné en inspirant, puis abaisse-le lentement (≥ 6 fois).",
      "Expiration longue sur la descente.",
      "Termine avec 3 micro-cercles d’épaule."
    ],
    low: "Version low battery: balle en place + 3 expirations longues.",
    stop: "Stop si fourmillements, douleur nerveuse, douleur aiguë, vertige.",
    note: "C’est la lenteur qui fait le travail. On n’attaque pas le point.",

     i18n: {
       en: {
         title: "Fascia ball - trapezius",
         category: "Pain",
         position: "lying down",
         intensity: "moderate",
         summary: "Soft unlocking: pressure + arm movement.",
         steps: [
           "Lie down on your back.",
           "Place the ball behind the trapezius at the tension spot (not on the bone).",
           "Raise the arm on the affected side while inhaling, then lower it slowly (≥ 6 times).",
           "Long exhalation on the descent.",
           "Finish with 3 gentle shoulder circles." 
         ],
         low: "Low battery version: ball in place + 3 long exhalations.",
         stop: "Stop if you experience tingling, nerve pain, acute pain, or dizziness.",
         note: "It's the slowness that does the work. We don't attack the tension spot." 
       }
     }
  },
   {
    id: "dance-party",
    title: "Dance party",
    category: "Somatique",
    tags: ["Danse", "musique", "lâché prise", "bouger", "joie"],
    duration: "2–6 min",
    position: "debout",
    intensity: "doux",
    modes: ["ok","fatigue_mentale","fatigue_emo"],
    summary: "Danse, bouge, sens ton corps.",
    steps: [
      "Mets une musique qui te donne envie de bouger.",
      "Danse comme tu le souhaites.",
      "Evite les mouvements trop brusques",
      "Laisse ton corps s'exprimer au rythme de la musique",
      "Sens comme la détente s'étend sur toi",
      "Fin : Secoue les bras et les jambes."
    ],
    low: "Version low battery: juste écouter la musique et se balancer tranquillement.",
    stop: "Stop si fourmillements, douleur nerveuse, douleur aiguë, vertige.",
    note: "C’est le mouvement et la joie qui font le travail.",

      i18n: {
       en: {
         title: "Dance party",
         category: "Somatic",
         position: "standing",
         intensity: "gentle",
         summary: "Danse, move, feel your body.",
         steps: [
            "Put on some music that makes you want to move.",
            "Dance however you like.",
            "Avoid sudden movements.",
            "Let your body express itself to the rhythm of the music.",
            "Feel the relaxation spreading over you.",
            "Finish by shaking your arms and legs."
         ],
         low: "Low battery version: just listen to the music and sway gently.",
         stop: "Stop if you experience tingling, nerve pain, acute pain, or dizziness.",
         note: "It is movement and joy that do the work." 
       }
     }
  }

    
];

// -------------------------
// State
// -------------------------

const state = {
   mode: "",
   intensityFilter: "",
   query: "",
   filter: "",
   showFavs: false,
   favorites: new Set(),
   lang: "fr", 
};

// -------------------------
// Storage keys
// -------------------------

const LS_FAVS = "toolbox_favorites_v1";
const LS_THEME = "toolbox_theme_v1";
const LS_LANG = "toolbox_lang_v1";

// -------------------------
// DOM
// -------------------------
const grid = document.getElementById("grid");
const searchInput = document.getElementById("search");
const activeFilter = document.getElementById("activeFilter");
const clearFiltersBtn = document.getElementById("clearFilters");

const favBtn = document.getElementById("toggleFavs");
const favCount = document.getElementById("favCount");
const themeBtn = document.getElementById("toggleTheme");
const langBtn = document.getElementById("toggleLang");

const toolModal = document.getElementById("toolModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const breathTimer = document.getElementById("breathTimer");
const btClose = document.getElementById("btClose");
const btStart = document.getElementById("btStart");
const btStop = document.getElementById("btStop");
const btReset = document.getElementById("btReset");
const btPhase = document.getElementById("btPhase");
const btRemaining = document.getElementById("btRemaining");
const breathOrb = breathTimer ? breathTimer.querySelector(".breath-orb") : null;
const breathOrbInner = breathTimer ? breathTimer.querySelector(".breath-orb-inner") : null;
const btCount = document.getElementById("btCount");

const intervalTimer = document.getElementById("intervalTimer");
const itClose = document.getElementById("itClose");
const itStart = document.getElementById("itStart");
const itStop = document.getElementById("itStop");
const itReset = document.getElementById("itReset");
const itPhase = document.getElementById("itPhase");
const itRemaining = document.getElementById("itRemaining");
const intervalBar = intervalTimer ? intervalTimer.querySelector(".interval-bar") : null;
const intervalBarInner = intervalTimer ? intervalTimer.querySelector(".interval-bar-inner") : null;
const itCount = document.getElementById("itCount");

const breath2min = document.getElementById("breath2min");
const randomTool = document.getElementById("randomTool");

const customInterval = document.getElementById("customInterval");
const customIntervalSetup = document.getElementById("customIntervalSetup");
const cisClose = document.getElementById("cisClose");
const cisStart = document.getElementById("cisStart");
const cisExercise = document.getElementById("cisExercise");
const cisBreak = document.getElementById("cisBreak");
const cisRounds = document.getElementById("cisRounds");

// -------------------------
// Utils
// -------------------------
function normalize(s){
  return (s || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

function toolText(tool, key){
  const lang = state.lang || "fr";
  // priorité: tool.i18n[lang][key]
  const v = tool?.i18n?.[lang]?.[key];
  if(v !== undefined && v !== null) return v;
  // fallback: tool[key]
  return tool?.[key];
}

function toolArray(tool, key){
  const v = toolText(tool, key);
  return Array.isArray(v) ? v : [];
}

function fmt(sec){
  const m = Math.floor(sec/60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2,"0")}`;
}

function safeShowModal(d){
  try{
    if(d && typeof d.showModal === "function"){
      d.showModal();
      return true;
    }
  }catch(e){}
  return false;
}

// -------------------------
// i18n (UI only)
// -------------------------
const LANG_FR = "fr";
const LANG_EN = "en";

const I18N = {
  fr: {
    brand_title: "Boîte à outils",

    // actions FR
    "nav.actions.favs":"★ Favoris",
    theme_dark: "🌙 Mode nuit",
    theme_light: "☀️ Mode jour",
    "nav.actions.reset": "↺ Réinitialiser",
    lang: "🇬🇧 EN", 
    search_placeholder: "Rechercher un outil…",

    // nav FR
    "nav_exercices": "Exercices",
    "nav.filters.reinforcement":"Renforcement", 
    "nav.filters.contractRelax":"Contracté–relâché",
    "nav.filters.softMobility":"Mobilisation douce",
    "nav.filters.softStretch":"Étirements doux",
     
    "nav_somatic": "Somatique",
    "nav.filters.orientation":"Orientation",
    "nav.filters.pendulation":"Pendulation",
    "nav.filters.selfContact":"Auto-contact",
     
    "nav_breath": "Respiration",
    "nav.filters.heartCoherence":"Cohérence cardiaque",
    "nav.filters.physiologicalSigh":"Soupir physiologique", 
     
    "nav_pacing": "Pacing",
    "nav.filters.energyCheck":"Check énergie",
    "nav.filters.minimumViableDay":"Minimum vital",
     
    "nav_pain": "Douleur",
    "nav.filters.neck":"Nuque",
    "nav.filters.jaw":"Mâchoire",
    "nav.filters.spikyRoller":"Rouleau à picots",
    "nav.filters.fasciaBall":"Balle fascia",
     
     // hero FR
     hero_title: "Ton sanctuaire de régulation",
     hero_subtitle: "Des outils doux pour apaiser le système nerveux, la douleur et l’énergie.",
     breath2min: "🌬 Respiration 2 min",
     random_tool: "🎲 Outil aléatoire",
     custom_interval: "⏱️ Timer libre",
     
    // modes FR
    "modes.title": "Mon état du moment...",
    "modes.ok": "🌿 OK",
    "modes.fatiguePhys": "🫩 Fatigue physique",
    "modes.fatigueMental": "🤯 Fatigue mental",
    "modes.fatigueEmo": "🥺 Fatigue émotionnelle",
    "modes.aches": "😬 Courbatures",
    "modes.pain": "😣 Douleurs",
    "modes.sos": "🔥 SOS", 

     // intensity FR
     "intensity.title": "Intensité souhaitée",
     "intensity.all": "Toutes",
     "intensity.verygentle": "🐛 Très doux",
     "intensity.gentle": "🦋 Doux",
     "intensity.moderate": "✌️ Moyenne",
     "intensity.high": "💪 Élevée",
     
    // library FR
    "library.activeFilter": "Filtre actif :",
    none: "Aucun",

    // empty state FR
    empty_title: "Aucun résultat",
    empty_help: "Essaie de changer le mode, enlever les favoris, ou supprimer le filtre.",

    // cards FR
    open: "Ouvrir",
    fav: "Favori",

    // modal FR
    steps: "Étapes",
    low: "🌥 Low battery :",
    stop: "🔥 Stop si :",
    note: "✨ Note :",
    start_timer: "⏱ Lancer le timer",
    "breath.timer.title": "🌬 Timer respiration",
    "interval.timer.title": "⏱️ Timer à intervale", 

    // timer FR
    ready: "Ready?",
    inhale: "Inspire…",
    exhale: "Expire…",
    exercise: "Exercice.",
    break: "Pause.", 
    done: "Terminé 🌿",
    "timer.start": "Démarrer",
    "timer.stop": "Stop",
    "timer.reset": "Reset" 
  },

  en: {
    // brand EN
    brand_title: "Toolbox",

    // actions EN
    "nav.actions.favs": "★ Favorites",
    theme_dark: "🌙 Dark mode",
    theme_light: "☀️ Light mode",
    "nav.actions.reset": "↺ Reset",
    lang: "🇫🇷 FR", 
    search_placeholder: "Search a tool…",

    // nav EN
    "nav_exercices": "Exercises",
    "nav.filters.reinforcement":"Reinforcement", 
    "nav.filters.contractRelax":"Contract–relax",
    "nav.filters.softMobility":"Soft mobility",
    "nav.filters.softStretch":"Soft stretch",

    "nav_somatic": "Somatic",
    "nav.filters.orientation":"Orientation",
    "nav.filters.pendulation":"Pendulation",
    "nav.filters.selfContact":"Self-contact",
     
    "nav_breath": "Breathing",
    "nav.filters.heartCoherence":"Heart coherence",
    "nav.filters.physiologicalSigh":"Physiological sigh", 
     
    "nav_pacing": "Pacing",
    "nav.filters.energyCheck":"Energy check",
    "nav.filters.minimumViableDay":"Vital minimum",
     
    "nav_pain": "Pain",
    "nav.filters.neck":"Neck",
    "nav.filters.jaw":"Jaws",
    "nav.filters.spikyRoller":"Spiky roll",
    "nav.filters.fasciaBall":"Fascia ball", 

     // hero EN
     hero_title: "Your regulation sanctuary",
     hero_subtitle: "Gentle tools to calm your nervous system, pain, and energy.",
     breath2min: "🌬 Breathing 2 min",
     random_tool: "🎲 Random tool",
     custom_interval: "⏱️ Custom timer",

    // modes EN
    "modes.title": "How do you feel right now…",
    "modes.ok": "🌿 OK",
    "modes.fatiguePhys": "🫩 Physical fatigue",
    "modes.fatigueMental": "🤯 Mental fatigue",
    "modes.fatigueEmo": "🥺 Emotional fatigue",
    "modes.aches": "😬 Muscle aches",
    "modes.pain": "😣 Pain",
    "modes.sos": "🔥 SOS", 

      // intensity EN
     "intensity.title": "Intensity",
     "intensity.all": "All",
     "intensity.verygentle": "🐛 Very gentle",
     "intensity.gentle": "🦋 Gentle",
     "intensity.moderate": "✌️ Moderate",
     "intensity.high": "💪 High",
   
    // library EN
    "library.activeFilter": "Active filter:",
    none: "None",

    // empty state EN
    empty_title: "No results",
    empty_help: "Try changing the mode, turning off favorites, or clearing the filter.",

    // cards EN
    open: "Open",
    fav: "Favorite",

    // modal EN
    steps: "Steps",
    low: "🌥 Low battery:",
    stop: "🔥 Stop if:",
    note: "✨ Note:",
    start_timer: "⏱ Start timer",
    "breath.timer.title": "🌬 Breathing timer",
    "interval.timer.title": "⏱️ Interval timer", 

    // timer EN
    ready: "Ready?",
    inhale: "Inhale…",
    exhale: "Exhale…",
    exercise: "Exercise.",
    break: "Break.", 
    done: "All done 🌿",
    "timer.start": "Start",
    "timer.stop": "Stop",
    "timer.reset": "Reset"
  }
};

function t(key){
  const lang = state.lang || LANG_FR;
  return (I18N[lang] && I18N[lang][key]) || I18N.fr[key] || key;
}

function applyLangToStaticHtml(){
  // 1) lang attr
  document.documentElement.setAttribute("lang", state.lang || LANG_FR);

  // 2) éléments texte : [data-i18n="..."]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if(!k) return;
    el.textContent = t(k);
  });
   
  // 3) placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const k = el.getAttribute("data-i18n-placeholder");
    if(k === "nav.search.placeholder"){
      el.setAttribute("placeholder", t("search_placeholder"));
    }
  });

  // 4) textes “connus” (ceux que tu as en dur dans HTML sans data-i18n partout)
  // -> on cible par ID, stable et sûr :
   const brandStrong = document.querySelector(".brand-title strong");
   if(brandStrong) brandStrong.textContent = t("brand_title");
   
   const heroH1 = document.querySelector(".hero h1");
   if(heroH1) heroH1.textContent = t("hero_title");
   
   const heroP = document.querySelector(".hero p");
   if(heroP) heroP.textContent = t("hero_subtitle");
   
   if(breath2min) breath2min.textContent = t("breath2min");
   if(randomTool) randomTool.textContent = t("random_tool");
   if(customInterval) customInterval.textContent = t("custom_interval");

   // search
   if(searchInput) searchInput.setAttribute("placeholder", t("search_placeholder"));
}

function setLang(next){
  state.lang = (next === LANG_EN) ? LANG_EN : LANG_FR;
  try{ localStorage.setItem(LS_LANG, state.lang); }catch(e){}

  // bouton lang
  if(langBtn){
     const isEn = state.lang === LANG_EN;
     langBtn.setAttribute("aria-pressed", isEn ? "true" : "false");
  // le bouton affiche la langue vers laquelle on va switcher
     langBtn.textContent = isEn ? "🇫🇷 FR" : "🇬🇧 EN";
   }

  applyLangToStaticHtml();
  updateThemeButton();
  render();
}

function loadLang(){
  try{
    const saved = localStorage.getItem(LS_LANG);
    setLang(saved === LANG_EN ? LANG_EN : LANG_FR);
  }catch(e){
    setLang(LANG_FR);
  }
}


// -------------------------
// Favorites
// -------------------------
function loadFavorites(){
  try{
    const raw = localStorage.getItem(LS_FAVS);
    if(!raw) return;
    const arr = JSON.parse(raw);
    if(Array.isArray(arr)) state.favorites = new Set(arr);
  }catch(e){}
}

function saveFavorites(){
  try{
    localStorage.setItem(LS_FAVS, JSON.stringify([...state.favorites]));
  }catch(e){}
}

function toggleFavorite(id){
  if(state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  saveFavorites();
}

// -------------------------
// Theme
// -------------------------
const THEME_DARK = "dark";
const THEME_LIGHT = "light";

function currentTheme(){
  return document.documentElement.getAttribute("data-theme") === THEME_DARK
    ? THEME_DARK
    : THEME_LIGHT;
}

function updateThemeButton(){
  if(!themeBtn) return;
  const isDark = currentTheme() === THEME_DARK;

  themeBtn.textContent = isDark ? t("theme_light") : t("theme_dark");
  themeBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
  themeBtn.setAttribute("title", isDark ? "Switch to day mode" : "Switch to night mode");
}

function applyTheme(theme){
  const root = document.documentElement;

  if(theme === THEME_DARK){
    root.setAttribute("data-theme", THEME_DARK);
  }else{
    root.removeAttribute("data-theme");
  }

  updateThemeButton();
}

function loadTheme(){
  try{
    const saved = localStorage.getItem(LS_THEME);
    applyTheme(saved === THEME_DARK ? THEME_DARK : THEME_LIGHT);
  }catch(e){
    applyTheme(THEME_LIGHT);
  }
}

function saveTheme(theme){
  try{ localStorage.setItem(LS_THEME, theme); }catch(e){}
}

// -------------------------
// Filters
// -------------------------
function matchesMode(tool){
  // Si aucun mode choisi -> on laisse passer tout le monde
  if(!state.mode) return true;

  const toolModes = tool.modes || [];

  // Cas normal
  if(toolModes.includes(state.mode)) return true;

  // Compat optionnelle
  if(state.mode.startsWith("fatigue_") && toolModes.includes("fatigue")) return true;

  if((state.mode === "douleurs" || state.mode === "courbatures") && toolModes.includes("douleur")) return true;

  return false;
}

function matchesQuery(tool){
  const q = normalize(state.query);
  if(!q) return true;

  const lang = state.lang || "fr";
  const other = (lang === "en") ? "fr" : "en";

  const title = toolText(tool,"title") || "";
  const cat = toolText(tool,"category") || "";
  const sum = toolText(tool,"summary") || "";

  const titleOther = tool?.i18n?.[other]?.title || "";
  const catOther = tool?.i18n?.[other]?.category || "";
  const sumOther = tool?.i18n?.[other]?.summary || "";

  const tags = (tool.tags || []).join(" ");

  const hay = normalize([title, cat, sum, titleOther, catOther, sumOther, tags].join(" "));
  return hay.includes(q);
}

function matchesFilter(tool){
  if(!state.filter) return true;
  const f = normalize(state.filter);
  const inTags = (tool.tags || []).some(t => normalize(t).includes(f));
  const inTitle = normalize(tool.title).includes(f);
  return inTags || inTitle;
}

function matchesFavs(tool){
  if(!state.showFavs) return true;
  return state.favorites.has(tool.id);
}

function matchesIntensity(tool){
  if(!state.intensityFilter) return true;
  return normalize(tool.intensity).includes(normalize(state.intensityFilter));
}

function getFilteredTools(){
   return TOOLS
      .filter(matchesMode)
      .filter(matchesQuery)
      .filter(matchesFilter)
      .filter(matchesIntensity)
      .filter(matchesFavs);
}

// -------------------------
// Render
// -------------------------
function render(){
  if(!grid) return;

  if(favCount) favCount.textContent = String(state.favorites.size);
  if(activeFilter) activeFilter.textContent = state.filter ? state.filter : t("none");

  const items = getFilteredTools();
  grid.innerHTML = "";

  if(items.length === 0){
    grid.innerHTML = `
      <article class="card">
        <h3>${escapeHtml(t("empty_title"))}</h3>
        <p>${escapeHtml(t("empty_help"))}</p>
        <div class="hero-actions">
          <button class="btn" id="emptyReset">↺ ${escapeHtml(t("reset"))}</button>
        </div>
      </article>
    `;
    const btn = document.getElementById("emptyReset");
    if(btn && clearFiltersBtn) btn.addEventListener("click", () => clearFiltersBtn.click());
    return;
  }

   items.forEach(tool => {
      const isFav = state.favorites.has(tool.id);
      
      const sosChip = (tool.modes && tool.modes.includes("sos")) ? `<span class="chip sos">🔥</span>` : "";
      const okChip  = (tool.modes && tool.modes.includes("ok")) ? `<span class="chip ok">🌿</span>` : "";
      const physChip = (tool.modes && tool.modes.includes("fatigue_phys")) ? `<span class="chip fatique_phys">🫩</span>` : "";
      const mentChip = (tool.modes && tool.modes.includes("fatigue_mentale")) ? `<span class="chip fatique_mentale">🤯</span>` : "";
      const emoChip  = (tool.modes && tool.modes.includes("fatigue_emo")) ? `<span class="chip fatigue_emo">🥺</span>` : "";
      const courbChip = (tool.modes && tool.modes.includes("courbatures")) ? `<span class="chip courbatures">😬</span>` : "";
      const doulChip = (tool.modes && tool.modes.includes("douleurs")) ? `<span class="chip douleurs">😣</span>` : "";
      
      const intensity = normalize(toolText(tool, "intensity") || "");
      const tresdouxChip = (intensity === "tres doux" || intensity === "very gentle") ? `<span class="chip tresdoux">${escapeHtml(t("intensity.verygentle"))}</span>` : "";
      const douxChip = (intensity === "doux" || intensity === "gentle") ? `<span class="chip doux">${escapeHtml(t("intensity.gentle"))}</span>` : "";
      const moyenChip = (intensity === "moyen" || intensity === "moderate") ? `<span class="chip moyen">${escapeHtml(t("intensity.moderate"))}</span>` : "";
      const eleveChip = (intensity === "eleve" || intensity === "high") ? `<span class="chip eleve">${escapeHtml(t("intensity.high"))}</span>` : "";
      
      const card = document.createElement("article");
      card.className = "card";
      
      card.innerHTML = `
      <div>
        <h3>${escapeHtml(toolText(tool,"title") || "")}</h3>

        <div class="meta">
        <span class="chip">${escapeHtml(toolText(tool,"category") || "")}</span>
        <span class="chip">${escapeHtml(tool.duration || "")}</span>
        ${tresdouxChip}
        ${douxChip}
        ${moyenChip}
        ${eleveChip}
        ${okChip}
        ${physChip}
        ${mentChip}
        ${emoChip}
        ${doulChip}
        ${courbChip}
        ${sosChip}
        
        </div>

        <p style="margin-top:10px;">${escapeHtml(toolText(tool,"summary") || "")}</p>
      </div>

      <div class="hero-actions" style="justify-content:flex-start; margin-top:14px;">
        <button class="btn small" data-open="${escapeHtml(tool.id)}">${escapeHtml(t("open"))}</button>

        <button class="btn small ghost" data-fav="${escapeHtml(tool.id)}" aria-pressed="${isFav ? "true":"false"}">
          ${isFav ? "★" : "☆"} ${escapeHtml(t("fav"))}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  grid.querySelectorAll("[data-open]").forEach(btn => {
    btn.addEventListener("click", () => openTool(btn.getAttribute("data-open")));
  });

  grid.querySelectorAll("[data-fav]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-fav");
      toggleFavorite(id);
      render();
    });
  });
}

// -------------------------
// Tool modal
// -------------------------
function openTool(id){
  const tool = TOOLS.find(t => t.id === id);
  if(!tool) return;

  if(modalTitle) modalTitle.textContent = toolText(tool,"title") || "";

  if(modalMeta){
    modalMeta.innerHTML = `
      <span class="chip">${escapeHtml(toolText(tool,"category") || "")}</span>
      <span class="chip">${escapeHtml(tool.duration || "")}</span>
      <span class="chip">${escapeHtml(toolText(tool,"position") || "")}</span>
    `;
  }

  const steps = toolArray(tool,"steps").map(s => `<li>${escapeHtml(s)}</li>`).join("");

  if(modalBody){
    modalBody.innerHTML = `
      <h4>${escapeHtml(t("steps"))}</h4>
      <ul>${steps}</ul>

      <p><strong>${escapeHtml(t("low"))}</strong> ${escapeHtml(toolText(tool,"low") || "—")}</p>
      <p><strong>${escapeHtml(t("stop"))}</strong> ${escapeHtml(toolText(tool,"stop") || "—")}</p>
      <p><strong>${escapeHtml(t("note"))}</strong> ${escapeHtml(toolText(tool,"note") || "—")}</p>
    `;

  if(tool.timer || tool.intervalTimer){
    modalBody.innerHTML += `
       <div style="margin-top:16px;">
         <button class="btn" id="startToolTimer" type="button">
           ${escapeHtml(t("start_timer"))}
         </button>
       </div>
     `;

     setTimeout(() => {
       const btn = document.getElementById("startToolTimer");
       if(!btn) return;

       btn.addEventListener("click", () => {
         if(tool.intervalTimer){
           openIntervalTimer(tool.intervalTimer);
         } else if(tool.timer){
           openBreathTimer({ ...tool.timer, sound: true });
           }
       });
      }, 0);
   }
  }

  safeShowModal(toolModal);
}

// -------------------------
// Breath timer (réutilisable)
// -------------------------

// Config par défaut
let btConfig = {
  totalSec: 120,
  inhaleSec: 4,
  exhaleSec: 6,
  sound: false
};

let btLeft = btConfig.totalSec;
let btTick = null;
let btRunning = false;

// Animation rAF
let btAnimId = null;
let btAnimStart = 0;

let itConfig = {
  totalSec: 120,
  exerciseSec: 30,
  breakSec: 30
};

let itLeft = itConfig.totalSec;
let itTick = null;
let itRunning = false;
let itAnimId = null;
let itAnimStart = 0;

const ORB_MIN_SCALE = 1;
const ORB_MAX_SCALE = 3.0;

const BAR_MIN_SCALE = 0;
const BAR_MAX_SCALE = 1; 

// -------------------------
// Audio
// -------------------------
let audioCtx = null;
let noiseSrc = null;
let noiseGain = null;
let noiseFilter = null;

function btAudioSupported(){
  return !!(window.AudioContext || window.webkitAudioContext);
}

function btEnsureAudio(){
  if(audioCtx || !btAudioSupported()) return;

  const Ctx = window.AudioContext || window.webkitAudioContext;
  audioCtx = new Ctx();

  const seconds = 2;
  const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * seconds, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i = 0; i < data.length; i++){
    data[i] = (Math.random() * 2 - 1);
  }

  noiseSrc = audioCtx.createBufferSource();
  noiseSrc.buffer = buffer;
  noiseSrc.loop = true;

  noiseFilter = audioCtx.createBiquadFilter();
  noiseFilter.type = "lowpass";
  noiseFilter.frequency.value = 450;

  noiseGain = audioCtx.createGain();
  noiseGain.gain.value = 0.0001;

  noiseSrc.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(audioCtx.destination);

  noiseSrc.start();
}

function btSetSound(on){
  btConfig.sound = !!on;

  if(!btConfig.sound){
    if(noiseGain && audioCtx){
      noiseGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.08);
    }
    return;
  }

  btEnsureAudio();

  if(audioCtx && audioCtx.state === "suspended"){
    audioCtx.resume().catch(() => {});
  }

  if(noiseGain && audioCtx){
    noiseGain.gain.setTargetAtTime(0.018, audioCtx.currentTime, 0.12);
  }
}

function btUpdateSound(phase, progress){
  if(!btConfig.sound || !audioCtx || !noiseGain || !noiseFilter) return;

  const cutoffInhale = 900;
  const cutoffExhale = 420;

  const cutoff = (phase === "inhale")
    ? (cutoffExhale + (cutoffInhale - cutoffExhale) * progress)
    : (cutoffInhale - (cutoffInhale - cutoffExhale) * progress);

  noiseFilter.frequency.setTargetAtTime(cutoff, audioCtx.currentTime, 0.12);

  const vol = (phase === "exhale")
    ? (0.020 + 0.006 * progress)
    : (0.018 + 0.004 * progress);

  noiseGain.gain.setTargetAtTime(vol, audioCtx.currentTime, 0.15);
}

function playIntervalBell(type = "transition"){
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if(!Ctx) return;

  const ctx = new Ctx();
  const now = ctx.currentTime;

  function bell(freq, delay){
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";   // son plus doux qu'un sine pur
    osc.frequency.value = freq;

    osc.connect(gain);
    gain.connect(ctx.destination);

    // attaque douce
    gain.gain.setValueAtTime(0.0001, now + delay);
    gain.gain.linearRampToValueAtTime(0.12, now + delay + 0.02);

    // décroissance longue (effet gong)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.2);

    osc.start(now + delay);
    osc.stop(now + delay + 1.2);
  }

  if(type === "done"){
    bell(660, 0);
    bell(990, 0.18);
  } else {
    bell(880, 0);
  }

  setTimeout(() => ctx.close(), 1500);
}


// -------------------------
// UI helpers
// -------------------------

function btUpdateUI(){
  if(btRemaining) btRemaining.textContent = fmt(btLeft);
}

function btUpdateCenterCount(phase, tMs, inhaleMs, exhaleMs){
  if(!btCount) return;

  let remainingMs;

  if(phase === "inhale"){
    remainingMs = inhaleMs - tMs;
  } else {
    remainingMs = exhaleMs - (tMs - inhaleMs);
  }

  const sec = Math.max(1, Math.ceil(remainingMs / 1000));
  btCount.textContent = String(sec);
}

function btStopAll(){
  btRunning = false;

  if(btTick){
    clearInterval(btTick);
    btTick = null;
  }

  if(btAnimId){
    cancelAnimationFrame(btAnimId);
    btAnimId = null;
  }

  if(breathOrb){
    breathOrb.classList.remove("is-running");
    breathOrb.style.setProperty("--orb-scale", String(ORB_MIN_SCALE));
  }

  if(btPhase) btPhase.textContent = t("ready");
  if(btCount) btCount.textContent = "";

  if(noiseGain && audioCtx){
    noiseGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.08);
  }
}

function btResetAll(){
  btStopAll();
  btLeft = btConfig.totalSec;
  btUpdateUI();
}

// -------------------------
// UI helpers Interval Time
// -------------------------

function itUpdateUI(){
  if(itRemaining) itRemaining.textContent = fmt(itLeft);
}

function itUpdateCenterCount(phase, tMs, exerciseMs, breakMs){
  if(!itCount) return;

  let remainingMs;

  if(phase === "exercise"){
    remainingMs = exerciseMs - tMs;
  } else {
    remainingMs = breakMs - (tMs - exerciseMs);
  }

  const sec = Math.max(1, Math.ceil(remainingMs / 1000));
  itCount.textContent = String(sec);
}

function itStopAll(){
  itRunning = false;

  if(itTick){
    clearInterval(itTick);
    itTick = null;
  }

  if(itAnimId){
    cancelAnimationFrame(itAnimId);
    itAnimId = null;
  }

  if(intervalBar){
    intervalBar.classList.remove("is-running");
    intervalBar.style.setProperty("--bar-scale", String(BAR_MIN_SCALE));
  } 

  if(itPhase) itPhase.textContent = t("ready");
  if(itCount) itCount.textContent = "";

  if(noiseGain && audioCtx){
    noiseGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.08);
  } 
}

function itResetAll(){
  itStopAll();
  itLeft = itConfig.totalSec;
  itUpdateUI();
}



// -------------------------
// Open breath timer
// -------------------------

function openBreathTimer(options = {}){
  const total = Number(options.totalSec);
  const inh = Number(options.inhaleSec);
  const exh = Number(options.exhaleSec);

  btConfig = {
    totalSec: Number.isFinite(total) && total > 0 ? total : 120,
    inhaleSec: Number.isFinite(inh) && inh > 0 ? inh : 4,
    exhaleSec: Number.isFinite(exh) && exh > 0 ? exh : 6,
    sound: typeof options.sound === "boolean" ? options.sound : false
  };

  btLeft = btConfig.totalSec;
  btUpdateUI();

  if(btPhase) btPhase.textContent = "Ready?";
  if(btCount) btCount.textContent = "";
  if(breathOrb) breathOrb.style.setProperty("--orb-scale", String(ORB_MIN_SCALE));

  // IMPORTANT : pas de son ici

  if(breathTimer){
    safeShowModal(breathTimer);
  }
}

// -------------------------
// Open interval timer
// -------------------------

function openIntervalTimer(options = {}){
  const total = Number(options.totalSec);
  const exe = Number(options.exerciseSec);
  const brk = Number(options.breakSec);

  itConfig = {
    totalSec: Number.isFinite(total) && total > 0 ? total : 780,
    exerciseSec: Number.isFinite(exe) && exe > 0 ? exe : 60,
    breakSec: Number.isFinite(brk) && brk > 0 ? brk : 30
  };

  itLeft = itConfig.totalSec;
  itUpdateUI();

  if(itPhase) itPhase.textContent = "Ready?";
  if(itCount) itCount.textContent = "";
  if(intervalBar) intervalBar.style.setProperty("--bar-scale", String(BAR_MIN_SCALE));

  // IMPORTANT : pas de son ici

  if(intervalTimer){
    safeShowModal(intervalTimer);
  }
}

// -------------------------
// Run Breath timer
// -------------------------

function btStartRun(){
  btStopAll();
  btRunning = true;

  btLeft = Math.max(1, btLeft);
  btUpdateUI();

  if(breathOrb) breathOrb.classList.add("is-running");

  // Son uniquement ici
  btSetSound(btConfig.sound);

  const inhaleMs = btConfig.inhaleSec * 1000;
  const exhaleMs = btConfig.exhaleSec * 1000;
  const cycleMs  = inhaleMs + exhaleMs;

  btAnimStart = performance.now();

  const step = (now) => {
    if(!btRunning) return;

    const elapsed = now - btAnimStart;
    const tCycle = elapsed % cycleMs;

    const phase = (tCycle < inhaleMs) ? "inhale" : "exhale";
    const progress = (phase === "inhale")
      ? (tCycle / inhaleMs)
      : ((tCycle - inhaleMs) / exhaleMs);

    if(btPhase){
      btPhase.textContent = (phase === "inhale") ? t("inhale") : t("exhale");
    }

    const scale = (phase === "inhale")
      ? (ORB_MIN_SCALE + (ORB_MAX_SCALE - ORB_MIN_SCALE) * progress)
      : (ORB_MAX_SCALE - (ORB_MAX_SCALE - ORB_MIN_SCALE) * progress);

    if(breathOrb){
      breathOrb.style.setProperty("--orb-scale", String(scale));
    }

    btUpdateCenterCount(phase, tCycle, inhaleMs, exhaleMs);
    btUpdateSound(phase, progress);

    btAnimId = requestAnimationFrame(step);
  };

  btAnimId = requestAnimationFrame(step);

  btTick = setInterval(() => {
    btLeft = Math.max(0, btLeft - 1);
    btUpdateUI();

    if(btLeft <= 0){
      btStopAll();
      if(btPhase) btPhase.textContent = t("done");
    }
  }, 1000);
}

// -------------------------
// Run Interval timer
// -------------------------

function itStartRun(){
  playIntervalBell("transition"); 
  itStopAll();
  itRunning = true;

  itLeft = Math.max(1, itLeft);
  itUpdateUI();

  if(intervalBar) intervalBar.classList.add("is-running");
   
  const exerciseMs = itConfig.exerciseSec * 1000;
  const breakMs = itConfig.breakSec * 1000;
  const cycleinterMs  = exerciseMs + breakMs;

  itAnimStart = performance.now();

  let lastPhase = null; 

  const step = (now) => {
    if(!itRunning) return;

    const elapsed = now - itAnimStart;
    const tCycle = elapsed % cycleinterMs;

    const phase = (tCycle < exerciseMs) ? "exercise" : "break";
    const progress = (phase === "exercise")
      ? (tCycle / exerciseMs)
      : ((tCycle - exerciseMs) / breakMs);

    if(lastPhase !== null && phase !== lastPhase){
      playIntervalBell("transition");
    }
    lastPhase = phase; 

    if(itPhase){
      itPhase.textContent = (phase === "exercise") ? t("exercise") : t("break");
    }
 

    const scale = (phase === "exercise")
      ? (BAR_MIN_SCALE + (BAR_MAX_SCALE - BAR_MIN_SCALE) * progress)
      : (BAR_MAX_SCALE - (BAR_MAX_SCALE - BAR_MIN_SCALE) * progress);

    if(intervalBar){
      intervalBar.style.setProperty("--bar-scale", String(scale));
    }

    itUpdateCenterCount(phase, tCycle, exerciseMs, breakMs);

    itAnimId = requestAnimationFrame(step);
  };

  itAnimId = requestAnimationFrame(step);

  itTick = setInterval(() => {
    itLeft = Math.max(0, itLeft - 1);
    itUpdateUI();

    if(itLeft <= 0){
      itStopAll();
      if(itPhase) itPhase.textContent = t("done");
      playIntervalBell("done"); 
    }
  }, 1000);
}


// -------------------------
// Events
// -------------------------
function setupEvents(){

  // Dropdown behavior
  
   document.addEventListener("click", (e) => {
    document.querySelectorAll("details.drop").forEach(d => {
      if(!d.contains(e.target)) d.open = false;
    });
   });

   document.querySelectorAll("details.drop").forEach(d => {
    d.addEventListener("toggle", () => {
      if(!d.open) return;
      document.querySelectorAll("details.drop").forEach(other => {
        if(other !== d) other.open = false;
      });
    });
  });


  // Filter buttons
    document.querySelectorAll("[data-filter]").forEach(btn => {
       btn.addEventListener("click", () => {

       state.filter = btn.getAttribute("data-filter") || "";

       state.mode = "";

       document.querySelectorAll(".pill").forEach(x => x.setAttribute("aria-pressed","false"));

       const details = btn.closest("details");
       if(details) details.open = false;

       render();
       });
    });

   document.querySelectorAll("[data-intensity]").forEach(btn => {
      btn.addEventListener("click", () => {
         state.intensityFilter = btn.getAttribute("data-intensity") || "";
         document.querySelectorAll("[data-intensity]").forEach(x => x.setAttribute("aria-pressed","false"));
         btn.setAttribute("aria-pressed","true");
         render();
      });
   });

  // Mode pills
  document.querySelectorAll(".pill").forEach(p => {
    p.addEventListener("click", () => {
      state.mode = p.dataset.mode || "ok";
      document.querySelectorAll(".pill").forEach(x => x.setAttribute("aria-pressed","false"));
      p.setAttribute("aria-pressed","true");
      render();
    });
  });

  // Search
  if(searchInput){
    searchInput.addEventListener("input", () => {
      state.query = searchInput.value.trim();
      render();
    });
  }

  // Reset filters
   if(clearFiltersBtn){
      clearFiltersBtn.addEventListener("click", () => {
         state.mode = "";
         state.query = "";
         state.filter = "";
         state.showFavs = false;
         state.intensityFilter = "";
         
   if(searchInput) searchInput.value = "";

      // reset pills UI

         document.querySelectorAll("[data-intensity]").forEach(x => x.setAttribute("aria-pressed","false"));
         const allIntensityBtn = document.querySelector('.intensity-pill[data-intensity=""]');
         if(allIntensityBtn) allIntensityBtn.setAttribute("aria-pressed","true");
         
         document.querySelectorAll(".pill").forEach(x => x.setAttribute("aria-pressed","false"));
         const okBtn = document.querySelector('.pill[data-mode="ok"]');
         if(okBtn) okBtn.setAttribute("aria-pressed","true");
         
         if(favBtn) favBtn.setAttribute("aria-pressed","false");
         
         render();
      });
   }

  // Favorites toggle
  if(favBtn){
    favBtn.addEventListener("click", () => {
      state.showFavs = !state.showFavs;
      favBtn.setAttribute("aria-pressed", state.showFavs ? "true" : "false");
      render();
    });
  }

  // Theme toggle
  if(themeBtn){
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      applyTheme(next === "dark" ? "dark" : "light");
      saveTheme(next === "dark" ? "dark" : "light");
    });
  }

  // Language toggle
  if(langBtn){
    langBtn.addEventListener("click", () => {
      const next = (state.lang === LANG_EN) ? LANG_FR : LANG_EN;
      setLang(next);
     });
  } 

  // Tool modal close
  if(closeModal && toolModal){
    closeModal.addEventListener("click", () => toolModal.close());
  }

  // Hero actions
   
  if(randomTool){
    randomTool.addEventListener("click", () => {
      const list = getFilteredTools();
      if(list.length === 0) return;
      const pick = list[Math.floor(Math.random() * list.length)];
      openTool(pick.id);
    });
  }

  if(breath2min){
  breath2min.addEventListener("click", () => {
    openBreathTimer({
      totalSec: 120,
      inhaleSec: 4,
      exhaleSec: 6,
      sound: true
    });
  });
}

  // Breath timer controls
  if(btClose && breathTimer){
    btClose.addEventListener("click", () => {
      btStopAll();
      breathTimer.close();
    });
  }
  if(btStart) btStart.addEventListener("click", btStartRun);
  if(btStop) btStop.addEventListener("click", btStopAll);
  if(btReset) btReset.addEventListener("click", btResetAll);

  // Interval timer controls
  if(itClose && intervalTimer){
    itClose.addEventListener("click", () => {
      itStopAll();
      intervalTimer.close();
    });
  }
  if(itStart) itStart.addEventListener("click", itStartRun);
  if(itStop) itStop.addEventListener("click", itStopAll);
  if(itReset) itReset.addEventListener("click", itResetAll);

   // Custom Timer Controls
   if(customInterval){
      customInterval.addEventListener("click", () => {
         safeShowModal(customIntervalSetup);
      });
   }
   if(cisClose && customIntervalSetup){
      cisClose.addEventListener("click", () => {
         customIntervalSetup.close();
      });
   }
   if(cisStart){
      cisStart.addEventListener("click", () => {
         const exerciseSec = Math.max(1, Number(cisExercise?.value || 30));
         const breakSec = Math.max(1, Number(cisBreak?.value || 30));
         const rounds = Math.max(1, Number(cisRounds?.value || 3));
         
         const totalSec = (exerciseSec + breakSec) * rounds;
         
         if(customIntervalSetup) customIntervalSetup.close();
         
         openIntervalTimer({
            totalSec,
            exerciseSec,
            breakSec
         });
      });
   }
}

// -------------------------
// Topbar hide
// -------------------------
function setupTopbarHide(){
  const topbar = document.querySelector(".topbar");
  if(!topbar) return;

  let lastY = window.scrollY || 0;
  let locked = false;

  function onScroll(){
    if(locked) return;
    locked = true;

    requestAnimationFrame(() => {
      const y = window.scrollY || 0;
      const delta = y - lastY;
      const TH = 10;

      if(y < 10){
        document.documentElement.classList.remove("topbar-hidden");
      }else if(delta > TH){
        document.documentElement.classList.add("topbar-hidden");
      }else if(delta < -TH){
        document.documentElement.classList.remove("topbar-hidden");
      }

      lastY = y;
      locked = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
}

// -------------------------
// Setup Nav + Nav Alt
// -------------------------

const nav = document.querySelector(".nav");
const spacer = document.getElementById("navSpacer");
const topbar = document.querySelector(".topbar");

function updateNavHeight(){
  if(!nav || !spacer) return;
  spacer.style.setProperty("--nav-h", Math.round(nav.getBoundingClientRect().height) + "px");
}

function onScroll(){
  if(!nav || !spacer || !topbar) return;

  // même logique que ton portfolio : quand le header est sorti de l'écran -> nav devient fixed
  const shouldFix = topbar.getBoundingClientRect().bottom <= 0;

  nav.classList.toggle("alt", shouldFix);
  spacer.classList.toggle("on", shouldFix);
}

updateNavHeight();
onScroll();
window.addEventListener("resize", () => { updateNavHeight(); onScroll(); });
window.addEventListener("scroll", onScroll, { passive: true });

// -------------------------
// Init
// -------------------------
function init(){
  loadFavorites();
  loadTheme();
  loadLang();
  setupEvents();
  setupTopbarHide(); 
  render();
}

init();
