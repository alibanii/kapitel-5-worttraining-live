const lessons = [
  { id: "science", icon: "W", title: "Wissenschaft", subtitle: "children, labs, research" },
  { id: "truth", icon: "L", title: "Wahrheit und Lüge", subtitle: "honesty, deception, conflict" },
  { id: "future", icon: "Z", title: "Ohne Menschen", subtitle: "future, cities, nature" },
  { id: "sleep", icon: "N", title: "Gute Nacht", subtitle: "sleep, rest, performance" },
  { id: "einstein", icon: "E", title: "Albert Einstein", subtitle: "biography and science" },
  { id: "smell", icon: "R", title: "Riechen", subtitle: "smells and idioms" }
];

const vocab = [
  w("science", "eine Fähigkeit erwerben", "phrase", "to acquire a skill", "Kinder erwerben analytische Fähigkeiten früh.", "erwerben"),
  w("science", "die Nachwuchskraft", "noun", "junior talent; young professional", "Gute Nachwuchskräfte sind für Firmen wichtig.", "die Nachwuchskräfte"),
  w("science", "die Forschungseinrichtung", "noun", "research institution", "Die Forschungseinrichtung arbeitet mit Schulen zusammen.", "die Forschungseinrichtungen"),
  w("science", "der Bedarf an", "noun", "demand for; need for", "Der Bedarf an Fachkräften steigt.", "nur Singular"),
  w("science", "qualifiziert", "adj", "qualified; skilled", "Das Labor braucht qualifiziertes Personal.", ""),
  w("science", "ein Studium absolvieren", "phrase", "to complete a course of study", "Sie absolviert ein Studium in Berlin.", "absolvieren"),
  w("science", "schrumpfend", "adj", "shrinking; decreasing", "Die schrumpfende Zahl der Bewerber ist ein Problem.", ""),
  w("science", "die Weichen stellen", "phrase", "to set the course", "Frühe Erfahrungen stellen die Weichen für den Beruf.", "stellt, stellte, gestellt"),
  w("science", "sich voll entfalten", "phrase", "to develop fully", "In einer guten Umgebung können Kinder sich entfalten.", "entfaltet sich"),
  w("science", "die Begeisterung wecken", "phrase", "to spark enthusiasm", "Experimente wecken Begeisterung für Physik.", "wecken"),
  w("science", "durchführen", "verb", "to carry out; conduct", "Die Klasse führt ein Experiment durch.", "führte durch, durchgeführt"),
  w("science", "konzipieren", "verb", "to design; conceive", "Der Kurs ist für B2-Lernende konzipiert.", "konzipierte, konzipiert"),
  w("science", "die Scheu abbauen", "phrase", "to reduce shyness or hesitation", "Einfache Aufgaben bauen die Scheu vor Grammatik ab.", "abbauen"),
  w("science", "das Phänomen", "noun", "phenomenon", "Das Phänomen lässt sich leicht erklären.", "die Phänomene"),
  w("science", "überlebenswichtig", "adj", "vital; essential for survival", "Forschung ist für manche Firmen überlebenswichtig.", ""),
  w("science", "die Anleitung", "noun", "instruction; guidance", "Folgen Sie zuerst der Anleitung.", "die Anleitungen"),

  w("truth", "die Notlüge", "noun", "white lie", "Eine Notlüge soll oft jemanden schonen.", "die Notlügen"),
  w("truth", "die Versuchsperson", "noun", "test subject", "Die Versuchsperson beantwortet Fragen.", "die Versuchspersonen"),
  w("truth", "unsympathisch", "adj", "unlikable", "Er wirkt unsympathisch, wenn er übertreibt.", ""),
  w("truth", "übertreiben", "verb", "to exaggerate", "Beim ersten Treffen sollte man nicht übertreiben.", "übertrieb, übertrieben"),
  w("truth", "die Tendenz", "noun", "tendency", "Viele haben die Tendenz, sich besser darzustellen.", "die Tendenzen"),
  w("truth", "sich präsentieren", "verb", "to present oneself", "Im Gespräch präsentiert sie sich sehr ruhig.", "präsentierte sich"),
  w("truth", "längerfristig", "adj", "long-term", "Längerfristige Beziehungen brauchen Vertrauen.", ""),
  w("truth", "kurzfristig", "adj", "short-term", "Kurzfristige Bekanntschaften bleiben oft oberflächlich.", ""),
  w("truth", "die Bekanntschaft", "noun", "acquaintance", "Aus der Bekanntschaft wurde eine Freundschaft.", "die Bekanntschaften"),
  w("truth", "in der Lage sein", "phrase", "to be able to", "Kinder sind früh in der Lage, Regeln zu verstehen.", "ist in der Lage"),
  w("truth", "der Artgenosse", "noun", "member of the same species", "Tiere warnen manchmal ihre Artgenossen.", "die Artgenossen"),
  w("truth", "täuschen", "verb", "to deceive; trick", "Die Werbung kann Kunden täuschen.", "täuschte, getäuscht"),
  w("truth", "die Täuschung", "noun", "deception", "Die Täuschung wurde schnell bemerkt.", "die Täuschungen"),
  w("truth", "über etwas verfügen", "phrase", "to have something available", "Der Kurs verfügt über viele Übungen.", "verfügen über + Akk."),
  w("truth", "zu einer Lüge greifen", "phrase", "to resort to a lie", "Aus Angst greift er zu einer Lüge.", "greift, griff, gegriffen"),
  w("truth", "einem Konflikt aus dem Weg gehen", "phrase", "to avoid a conflict", "Sie geht dem Konflikt aus dem Weg.", "Dativ + aus dem Weg gehen"),
  w("truth", "weit verbreitet", "adj", "widespread", "Diese Meinung ist weit verbreitet.", ""),
  w("truth", "wünschenswert", "adj", "desirable", "Ehrlichkeit ist in Gesprächen wünschenswert.", ""),
  w("truth", "ertragen", "verb", "to bear; tolerate", "Manche Menschen können Kritik schwer ertragen.", "ertrug, ertragen"),
  w("truth", "glaubwürdig", "adj", "credible", "Eine glaubwürdige Erklärung hilft.", ""),

  w("future", "die Spezies", "noun", "species", "Der Mensch ist eine sehr einflussreiche Spezies.", "die Spezies"),
  w("future", "die Prognose", "noun", "forecast; prediction", "Die Prognose klingt zunächst pessimistisch.", "die Prognosen"),
  w("future", "ohne jemanden auskommen", "phrase", "to manage without someone", "Die Natur kommt ohne uns aus.", "auskommen ohne + Akk."),
  w("future", "vermissen", "verb", "to miss", "Kaum jemand würde den Lärm vermissen.", "vermisste, vermisst"),
  w("future", "sich etwas zurückerobern", "phrase", "to reclaim something", "Die Natur erobert sich die Stadt zurück.", "erobert zurück"),
  w("future", "Spuren hinterlassen", "phrase", "to leave traces", "Plastik hinterlässt lange Spuren.", "hinterlassen"),
  w("future", "sichtbar", "adj", "visible", "Die Schäden bleiben lange sichtbar.", ""),
  w("future", "sich um etwas kümmern", "phrase", "to take care of something", "Niemand kümmert sich um die Pumpen.", "kümmern um + Akk."),
  w("future", "das Grundwasser", "noun", "groundwater", "Grundwasser kann in Tunnel eindringen.", "nur Singular"),
  w("future", "freie Bahn haben", "phrase", "to have free rein", "Ohne Kontrolle hat das Wasser freie Bahn.", ""),
  w("future", "einstürzen", "verb", "to collapse", "Alte Gebäude können nach Jahren einstürzen.", "stürzte ein, eingestürzt"),
  w("future", "versinken", "verb", "to sink; disappear into", "Straßen versinken im Wasser.", "versank, versunken"),
  w("future", "etwas fest im Griff haben", "phrase", "to have firm control of something", "Die Natur hat die Stadt fest im Griff.", ""),
  w("future", "sich vermehren", "verb", "to multiply; reproduce", "Einige Tiere vermehren sich schnell.", "vermehrte sich"),
  w("future", "vom Aussterben bedroht", "phrase", "threatened with extinction", "Manche Arten sind vom Aussterben bedroht.", ""),
  w("future", "zerfallen", "verb", "to decay; fall apart", "Viele Bauwerke zerfallen mit der Zeit.", "zerfiel, zerfallen"),
  w("future", "geschützt", "adj", "protected", "Geschützte Gebäude bleiben länger erhalten.", ""),
  w("future", "der Kunststoff", "noun", "plastic; synthetic material", "Kunststoffe bauen sich nur langsam ab.", "die Kunststoffe"),
  w("future", "etwas abbauen", "verb", "to break something down", "Bakterien können manche Stoffe abbauen.", "baute ab, abgebaut"),
  w("future", "deprimierend", "adj", "depressing", "Die Vorstellung wirkt deprimierend.", ""),

  w("sleep", "rastlos", "adj", "restless", "Nach Kaffee fühle ich mich rastlos.", ""),
  w("sleep", "verschlafen", "verb", "to sleep away; oversleep", "Am Sonntag verschläft er den halben Vormittag.", "verschlief, verschlafen"),
  w("sleep", "entspannen", "verb", "to relax", "Im Schlaf entspannen sich die Muskeln.", "entspannte, entspannt"),
  w("sleep", "verarbeiten", "verb", "to process", "Das Gehirn verarbeitet neue Eindrücke.", "verarbeitete, verarbeitet"),
  w("sleep", "zwischendurch", "adv", "in between; now and then", "Zwischendurch mache ich eine kurze Pause.", ""),
  w("sleep", "im Schnitt", "phrase", "on average", "Im Schnitt lerne ich zwanzig Minuten.", ""),
  w("sleep", "eingerechnet", "adj", "included; counted in", "Pausen sind in der Zeit eingerechnet.", ""),
  w("sleep", "schlaflos", "adj", "sleepless", "Nach der Prüfung war sie schlaflos.", ""),
  w("sleep", "durcharbeiten", "verb", "to work through without stopping", "Eine Nacht durchzuarbeiten ist keine gute Idee.", "arbeitete durch"),
  w("sleep", "der Ausweis", "noun", "proof; sign; ID card", "Für manche ist Stress ein Ausweis von Leistung.", "die Ausweise"),
  w("sleep", "die Leistungsfähigkeit", "noun", "performance capacity", "Schlaf erhöht die Leistungsfähigkeit.", "nur Singular"),
  w("sleep", "gehoben", "adj", "upscale; elevated", "Das Restaurant hat eine gehobene Atmosphäre.", ""),
  w("sleep", "der Beweis", "noun", "proof", "Das ist kein Beweis für Erfolg.", "die Beweise"),
  w("sleep", "der Beleg", "noun", "evidence; receipt", "Der Text liefert einen Beleg für die These.", "die Belege"),
  w("sleep", "verpennen", "verb", "to sleep through; miss by sleeping", "Ich will den Termin nicht verpennen.", "verpennte, verpennt"),
  w("sleep", "vernünftig", "adj", "reasonable; sensible", "Nach wenig Schlaf kann ich kaum vernünftig denken.", ""),
  w("sleep", "dauerhaft", "adj", "lasting; permanent", "Dauerhafter Stress macht krank.", ""),
  w("sleep", "der Schlafmangel", "noun", "lack of sleep", "Schlafmangel schwächt die Konzentration.", "nur Singular"),
  w("sleep", "die Schlafstörung", "noun", "sleep disorder", "Schlafstörungen sollte man ernst nehmen.", "die Schlafstörungen"),
  w("sleep", "sich wälzen", "verb", "to toss and turn", "Er wälzt sich nachts im Bett.", "wälzte sich"),
  w("sleep", "die Wirkung", "noun", "effect", "Ein Nickerchen hat oft eine positive Wirkung.", "die Wirkungen"),
  w("sleep", "das Nickerchen", "noun", "short nap", "Nach dem Essen mache ich ein Nickerchen.", "die Nickerchen"),
  w("sleep", "vorbildlicher Eifer", "phrase", "exemplary diligence", "Vorbildlicher Eifer braucht auch Pausen.", "der Eifer"),
  w("sleep", "sinken lassen", "phrase", "to let sink; lower", "Sie lässt den Kopf auf die Arme sinken.", "ließ sinken"),
  w("sleep", "die Nachteule", "noun", "night owl", "Als Nachteule lernt er spät am Abend.", "die Nachteulen"),
  w("sleep", "sich trösten mit", "phrase", "to console oneself with", "Ich tröste mich mit einem Kaffee.", "trösten mit + Dat."),
  w("sleep", "jemandem zufolge", "phrase", "according to someone", "Der Studie zufolge hilft eine kurze Pause.", "Dativ"),
  w("sleep", "hemmen", "verb", "to hinder; inhibit", "Müdigkeit hemmt die Konzentration.", "hemmte, gehemmt"),
  w("sleep", "ausreichen", "verb", "to be sufficient", "Vier Stunden Schlaf reichen selten aus.", "reichte aus"),

  w("einstein", "der Nobelpreisträger", "noun", "Nobel Prize winner", "Der Nobelpreisträger wurde weltberühmt.", "die Nobelpreisträger"),
  w("einstein", "eigensinnig", "adj", "stubborn; headstrong", "Eigensinnige Menschen fragen oft genauer nach.", ""),
  w("einstein", "die Pflichtveranstaltung", "noun", "mandatory class or event", "Die Pflichtveranstaltung beginnt um acht.", "die Pflichtveranstaltungen"),
  w("einstein", "grübeln", "verb", "to ponder; brood", "Er grübelt lange über dem Problem.", "grübelte, gegrübelt"),
  w("einstein", "stets", "adv", "always; constantly", "Sie bleibt stets neugierig.", ""),
  w("einstein", "maßgeblich", "adj", "decisive; significant", "Seine Idee war maßgeblich für das Projekt.", ""),
  w("einstein", "das Weltbild", "noun", "worldview", "Neue Entdeckungen verändern das Weltbild.", "die Weltbilder"),
  w("einstein", "die Relativitätstheorie", "noun", "theory of relativity", "Die Relativitätstheorie machte Einstein berühmt.", "nur Singular"),
  w("einstein", "die Sonnenfinsternis", "noun", "solar eclipse", "Eine Sonnenfinsternis bestätigte die Theorie.", "die Sonnenfinsternisse"),
  w("einstein", "etwas bestätigen", "verb", "to confirm something", "Die Daten bestätigen die Vermutung.", "bestätigte, bestätigt"),
  w("einstein", "auf einen Schlag", "phrase", "all at once; suddenly", "Auf einen Schlag wurde die Nachricht bekannt.", ""),
  w("einstein", "die Überzeugung", "noun", "conviction; belief", "Er steht zu seinen politischen Überzeugungen.", "die Überzeugungen"),
  w("einstein", "sich engagieren für", "phrase", "to campaign for; be committed to", "Viele engagieren sich für Frieden.", "engagieren für + Akk."),
  w("einstein", "der Pazifismus", "noun", "pacifism", "Pazifismus lehnt Krieg als Mittel ab.", "nur Singular"),
  w("einstein", "die Vortragsreihe", "noun", "lecture series", "Die Vortragsreihe findet in den USA statt.", "die Vortragsreihen"),
  w("einstein", "das Vermögen", "noun", "fortune; assets", "Sein Vermögen wurde beschlagnahmt.", "die Vermögen"),
  w("einstein", "konfiszieren", "verb", "to confiscate", "Die Behörden konfiszieren das Eigentum.", "konfiszierten, konfisziert"),
  w("einstein", "der Einsatz", "noun", "use; deployment; commitment", "Er wollte den Einsatz der Bombe verhindern.", "die Einsätze"),
  w("einstein", "verhindern", "verb", "to prevent", "Gute Planung verhindert Fehler.", "verhinderte, verhindert"),
  w("einstein", "sich gegen etwas wenden", "phrase", "to oppose something", "Sie wendet sich gegen Gewalt.", "wenden gegen + Akk."),

  w("smell", "wahrnehmen", "verb", "to perceive", "Menschen nehmen Gerüche schnell wahr.", "nahm wahr, wahrgenommen"),
  w("smell", "verströmen", "verb", "to give off; emit", "Das Gebäck verströmt einen süßen Duft.", "verströmte, verströmt"),
  w("smell", "lüften", "verb", "to air out", "Wir müssen das Zimmer lüften.", "lüftete, gelüftet"),
  w("smell", "duften", "verb", "to smell pleasant", "Die Rosen duften im Garten.", "duftete, geduftet"),
  w("smell", "stinken", "verb", "to stink", "Der Käse stinkt fürchterlich.", "stank, gestunken"),
  w("smell", "der Wohlgeruch", "noun", "pleasant smell", "Der Wohlgeruch erinnert mich an Urlaub.", "die Wohlgerüche"),
  w("smell", "der Gestank", "noun", "stench", "Der Gestank aus der Küche war stark.", "nur Singular"),
  w("smell", "angenehm", "adj", "pleasant", "Lavendel riecht angenehm.", ""),
  w("smell", "unangenehm", "adj", "unpleasant", "Zigarettenrauch ist für viele unangenehm.", ""),
  w("smell", "die Filmsequenz", "noun", "film sequence", "Die Filmsequenz zeigt ein Experiment.", "die Filmsequenzen"),
  w("smell", "etwas auslösen", "verb", "to trigger something", "Düfte lösen Erinnerungen aus.", "löste aus, ausgelöst"),
  w("smell", "die Erinnerung", "noun", "memory", "Der Geruch weckt eine Erinnerung.", "die Erinnerungen"),
  w("smell", "beeinflussen", "verb", "to influence", "Musik beeinflusst unsere Stimmung.", "beeinflusste, beeinflusst"),
  w("smell", "die Kaufentscheidung", "noun", "purchase decision", "Werbung beeinflusst die Kaufentscheidung.", "die Kaufentscheidungen"),
  w("smell", "hervorrufen", "verb", "to evoke; cause", "Gerüche können Gefühle hervorrufen.", "rief hervor, hervorgerufen"),
  w("smell", "künstlich", "adj", "artificial", "Künstliche Düfte sind überall.", ""),
  w("smell", "umgeben sein von", "phrase", "to be surrounded by", "Wir sind von Werbung umgeben.", "umgeben von + Dat."),
  w("smell", "jemanden an der Nase herumführen", "idiom", "to lead someone on; deceive someone", "Der Verkäufer führt die Kunden an der Nase herum.", ""),
  w("smell", "einen guten Riecher haben", "idiom", "to have a good instinct", "Sie hat einen guten Riecher für Trends.", ""),
  w("smell", "jemanden nicht riechen können", "idiom", "to be unable to stand someone", "Er kann seinen Nachbarn nicht riechen.", ""),
  w("smell", "vor der Nase wegfahren", "idiom", "to leave right in front of you", "Der Bus ist mir vor der Nase weggefahren.", ""),
  w("smell", "seine Nase in etwas stecken", "idiom", "to poke one's nose into something", "Er steckt seine Nase in fremde Probleme.", ""),
  w("smell", "auf die Nase fallen", "idiom", "to fail; fall flat", "Mit dem Plan ist die Firma auf die Nase gefallen.", "")
];

