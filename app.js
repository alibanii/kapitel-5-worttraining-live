const chapters = [
  { id: "k1", number: "1", title: "Neue Heimat", subtitle: "home, migration, languages, integration" },
  { id: "k2", number: "2", title: "Sprich mit mir!", subtitle: "body language, multilingualism, small talk, conflict" },
  { id: "k3", number: "3", title: "Arbeit ist das halbe Leben?", subtitle: "jobs, satisfaction, teamwork, applications" },
  { id: "k4", number: "4", title: "Zusammen leben", subtitle: "violence, poverty, internet habits, equality" },
  { id: "k5", number: "5", title: "Wer Wissen schafft, macht ...", subtitle: "science, truth and lies, future, sleep, Einstein, smells" }
];

const lessons = [
  { chapter: "k1", id: "k1-heimat", icon: "H", title: "Heimat", subtitle: "home, belonging, feelings" },
  { chapter: "k1", id: "k1-auswandern", icon: "A", title: "Auswandern", subtitle: "moving abroad and starting over" },
  { chapter: "k1", id: "k1-sprachen", icon: "S", title: "Ein Land, viele Sprachen", subtitle: "multilingual life" },
  { chapter: "k1", id: "k1-integration", icon: "I", title: "Integration", subtitle: "society, origin, identity" },

  { chapter: "k2", id: "k2-koerper", icon: "K", title: "Körpersprache", subtitle: "gestures, facial expression, effect" },
  { chapter: "k2", id: "k2-sprachen", icon: "F", title: "Fremdsprachenlernen", subtitle: "language learning and arguments" },
  { chapter: "k2", id: "k2-smalltalk", icon: "T", title: "Smalltalk", subtitle: "light conversation" },
  { chapter: "k2", id: "k2-streiten", icon: "S", title: "Streiten", subtitle: "criticism and compromise" },

  { chapter: "k3", id: "k3-berufe", icon: "B", title: "Berufe", subtitle: "unusual jobs and careers" },
  { chapter: "k3", id: "k3-zufriedenheit", icon: "Z", title: "Glücklich im Job?", subtitle: "expectations and stress" },
  { chapter: "k3", id: "k3-team", icon: "T", title: "Teamgeist", subtitle: "cooperation and events" },
  { chapter: "k3", id: "k3-bewerbung", icon: "L", title: "Bewerbung", subtitle: "CV, job ads, cover letters" },

  { chapter: "k4", id: "k4-sport", icon: "G", title: "Sport gegen Gewalt", subtitle: "respect, youth, prevention" },
  { chapter: "k4", id: "k4-armut", icon: "A", title: "Armut", subtitle: "poverty and exclusion" },
  { chapter: "k4", id: "k4-internet", icon: "N", title: "Im Netz", subtitle: "online behavior and addiction" },
  { chapter: "k4", id: "k4-rollen", icon: "R", title: "Der kleine Unterschied", subtitle: "roles, equality, wishes" },

  { chapter: "k5", id: "science", icon: "W", title: "Wissenschaft", subtitle: "children, labs, research" },
  { chapter: "k5", id: "truth", icon: "L", title: "Wahrheit und Lüge", subtitle: "honesty, deception, conflict" },
  { chapter: "k5", id: "future", icon: "Z", title: "Ohne Menschen", subtitle: "future, cities, nature" },
  { chapter: "k5", id: "sleep", icon: "N", title: "Gute Nacht", subtitle: "sleep, rest, performance" },
  { chapter: "k5", id: "einstein", icon: "E", title: "Albert Einstein", subtitle: "biography and science" },
  { chapter: "k5", id: "smell", icon: "R", title: "Riechen", subtitle: "smells and idioms" }
];

