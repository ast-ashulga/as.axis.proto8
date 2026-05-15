/**
 * Episode-specific Gilgamesh reader prose not folded into Translations (en.ts / ru.ts)
 * to keep locale parity localized next to each episode bundle.
 */
import type { Locale } from '../types';

export type FloodTransSeg =
  | { kind: 'p'; text: string }
  | { kind: 'verse'; text: string }
  | { kind: 'lacuna'; text: string; aria: string };

export interface FloodReaderExtras {
  narrP1: string;
  narrP2: string;
  narrQuoteFenceHtml: string;
  narrQuoteFenceCite: string;
  narrP3: string;
  narrQuoteSecretHtml: string;
  narrQuoteSecretCite: string;
  transSegments: FloodTransSeg[];
  transAttribution: string;
  origHeadMain: string;
  origAttrGeorge: string;
  origAttrNineveh: string;
  origDemoNote: string;
  scholMs: string;
  scholHist: string;
  scholDebateHead: string;
  scholDebateP: string;
  scholVariantLine14: string;
  scholVariantLines4555: string;
  scholCite1_html: string;
  scholCite2_html: string;
  scholCite3_html: string;
  proppFwTitle: string;
  proppFwBody: string;
  propp8Name: string;
  propp8PanelHead: string;
  propp8PanelP: string;
  propp15Name: string;
  propp15PanelHead: string;
  propp15PanelP: string;
  propp19Name: string;
  propp19PanelHead: string;
  propp19PanelP: string;
  propp31Name: string;
  propp31PanelHead: string;
  propp31PanelP: string;
  campFwTitle: string;
  campFwBody: string;
  campCrossName: string;
  campCrossPanelHead: string;
  campCrossPanelP: string;
  campRoadName: string;
  campRoadPanelHead: string;
  campRoadPanelP: string;
  tmiFwTitle: string;
  tmiFwBody: string;
  tmiA1010Name: string;
  tmiA1010PanelHead: string;
  tmiA1010PanelP: string;
  tmiA1021Name: string;
  tmiA1021PanelHead: string;
  tmiA1021PanelP: string;
}

