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

const curatedExamples = {
  "spontan": [
    { de: "Wir haben spontan entschieden, am Wochenende ans Meer zu fahren.", en: "We spontaneously decided to go to the sea at the weekend." },
    { de: "Eine spontane Einladung kann sehr schön sein, wenn man Zeit hat.", en: "A spontaneous invitation can be very nice when you have time." }
  ],
  "beschließen": [
    { de: "Nach langem Nachdenken beschloss er, den Kurs zu wechseln.", en: "After thinking for a long time, he decided to change the course." },
    { de: "Die Familie beschließt gemeinsam, nach Berlin zu ziehen.", en: "The family decides together to move to Berlin." }
  ],
  "etwas erledigen": [
    { de: "Ich muss heute noch die Anmeldung erledigen.", en: "I still have to take care of the registration today." },
    { de: "Bevor sie abreist, erledigt sie alle wichtigen Termine.", en: "Before she leaves, she takes care of all important appointments." }
  ],
  "und so weiter": [
    { de: "Für die Bewerbung brauche ich Zeugnisse, Fotos, Formulare und so weiter.", en: "For the application I need certificates, photos, forms, and so on." },
    { de: "Im neuen Land musste sie eine Wohnung suchen, ein Konto eröffnen und so weiter.", en: "In the new country she had to find an apartment, open an account, and so on." }
  ],
  "allerdings": [
    { de: "Der Job ist interessant, allerdings verdient man am Anfang wenig.", en: "The job is interesting; however, at the beginning you earn little." },
    { de: "Ich würde gern kommen, allerdings habe ich morgen eine Prüfung.", en: "I would like to come; however, I have an exam tomorrow." }
  ],
  "sitzen": [
    { de: "Während des Gesprächs saß sie sehr ruhig am Tisch.", en: "During the conversation she sat very calmly at the table." },
    { de: "Im Zug saßen viele Reisende mit großen Koffern.", en: "Many travelers with large suitcases were sitting on the train." }
  ],
  "die Beziehung": [
    { de: "Eine gute Beziehung braucht Vertrauen und Geduld.", en: "A good relationship needs trust and patience." },
    { de: "Nach dem Umzug wurde ihre Beziehung schwieriger.", en: "After the move their relationship became more difficult." }
  ],
  "die Grafikerin": [
    { de: "Die Grafikerin entwirft Plakate für ein Theater.", en: "The graphic designer designs posters for a theater." },
    { de: "Als Grafikerin arbeitet sie oft mit Farben und Schriften.", en: "As a graphic designer she often works with colors and fonts." }
  ],
  "die Agentur": [
    { de: "Die Agentur betreut mehrere internationale Kunden.", en: "The agency serves several international clients." },
    { de: "In einer kleinen Agentur kennt jeder die Projekte der anderen.", en: "In a small agency everyone knows the others' projects." }
  ],
  "etwas bereuen": [
    { de: "Er bereut es nicht, dass er ins Ausland gegangen ist.", en: "He does not regret going abroad." },
    { de: "Viele bereuen später nur die Chancen, die sie nicht genutzt haben.", en: "Many later regret only the opportunities they did not use." }
  ],
  "locker": [
    { de: "Die Atmosphäre im Büro ist locker, aber trotzdem professionell.", en: "The atmosphere in the office is relaxed but still professional." },
    { de: "Sie spricht lockerer, wenn sie die Leute schon kennt.", en: "She speaks more casually when she already knows the people." }
  ],
  "sehnsüchtig": [
    { de: "Das Kind wartet sehnsüchtig auf die Ferien.", en: "The child waits longingly for the holidays." },
    { de: "Nach Monaten im Ausland dachte er sehnsüchtig an seine Familie.", en: "After months abroad, he thought longingly of his family." }
  ],
  "das Fingerspitzengefühl": [
    { de: "Bei schwierigen Kunden braucht man viel Fingerspitzengefühl.", en: "With difficult customers one needs a lot of tact." },
    { de: "Eine gute Lehrerin erklärt Fehler mit Fingerspitzengefühl.", en: "A good teacher explains mistakes with sensitivity." }
  ],
  "die Ausdauer": [
    { de: "Für einen langen Arbeitstag braucht man Ausdauer.", en: "For a long working day one needs stamina." },
    { de: "Ausdauer hilft, wenn ein Projekt länger dauert als geplant.", en: "Perseverance helps when a project takes longer than planned." }
  ],
  "sich auf etwas einstellen": [
    { de: "Im neuen Job musste sie sich auf andere Regeln einstellen.", en: "In the new job she had to adjust to different rules." },
    { de: "Wer umzieht, muss sich auf viele Veränderungen einstellen.", en: "Anyone who moves has to prepare for many changes." }
  ],
  "etwas einsehen": [
    { de: "Nach dem Gespräch sah er seinen Fehler ein.", en: "After the conversation he realized his mistake." },
    { de: "Sie musste einsehen, dass der Plan zu teuer war.", en: "She had to accept that the plan was too expensive." }
  ],
  "mit etwas verbunden sein": [
    { de: "Der Beruf ist mit viel Verantwortung verbunden.", en: "The profession is connected with a lot of responsibility." },
    { de: "Ein Umzug ins Ausland ist oft mit Unsicherheit verbunden.", en: "Moving abroad is often connected with uncertainty." }
  ],
  "das Geschick": [
    { de: "Für Reparaturen braucht man handwerkliches Geschick.", en: "For repairs one needs manual skill." },
    { de: "Sie hat großes Geschick im Umgang mit Menschen.", en: "She has great skill in dealing with people." }
  ],
  "die Genauigkeit": [
    { de: "Bei offiziellen Dokumenten ist Genauigkeit wichtig.", en: "With official documents, accuracy is important." },
    { de: "Der Techniker arbeitet mit großer Genauigkeit.", en: "The technician works with great precision." }
  ],
  "restaurieren": [
    { de: "Das Museum restauriert alte Gemälde.", en: "The museum restores old paintings." },
    { de: "Sie restaurieren ein historisches Haus im Zentrum.", en: "They are restoring a historic house in the center." }
  ],
  "etwas stimmen": [
    { de: "Vor dem Konzert muss jemand das Klavier stimmen.", en: "Before the concert someone has to tune the piano." },
    { de: "Der Musiker stimmt seine Gitarre vor jeder Probe.", en: "The musician tunes his guitar before every rehearsal." }
  ],
  "die Leidenschaft": [
    { de: "Ihre Leidenschaft für Musik begann schon in der Kindheit.", en: "Her passion for music began in childhood." },
    { de: "Wer seine Leidenschaft zum Beruf macht, arbeitet oft sehr motiviert.", en: "Those who turn their passion into a profession often work very motivated." }
  ],
  "etwas umgestalten": [
    { de: "Sie möchte ihr Zimmer komplett umgestalten.", en: "She wants to completely redesign her room." },
    { de: "Die Firma gestaltet ihre Webseite neu um.", en: "The company is redesigning its website." }
  ],
  "nicht reichen": [
    { de: "Das Geld reicht nicht für eine größere Wohnung.", en: "The money is not enough for a bigger apartment." },
    { de: "Gute Ideen reichen nicht, man muss sie auch umsetzen.", en: "Good ideas are not enough; one also has to implement them." }
  ],
  "sich die Langeweile vertreiben": [
    { de: "Auf dem Bahnhof vertrieb er sich die Langeweile mit Musik.", en: "At the station he passed the time with music." },
    { de: "Viele Kinder vertreiben sich die Langeweile mit Spielen.", en: "Many children relieve boredom with games." }
  ],
  "klauen": [
    { de: "Jemand hat im Supermarkt Schokolade geklaut.", en: "Someone stole chocolate in the supermarket." },
    { de: "Klauen ist keine Kleinigkeit, auch wenn es nur ein billiger Gegenstand ist.", en: "Stealing is not a small matter, even if it is only a cheap item." }
  ],
  "randalieren": [
    { de: "Nach dem Spiel randalierten einige Fans in der Innenstadt.", en: "After the game some fans vandalized things downtown." },
    { de: "Wer randaliert, zerstört oft auch das Vertrauen der Nachbarn.", en: "Whoever vandalizes often also destroys the neighbors' trust." }
  ],
  "jemanden erwischen": [
    { de: "Die Lehrerin erwischte ihn beim Abschreiben.", en: "The teacher caught him copying." },
    { de: "Wenn man beim Lügen erwischt wird, verliert man Vertrauen.", en: "If one is caught lying, one loses trust." }
  ],
  "zunächst": [
    { de: "Zunächst war die Aufgabe leicht, später wurde sie komplizierter.", en: "At first the task was easy; later it became more complicated." },
    { de: "Ich möchte zunächst die wichtigsten Wörter lernen.", en: "I first want to learn the most important words." }
  ],
  "das Hausverbot": [
    { de: "Nach der Schlägerei bekam er ein Hausverbot im Club.", en: "After the fight he was banned from the club." },
    { de: "Ein Hausverbot bedeutet, dass man den Ort nicht mehr betreten darf.", en: "A ban from premises means that one may no longer enter the place." }
  ],
  "nichts nützen": [
    { de: "Es nützt nichts, nur über das Problem zu reden.", en: "It is no use only talking about the problem." },
    { de: "Die Warnung nützte nichts; er kam trotzdem zu spät.", en: "The warning was of no use; he still came late." }
  ],
  "jemandem begegnen": [
    { de: "Auf dem Weg zur Arbeit begegnete sie einer alten Freundin.", en: "On the way to work she met an old friend." },
    { de: "In einer neuen Stadt begegnet man vielen unbekannten Situationen.", en: "In a new city one encounters many unfamiliar situations." }
  ],
  "erneut": [
    { de: "Nach einer Woche versuchte er es erneut.", en: "After a week he tried it again." },
    { de: "Die Frage wurde erneut gestellt, weil niemand geantwortet hatte.", en: "The question was asked again because nobody had answered." }
  ],
  "tatenlos": [
    { de: "Sie wollte nicht tatenlos zusehen, wie andere litten.", en: "She did not want to watch passively while others suffered." },
    { de: "Bei Gewalt darf man nicht tatenlos bleiben.", en: "In the face of violence one must not remain inactive." }
  ],
  "jemandem etwas beibringen": [
    { de: "Meine Kollegin bringt mir die neue Software bei.", en: "My colleague teaches me the new software." },
    { de: "Geduld ist wichtig, wenn man Kindern etwas beibringt.", en: "Patience is important when teaching children something." }
  ],
  "die Selbstbeherrschung": [
    { de: "In einem Streit braucht man Selbstbeherrschung.", en: "In an argument one needs self-control." },
    { de: "Sport kann Kindern Selbstbeherrschung beibringen.", en: "Sports can teach children self-control." }
  ],
  "die Verantwortung": [
    { de: "Wer ein Team leitet, trägt Verantwortung.", en: "Whoever leads a team carries responsibility." },
    { de: "Jugendliche lernen, Verantwortung für ihr Verhalten zu übernehmen.", en: "Young people learn to take responsibility for their behavior." }
  ],
  "selbstbewusst": [
    { de: "Nach dem Kurs sprach sie selbstbewusster Deutsch.", en: "After the course she spoke German more confidently." },
    { de: "Ein selbstbewusster Mensch kann Kritik besser annehmen.", en: "A self-confident person can accept criticism better." }
  ],
  "die Sozialforschung": [
    { de: "Die Sozialforschung untersucht, wie Menschen zusammenleben.", en: "Social research examines how people live together." },
    { de: "Er interessiert sich für Sozialforschung und gesellschaftliche Veränderungen.", en: "He is interested in social research and social changes." }
  ],
  "der Lebensentwurf": [
    { de: "Nicht jeder Lebensentwurf passt zu klassischen Familienbildern.", en: "Not every life plan fits traditional family models." },
    { de: "Viele junge Menschen entwickeln heute eigene Lebensentwürfe.", en: "Many young people today develop their own life plans." }
  ],
  "der Lebensverlauf": [
    { de: "Der Lebensverlauf ist selten genau planbar.", en: "The course of life can rarely be planned exactly." },
    { de: "Studien vergleichen Lebensverläufe verschiedener Generationen.", en: "Studies compare the life courses of different generations." }
  ],
  "die Befragten": [
    { de: "Die Befragten antworteten anonym auf die Fragen.", en: "The respondents answered the questions anonymously." },
    { de: "Mehr als die Hälfte der Befragten wünscht sich flexible Arbeitszeiten.", en: "More than half of the respondents want flexible working hours." }
  ],
  "bemerkenswert": [
    { de: "Bemerkenswert ist, dass sich die Meinungen schnell verändert haben.", en: "It is remarkable that the opinions changed quickly." },
    { de: "Seine Fortschritte nach nur zwei Monaten sind bemerkenswert.", en: "His progress after only two months is remarkable." }
  ],
  "der Wertewandel": [
    { de: "Der Wertewandel zeigt sich besonders in der Arbeitswelt.", en: "The change in values is especially visible in working life." },
    { de: "Durch den Wertewandel haben viele Menschen andere Erwartungen an Familie.", en: "Because of the change in values many people have different expectations of family." }
  ],
  "der Unterhalt": [
    { de: "Nach der Trennung muss er Unterhalt für die Kinder zahlen.", en: "After the separation he has to pay support for the children." },
    { de: "Viele Paare teilen sich heute den Unterhalt der Familie.", en: "Many couples today share providing for the family." }
  ],
  "eine Familie gründen": [
    { de: "Sie möchten erst reisen und später eine Familie gründen.", en: "They want to travel first and start a family later." },
    { de: "Eine Familie zu gründen verändert oft den Alltag.", en: "Starting a family often changes everyday life." }
  ],
  "von etwas abweichen": [
    { de: "Der Plan weicht stark von unserer ursprünglichen Idee ab.", en: "The plan deviates strongly from our original idea." },
    { de: "Manche Ergebnisse weichen von den Erwartungen ab.", en: "Some results differ from the expectations." }
  ],
  "die Vereinbarkeit": [
    { de: "Die Vereinbarkeit von Studium und Arbeit ist nicht immer einfach.", en: "Combining university studies and work is not always easy." },
    { de: "Flexible Arbeitszeiten verbessern die Vereinbarkeit von Familie und Beruf.", en: "Flexible working hours improve the ability to combine family and work." }
  ],
  "zurückhaltend": [
    { de: "Im ersten Gespräch war sie noch sehr zurückhaltend.", en: "In the first conversation she was still very reserved." },
    { de: "Der Chef reagierte zurückhaltend auf den Vorschlag.", en: "The boss reacted cautiously to the proposal." }
  ],
  "auf etwas eingehen": [
    { de: "Die Lehrerin geht auf die Fragen der Klasse ein.", en: "The teacher responds to the class's questions." },
    { de: "Im Brief geht er auf die Kritik der Leser ein.", en: "In the letter he addresses the readers' criticism." }
  ],
  "gefährdet": [
    { de: "Ohne gute Planung ist das Projekt gefährdet.", en: "Without good planning the project is at risk." },
    { de: "Ihre Gesundheit war durch den Stress gefährdet.", en: "Her health was endangered by the stress." }
  ]
};

