//ITPM Assignment 01 - Positive and negative functional test cases

import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Pos_Fun_0001",
    input: "mama heta kadeeta yanavaa.",
    expectedOutput: "මම හෙට කඩේට යනවා.",
  },
  {
    id: "Pos_Fun_0002",
    input: "mama adha kalin gedhara yanavaa mokadha heta nuvara eLi yana nisaa.",
    expectedOutput: "මම අද කලින් ගෙදර යනවා මොකද  හෙට නුවර එළි යන නිසා.",
  },
  {
    id: "Pos_Fun_0003",
    input: "karuNaakaralaa mata podi udhavvak karanna puluvandha.",
    expectedOutput: "කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_0004",
    input: "Documents tika attach karalaa mata email ekak evanna.",
    expectedOutput: "Documents ටික attach කරලා මට email එකක් එවන්න.",
  },
  {
    id: "Pos_Fun_0005",
    input: "amma adha kadeeta gihin redhi genalla thibbaa.",
    expectedOutput: "අම්ම අද කඩේට ගිහින් රෙදි ගෙනල්ල තිබ්බා.",
  },
 {
    id: "Pos_Fun_0006",
    input: "ado machan adha traffic nisaa office enna parakku vunaa.",
    expectedOutput: "ado මචන් අද traffic නිසා office එන්න පරක්කු වුණා.",
  }, 
 {
    id: "Pos_Fun_0007",
    input: "mama phone eka silent dhaalaa thibba nisaa call eka answer karanna baeri vuNaa.",
    expectedOutput: "මම phone එක silent දාලා තිබ්බ නිසා call එක answer කරන්න බැරි වුණා.",
  }, 
 {
    id: "Pos_Fun_0008",
    input: "exam eka godak amaaruyi mata shuvar naee mama pass veyidha kiyalaa.",
    expectedOutput: "exam එක ගොඩක් අමාරුයි මට ශුවර් නෑ මම pass වෙයිද කියලා.",
  }, 
 {
    id: "Pos_Fun_0009",
    input: "mee sathiye oya gedhara nam film ekak balanna yanna thibbaa.",
    expectedOutput: " මේ සතියේ ඔයා ගෙදර නම් film එකක් බලන්න යන්න තිබ්බා.",
  }, 
 {
    id: "Pos_Fun_0010",
    input: "ayiyo group project eka harima amaaruyi api hambelaa ee gaena kathaa karagammu.",
    expectedOutput: "අයියො group project එක හරිම අමාරුයි අපි හම්බෙලා ඒ ගැන කතා කරගම්මු.",
  }, 
 {
    id: "Pos_Fun_0011",
    input: "mama heta seminar ekata yanavaa mokadha heta igena ganna thiyena topic eka godak vaedhagath.",
    expectedOutput: "මම හෙට seminar එකට යනවා මොකද හෙට ඉගෙන ගන්න තියෙන topic එක ගොඩක් වැදගත්.",
  }, 
 {
    id: "Pos_Fun_0012",
    input: "oyaata lecture note WhatsApp ekata dhaanna puluvandha? mokadha mata adha class eka miss vuNaa..",
    expectedOutput: "ඔයාට lecture note WhatsApp එකට දාන්න පුළුවන්ද? මොකද මට අද class එක miss වුණා?",
  }, 
 {
    id: "Pos_Fun_0013",
    input: "ayiyaa mee sathiye plan karala thiyenvaa sathi anthaye gamanak yanna.",
    expectedOutput: "අයියා මේ සතියෙ plan කරල තියෙන්වා සති අන්තයෙ ගමනක් යන්න.",
  }, 
 {
    id: "Pos_Fun_0014",
    input: "ammaa adha roohalata giyaa naendhaa th ekka.",
    expectedOutput: "අම්මා අද රෝහලට ගියා නැන්දා ත් එක්ක.",
  }, 
 {
    id: "Pos_Fun_0015",
    input: "oyaa heta edhdhi mathak karala potha genna mata note liyanna thiyenavaa.",
    expectedOutput: "ඔයා හෙට එද්දි මතක් කරල පොත ගෙන්න මට note ලියන්න තියෙනවා.",
  }, 
 {
    id: "Pos_Fun_0016",
    input: "akkaa ayiyaa ekka sindhu ahana gaman innavaa kaamaree.",
    expectedOutput: "අක්කා අයියා එක්ක සින්දු අහන ගමන් ඉන්නවා කාමරේ.",
  }, 
 {
    id: "Pos_Fun_0017",
    input: "hirun kella ekka adha aevidhinna giyaa.",
    expectedOutput: "හිරුන් කෙල්ල එක්ක අද ඇවිදින්න ගියා.",
  }, 
 {
    id: "Pos_Fun_0018",
    input: "ooka ikmanata ivara karanna mata gamanak yanna parakku venavaa.",
    expectedOutput: "ඕක ඉක්මනට ඉවර කරන්න මට ගමනක් යන්න පරක්කු වෙනවා.",
  }, 
 {
    id: "Pos_Fun_0019",
    input: "thaththaa adha udheema poLata giya me sathiyatama oona elavalu palathuru geenna.",
    expectedOutput: " තාත්තා අද උදේම පොළට ගියා මේ සතියටම ඕන එළවලු පළතුරු ගෙනන්න.",
  }, 
 {
    id: "Pos_Fun_0020",
    input: "amma havasa thee hadhalaa thibunaa  kaevum ekka bonna.",
    expectedOutput: "අම්මා හවස තේ හදලා තිබුණා කෑවුම් එක්ක බොන්න.",
  }, 
 {
    id: "Pos_Fun_0021",
    input: "malli yaaluvo ekka sellam karanna gihin parakku nisaa amma call karalaa kalin gedhara enna kivvaa.",
    expectedOutput: "මල්ලි යාළුවෝ එක්ක සෙල්ලම් කරන්න ගිහින් පරක්කු නිසා අම්මා කෝල් කරලා කලින් ගෙදර එන්න කිව්වා.",
  }, 
 {
    id: "Pos_Fun_0022",
    input: "thaaththaa adha vaahanaya hoodhalaa thibbaa.",
    expectedOutput: "තාත්තා අද වාහනය හෝදලා තිබ්බා.",
  }, 
 {
    id: "Pos_Fun_0023",
    input: "akka magee gedhara vaeda karanna udhav kaLaa.",
    expectedOutput: "අක්කා මගේ ගෙදර වැඩ කරන්න උදව් කළා.",
  }, 
 {
    id: "Pos_Fun_0024",
    input: "thaaththaa adha bicycle eka hadhalaa thibunaa eya mata  kivva parissemen padhinna kiyalaa.",
    expectedOutput: "තාත්තා අද bicycle එක හදලා තිබුනා එය මට  කිව්ව පරිස්සෙමෙන් පදින්න කියලා.",
  }, 
 {
    id: "Neg_Fun_0001",
    input: "mama dhaen boodimata mata heta presentaion ekak thiyena nisaa.",
    expectedOutput: "මම දැන් බෝඩිමට යනවා මට හෙට presentation එකක් තියෙන නිසා.",
  }, 
 {
    id: "Neg_Fun_0002",
    input: "api gedara pirisidhu kala labana sathiye party ekak tiyena nisa.",
    expectedOutput: "අපි ගෙදර පිරිසිදු කලා ලබන සතියෙ party එකක් තියෙන නිසා.",
  }, 
 {
    id: "Neg_Fun_0003",
    input: "oy@ta pu#uw@nda m@ge pho!to ek@k g@hala de!!nna???.",
    expectedOutput: " ඔයාට පුලුවන්ද? mage photo එකක් ගහලා දෙන්න.",
  }, 
 {
    id: "Neg_Fun_0004",
    input: "ayya ada udema office giya meeting eakak tiyena nisa.",
    expectedOutput: "අයියා අද උදේම office ගියා meeting එකක් තියෙන නිසා.",
  }, 
 {
    id: "Neg_Fun_0005",
    input: "Kamal aluthen 📱❤️ ekak aran.",
    expectedOutput: "කමල් අලුතෙන් phone එකක් අරන්.",
  }, 
 {
    id: "Neg_Fun_0006",
    input: "oyata puluwanda mata project ekata help ekak denna mokada mata asaneepa nisa welawata karaganna bari wei.",
    expectedOutput: "ඔයාට පුලුවන්ද? මට project එකට help එකක් දෙන්න මොකද මට අසනීප නිසා වෙලාවට  කරගන්න බැරි වෙයි.",
  }, 
 {
    id: "Neg_Fun_0007",
    input: "oyta puluwan unoth ada ara wade karanawadha.",
    expectedOutput: "ඔයාට පුලුවන් උනොත් අද අර වැඩෙ කරනවද?.",
  }, 
 {
    id: "Neg_Fun_0008",
    input: "mama oy 😎 yaluwo ekka game karannam hariyata bari.",
    expectedOutput: "මට ඊයෙ යාලුවො එක්ක  හරියට game ගහන්න  බැරි වුනා.",
  }, 
 {
    id: "Neg_Fun_0009",
    input: "oya adha giya nisa driv  karanna apahu bari wei.",
    expectedOutput: "ඔයා අද ගිය නිසා drive කරන්න ආපහු බැරි වුනා.",
  }, 
 {
    id: "Neg_Fun_0010",
    input: "mama oyatah oyge pule hamomtamath suba aluth auruddak w&&wa kiyala parathna karaNawa .",
    expectedOutput: "මම ඔයාටත් ඔයාගෙ පවුලෙ හැමොටමත් සුභ අලුත් අවුරුද්දක් වෙවා කියල ප්‍රාර්තනා කරනවා!",
  }, 
 {
    id: "Neg_Fun_0011",
    input: " kamala mahattya%% ada udema gdr gihin tibuna.",
    expectedOutput: " කමල් මහත්තයා අද උදේම ගෙදර ගිහින් තිබුනා.",
  },
];

for (const tc of testCases) {
  test(tc.id, async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    const inputBox = page.locator(
      'textarea[placeholder="Input Your Singlish Text Here."]',
    );
    const outputBox = page
      .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
      .first();
    await inputBox.fill(tc.input);
    //In here check expected output exactly matches the output
    await expect(outputBox).toContainText(tc.expectedOutput, {
      timeout: 15000,
    });
  });
}