const vocab = [
  w("k1-heimat", "die Heimat", "noun", "home; homeland", "Für viele Menschen ist Heimat ein Gefühl.", "nur Singular", "For many people, home is a feeling."),
  w("k1-heimat", "das Heimweh", "noun", "homesickness", "Nach drei Monaten im Ausland bekam sie Heimweh.", "nur Singular", "After three months abroad, she became homesick."),
  w("k1-heimat", "das Fernweh", "noun", "longing to travel", "Im Winter hat er oft Fernweh und plant Reisen.", "nur Singular", "In winter he often longs to travel and plans trips."),
  w("k1-heimat", "sich wohlfühlen", "verb", "to feel comfortable", "In der neuen Wohnung fühlt sich die Familie wohl.", "fühlte sich wohl, wohlgefühlt", "The family feels comfortable in the new apartment."),
  w("k1-heimat", "vertraut", "adj", "familiar", "Die vertrauten Gerüche erinnern ihn an die Kindheit.", "", "The familiar smells remind him of childhood."),
  w("k1-heimat", "die Zugehörigkeit", "noun", "belonging", "Sprache kann ein Gefühl von Zugehörigkeit schaffen.", "nur Singular", "Language can create a feeling of belonging."),
  w("k1-heimat", "sich geborgen fühlen", "phrase", "to feel safe and sheltered", "Bei guten Freunden fühlt sie sich geborgen.", "fühlt sich geborgen", "With good friends she feels safe and sheltered."),
  w("k1-heimat", "die Vorstellung", "noun", "idea; imagination", "Jeder hat eine andere Vorstellung von Heimat.", "die Vorstellungen", "Everyone has a different idea of home."),
  w("k1-heimat", "etwas darstellen", "verb", "to represent; depict", "Das Foto stellt ihre Heimat sehr gut dar.", "stellte dar, dargestellt", "The photo represents her home very well."),
  w("k1-heimat", "etwas begründen", "verb", "to justify; give reasons", "Er begründet seine Auswahl mit persönlichen Erinnerungen.", "begründete, begründet", "He justifies his choice with personal memories."),

  w("k1-auswandern", "auswandern", "verb", "to emigrate", "Viele Menschen wandern aus beruflichen Gründen aus.", "wanderte aus, ausgewandert", "Many people emigrate for professional reasons."),
  w("k1-auswandern", "etwas wagen", "verb", "to dare something", "Sie wagt einen kompletten Neuanfang.", "wagte, gewagt", "She dares a complete new beginning."),
  w("k1-auswandern", "den Job kündigen", "phrase", "to quit one's job", "Vor dem Umzug musste er den Job kündigen.", "kündigte, gekündigt", "Before moving, he had to quit his job."),
  w("k1-auswandern", "die Wohnung auflösen", "phrase", "to give up an apartment", "Vor der Reise löst sie ihre Wohnung auf.", "löste auf, aufgelöst", "Before the trip she gives up her apartment."),
  w("k1-auswandern", "Kontakte knüpfen", "phrase", "to make contacts", "In der neuen Stadt möchte er Kontakte knüpfen.", "knüpfte, geknüpft", "In the new city he wants to make contacts."),
  w("k1-auswandern", "sich verabschieden von", "phrase", "to say goodbye to", "Am Flughafen verabschiedet sie sich von ihrer Familie.", "verabschieden von + Dat.", "At the airport she says goodbye to her family."),
  w("k1-auswandern", "die Arbeitserlaubnis", "noun", "work permit", "Ohne Arbeitserlaubnis darf sie dort nicht arbeiten.", "die Arbeitserlaubnisse", "Without a work permit she may not work there."),
  w("k1-auswandern", "sich durchbeißen", "verb", "to struggle through", "Am Anfang war es hart, aber er hat sich durchgebissen.", "biss sich durch, durchgebissen", "At first it was hard, but he struggled through."),
  w("k1-auswandern", "etwas in Angriff nehmen", "phrase", "to tackle something", "Nach der Ankunft nimmt sie die Jobsuche in Angriff.", "nimmt, nahm, genommen", "After arrival she tackles the job search."),
  w("k1-auswandern", "der Lebensabend", "noun", "retirement years", "Sie möchten ihren Lebensabend am Meer verbringen.", "nur Singular", "They want to spend their retirement years by the sea."),
  h("k1-auswandern", "spontan", "adj", "spontaneous", "Sie ist ziemlich spontan nach Australien ausgewandert.", "", "She emigrated to Australia quite spontaneously.", "B1.2"),
  h("k1-auswandern", "beschließen", "verb", "to decide", "Nach dem Urlaub beschloss sie, ihr Leben zu ändern.", "beschloss, beschlossen", "After the vacation she decided to change her life.", "B1.2"),
  h("k1-auswandern", "etwas erledigen", "verb", "to take care of something; get something done", "Vor der Abreise musste sie sehr viel erledigen.", "erledigte, erledigt", "Before leaving she had to take care of many things.", "B1.2"),
  h("k1-auswandern", "und so weiter", "phrase", "and so on; etc.", "Sie musste Zeugnisse, Verträge und so weiter organisieren.", "Abkürzung: usw.", "She had to organize certificates, contracts, and so on.", "B1.2"),
  h("k1-auswandern", "allerdings", "adv", "however; though", "Der Anfang im neuen Land war allerdings schwierig.", "", "The beginning in the new country was difficult, however.", "B1.2"),
  h("k1-auswandern", "sitzen", "verb", "to sit", "Im Flugzeug saß sie sehr aufgeregt am Fenster.", "saß, gesessen", "On the plane she sat by the window very excitedly.", "B1.2"),
  h("k1-auswandern", "die Beziehung", "noun", "relationship", "Die Beziehung war leider schnell wieder zu Ende.", "die Beziehungen", "Unfortunately, the relationship ended quickly.", "B1.2"),
  h("k1-auswandern", "die Grafikerin", "noun", "female graphic designer", "Sie fand eine Stelle als Grafikerin in einer Agentur.", "die Grafikerinnen", "She found a job as a graphic designer in an agency.", "B1.2"),
  h("k1-auswandern", "die Agentur", "noun", "agency", "Die große Agentur suchte kreative Mitarbeiter.", "die Agenturen", "The large agency was looking for creative employees.", "B1.2"),
  h("k1-auswandern", "etwas bereuen", "verb", "to regret something", "Ihre Entscheidung hat sie nie bereut.", "bereute, bereut", "She never regretted her decision.", "B1.2"),
  h("k1-auswandern", "locker", "adj", "relaxed; loose", "Das Leben dort wirkt lockerer als in Deutschland.", "lockerer, am lockersten", "Life there seems more relaxed than in Germany.", "B1.2"),
  h("k1-auswandern", "sehnsüchtig", "adj", "longingly; full of longing", "Sie wartet sehnsüchtig auf den Besuch ihrer Freundin.", "", "She waits longingly for her friend's visit.", "B2"),

  w("k1-sprachen", "die Mehrsprachigkeit", "noun", "multilingualism", "Mehrsprachigkeit ist in der Schweiz ganz normal.", "nur Singular", "Multilingualism is completely normal in Switzerland."),
  w("k1-sprachen", "die Landessprache", "noun", "official national language", "Deutsch ist eine der Landessprachen der Schweiz.", "die Landessprachen", "German is one of Switzerland's national languages."),
  w("k1-sprachen", "die Mundart", "noun", "dialect", "In der Familie spricht sie oft Mundart.", "die Mundarten", "In the family she often speaks dialect."),
  w("k1-sprachen", "verstehen und verstanden werden", "phrase", "to understand and be understood", "Für ihn bedeutet Heimat, zu verstehen und verstanden zu werden.", "", "For him, home means understanding and being understood."),
  w("k1-sprachen", "etwas vermuten", "verb", "to assume; suspect", "Ich vermute, dass die Farbe für Französisch steht.", "vermutete, vermutet", "I assume that the color stands for French."),
  w("k1-sprachen", "offiziell", "adj", "official", "Das Land hat drei offizielle Sprachen.", "", "The country has three official languages."),
  w("k1-sprachen", "sich verständigen", "verb", "to communicate; make oneself understood", "Mit Gesten kann man sich manchmal verständigen.", "verständigte sich", "Sometimes one can communicate with gestures."),
  w("k1-sprachen", "die Muttersprache", "noun", "native language", "Ihre Muttersprache ist Türkisch.", "die Muttersprachen", "Her native language is Turkish."),
  w("k1-sprachen", "der Akzent", "noun", "accent", "An seinem Akzent hört man seine Herkunft.", "die Akzente", "You can hear his origin in his accent."),
  w("k1-sprachen", "sprachlich", "adj", "linguistic; language-related", "Sprachliche Vielfalt prägt den Alltag.", "", "Linguistic diversity shapes daily life."),

  w("k1-integration", "die Integration", "noun", "integration", "Integration braucht Zeit und gegenseitigen Respekt.", "nur Singular", "Integration needs time and mutual respect."),
  w("k1-integration", "die Herkunft", "noun", "origin", "Ihre Herkunft sieht man nicht als Problem.", "nur Singular", "Her origin is not seen as a problem."),
  w("k1-integration", "die Chancengleichheit", "noun", "equal opportunity", "Chancengleichheit ist für Kinder besonders wichtig.", "nur Singular", "Equal opportunity is especially important for children."),
  w("k1-integration", "sich einleben", "verb", "to settle in", "Nach einigen Monaten hat er sich gut eingelebt.", "lebte sich ein, eingelebt", "After a few months he settled in well."),
  w("k1-integration", "etwas verbergen", "verb", "to hide something", "Sie möchte ihre Herkunft nicht verbergen.", "verbarg, verborgen", "She does not want to hide her origin."),
  w("k1-integration", "ferner liegen", "phrase", "to be further from one's mind", "Nichts liegt ihr ferner, als sich zu verstellen.", "", "Nothing is further from her mind than pretending."),
  w("k1-integration", "farbenfroh", "adj", "colorful", "Sie trägt farbenfrohe Kleidung aus Togo.", "", "She wears colorful clothing from Togo."),
  w("k1-integration", "die Abstammung", "noun", "descent; background", "Der Regisseur ist deutscher Künstler türkischer Abstammung.", "nur Singular", "The director is a German artist of Turkish descent."),
  w("k1-integration", "das Milieu", "noun", "social environment", "Der Film zeigt ein multikulturelles Milieu.", "die Milieus", "The film shows a multicultural social environment."),
  w("k1-integration", "sich heimisch fühlen", "phrase", "to feel at home", "Er fühlt sich in zwei Kulturen heimisch.", "fühlt sich heimisch", "He feels at home in two cultures."),

  w("k2-koerper", "die Körpersprache", "noun", "body language", "Körpersprache verrät oft mehr als Worte.", "nur Singular", "Body language often reveals more than words."),
  w("k2-koerper", "die Mimik", "noun", "facial expression", "Ihre Mimik wirkt freundlich und offen.", "nur Singular", "Her facial expression seems friendly and open."),
  w("k2-koerper", "die Gestik", "noun", "gestures", "Starke Gestik kann eine Aussage betonen.", "nur Singular", "Strong gestures can emphasize a statement."),
  w("k2-koerper", "die Haltung", "noun", "posture; attitude", "Eine offene Haltung schafft Vertrauen.", "die Haltungen", "An open posture creates trust."),
  w("k2-koerper", "der Blickkontakt", "noun", "eye contact", "Im Gespräch sollte man Blickkontakt halten.", "nur Singular", "In conversation one should maintain eye contact."),
  w("k2-koerper", "wirken auf", "phrase", "to seem to; affect", "Auf dem zweiten Bild wirkt die Frau sicherer.", "wirken auf + Akk.", "In the second picture the woman seems more confident."),
  w("k2-koerper", "misslingen", "verb", "to fail; go wrong", "Ohne Blickkontakt kann ein Gespräch misslingen.", "misslang, misslungen", "Without eye contact a conversation can go wrong."),
  w("k2-koerper", "gelingen", "verb", "to succeed", "Mit Respekt gelingt die Begrüßung besser.", "gelang, gelungen", "With respect the greeting succeeds better."),
  w("k2-koerper", "kulturabhängig", "adj", "culture-dependent", "Gesten sind oft kulturabhängig.", "", "Gestures are often culture-dependent."),
  w("k2-koerper", "die Anwesenheit", "noun", "presence", "Die Anwesenheit anderer verändert unser Verhalten.", "nur Singular", "The presence of others changes our behavior."),

  w("k2-sprachen", "die Fremdsprache", "noun", "foreign language", "Eine Fremdsprache lernt man nicht nur im Unterricht.", "die Fremdsprachen", "One does not learn a foreign language only in class."),
  w("k2-sprachen", "kinderleicht", "adj", "child's play; very easy", "Die Werbung behauptet, Sprachenlernen sei kinderleicht.", "", "The advertisement claims that language learning is child's play."),
  w("k2-sprachen", "gelungen", "adj", "successful", "Das Projekt ist ein gelungenes Beispiel für Mehrsprachigkeit.", "", "The project is a successful example of multilingualism."),
  w("k2-sprachen", "die Mehrsprachigkeit", "noun", "multilingualism", "Frühe Mehrsprachigkeit kann viele Vorteile haben.", "nur Singular", "Early multilingualism can have many advantages."),
  w("k2-sprachen", "ein Argument anführen", "phrase", "to put forward an argument", "Im Artikel führt der Autor mehrere Argumente an.", "führt an, führte an", "In the article the author puts forward several arguments."),
  w("k2-sprachen", "etwas bezweifeln", "verb", "to doubt something", "Viele Eltern bezweifeln den Nutzen früher Kurse.", "bezweifelte, bezweifelt", "Many parents doubt the benefit of early courses."),
  w("k2-sprachen", "der Nachweis", "noun", "proof; evidence", "Für diese Behauptung fehlt ein klarer Nachweis.", "die Nachweise", "Clear evidence is missing for this claim."),
  w("k2-sprachen", "überfordern", "verb", "to overburden", "Zu viel Druck kann Kinder überfordern.", "überforderte, überfordert", "Too much pressure can overburden children."),
  w("k2-sprachen", "etwas fördern", "verb", "to support; promote", "Gute Spiele fördern den Wortschatz.", "förderte, gefördert", "Good games support vocabulary."),
  w("k2-sprachen", "die Aussprache", "noun", "pronunciation", "Kinder übernehmen die Aussprache oft schnell.", "nur Singular", "Children often pick up pronunciation quickly."),

  w("k2-smalltalk", "der Smalltalk", "noun", "small talk", "Smalltalk hilft beim ersten Kontakt.", "nur Singular", "Small talk helps with first contact."),
  w("k2-smalltalk", "das Gesprächsthema", "noun", "conversation topic", "Das Wetter ist ein einfaches Gesprächsthema.", "die Gesprächsthemen", "The weather is an easy conversation topic."),
  w("k2-smalltalk", "unverfänglich", "adj", "safe; harmless", "Für Smalltalk eignen sich unverfängliche Themen.", "", "Safe topics are suitable for small talk."),
  w("k2-smalltalk", "peinlich", "adj", "embarrassing", "Eine lange Pause kann peinlich wirken.", "", "A long pause can seem embarrassing."),
  w("k2-smalltalk", "ins Gespräch kommen", "phrase", "to get into conversation", "Mit einer Frage kommt man leichter ins Gespräch.", "kam, gekommen", "With a question it is easier to get into conversation."),
  w("k2-smalltalk", "das Eis brechen", "idiom", "to break the ice", "Ein freundlicher Kommentar bricht oft das Eis.", "bricht, brach, gebrochen", "A friendly comment often breaks the ice."),
  w("k2-smalltalk", "sich erkundigen nach", "phrase", "to ask about", "Sie erkundigt sich nach der Reise.", "erkundigen nach + Dat.", "She asks about the trip."),
  w("k2-smalltalk", "das Tabuthema", "noun", "taboo topic", "Geld ist in vielen Situationen ein Tabuthema.", "die Tabuthemen", "Money is a taboo topic in many situations."),
  w("k2-smalltalk", "höflich", "adj", "polite", "Eine höfliche Frage öffnet das Gespräch.", "", "A polite question opens the conversation."),
  w("k2-smalltalk", "oberflächlich", "adj", "superficial", "Smalltalk ist oft oberflächlich, aber nützlich.", "", "Small talk is often superficial but useful."),

  w("k2-streiten", "der Streit", "noun", "argument; fight", "Ein Streit muss nicht immer negativ enden.", "die Streite", "An argument does not always have to end negatively."),
  w("k2-streiten", "Kritik üben", "phrase", "to criticize", "Im Dialog übt sie vorsichtig Kritik.", "übt, übte, geübt", "In the dialogue she criticizes carefully."),
  w("k2-streiten", "die Ich-Botschaft", "noun", "I-message", "Eine Ich-Botschaft klingt weniger aggressiv.", "die Ich-Botschaften", "An I-message sounds less aggressive."),
  w("k2-streiten", "der Konsens", "noun", "consensus", "Ohne Konsens braucht man einen Kompromiss.", "nur Singular", "Without consensus one needs a compromise."),
  w("k2-streiten", "der Kompromiss", "noun", "compromise", "Ein guter Kompromiss respektiert beide Seiten.", "die Kompromisse", "A good compromise respects both sides."),
  w("k2-streiten", "genau hinhören", "phrase", "to listen carefully", "Beim Streit sollte man genau hinhören.", "hörte hin, hingehört", "During an argument one should listen carefully."),
  w("k2-streiten", "sich entschuldigen", "verb", "to apologize", "Nach dem Streit entschuldigt er sich.", "entschuldigte sich", "After the argument he apologizes."),
  w("k2-streiten", "konstruktiv", "adj", "constructive", "Konstruktive Kritik hilft beiden.", "", "Constructive criticism helps both people."),
  w("k2-streiten", "der Ausgang", "noun", "outcome", "Der Ausgang des Gesprächs war positiv.", "die Ausgänge", "The outcome of the conversation was positive."),
  w("k2-streiten", "etwas vorwerfen", "verb", "to reproach; accuse", "Sie wirft ihm Unpünktlichkeit vor.", "warf vor, vorgeworfen", "She reproaches him for being late."),

  w("k3-berufe", "der Nervenkitzel", "noun", "thrill", "Als Stuntman liebt er den Nervenkitzel.", "nur Singular", "As a stuntman he loves the thrill."),
  w("k3-berufe", "abwechslungsreich", "adj", "varied", "Ihr Beruf ist gefährlich, aber abwechslungsreich.", "", "Her job is dangerous but varied."),
  w("k3-berufe", "etwas durchhalten", "verb", "to endure; keep going", "Diesen Beruf hält man nicht ewig durch.", "hielt durch, durchgehalten", "One cannot keep doing this job forever."),
  w("k3-berufe", "der Zeitvertreib", "noun", "pastime", "Zuerst war der Blog nur ein Zeitvertreib.", "die Zeitvertreibe", "At first the blog was only a pastime."),
  w("k3-berufe", "hauptberuflich", "adj", "full-time; as main job", "Heute betreibt sie den Blog hauptberuflich.", "", "Today she runs the blog as her main job."),
  w("k3-berufe", "den Job an den Nagel hängen", "idiom", "to quit one's job", "Nach dem Erfolg hängt sie den Job an den Nagel.", "hängt, hing, gehängt", "After the success she quits her job."),
  w("k3-berufe", "der Werbepartner", "noun", "advertising partner", "Viele Werbepartner finanzieren den Blog.", "die Werbepartner", "Many advertising partners finance the blog."),
  w("k3-berufe", "der Stuntman", "noun", "stuntman", "Der Stuntman trainiert jeden Tag.", "die Stuntmen", "The stuntman trains every day."),
  w("k3-berufe", "die Parfümeurin", "noun", "female perfumer", "Die Parfümeurin kreiert neue Düfte.", "die Parfümeurinnen", "The perfumer creates new scents."),
  w("k3-berufe", "etwas kreieren", "verb", "to create", "Sie kreiert einen Duft für eine Seife.", "kreierte, kreiert", "She creates a scent for a soap."),
  h("k3-berufe", "der Maskenbildner", "noun", "make-up artist", "Der Maskenbildner arbeitet am Theater.", "die Maskenbildner", "The make-up artist works at the theater.", "B2"),
  h("k3-berufe", "das Fingerspitzengefühl", "noun", "sensitivity; tact; fine touch", "Für diesen Beruf braucht man viel Fingerspitzengefühl.", "nur Singular", "For this profession one needs a lot of sensitivity.", "B2"),
  h("k3-berufe", "die Ausdauer", "noun", "stamina; perseverance", "Am Wochenende zu arbeiten braucht Ausdauer.", "nur Singular", "Working at the weekend requires stamina.", "B1.2"),
  h("k3-berufe", "sich auf etwas einstellen", "phrase", "to prepare oneself for; adjust to", "Man muss sich auf unregelmäßige Arbeitszeiten einstellen.", "einstellen auf + Akk.", "One has to adjust to irregular working hours.", "B2"),
  h("k3-berufe", "etwas einsehen", "verb", "to realize; accept", "Irgendwann sah er ein, dass sein Talent nicht reicht.", "sah ein, eingesehen", "At some point he realized that his talent was not enough.", "B2"),
  h("k3-berufe", "mit etwas verbunden sein", "phrase", "to be connected with something", "Er suchte einen Beruf, der mit Musik verbunden ist.", "verbunden mit + Dat.", "He looked for a profession connected with music.", "B1.2"),
  h("k3-berufe", "das Geschick", "noun", "skill; dexterity", "Für den Beruf braucht man handwerkliches Geschick.", "nur Singular", "For the profession one needs manual skill.", "B2"),
  h("k3-berufe", "die Genauigkeit", "noun", "accuracy; precision", "Beim Reparieren ist Genauigkeit besonders wichtig.", "nur Singular", "Accuracy is especially important when repairing.", "B1.2"),
  h("k3-berufe", "restaurieren", "verb", "to restore", "Sie restauriert alte Instrumente.", "restaurierte, restauriert", "She restores old instruments.", "B2"),
  h("k3-berufe", "etwas stimmen", "verb", "to tune something", "Der Klavierbauer stimmt die Klaviere.", "stimmte, gestimmt", "The piano maker tunes the pianos.", "B2"),
  h("k3-berufe", "die Leidenschaft", "noun", "passion", "Farben und Formen waren schon immer ihre Leidenschaft.", "die Leidenschaften", "Colors and shapes have always been her passion.", "B1.2"),
  h("k3-berufe", "etwas umgestalten", "verb", "to redesign; transform", "Nach dem Abitur wollte sie Räume umgestalten.", "gestaltete um, umgestaltet", "After graduation she wanted to redesign rooms.", "B2"),
  h("k3-berufe", "handwerklich", "adj", "manual; craft-related", "Handwerkliches Geschick ist in diesem Beruf wichtig.", "", "Manual skill is important in this profession.", "B2"),
  h("k3-berufe", "nicht reichen", "phrase", "to not be enough", "Er sah ein, dass sein Talent nicht reicht.", "reichte nicht, nicht gereicht", "He realized that his talent was not enough.", "B1.2"),
  h("k3-berufe", "der Klavierbauer", "noun", "piano maker", "Als Klavierbauer repariert er Instrumente.", "die Klavierbauer", "As a piano maker he repairs instruments.", "B2"),

  w("k3-zufriedenheit", "die Erwartung", "noun", "expectation", "Die Arbeit erfüllt seine Erwartungen nicht.", "die Erwartungen", "The work does not meet his expectations."),
  w("k3-zufriedenheit", "eine Rolle spielen", "phrase", "to play a role", "Geld spielt bei der Berufswahl eine Rolle.", "spielt, spielte, gespielt", "Money plays a role in career choice."),
  w("k3-zufriedenheit", "eine reine Last sein", "phrase", "to be a pure burden", "Zu viele Überstunden sind eine reine Last.", "", "Too much overtime is a pure burden."),
  w("k3-zufriedenheit", "anspruchsvoll", "adj", "demanding", "Anspruchsvolle Aufgaben können motivieren.", "", "Demanding tasks can motivate."),
  w("k3-zufriedenheit", "etwas bewältigen", "verb", "to cope with; manage", "Mit genug Zeit kann sie die Aufgabe bewältigen.", "bewältigte, bewältigt", "With enough time she can manage the task."),
  w("k3-zufriedenheit", "ständig unter Stress stehen", "phrase", "to be constantly under stress", "Viele Arbeitnehmer stehen ständig unter Stress.", "steht, stand, gestanden", "Many employees are constantly under stress."),
  w("k3-zufriedenheit", "sinnvoll", "adj", "meaningful", "Sinnvolle Arbeit macht oft zufriedener.", "", "Meaningful work often makes people more satisfied."),
  w("k3-zufriedenheit", "der Stellenwechsel", "noun", "job change", "Ein Stellenwechsel kann neue Chancen bringen.", "die Stellenwechsel", "A job change can bring new opportunities."),
  w("k3-zufriedenheit", "überlastet", "adj", "overloaded", "Nach Wochen ohne Pause ist er überlastet.", "", "After weeks without a break he is overloaded."),
  w("k3-zufriedenheit", "die Arbeitszufriedenheit", "noun", "job satisfaction", "Arbeitszufriedenheit hängt nicht nur vom Gehalt ab.", "nur Singular", "Job satisfaction does not depend only on salary."),

  w("k3-team", "der Teamgeist", "noun", "team spirit", "Ein Ausflug kann den Teamgeist stärken.", "nur Singular", "An outing can strengthen team spirit."),
  w("k3-team", "Begeisterung ausdrücken", "phrase", "to express enthusiasm", "In der Besprechung drückt sie Begeisterung aus.", "drückt aus, ausgedrückt", "In the meeting she expresses enthusiasm."),
  w("k3-team", "Ablehnung ausdrücken", "phrase", "to express rejection", "Er drückt seine Ablehnung höflich aus.", "drückt aus, ausgedrückt", "He expresses his rejection politely."),
  w("k3-team", "die Absicht", "noun", "intention", "Die Absicht des Events ist bessere Zusammenarbeit.", "die Absichten", "The intention of the event is better cooperation."),
  w("k3-team", "die Einschränkung", "noun", "restriction; limitation", "Ohne klare Regeln gibt es Einschränkungen.", "die Einschränkungen", "Without clear rules there are restrictions."),
  w("k3-team", "die Einladung", "noun", "invitation", "Die Einladung zum Teamevent kommt per E-Mail.", "die Einladungen", "The invitation to the team event comes by email."),
  w("k3-team", "an etwas teilnehmen", "phrase", "to take part in something", "Alle sollen am Workshop teilnehmen.", "teilnehmen an + Dat.", "Everyone should take part in the workshop."),
  w("k3-team", "etwas vorschlagen", "verb", "to suggest something", "Der Chef schlägt ein gemeinsames Training vor.", "schlug vor, vorgeschlagen", "The boss suggests a shared training session."),
  w("k3-team", "zusammenarbeiten", "verb", "to cooperate", "Im Projekt arbeiten viele Abteilungen zusammen.", "arbeitete zusammen", "Many departments cooperate in the project."),
  w("k3-team", "die Teambildung", "noun", "team building", "Teambildung kostet Zeit, kann aber helfen.", "nur Singular", "Team building costs time but can help."),

  w("k3-bewerbung", "die Stellenausschreibung", "noun", "job advertisement", "Die Stellenausschreibung nennt mehrere Anforderungen.", "die Stellenausschreibungen", "The job advertisement names several requirements."),
  w("k3-bewerbung", "die Bewerbung", "noun", "application", "Sie schickt ihre Bewerbung am Montag ab.", "die Bewerbungen", "She sends her application on Monday."),
  w("k3-bewerbung", "der Lebenslauf", "noun", "CV; resume", "Der Lebenslauf muss übersichtlich sein.", "die Lebensläufe", "The CV must be clear."),
  w("k3-bewerbung", "das Anschreiben", "noun", "cover letter", "Im Anschreiben erklärt er seine Motivation.", "die Anschreiben", "In the cover letter he explains his motivation."),
  w("k3-bewerbung", "die Anforderung", "noun", "requirement", "Nicht jede Anforderung ist zwingend.", "die Anforderungen", "Not every requirement is mandatory."),
  w("k3-bewerbung", "die Berufserfahrung", "noun", "professional experience", "Berufserfahrung ist für die Stelle wichtig.", "die Berufserfahrungen", "Professional experience is important for the position."),
  w("k3-bewerbung", "das Praktikum", "noun", "internship", "Im Praktikum hat sie Kunden betreut.", "die Praktika", "During the internship she served customers."),
  w("k3-bewerbung", "die Weiterbildung", "noun", "continuing education", "Eine Weiterbildung passt gut zur Stelle.", "die Weiterbildungen", "Continuing education fits the position well."),
  w("k3-bewerbung", "seriös", "adj", "serious; professional", "Auf dem Foto sollte man seriös wirken.", "", "In the photo one should look professional."),
  w("k3-bewerbung", "etwas vermeiden", "verb", "to avoid something", "Tippfehler sollte man unbedingt vermeiden.", "vermied, vermieden", "One should definitely avoid typing errors."),

  w("k4-sport", "die Gewalt", "noun", "violence", "Sport kann Jugendlichen einen Weg aus der Gewalt zeigen.", "nur Singular", "Sport can show young people a way out of violence."),
  w("k4-sport", "sozial schwach", "adj", "socially disadvantaged", "Das Projekt hilft in einem sozial schwachen Stadtteil.", "", "The project helps in a socially disadvantaged district."),
  w("k4-sport", "der Stadtteil", "noun", "district; neighborhood", "Im Stadtteil gibt es wenige Freizeitangebote.", "die Stadtteile", "There are few leisure activities in the district."),
  w("k4-sport", "das Training", "noun", "training", "Regelmäßiges Training stärkt das Selbstvertrauen.", "die Trainings", "Regular training strengthens self-confidence."),
  w("k4-sport", "respektiert werden", "phrase", "to be respected", "Die Jugendlichen wollen respektiert werden.", "", "The young people want to be respected."),
  w("k4-sport", "etwas leisten", "verb", "to achieve; perform", "Im Sport merken sie, dass sie etwas leisten können.", "leistete, geleistet", "In sports they notice that they can achieve something."),
  w("k4-sport", "die Strafanzeige", "noun", "criminal complaint", "Die Jugendlichen mussten eine Strafanzeige vermeiden.", "die Strafanzeigen", "The young people had to avoid a criminal complaint."),
  w("k4-sport", "machtlos", "adj", "powerless", "Der Sicherheitsleiter fühlte sich machtlos.", "", "The security manager felt powerless."),
  w("k4-sport", "ein offenes Ohr haben", "idiom", "to be willing to listen", "Der Trainer hat immer ein offenes Ohr.", "", "The coach is always willing to listen."),
  w("k4-sport", "jemandem zur Seite stehen", "phrase", "to support someone", "Die Betreuer stehen den Jugendlichen zur Seite.", "steht, stand, gestanden", "The supervisors support the young people."),
  h("k4-sport", "sich die Langeweile vertreiben", "phrase", "to pass the time; relieve boredom", "Einige Jugendliche vertreiben sich die Langeweile im Einkaufszentrum.", "vertrieb sich, vertrieben", "Some young people pass the time in the shopping center.", "B2"),
  h("k4-sport", "klauen", "verb", "to steal", "Manche Jugendliche klauen kleine Dinge.", "klaute, geklaut", "Some young people steal small things.", "B1.2"),
  h("k4-sport", "Handtaschen stehlen", "phrase", "to steal handbags", "Im Zentrum wurden Handtaschen gestohlen.", "stahl, gestohlen", "Handbags were stolen in the center.", "B1.2"),
  h("k4-sport", "Graffiti sprühen", "phrase", "to spray graffiti", "Einige Jugendliche sprühten Graffiti an die Wand.", "sprühte, gesprüht", "Some young people sprayed graffiti on the wall.", "B1.2"),
  h("k4-sport", "gebürtig", "adj", "native-born; originally from", "Fahim ist ein gebürtiger Afghane.", "", "Fahim is originally from Afghanistan.", "B2"),
  h("k4-sport", "jemanden schnappen", "verb", "to catch someone", "Der Sicherheitsleiter schnappte Jugendliche beim Klauen.", "schnappte, geschnappt", "The security manager caught young people stealing.", "B1.2"),
  h("k4-sport", "randalieren", "verb", "to riot; vandalize", "Nach der Schule randalierten einige Jugendliche.", "randalierte, randaliert", "After school some young people vandalized things.", "B2"),
  h("k4-sport", "jemanden erwischen", "verb", "to catch someone in the act", "Wer erwischt wurde, bekam Hausverbot.", "erwischte, erwischt", "Anyone caught got banned from the premises.", "B1.2"),
  h("k4-sport", "zunächst", "adv", "at first; initially", "Zunächst bekam der Jugendliche Hausverbot.", "", "At first the young person was banned from the premises.", "B1.2"),
  h("k4-sport", "das Hausverbot", "noun", "ban from premises", "Nach dem Diebstahl bekam er Hausverbot.", "die Hausverbote", "After the theft he was banned from the premises.", "B2"),
  h("k4-sport", "nichts nützen", "phrase", "to be of no use", "Das Hausverbot nützte nichts.", "nützte, genützt", "The ban was of no use.", "B1.2"),
  h("k4-sport", "jemanden der Polizei übergeben", "phrase", "to hand someone over to the police", "Der Sicherheitsleiter übergab ihn der Polizei.", "übergab, übergeben", "The security manager handed him over to the police.", "B2"),
  h("k4-sport", "jemandem begegnen", "verb", "to meet; encounter someone", "Am nächsten Tag begegnete er ihm erneut.", "begegnete, begegnet", "The next day he encountered him again.", "B1.2"),
  h("k4-sport", "garantiert", "adv", "definitely; guaranteed", "Er war garantiert wieder im Einkaufszentrum.", "", "He was definitely back in the shopping center.", "B1.2"),
  h("k4-sport", "erneut", "adv", "again; once more", "Am nächsten Tag kam er erneut zurück.", "", "The next day he came back again.", "B1.2"),
  h("k4-sport", "tatenlos", "adj", "inactive; doing nothing", "Der Sicherheitsleiter wollte nicht tatenlos bleiben.", "", "The security manager did not want to remain inactive.", "B2"),
  h("k4-sport", "der Kampfsport", "noun", "martial arts", "Kampfsport kann Disziplin vermitteln.", "nur Singular", "Martial arts can teach discipline.", "B1.2"),
  h("k4-sport", "jemandem etwas beibringen", "verb", "to teach someone something", "Er bringt Jugendlichen Taekwondo bei.", "brachte bei, beigebracht", "He teaches young people taekwondo.", "B1.2"),
  h("k4-sport", "geistig", "adj", "mental; intellectual", "Taekwondo beschreibt auch einen geistigen Weg.", "", "Taekwondo also describes a mental path.", "B2"),
  h("k4-sport", "die Eigenschaft", "noun", "quality; characteristic", "Disziplin ist eine wichtige Eigenschaft.", "die Eigenschaften", "Discipline is an important quality.", "B1.2"),
  h("k4-sport", "die Selbstbeherrschung", "noun", "self-control", "Im Training lernen die Jugendlichen Selbstbeherrschung.", "nur Singular", "In training the young people learn self-control.", "B2"),
  h("k4-sport", "die Verantwortung", "noun", "responsibility", "Sie übernehmen Verantwortung für ihr Handeln.", "die Verantwortungen", "They take responsibility for their actions.", "B1.2"),
  h("k4-sport", "etwas weitergeben", "verb", "to pass something on", "Er möchte sein Wissen an Jugendliche weitergeben.", "gab weiter, weitergegeben", "He wants to pass his knowledge on to young people.", "B1.2"),
  h("k4-sport", "die Eintragung", "noun", "entry; record", "Eine Eintragung im Führungszeugnis kann problematisch sein.", "die Eintragungen", "An entry in the criminal record certificate can be problematic.", "B2"),
  h("k4-sport", "das Führungszeugnis", "noun", "criminal record certificate", "Für manche Berufe braucht man ein Führungszeugnis.", "die Führungszeugnisse", "For some jobs one needs a criminal record certificate.", "B2"),
  h("k4-sport", "sich die Zukunft verbauen", "phrase", "to ruin one's future", "Mit solchen Eintragungen verbaut man sich die Zukunft.", "verbaute, verbaut", "With such records one ruins one's future.", "B2"),
  h("k4-sport", "die Waffe", "noun", "weapon", "Im Training lernen sie, Konflikte ohne Waffe zu lösen.", "die Waffen", "In training they learn to solve conflicts without a weapon.", "B1.2"),
  h("k4-sport", "jemanden beleidigen", "verb", "to insult someone", "Wer jemanden beleidigt, muss Liegestütze machen.", "beleidigte, beleidigt", "Anyone who insults someone has to do push-ups.", "B1.2"),
  h("k4-sport", "die Liegestütze", "noun", "push-up", "Nach einem Regelbruch macht er Liegestütze.", "die Liegestütze", "After breaking a rule he does push-ups.", "B1.2"),
  h("k4-sport", "selbstbewusst", "adj", "self-confident", "Durch das Training werden die Jugendlichen selbstbewusster.", "selbstbewusster", "Through training the young people become more self-confident.", "B1.2"),
  h("k4-sport", "Zukunftspläne entwickeln", "phrase", "to develop plans for the future", "Manche entwickeln nach dem Training Zukunftspläne.", "entwickelte, entwickelt", "Some develop plans for the future after training.", "B2"),
  h("k4-sport", "die Sachbeschädigung", "noun", "property damage", "Die Zahl der Sachbeschädigungen ging zurück.", "die Sachbeschädigungen", "The number of property damage cases went down.", "B2"),
  h("k4-sport", "ehemalig", "adj", "former", "Der ehemalige Sicherheitsleiter ist noch für die Jugendlichen da.", "", "The former security manager is still there for the young people.", "B1.2"),
  h("k4-sport", "jemanden plagen", "verb", "to trouble; bother someone", "Wenn Probleme jemanden plagen, kann er mit dem Trainer sprechen.", "plagte, geplagt", "When problems trouble someone, he can talk to the coach.", "B2"),
  h("k4-sport", "komisch scheinen", "phrase", "to seem strange", "Zunächst scheint die Idee recht komisch.", "scheint, schien, geschienen", "At first the idea seems rather strange.", "B1.2"),
  h("k4-sport", "kriminell", "adj", "criminal", "Er hilft kriminellen Jugendlichen durch Sport.", "", "He helps criminal young people through sports.", "B1.2"),
  h("k4-sport", "Mist bauen", "idiom", "to mess up; do something stupid", "Wer Taekwondo lernt, merkt, dass Mist bauen keinen Sinn macht.", "baute, gebaut", "Anyone who learns taekwondo notices that messing up makes no sense.", "B1.2"),

  w("k4-armut", "die Armut", "noun", "poverty", "Armut bedeutet oft mehr als wenig Geld.", "nur Singular", "Poverty often means more than little money."),
  w("k4-armut", "die Ausgrenzung", "noun", "exclusion", "Soziale Ausgrenzung macht Menschen krank.", "nur Singular", "Social exclusion makes people ill."),
  w("k4-armut", "wesentlich", "adj", "essential; major", "Armut ist ein wesentlicher Faktor für Stress.", "", "Poverty is a major factor for stress."),
  w("k4-armut", "die Entstehung", "noun", "development; emergence", "Die Entstehung von Problemen hat viele Gründe.", "nur Singular", "The development of problems has many reasons."),
  w("k4-armut", "langfristig", "adj", "long-term", "Gesundheit muss langfristig gefördert werden.", "", "Health must be supported long-term."),
  w("k4-armut", "zahlreich", "adj", "numerous", "Auf dem Kongress gibt es zahlreiche Vorträge.", "", "There are numerous lectures at the congress."),
  w("k4-armut", "der Bedürftige", "noun", "person in need", "Die Tafeln unterstützen Bedürftige mit Lebensmitteln.", "die Bedürftigen", "Food banks support people in need with food."),
  w("k4-armut", "sich ehrenamtlich engagieren", "phrase", "to volunteer", "Viele Menschen engagieren sich ehrenamtlich.", "engagieren sich", "Many people volunteer."),
  w("k4-armut", "die Spende", "noun", "donation", "Die Organisation finanziert sich über Spenden.", "die Spenden", "The organization is financed through donations."),
  w("k4-armut", "schlank gehalten", "phrase", "kept lean; streamlined", "Die Verwaltung ist bewusst schlank gehalten.", "", "The administration is deliberately kept lean."),

  w("k4-internet", "das Internetverhalten", "noun", "internet behavior", "Das Internetverhalten vieler Jugendlicher verändert sich.", "nur Singular", "Many young people's internet behavior is changing."),
  w("k4-internet", "die Onlinesucht", "noun", "online addiction", "Onlinesucht kann den Alltag stark bestimmen.", "nur Singular", "Online addiction can strongly dominate daily life."),
  w("k4-internet", "mehrmals", "adv", "several times", "Er spielt mehrmals pro Woche online.", "", "He plays online several times a week."),
  w("k4-internet", "überraschen", "verb", "to surprise", "Die Zahlen überraschen viele Eltern.", "überraschte, überrascht", "The numbers surprise many parents."),
  w("k4-internet", "die Personengruppe", "noun", "group of people", "Auch ältere Personengruppen nutzen Spiele.", "die Personengruppen", "Older groups of people also use games."),
  w("k4-internet", "abhängig sein von", "phrase", "to be dependent on", "Manche Jugendliche sind vom Spiel abhängig.", "abhängig von + Dat.", "Some young people are dependent on the game."),
  w("k4-internet", "etwas kontrollieren", "verb", "to control something", "Eltern können die Bildschirmzeit kontrollieren.", "kontrollierte, kontrolliert", "Parents can control screen time."),
  w("k4-internet", "sich zurückziehen", "verb", "to withdraw", "Bei Problemen zieht er sich oft zurück.", "zog sich zurück, zurückgezogen", "When he has problems, he often withdraws."),
  w("k4-internet", "die Gewohnheit", "noun", "habit", "Eine schlechte Gewohnheit lässt sich ändern.", "die Gewohnheiten", "A bad habit can be changed."),
  w("k4-internet", "etwas ablegen", "verb", "to give up; get rid of", "Sie möchte die alte Gewohnheit ablegen.", "legte ab, abgelegt", "She wants to give up the old habit."),

  w("k4-rollen", "die Gleichberechtigung", "noun", "equality", "Gleichberechtigung im Beruf bleibt ein wichtiges Thema.", "nur Singular", "Equality at work remains an important topic."),
  w("k4-rollen", "die Frauenquote", "noun", "quota for women", "Einige fordern eine verpflichtende Frauenquote.", "die Frauenquoten", "Some people demand a mandatory quota for women."),
  w("k4-rollen", "die Führungsposition", "noun", "leadership position", "Mehr Frauen sollen Führungspositionen bekommen.", "die Führungspositionen", "More women should get leadership positions."),
  w("k4-rollen", "etwas unter einen Hut bekommen", "idiom", "to reconcile; balance", "Beruf und Familie unter einen Hut zu bekommen ist schwierig.", "", "Balancing work and family is difficult."),
  w("k4-rollen", "Vollzeit arbeiten", "phrase", "to work full-time", "Mit kleinen Kindern kann Vollzeit arbeiten schwierig sein.", "", "Working full-time can be difficult with small children."),
  w("k4-rollen", "im Nachteil sein", "phrase", "to be at a disadvantage", "Viele Eltern fühlen sich beruflich im Nachteil.", "", "Many parents feel disadvantaged professionally."),
  w("k4-rollen", "kinderfeindlich", "adj", "hostile to children", "Manche erleben die Gesellschaft als kinderfeindlich.", "", "Some experience society as hostile to children."),
  w("k4-rollen", "die Erwerbsarbeit", "noun", "paid work", "Erwerbsarbeit wird oft ungleich verteilt.", "nur Singular", "Paid work is often distributed unequally."),
  w("k4-rollen", "die Perspektive", "noun", "perspective", "Frauen und Männer betrachten Probleme aus verschiedenen Perspektiven.", "die Perspektiven", "Women and men view problems from different perspectives."),
  w("k4-rollen", "etwas in Frage stellen", "phrase", "to question something", "Der Artikel stellt alte Rollenbilder in Frage.", "stellt, stellte, gestellt", "The article questions old role models."),
  h("k4-rollen", "die Sozialforschung", "noun", "social research", "Das Wissenschaftszentrum arbeitet in der Sozialforschung.", "nur Singular", "The research center works in social research.", "B2"),
  h("k4-rollen", "angewandt", "adj", "applied", "Das Institut beschäftigt sich mit angewandter Sozialwissenschaft.", "", "The institute deals with applied social science.", "B2"),
  h("k4-rollen", "der Lebensentwurf", "noun", "life plan; life concept", "Die Studie untersucht Lebensentwürfe junger Menschen.", "die Lebensentwürfe", "The study examines young people's life plans.", "B2"),
  h("k4-rollen", "der Lebensverlauf", "noun", "course of life", "Lebensverläufe verändern sich über die Zeit.", "die Lebensverläufe", "Courses of life change over time.", "B2"),
  h("k4-rollen", "etwas verfolgen", "verb", "to follow; track something", "Die Studie verfolgt die Entwicklung über mehrere Jahre.", "verfolgte, verfolgt", "The study tracks the development over several years.", "B1.2"),
  h("k4-rollen", "die Befragten", "noun", "respondents; people surveyed", "Die Befragten sind zwischen 21 und 34 Jahre alt.", "Plural", "The respondents are between 21 and 34 years old.", "B2"),
  h("k4-rollen", "zentral", "adj", "central; key", "Die zentralen Ergebnisse stehen am Anfang.", "", "The key results are at the beginning.", "B1.2"),
  h("k4-rollen", "bemerkenswert", "adj", "remarkable", "Bemerkenswert ist der Wertewandel der Männer.", "", "The change in men's values is remarkable.", "B2"),
  h("k4-rollen", "der Wertewandel", "noun", "change in values", "Der Wertewandel zeigt sich in neuen Familienbildern.", "nur Singular", "The change in values appears in new family images.", "B2"),
  h("k4-rollen", "der Unterhalt", "noun", "financial support; livelihood", "Ein Partner soll für den Unterhalt sorgen.", "nur Singular", "One partner should provide financial support.", "B2"),
  h("k4-rollen", "der Alleinernährer", "noun", "sole breadwinner", "Immer weniger Männer sehen sich als Alleinernährer.", "die Alleinernährer", "Fewer and fewer men see themselves as sole breadwinners.", "B2"),
  h("k4-rollen", "der Rückzug", "noun", "withdrawal; retreat", "Der Text spricht von keinem Rückzug in die Familie.", "die Rückzüge", "The text speaks of no withdrawal into the family.", "B2"),
  h("k4-rollen", "eine Familie gründen", "phrase", "to start a family", "Viele Frauen haben eine Familie gegründet.", "gründete, gegründet", "Many women have started a family.", "B1.2"),
  h("k4-rollen", "von etwas abweichen", "verb", "to deviate from something", "Sie weichen nicht von ihren Werten ab.", "wich ab, abgewichen", "They do not deviate from their values.", "B2"),
  h("k4-rollen", "etwas als selbstverständlich erachten", "phrase", "to regard something as self-evident", "Sie erachten Erwerbsarbeit als selbstverständlich.", "erachtete, erachtet", "They regard paid work as self-evident.", "B2"),
  h("k4-rollen", "der Anteil", "noun", "share; proportion", "Der Anteil dieser Gruppe liegt unter fünf Prozent.", "die Anteile", "The share of this group is below five percent.", "B1.2"),
  h("k4-rollen", "der Nachwuchs", "noun", "offspring; young talent", "Viele Frauen wünschen sich Nachwuchs.", "nur Singular", "Many women want children.", "B2"),
  h("k4-rollen", "die Vereinbarkeit", "noun", "compatibility; ability to combine", "Die Vereinbarkeit von Beruf und Familie bleibt schwierig.", "nur Singular", "Combining work and family remains difficult.", "B2"),
  h("k4-rollen", "etwas beurteilen", "verb", "to judge; assess", "Die jungen Frauen beurteilen die Lage zurückhaltend.", "beurteilte, beurteilt", "The young women assess the situation cautiously.", "B1.2"),
  h("k4-rollen", "zurückhaltend", "adj", "reserved; cautious", "Sie reagieren auf die Frage eher zurückhaltend.", "", "They react rather cautiously to the question.", "B2"),
  h("k4-rollen", "auf etwas eingehen", "verb", "to respond to something; address", "Unternehmen sollten auf die Wünsche von Eltern eingehen.", "ging ein, eingegangen", "Companies should respond to parents' wishes.", "B2"),
  h("k4-rollen", "gefährdet", "adj", "at risk; endangered", "Viele sehen ihre Karriere gefährdet.", "", "Many see their career at risk.", "B1.2"),
  h("k4-rollen", "die Existenzsicherung", "noun", "securing a livelihood", "Beide Partner sollen zur Existenzsicherung beitragen.", "nur Singular", "Both partners should contribute to securing a livelihood.", "B2"),

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

const exampleTranslations = {
  "eine Fähigkeit erwerben": "Children acquire analytical skills early.",
  "die Nachwuchskraft": "Good junior talent is important for companies.",
  "die Forschungseinrichtung": "The research institution works together with schools.",
  "der Bedarf an": "The demand for skilled workers is increasing.",
  "qualifiziert": "The laboratory needs qualified staff.",
  "ein Studium absolvieren": "She is completing a degree in Berlin.",
  "schrumpfend": "The shrinking number of applicants is a problem.",
  "die Weichen stellen": "Early experiences set the course for a career.",
  "sich voll entfalten": "In a good environment, children can develop fully.",
  "die Begeisterung wecken": "Experiments spark enthusiasm for physics.",
  "durchführen": "The class conducts an experiment.",
  "konzipieren": "The course is designed for B2 learners.",
  "die Scheu abbauen": "Simple tasks reduce hesitation about grammar.",
  "das Phänomen": "The phenomenon can be explained easily.",
  "überlebenswichtig": "Research is vital for some companies.",
  "die Anleitung": "Please follow the instructions first.",
  "die Notlüge": "A white lie is often meant to spare someone.",
  "die Versuchsperson": "The test subject answers questions.",
  "unsympathisch": "He seems unlikeable when he exaggerates.",
  "übertreiben": "On a first meeting, one should not exaggerate.",
  "die Tendenz": "Many people have the tendency to present themselves better.",
  "sich präsentieren": "In conversation, she presents herself very calmly.",
  "längerfristig": "Long-term relationships need trust.",
  "kurzfristig": "Short-term acquaintances often remain superficial.",
  "die Bekanntschaft": "The acquaintance became a friendship.",
  "in der Lage sein": "Children are able to understand rules early.",
  "der Artgenosse": "Animals sometimes warn members of their own species.",
  "täuschen": "Advertising can deceive customers.",
  "die Täuschung": "The deception was noticed quickly.",
  "über etwas verfügen": "The course has many exercises available.",
  "zu einer Lüge greifen": "Out of fear, he resorts to a lie.",
  "einem Konflikt aus dem Weg gehen": "She avoids the conflict.",
  "weit verbreitet": "This opinion is widespread.",
  "wünschenswert": "Honesty is desirable in conversations.",
  "ertragen": "Some people find criticism hard to tolerate.",
  "glaubwürdig": "A credible explanation helps.",
  "die Spezies": "Humans are a very influential species.",
  "die Prognose": "At first, the prediction sounds pessimistic.",
  "ohne jemanden auskommen": "Nature manages without us.",
  "vermissen": "Hardly anyone would miss the noise.",
  "sich etwas zurückerobern": "Nature reclaims the city.",
  "Spuren hinterlassen": "Plastic leaves traces for a long time.",
  "sichtbar": "The damage remains visible for a long time.",
  "sich um etwas kümmern": "Nobody takes care of the pumps.",
  "das Grundwasser": "Groundwater can enter tunnels.",
  "freie Bahn haben": "Without control, the water has free rein.",
  "einstürzen": "Old buildings can collapse after years.",
  "versinken": "Streets sink into the water.",
  "etwas fest im Griff haben": "Nature has the city firmly under control.",
  "sich vermehren": "Some animals reproduce quickly.",
  "vom Aussterben bedroht": "Some species are threatened with extinction.",
  "zerfallen": "Many structures decay over time.",
  "geschützt": "Protected buildings remain preserved longer.",
  "der Kunststoff": "Plastics break down only slowly.",
  "etwas abbauen": "Bacteria can break down some substances.",
  "deprimierend": "The idea seems depressing.",
  "rastlos": "After coffee, I feel restless.",
  "verschlafen": "On Sunday he sleeps away half the morning.",
  "entspannen": "During sleep, the muscles relax.",
  "verarbeiten": "The brain processes new impressions.",
  "zwischendurch": "In between, I take a short break.",
  "im Schnitt": "On average, I study for twenty minutes.",
  "eingerechnet": "Breaks are included in the time.",
  "schlaflos": "After the exam, she was sleepless.",
  "durcharbeiten": "Working through the night is not a good idea.",
  "der Ausweis": "For some people, stress is a sign of achievement.",
  "die Leistungsfähigkeit": "Sleep increases performance capacity.",
  "gehoben": "The restaurant has an upscale atmosphere.",
  "der Beweis": "That is not proof of success.",
  "der Beleg": "The text provides evidence for the thesis.",
  "verpennen": "I do not want to sleep through the appointment.",
  "vernünftig": "After little sleep, I can hardly think sensibly.",
  "dauerhaft": "Long-lasting stress makes people ill.",
  "der Schlafmangel": "Lack of sleep weakens concentration.",
  "die Schlafstörung": "Sleep disorders should be taken seriously.",
  "sich wälzen": "He tosses and turns in bed at night.",
  "die Wirkung": "A short nap often has a positive effect.",
  "das Nickerchen": "After eating, I take a short nap.",
  "vorbildlicher Eifer": "Exemplary diligence also needs breaks.",
  "sinken lassen": "She lets her head sink onto her arms.",
  "die Nachteule": "As a night owl, he studies late in the evening.",
  "sich trösten mit": "I console myself with a coffee.",
  "jemandem zufolge": "According to the study, a short break helps.",
  "hemmen": "Tiredness hinders concentration.",
  "ausreichen": "Four hours of sleep are rarely sufficient.",
  "der Nobelpreisträger": "The Nobel Prize winner became world-famous.",
  "eigensinnig": "Headstrong people often ask more precise questions.",
  "die Pflichtveranstaltung": "The mandatory class starts at eight.",
  "grübeln": "He ponders the problem for a long time.",
  "stets": "She always remains curious.",
  "maßgeblich": "His idea was decisive for the project.",
  "das Weltbild": "New discoveries change the worldview.",
  "die Relativitätstheorie": "The theory of relativity made Einstein famous.",
  "die Sonnenfinsternis": "A solar eclipse confirmed the theory.",
  "etwas bestätigen": "The data confirm the assumption.",
  "auf einen Schlag": "All at once, the news became known.",
  "die Überzeugung": "He stands by his political convictions.",
  "sich engagieren für": "Many people are committed to peace.",
  "der Pazifismus": "Pacifism rejects war as a means.",
  "die Vortragsreihe": "The lecture series takes place in the USA.",
  "das Vermögen": "His assets were confiscated.",
  "konfiszieren": "The authorities confiscate the property.",
  "der Einsatz": "He wanted to prevent the use of the bomb.",
  "verhindern": "Good planning prevents mistakes.",
  "sich gegen etwas wenden": "She opposes violence.",
  "wahrnehmen": "People perceive smells quickly.",
  "verströmen": "The pastry gives off a sweet scent.",
  "lüften": "We have to air out the room.",
  "duften": "The roses smell pleasant in the garden.",
  "stinken": "The cheese smells terrible.",
  "der Wohlgeruch": "The pleasant smell reminds me of vacation.",
  "der Gestank": "The stench from the kitchen was strong.",
  "angenehm": "Lavender smells pleasant.",
  "unangenehm": "Cigarette smoke is unpleasant for many people.",
  "die Filmsequenz": "The film sequence shows an experiment.",
  "etwas auslösen": "Scents trigger memories.",
  "die Erinnerung": "The smell awakens a memory.",
  "beeinflussen": "Music influences our mood.",
  "die Kaufentscheidung": "Advertising influences the purchase decision.",
  "hervorrufen": "Smells can evoke feelings.",
  "künstlich": "Artificial scents are everywhere.",
  "umgeben sein von": "We are surrounded by advertising.",
  "jemanden an der Nase herumführen": "The seller deceives the customers.",
  "einen guten Riecher haben": "She has a good instinct for trends.",
  "jemanden nicht riechen können": "He cannot stand his neighbor.",
  "vor der Nase wegfahren": "The bus left right in front of me.",
  "seine Nase in etwas stecken": "He pokes his nose into other people's problems.",
  "auf die Nase fallen": "With this plan, the company failed."
};

const stateKey = "aspekte-b2-vocab-progress-v1";
const learnBatchSize = 3;
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
let currentChapter = "k1";
let currentLesson = "all";
let studyPhase = "learn";
let currentQuestion = null;
let currentLearnItem = null;
let selectedOption = null;
let awaitingNext = false;
let germanVoices = [];
let learnBatch = [];
let learnIndex = 0;
let learnStage = "study";
let drillQueue = [];
let drillTotal = 0;

const els = {
  appTitle: document.querySelector("#appTitle"),
  chapterNumber: document.querySelector("#chapterNumber"),
  chapterTitle: document.querySelector("#chapterTitle"),
  chapterSummary: document.querySelector("#chapterSummary"),
  chapterTabs: document.querySelector("#chapterTabs"),
  roundStep: document.querySelector("#roundStep"),
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
  stageStudy: document.querySelector("#stageStudy"),
  stageRecall: document.querySelector("#stageRecall"),
  stageMix: document.querySelector("#stageMix"),
  stageReview: document.querySelector("#stageReview"),
  resetProgress: document.querySelector("#resetProgress"),
  searchInput: document.querySelector("#searchInput"),
  bankTitle: document.querySelector("#bankTitle"),
  wordGrid: document.querySelector("#wordGrid"),
  template: document.querySelector("#wordCardTemplate")
};

function w(lesson, term, type, translation, example, form, exampleEn = "", meta = {}) {
  const lessonMeta = lessons.find((entry) => entry.id === lesson);
  return {
    id: `${lesson}-${term.toLowerCase().replace(/[^a-zäöüß0-9]+/gi, "-")}`,
    chapter: lessonMeta?.chapter || "k5",
    lesson,
    term,
    type,
    translation,
    example,
    form,
    exampleEn,
    level: meta.level || "B1.2/B2",
    priority: meta.priority || "core"
  };
}

function h(lesson, term, type, translation, example, form, exampleEn, level = "B1.2/B2") {
  return w(lesson, term, type, translation, example, form, exampleEn, { priority: "focus", level });
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

function currentChapterMeta() {
  return chapters.find((chapter) => chapter.id === currentChapter) || chapters[0];
}

function chapterWords(chapterId = currentChapter) {
  return vocab.filter((item) => item.chapter === chapterId);
}

function chapterLessons(chapterId = currentChapter) {
  return lessons.filter((lesson) => lesson.chapter === chapterId);
}

function renderChapters() {
  els.chapterTabs.innerHTML = "";
  chapters.forEach((chapter) => {
    const btn = document.createElement("button");
    btn.className = "chapter-tab";
    btn.type = "button";
    btn.dataset.chapter = chapter.id;
    btn.innerHTML = `<span>Kapitel ${chapter.number}</span><strong>${chapter.title}</strong>`;
    btn.addEventListener("click", () => {
      currentChapter = chapter.id;
      currentLesson = "all";
      learnBatch = [];
      learnIndex = 0;
      els.searchInput.value = "";
      renderLessons();
      startCurrentPhase();
      updateStats();
    });
    els.chapterTabs.appendChild(btn);
  });
}

function updateChapterPanel() {
  const chapter = currentChapterMeta();
  els.appTitle.textContent = `Kapitel ${chapter.number} Worttraining`;
  els.chapterNumber.textContent = chapter.number;
  els.chapterTitle.textContent = chapter.title;
  els.chapterSummary.textContent = chapter.subtitle;
  els.bankTitle.textContent = `Kapitel ${chapter.number} deck`;
  document.title = `Kapitel ${chapter.number} Worttraining`;
  document.querySelectorAll(".chapter-tab").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.chapter === currentChapter);
  });
}