const floodEn: FloodReaderExtras = {
  narrP1:
    'The flood episode in Tablet XI is not what it appears to be at first reading. On the surface, Utnapishtim is answering Gilgamesh\'s question about immortality. But the narrative logic runs the other way: the flood story is the reason Utnapishtim cannot give Gilgamesh what he came for. The gods granted immortality once, to one man, in unusual circumstances, and they will not do it again. The flood is therefore a theological argument inside a narrative: Utnapishtim\'s survival was not a reward for righteousness — the text makes no such claim — but an act of divine improvisation by Ea, who was bound by an oath not to warn any human directly and found a technically permissible way around it.',
  narrP2:
    'The episode opens with a city Gilgamesh already knows: Shuruppak, on the Euphrates. The great gods convened — Anu, Enlil, Ninurta, Ennugi, and Ea — and in their hearts moved to bring the flood. Ea alone could not subscribe. Unable to break his oath by warning Utnapishtim directly, he addressed the reed fence of his house:',
  narrQuoteFenceHtml:
    '"O reed fence, reed fence! O wall, wall!<br>Hear, O reed fence; understand, O wall!<br>O man of Shurippak, son of Ubara-tutu,<br>tear down thy house, build a ship;<br>abandon thy possessions, seek thou life;<br>thy goods despise, save thy life;<br>bring up the seed of all living things into the ship."',
  narrQuoteFenceCite: '— Thompson (1930), Tablet XI, lines 22–29',
  narrP3:
    'Utnapishtim obeys, builds, and loads. The flood arrives for seven days — a darkness so total the poem says even the gods cowered. When the waters recede, he releases three birds: dove (returns), swallow (returns), raven (does not return). He makes sacrifice; the gods crowd the smoke "like flies," starved from the days without offerings. Enlil is furious to find a survivor. Ea rebukes him: was it just to punish all for the fault of some? In the end Enlil grants immortality to Utnapishtim and his wife — not as policy but as conclusion. Andrew George (2003) argues this episode was shaped specifically for the Standard Babylonian Version: the immortality of Utnapishtim was made theologically singular precisely so that Gilgamesh, standing here, can receive no share of it.',
  narrQuoteSecretHtml:
    '"Utnapishtim said unto him, unto Gilgamish:<br>\'I will reveal unto thee, O Gilgamish, a secret story,<br>and the decision of the gods I will tell thee.\'"',
  narrQuoteSecretCite: '— Thompson (1930), Tablet XI, lines 1–3',
  transSegments: [
    { kind: 'p', text: 'Utnapishtim said unto him, unto Gilgamish:' },
    { kind: 'verse', text: '"I will reveal unto thee, O Gilgamish, a secret story,' },
    { kind: 'verse', text: ' and the decision of the gods I will tell thee.' },
    { kind: 'verse', text: ' Shurippak — a city which thou knowest,' },
    { kind: 'verse', text: ' which lieth upon the banks of the Euphrates —' },
    { kind: 'verse', text: ' that city was old, and the gods dwelling therein —' },
    { kind: 'verse', text: ' their hearts moved the great gods to make a flood."' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(lacuna: approximately 5 lines damaged or missing)',
      aria: 'Lacuna: approximately 5 lines damaged or missing',
    },
    { kind: 'verse', text: '"Ea — wisest of the gods, cunning, knowing all things —' },
    { kind: 'verse', text: ' could not break the oath of the gods.' },
    { kind: 'verse', text: ' But he whispered their word to the reed fence:' },
    { kind: 'verse', text: ' \'O reed fence, reed fence! O wall, wall!' },
    { kind: 'verse', text: '  Hear, O reed fence; understand, O wall!' },
    { kind: 'verse', text: '  O man of Shurippak, son of Ubara-tutu,' },
    { kind: 'verse', text: '  tear down thy house, build a ship;' },
    { kind: 'verse', text: '  abandon thy possessions, seek thou life;' },
    { kind: 'verse', text: '  thy goods despise, save thy life;' },
    { kind: 'verse', text: '  bring up the seed of all living things into the ship.\'"' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(lacuna: extent uncertain; approximately 8–12 lines)',
      aria: 'Lacuna: extent uncertain, approximately 8–12 lines',
    },
    { kind: 'verse', text: '"I understood; I spake to my lord Ea:' },
    { kind: 'verse', text: ' \'Behold, my lord, what thou thus commandest' },
    { kind: 'verse', text: '  I will honour and will carry out.\'"' },
  ],
  transAttribution: '— Thompson (1930), Tablet XI, lines 1–47 (selected)',
  origHeadMain: 'Standard Babylonian recension, Tablet XI (selected lines)',
  origAttrGeorge:
    'Transliteration after George (2003) · The Babylonian Gilgamesh Epic, vol. I–II · Oxford University Press',
  origAttrNineveh:
    'Nineveh copy (K.3375+), library of Ashurbanipal, 7th century BCE · CDLI P003793',
  origDemoNote:
    '[demo-line-ref: line numbers approximate; gaps in surviving tablets marked by convention]',
  scholMs:
    'Tablet XI survives in multiple copies. The best-preserved is the Nineveh copy from the library of Ashurbanipal (7th century BCE; CDLI P003793). The flood episode (lines 1–196) is the most complete section of the entire Standard Babylonian Version. Approximately 15–20 lines are damaged or missing across all known copies.',
  scholHist:
    'The flood narrative in Tablet XI is closely paralleled by the older Sumerian Flood Story (known from the Nippur tablet, c. 1600 BCE) and by the Atrahasis Epic (also c. 1700–1600 BCE). The scholarly consensus holds that the Gilgamesh flood episode was interpolated from the Atrahasis tradition into the Gilgamesh cycle sometime in the Old Babylonian period.',
  scholDebateHead: 'SCHOLARLY DEBATE: INTERPOLATION QUESTION',
  scholDebateP:
    'Whether the flood narrative is a late addition or an integral part of the Gilgamesh cycle is actively contested. George (2003) argues the Tablet XI version was composed specifically for the Standard Babylonian Version, with unique modifications not present in Atrahasis. Tigay (1982) argues that interpolation is the more parsimonious explanation. The debate hinges on whether the theological differences between the two accounts indicate separate authorial intent.',
  scholVariantLine14:
    'Line 14: Nineveh copy reads "cedar ship"; Sippar fragment reads "great ship." George (2003) prefers Nineveh; Thompson (1930) follows Sippar.',
  scholVariantLines4555:
    'Lines 45–55: The Sippar fragment (BM 78941) contains a variant account of the reed-wall warning that differs from the Nineveh copy in approximately 6 words. The divergence does not affect the narrative substance.',
  scholCite1_html:
    'Andrew George, <em>The Babylonian Gilgamesh Epic</em> (OUP, 2003), vol. I, pp. 490–537.',
  scholCite2_html:
    'Jeffrey Tigay, <em>The Evolution of the Gilgamesh Epic</em> (1982), pp. 214–240.',
  scholCite3_html:
    'R. Campbell Thompson, <em>The Epic of Gilgamish</em> (1930), pp. 59–85.',
  proppFwTitle: 'Propp\'s Morphology of the Folktale (1928)',
  proppFwBody:
    'Vladimir Propp identified 31 narrative "functions" — actions that advance the story — recurring in Russian folktales in a consistent sequence. Later scholars applied the framework to myth and epic traditions worldwide.',
  propp8Name: 'Villainy / Lack',
  propp8PanelHead: 'PROPP-8 · Villainy / Lack',
  propp8PanelP:
    'The hero\'s lack of something necessary drives the narrative. Here: Gilgamesh lacks immortality and cannot accept mortality after Enkidu\'s death.',
  propp15Name: 'Spatial translocation',
  propp15PanelHead: 'PROPP-15 · Spatial Translocation',
  propp15PanelP:
    'The hero moves to a different location to find or retrieve something. Here: Gilgamesh crossing the Waters of Death to reach Utnapishtim at the ends of the earth.',
  propp19Name: 'Return',
  propp19PanelHead: 'PROPP-19 · Return',
  propp19PanelP:
    'The hero returns to their starting point. Gilgamesh returns to Uruk, empty-handed and changed. The walls he built at the beginning are what he has to show.',
  propp31Name: 'Recognition',
  propp31PanelHead: 'PROPP-31 · Recognition',
  propp31PanelP:
    'The hero is recognised. Gilgamesh recognises the walls of Uruk as his enduring achievement — the acceptance of mortality through the permanence of what he built.',
  campFwTitle: 'Campbell\'s Hero with a Thousand Faces (1949)',
  campFwBody:
    'Joseph Campbell identified a common narrative structure — the monomyth or "hero\'s journey" — across world mythologies: departure, initiation, and return.',
  campCrossName: 'Crossing the First Threshold',
  campCrossPanelHead: 'Campbell · Crossing the First Threshold',
  campCrossPanelP:
    'The hero crosses from the known world into the unknown. Gilgamesh crosses the Waters of Death — the threshold separating the mortal world from Utnapishtim\'s realm beyond time.',
  campRoadName: 'The Road Back',
  campRoadPanelHead: 'Campbell · The Road Back',
  campRoadPanelP:
    'The hero begins the journey back to the ordinary world. Gilgamesh\'s return to Uruk — without the plant of immortality, without eternal life — completes the arc.',
  tmiFwTitle: 'Thompson Motif Index (1955–1958)',
  tmiFwBody:
    'Stith Thompson\'s six-volume index classifies recurring narrative motifs across world folklore and mythology. The A1000s cover cosmogony and world history; A1010 is specifically the Deluge category.',
  tmiA1010Name: 'Deluge',
  tmiA1010PanelHead: 'TMI A1010 · Deluge',
  tmiA1010PanelP:
    'Cataclysmic flood sent by divine agency as punishment or reset. Thompson (1955) cites the Gilgamesh flood in the foundational entry.',
  tmiA1021Name: 'Deluge: escape in boat',
  tmiA1021PanelHead: 'TMI A1021 · Deluge: escape in boat',
  tmiA1021PanelP:
    'Flood survivor escapes by means of a vessel. The Gilgamesh version is among the earliest recorded instances of this motif.',
};

