/**
 * Episode-specific Mahabharata reader prose, kept alongside each episode bundle
 * for locale parity. Mirrors the pattern in gilgameshTabletReaders.ts.
 */
import type { Locale } from '../types';

export type MahaTransSeg =
  | { kind: 'p'; text: string }
  | { kind: 'verse'; text: string }
  | { kind: 'lacuna'; text: string; aria: string };

/* ── Arjuna's Grief ─────────────────────────────────────────────────── */

export interface ArjunasGriefReaderExtras {
  narrP1: string;
  narrP2: string;
  narrQuoteArjunaHtml: string;
  narrQuoteArjunaCite: string;
  narrP3: string;
  transSegments: MahaTransSeg[];
  transAttribution: string;
  origHeadMain: string;
  origAttrArnold: string;
  origDemoNote: string;
  scholMs: string;
  scholHist: string;
  scholDebateHead: string;
  scholDebateP: string;
  scholVariantGita: string;
  scholVariantChap: string;
  scholCite1_html: string;
  scholCite2_html: string;
  scholCite3_html: string;
  proppFwTitle: string;
  proppFwBody: string;
  propp8Name: string;
  propp8PanelHead: string;
  propp8PanelP: string;
  propp10Name: string;
  propp10PanelHead: string;
  propp10PanelP: string;
  propp12Name: string;
  propp12PanelHead: string;
  propp12PanelP: string;
  campFwTitle: string;
  campFwBody: string;
  campRefusalName: string;
  campRefusalPanelHead: string;
  campRefusalPanelP: string;
  campMentorName: string;
  campMentorPanelHead: string;
  campMentorPanelP: string;
  tmiFwTitle: string;
  tmiFwBody: string;
  tmiP146Name: string;
  tmiP146PanelHead: string;
  tmiP146PanelP: string;
  tmiH580Name: string;
  tmiH580PanelHead: string;
  tmiH580PanelP: string;
}