const stateKey = "kapitel5-vocab-progress-v1";
const defaultState = {
  xp: 0,
  streak: 0,
  items: {},
  speech: {
    auto: true,
    rate: 0.86,
    voiceURI: ""
  }
};
let state = loadState();
let currentLesson = "all";
let studyPhase = "learn";
let currentQuestion = null;
let currentLearnItem = null;
let selectedOption = null;
let awaitingNext = false;
let germanVoices = [];

const els = {
  xp: document.querySelector("#xp"),
  streak: document.querySelector("#streak"),
  learned: document.querySelector("#learned"),
  totalLearnWords: document.querySelector("#totalLearnWords"),
  mastered: document.querySelector("#mastered"),
  totalWords: document.querySelector("#totalWords"),
  lessonList: document.querySelector("#lessonList"),
  lessonKicker: document.querySelector("#lessonKicker"),
  promptTitle: document.querySelector("#promptTitle"),
  questionMeta: document.querySelector("#questionMeta"),
  promptLabel: document.querySelector("#promptLabel"),
  prompt: document.querySelector("#prompt"),
  answerArea: document.querySelector("#answerArea"),
  feedback: document.querySelector("#feedback"),
  checkButton: document.querySelector("#checkButton"),
  skipButton: document.querySelector("#skipButton"),
  learnTab: document.querySelector("#learnTab"),
  practiceTab: document.querySelector("#practiceTab"),
  modeSelect: document.querySelector("#modeSelect"),
  autoSpeak: document.querySelector("#autoSpeak"),
  speechRate: document.querySelector("#speechRate"),
  voiceSelect: document.querySelector("#voiceSelect"),
  voiceStatus: document.querySelector("#voiceStatus"),
  resetProgress: document.querySelector("#resetProgress"),
  searchInput: document.querySelector("#searchInput"),
  wordGrid: document.querySelector("#wordGrid"),
  template: document.querySelector("#wordCardTemplate")
};