const floodRu: FloodReaderExtras = {
  narrP1:
    'Эпизод потопа на табличке XI при втором прочтении оказывается не тем, чем кажется на первый взгляд. На поверхности Утнапиштим отвечает Гильгамешу о бессмертии. Но повествовательная логика обратна: рассказ о потопе объясняет, почему Утнапиштим не может дать Гильгамешу то, за чем тот пришёл. Боги даровали бессмертие однажды — одному человеку, в необычных обстоятельствах — и не повторят этого. Потоп здесь — богословский аргумент внутри повествования: спасение Утнапиштима не награда за праведность — текста об этом нет, — а акт божественной импровизации Эа, связанного клятвой не предупреждать людей напрямую и нашедшего технически допустимый обход.',
  narrP2:
    'Эпизод начинается с города, который Гильгамеш уже знает: Шуруппак на Евфрате. Великие боги собрались — Ану, Энлиль, Нинурта, Эннуги и Эа — и в сердце решили наслать потоп. Лишь Эа не мог с этим согласиться. Не в силах нарушить клятву и предупредить Утнапиштима прямо, он обратился к тростниковому забору своего дома:',
  narrQuoteFenceHtml:
    '«О тростниковый частокол, частокол! О стена, стена!<br>Услышь, частокол; уразумей, стена!<br>Человек Шуруппака, сын Убара-Туту,<br>разрушь дом свой, построй корабль;<br>оставь имения, спасай жизнь;<br>имением презри, жизнь сохрани;<br>подними в корабль семя всего живущего.»',
  narrQuoteFenceCite: '— Thompson (1930), табличка XI, ст. 22–29',
  narrP3:
    'Утнапиштим повинуется, строит и грузит корабль. Потоп длится семь дней — столько мглы, что поэма говорит: дрожали даже боги. Когда воды спадают, он выпускает трёх птиц: голубь (возвращается), ласточка (возвращается), ворон (не возвращается). Он приносит жертву; боги стекаются к дыму «как мухи», изголодавшиеся за дни без даров. Энлиль в ярости находит уцелевшего. Эа укоряет его: справедливо ли карать всех за вину немногих? В конце Энлиль дарует Утнапиштиму и его жене бессмертие — не как политику, а как завершение спора. Эндрю Джордж (2003) считает, что этот эпизод создавали именно для Стандартной вавилонской версии: бессмертие Утнапиштима сделано богословски единичным, чтобы Гильгамеш здесь не мог получить долю в нём.',
  narrQuoteSecretHtml:
    '«Утнапиштим сказал ему, Гильгамешу:<br>„Открою тебе, Гильгамеш, тайный рассказ,<br>решение богов поведаю тебе“.»',
  narrQuoteSecretCite: '— Thompson (1930), табличка XI, ст. 1–3',
  transSegments: [
    { kind: 'p', text: 'Утнапиштим сказал ему, Гильгамешу:' },
    { kind: 'verse', text: '«Открою тебе, Гильгамеш, тайный рассказ,' },
    { kind: 'verse', text: ' решение богов поведаю тебе.' },
    { kind: 'verse', text: ' Шуруппак — город, который ты знаешь,' },
    { kind: 'verse', text: ' что лежит у берегов Евфрата —' },
    { kind: 'verse', text: ' город тот был стар, и боги в нём обитали —' },
    { kind: 'verse', text: ' в сердце их великие боги решили наслать потоп».»' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(лакуна: примерно 5 строк утрачены или повреждены)',
      aria: 'Лакуна: примерно 5 строк утрачены или повреждены',
    },
    { kind: 'verse', text: '«Эа — мудрейший из богов, хитрый, всеведущий —' },
    { kind: 'verse', text: ' не мог нарушить клятвы богов.' },
    { kind: 'verse', text: ' Но прошептал их слово тростниковому забору:' },
    { kind: 'verse', text: ' «О тростниковый частокол, частокол! О стена, стена!' },
    { kind: 'verse', text: '  Услышь, частокол; уразумей, стена!' },
    { kind: 'verse', text: '  Человек Шуруппака, сын Убара-Туту,' },
    { kind: 'verse', text: '  разрушь дом свой, построй корабль;' },
    { kind: 'verse', text: '  оставь имения, спасай жизнь;' },
    { kind: 'verse', text: '  имением презри, жизнь сохрани;' },
    { kind: 'verse', text: '  подними в корабль семя всего живущего».»' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(лакуна: протяжённость неясна; примерно 8–12 строк)',
      aria: 'Лакуна: протяжённость неясна, примерно 8–12 строк',
    },
    { kind: 'verse', text: '«Я понял; сказал господину своему Эа:' },
    { kind: 'verse', text: ' «Вот, господин, что ты повелеваешь,' },
    { kind: 'verse', text: '  исполню и сделаю».»' },
  ],
  transAttribution: '— Thompson (1930), табличка XI, ст. 1–47 (фрагмент)',
  origHeadMain: 'Стандартная вавилонская редакция, табличка XI (избранные строки)',
  origAttrGeorge:
    'Транслитерация по Джорджу (2003) · The Babylonian Gilgamesh Epic, т. I–II · Oxford University Press',
  origAttrNineveh:
    'Ниневийская копия (K.3375+), библиотека Ашшурбанипала, VII в. до н.э. · CDLI P003793',
  origDemoNote:
    '[демо-ссылка на строки: номера приблизительны; пробелы в сохранившихся табличках обозначены по условности]',
  scholMs:
    'Табличка XI сохранилась в нескольких копиях. Лучше всего — ниневийская из библиотеки Ашшурбанипала (VII в. до н.э.; CDLI P003793). Эпизод потопа (ст. 1–196) — самый полный участок всей Стандартной вавилонской версии. Примерно 15–20 строк повреждены или утрачены во всех известных свидетельствах.',
  scholHist:
    'Рассказ о потопе на XI табличке тесно параллелен более раннему шумерскому «Рассказу о потопе» (ниппурская табличка, ок. 1600 до н.э.) и эпосу «Атрахасис» (ок. 1700–1600 до н.э.). Научный консенсус: эпизод потопа в «Гильгамеше» интерполирован из традиции Атрахасиса в цикл о Гильгамеше в старовавилонский период.',
  scholDebateHead: 'НАУЧНАЯ ДИСКУССИЯ: ВОПРОС ИНТЕРПОЛЯЦИИ',
  scholDebateP:
    'Спорят, позднее ли добавлен рассказ о потопе или он органичен циклу о Гильгамеше. Джордж (2003) считает версию на XI табличке созданной именно для Стандартной вавилонской версии, с особенностями, не совпадающими с Атрахасисом. Тигэй (1982) склонен к более экономному объяснению интерполяцией. Дискуссия упирается в то, указывают ли богословские различия двух текстов на разные авторские замыслы.',
  scholVariantLine14:
    'Строка 14: ниневийская копия — «корабль из кедра»; сиппарский фрагмент — «великий корабль». Джордж (2003) предпочитает Ниневию; Томпсон (1930) следует Сиппару.',
  scholVariantLines4555:
    'Строки 45–55: сиппарский фрагмент (BM 78941) даёт вариант предупреждения через стену из тростника, расходящийся с ниневийской копией примерно на 6 слов. На сюжетную суть расхождение не влияет.',
  scholCite1_html:
    'Эндрю Джордж, <em>The Babylonian Gilgamesh Epic</em> (OUP, 2003), т. I, с. 490–537.',
  scholCite2_html:
    'Джеффри Тигэй, <em>The Evolution of the Gilgamesh Epic</em> (1982), с. 214–240.',
  scholCite3_html:
    'Р. Кэмпбелл Томпсон, <em>The Epic of Gilgamish</em> (1930), с. 59–85.',
  proppFwTitle: '«Морфология волшебной сказки» В. Я. Проппа (1928)',
  proppFwBody:
    'Владимир Пропп выделил 31 «функцию» сказочного сюжета — действие, продвигающее повествование, — в устойчивой последовательности русской волшебной сказки. Позже схему применяли к мифу и эпосу по всему миру.',
  propp8Name: 'Злодейство / Недостача',
  propp8PanelHead: 'PROPP-8 · Злодейство / Недостача',
  propp8PanelP:
    'Недостаток героя движет сюжет. Здесь: Гильгамешу недостаёт бессмертия и он не может принять смертность после гибели Энкиду.',
  propp15Name: 'Пространственное перемещение',
  propp15PanelHead: 'PROPP-15 · Пространственное перемещение',
  propp15PanelP:
    'Герой переходит в иное место, чтобы найти или получить нечто. Здесь: Гильгамеш пересекает Воды Смерти к Утнапиштиму на краю земли.',
  propp19Name: 'Возвращение',
  propp19PanelHead: 'PROPP-19 · Возвращение',
  propp19PanelP:
    'Герой возвращается к исходной точке. Гильгамеш возвращается в Урук — с пустыми руками, но изменившимся. Стены, которые он построил в начале, — то, что у него остаётся.',
  propp31Name: 'Узнавание',
  propp31PanelHead: 'PROPP-31 · Узнавание',
  propp31PanelP:
    'Героя узнают — или он узнаёт сам себя. Гильгамеш узнаёт в стенах Урука своё устойчивое дело — принятие смертности через то, что создано на века.',
  campFwTitle: 'Джозеф Кэмпбелл — «Герой с тысячью лиц» (1949)',
  campFwBody:
    'Кэмпбелл описал общую структуру мономифа — «пути героя» — в мифологиях мира: уход, испытание, возвращение.',
  campCrossName: 'Пересечение первого рубежа',
  campCrossPanelHead: 'Кэмпбелл · Пересечение первого рубежа',
  campCrossPanelP:
    'Герой выходит из известного мира в неизвестный. Гильгамеш пересекает Воды Смерти — рубеж между миром смертных и царством Утнапиштима вне времени.',
  campRoadName: 'Дорога назад',
  campRoadPanelHead: 'Кэмпбелл · Дорога назад',
  campRoadPanelP:
    'Герой начинает возвращение в обычный мир. Возвращение Гильгамеша в Урук — без растения бессмертия, без вечной жизни — замыкает дугу.',
  tmiFwTitle: 'Указатель мотивов Томпсона (1955–1958)',
  tmiFwBody:
    'Стайт Томпсон в шеститомнике классифицирует повторяющиеся мотивы фольклора и мифа. Раздел A1000 — космогония и всемирная история; A1010 — собственно категория потопа.',
  tmiA1010Name: 'Потоп',
  tmiA1010PanelHead: 'TMI A1010 · Потоп',
  tmiA1010PanelP:
    'Всемирный потоп по воле богов как кара или перезапуск. Томпсон (1955) ссылается на потоп в «Гильгамеше» в базовой статье указателя.',
  tmiA1021Name: 'Потоп: спасение в ладье',
  tmiA1021PanelHead: 'TMI A1021 · Потоп: спасение в ладье',
  tmiA1021PanelP:
    'Уцелевший спасается на судне. Версия «Гильгамеша» — среди ранних зафиксированных случаев этого мотива.',
};

