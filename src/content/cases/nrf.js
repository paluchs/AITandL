import {MyLi} from "../../components/Atoms/MyLi";
import {MyParagraph} from "../../components/Atoms/MyParagraph";

export const nrf = {
    setting: <span>You live in the City of Zurich, Switzerland. Recently, there have been many burglaries in the
        neighborhood where you live. You yourself have also been the victim of a burglary. The police want to use the
        data of your burglary. This would mean that information about the burglary in your home would be stored in a
        central repository. The police would then create a forecast to determine areas of high risk. These forecasts
        would not contain personal data.</span>,
    question: {
        individual: [
            <span>Would you want the state to use your data (thus you’re willing to share it for the purpose of automated
                risk forecasts) to create to generate maps of forecast areas?</span>
        ],
        state: [
            <span>Would you use such data to generate these maps of forecast areas? </span>
        ]
    },
    outcome: {
        red: {
            state: <span>You neither win nor lose – Even though individuals would be open for you to use the data, you don’t
                run the risk of depreciating certain areas. Unfortunately, you cannot get a grip of the burglaries.</span>,
            individual: <span>You neither win nor lose – Even though you want the state to predict high risk areas, they
                decide not to do so. Therefore, you keep your privacy, but burglaries remain a problem in your area.
                There is no risk that these forecasts become public, and your home loses value because it is in a
                high-risk area.</span>
        },
        yellow: {
            state: <span>You win – You get a grip of burglaries in a more efficient way.</span>,
            individual: <span>You neither win nor lose – The police finally get a grip of burglaries in your neighborhood.
                However, it is being aggressively targeted by the police. You might continuously get stopped and
                questioned.</span>
        },
        blue: {
            state: <span>You lose – Unfortunately, you cannot get a grip of the burglaries in the neighborhood.</span>,
            individual: <span>You neither win nor loose – Even though you want the state to predict high risk areas, they
                decide not to do so. Therefore, you keep your privacy, but burglaries remain a problem in your area.
                There is no risk that these forecasts become public, and your home loses value because it is in a
                high-risk area.</span>
        },
        green: {
            state: <span>You lose – Even though you seem to get a grip of burglaries in the neighborhood, people lose trust
                in the police. Collaboration with the people living there becomes increasingly difficult.</span>,
            individual: <span>You lose – Even though you don’t want the police to use your data, they do it anyways. Your
                neighborhood is being aggressively targeted by the police to get a grip of burglaries. You continuously
                get stopped by the police.</span>
        }
    },
    legalInformation: [
        <MyParagraph key={"nrf11"}>This approach uses only anonymized and therefore non-personal, case data. Such data do not constitute
            personal data within the meaning of art. 3 lit. a DSG and therefore do not fall under the Data Protection
            Act. The processing of the data used by this software is therefore unproblematic from the point of view of
            data protection law. (This does not mean that this approach is completely unproblematic. For more see
            “additional information”.)</MyParagraph>,
        <MyParagraph key={"nrf12"}>In Switzerland, currently, the cantons of Aargau, Basel-Land and the City of Zurich are working with
            software that follows such an approach. Information/data that could be used are for example:
        </MyParagraph>,
        <ul key={"nrf13"}>
            <MyLi key={"nrf1"}>Offense type (e.g. burglary ).</MyLi>
            <MyLi key={"nrf2"}>Attempt</MyLi>
            <MyLi key={"nrf3"}>Time of the crime</MyLi>
            <MyLi key={"nrf4"}>Scene of crime</MyLi>
            <MyLi key={"nrf5"}>Modus Operandi</MyLi>
            <MyLi key={"nrf6"}>Obtained property</MyLi>
            <MyLi key={"nrf7"}>Place of crime</MyLi>
        </ul>
    ],
    additionalInformation: [
        <MyParagraph key={"nrf14"}>Although this approach is probably unproblematic from a data protection perspective, other risks cannot be ruled out. Some concerns could be:</MyParagraph>,
        <ul key={"nrf15"}>
            <MyLi key={"nrf8"}>Such a software only works in metropolitan areas</MyLi>
            <MyLi key={"nrf9"}>Shifting the term of suspicion: It raises the question of whether police preventive measures should
                be allowed to generate suspicion of a crime without crime-related connecting factors. By classifying
                an area as a high-risk area, it can lead to suspicion simply by being in such an area. This can be
                especially problematic for residents of such an area.
            </MyLi>
        </ul>,
        <MyParagraph key={"nrf16"}>Another difficulty is the unpredictability of technological development. Data that is anonymous today may be
            assigned to a person tomorrow.</MyParagraph>
    ],
    sources: [],
}