function w(lesson, term, type, translation, example, form) {
  return {
    id: `${lesson}-${term.toLowerCase().replace(/[^a-zäöüß0-9]+/gi, "-")}`,
    lesson,
    term,
    type,
    translation,
    example,
    form
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(stateKey)) || {};
    return {
      ...defaultState,
      ...saved,
      items: saved.items || {},
      speech: {
        ...defaultState.speech,
        ...(saved.speech || {})
      }
    };
  } catch {
    return {
      ...defaultState,
      items: {},
      speech: { ...defaultState.speech }
    };
  }
}

function saveState() {
  localStorage.setItem(stateKey, JSON.stringify(state));
}

function itemState(id) {
  if (!state.items[id]) state.items[id] = { seen: 0, correct: 0, wrong: 0, mastery: 0, due: 0, learned: false };
  return state.items[id];
}

function initSpeechControls() {
  els.autoSpeak.checked = Boolean(state.speech.auto);
  els.speechRate.value = String(state.speech.rate);

  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    els.voiceStatus.textContent = "Speech is not available in this browser.";
    els.autoSpeak.disabled = true;
    els.speechRate.disabled = true;
    els.voiceSelect.disabled = true;
    return;
  }

  populateVoiceSelect();
  window.speechSynthesis.onvoiceschanged = populateVoiceSelect;
}