const arjunasGriefEn: ArjunasGriefReaderExtras = {
  narrP1:
    'The opening of the Bhagavad Gita is not a theological treatise. It is a scene of military paralysis. Arjuna, the greatest archer of his age, stands on the field of Kurukshetra — the site of a war that has been building through the previous five books of the Mahabharata — and sees, on the opposing side, everyone he loves. His teachers. His grandsire Bhishma, who taught him to draw a bow. His cousins. His uncles. His friends. Men who loved him. Men he loves still.',
  narrP2:
    'He asks Krishna — his charioteer, who is also the god Vishnu incarnate, though Arjuna does not yet understand this fully — to halt the chariot between the two armies so he can see who he is being asked to kill. The request is the first moment of hubris: Arjuna believes he can simply look, assess, and decide. He has not yet understood that the looking itself will undo him.',
  narrQuoteArjunaHtml:
    '"Sanjaya, I behold my kinsfolk, Krishna! I see them standing here, ready for battle, my limbs fail and my mouth is parched, my body quivers and my hair stands on end. My bow slips from my hand, my skin burns; I am unable to remain standing; my mind, as it were, whirls round — I see ill omens, O Kesava!"',
  narrQuoteArjunaCite: '— Edwin Arnold, The Song Celestial (1885), Book I, adapted from verse 28–31',
  narrP3:
    'The speech Arjuna gives in verses 28–47 is one of the most precise psychological portraits of moral crisis in world literature. He is not a coward. He is not ignorant. He is fully capable of the act being demanded of him. What breaks him is precisely his clarity of vision: he can see exactly what killing these people will cost. He names it: the destruction of families, the death of ancestral rites, the unraveling of the social order. He sets down his bow. He sinks onto the seat of the chariot. He says he will not fight.',
  transSegments: [
    { kind: 'p', text: 'Sanjaya said: Seeing thus the sons of Dhritarashtra standing arrayed, and the missiles about to be discharged, Arjuna, whose standard bears the device of the ape, took up his bow; and then, O king, spake these words to Krishna:' },
    { kind: 'verse', text: 'Place my chariot, O Achyuta, between the two armies, that I may behold who are those standing here eager for battle.' },
    { kind: 'verse', text: 'I desire to behold those who are here assembled and are about to engage in battle, wishing to do service in warfare to the evil-minded son of Dhritarashtra.' },
    { kind: 'p', text: 'Sanjaya said: Thus addressed by Gudakesha, O Bharata, Hrishikesha placed that best of chariots between the two armies, in front of Bhishma, Drona, and all the rulers of the earth, and said:' },
    { kind: 'verse', text: '"Behold, O Partha, these Kurus all assembled together."' },
    { kind: 'p', text: 'There Partha beheld standing fathers, and grandfathers, teachers, maternal uncles, brothers, sons, grandsons, companions, fathers-in-law, and friends, in both armies. Seeing all these kinsmen thus standing arrayed, Arjuna was filled with great compassion, and sorrowfully spake these words:' },
    { kind: 'verse', text: 'O Krishna, seeing my own kinsmen thus arrayed, eager to fight, my limbs fail, and my mouth is parched; my body quivers, and my hair stands on end.' },
    { kind: 'verse', text: 'My bow slips from my hand; my skin burns; I am unable to stand; my mind, as it were, whirls round; I see adverse omens, O Kesava.' },
    { kind: 'verse', text: 'I see no good in killing my kinsmen in battle. O Krishna, I desire neither victory, nor kingdom, nor pleasures.' },
    { kind: 'verse', text: 'Of what use to us is a kingdom, O Govinda? Of what use enjoyment of life? Those for whose sake we desire kingdom, enjoyments, and pleasures — these stand here in battle, abandoning life and wealth.' },
    { kind: 'verse', text: 'Teachers, fathers and sons, as also grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and kinsmen — these I do not wish to kill, even though slain myself, O Madhusudana, even for the sake of the kingship of the three worlds, let alone for the sake of the earth.' },
    { kind: 'p', text: 'Sanjaya said: Having thus spoken on the field of battle, Arjuna, his mind overwhelmed with grief, cast aside his bow and arrows and sank down on his chariot-seat.' },
  ],
  transAttribution: '— Trans. Annie Besant & Bhagavan Das, The Bhagavad-Gita (1905) · Public domain · Bhishma Parva, Chapter 1, selected verses',
  origHeadMain: 'Sanskrit (IAST romanization) — after Critical Edition, Pune (1966–75)',
  origAttrArnold: 'IAST transliteration after the critical edition. AI-assembled from published editions — not scholar-reviewed.',
  origDemoNote: 'AI-generated demo content — not scholar-reviewed',
  scholMs:
    'The Mahabharata exists in two major regional recensions: the Northern and Southern. The Critical Edition, prepared by the Bhandarkar Oriental Research Institute in Pune over 47 years (1919–1966), collated over 1,259 manuscripts in multiple scripts. The Bhishma Parva, containing the Bhagavad Gita, was edited by S.K. Belvalkar (1947). The Critical Edition established approximately 700 verses of the Bhagavad Gita as the stable text, with several hundred more "interpolated" (late additions) bracketed separately.',
  scholHist:
    'The Bhagavad Gita as an independent text is attested from at least the 2nd century CE, when Shankara\'s teacher\'s teacher (Gaudapada) is believed to have commented on it. The earliest surviving commentary is Shankara\'s own (c. 788–820 CE). The Gita\'s composition within the Mahabharata is dated by most scholars to between 200 BCE and 200 CE, with the Mahabharata\'s core narrative considerably older. The question of whether the Gita was an original part of the epic or an interpolation is now largely settled in favour of interpolation — but an extraordinarily early one, likely inserted during the same redaction period that produced the text\'s current shape.',
  scholDebateHead: 'SCHOLARLY DEBATE: THE UNITY AND DATING OF THE BHAGAVAD GITA',
  scholDebateP:
    'J.A.B. van Buitenen (1981) argued that the Bhagavad Gita was composed as a philosophically coherent unity, with Arjuna\'s crisis in Chapter 1 deliberately structured as the dialectical ground on which all subsequent teaching stands. Richard Garbe (1905) had earlier argued for a Sankhya-Yoga core that was later expanded with Vedantic material, making the text a composite. The current majority position follows van Buitenen: the Gita is philosophically coherent as received, though it contains multiple philosophical registers (Sankhya, Yoga, Bhakti, Vedanta) that reflect an eclectic synthesis rather than systematic unity.',
  scholVariantGita:
    'The Critical Edition brackets BG 2.15b–16a as likely interpolation (the "sthitaprajña" passage in its current form). This affects the philosophical argument about equanimity in ways that remain contested. Telang (1882) translated the longer recension; Zaehner (1969) used the CE.',
  scholVariantChap:
    'Chapter 1 (Arjuna Vishada Yoga) contains 47 verses in the CE text; several Southern manuscripts add up to 4 further verses describing Arjuna\'s physical collapse in greater detail. These additions are bracketed as late but consistent with the episode\'s narrative function.',
  scholCite1_html: 'J.A.B. van Buitenen (trans.), <em>The Bhagavadgītā in the Mahābhārata</em> (University of Chicago Press, 1981).',
  scholCite2_html: 'S.K. Belvalkar (ed.), <em>Bhīṣmaparvan</em>, Critical Edition of the Mahābhārata (BORI, Pune, 1947).',
  scholCite3_html: 'R.C. Zaehner (trans.), <em>The Bhagavad-Gītā</em> (Oxford University Press, 1969).',
  proppFwTitle: 'Propp\'s Morphology of the Folktale (1928)',
  proppFwBody:
    'Vladimir Propp identified 31 narrative functions recurring in Russian folktales. The framework has been applied widely to myth and epic traditions. PROPP-8 (Villainy/Lack) and PROPP-10 (Beginning Counteraction) are the structural engine of crisis-and-response narratives.',
  propp8Name: 'Villainy / Lack',
  propp8PanelHead: 'PROPP-8 · Villainy / Lack',
  propp8PanelP:
    'Arjuna\'s lack here is not a material object but a moral-psychological one: he lacks the capacity to reconcile his duty (Kshatriya dharma, the duty of a warrior) with his personal bonds (kinship, love, gratitude toward his teachers). This is the narrative lack that drives the Bhagavad Gita — Krishna\'s entire 18-chapter teaching is the attempt to fill this lack with understanding.',
  propp10Name: 'Beginning Counteraction',
  propp10PanelHead: 'PROPP-10 · Beginning Counteraction',
  propp10PanelP:
    'Arjuna\'s decision to appeal to Krishna — to ask, "I am your disciple. Teach me what is right" — is the structural beginning of counteraction. He has moved from paralysis (refusing the task) to request (seeking the means to understand the task). This is the hinge on which the Gita turns.',
  propp12Name: 'Hero Leaves Home',
  propp12PanelHead: 'PROPP-12 · Hero Leaves Home',
  propp12PanelP:
    'In this episode, departure is refused and then re-staged. Arjuna is supposed to leave the social world of kinship behind and enter the warrior\'s world of battle. His collapse on the chariot is the refusal of that departure. The Gita is the extended act of teaching him how to depart — how to enter action without being defined by its attachments.',
  campFwTitle: 'Campbell\'s Hero with a Thousand Faces (1949)',
  campFwBody:
    'Campbell\'s monomyth identifies a recurring pattern: departure, initiation, and return. The Bhagavad Gita begins with what Campbell called the Refusal of the Call — the hero\'s crisis before the journey proper begins.',
  campRefusalName: 'Refusal of the Call',
  campRefusalPanelHead: 'Campbell · Refusal of the Call',
  campRefusalPanelP:
    'Arjuna\'s collapse on the chariot is textbook Refusal of the Call. Campbell notes that the refusal is not cowardice; it is a genuine encounter with what the journey will cost. Arjuna is not wrong about the cost. He is wrong, in the Gita\'s theological argument, about what the cost means. His refusal is the narrative opening through which Krishna\'s teaching becomes possible.',
  campMentorName: 'Meeting with the Mentor',
  campMentorPanelHead: 'Campbell · Meeting with the Mentor',
  campMentorPanelP:
    'Krishna in Chapter 1 is already present as charioteer, but he has not yet revealed himself as mentor. Arjuna\'s address at verse 46 — "I am your disciple; teach me what is right" — is the formal request that initiates the mentor relationship. Campbell\'s mentor figure supplies the hero with the knowledge or power needed to undertake the journey. In the Gita, the entire subsequent 17 chapters are this mentorship.',
  tmiFwTitle: 'Thompson Motif Index (1955–1958)',
  tmiFwBody:
    'Stith Thompson\'s six-volume index classifies recurring narrative motifs across world folklore and mythology. P-codes cover social relations; Q-codes cover rewards and punishments; H-codes cover tests and tasks.',
  tmiP146Name: 'Warrior refuses to fight',
  tmiP146PanelHead: 'TMI P14.6 · Warrior refuses to fight',
  tmiP146PanelP:
    'The motif of the warrior who refuses battle is widespread in epic traditions. Thompson P14.6 documents cases where the refusal stems from moral or emotional conflict rather than fear. Arjuna\'s refusal in BG Chapter 1 is among the most philosophically elaborated instances in world literature: it is not fear but love, not weakness but clarity, that disarms him.',
  tmiH580Name: 'Enigmatic counsel',
  tmiH580PanelHead: 'TMI H580 · Enigmatic counsel',
  tmiH580PanelP:
    'Krishna\'s teaching in the subsequent chapters (beginning Chapter 2) is coded by Thompson H580: wise counsel delivered in enigmatic or paradoxical form. "You are not the doer; act without attachment to results" is structurally an enigmatic injunction — its meaning must be worked out. The tension between action and non-attachment is the central paradox the Gita forces the reader to inhabit.',
};

