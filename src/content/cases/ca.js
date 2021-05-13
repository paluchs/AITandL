import {MyLink} from "../../components/Atoms/MyLink";
import {MyParagraph} from "../../components/Atoms/MyParagraph";

export const ca = {
    setting: <span>Assume that the COVID App uses a different implementation where users share their exact location at any point in time to record encounters with other people.</span>,
    question: {
        individual: [
            <span>Would you still use the App thus sharing your location to contain the pandemic? Careful, the state could punish you because your location-data might prove that you didn’t comply with COVID regulation.</span>
        ],
        state: [
            <span>Would you only use the data to record encounters, and to notify people when they were in close contact, (i.e., not use personal location data) or would you use the data for repression, meaning that you can punish non-compliance with COVID-prevention regulation (i.e., use the personal location data)?</span>
        ]
    },
    outcome: {
        red: {
            state: <span>You neither win nor lose – The contact-tracing seems to be quite successful, and people seem to trust you to use the data responsibly. However, there is always the risk of data leaks.</span>,
            individual: <span>You neither win nor lose – Even though the data is used in a responsible way, you still share personal location data, and you risk abuse.</span>
        },
        yellow: {
            state: <span>You win – You can enforce compliance with COVID-regulation. But careful, people might not use App if they realize that the data is used for repression.</span>,
            individual: <span>You neither win nor lose – Your location data is used for your surveillance and you forfeit privacy. People who don’t comply with COVID-regulations just don’t use the app.</span>
        },
        blue: {
            state: <span>You lose – Even though you only use the data to record encounters and notify people, they seem to not trust you with the data. Therefore, they don’t use the app and contact tracing is difficult.</span>,
            individual: <span>You neither win nor lose – You withhold personal location data and retain your privacy. However, because many people act as you do, contact tracing is difficult.</span>
        },
        green: {
            state: <span>You lose – You try to force people into compliance with COVID-regulation, but people just don’t use the app. The pandemic continues to spread. You might try to get location-data elsewhere.</span>,
            individual: <span>You lose – You withhold personal location data and retain your privacy. On the other hand, contact tracing is not possible and the pandemic continues to spread.</span>
        }
    },
    legalInformation: [
        <MyParagraph key={"ca1"}>The operation of a “Covid-app” by the federal government is currently possible in Switzerland. Based on art. 60a of the Epidemic Law (EpG; SR 818.101), the BAG may operate a proximity tracing system for the Sars-CoV-2 coronavirus. However, participation is voluntary. </MyParagraph>,
        <MyParagraph key={"ca2"}>However, a scenario like the one depicted in the game is currently not possible in Switzerland. The data is anonymized and therefore the state does not have any personal data to monitor the behavior and exact location of individuals. </MyParagraph>
    ],
    additionalInformation: [
        <MyParagraph key={"ca3"}>The swiss app system can be connected to corresponding foreign systems, but only if the foreign system complies with the requirements according to art. 60a EpG and the Regulation on the proximity tracing system for the Sars-CoV-2 coronavirus (VPTS; SR 818.101.25).  Currently there is a connection with the Covid App from Germany.<sup>1</sup></MyParagraph>,
        <MyParagraph key={"ca4"}>Data that the cell phone collects about other users is only stored locally. Cell phones or the Swiss Covid App do not send personal or location data to central storage locations or servers. Therefore, no one can reconstruct with which person one had contact and where the contact took place. </MyParagraph>,
        <MyParagraph key={"ca5"}>Many EU Member States have taken action to combat Covid-19 by developing Covid tracking apps and also using telecom data to locate population movements. Outside of Europe, you can also find States like South Korea, Hongkong and Taiwan (and many more) that follow an individual tracking.<sup>2</sup>  This certainly raises strong concerns about privacy and data protection.</MyParagraph>
    ],
    sources: [
        <><sup>1</sup><MyLink href={'https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/swisscovid-app-und-contact-tracing/datenschutzerklaerung-nutzungsbedingungen.html '}>https://www.bag.admin.ch/bag/de/home/krankheiten/ausbrueche-epidemien-pandemien/aktuelle-ausbrueche-epidemien/novel-cov/swisscovid-app-und-contact-tracing/datenschutzerklaerung-nutzungsbedingungen.html </MyLink></>,
        <><sup>2</sup><MyLink
            href={"https://www.europarl.europa.eu/thinktank/en/document.html?reference=EPRS_BRI(2020)649384"}>https://www.europarl.europa.eu/thinktank/en/document.html?reference=EPRS_BRI(2020)649384</MyLink></>
    ],
}