function renderLessons() {
  els.lessonList.innerHTML = "";
  const chapter = currentChapterMeta();
  const allButton = lessonButton({ id: "all", icon: chapter.number, title: `All Kapitel ${chapter.number}`, subtitle: `${chapterWords().length} items` });
  els.lessonList.appendChild(allButton);
  chapterLessons().forEach((lesson) => els.lessonList.appendChild(lessonButton(lesson)));
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
  const scopedWords = chapterWords();
  const learned = scopedWords.filter((item) => isLearned(item)).length;
  const mastered = scopedWords.filter((item) => itemState(item.id).mastery >= 4).length;
  const currentRound = learnStage === "drill"
    ? Math.min(learnBatchSize, learnBatch.length)
    : Math.min(learnIndex + 1, Math.max(1, learnBatch.length));
  els.roundStep.textContent = currentRound;
  els.xp.textContent = state.xp;
  els.streak.textContent = state.streak;
  els.learned.textContent = learned;
  els.totalLearnWords.textContent = scopedWords.length;
  els.mastered.textContent = mastered;
  els.totalWords.textContent = scopedWords.length;
  els.learnTab.classList.toggle("active", studyPhase === "learn");
  els.practiceTab.classList.toggle("active", studyPhase === "practice");
  updateChapterPanel();
  updateCycleStrip();

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

function updateCycleStrip() {
  const stages = {
    study: els.stageStudy,
    recall: els.stageRecall,
    mix: els.stageMix,
    review: els.stageReview
  };
  Object.values(stages).forEach((node) => node.classList.remove("active", "done"));
  if (studyPhase === "practice") {
    stages.review.classList.add("active");
    return;
  }
  if (learnStage === "study") {
    stages.study.classList.add("active");
    return;
  }
  if (learnStage === "drill") {
    stages.study.classList.add("done");
    stages.recall.classList.add("active");
    stages.mix.classList.add("active");
    return;
  }
  if (learnStage === "complete") {
    stages.study.classList.add("done");
    stages.recall.classList.add("done");
    stages.mix.classList.add("done");
    stages.review.classList.add("active");
  }
}

function filterByLesson(lessonId = currentLesson) {
  return lessonId === "all" ? chapterWords() : vocab.filter((item) => item.lesson === lessonId && item.chapter === currentChapter);
}

function getLessonTitle() {
  if (currentLesson === "all") return `Kapitel ${currentChapterMeta().number}`;
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

function priorityScore(item) {
  return item.priority === "focus" ? 0 : 1;
}

function lessonOrderScore(item) {
  const index = lessons.findIndex((lesson) => lesson.id === item.lesson);
  return index === -1 ? 999 : index;
}

function learningOrder(a, b) {
  const sa = itemState(a.id);
  const sb = itemState(b.id);
  return priorityScore(a) - priorityScore(b)
    || lessonOrderScore(a) - lessonOrderScore(b)
    || sa.mastery - sb.mastery
    || sa.seen - sb.seen;
}

function chooseLearnBatch() {
  const pool = filterByLesson();
  const fresh = pool.filter((item) => !isLearned(item)).sort(learningOrder).slice(0, learnBatchSize);
  if (fresh.length >= learnBatchSize) return fresh;

  const used = new Set(fresh.map((item) => item.id));
  const weak = pool
    .filter((item) => !used.has(item.id) && isLearned(item) && itemState(item.id).mastery < 4)
    .sort((a, b) => priorityScore(a) - priorityScore(b) || itemState(a.id).mastery - itemState(b.id).mastery || itemState(a.id).due - itemState(b.id).due)
    .slice(0, learnBatchSize - fresh.length);
  return [...fresh, ...weak].length ? [...fresh, ...weak] : [...pool].sort(learningOrder).slice(0, learnBatchSize);
}

function chooseQuestionItem() {
  const learnedPool = filterByLesson().filter((item) => isLearned(item));
  if (!learnedPool.length) return null;
  const now = Date.now();
  const sorted = [...learnedPool].sort((a, b) => {
    const sa = itemState(a.id);
    const sb = itemState(b.id);
    return (sa.due - now) - (sb.due - now) || priorityScore(a) - priorityScore(b) || sa.mastery - sb.mastery || Math.random() - 0.5;
  });
  return sorted[0] || null;
}

function chooseMode(item) {
  const selected = els.modeSelect.value;
  if (selected !== "mixed") return selected;
  const candidates = ["meaning", "example", "typing", "cloze"];
  if (item.type === "noun") candidates.push("article");
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function startQuestion() {
  studyPhase = "practice";
  currentLearnItem = null;
  learnStage = "review";
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

function startLearn(resetBatch = true) {
  studyPhase = "learn";
  currentQuestion = null;
  selectedOption = null;
  awaitingNext = false;
  els.feedback.className = "feedback hidden";
  if (resetBatch || !learnBatch.length || learnIndex >= learnBatch.length) {
    learnBatch = chooseLearnBatch();
    learnIndex = 0;
    drillQueue = [];
    drillTotal = 0;
  }
  learnStage = "study";
  currentLearnItem = learnBatch[learnIndex] || filterByLesson()[0] || vocab[0];
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
    const practiceExample = choosePracticeExample(item);
    const gap = makeGap(practiceExample.de, item.term);
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
      label: practiceExample.en,
      prompt: gap,
      answer: item.term,
      accepts: [item.term, stripArticle(item.term), firstVerb(item.term)],
      example: practiceExample,
      type: "input"
    };
  }

  if (mode === "example") {
    const practiceExample = choosePracticeExample(item);
    const gap = makeGap(practiceExample.de, item.term) || practiceExample.de.replace(/"[^"]+"/, "_____");
    return {
      item,
      mode,
      title: "Pick the word for the sentence",
      label: practiceExample.en,
      prompt: gap,
      answer: item.term,
      options: makeTermOptions(item),
      example: practiceExample,
      type: "choice"
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

function chooseLearnDrillMode(item, position) {
  if (position === 0) return "meaning";
  if (item.type === "noun" && position % 3 === 1) return "article";
  if (position % 3 === 2) return "cloze";
  return "typing";
}

function startMiniPractice() {
  learnStage = "drill";
  selectedOption = null;
  awaitingNext = false;
  const items = learnBatch.length ? learnBatch : chooseLearnBatch();
  drillQueue = shuffle(items.flatMap((item, index) => [
    { item, mode: chooseLearnDrillMode(item, index) },
    { item, mode: "example" },
    { item, mode: index % 2 === 0 ? "typing" : "meaning" }
  ]));
  drillTotal = drillQueue.length;
  nextLearnDrill();
}

function nextLearnDrill() {
  selectedOption = null;
  awaitingNext = false;
  els.feedback.className = "feedback hidden";
  if (!drillQueue.length) {
    renderRoundComplete();
    updateStats();
    return;
  }
  const next = drillQueue.shift();
  currentQuestion = buildQuestion(next.item, next.mode);
  currentQuestion.context = "learn-drill";
  renderQuestion(currentQuestion);
  els.questionMeta.textContent = `${drillTotal - drillQueue.length}/${drillTotal} mini review`;
  updateStats();
}

function renderQuestion(q) {
  els.lessonKicker.textContent = getLessonTitle();
  els.promptTitle.textContent = q.title;
  els.questionMeta.textContent = q.item.type;
  els.promptLabel.textContent = q.label;
  els.prompt.textContent = q.prompt;
  els.answerArea.innerHTML = "";
  els.checkButton.textContent = "Check";
  els.skipButton.textContent = "Skip";

  if (q.mode === "meaning" || q.mode === "example" || q.mode === "cloze") {
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
  const examples = learningExamples(item);
  els.lessonKicker.textContent = getLessonTitle();
  els.promptTitle.textContent = allLearned ? "Review weak words" : `Learn ${learnIndex + 1} of ${learnBatch.length}`;
  els.questionMeta.textContent = `${learnedCount}/${items.length} learned`;
  els.promptLabel.textContent = allLearned ? "All words are introduced. This round reviews weaker words." : "Study a small set, then you will immediately practice it.";
  els.prompt.innerHTML = "";
  els.answerArea.innerHTML = "";
  els.feedback.className = "feedback hidden";
  els.checkButton.textContent = learnIndex + 1 >= learnBatch.length ? "Start mini review" : "Next word";
  els.skipButton.textContent = "Already know";

  const lessonTitle = lessons.find((lesson) => lesson.id === item.lesson)?.title || "Kapitel 5";
  els.prompt.innerHTML = `
    <div class="learn-card">
      <div class="learn-hero">
        <div>
          <div class="learn-term">${escapeHtml(item.term)}</div>
          <div class="learn-translation">${escapeHtml(item.translation)}</div>
        </div>
        <div class="learn-badge">${escapeHtml(item.type)}</div>
      </div>
      <div class="learn-form">${escapeHtml([lessonTitle, item.level, item.priority === "focus" ? "focus word" : "", item.type, item.form].filter(Boolean).join(" | "))}</div>
      <div class="example-stack">
        ${examples.map((example, index) => `
          <div class="learn-example">
            <div class="example-number">${index + 1}</div>
            <div>
              <p class="example-de">${escapeHtml(example.de)}</p>
              <p class="example-en">${escapeHtml(example.en)}</p>
            </div>
          </div>
        `).join("")}
      </div>
      <div class="speech-actions">
        <button class="speak-button" type="button" data-speak="${escapeAttr(item.term)}">Listen word</button>
        <button class="speak-button" type="button" data-speak="${escapeAttr(examples[0].de)}">Listen example</button>
      </div>
    </div>
  `;

  if (!allLearned && state.speech.auto) {
    window.setTimeout(() => speakGerman(item.term), 150);
  }
}

function renderRoundComplete() {
  learnStage = "complete";
  currentQuestion = null;
  const labels = learnBatch.map((item) => `<span>${escapeHtml(item.term)}</span>`).join("");
  els.lessonKicker.textContent = getLessonTitle();
  els.promptTitle.textContent = "Round complete";
  els.questionMeta.textContent = `${learnBatch.length} words reviewed`;
  els.promptLabel.textContent = "The next round adds a few new words and keeps weak words in rotation.";
  els.prompt.innerHTML = `
    <div class="round-complete">
      <strong>Good. This small set has been practiced.</strong>
      <div class="round-words">${labels}</div>
      <p>Continue for the next small set, or switch to Practice for broader review.</p>
    </div>
  `;
  els.answerArea.innerHTML = "";
  els.feedback.className = "feedback hidden";
  els.checkButton.textContent = "Next round";
  els.skipButton.textContent = "Practice";
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

function learningExamples(item) {
  return [
    {
      de: item.example,
      en: item.exampleEn || exampleTranslations[item.term] || `This sentence uses "${item.translation}" in context.`
    }
  ].concat(contextualExamples(item));
}

function contextualExamples(item) {
  const focus = focusPhrase(item);
  const lessonFrames = {
    k1: [
      [`In Gesprächen über Heimat hilft ${focus.de}, genauer zu erzählen.`, `In conversations about home, ${focus.en} helps you tell the story more precisely.`],
      [`Beim Ankommen in einem neuen Land wird ${focus.de} schnell wichtig.`, `When arriving in a new country, ${focus.en} quickly becomes important.`],
      [`Der Text verbindet ${focus.de} mit Identität und Alltag.`, `The text connects ${focus.en} with identity and daily life.`],
      [`Für Menschen zwischen zwei Kulturen beschreibt ${focus.de} eine echte Erfahrung.`, `For people between two cultures, ${focus.en} describes a real experience.`]
    ],
    k2: [
      [`In einem Gespräch verändert ${focus.de} oft die Wirkung.`, `In a conversation, ${focus.en} often changes the effect.`],
      [`Beim Diskutieren kann ${focus.de} Missverständnisse vermeiden.`, `When discussing, ${focus.en} can prevent misunderstandings.`],
      [`Der Ausdruck passt gut zu Kommunikation und Körpersprache.`, `The expression fits communication and body language well.`],
      [`Mit ${focus.de} wird ein Konflikt leichter verständlich.`, `With ${focus.en}, a conflict becomes easier to understand.`]
    ],
    k3: [
      [`Im Berufsleben spielt ${focus.de} eine praktische Rolle.`, `In professional life, ${focus.en} plays a practical role.`],
      [`Bei einer Bewerbung kann ${focus.de} entscheidend sein.`, `In an application, ${focus.en} can be decisive.`],
      [`Der Text nutzt ${focus.de}, um Arbeit realistischer zu beschreiben.`, `The text uses ${focus.en} to describe work more realistically.`],
      [`In einem Team merkt man schnell, ob ${focus.de} wichtig ist.`, `In a team, one quickly notices whether ${focus.en} is important.`]
    ],
    k4: [
      [`Beim Zusammenleben wird ${focus.de} zu einem sozialen Thema.`, `In living together, ${focus.en} becomes a social topic.`],
      [`Der Artikel zeigt, wie ${focus.de} Menschen im Alltag betrifft.`, `The article shows how ${focus.en} affects people in daily life.`],
      [`In einer Diskussion über Gesellschaft hilft ${focus.de}.`, `In a discussion about society, ${focus.en} helps.`],
      [`Mit ${focus.de} kann man Probleme genauer benennen.`, `With ${focus.en}, one can name problems more precisely.`]
    ],
    science: [
      [`Im Labor taucht ${focus.de} in der Diskussion auf.`, `In the lab, ${focus.en} comes up in the discussion.`],
      [`Bei einem Experiment kann ${focus.de} den Unterschied machen.`, `In an experiment, ${focus.en} can make the difference.`],
      [`Die Lehrerin notiert ${focus.de} an der Tafel.`, `The teacher writes ${focus.en} on the board.`],
      [`Für junge Fachkräfte bleibt ${focus.de} ein Schlüsselwort.`, `For young professionals, ${focus.en} remains a key word.`]
    ],
    truth: [
      [`In einem ehrlichen Gespräch fällt ${focus.de} sofort auf.`, `In an honest conversation, ${focus.en} stands out immediately.`],
      [`Wenn Vertrauen fehlt, wird ${focus.de} schnell problematisch.`, `When trust is missing, ${focus.en} quickly becomes problematic.`],
      [`Die Studie erklärt, warum ${focus.de} sozial wichtig sein kann.`, `The study explains why ${focus.en} can be socially important.`],
      [`In einer Freundschaft sollte man ${focus.de} genau verstehen.`, `In a friendship, one should understand ${focus.en} precisely.`]
    ],
    future: [
      [`Nach vielen Jahren wäre ${focus.de} noch sichtbar.`, `After many years, ${focus.en} would still be visible.`],
      [`Ohne Menschen bekommt ${focus.de} eine neue Bedeutung.`, `Without humans, ${focus.en} takes on a new meaning.`],
      [`In der verlassenen Stadt beschreibt ${focus.de} die Veränderung.`, `In the abandoned city, ${focus.en} describes the change.`],
      [`Der Text benutzt ${focus.de}, um die Zukunft konkreter zu machen.`, `The text uses ${focus.en} to make the future more concrete.`]
    ],
    sleep: [
      [`Nach einer kurzen Nacht spürt man ${focus.de} besonders stark.`, `After a short night, one feels ${focus.en} especially strongly.`],
      [`Im Schlaflabor ist ${focus.de} kein kleines Detail.`, `In the sleep lab, ${focus.en} is not a small detail.`],
      [`Wer müde ist, erkennt ${focus.de} sofort im Alltag.`, `Anyone who is tired recognizes ${focus.en} immediately in daily life.`],
      [`Der Artikel verbindet ${focus.de} mit Gesundheit und Leistung.`, `The article connects ${focus.en} with health and performance.`]
    ],
    einstein: [
      [`In Einsteins Biografie spielt ${focus.de} eine wichtige Rolle.`, `In Einstein's biography, ${focus.en} plays an important role.`],
      [`Bei einer berühmten Entdeckung wird ${focus.de} zentral.`, `In a famous discovery, ${focus.en} becomes central.`],
      [`Der Text zeigt, wie ${focus.de} eine Entscheidung beeinflusst.`, `The text shows how ${focus.en} influences a decision.`],
      [`Für Wissenschaft und Politik ist ${focus.de} hier wichtig.`, `For science and politics, ${focus.en} is important here.`]
    ],
    smell: [
      [`Beim Betreten des Raums nimmt man ${focus.de} sofort wahr.`, `When entering the room, one notices ${focus.en} immediately.`],
      [`In der Werbung kann ${focus.de} Gefühle auslösen.`, `In advertising, ${focus.en} can trigger feelings.`],
      [`Der Geruch im Alltag macht ${focus.de} leichter merkbar.`, `The everyday smell makes ${focus.en} easier to remember.`],
      [`In dieser Lektion hilft ${focus.de}, Nuancen zu beschreiben.`, `In this lesson, ${focus.en} helps describe nuances.`]
    ]
  };
  const frames = lessonFrames[item.lesson] || lessonFrames[item.chapter] || lessonFrames.science;
  const start = stableIndex(item.id, frames.length);
  return [frames[start], frames[(start + 2) % frames.length]].map(([de, en]) => ({ de, en }));
}

function focusPhrase(item) {
  const meaning = shortMeaning(item);
  if (item.type === "noun" && /^(der|die|das)\s/i.test(item.term) && !/\ban$/.test(item.term)) {
    return { de: item.term, en: `the idea of "${meaning}"` };
  }
  const label = item.type === "verb" ? "das Verb" : item.type === "adj" ? "das Adjektiv" : "der Ausdruck";
  return { de: `${label} "${item.term}"`, en: `"${meaning}"` };
}

function shortMeaning(item) {
  return item.translation.split(";")[0].trim();
}

function stableIndex(value, modulo) {
  let total = 0;
  for (let index = 0; index < value.length; index += 1) total += value.charCodeAt(index);
  return total % modulo;
}

function choosePracticeExample(item) {
  const examples = learningExamples(item);
  return examples[stableIndex(`${item.id}-${itemState(item.id).seen}`, examples.length)] || examples[0];
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

function makeTermOptions(item) {
  const wrong = shuffle(vocab.filter((other) => other.id !== item.id && other.lesson === item.lesson))
    .slice(0, 3)
    .map((other) => other.term);
  while (wrong.length < 3) {
    const candidate = vocab[Math.floor(Math.random() * vocab.length)].term;
    if (candidate !== item.term && !wrong.includes(candidate)) wrong.push(candidate);
  }
  return shuffle([item.term, ...wrong.slice(0, 3)]);
}

function handleCheck() {
  if (studyPhase === "learn") {
    if (learnStage === "complete") {
      startLearn(true);
      return;
    }
    if (learnStage === "drill") {
      if (!currentQuestion) {
        nextLearnDrill();
        return;
      }
      if (awaitingNext) {
        nextLearnDrill();
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
      return;
    }
    if (allCurrentWordsLearned()) {
      startMiniPractice();
      return;
    }
    markLearned(currentLearnItem, false);
    learnIndex += 1;
    if (learnIndex >= learnBatch.length) startMiniPractice();
    else startLearn(false);
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
    s.due = Date.now() + reviewInterval(item, s.mastery);
    state.xp += 10;
    state.streak += 1;
  } else {
    s.wrong += 1;
    s.mastery = Math.max(0, s.mastery - 1);
    s.due = Date.now() + (item.priority === "focus" ? 8_000 : 20_000);
    state.streak = 0;
  }
  saveState();
}

function reviewInterval(item, mastery) {
  const steps = item.priority === "focus"
    ? [25_000, 60_000, 140_000, 360_000, 900_000, 1_800_000]
    : [60_000, 150_000, 360_000, 900_000, 1_800_000, 3_600_000];
  return steps[Math.min(mastery, steps.length - 1)];
}

function showFeedback(correct, answer) {
  const item = currentQuestion.item;
  const example = currentQuestion.example || learningExamples(item)[0];
  els.feedback.className = `feedback ${correct ? "correct" : "wrong"}`;
  els.feedback.innerHTML = correct
    ? `<strong>Correct.</strong> ${item.term} = ${item.translation}<br>${example.de}<br><span class="feedback-translation">${example.en}</span><br><button class="speak-button" type="button" data-speak="${escapeAttr(item.term)}">Listen answer</button>`
    : `<strong>Not yet.</strong> Correct answer: ${currentQuestion.answer}<br>${item.term} = ${item.translation}<br>${example.de}<br><span class="feedback-translation">${example.en}</span><br><button class="speak-button" type="button" data-speak="${escapeAttr(item.term)}">Listen answer</button>`;
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
    const example = learningExamples(item)[0];
    node.querySelector(".tag").textContent = lessons.find((lesson) => lesson.id === item.lesson)?.title || item.lesson;
    node.querySelector("h3").textContent = item.term;
    node.querySelector(".meta").textContent = [item.level, item.priority === "focus" ? "focus" : "", item.type, item.form].filter(Boolean).join(" | ");
    node.querySelector(".translation").textContent = item.translation;
    node.querySelector(".example").innerHTML = `${escapeHtml(example.de)}<br><span>${escapeHtml(example.en)}</span>`;
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
    if (learnStage === "complete") {
      startQuestion();
      return;
    }
    if (learnStage === "drill") {
      nextLearnDrill();
      return;
    }
    markLearned(currentLearnItem, true);
    learnIndex += 1;
    if (learnIndex >= learnBatch.length) startMiniPractice();
    else startLearn(false);
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
  if (!confirm("Reset all Kapitel progress?")) return;
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
renderChapters();
renderLessons();
updateStats();
startLearn();