/* ============================================================
   Aspekte B2 · Vokabeln — engine
   (dataset above: chapters, lessons, vocab, exampleTranslations, curatedExamples)
   ============================================================ */

/* ---------- vocab factory helpers (used by dataset above, hoisted) ---------- */
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

/* ============================================================
   State
   ============================================================ */
const STATE_KEY = "aspekte-b2-vocab-v2";
const defaultState = {
  xp: 0,
  goal: 20,
  sound: true,
  heartsMode: true,
  items: {},                       // id -> { seen, correct, wrong, mastery, due }
  lessons: {},                     // lessonId -> { crown, sessions }
  streak: { count: 0, lastDay: "" },
  daily: { day: "", xp: 0 },
  speech: { auto: true, rate: 0.85, voiceURI: "" }
};

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)) || {};
    return {
      ...defaultState,
      ...saved,
      items: saved.items || {},
      lessons: saved.lessons || {},
      streak: { ...defaultState.streak, ...(saved.streak || {}) },
      daily: { ...defaultState.daily, ...(saved.daily || {}) },
      speech: { ...defaultState.speech, ...(saved.speech || {}) }
    };
  } catch {
    return JSON.parse(JSON.stringify(defaultState));
  }
}
function saveState() { localStorage.setItem(STATE_KEY, JSON.stringify(state)); }