function populateVoiceSelect() {
  const voices = window.speechSynthesis.getVoices();
  germanVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("de"));
  const current = state.speech.voiceURI;
  els.voiceSelect.innerHTML = '<option value="">Best available German voice</option>';

  germanVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.voiceURI;
    option.textContent = `${voice.name} (${voice.lang})`;
    els.voiceSelect.appendChild(option);
  });

  if (germanVoices.some((voice) => voice.voiceURI === current)) {
    els.voiceSelect.value = current;
  } else {
    state.speech.voiceURI = "";
    saveState();
  }

  els.voiceStatus.textContent = germanVoices.length
    ? `${germanVoices.length} German voice${germanVoices.length === 1 ? "" : "s"} available.`
    : "No German voice found. The browser will use its closest voice.";
}

function selectedGermanVoice() {
  return germanVoices.find((voice) => voice.voiceURI === state.speech.voiceURI)
    || germanVoices.find((voice) => voice.lang.toLowerCase() === "de-de")
    || germanVoices[0]
    || null;
}

function speakGerman(text) {
  if (!text || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleanSpeechText(text));
  utterance.lang = "de-DE";
  utterance.rate = Number(state.speech.rate) || defaultState.speech.rate;
  utterance.pitch = 1;
  utterance.voice = selectedGermanVoice();
  window.speechSynthesis.speak(utterance);
}

