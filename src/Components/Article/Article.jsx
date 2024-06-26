import React from "react";
import Img from "../../assets/image.png";
const Article = () => {
  const data = {
    topic: "బిజినెస్",
    headline: "అమెరికాకు ఫిచ్‌ భారీ షాక్‌",
    article: `న్యూఢిల్లీ : ప్రముఖ రేటింగ్‌ ఎజెన్సీ ఫిచ్‌ అమెరికాకు ఊహించని షాక్‌ ఇచ్చింది. ఆ దేశం పరపతికి అనుహ్యాంగా కోత పెట్టింది. 'ఎఎఎ'గా ఉన్న అమెరికా సౌర్వభౌమ రేటింగ్‌ను ఎఎ ఫ్లస్‌కు తగ్గించింది. పరపతికి కోత పెట్టడంతో పాటుగా రానున్న మూడేళ్లలో అమెరికా ఆర్థిక వ్యవస్థ మరింత క్షీణించొచ్చని హెచ్చరించింది. యుఎస్‌పై పెరుగుతున్న రుణ భారమే ఇందుకు ప్రధాన కారణమని విశ్లేషించింది. ఫిచ్‌ ప్రకటన వైట్‌హౌజ్‌ను, ఇన్వెస్టర్లను తీవ్ర ఆశ్చర్యానికి గురి చేసింది. ఈ ప్రభావం భారత్‌పైనా పడొచ్చనే ఇన్వెస్టర్ల ఆందోళనతో ప్రపంచ మార్కెట్లు సహా సెన్సెక్స్‌, నిఫ్టీలు కుప్పకూలాయి. భారత మార్కెట్ల పతనంతో ఇన్వెస్టర్ల సంపద దాదాపు రూ.3.5 లక్షల కోట్లు ఆవిరయ్యింది. అమెరికా మార్కెట్లు నష్టాలతో ప్రారంభమయ్యాయి. డోజోన్స్‌ 155 పాయింట్లు లేదా 0.4 శాతం, ఎస్‌అండ్‌పి 500 సూచీ 0.8 శాతం చొప్పున నష్టాలతో మొదలయ్యాయి. వచ్చే మూడేళ్లలో అమెరికా బిల్లుల చెల్లింపుల్లో సామర్థ్యం తగ్గొచ్చని ఫిచ్‌ పేర్కొంది. ఇటీవలే స్టాండర్డ్‌ అండ్‌ పూర్‌ (ఎస్‌అండ్‌పి) ఎజెన్సీ అమెరికా పరపతిని ఎఎఎకు తగ్గించింది. ఫిచ్‌ రేటింగ్‌ను యుఎస్‌ ట్రెజరీ సెక్రటరీ జానెట్‌ యెల్లెన్‌ తప్పుబట్టారు. ఇది ఏకపక్ష చర్య అని.. పాత డేటా ఆధారంగా రూపొందించిందన్నారు. వైట్‌హౌజ్‌ కూడా ఇదే తరహా అభిప్రాయాన్ని వ్యక్తం చేసింది. అమెరికా రేటింగ్‌కు కోత పెట్టడంతో ఆ దేశం సహా యూరప్‌, ఆసియా మార్కెట్లు నష్టాలను చవి చూశాయి. బుధవారం బిఎస్‌ఇ సెన్సెక్స్‌ ఓ దశలో 1000కి పైగా పాయింట్లు నష్టపోయింది. తుదకు 677 పాయింట్లు లేదా 1 శాతం కోల్పోయి 65,783కు దిగజారింది. ఎన్‌ఎస్‌ఇ నిఫ్టీ 207 పాయింట్లు లేదా 1.05 శాతం నష్టపోయి 19,527 వద్ద ముగిసింది. అమ్మకాల ఒత్తిడితో బిఎస్‌ఇ మిడ్‌క్యాప్‌, స్మాల్‌ క్యాప్‌ సూచీలు 1.4 శాతం పతనమయ్యాయి. నిఫ్టీలో పిఎస్‌యు బ్యాంకింగ్‌ సూచీ 2.6 శాతం విలువ కోల్పోగా.. లోహ సూచీ 2 శాతం నష్టపోయింది. సెన్సెక్స్‌ 30లో నెస్లే ఇండియా, ఏషియన్‌ పెయింట్స్‌, హిందుస్థాన్‌ యూనిలీవర్‌, టెక్‌ మహీంద్రా మినహా మిగిలిన అన్ని షేర్లూ ప్రతికూలతను ఎదుర్కొన్నాయి. డాలరుతో రూపాయి మారకం విలువ 82.58గా ఉంది.`,
    timespan: "Aug 02,2023 21:46",
    img: Img,
  };
  return (
    <div style={{ padding: "10px" }}>
      <h2>{data.headline}</h2>
      <div className="line-orange" style={{ marginBottom: "10px" }}></div>

      <img
        src={data.img}
        alt="img"
        style={{ width: "100%", padding: "10px" }}
      />
      <h3>{data.topic}</h3>
      <p>{data.article}</p>
    </div>
  );
};

export default Article;