const arjunasGriefRu: ArjunasGriefReaderExtras = {
  narrP1:
    'Открытие Бхагавад-гиты — не богословский трактат. Это сцена военного паралича. Арджуна, величайший лучник своего времени, стоит на поле Куру — месте войны, которая нарастала на протяжении предыдущих пяти книг Махабхараты — и видит на противоположной стороне всех, кого любит. Учителей. Деда Бхишму, который научил его натягивать лук. Двоюродных братьев. Дядей. Друзей. Людей, которые любили его. Людей, которых он любит до сих пор.',
  narrP2:
    'Он просит Кришну — своего возничего, который есть также бог Вишну в воплощённой форме, хотя Арджуна ещё не понимает этого в полной мере, — остановить колесницу между двумя войсками, чтобы он мог видеть, кого его просят убить. Эта просьба — первый миг гордыни: Арджуна полагает, что может просто взглянуть, оценить и решить. Он ещё не понял, что сам взгляд его и уничтожит.',
  narrQuoteArjunaHtml:
    '"Саньяя, я вижу своих родственников, Кришна! Я вижу их здесь, готовых к битве, — мои члены слабеют, рот пересох; тело дрожит, волосы встают дыбом. Лук выпадает из рук; кожа горит; я не в силах стоять; ум мой как бы кружится — я вижу дурные предзнаменования, о Кесава!"',
  narrQuoteArjunaCite: '— Эдвин Арнолд, «Небесная Песнь» (1885), Книга I, пер. с англ., ст. 28–31',
  narrP3:
    'Речь, которую Арджуна произносит в стихах 28–47, — один из наиболее точных психологических портретов нравственного кризиса в мировой литературе. Он не трус. Он не невежда. Он вполне способен совершить то, что от него требуется. Его ломает именно ясность видения: он отчётливо видит, чего будет стоить убийство этих людей. И он называет это: разрушение семей, гибель родовых обрядов, распад общественного порядка. Он кладёт лук. Он опускается на сиденье колесницы. Он говорит, что не будет сражаться.',
  transSegments: [
    { kind: 'p', text: 'Саньяя сказал: Видя стройные ряды сыновей Дхритараштры и метательное оружие, уже готовое к действию, Арджуна, чей стяг украшен символом обезьяны, поднял свой лук; и тогда, о царь, он обратился к Кришне:' },
    { kind: 'verse', text: 'Поставь мою колесницу, о Ачьюта, между двумя войсками, дабы я мог увидеть тех, кто стоит здесь, готовый к битве.' },
    { kind: 'verse', text: 'Я желаю видеть тех, кто собрался здесь и готов вступить в сражение, намереваясь служить в воинском деле злонамеренному сыну Дхритараштры.' },
    { kind: 'p', text: 'Саньяя сказал: Так обращённый Гудакешей, о Бхарата, Хришикеша поставил лучшую из колесниц между двумя войсками — пред Бхишмой, Дроной и всеми владыками земли — и промолвил:' },
    { kind: 'verse', text: '"Смотри, о Партха, на этих собравшихся кауравов."' },
    { kind: 'p', text: 'Там Партха увидел стоящих в обоих войсках отцов и дедов, учителей, дядей по матери, братьев, сыновей, внуков, товарищей, тестей и друзей. Увидев всех этих родственников, выстроившихся в боевом порядке, Арджуна был охвачен великой жалостью и с горестью произнёс такие слова:' },
    { kind: 'verse', text: 'О Кришна, видя своих родственников, выстроенных и жаждущих сражения, мои члены слабеют и рот пересыхает; тело дрожит, волосы встают дыбом.' },
    { kind: 'verse', text: 'Лук выпадает из рук; кожа горит; я не в силах стоять; ум мой как бы кружится — я вижу дурные знамения, о Кесава.' },
    { kind: 'verse', text: 'Я не нахожу блага в убийстве своих родственников в битве. О Кришна, я не желаю ни победы, ни царства, ни наслаждений.' },
    { kind: 'verse', text: 'Что нам в царстве, о Говинда? Что в жизненных радостях? Те, ради кого мы желаем царства, наслаждений и утех, стоят здесь в сражении, отрекаясь от жизни и богатства.' },
    { kind: 'verse', text: 'Учителя, отцы и сыновья, деды, дяди по матери, тести, внуки, шурины и родственники — их я не желаю убивать, хотя и сам буду убит, о Мадхусудана, даже ради власти над тремя мирами, не говоря уже о земле.' },
    { kind: 'p', text: 'Саньяя сказал: Произнеся эти слова на поле битвы, Арджуна, чей ум был охвачен скорбью, отбросил лук и стрелы и опустился на сиденье своей колесницы.' },
  ],
  transAttribution: '— Пер. Э. Бесант и Бхагаван Дас, «Бхагавад-гита» (1905) · Общественное достояние · Бхишма-парва, Глава 1, избранные стихи',
  origHeadMain: 'Санскрит (транслитерация IAST) — по критическому изданию, Пуне (1966–75)',
  origAttrArnold: 'Транслитерация IAST по критическому изданию. Составлено ИИ по опубликованным изданиям — не проверено учёным.',
  origDemoNote: 'Демо-контент, созданный ИИ — не проверен учёным',
  scholMs:
    'Махабхарата дошла до нас в двух крупных региональных редакциях: Северной и Южной. Критическое издание, подготовленное Институтом востоковедения Бхандаркара (BORI) в Пуне за 47 лет (1919–1966), сопоставило более 1259 рукописей на нескольких письменностях. Бхишма-парву, содержащую Бхагавад-гиту, редактировал С.К. Белвалкар (1947). Критическое издание установило около 700 стихов Бхагавад-гиты как стабильный текст, ещё несколько сотен «интерполированных» (поздних вставок) выделены в отдельные скобки.',
  scholHist:
    'Бхагавад-гита как самостоятельный текст засвидетельствована не позднее II в. н.э., когда учитель учителя Шанкары (Гаудапада), по всей видимости, уже комментировал её. Первый сохранившийся комментарий принадлежит самому Шанкаре (ок. 788–820 н.э.). Большинство учёных датируют создание Гиты внутри Махабхараты периодом между 200 до н.э. и 200 н.э., тогда как ядро эпоса значительно древнее. Вопрос о том, была ли Гита изначальной частью эпоса или поздней вставкой, в основном решён в пользу вставки — но чрезвычайно ранней, предположительно внесённой в тот же период редактирования, который придал тексту нынешний облик.',
  scholDebateHead: 'НАУЧНАЯ ДИСКУССИЯ: ЕДИНСТВО И ДАТИРОВКА БХАГАВАД-ГИТЫ',
  scholDebateP:
    'Й.А.Б. ван Бёйтенен (1981) утверждал, что Бхагавад-гита создана как философски цельное единство, а кризис Арджуны в главе 1 намеренно выстроен как диалектическое основание, на котором держится всё последующее учение. Ричард Гарбе (1905) ранее доказывал наличие санкхья-йогического ядра, расширенного впоследствии ведантийским материалом. Нынешний консенсус следует за ван Бёйтененом: Гита философски последовательна в её нынешнем виде, хотя и содержит несколько философских регистров (санкхья, йога, бхакти, веданта), отражающих эклектический синтез, а не систематическое единство.',
  scholVariantGita:
    'Критическое издание заключает в скобки BG 2.15b–16a как вероятную интерполяцию (пассаж о «стхитапраджне» в его нынешней форме). Это влияет на философский аргумент о равновесии духа — вопрос, по-прежнему остающийся дискуссионным. Теланг (1882) переводил по расширенной рецензии; Закнер (1969) опирался на КИ.',
  scholVariantChap:
    'Глава 1 (Арджуна-вишада-йога) содержит 47 стихов в КИ; ряд южных рукописей добавляет до 4 стихов, подробнее описывающих физический коллапс Арджуны. Эти добавления заключены в скобки как поздние, но согласующиеся с нарративной функцией эпизода.',
  scholCite1_html: 'Й.А.Б. ван Бёйтенен (пер.), <em>The Bhagavadgītā in the Mahābhārata</em> (University of Chicago Press, 1981).',
  scholCite2_html: 'С.К. Белвалкар (ред.), <em>Bhīṣmaparvan</em>, критическое издание Махабхараты (BORI, Пуне, 1947).',
  scholCite3_html: 'Р.Ч. Закнер (пер.), <em>The Bhagavad-Gītā</em> (Oxford University Press, 1969).',
  proppFwTitle: 'Морфология сказки Проппа (1928)',
  proppFwBody:
    'Владимир Пропп выделил 31 нарративную функцию, повторяющуюся в русских народных сказках. Его система широко применяется к мифу и эпической традиции. ПРОПП-8 (Злодеяние / Нехватка) и ПРОПП-10 (Начало противодействия) — структурный двигатель нарративов «кризис и ответ».',
  propp8Name: 'Злодеяние / Нехватка',
  propp8PanelHead: 'ПРОПП-8 · Злодеяние / Нехватка',
  propp8PanelP:
    'Нехватка Арджуны — не материальный объект, а морально-психологическая: он лишён способности примирить свой долг (кшатрийская дхарма — долг воина) с личными привязанностями (родство, любовь, благодарность к учителям). Именно эта нарративная нехватка движет Бхагавад-гитой — всё последующее 18-главное учение Кришны есть попытка восполнить её пониманием.',
  propp10Name: 'Начало противодействия',
  propp10PanelHead: 'ПРОПП-10 · Начало противодействия',
  propp10PanelP:
    'Решение Арджуны воззвать к Кришне — сказать: «Я твой ученик. Научи меня, что правильно» — структурно открывает начало противодействия. Он перешёл от паралича (отказа от задачи) к просьбе (поиску средств понять задачу). Именно здесь поворачивается ось Гиты.',
  propp12Name: 'Герой покидает дом',
  propp12PanelHead: 'ПРОПП-12 · Герой покидает дом',
  propp12PanelP:
    'В этом эпизоде отправление сначала отвергается, а потом переосмысляется. Арджуна должен оставить социальный мир родства и войти в воинский мир битвы. Его коллапс на колеснице — отказ от этого отправления. Гита — развёрнутое обучение тому, как уйти, не определяясь своими привязанностями.',
  campFwTitle: 'Герой с тысячью лиц Кэмпбелла (1949)',
  campFwBody:
    'Мономиф Кэмпбелла выявляет повторяющийся образец: уход, инициация, возвращение. Бхагавад-гита начинается с того, что Кэмпбелл назвал Отказом от Зова — кризисом героя до начала странствия как такового.',
  campRefusalName: 'Отказ от Зова',
  campRefusalPanelHead: 'Кэмпбелл · Отказ от Зова',
  campRefusalPanelP:
    'Коллапс Арджуны на колеснице — хрестоматийный Отказ от Зова. Кэмпбелл замечает, что отказ — не трусость; это подлинная встреча с той ценой, которую предстоит заплатить. Арджуна не ошибается в цене. Он ошибается, согласно богословскому аргументу Гиты, в том, что значит эта цена. Его отказ — нарративное отверстие, через которое становится возможным учение Кришны.',
  campMentorName: 'Встреча с наставником',
  campMentorPanelHead: 'Кэмпбелл · Встреча с наставником',
  campMentorPanelP:
    'Кришна в главе 1 уже присутствует как возничий, но ещё не открыл себя как наставника. Обращение Арджуны в стихе 46 — «Я твой ученик; научи меня, что правильно» — формальная просьба, инициирующая отношения ученика и учителя. Наставник в схеме Кэмпбелла снабжает героя знанием или силой, необходимой для странствия. В Гите всё последующее 17 глав — это наставничество.',
  tmiFwTitle: 'Указатель мотивов Томпсона (1955–1958)',
  tmiFwBody:
    'Шеститомный указатель Стита Томпсона классифицирует повторяющиеся нарративные мотивы фольклора и мифологии мира. P-коды охватывают социальные отношения; Q-коды — награды и наказания; H-коды — испытания и задачи.',
  tmiP146Name: 'Воин отказывается сражаться',
  tmiP146PanelHead: 'УМТ P14.6 · Воин отказывается сражаться',
  tmiP146PanelP:
    'Мотив воина, отказывающегося от боя, широко представлен в эпической традиции. Томпсон P14.6 документирует случаи, когда отказ обусловлен моральным или эмоциональным конфликтом, а не страхом. Отказ Арджуны в первой главе БГ — один из наиболее философски разработанных случаев в мировой литературе: его разоружает не страх, а любовь, не слабость, а ясность видения.',
  tmiH580Name: 'Загадочное наставление',
  tmiH580PanelHead: 'УМТ H580 · Загадочное наставление',
  tmiH580PanelP:
    'Учение Кришны в последующих главах (начиная с главы 2) кодируется Томпсоном H580: мудрое наставление, переданное в загадочной или парадоксальной форме. «Ты не деятель; действуй без привязанности к результатам» структурно является загадочным предписанием — его смысл необходимо выработать самостоятельно. Напряжение между действием и непривязанностью — центральный парадокс, в котором Гита заставляет читателя пребывать.',
};

