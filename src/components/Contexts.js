import {ContentBox} from "./Atoms/ContentBox";
import {Heading2} from "./Atoms/Heading2";
import {Box, Tab, Tabs} from "grommet";
import {MultiParagraphDiv} from "./Atoms/MultiParagraphDiv";
import {MyParagraph} from "./Atoms/MyParagraph";
import {Group, Nodes, Send, Shield, View} from "grommet-icons";
import {TabContent} from "./TabContent";
import {exampleResult} from "../content/results/exampleResult";
import {pnr} from "../content/cases/pnr";
import {nrf} from "../content/cases/nrf";
import {cm} from "../content/cases/cm";
import {fc} from "../content/cases/fc";
import {ca} from "../content/cases/ca";

export const Contexts = () => {
    return (
        <ContentBox>
            <Heading2 title={"Contexts"}/>
            <Box margin={{top: "medium"}}>
                <MultiParagraphDiv>
                    <MyParagraph style={{"marginTop": "0px"}}>
                        The game simulates five different situations. All of these contexts are somewhat relatable for
                        most humans playing the game. We chose these situations in thorough discussions about where data
                        privacy and artificial intelligence technology pop up in different everyday lives. An idea
                        behind the five chosen subjects was that the players find themselves in situations where we all
                        have been and might or might not have thought carefully about what is happening with their data.
                    </MyParagraph>
                    <MyParagraph>
                        The first example is the passenger name record (PNR). Everyone who has ever taken a plane to go
                        abroad knows that passengers' names are recorded, among other details. Latter facts can be seen
                        as a trade-off for individuals and as a chance for airlines or states/police. It can be deduced
                        who travels to what destinations. Furthermore, if authorities choose to scan their criminal
                        databases, it allows them to prevent illegal activities in advance theoretically. However, this
                        could also lead to racial profiling or yield disadvantageous situations for minorities.
                    </MyParagraph>
                    <MyParagraph>
                        In the second context, the centers of attention are criminal events in the past. It has been
                        shown that there are particulars patterns in illegal activities in the mere vicinity of past
                        crimes. Thus, the near-repeat principle can be applied. Furthermore, the police can use geocoded
                        data to feed into AI models that predict where similar crimes could happen in the future based
                        on past criminal activities.
                    </MyParagraph>
                    <MyParagraph>
                        The third situation relates to the pre-covid summer activities of many individuals:
                        Street-Festivals and other people-intensive events. High densities of people in relatively
                        small-scaled areas have been shown as problematic in various situations. Could active,
                        predictive crowd monitoring help to increase the security of large-scale events? A more critical
                        question shall be whether individuals are willing to share their location data with the
                        authorities.
                    </MyParagraph>
                    <MyParagraph>
                        In the fourth subject, we address the highly controversial facial recognition software that has
                        been used in other countries (US, UK). There have been critical acclaims on coded biases within
                        the software, more accurately how the AI system had been trained. We found that this is another
                        tricky situation for players to think about because it is rather difficult not to share one's
                        facial details. It would mean one would have to avoid city centers or public transportation.
                    </MyParagraph>
                    <MyParagraph>
                        The last context treats a slightly modified version of the covid-app. We found this example
                        necessary, having the public outrage in the back of our minds that stirred up during the last
                        year connected with the launch of the app. Would people subdue to complete control if they had
                        the possibility of getting more accurate data on where they were infected? This case is very
                        hypothetical. However, discussions with peers during the decision-making process lead to
                        exciting insights into people's minds. Therefore, we chose to include this context.
                    </MyParagraph>
                </MultiParagraphDiv>
            </Box>
            <Box margin={{top: 'large'}}>
                <Tabs flex>
                    <Tab key={'Tab1'} title="Passenger Name Record (PNR)" icon={<Send/>}>
                        <TabContent key={'pnr'} title={"Passenger Name Record (PNR)"} result={exampleResult} context={pnr}/>
                    </Tab>
                    <Tab key={'Tab2'} title="Near Repeat Forecast" icon={<Nodes/>}>
                        <TabContent key={'nrf'} result={exampleResult} context={nrf}/>
                    </Tab>
                    <Tab  key={'Tab3'}title="Crowd Monitoring" icon={<Group/>}>
                        <TabContent key={'cm'} result={exampleResult} context={cm}/>
                    </Tab>
                    <Tab  key={'Tab4'} title="Facial Recognition" icon={<View/>}>
                        <TabContent key={'fr'} result={exampleResult} context={fc}/>
                    </Tab>
                    <Tab key={'Tab5'} title="Covid App" icon={<Shield/>}>
                        <TabContent key={'ca'} result={exampleResult} context={ca}/>
                    </Tab>
                </Tabs>
            </Box>
        </ContentBox>
    )
}