function cleanSpeechText(text) {
  return String(text)
    .replace(/\(.+?\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function makeSpeakButton(label, text) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "speak-button";
  button.dataset.speak = text;
  button.textContent = label;
  return button;
}

function renderLessons() {
  const allButton = lessonButton({ id: "all", icon: "5", title: "All Kapitel 5", subtitle: `${vocab.length} items` });
  els.lessonList.appendChild(allButton);
  lessons.forEach((lesson) => els.lessonList.appendChild(lessonButton(lesson)));
}

function lessonButton(lesson) {
  const btn = document.createElement("button");
  btn.className = "lesson-button";
  btn.type = "button";
  btn.dataset.lesson = lesson.id;
  btn.innerHTML = `
    <span class="lesson-icon">${lesson.icon}</span>
    <span><span class="lesson-title">${lesson.title}</span><span class="lesson-count">${lesson.subtitle}</span></span>
    <span class="lesson-progress">0</span>
  `;
  btn.addEventListener("click", () => {
    currentLesson = lesson.id;
    startCurrentPhase();
    updateStats();
  });
  return btn;
}

function updateStats() {
  const learned = vocab.filter((item) => isLearned(item)).length;
  const mastered = vocab.filter((item) => itemState(item.id).mastery >= 4).length;
  els.xp.textContent = state.xp;
  els.streak.textContent = state.streak;
  els.learned.textContent = learned;
  els.totalLearnWords.textContent = vocab.length;
  els.mastered.textContent = mastered;
  els.totalWords.textContent = vocab.length;
  els.learnTab.classList.toggle("active", studyPhase === "learn");
  els.practiceTab.classList.toggle("active", studyPhase === "practice");

  document.querySelectorAll(".lesson-button").forEach((btn) => {
    const lessonId = btn.dataset.lesson;
    btn.classList.toggle("active", lessonId === currentLesson);
    const items = filterByLesson(lessonId);
    const learnedInLesson = items.filter((item) => isLearned(item)).length;
    const solid = items.filter((item) => itemState(item.id).mastery >= 4).length;
    btn.querySelector(".lesson-progress").textContent = studyPhase === "learn"
      ? `${learnedInLesson}/${items.length}`
      : `${solid}/${items.length}`;
  });
  renderBank();
}

function filterByLesson(lessonId = currentLesson) {
  return lessonId === "all" ? vocab : vocab.filter((item) => item.lesson === lessonId);
}

function getLessonTitle() {
  if (currentLesson === "all") return "All lessons";
  return lessons.find((lesson) => lesson.id === currentLesson)?.title || "Lesson";
}

function isLearned(item) {
  const s = itemState(item.id);
  return s.learned || s.seen > 0;
}

function allCurrentWordsLearned() {
  const items = filterByLesson();
  return items.length > 0 && items.every((item) => isLearned(item));
}

function chooseLearnItem() {
  const pool = filterByLesson();
  const fresh = pool.filter((item) => !isLearned(item));
  const weak = pool.filter((item) => isLearned(item) && itemState(item.id).mastery < 2);
  return fresh[0] || weak[0] || pool[0] || vocab[0];
}

function chooseQuestionItem() {
  const learnedPool = filterByLesson().filter((item) => isLearned(item));
  if (!learnedPool.length) return null;
  const now = Date.now();
  const sorted = [...learnedPool].sort((a, b) => {
    const sa = itemState(a.id);
    const sb = itemState(b.id);
    return (sa.due - now) - (sb.due - now) || sa.mastery - sb.mastery || Math.random() - 0.5;
  });
  return sorted[0] || null;
}

function chooseMode(item) {
  const selected = els.modeSelect.value;
  if (selected !== "mixed") return selected;
  const candidates = ["meaning", "typing", "cloze"];
  if (item.type === "noun") candidates.push("article");
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function startQuestion() {
  studyPhase = "practice";
  currentLearnItem = null;
  selectedOption = null;
  awaitingNext = false;
  els.feedback.className = "feedback hidden";
  els.checkButton.textContent = "Check";
  const item = chooseQuestionItem();
  if (!item) {
    renderPracticeEmpty();
    updateStats();
    return;
  }
  const mode = chooseMode(item);
  currentQuestion = buildQuestion(item, mode);
  renderQuestion(currentQuestion);
  updateStats();
}

function startLearn() {
  studyPhase = "learn";
  currentQuestion = null;
  selectedOption = null;
  awaitingNext = false;
  els.feedback.className = "feedback hidden";
  currentLearnItem = chooseLearnItem();
  renderLearnItem(currentLearnItem);
  updateStats();
}

function startCurrentPhase() {
  if (studyPhase === "learn") startLearn();
  else startQuestion();
}

function buildQuestion(item, mode) {
  if (mode === "typing") {
    return {
      item,
      mode,
      title: "Type the German",
      label: "Translate into German",
      prompt: item.translation,
      answer: item.term,
      accepts: [item.term, stripArticle(item.term)],
      type: "input"
    };
  }

  if (mode === "article" && item.type === "noun") {
    const article = item.term.split(" ")[0];
    return {
      item,
      mode,
      title: "Choose the article",
      label: `What is the article for ${stripArticle(item.term)}?`,
      prompt: stripArticle(item.term),
      answer: article,
      options: shuffle(["der", "die", "das"]).filter(Boolean),
      type: "choice"
    };
  }

  if (mode === "cloze") {
    const gap = makeGap(item.example, item.term);
    if (!gap) {
      return {
        item,
        mode: "typing",
        title: "Type the German",
        label: "Translate into German",
        prompt: item.translation,
        answer: item.term,
        accepts: [item.term, stripArticle(item.term)],
        type: "input"
      };
    }
    return {
      item,
      mode,
      title: "Complete the sentence",
      label: item.translation,
      prompt: gap,
      answer: item.term,
      accepts: [item.term, stripArticle(item.term), firstVerb(item.term)],
      type: "input"
    };
  }

  const options = makeOptions(item);
  return {
    item,
    mode: "meaning",
    title: "Choose the meaning",
    label: item.form || item.type,
    prompt: item.term,
    answer: item.translation,
    options,
    type: "choice"
  };
}

function renderQuestion(q) {
  els.lessonKicker.textContent = getLessonTitle();
  els.promptTitle.textContent = q.title;
  els.questionMeta.textContent = q.item.type;
  els.promptLabel.textContent = q.label;
  els.prompt.textContent = q.prompt;
  els.answerArea.innerHTML = "";
  els.skipButton.textContent = "Skip";

  if (q.mode === "meaning") {
    const speechRow = document.createElement("div");
    speechRow.className = "speech-actions";
    speechRow.appendChild(makeSpeakButton("Listen", q.item.term));
    els.answerArea.appendChild(speechRow);
  }

  if (q.type === "choice") {
    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-button";
      btn.textContent = option;
      btn.addEventListener("click", () => {
        selectedOption = option;
        document.querySelectorAll(".option-button").forEach((node) => node.classList.remove("selected"));
        btn.classList.add("selected");
      });
      els.answerArea.appendChild(btn);
    });
  } else {
    const input = document.createElement("input");
    input.className = "text-answer";
    input.type = "text";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.placeholder = "Type your answer";
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") handleCheck();
    });
    els.answerArea.appendChild(input);
    input.focus();
  }
}

