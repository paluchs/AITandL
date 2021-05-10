export const cm = {
    setting: <>There is a large festival going on in the city center of Zurich. The is no entrance fee for the festival.
        There is a campaign by the organizers promoting the “Festival-Application” available on all common mobile
        operating systems. This App would use your personal GPS data to monitor crowds and allocate resources (among
        other things police officers) to areas with large crowds.</>,
    question: {
        individual: [
            <>Would you download the app thus sharing your GPS data with the police?</>
        ],
        state: [
            <>Would you use the GPS data of mobile devices while they are logged in on the festival area to pursue a
                hotspot policing approach?</>
        ]
    },
    outcome: {
        red: {
            state: <>You neither win nor lose – Even though individuals would be open for you to use the data, you don’t
                run the risk of data leaks.</>,
            individual: <>You neither win nor lose – Even though you want the state to predict high risk areas, they
                decide not to do so. Therefore, you keep your privacy, but the police are unfortunately not able to
                prevent all incidences in crowded areas.</>
        },
        yellow: {
            state: <>You win – You can use the data to monitor crowds and allocate your resources accordingly.</>,
            individual: <>You neither win nor lose – You enjoy a festival with very few incidents, however there is
                always a risk that your personal GPS-Data lands in the wrong hands and you are personally targeted.</>
        },
        blue: {
            state: <>You lose – There are some incidents which you couldn’t prevent because you had no officers
                present.</>,
            individual: <>You neither win nor loose – Even though you want the state to predict high risk areas, they
                decide not to do so. Therefore, you keep your privacy, but the police are unfortunately not able to
                prevent all incidences in crowded areas.</>
        },
        green: {
            state: <>You Loose – Even though you promote the app, too few people use it and therefore you don’t have
                enough data for a meaningful crowd monitoring. There are some incidents which you couldn’t prevent
                because you had no officers present.</>,
            individual: <>You lose – You and many others don’t use the app. Even though you can retain your privacy the
                police are not able to monitor crowds.</>
        }
    },
    legalInformation: [
        <>The permissibility of such use of the data in principle depends on the specific details. In this case, the use
            of anonymous GPS data and therefore non-personal data, is to be assumed. However, one would have to check
            whether the specific application really ensures sufficient anonymity.</>,
        <>Considering that the individual has given his/her consent and shared his/her location, the police is
            basically entitled to use these anonymized data. • However, the use of this data must be clearly regulated,
            and it must be clear to the individual what he/she is consenting to and what exactly happens with his/her
            data. The anonymous use of the data to pursue a hot spot policing approach would thus be possible. In the
            City of Zurich the police is using such software for crowd monitoring purposes since 2013 for events like
            the “Street Parade” or the “Züri Fäscht” <sup>1</sup></>,
        <></>
    ],
    additionalInformation: [
        <>In general, consent can only provide an adequate basis for lawfulness if the data subject is offered control
            and a real choice to accept or reject the offered conditions without suffering disadvantages. In this case,
            it is not obvious that you suffer a disadvantage by not consenting. The use of the app is completely
            voluntary.</>,
        <>•	A distinction must be made between personal data and non-personal data:
            <ul>
                <li>Personal data is information relating to a specific or identifiable person.</li>
                <li>Non-personal data is information without reference to a specific or identifiable person.</li>
            </ul>
        </>,
        <>Another difficulty is the unpredictability of technological development. Data that is anonymous today may be
            assigned to a person tomorrow.</>
    ],
    sources: [
        <>1:
            https://www.stadt-zuerich.ch/portal/de/index/politik_u_recht/stadtrat/weitere-politikfelder/smartcity/projekte/crowdmanagement.html</>
    ],


}