function itemState(id) {
  if (!state.items[id]) state.items[id] = { seen: 0, correct: 0, wrong: 0, mastery: 0, due: 0 };
  return state.items[id];
}
function lessonState(id) {
  if (!state.lessons[id]) state.lessons[id] = { crown: 0, sessions: 0 };
  return state.lessons[id];
}

let state = loadState();

/* runtime */
let currentChapter = "k1";
let germanVoices = [];
let bankFilter = "all";
let session = null;   // active session or null

/* ============================================================
   DOM references
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const els = {
  body: document.body,
  hud: $("#hud"),
  streakCount: $("#streakCount"),
  goalArc: $("#goalArc"),
  goalText: $("#goalText"),
  hudGoal: $("#hudGoal"),
  heartCount: $("#heartCount"),
  hudHearts: $("#hudHearts"),
  openSettings: $("#openSettings"),
  home: $("#home"),
  chapterTabs: $("#chapterTabs"),
  heroCrest: $("#heroCrest"),
  heroNumber: $("#heroNumber"),
  heroTitle: $("#heroTitle"),
  heroSummary: $("#heroSummary"),
  heroCrownCount: $("#heroCrownCount"),
  path: $("#path"),
  session: $("#session"),
  quitSession: $("#quitSession"),
  sbarFill: $("#sbarFill"),
  sessionHearts: $("#sessionHearts"),
  stage: $("#stage"),
  feedbackSheet: $("#feedbackSheet"),
  primaryBtn: $("#primaryBtn"),
  bank: $("#bank"),
  bankMeta: $("#bankMeta"),
  searchInput: $("#searchInput"),
  bankChips: $("#bankChips"),
  wordList: $("#wordList"),
  bottomNav: $("#bottomNav"),
  settingsModal: $("#settingsModal"),
  profileStats: $("#profileStats"),
  goalOptions: $("#goalOptions"),
  soundToggle: $("#soundToggle"),
  autoSpeak: $("#autoSpeak"),
  speechRate: $("#speechRate"),
  voiceSelect: $("#voiceSelect"),
  voiceStatus: $("#voiceStatus"),
  heartsToggle: $("#heartsToggle"),
  resetProgress: $("#resetProgress"),
  confetti: $("#confetti")
};

/* ============================================================
   Small utilities
   ============================================================ */
