import {MyLink} from "../../components/Atoms/MyLink";
import {MyParagraph} from "../../components/Atoms/MyParagraph";
import {MyLi} from "../../components/Atoms/MyLi";
import {Underlined} from "../../components/Atoms/Underlined";

export const fc = {
    setting: <span>Facial recognition becomes increasingly popular among law enforcement agencies worldwide.
        The national railway agency in the country you live in starts to install cameras in railway stations to monitor
        people who use their trains. They already have images of all potential passengers, because passengers are required
        to have a railway-pass (much like the swiss pass) with a photo. They might use facial recognition to identify
        fare dodgers and to prevent and punish vandalism. </span>,
    question: {
        individual: [
            <span>Would you still use the train if the railway agency were to use facial recognition or would decide to go to work by car?</span>
        ],
        state: [
            <span>As the national railway agency, you get the possibility to use facial recognition software to make sure
                that people have bought a ticket with their railway-pass. Would you use the data available to you, to do so? </span>
        ]
    },
    outcome: {
        red: {
            state: <span>You neither win nor loose – You respect people’s privacy. However, catching fare dodgers remains difficult.</span>,
            individual: <span>You neither win nor loose – Nothing changes for you; you still use the train.</span>
        },
        yellow: {
            state: <span>You win – You win, because you can ensure that all passengers ride with a valid ticket. You can also reduce staff and prevent damaged infrastructure very successfully.</span>,
            individual: <span>You neither win nor lose – You decide to still use the train, however you forfeit privacy.</span>
        },
        blue: {
            state: <span>You lose – You respect people’s privacy. However, catching fare dodgers remains difficult and costs for damaged infrastructure remains high.</span>,
            individual: <span>You neither win nor loose – Nothing changes for you; you still use the train.</span>
        },
        green: {
            state: <span>You Lose – You indirectly exclude large groups of people as they decide not to use the train. You fail your responsibility to provide public transport for everyone, the state intervenes.</span>,
            individual: <span>You lose – You decide to not take the train, but instead use your car. You now have higher costs for your commute. Be aware not everyone has this option! There might also be some cases where you have to take the train and you thus share your data unwillingly.</span>
        }
    },
    legalInformation: [
        <MyParagraph key={"fc1"}>This setting actually consists of two contexts:</MyParagraph>,
        <ul key={"fc5"}>
            <MyLi>The video surveillance in train stations</MyLi>
            <MyLi>The use of this surveillance data to operate facial recognition software</MyLi>
        </ul>,
        <MyParagraph key={"fc2"}>In Switzerland it is legally allowed to install video surveillance in train stations to a certain extend. The use of this footage for automated facial recognition software, constitutes in itself a new interference with the rights of the individuum and therefore requires a legal basis.  Whether there is currently a sufficient legal basis for this is debatable (for more content see additional information below)</MyParagraph>
    ],
    additionalInformation: [
        <MyParagraph key={"fc3"}>In Switzerland there is a video surveillance on in the railroad traffic. The legal basis for such video surveillance is found in the VüV-ÖV<sup>1</sup>.</MyParagraph>,
        <MyParagraph key={"fc4"}>Although it would be technically possible, <Underlined>automated</Underlined> facial recognition is officially still hardly an issue in Switzerland. The reasons for this could be a lack of legal basis and a general skepticism of the Swiss population<sup>2</sup>
            Nevertheless, police forces in Switzerland are also beginning to look into the possibilities of face recognition software.<sup>3</sup>  The cantons Aargau, Schaffhausen, St. Gallen and Waadt are in possession of such software and are running test phases. In a certain extent, these systems are also already used in police operation.<sup>4</sup></MyParagraph>,
        <MyParagraph key={"fc7"}>In general, there is a lack of transparency. It is often not openly communicated exactly which programs are involved. For the most part, the police argue that the data used was obtained legally and therefore does not affect data protection. In our opinion, this cannot be fully agreed with, since any further use of the data - although lawfully collected – is in itself a renewed encroachment on the rights of the data subject. Therefore, data protection is affected. There would therefore have to be a legal basis on which the use is based. The scope of application should be clearly defined in this legal basis.</MyParagraph>,
        <MyParagraph key={"fc6"}>In some states the use of face recognition software is heavily developed and are to be viewed very critically. One example is China, where facial recognition technologies are used to identify and track down members of minority groups.<sup>5</sup>  Another less extreme example would be Spain, where facial recognition is partly used in railway stations to identify fare dodgers.<sup>6</sup></MyParagraph>

    ],
    sources: [
        <><sup>1</sup>Ordinance on video surveillance in public transport, SR 742.147.2</>,
        <><sup>2</sup><MyLink
            href={"https://www.nzz.ch/schweiz/wie-sich-die-schweizer-polizei-auf-videofahndung-mit-big-data-vorbereitet-ld.1536559#register"}>https://www.nzz.ch/schweiz/wie-sich-die-schweizer-polizei-auf-videofahndung-mit-big-data-vorbereitet-ld.1536559#register</MyLink></>,
        <><sup>3</sup><MyLink
            href={"https://www.inside-it.ch/de/post/st-galler-kantonspolizei-testet-gesichtserkennung-20200129"}>https://www.inside-it.ch/de/post/st-galler-kantonspolizei-testet-gesichtserkennung-20200129</MyLink></>,
        <><sup>4</sup><MyLink
            href={"https://www.tagesanzeiger.ch/so-jagen-schweizer-polizisten-mit-gesichtserkennung-verbrecher-608167461846"}>https://www.tagesanzeiger.ch/so-jagen-schweizer-polizisten-mit-gesichtserkennung-verbrecher-608167461846</MyLink></>,
        <><sup>5</sup><MyLink
            href={"https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html "}>https://www.nytimes.com/2019/04/14/technology/china-surveillance-artificial-intelligence-racial-profiling.html </MyLink></>,
        <><sup>6</sup><MyLink
            href={"https://www.elconfidencial.com/tecnologia/2021-02-17/renfe-videovigilancia-pliego-condiciones-tecnicos_2953824/ "}>https://www.elconfidencial.com/tecnologia/2021-02-17/renfe-videovigilancia-pliego-condiciones-tecnicos_2953824/ </MyLink></>
    ],
}