function renderLearnItem(item) {
  const items = filterByLesson();
  const learnedCount = items.filter((entry) => isLearned(entry)).length;
  const allLearned = learnedCount >= items.length;
  els.lessonKicker.textContent = getLessonTitle();
  els.promptTitle.textContent = allLearned ? "All words introduced" : "Learn this word";
  els.questionMeta.textContent = `${learnedCount}/${items.length} learned`;
  els.promptLabel.textContent = allLearned ? "You can keep reviewing, or switch to practice." : "Read it, say it, then mark it learned.";
  els.prompt.innerHTML = "";
  els.answerArea.innerHTML = "";
  els.feedback.className = "feedback hidden";
  els.checkButton.textContent = allLearned ? "Practice" : "I learned it";
  els.skipButton.textContent = "Already know";

  const lessonTitle = lessons.find((lesson) => lesson.id === item.lesson)?.title || "Kapitel 5";
  els.prompt.innerHTML = `
    <div class="learn-card">
      <div class="learn-term">${escapeHtml(item.term)}</div>
      <div class="learn-translation">${escapeHtml(item.translation)}</div>
      <div class="learn-form">${escapeHtml([lessonTitle, item.type, item.form].filter(Boolean).join(" | "))}</div>
      <div class="learn-example">${escapeHtml(item.example)}</div>
      <div class="speech-actions">
        <button class="speak-button" type="button" data-speak="${escapeAttr(item.term)}">Listen word</button>
        <button class="speak-button" type="button" data-speak="${escapeAttr(item.example)}">Listen example</button>
      </div>
    </div>
  `;

  if (!allLearned && state.speech.auto) {
    window.setTimeout(() => speakGerman(item.term), 150);
  }
}