function escapeHtml(v) {
  return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function escapeAttr(v) { return escapeHtml(v).replace(/'/g, "&#39;"); }
function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function normalize(v) {
  return String(v).toLowerCase()
    .replace(/[.,;:!?()"'„“”]/g, "")
    .replace(/\s+/g, " ").trim();
}
function stripArticle(term) {
  return term.replace(/^(der|die|das|eine|einen|einem|einer|ein)\s+/i, "").trim();
}
function firstVerb(term) {
  return term.split(" ").find((p) => /en$|eln$|ern$/.test(p)) || stripArticle(term);
}
function makeGap(sentence, term) {
  const cands = [term, stripArticle(term), firstVerb(term)].filter(Boolean).sort((a, b) => b.length - a.length);
  for (const c of cands) {
    const esc = c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const next = sentence.replace(new RegExp(esc, "i"), '<span class="gap">_____</span>');
    if (next !== sentence) return next;
  }
  return null;
}
function cleanSpeechText(text) {
  return String(text).replace(/\(.+?\)/g, "").replace(/\s+/g, " ").trim();
}
function pad2(n) { return String(n).padStart(2, "0"); }
function dayStr(d) { return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }
function todayStr() { return dayStr(new Date()); }
function yesterdayStr() { const d = new Date(); d.setDate(d.getDate() - 1); return dayStr(d); }

/* ============================================================
   Dataset helpers
   ============================================================ */
function chapterMeta(id = currentChapter) { return chapters.find((c) => c.id === id) || chapters[0]; }
function chapterWords(id = currentChapter) { return vocab.filter((v) => v.chapter === id); }
function chapterLessons(id = currentChapter) { return lessons.filter((l) => l.chapter === id); }
function lessonWords(lessonId) { return vocab.filter((v) => v.lesson === lessonId); }

function learningExamples(item) {
  const base = [{
    de: item.example,
    en: item.exampleEn || exampleTranslations[item.term] || `Uses “${item.translation}” in context.`
  }];
  return base.concat(curatedExamples[item.term] || []);
}
function stableIndex(value, modulo) {
  let total = 0;
  for (let i = 0; i < value.length; i += 1) total += value.charCodeAt(i);
  return modulo ? total % modulo : 0;
}
function choosePracticeExample(item) {
  const ex = learningExamples(item);
  return ex[stableIndex(`${item.id}-${itemState(item.id).seen}`, ex.length)] || ex[0];
}
function makeOptions(item) {
  const pool = shuffle(vocab.filter((o) => o.id !== item.id && o.lesson === item.lesson)).slice(0, 3).map((o) => o.translation);
  while (pool.length < 3) {
    const c = vocab[Math.floor(Math.random() * vocab.length)].translation;
    if (c !== item.translation && !pool.includes(c)) pool.push(c);
  }
  return shuffle([item.translation, ...pool.slice(0, 3)]);
}
function makeTermOptions(item) {
  const pool = shuffle(vocab.filter((o) => o.id !== item.id && o.lesson === item.lesson)).slice(0, 3).map((o) => o.term);
  while (pool.length < 3) {
    const c = vocab[Math.floor(Math.random() * vocab.length)].term;
    if (c !== item.term && !pool.includes(c)) pool.push(c);
  }
  return shuffle([item.term, ...pool.slice(0, 3)]);
}

/* ============================================================
   Progress helpers
   ============================================================ */
function isLearned(item) { return itemState(item.id).seen > 0; }
function speechAvailable() { return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window; }

function ensureDaily() {
  const t = todayStr();
  if (state.daily.day !== t) { state.daily = { day: t, xp: 0 }; saveState(); }
}
function addXp(n) {
  ensureDaily();
  state.xp += n;
  state.daily.xp += n;
  saveState();
  updateHud();
}
function registerStreak() {
  const t = todayStr();
  if (state.streak.lastDay === t) return;
  state.streak.count = state.streak.lastDay === yesterdayStr() ? state.streak.count + 1 : 1;
  state.streak.lastDay = t;
  saveState();
}
function levelFor(xp) { return Math.floor(xp / 120) + 1; }

function recordAnswer(item, correct) {
  const s = itemState(item.id);
  s.seen += 1;
  if (correct) {
    s.correct += 1;
    s.mastery = Math.min(5, s.mastery + 1);
    s.due = Date.now() + reviewInterval(item, s.mastery);
  } else {
    s.wrong += 1;
    s.mastery = Math.max(0, s.mastery - 1);
    s.due = Date.now() + (item.priority === "focus" ? 8000 : 20000);
  }
  saveState();
}
function reviewInterval(item, mastery) {
  const steps = [45000, 120000, 300000, 900000, 2400000, 6000000];
  return steps[Math.min(mastery, steps.length - 1)];
}

/* ============================================================
   Speech
   ============================================================ */
function initSpeech() {
  els.autoSpeak.checked = Boolean(state.speech.auto);
  els.soundToggle.checked = Boolean(state.sound);
  els.heartsToggle.checked = Boolean(state.heartsMode);
  els.speechRate.value = String(state.speech.rate);
  if (!speechAvailable()) {
    els.voiceStatus.textContent = "Speech is not available in this browser.";
    els.autoSpeak.disabled = true; els.speechRate.disabled = true; els.voiceSelect.disabled = true;
    return;
  }
  populateVoices();
  window.speechSynthesis.onvoiceschanged = populateVoices;
}
function populateVoices() {
  const voices = window.speechSynthesis.getVoices();
  germanVoices = voices.filter((v) => v.lang.toLowerCase().startsWith("de"));
  const current = state.speech.voiceURI;
  els.voiceSelect.innerHTML = '<option value="">Best available</option>';
  germanVoices.forEach((v) => {
    const o = document.createElement("option");
    o.value = v.voiceURI; o.textContent = `${v.name} (${v.lang})`;
    els.voiceSelect.appendChild(o);
  });
  if (germanVoices.some((v) => v.voiceURI === current)) els.voiceSelect.value = current;
  else { state.speech.voiceURI = ""; }
  els.voiceStatus.textContent = germanVoices.length
    ? `${germanVoices.length} German voice${germanVoices.length === 1 ? "" : "s"} available.`
    : "No German voice found — the browser will use its closest voice.";
}
function selectedVoice() {
  return germanVoices.find((v) => v.voiceURI === state.speech.voiceURI)
    || germanVoices.find((v) => v.lang.toLowerCase() === "de-de")
    || germanVoices[0] || null;
}
function speak(text) {
  if (!text || !speechAvailable()) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(cleanSpeechText(text));
  u.lang = "de-DE";
  u.rate = Number(state.speech.rate) || 0.85;
  u.voice = selectedVoice();
  window.speechSynthesis.speak(u);
}

/* ============================================================
   Sound effects (Web Audio, no assets)
   ============================================================ */
let actx = null;
function audio() {
  if (!state.sound) return null;
  try { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
  if (actx.state === "suspended") actx.resume();
  return actx;
}
function tone(freq, start, dur, vol = 0.18, type = "sine") {
  const ctx = audio(); if (!ctx) return;
  const t0 = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type; osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(vol, t0 + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0); osc.stop(t0 + dur + 0.02);
}
function sndCorrect() { tone(587.33, 0, 0.12); tone(880, 0.08, 0.18); }
function sndWrong() { tone(196, 0, 0.22, 0.16, "sawtooth"); tone(155.56, 0.06, 0.26, 0.14, "sawtooth"); }
function sndFanfare() { [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.11, 0.32, 0.16, "triangle")); }

/* ============================================================
   View switching
   ============================================================ */
function setView(view) {
  if (view !== "session" && session) session = null;
  els.body.dataset.view = view;
  els.hud.hidden = view === "session";
  els.bottomNav.hidden = view === "session";
  els.home.hidden = view !== "home";
  els.bank.hidden = view !== "bank";
  els.session.hidden = view !== "session";
  els.bottomNav.querySelectorAll(".nav-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.nav === (view === "bank" ? "bank" : "home"));
  });
  window.scrollTo(0, 0);
}

/* ============================================================
   HUD + Home
   ============================================================ */
function updateHud() {
  ensureDaily();
  els.streakCount.textContent = state.streak.count;
  const pct = Math.max(0, Math.min(1, state.goal ? state.daily.xp / state.goal : 1));
  const circ = 2 * Math.PI * 15.5;
  els.goalArc.style.strokeDashoffset = String(circ * (1 - pct));
  els.goalText.textContent = `${state.daily.xp}/${state.goal}`;
  els.heartCount.textContent = state.heartsMode ? "5" : "∞";
  els.hudHearts.classList.toggle("spent", !state.heartsMode);
}

function renderChapterTabs() {
  els.chapterTabs.innerHTML = "";
  chapters.forEach((c) => {
    const btn = document.createElement("button");
    btn.className = "chapter-tab" + (c.id === currentChapter ? " active" : "");
    btn.type = "button";
    btn.innerHTML = `<small>Kap.</small><b>${c.number}</b>`;
    btn.addEventListener("click", () => { currentChapter = c.id; renderHome(); });
    els.chapterTabs.appendChild(btn);
  });
}

function renderHome() {
  renderChapterTabs();
  const c = chapterMeta();
  const cls = chapterLessons();
  els.heroCrest.textContent = c.number;
  els.heroNumber.textContent = c.number;
  els.heroTitle.textContent = c.title;
  els.heroSummary.textContent = c.subtitle;
  const crownTotal = cls.reduce((sum, l) => sum + lessonState(l.id).crown, 0);
  els.heroCrownCount.textContent = crownTotal;

  els.path.innerHTML = "";
  const firstUnfinished = cls.findIndex((l) => lessonState(l.id).crown < 5);
  cls.forEach((lesson, i) => {
    const words = lessonWords(lesson.id);
    const ls = lessonState(lesson.id);
    const learned = words.filter(isLearned).length;
    const learnedPct = words.length ? Math.round((learned / words.length) * 100) : 0;
    const done = ls.crown >= 5;
    const started = ls.crown > 0 || learned > 0;
    const isCurrent = i === firstUnfinished;

    const row = document.createElement("div");
    row.className = "path-row" + (isCurrent ? " current" : "");
    row.style.transform = `translateX(${Math.round(Math.sin(i * 0.9) * 62)}px)`;

    const bubble = isCurrent
      ? `<div class="start-bubble">${started ? "Continue" : "Start"}</div>` : "";
    const crownBadge = ls.crown > 0
      ? `<span class="node-crown"><span>👑</span>${ls.crown}</span>` : "";

    row.innerHTML = `
      ${bubble}
      <button class="node ${done ? "done" : started ? "started" : ""}" type="button" aria-label="${escapeAttr(lesson.title)}">
        <span class="node-ring" style="--p:${done ? 100 : learnedPct}"></span>
        <span class="node-face">${lesson.icon || "•"}</span>
        ${crownBadge}
      </button>
      <div class="node-label">${escapeHtml(lesson.title)}</div>
      <div class="node-sub">${done ? "Mastered · " : ""}${learned}/${words.length} words</div>`;
    row.querySelector(".node").addEventListener("click", () => startLessonSession(lesson.id));
    els.path.appendChild(row);
  });

  // Chapter review node
  const learnedInChapter = chapterWords().filter(isLearned).length;
  const reviewRow = document.createElement("div");
  reviewRow.className = "path-row";
  reviewRow.style.transform = "translateX(0)";
  reviewRow.innerHTML = `
    <button class="node review-node" type="button" aria-label="Mixed review">
      <span class="node-face">🏋️</span>
    </button>
    <div class="node-label">Mixed review</div>
    <div class="node-sub">${learnedInChapter ? "Refresh weak words" : "Learn some words first"}</div>`;
  reviewRow.querySelector(".node").addEventListener("click", () => startPracticeSession(currentChapter));
  els.path.appendChild(reviewRow);

  updateHud();
}

/* ============================================================
   Question building
   ============================================================ */
function pickModes(item, crown, count) {
  const noun = item.type === "noun";
  const canListen = speechAvailable();
  let bag;
  if (crown <= 0) bag = ["meaning", "reverse", noun ? "article" : "meaning"];
  else if (crown === 1) bag = ["meaning", "reverse", "typing", noun ? "article" : "cloze", "cloze"];
  else if (crown <= 3) bag = ["typing", "cloze", "reverse", noun ? "article" : "typing", canListen ? "listen" : "meaning"];
  else bag = ["typing", "cloze", canListen ? "listen" : "typing", "typing", noun ? "article" : "cloze"];
  const picked = shuffle(bag);
  const out = [];
  for (const m of picked) { if (!out.includes(m)) out.push(m); if (out.length >= count) break; }
  while (out.length < count) out.push(picked[out.length % picked.length]);
  return out.slice(0, count);
}

function buildQuestion(item, mode) {
  if (mode === "article" && item.type === "noun") {
    const article = item.term.split(" ")[0];
    if (["der", "die", "das"].includes(article.toLowerCase())) {
      return {
        item, mode, kind: "choice",
        title: "Which article?", sub: item.type,
        promptHtml: `<div class="prompt-bubble center">${escapeHtml(stripArticle(item.term))}</div>`,
        speak: item.term,
        answer: article, options: ["der", "die", "das"]
      };
    }
    mode = "meaning";
  }
  if (mode === "typing") {
    return {
      item, mode, kind: "input",
      title: "Write it in German", sub: item.type,
      promptHtml: `<div class="prompt-bubble center">${escapeHtml(item.translation)}</div>`,
      speak: null,
      answer: item.term, accepts: [item.term, stripArticle(item.term)]
    };
  }
  if (mode === "cloze") {
    const ex = choosePracticeExample(item);
    const gap = makeGap(ex.de, item.term);
    if (!gap) return buildQuestion(item, "typing");
    return {
      item, mode, kind: "input",
      title: "Fill the gap", sub: ex.en,
      promptHtml: `<div class="prompt-bubble prompt-cloze">${gap}</div>`,
      speak: null,
      answer: item.term, accepts: [item.term, stripArticle(item.term), firstVerb(item.term)],
      example: ex
    };
  }
  if (mode === "listen" && speechAvailable()) {
    return {
      item, mode, kind: "choice",
      title: "What did you hear?", sub: "Tap the meaning",
      promptHtml: `<div class="prompt-box"><button class="prompt-speaker big" type="button" data-speak="${escapeAttr(item.term)}">🔊</button><div class="prompt-hint">Listen and choose the meaning</div></div>`,
      speak: item.term, autospeak: true,
      answer: item.translation, options: makeOptions(item)
    };
  }
  if (mode === "reverse") {
    return {
      item, mode, kind: "choice",
      title: "Choose the German word", sub: "",
      promptHtml: `<div class="prompt-bubble center">${escapeHtml(item.translation)}</div>`,
      speak: null,
      answer: item.term, options: makeTermOptions(item)
    };
  }
  // default: meaning
  return {
    item, mode: "meaning", kind: "choice",
    title: "Choose the meaning", sub: item.form || item.type,
    promptHtml: `<div class="prompt-box"><button class="prompt-speaker" type="button" data-speak="${escapeAttr(item.term)}">🔊</button><div class="prompt-bubble">${escapeHtml(item.term)}</div></div>`,
    speak: item.term,
    answer: item.translation, options: makeOptions(item)
  };
}

function isCorrect(answer, q) {
  if (answer == null || answer === "") return false;
  if (q.kind === "choice") return answer === q.answer;
  const n = normalize(answer);
  return q.accepts.some((a) => normalize(a) === n);
}

/* ============================================================
   Session engine
   ============================================================ */
function learningOrder(a, b) {
  const pa = a.priority === "focus" ? 0 : 1;
  const pb = b.priority === "focus" ? 0 : 1;
  const sa = itemState(a.id), sb = itemState(b.id);
  return (pa - pb) || (sa.mastery - sb.mastery) || (sa.seen - sb.seen);
}

function startLessonSession(lessonId) {
  const lesson = lessons.find((l) => l.id === lessonId);
  const words = [...lessonWords(lessonId)].sort(learningOrder);
  const crown = lessonState(lessonId).crown;
  const queue = [];
  let slot = 0;
  const MAX_NEW = 8;
  let introduced = 0;

  words.forEach((item) => {
    const fresh = !isLearned(item);
    if (fresh && introduced < MAX_NEW) {
      introduced += 1;
      queue.push({ type: "teach", item, slot: slot++ });
      pickModes(item, 0, 2).forEach((mode) => queue.push({ type: "q", item, mode, slot: slot++ }));
    } else if (!fresh) {
      pickModes(item, crown, crown >= 2 ? 2 : 1).forEach((mode) => queue.push({ type: "q", item, mode, slot: slot++ }));
    }
  });

  // If nothing new and nothing seen (shouldn't happen), still teach first words
  if (!queue.length && words.length) {
    words.slice(0, MAX_NEW).forEach((item) => {
      queue.push({ type: "teach", item, slot: slot++ });
      pickModes(item, 0, 2).forEach((mode) => queue.push({ type: "q", item, mode, slot: slot++ }));
    });
  }

  // Mixed review tail over the words that appeared
  const appeared = [...new Set(queue.map((s) => s.item))];
  const tail = shuffle(appeared).map((item) => ({ type: "q", item, mode: pickModes(item, Math.max(1, crown), 1)[0], slot: slot++ }));
  queue.push(...tail);

  launchSession({ kind: "lesson", lessonId, chapterId: lesson.chapter, title: lesson.title, crown, queue });
}

function startPracticeSession(chapterId) {
  const learned = chapterWords(chapterId).filter(isLearned);
  if (learned.length < 1) {
    // nothing to practice — gently redirect
    setView("home");
    return;
  }
  const ordered = [...learned].sort((a, b) => (itemState(a.id).due - itemState(b.id).due) || (itemState(a.id).mastery - itemState(b.id).mastery));
  const pool = ordered.slice(0, 16);
  let slot = 0;
  const queue = shuffle(pool).map((item) => ({
    type: "q", item, mode: pickModes(item, Math.max(2, itemState(item.id).mastery), 1)[0], slot: slot++
  }));
  launchSession({ kind: "practice", chapterId, title: "Mixed review", queue });
}

function launchSession(base) {
  const total = base.queue.length;
  session = {
    ...base,
    pos: 0,
    hearts: 5,
    heartsMode: state.heartsMode,
    totalSlots: total,
    passed: new Set(),
    slotFails: {},
    correct: 0,
    answered: 0,
    startedNew: base.queue.filter((s) => s.type === "teach").length,
    selected: null,
    awaiting: false,
    lastCorrect: null,
    xpEarned: 0
  };
  setView("session");
  renderStep();
}

function updateSessionBar() {
  const pct = session.totalSlots ? (session.passed.size / session.totalSlots) * 100 : 0;
  els.sbarFill.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  els.sessionHearts.hidden = !session.heartsMode;
  els.sessionHearts.querySelector("strong").textContent = session.hearts;
}

function renderStep() {
  session.selected = null;
  session.awaiting = false;
  hideFeedback();
  els.primaryBtn.className = "btn-primary";
  if (session.pos >= session.queue.length) { finishSession(); return; }
  const step = session.queue[session.pos];
  updateSessionBar();

  if (step.type === "teach") { renderTeach(step); return; }
  session.currentQ = buildQuestion(step.item, step.mode);
  renderQuestion(session.currentQ);
}

function renderTeach(step) {
  const item = step.item;
  const examples = learningExamples(item).slice(0, 2);
  const focus = item.priority === "focus";
  els.primaryBtn.textContent = "Continue";
  els.primaryBtn.disabled = false;
  els.stage.innerHTML = `
    <div class="teach">
      <span class="teach-badge ${focus ? "focus" : ""}">${focus ? "Focus word" : "New word"} · ${escapeHtml(item.level)}</span>
      <div class="teach-term">${escapeHtml(item.term)}</div>
      <div class="teach-trans">${escapeHtml(item.translation)}</div>
      ${item.form ? `<div class="teach-form">${escapeHtml(item.type)} · ${escapeHtml(item.form)}</div>` : `<div class="teach-form">${escapeHtml(item.type)}</div>`}
      <button class="teach-speak" type="button" data-speak="${escapeAttr(item.term)}">🔊 Listen</button>
      <div class="teach-examples">
        ${examples.map((ex) => `
          <div class="ex-card" data-speak="${escapeAttr(ex.de)}">
            <span class="ex-play">🔊</span>
            <div class="ex-de">${escapeHtml(ex.de)}</div>
            <div class="ex-en">${escapeHtml(ex.en)}</div>
          </div>`).join("")}
      </div>
    </div>`;
  if (state.speech.auto) window.setTimeout(() => speak(item.term), 180);
}

function renderQuestion(q) {
  els.primaryBtn.textContent = "Check";
  els.primaryBtn.disabled = q.kind !== "input" ? true : false;
  const optionsHtml = q.kind === "choice"
    ? `<div class="options">${q.options.map((opt, i) => `
        <button class="option" type="button" data-opt="${escapeAttr(opt)}">
          <span class="kbd">${i + 1}</span><span>${escapeHtml(opt)}</span>
        </button>`).join("")}</div>`
    : `<input class="answer-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type in German">
       <div class="input-hint"></div>`;

  els.stage.innerHTML = `
    <div><div class="q-title">${escapeHtml(q.title)}</div>${q.sub ? `<div class="q-sub">${escapeHtml(q.sub)}</div>` : ""}</div>
    ${q.promptHtml}
    ${optionsHtml}`;

  if (q.kind === "choice") {
    els.stage.querySelectorAll(".option").forEach((btn) => {
      btn.addEventListener("click", () => {
        session.selected = btn.dataset.opt;
        els.stage.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
        btn.classList.add("selected");
        els.primaryBtn.disabled = false;
      });
    });
  } else {
    const input = els.stage.querySelector(".answer-input");
    input.addEventListener("input", () => { els.primaryBtn.disabled = input.value.trim() === ""; });
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); onPrimary(); } });
    setTimeout(() => input.focus(), 60);
  }
  if (q.autospeak && state.speech.auto) window.setTimeout(() => speak(q.speak), 220);
}