export function floodReaderExtras(locale: Locale): FloodReaderExtras {
  return locale === 'ru' ? floodRu : floodEn;
}

export interface GriefReaderExtras {
  transSegments: FloodTransSeg[];
  transAttribution: string;
  scholMs: string;
  scholHist: string;
  scholDebateHead: string;
  scholDebateP: string;
  scholCite1_html: string;
  scholCite2_html: string;
  scholCite3_html: string;
  propp8Name: string;
  propp8PanelHead: string;
  propp8PanelP: string;
  propp15Name: string;
  propp15PanelHead: string;
  propp15PanelP: string;
}

const griefEn: GriefReaderExtras = {
  transSegments: [
    { kind: 'p', text: 'Gilgamesh bemoaned Enkidu, his friend, weeping bitterly over him:' },
    { kind: 'verse', text: '"Enkidu, my friend, whom I loved more than all labours that I did —' },
    { kind: 'verse', text: ' he who with me ranged the wilderness and slew the lion,' },
    { kind: 'verse', text: ' he who with me took Humbaba in the Cedar Forest —' },
    { kind: 'verse', text: ' what is the sleep that hath seized thee now?"' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(lacuna: approximately 30–40 lines damaged or missing)',
      aria: 'Lacuna: approximately 30–40 lines damaged or missing',
    },
    { kind: 'verse', text: '"Hear me, O Elders of Uruk, hear me O men!' },
    { kind: 'verse', text: ' I weep for Enkidu, my friend,' },
    { kind: 'verse', text: ' moaning bitterly like a wailing woman.' },
    { kind: 'verse', text: ' The axe at my side, my hand\'s trust,' },
    { kind: 'verse', text: ' the dirk in my belt, my shield\'s cover,' },
    { kind: 'verse', text: ' my festal robe, my richest ornament —' },
    { kind: 'verse', text: ' an evil wind hath robbed me of them."' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(lacuna: extent uncertain)',
      aria: 'Lacuna: extent uncertain',
    },
  ],
  transAttribution:
    '— Thompson (1930), Tablet VIII (selected, reconstructed from the Nineveh and Sippar fragments)',
  scholMs:
    'Tablet VIII survives only in fragmentary form. The principal witnesses are the Nineveh tablets from Ashurbanipal\'s library and several Sippar fragments. The lament of Gilgamesh for Enkidu is partially preserved; scholars estimate that approximately 60–70% of the tablet\'s lines are either damaged or missing. The sequence of events — Enkidu\'s death, Gilgamesh\'s refusal of burial, the seven-day vigil, the funeral preparations — is reconstructed from convergent fragments.',
  scholHist:
    'The lament genre in Tablet VIII follows established Mesopotamian conventions: the mourner addresses the dead by name, catalogues their shared deeds, and calls on the natural world to participate in grief. This is the same convention employed in the Sumerian lament texts for Ur and for individual kings. The specific content — Gilgamesh tearing his hair, putting on lion skins, refusing to bury Enkidu — is attested across multiple tablet witnesses despite the lacunae.',
  scholDebateHead: 'SCHOLARLY DEBATE: THE SEVEN-DAY VIGIL',
  scholDebateP:
    'The exact nature of Gilgamesh\'s seven-day refusal to bury Enkidu is debated. George (2003) interprets it as a literal seven-day vigil in which Gilgamesh refuses to accept Enkidu\'s death — waiting for him to wake. Tigay (1982) suggests the vigil reflects a conventional mourning period. The worm detail (a worm falling from Enkidu\'s nostril) is universally read as the moment Gilgamesh confronts the reality of death; its placement in the tablet is secure across all fragments.',
  scholCite1_html:
    'Andrew George, <em>The Babylonian Gilgamesh Epic</em> (OUP, 2003), vol. I, pp. 466–490.',
  scholCite2_html:
    'Jeffrey Tigay, <em>The Evolution of the Gilgamesh Epic</em> (1982), pp. 158–190.',
  scholCite3_html:
    'R. Campbell Thompson, <em>The Epic of Gilgamish</em> (1930), pp. 49–58.',
  propp8Name: 'Villainy / Lack',
  propp8PanelHead: 'PROPP-8 · Villainy / Lack',
  propp8PanelP:
    'The hero\'s lack driving the narrative: Gilgamesh lacks the ability to accept mortality after Enkidu\'s death. This lack is what launches the second half of the epic.',
  propp15Name: 'Spatial Translocation',
  propp15PanelHead: 'PROPP-15 · Spatial Translocation',
  propp15PanelP:
    'Gilgamesh departs from Uruk in grief, beginning the journey that will take him to the edge of the world. The departure is documented across all Tablet VIII witnesses.',
};