/* ── Krishna's Counsel ──────────────────────────────────────────────── */

export interface KrishnaCounselReaderExtras {
  narrP1: string;
  narrP2: string;
  narrQuoteKrishnaHtml: string;
  narrQuoteKrishnaCite: string;
  narrP3: string;
  transSegments: MahaTransSeg[];
  transAttribution: string;
  scholMs: string;
  scholHist: string;
  scholDebateHead: string;
  scholDebateP: string;
  scholCite1_html: string;
  scholCite2_html: string;
  scholCite3_html: string;
}

const krishnaCounselEn: KrishnaCounselReaderExtras = {
  narrP1:
    'When Arjuna falls silent on the chariot, Krishna does not comfort him. He teaches him. The opening of the Bhagavad Gita\'s second chapter is the sharpest turn in the text: Krishna shifts from the role of charioteer and friend to the role of teacher, and he begins not with compassion but with a kind of urgent precision. "You grieve for those who should not be grieved for." The self is eternal; the body that appears to die does not carry the self with it. Killing these men will not destroy what they essentially are.',
  narrP2:
    'But this is only the first argument. The second is more radical: the distinction between doer and act. Arjuna is not, in Krishna\'s metaphysics, the one who kills — he is the instrument through which a predetermined action occurs. The wheel of dharma was already turning. The Kurukshetra war was already fixed in the nature of things. Arjuna\'s refusal will not prevent it; it will only prevent him from fulfilling his part in it with clarity and dignity.',
  narrQuoteKrishnaHtml:
    '"Let right deeds be thy motive, not the fruit which comes from them. And live in the action, labour! Make thine acts thy piety, casting all self aside, contemning gain and merit; so shall thine acts bring no fear, no fruitage of evil-doing, no bondage."',
  narrQuoteKrishnaCite: '— Edwin Arnold, The Song Celestial (1885), Book II, adapted',
  narrP3:
    'The third movement — the teaching of svadharma, one\'s own duty — is the most precisely social argument in the Gita. Arjuna is a Kshatriya, a warrior. His duty is to fight. To refuse is not noble restraint; it is a failure of the self at the most basic level. Better to die in one\'s own dharma, says Krishna, than to succeed in another\'s. The teaching converges into what has become the Gita\'s most quoted verse (2.47): "You have a right to perform your duties, but you are not entitled to the fruits of your actions." Arjuna picks up his bow.',
  transSegments: [
    { kind: 'p', text: 'Sanjaya said: To Arjuna, who was thus overwhelmed with compassion and in despair, and whose eyes were full of tears and agitated, Krishna, the destroyer of Madhu, said these words:' },
    { kind: 'verse', text: 'O Arjuna, whence hath come upon thee, at this crisis, this depression, this unmanliness? It does not become thee. Yield not to impotence, O Arjuna. It does not befit thee. Shake off thy faint-heartedness and arise.' },
    { kind: 'p', text: 'Arjuna said: O destroyer of Madhu, how shall I, in battle, fight with arrows against Bhishma and Drona, who are worthy of worship, O destroyer of enemies? Without slaying the great-souled ones, teachers, it is better to eat even in this world the food of beggars. Slaying the teachers who are bent on their own interest, I should only be eating food smeared with blood.' },
    { kind: 'p', text: 'Krishna said: Thou grievest for those that should not be grieved for, and yet thou speakest words of wisdom. The wise grieve neither for the living nor for the dead.' },
    { kind: 'verse', text: 'Never the spirit was born; the spirit shall cease to be never. Never was time it was not; End and Beginning are dreams.' },
    { kind: 'verse', text: 'Birthless and deathless and changeless remaineth the spirit for ever; Death hath not touched it at all, dead though the house of it seems.' },
    { kind: 'p', text: 'For the soul, there is never birth nor death at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.' },
    { kind: 'verse', text: 'Let right deeds be thy motive, not the fruit which comes from them. And live in the action, labour! Make thine acts thy piety, casting all self aside.' },
    { kind: 'p', text: 'Thy business is with the deed and not the fruit; let not the fruit of action be thy motive; and let not in thee be any inclination for inaction. Remaining steadfast in yoga, O Dhananjaya, perform actions, having abandoned attachment, having become equal in success and failure. Equanimity is called yoga.' },
    { kind: 'p', text: 'Sanjaya said: Having thus spoken to Arjuna on the battlefield, Krishna fell silent. And Arjuna, his grief yielding to understanding, took up his bow.' },
  ],
  transAttribution: '— Trans. Annie Besant & Bhagavan Das (1905) and Edwin Arnold (1885), composite · Public domain · Bhishma Parva, Chapter 2, selected verses',
  scholMs:
    'The second chapter of the Bhagavad Gita (Sankhya Yoga) is the longest and most philosophically dense in the CE text, comprising 72 verses. It integrates three distinct philosophical traditions: Sankhya metaphysics (the immortality of the self, verses 16–30), Yoga ethics (action without attachment, verses 40–53), and an early formulation of what will become Vedanta (the unborn, unchanging Atman). Medieval commentators differed significantly on which framework was primary. Shankara emphasised jnana (knowledge); Ramanuja emphasised bhakti (devotion); Madhva emphasised theism.',
  scholHist:
    'The famous verse BG 2.47 — "karmaṇy evādhikāras te mā phaleṣu kadācana" — is attested across all manuscript traditions without significant variation. It is one of the most stable verses in the entire CE text. By contrast, the sthitaprajña (stable-wisdom) passage (2.54–72) is textually contested: several Northern manuscripts present variant orderings that affect the philosophical argument about the relationship between knowledge and detachment.',
  scholDebateHead: 'SCHOLARLY DEBATE: SANKHYA VERSUS YOGA IN CHAPTER 2',
  scholDebateP:
    'Chapter 2\'s integration of Sankhya metaphysics and Yoga ethics has generated debate about the Gita\'s philosophical consistency. F. Edgerton (1944) argued that the Sankhya framework (the eternal self, the unreality of bodily death) and the Yoga framework (action without attachment) are philosophically incompatible: if the self is unaffected by action, the injunction to act without attachment is redundant. Van Buitenen (1981) argued that the two frameworks operate at different levels — ontological and ethical — and are complementary rather than contradictory. The debate remains live and shapes how the Gita is used in contemporary Hindu philosophical discourse.',
  scholCite1_html: 'F. Edgerton (trans.), <em>The Bhagavad Gita</em>, 2 vols. (Harvard Oriental Series, 1944).',
  scholCite2_html: 'W. Douglas P. Hill (trans.), <em>The Bhagavad-Gita</em> (Oxford University Press, 1928).',
  scholCite3_html: 'Wendy Doniger O\'Flaherty, <em>Karma and Rebirth in Classical Indian Traditions</em> (University of California Press, 1980).',
};