function onPrimary() {
  if (!session) return;
  const step = session.queue[session.pos];

  // teach step
  if (step && step.type === "teach") {
    recordSeen(step.item);
    session.passed.add(step.slot);
    session.pos += 1;
    renderStep();
    return;
  }

  // continue after a checked answer
  if (session.awaiting) {
    hideFeedback();
    if (session.heartsMode && session.hearts <= 0) { renderFail(); return; }
    session.pos += 1;
    renderStep();
    return;
  }

  // grade the answer
  const q = session.currentQ;
  let answer = session.selected;
  if (q.kind === "input") answer = els.stage.querySelector(".answer-input").value;
  if (q.kind === "choice" && answer == null) return;

  const correct = isCorrect(answer, q);
  recordAnswer(q.item, correct);
  session.answered += 1;
  session.awaiting = true;

  if (correct) {
    session.correct += 1;
    session.passed.add(step.slot);
    addXp(2);
    session.xpEarned += 2;
    sndCorrect();
  } else {
    session.slotFails[step.slot] = (session.slotFails[step.slot] || 0) + 1;
    if (session.heartsMode) session.hearts = Math.max(0, session.hearts - 1);
    // requeue this slot (unless it has failed too many times)
    if (session.slotFails[step.slot] < 3) {
      session.queue.push({ type: "q", item: q.item, mode: q.mode, slot: step.slot, retry: true });
    } else {
      session.passed.add(step.slot); // give it to them to avoid a lock
    }
    sndWrong();
  }

  lockChoices(q, answer, correct);
  showFeedback(correct, q, answer);
  updateSessionBar();
}

