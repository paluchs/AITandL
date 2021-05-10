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

export const Contexts = () => {
    return (
        <ContentBox>
            <Heading2 title={"Contexts"}/>
            <Box margin={{top: "medium"}}>
                <MultiParagraphDiv>
                    <MyParagraph style={{"margin-top": "0px"}}>
                        Some general information about the contexts. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet. Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        amet.
                    </MyParagraph>
                </MultiParagraphDiv>
            </Box>
            <Box margin={{top: 'large'}}>
                <Tabs flex>
                    <Tab title="Passenger Name Record (PNR)" icon={<Send/>}>
                        <TabContent title={"Passenger Name Record (PNR)"} result={exampleResult} context={pnr}/>
                    </Tab>
                    <Tab title="Near Repeat Forecast" icon={<Nodes/>}>
                        <TabContent result={exampleResult} context={nrf}/>
                    </Tab>
                    <Tab title="Crowd Monitoring" icon={<Group/>}>
                        <TabContent result={exampleResult} context={cm}/>
                    </Tab>
                    <Tab title="Facial Recognition" icon={<View/>}>
                        <TabContent result={exampleResult} context={pnr}/>
                    </Tab>
                    <Tab title="Covid App" icon={<Shield/>}>
                        <TabContent result={exampleResult} context={pnr}/>
                    </Tab>
                </Tabs>
            </Box>
        </ContentBox>
    )
}