const krishnaCounselRu: KrishnaCounselReaderExtras = {
  narrP1:
    'Когда Арджуна замолкает на колеснице, Кришна не утешает его. Он учит его. Открытие второй главы Бхагавад-гиты — самый резкий поворот в тексте: Кришна переходит от роли возничего и друга к роли учителя, и начинает не с сочувствия, а с некой настоятельной точности. «Ты скорбишь о тех, о ком не следует скорбеть». Самость вечна; тело, которое кажется умирающим, не уносит самость с собой. Убийство этих людей не уничтожит то, чем они являются по существу.',
  narrP2:
    'Но это лишь первый аргумент. Второй более радикален: различие между деятелем и действием. Арджуна, согласно метафизике Кришны, — не тот, кто убивает, он лишь орудие, через которое совершается предопределённое действие. Колесо дхармы уже вращалось. Война на поле Куру была уже закреплена в природе вещей. Отказ Арджуны не предотвратит её; он лишь помешает ему выполнить свою роль в ней с ясностью и достоинством.',
  narrQuoteKrishnaHtml:
    '"Пусть правое деяние будет твоим побуждением, а не плод, из него исходящий. И живи в действии, трудись! Сделай свои поступки своим благочестием, отбросив всякое «я», пренебрегая выгодой и заслугой; тогда твои действия не принесут ни страха, ни злых плодов, ни оков."',
  narrQuoteKrishnaCite: '— Эдвин Арнолд, «Небесная Песнь» (1885), Книга II, адапт.',
  narrP3:
    'Третье движение — учение о свадхарме, собственном долге человека, — наиболее точный социальный аргумент в Гите. Арджуна — кшатрий, воин. Его долг — сражаться. Отказ — не благородное воздержание; это провал самости на самом базовом уровне. Лучше погибнуть в своей дхарме, говорит Кришна, чем преуспеть в чужой. Учение сходится к тому, что стало самым цитируемым стихом Гиты (2.47): «Твоё право — на действие, но никогда — на его плоды». Арджуна поднимает лук.',
  transSegments: [
    { kind: 'p', text: 'Саньяя сказал: Арджуне, охваченному состраданием и отчаянием, чьи глаза были полны слёз и смятения, Кришна, сокрушитель Мадху, сказал такие слова:' },
    { kind: 'verse', text: 'О Арджуна, откуда нашло на тебя в этот решительный час это уныние, это малодушие? Это не подобает тебе. Не поддавайся бессилию, о Арджуна. Это не пристало тебе. Стряхни сердечную слабость и воспрянь.' },
    { kind: 'p', text: 'Арджуна сказал: О сокрушитель Мадху, как я могу в бою пронзить стрелами Бхишму и Дрону, достойных почитания? Лучше питаться подаянием в этом мире, не убивая благородных учителей. Убив учителей, преследующих корыстные цели, я буду есть пищу, обагрённую кровью.' },
    { kind: 'p', text: 'Кришна сказал: Ты скорбишь о тех, о ком не стоит скорбеть, и при этом говоришь слова мудрости. Мудрые не скорбят ни о живых, ни о мёртвых.' },
    { kind: 'verse', text: 'Дух никогда не рождался; дух никогда не перестанет быть. Никогда не было времени, когда его не существовало; Конец и Начало — это грёзы.' },
    { kind: 'verse', text: 'Нерождённое, нетленное, неизменное — Духу пребывать вечно; Смерть не коснулась его никак, хотя жилище его кажется мёртвым.' },
    { kind: 'p', text: 'Для души не существует ни рождения, ни смерти в какое-либо время. Она не возникла, не возникает и не возникнет. Она нерождённа, вечна, всегда существующа и изначальна. Она не гибнет, когда гибнет тело.' },
    { kind: 'verse', text: 'Пусть правое деяние будет твоим побуждением, а не плод, из него исходящий. И живи в действии, трудись! Сделай свои поступки своим благочестием, отбросив всякое «я».' },
    { kind: 'p', text: 'Твоё право только на действие, но никогда — на его плоды. Пусть плоды действия не будут твоим побуждением; пусть также не будет в тебе склонности к бездействию. Стой твёрдо в йоге, о Дхананджая, совершай действия, отказавшись от привязанности, оставаясь равным в успехе и неудаче. Это равновесие называется йогой.' },
    { kind: 'p', text: 'Саньяя сказал: Произнеся так на поле битвы, Кришна умолк. И Арджуна, чья скорбь уступила место пониманию, поднял свой лук.' },
  ],
  transAttribution: '— Пер. Э. Бесант и Бхагаван Дас (1905) и Э. Арнолд (1885), сводный · Общественное достояние · Бхишма-парва, Глава 2, избранные стихи',
  scholMs:
    'Вторая глава Бхагавад-гиты (Санкхья-йога) — самая длинная и философски насыщенная в тексте КИ, насчитывает 72 стиха. Она интегрирует три самостоятельные философские традиции: метафизику санкхья (бессмертие самости, ст. 16–30), этику йоги (действие без привязанности, ст. 40–53) и раннюю формулировку того, что впоследствии станет ведантой (нерождённый, неизменный Атман). Средневековые комментаторы существенно расходились в том, какая из традиций является основной. Шанкара делал акцент на джняне (знании); Рамануджа — на бхакти (преданности); Мадхва — на теизме.',
  scholHist:
    'Знаменитый стих BG 2.47 — «karmaṇy evādhikāras te mā phaleṣu kadācana» — засвидетельствован во всех рукописных традициях без значительных вариантов. Это один из наиболее устойчивых стихов во всём тексте КИ. Напротив, пассаж о стхитапраджне (ст. 2.54–72) является текстуально спорным: ряд северных рукописей содержит варианты порядка стихов, влияющие на философский аргумент о соотношении знания и непривязанности.',
  scholDebateHead: 'НАУЧНАЯ ДИСКУССИЯ: САНКХЬЯ И ЙОГА В ГЛАВЕ 2',
  scholDebateP:
    'Интеграция метафизики санкхья и этики йоги в главе 2 породила дискуссию о философской согласованности Гиты. Ф. Эджертон (1944) утверждал, что эти два подхода несовместимы: если самость не затрагивается действием, предписание действовать без привязанности излишне. Ван Бёйтенен (1981) доказывал, что они действуют на разных уровнях — онтологическом и этическом — и скорее дополняют друг друга, чем противоречат. Дискуссия остаётся живой и определяет то, как Гита используется в современном индуистском философском дискурсе.',
  scholCite1_html: 'Ф. Эджертон (пер.), <em>The Bhagavad Gita</em>, 2 т. (Harvard Oriental Series, 1944).',
  scholCite2_html: 'У.Д.П. Хилл (пер.), <em>The Bhagavad-Gita</em> (Oxford University Press, 1928).',
  scholCite3_html: 'Венди Донигер О\'Флаэрти, <em>Karma and Rebirth in Classical Indian Traditions</em> (University of California Press, 1980).',
};

export function arjunasGriefReaderExtras(locale: Locale): ArjunasGriefReaderExtras {
  return locale === 'ru' ? arjunasGriefRu : arjunasGriefEn;
}

export function krishnaCounselReaderExtras(locale: Locale): KrishnaCounselReaderExtras {
  return locale === 'ru' ? krishnaCounselRu : krishnaCounselEn;
}