function recordSeen(item) {
  const s = itemState(item.id);
  s.seen = Math.max(1, s.seen);
  s.mastery = Math.max(s.mastery, 1);
  if (!s.due) s.due = Date.now();
  saveState();
}

function lockChoices(q, answer, correct) {
  if (q.kind === "choice") {
    els.stage.querySelectorAll(".option").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.opt === q.answer) btn.classList.add("correct");
      else if (btn.dataset.opt === answer && !correct) btn.classList.add("wrong");
    });
  } else {
    const input = els.stage.querySelector(".answer-input");
    if (input) { input.disabled = true; input.classList.add(correct ? "correct" : "wrong"); }
  }
}

function showFeedback(correct, q, answer) {
  const item = q.item;
  const ex = q.example || learningExamples(item)[0];
  els.feedbackSheet.className = `feedback-sheet ${correct ? "correct" : "wrong"}`;
  const heartsOut = session.heartsMode && session.hearts <= 0;
  const headText = correct ? "Nice!" : heartsOut ? "Out of hearts" : "Correct answer:";
  const detail = correct
    ? `<b>${escapeHtml(item.term)}</b> — ${escapeHtml(item.translation)}`
    : `<b>${escapeHtml(q.answer)}</b><div class="fb-ex" style="margin-top:2px">${escapeHtml(item.term)} — ${escapeHtml(item.translation)}</div>`;
  els.feedbackSheet.innerHTML = `
    <div class="fb-inner">
      <div class="fb-head"><span class="fb-mark">${correct ? "✓" : "✕"}</span>${headText}</div>
      <div class="fb-body">${detail}</div>
      <div class="fb-ex">${escapeHtml(ex.de)}<span class="en"> — ${escapeHtml(ex.en)}</span></div>
      <button class="fb-speak" type="button" data-speak="${escapeAttr(item.term)}">🔊 Listen</button>
    </div>`;
  void els.feedbackSheet.offsetHeight; // flush layout so the slide-up transition plays
  els.feedbackSheet.classList.add("show");

  els.primaryBtn.textContent = heartsOut ? "See results" : "Continue";
  els.primaryBtn.className = `btn-primary ${correct ? "go-correct" : "go-wrong"}`;
  els.primaryBtn.disabled = false;
  if (!correct) { els.stage.classList.remove("shake"); void els.stage.offsetWidth; els.stage.classList.add("shake"); }
  els.primaryBtn.focus();
}