function renderPracticeEmpty() {
  currentQuestion = null;
  els.lessonKicker.textContent = getLessonTitle();
  els.promptTitle.textContent = "Learn first";
  els.questionMeta.textContent = "0 learned";
  els.promptLabel.textContent = "Practice is locked until you introduce words.";
  els.prompt.innerHTML = `
    <div class="empty-state">
      <strong>Start with Learn.</strong>
      <span>Review the German word, English meaning, form, and example. After a few words are learned, Practice will quiz only those words.</span>
    </div>
  `;
  els.answerArea.innerHTML = "";
  els.feedback.className = "feedback hidden";
  els.checkButton.textContent = "Learn now";
  els.skipButton.textContent = "Skip";
}

function makeOptions(item) {
  const wrong = shuffle(vocab.filter((other) => other.id !== item.id && other.lesson === item.lesson))
    .slice(0, 2)
    .map((other) => other.translation);
  while (wrong.length < 3) {
    const candidate = vocab[Math.floor(Math.random() * vocab.length)].translation;
    if (candidate !== item.translation && !wrong.includes(candidate)) wrong.push(candidate);
  }
  return shuffle([item.translation, ...wrong.slice(0, 3)]);
}

function handleCheck() {
  if (studyPhase === "learn") {
    if (allCurrentWordsLearned()) {
      startQuestion();
      return;
    }
    markLearned(currentLearnItem, false);
    startLearn();
    return;
  }

  if (!currentQuestion) {
    startLearn();
    return;
  }
  if (awaitingNext) {
    startQuestion();
    return;
  }

  let answer = selectedOption;
  if (currentQuestion.type === "input") {
    answer = els.answerArea.querySelector("input").value;
  }
  const correct = isCorrect(answer, currentQuestion);
  recordAnswer(currentQuestion.item, correct);
  showFeedback(correct, answer);
  awaitingNext = true;
  els.checkButton.textContent = "Next";
  updateStats();
}

