import React from "react";
import Article from "../Components/Article/Article";
import ActionCards from "../Components/ActionCard/ActionCards";
import Img from "../assets/image.png";
import BImg from "../assets/banner.jpg";
// import { Link } from "react-router-dom/dist";

const DetailedNews = () => {
  const Array = [
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: Img,
    },
    {
      topic: "రాష్ట్రీయ",
      headline: "విజయనగరం బాలాజీ మార్కెట్‌ షాపుల్లో అగ్నిప్రమాదం",
      article: `ప్రజాశక్తి-విజయనగరం టౌన్‌ : విజయనగరం టౌన్‌లోని బాలాజీ మార్కెట్‌ షాపుల్లో శనివారం అగ్నిప్రమాదం జరిగింది. బాలాజీ 216 నెంబర్‌ షాపులో విద్యుత్‌ బోర్డు దగ్గర మంట రావడంతో షాపులో పని చేస్తున్నవారు భయంతో బయటకు పరుగులు తీశారు. ఈ మంటలు రాజుకొని మార్కెట్‌ 216, 217, 218 షాపులు దగ్ధమయ్యాయి. మేడపైన షాపులు కావడంతో కింది షాపులవారు కూడా భయంతో బయటకు పరుగులు తీశారు. అగ్నిమాపక సిబ్బందికి సమాచారం ఇవ్వడంతో అగ్నిమాపక సిబ్బంది వచ్చి మంటలను ఆర్పే ప్రయత్నం చేశారు. మధ్యాహ్నం ఒంటి గంట సమయంలో మంటలు పెరగడంతో అగ్నికీలలు ఎగిసిపడ్డాయి. పెద్ద ఎత్తున మంటలు పెరగడంతో వాటర్‌ కేన్‌లతో నీటిని కొట్టి మంటలు ఆర్పేందుకు అగ్ని మాపక సిబ్బంది ప్రయత్నం చేస్తున్నారు.`,
      timespan: "Jul 22,2023 13:37",
      img: Img,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: Img,
    },
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: Img,
    },
    {
      topic: "రాష్ట్రీయ",
      headline: "విజయనగరం బాలాజీ మార్కెట్‌ షాపుల్లో అగ్నిప్రమాదం",
      article: `ప్రజాశక్తి-విజయనగరం టౌన్‌ : విజయనగరం టౌన్‌లోని బాలాజీ మార్కెట్‌ షాపుల్లో శనివారం అగ్నిప్రమాదం జరిగింది. బాలాజీ 216 నెంబర్‌ షాపులో విద్యుత్‌ బోర్డు దగ్గర మంట రావడంతో షాపులో పని చేస్తున్నవారు భయంతో బయటకు పరుగులు తీశారు. ఈ మంటలు రాజుకొని మార్కెట్‌ 216, 217, 218 షాపులు దగ్ధమయ్యాయి. మేడపైన షాపులు కావడంతో కింది షాపులవారు కూడా భయంతో బయటకు పరుగులు తీశారు. అగ్నిమాపక సిబ్బందికి సమాచారం ఇవ్వడంతో అగ్నిమాపక సిబ్బంది వచ్చి మంటలను ఆర్పే ప్రయత్నం చేశారు. మధ్యాహ్నం ఒంటి గంట సమయంలో మంటలు పెరగడంతో అగ్నికీలలు ఎగిసిపడ్డాయి. పెద్ద ఎత్తున మంటలు పెరగడంతో వాటర్‌ కేన్‌లతో నీటిని కొట్టి మంటలు ఆర్పేందుకు అగ్ని మాపక సిబ్బంది ప్రయత్నం చేస్తున్నారు.`,
      timespan: "Jul 22,2023 13:37",
      img: Img,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: Img,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: Img,
    },
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: Img,
    },
  ];
  const data = [
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: BImg,
    },
    {
      topic: "రాష్ట్రీయ",
      headline: "విజయనగరం బాలాజీ మార్కెట్‌ షాపుల్లో అగ్నిప్రమాదం",
      article: `ప్రజాశక్తి-విజయనగరం టౌన్‌ : విజయనగరం టౌన్‌లోని బాలాజీ మార్కెట్‌ షాపుల్లో శనివారం అగ్నిప్రమాదం జరిగింది. బాలాజీ 216 నెంబర్‌ షాపులో విద్యుత్‌ బోర్డు దగ్గర మంట రావడంతో షాపులో పని చేస్తున్నవారు భయంతో బయటకు పరుగులు తీశారు. ఈ మంటలు రాజుకొని మార్కెట్‌ 216, 217, 218 షాపులు దగ్ధమయ్యాయి. మేడపైన షాపులు కావడంతో కింది షాపులవారు కూడా భయంతో బయటకు పరుగులు తీశారు. అగ్నిమాపక సిబ్బందికి సమాచారం ఇవ్వడంతో అగ్నిమాపక సిబ్బంది వచ్చి మంటలను ఆర్పే ప్రయత్నం చేశారు. మధ్యాహ్నం ఒంటి గంట సమయంలో మంటలు పెరగడంతో అగ్నికీలలు ఎగిసిపడ్డాయి. పెద్ద ఎత్తున మంటలు పెరగడంతో వాటర్‌ కేన్‌లతో నీటిని కొట్టి మంటలు ఆర్పేందుకు అగ్ని మాపక సిబ్బంది ప్రయత్నం చేస్తున్నారు.`,
      timespan: "Jul 22,2023 13:37",
      img: BImg,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: BImg,
    },
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: BImg,
    },
    {
      topic: "రాష్ట్రీయ",
      headline: "విజయనగరం బాలాజీ మార్కెట్‌ షాపుల్లో అగ్నిప్రమాదం",
      article: `ప్రజాశక్తి-విజయనగరం టౌన్‌ : విజయనగరం టౌన్‌లోని బాలాజీ మార్కెట్‌ షాపుల్లో శనివారం అగ్నిప్రమాదం జరిగింది. బాలాజీ 216 నెంబర్‌ షాపులో విద్యుత్‌ బోర్డు దగ్గర మంట రావడంతో షాపులో పని చేస్తున్నవారు భయంతో బయటకు పరుగులు తీశారు. ఈ మంటలు రాజుకొని మార్కెట్‌ 216, 217, 218 షాపులు దగ్ధమయ్యాయి. మేడపైన షాపులు కావడంతో కింది షాపులవారు కూడా భయంతో బయటకు పరుగులు తీశారు. అగ్నిమాపక సిబ్బందికి సమాచారం ఇవ్వడంతో అగ్నిమాపక సిబ్బంది వచ్చి మంటలను ఆర్పే ప్రయత్నం చేశారు. మధ్యాహ్నం ఒంటి గంట సమయంలో మంటలు పెరగడంతో అగ్నికీలలు ఎగిసిపడ్డాయి. పెద్ద ఎత్తున మంటలు పెరగడంతో వాటర్‌ కేన్‌లతో నీటిని కొట్టి మంటలు ఆర్పేందుకు అగ్ని మాపక సిబ్బంది ప్రయత్నం చేస్తున్నారు.`,
      timespan: "Jul 22,2023 13:37",
      img: BImg,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: BImg,
    },
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: BImg,
    },
    {
      topic: "రాష్ట్రీయ",
      headline: "విజయనగరం బాలాజీ మార్కెట్‌ షాపుల్లో అగ్నిప్రమాదం",
      article: `ప్రజాశక్తి-విజయనగరం టౌన్‌ : విజయనగరం టౌన్‌లోని బాలాజీ మార్కెట్‌ షాపుల్లో శనివారం అగ్నిప్రమాదం జరిగింది. బాలాజీ 216 నెంబర్‌ షాపులో విద్యుత్‌ బోర్డు దగ్గర మంట రావడంతో షాపులో పని చేస్తున్నవారు భయంతో బయటకు పరుగులు తీశారు. ఈ మంటలు రాజుకొని మార్కెట్‌ 216, 217, 218 షాపులు దగ్ధమయ్యాయి. మేడపైన షాపులు కావడంతో కింది షాపులవారు కూడా భయంతో బయటకు పరుగులు తీశారు. అగ్నిమాపక సిబ్బందికి సమాచారం ఇవ్వడంతో అగ్నిమాపక సిబ్బంది వచ్చి మంటలను ఆర్పే ప్రయత్నం చేశారు. మధ్యాహ్నం ఒంటి గంట సమయంలో మంటలు పెరగడంతో అగ్నికీలలు ఎగిసిపడ్డాయి. పెద్ద ఎత్తున మంటలు పెరగడంతో వాటర్‌ కేన్‌లతో నీటిని కొట్టి మంటలు ఆర్పేందుకు అగ్ని మాపక సిబ్బంది ప్రయత్నం చేస్తున్నారు.`,
      timespan: "Jul 22,2023 13:37",
      img: BImg,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: BImg,
    },
    {
      topic: "బిజినెస్",
      headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
      article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
      timespan: "Aug 02,2023 21:46",
      img: BImg,
    },
    {
      topic: "రాష్ట్రీయ",
      headline: "విజయనగరం బాలాజీ మార్కెట్‌ షాపుల్లో అగ్నిప్రమాదం",
      article: `ప్రజాశక్తి-విజయనగరం టౌన్‌ : విజయనగరం టౌన్‌లోని బాలాజీ మార్కెట్‌ షాపుల్లో శనివారం అగ్నిప్రమాదం జరిగింది. బాలాజీ 216 నెంబర్‌ షాపులో విద్యుత్‌ బోర్డు దగ్గర మంట రావడంతో షాపులో పని చేస్తున్నవారు భయంతో బయటకు పరుగులు తీశారు. ఈ మంటలు రాజుకొని మార్కెట్‌ 216, 217, 218 షాపులు దగ్ధమయ్యాయి. మేడపైన షాపులు కావడంతో కింది షాపులవారు కూడా భయంతో బయటకు పరుగులు తీశారు. అగ్నిమాపక సిబ్బందికి సమాచారం ఇవ్వడంతో అగ్నిమాపక సిబ్బంది వచ్చి మంటలను ఆర్పే ప్రయత్నం చేశారు. మధ్యాహ్నం ఒంటి గంట సమయంలో మంటలు పెరగడంతో అగ్నికీలలు ఎగిసిపడ్డాయి. పెద్ద ఎత్తున మంటలు పెరగడంతో వాటర్‌ కేన్‌లతో నీటిని కొట్టి మంటలు ఆర్పేందుకు అగ్ని మాపక సిబ్బంది ప్రయత్నం చేస్తున్నారు.`,
      timespan: "Jul 22,2023 13:37",
      img: BImg,
    },
    {
      topic: "జాతీయం",
      headline: "గ్యారేజీలో మంటలు చెలరేగి 22 బస్సులు దగ్ధం",
      article: `బెంగళూరు: కర్ణాటక రాజధాని బెంగళూరు నగరంలో భారీ అగ్ని ప్రమాదం చోటుచేసుకుంది. ఓ గ్యారేజీలో మంటలు చెలరేగడంతో 22 బస్సులు దగ్ధమయ్యాయి. వీరభద్రగనగర్‌లోని గ్యారేజ్‌లో బస్సులకు వెల్డింగ్‌ పనులు చేస్తున్న సమయంలో ఈ దుర్ఘటన చోటుచేసుకున్నట్లు పోలీసులు వెల్లడించారు. ఈ ఘటనలో ఎవరికీ గాయాలు కాలేదు. ఈ దుర్ఘటనపై ప్రాథమిక దర్యాప్తులో వెల్లడైన వివరాల ప్రకారం.. పార్కింగ్‌ చేసిన బస్సులకు వెల్డింగ్‌ చేస్తున్న సమయంలో నిప్పు రవ్వలు చెలరేగి.. అవి మిగతా వాహనాలకు వ్యాపించడం వల్లే భారీ నష్టానికి దారితీసిందని అనుమానిస్తున్నట్లు పోలీసులు తెలిపారు. సమాచారం అందుకున్న అగ్నిమాపక సిబ్బంది అక్కడికి చేరుకొని మంటలను అదుపు చేశారు. ప్రమాదం సమయంలో అక్కడ పెద్ద ఎత్తున మంటలు, పొగలు వ్యాప్తి చెందాయి.ా్యరేజీలో మొత్తం 35 బస్సులు ఉండగా.. ఈ ప్రమాదంలో 22 బస్సులకు మంటలు అంటుకున్నట్లు అగ్నిమాపక శాఖ అధికారులు తెలిపారు. వీటిలో 18 బస్సులు పూర్తిగా కాలి బూడిదైనట్లు చెప్పారు. మరో నాలుగు బస్సులు మాత్రం మంటలు అంటుకొని పాక్షికంగా దెబ్బతిన్నాయని వివరించారు. గ్యారేజీ బహిరంగ ప్రదేశంలో ఉండటంతో మంటలను గమనించిన వెంటనే స్థానికులు అక్కడికి చేరుకొని మంటలు అదుపు చేసేందుకు ప్రయత్నించారని తెలిపారు. ఈ దుర్ఘటనలో ఎవరికీ గాయాలు కాలేదని పోలీసులు తెలిపారు. ఈ ప్రమాదానికి సంబంధించి స్పష్టమైన కారణాలు తెలుసుకొనేందుకు సమగ్ర దర్యాప్తు చేపట్టినట్లు తెలిపారు.`,
      timespan: "Oct 31,2023 07:56",
      img: BImg,
    },
  ];

  const listComponent = (data) => (
    <div>
      {data?.map((item, id) => (
        <div key={id} style={{ paddingBottom: "10px" }}>
          {/* <Link to="/detailed-news"> */}
          <div className="list-wrapper">
            <div className="news-media-img-box">
              <img src={item?.img} alt="img" />
            </div>
            <div className="list-content">
              <div className="media-list-headline">{item?.headline}</div>
            </div>
          </div>
          {/* </Link> */}
          <div className="media-divider"></div>
        </div>
      ))}
    </div>
  );
  const chipsComponent = () => (
    <div
      className="news-sports-content-movies-chip"
      style={{ padding: "18px" }}
    >
      <div className="movies-chip">Tollywood</div>
      <div className="movies-chip">Hollywood</div>
      <div className="movies-chip">Bollywood</div>
      <div className="movies-chip">Reviews</div>
      <div className="movies-chip">Photos</div>
      <div className="movies-chip">Videos</div>
    </div>
  );
  return (
    <div style={{ padding: "10px 0" }}>
      <div className="content-news-wrapper">
        <div className="left-content">
          <Article />
          {chipsComponent()}
          <div style={{ padding: "10px" }}>
            <div className="news-sports-inner-wrapper-two">
              {Array.map((item, id) => (
                <div key={id}>
                  <ActionCards size={"big"} data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-detailed-container">
          {listComponent(data)}
          <h4>Most Viewed</h4>
          <div className="line-orange" style={{ marginBottom: "10px" }}></div>

          {listComponent(data)}
        </div>
      </div>
    </div>
  );
};

export default DetailedNews;