function hideFeedback() {
  els.feedbackSheet.classList.remove("show");
}

/* ============================================================
   Session finish / fail
   ============================================================ */
function finishSession() {
  const accuracy = session.answered ? Math.round((session.correct / session.answered) * 100) : 100;
  let bonus = 10 + (session.heartsMode ? session.hearts * 2 : 4);
  if (accuracy === 100) bonus += 5;
  addXp(bonus);
  session.xpEarned += bonus;

  const goalWasMet = state.daily.xp >= state.goal;
  registerStreak();

  let crownedUp = false;
  if (session.kind === "lesson") {
    const ls = lessonState(session.lessonId);
    if (ls.crown < 5) { ls.crown += 1; crownedUp = true; }
    ls.sessions += 1;
    saveState();
  }

  sndFanfare();
  burstConfetti();
  renderResult({ accuracy, crownedUp, goalWasMet });
}

function renderResult({ accuracy, crownedUp, goalWasMet }) {
  const crown = session.kind === "lesson" ? lessonState(session.lessonId).crown : 0;
  const crownLine = session.kind === "lesson"
    ? (crownedUp
        ? `<div class="crown-pop">👑 Crown ${crown}/5 earned!</div>`
        : `<div class="crown-pop">👑 Crown ${crown}/5 · already maxed</div>`)
    : "";
  els.stage.innerHTML = `
    <div class="result">
      <div class="result-emoji">${crownedUp ? "👑" : "🎉"}</div>
      <h2>${session.kind === "lesson" ? "Lesson complete!" : "Review done!"}</h2>
      <p class="result-sub">${escapeHtml(session.title)}</p>
      ${crownLine}
      <div class="result-stats">
        <div class="result-stat yellow"><div class="rs-label">Total XP</div><div class="rs-value">+${session.xpEarned}</div></div>
        <div class="result-stat blue"><div class="rs-label">Accuracy</div><div class="rs-value">${accuracy}%</div></div>
        <div class="result-stat red"><div class="rs-label">Streak</div><div class="rs-value">🔥${state.streak.count}</div></div>
      </div>
      ${goalWasMet ? `<div class="crown-pop" style="color:var(--orange)">⚡ Daily goal reached!</div>` : `<div class="result-sub">${state.goal - state.daily.xp} XP to today's goal</div>`}
    </div>`;
  els.feedbackSheet.classList.remove("show");
  els.primaryBtn.className = "btn-primary";
  els.primaryBtn.textContent = "Continue";
  els.primaryBtn.disabled = false;
  els.primaryBtn.focus();
  session.done = true;
}

function renderFail() {
  const weak = [...new Set(session.queue.filter((s) => session.slotFails[s.slot]).map((s) => s.item))].slice(0, 6);
  els.stage.innerHTML = `
    <div class="result">
      <div class="result-emoji">💔</div>
      <h2>Out of hearts</h2>
      <p class="result-sub">You made it ${Math.round((session.passed.size / session.totalSlots) * 100)}% of the way. These words need another look:</p>
      <div class="result-stats">
        ${weak.map((it) => `<div class="result-stat red"><div class="rs-value" style="font-size:1rem">${escapeHtml(it.term)}</div></div>`).join("") || `<p class="result-sub">Give it another go!</p>`}
      </div>
    </div>`;
  els.feedbackSheet.classList.remove("show");
  els.primaryBtn.className = "btn-primary go-wrong";
  els.primaryBtn.textContent = "Try again";
  els.primaryBtn.disabled = false;
  session.failed = true;
}

function endSessionButton() {
  // primary button pressed on a result/fail screen
  if (session.failed) {
    const lessonId = session.lessonId, chapterId = session.chapterId, kind = session.kind;
    if (kind === "lesson") startLessonSession(lessonId);
    else startPracticeSession(chapterId);
    return;
  }
  setView("home");
  renderHome();
}

/* ============================================================
   Confetti
   ============================================================ */
function burstConfetti() {
  const canvas = els.confetti;
  const ctx = canvas.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.scale(dpr, dpr);
  const W = window.innerWidth, H = window.innerHeight;
  const colors = ["#58cc02", "#1cb0f6", "#ffc800", "#ce82ff", "#ff4b4b", "#ff9600"];
  const parts = Array.from({ length: 130 }, () => ({
    x: W / 2 + (Math.random() - 0.5) * 120,
    y: H * 0.32,
    vx: (Math.random() - 0.5) * 9,
    vy: Math.random() * -11 - 4,
    s: 6 + Math.random() * 8,
    rot: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.3,
    c: colors[Math.floor(Math.random() * colors.length)]
  }));
  let frame = 0;
  function tick() {
    ctx.clearRect(0, 0, W, H);
    frame += 1;
    parts.forEach((p) => {
      p.vy += 0.32; p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6);
      ctx.restore();
    });
    if (frame < 150) requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, W, H);
  }
  tick();
}

/* ============================================================
   Words / Bank
   ============================================================ */
function crownGlyphs(mastery) {
  const filled = Math.min(5, mastery);
  return `<span class="crn ${filled ? "" : "empty"}">👑</span><span>${filled}/5</span>`;
}
function renderBank() {
  const c = chapterMeta();
  els.bankMeta.textContent = `Kapitel ${c.number} · ${c.title}`;
  renderBankChips();
  const query = normalize(els.searchInput.value || "");
  let items = chapterWords();
  if (bankFilter === "learning") items = items.filter((i) => isLearned(i) && itemState(i.id).mastery < 5);
  else if (bankFilter === "mastered") items = items.filter((i) => itemState(i.id).mastery >= 5);
  else if (bankFilter === "focus") items = items.filter((i) => i.priority === "focus");
  else if (bankFilter === "new") items = items.filter((i) => !isLearned(i));
  items = items.filter((i) => normalize(`${i.term} ${i.translation} ${i.form} ${i.example}`).includes(query));

  els.wordList.innerHTML = "";
  if (!items.length) {
    els.wordList.innerHTML = `<p class="bank-meta" style="padding:20px 4px">No words match.</p>`;
    return;
  }
  const frag = document.createDocumentFragment();
  items.forEach((item) => {
    const s = itemState(item.id);
    const ex = learningExamples(item)[0];
    const div = document.createElement("div");
    div.className = "word-item";
    const lessonTitle = lessons.find((l) => l.id === item.lesson)?.title || item.lesson;
    div.innerHTML = `
      <div class="word-crowns">${crownGlyphs(s.mastery)}</div>
      <div class="word-main">
        <h3>${escapeHtml(item.term)}</h3>
        <div class="w-meta">${escapeHtml([lessonTitle, item.priority === "focus" ? "focus" : "", item.type, item.form].filter(Boolean).join(" · "))}</div>
        <div class="w-trans">${escapeHtml(item.translation)}</div>
        <div class="w-ex">${escapeHtml(ex.de)}<span class="en">${escapeHtml(ex.en)}</span></div>
      </div>
      <button class="speak" type="button" data-speak="${escapeAttr(item.term)}">🔊</button>`;
    frag.appendChild(div);
  });
  els.wordList.appendChild(frag);
}
function renderBankChips() {
  const chips = [
    { id: "all", label: "All" },
    { id: "new", label: "New" },
    { id: "learning", label: "Learning" },
    { id: "mastered", label: "Mastered" },
    { id: "focus", label: "Focus" }
  ];
  els.bankChips.innerHTML = "";
  chips.forEach((chip) => {
    const btn = document.createElement("button");
    btn.className = "filter-chip" + (bankFilter === chip.id ? " active" : "");
    btn.type = "button";
    btn.textContent = chip.label;
    btn.addEventListener("click", () => { bankFilter = chip.id; renderBank(); });
    els.bankChips.appendChild(btn);
  });
}

/* ============================================================
   Settings / Profile
   ============================================================ */
function openSettings() {
  renderProfileStats();
  renderGoalOptions();
  els.settingsModal.hidden = false;
}
function closeSettings() { els.settingsModal.hidden = true; }
function renderProfileStats() {
  const learned = vocab.filter(isLearned).length;
  const mastered = vocab.filter((v) => itemState(v.id).mastery >= 5).length;
  const crowns = Object.values(state.lessons).reduce((s, l) => s + (l.crown || 0), 0);
  const tiles = [
    { ico: "⭐", val: state.xp, lbl: "Total XP" },
    { ico: "🏅", val: `Lv ${levelFor(state.xp)}`, lbl: "Level" },
    { ico: "🔥", val: state.streak.count, lbl: "Day streak" },
    { ico: "👑", val: crowns, lbl: "Crowns" },
    { ico: "📚", val: `${learned}/${vocab.length}`, lbl: "Words seen" },
    { ico: "✅", val: mastered, lbl: "Mastered" }
  ];
  els.profileStats.innerHTML = tiles.map((t) => `
    <div class="stat-tile"><span class="st-ico">${t.ico}</span><div><div class="st-val">${t.val}</div><div class="st-lbl">${t.lbl}</div></div></div>`).join("");
}
function renderGoalOptions() {
  const goals = [10, 20, 30, 50];
  els.goalOptions.innerHTML = "";
  goals.forEach((g) => {
    const btn = document.createElement("button");
    btn.className = "pill" + (state.goal === g ? " active" : "");
    btn.type = "button";
    btn.textContent = `${g} XP`;
    btn.addEventListener("click", () => { state.goal = g; saveState(); renderGoalOptions(); updateHud(); });
    els.goalOptions.appendChild(btn);
  });
}

/* ============================================================
   Events
   ============================================================ */
els.primaryBtn.addEventListener("click", () => {
  if (!session) return;
  if (session.done || session.failed) { endSessionButton(); return; }
  onPrimary();
});

els.quitSession.addEventListener("click", () => {
  if (session && !session.done && !session.failed && session.answered > 0) {
    if (!confirm("Quit this session? Progress on answered words is saved.")) return;
  }
  setView("home");
  renderHome();
});

els.bottomNav.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-btn");
  if (!btn) return;
  const nav = btn.dataset.nav;
  if (nav === "home") { setView("home"); renderHome(); }
  else if (nav === "bank") { setView("bank"); renderBank(); }
  else if (nav === "practice") { startPracticeSession(currentChapter); }
  else if (nav === "settings") { openSettings(); }
});

els.openSettings.addEventListener("click", openSettings);
els.hudGoal.addEventListener("click", openSettings);
els.hudHearts.addEventListener("click", openSettings);
els.settingsModal.querySelectorAll("[data-close-settings]").forEach((el) => el.addEventListener("click", closeSettings));

els.searchInput.addEventListener("input", renderBank);

els.soundToggle.addEventListener("change", () => { state.sound = els.soundToggle.checked; if (state.sound) audio(); saveState(); });
els.autoSpeak.addEventListener("change", () => { state.speech.auto = els.autoSpeak.checked; saveState(); });
els.heartsToggle.addEventListener("change", () => { state.heartsMode = els.heartsToggle.checked; saveState(); updateHud(); });
els.speechRate.addEventListener("change", () => { state.speech.rate = Number(els.speechRate.value); saveState(); });
els.voiceSelect.addEventListener("change", () => { state.speech.voiceURI = els.voiceSelect.value; saveState(); });

els.resetProgress.addEventListener("click", () => {
  if (!confirm("Reset all progress, crowns and streaks?")) return;
  state = JSON.parse(JSON.stringify(defaultState));
  state.speech = loadState().speech; // keep chosen voice
  saveState();
  closeSettings();
  setView("home");
  renderHome();
});

// speak buttons (event delegation)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-speak]");
  if (!btn) return;
  audio(); // unlock audio on gesture
  speak(btn.dataset.speak);
});

// keyboard shortcuts inside a session
document.addEventListener("keydown", (e) => {
  if (els.body.dataset.view !== "session" || !session) return;
  if (e.key === "Enter") {
    if (!els.primaryBtn.disabled) { e.preventDefault(); els.primaryBtn.click(); }
    return;
  }
  if (session.awaiting || session.done || session.failed) return;
  const q = session.currentQ;
  if (q && q.kind === "choice" && /^[1-9]$/.test(e.key)) {
    const idx = Number(e.key) - 1;
    const opts = els.stage.querySelectorAll(".option");
    if (opts[idx]) { e.preventDefault(); opts[idx].click(); }
  }
});

/* ============================================================
   Init
   ============================================================ */
ensureDaily();
initSpeech();
setView("home");
renderHome();
renderBankChips();