const griefRu: GriefReaderExtras = {
  transSegments: [
    { kind: 'p', text: 'Гильгамеш оплакивал Энкиду, друга своего, горько рыдая над ним:' },
    { kind: 'verse', text: '«Энкиду, друг мой, любимый мной превыше всех трудов моих —' },
    { kind: 'verse', text: ' который со мной ходил по степи и убивал льва,' },
    { kind: 'verse', text: ' который со мной брал Хумвабу в Кедровом лесу —' },
    { kind: 'verse', text: ' что это за сон, который теперь сковал тебя?»' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(лакуна: примерно 30–40 строк утрачены или повреждены)',
      aria: 'Лакуна: примерно 30–40 строк утрачены или повреждены',
    },
    { kind: 'verse', text: '«Услышьте меня, старейшины Урука, услышьте меня, люди!' },
    { kind: 'verse', text: ' Я плачу об Энкиду, друге моём,' },
    { kind: 'verse', text: ' стенаю горько, словно причитающая женщина.' },
    { kind: 'verse', text: ' Топор у бока моего, опора руки моей,' },
    { kind: 'verse', text: ' кинжал на поясе моём, покров щита моего,' },
    { kind: 'verse', text: ' праздничная одежда моя, украшенье лучшее моё —' },
    { kind: 'verse', text: ' злой ветер отнял их у меня».' },
    {
      kind: 'lacuna',
      text: '[···] &nbsp;(лакуна: протяжённость неясна)',
      aria: 'Лакуна: протяжённость неясна',
    },
  ],
  transAttribution:
    '— Thompson (1930), табличка VIII (избранное, реконструировано по ниневийским и сиппарским фрагментам)',
  scholMs:
    'Табличка VIII сохранилась лишь фрагментарно. Основные свидетельства — ниневийские таблички из библиотеки Ашшурбанипала и несколько сиппарских фрагментов. Плач Гильгамеша по Энкиду сохранён частично; учёные оценивают, что около 60–70 % строк таблички повреждены или утрачены. Последовательность событий — смерть Энкиду, отказ Гильгамеша от погребения, семидневное бдение, приготовления к похоронам — восстанавливается по сходящимся фрагментам.',
  scholHist:
    'Жанр плача на VIII табличке следует устоявшимся месопотамским правилам: скорбящий обращается к мёртвому по имени, перечисляет совместные деяния и зовёт природу разделить горе. Та же схема в шумерских плачах по Уру и отдельным царям. Конкретика — Гильгамеш рвёт волосы, облачается в львиные шкуры, не даёт хоронить Энкиду — подтверждается несколькими свидетельствами табличек несмотря на лакуны.',
  scholDebateHead: 'НАУЧНАЯ ДИСКУССИЯ: СЕМИДНЕВНОЕ БДЕНИЕ',
  scholDebateP:
    'Спорят о точном смысле семидневного отказа Гильгамеша хоронить Энкиду. Джордж (2003) трактует это как буквальное семидневное бдение: Гильгамеш не принимает смерти Энкиду и ждёт, что тот проснётся. Тигэй (1982) видит в этом обычный траурный срок. Деталь с червём (червь выпадает из ноздри Энкиду) повсеместно читается как момент, когда Гильгамеш сталкивается с реальностью смерти; её место в тексте таблички надёжно во всех фрагментах.',
  scholCite1_html:
    'Эндрю Джордж, <em>The Babylonian Gilgamesh Epic</em> (OUP, 2003), т. I, с. 466–490.',
  scholCite2_html:
    'Джеффри Тигэй, <em>The Evolution of the Gilgamesh Epic</em> (1982), с. 158–190.',
  scholCite3_html:
    'Р. Кэмпбелл Томпсон, <em>The Epic of Gilgamish</em> (1930), с. 49–58.',
  propp8Name: 'Злодейство / Недостача',
  propp8PanelHead: 'PROPP-8 · Злодейство / Недостача',
  propp8PanelP:
    'Недостаток героя движет сюжетом: Гильгамеш не в силах принять смертность после гибели Энкиду. Эта недостача запускает вторую половину эпоса.',
  propp15Name: 'Пространственное перемещение',
  propp15PanelHead: 'PROPP-15 · Пространственное перемещение',
  propp15PanelP:
    'Гильгамеш уходит из Урука в горе и начинает путь к краю света. Отход зафиксирован во всех свидетельствах VIII таблички.',
};

export function griefReaderExtras(locale: Locale): GriefReaderExtras {
  return locale === 'ru' ? griefRu : griefEn;
}
