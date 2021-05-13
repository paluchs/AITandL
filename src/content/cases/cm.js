import {MyLink} from "../../components/Atoms/MyLink";
import {MyParagraph} from "../../components/Atoms/MyParagraph";

export const cm = {
    setting: <span>There is a large festival going on in the city center of Zurich. The is no entrance fee for the festival.
        There is a campaign by the organizers promoting the “Festival-Application” available on all common mobile
        operating systems. This App would use your personal GPS data to monitor crowds and allocate resources (among
        other things police officers) to areas with large crowds.</span>,
    question: {
        individual: [
            <span>Would you download the app thus sharing your GPS data with the police?</span>
        ],
        state: [
            <span>Would you use the GPS data of mobile devices while they are logged in on the festival area to pursue a
                hotspot policing approach?</span>
        ]
    },
    outcome: {
        red: {
            state: <span>You neither win nor lose – Even though individuals would be open for you to use the data, you don’t
                run the risk of data leaks.</span>,
            individual: <span>You neither win nor lose – Even though you want the state to predict high risk areas, they
                decide not to do so. Therefore, you keep your privacy, but the police are unfortunately not able to
                prevent all incidences in crowded areas.</span>
        },
        yellow: {
            state: <span>You win – You can use the data to monitor crowds and allocate your resources accordingly.</span>,
            individual: <span>You neither win nor lose – You enjoy a festival with very few incidents, however there is
                always a risk that your personal GPS-Data lands in the wrong hands and you are personally targeted.</span>
        },
        blue: {
            state: <span>You lose – There are some incidents which you couldn’t prevent because you had no officers
                present.</span>,
            individual: <span>You neither win nor loose – Even though you want the state to predict high risk areas, they
                decide not to do so. Therefore, you keep your privacy, but the police are unfortunately not able to
                prevent all incidences in crowded areas.</span>
        },
        green: {
            state: <span>You Loose – Even though you promote the app, too few people use it and therefore you don’t have
                enough data for a meaningful crowd monitoring. There are some incidents which you couldn’t prevent
                because you had no officers present.</span>,
            individual: <span>You lose – You and many others don’t use the app. Even though you can retain your privacy the
                police are not able to monitor crowds.</span>
        }
    },
    legalInformation: [
        <MyParagraph key={"cm1"}>The permissibility of such use of the data in principle depends on the specific details. In this case, the
            use
            of anonymous GPS data and therefore non-personal data, is to be assumed. However, one would have to check
            whether the specific application really ensures sufficient anonymity.</MyParagraph>,
        <MyParagraph key={"cm2"}>Considering that the individual has given his/her consent and shared his/her location, the police is
            basically entitled to use these anonymized data. However, the use of this data must be clearly regulated,
            and it must be clear to the individual what he/she is consenting to and what exactly happens with his/her
            data. The anonymous use of the data to pursue a hot spot policing approach would thus be possible. In the
            City of Zurich the police is using such software for crowd monitoring purposes since 2013 for events like
            the “Street Parade” or the “Züri Fäscht” <sup>1</sup></MyParagraph>
    ],
    additionalInformation: [
        <MyParagraph key={"cm3"}>In general, consent can only provide an adequate basis for lawfulness if the data subject is offered control
            and a real choice to accept or reject the offered conditions without suffering disadvantages. In this case,
            it is not obvious that you suffer a disadvantage by not consenting. The use of the app is completely
            voluntary.</MyParagraph>,
        <MyParagraph key={"cm4"}>Since crowd monitoring uses anonymized data, there is no processing of personal data and the Data Protection
            Act does not apply. However, it would have to be checked whether the respective app provides sufficient
            anonymization.
        </MyParagraph>
    ],
    sources: [
        <><sup>1</sup><MyLink href={"https://www.stadt-zuerich.ch/portal/de/index/politik_u_recht/stadtrat/weitere-politikfelder/smartcity/projekte/crowdmanagement.html"}>https://www.stadt-zuerich.ch/portal/de/index/politik_u_recht/stadtrat/weitere-politikfelder/smartcity/projekte/crowdmanagement.html</MyLink></>
    ],
}