function markLearned(item, alreadyKnown) {
  if (!item) return;
  const s = itemState(item.id);
  if (!isLearned(item)) state.xp += alreadyKnown ? 6 : 4;
  s.learned = true;
  s.seen = Math.max(1, s.seen);
  s.mastery = Math.max(s.mastery, alreadyKnown ? 2 : 1);
  s.due = Date.now();
  saveState();
}

function isCorrect(answer, q) {
  if (!answer) return false;
  if (q.type === "choice") return answer === q.answer;
  const normalized = normalize(answer);
  return q.accepts.some((accepted) => normalize(accepted) === normalized);
}

function recordAnswer(item, correct) {
  const s = itemState(item.id);
  s.seen += 1;
  if (correct) {
    s.correct += 1;
    s.mastery = Math.min(5, s.mastery + 1);
    s.due = Date.now() + (s.mastery + 1) * 90_000;
    state.xp += 10;
    state.streak += 1;
  } else {
    s.wrong += 1;
    s.mastery = Math.max(0, s.mastery - 1);
    s.due = Date.now() + 20_000;
    state.streak = 0;
  }
  saveState();
}

function showFeedback(correct, answer) {
  const item = currentQuestion.item;
  els.feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
  els.feedback.innerHTML = correct
    ? `<strong>Correct.</strong> ${item.term} = ${item.translation}<br>${item.example}<br><button class="speak-button" type="button" data-speak="${escapeAttr(item.term)}">Listen answer</button>`
    : `<strong>Not yet.</strong> Correct answer: ${currentQuestion.answer}<br>${item.term} = ${item.translation}<br>${item.example}<br><button class="speak-button" type="button" data-speak="${escapeAttr(item.term)}">Listen answer</button>`;
}

function makeGap(example, term) {
  const candidates = [term, stripArticle(term), firstVerb(term)].filter(Boolean).sort((a, b) => b.length - a.length);
  let sentence = example;
  for (const candidate of candidates) {
    const escaped = candidate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const next = sentence.replace(new RegExp(escaped, "i"), "_____");
    if (next !== sentence) return next;
  }
  return null;
}

function stripArticle(term) {
  return term.replace(/^(der|die|das|eine|ein|einen|einem)\s+/i, "").trim();
}

function firstVerb(term) {
  return term.split(" ").find((part) => /en$|eln$|ern$/.test(part)) || stripArticle(term);
}

function normalize(value) {
  return String(value)
    .toLowerCase()
    .replace(/[.,;:!?()"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

function renderBank() {
  const query = normalize(els.searchInput.value || "");
  const filtered = filterByLesson().filter((item) => {
    const haystack = normalize(`${item.term} ${item.translation} ${item.form} ${item.example}`);
    return haystack.includes(query);
  });
  els.wordGrid.innerHTML = "";
  filtered.forEach((item) => {
    const node = els.template.content.firstElementChild.cloneNode(true);
    const s = itemState(item.id);
    node.querySelector(".tag").textContent = lessons.find((lesson) => lesson.id === item.lesson)?.title || item.lesson;
    node.querySelector("h3").textContent = item.term;
    node.querySelector(".meta").textContent = [item.type, item.form].filter(Boolean).join(" | ");
    node.querySelector(".translation").textContent = item.translation;
    node.querySelector(".example").textContent = item.example;
    node.querySelector(".word-card-top").appendChild(makeSpeakButton("Listen", item.term));
    const dot = node.querySelector(".mastery-dot");
    dot.classList.toggle("strong", s.mastery >= 4);
    dot.classList.toggle("new", !isLearned(item));
    els.wordGrid.appendChild(node);
  });
}

els.checkButton.addEventListener("click", handleCheck);
els.skipButton.addEventListener("click", () => {
  if (studyPhase === "learn") {
    markLearned(currentLearnItem, true);
    startLearn();
  } else {
    startQuestion();
  }
});
els.learnTab.addEventListener("click", startLearn);
els.practiceTab.addEventListener("click", startQuestion);
els.modeSelect.addEventListener("change", () => {
  if (studyPhase === "practice") startQuestion();
});
els.autoSpeak.addEventListener("change", () => {
  state.speech.auto = els.autoSpeak.checked;
  saveState();
});
els.speechRate.addEventListener("change", () => {
  state.speech.rate = Number(els.speechRate.value);
  saveState();
});
els.voiceSelect.addEventListener("change", () => {
  state.speech.voiceURI = els.voiceSelect.value;
  saveState();
});
els.searchInput.addEventListener("input", renderBank);
els.resetProgress.addEventListener("click", () => {
  if (!confirm("Reset all Kapitel 5 progress?")) return;
  state = { ...defaultState, speech: state.speech, items: {} };
  saveState();
  updateStats();
  startLearn();
});
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speak]");
  if (!button) return;
  speakGerman(button.dataset.speak);
});

initSpeechControls();
renderLessons();
updateStats();
startLearn();
