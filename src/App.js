import {Box, Footer, Grommet, Tab, Tabs, Text} from 'grommet';
import {Group, Nodes, Send, Shield, View} from "grommet-icons";
import {TabContent} from "./components/TabContent";
import {grommetTheme} from "./grommetTheme";
import {exampleResult} from "./content/results/exampleResult";
import {pnr} from "./content/cases/pnr";
import {Introduction} from "./components/Introduction";
import {Title} from "./components/Title";
import {ContentBox} from "./components/Atoms/ContentBox";
import {Heading2} from "./components/Atoms/Heading2";


function App() {
    return (
        <Grommet theme={grommetTheme}>
            <Box fill={true} justify={'between'}>
                <Title/>
                <Introduction/>
                <ContentBox>
                    <Heading2 title={"The Contexts"}/>
                    <Box margin={{top: 'large'}}>
                        <Tabs flex>
                            <Tab title="Passenger Name Record (PNR)" icon={<Send/>}>
                                <TabContent title={"Passenger Name Record (PNR)"} result={exampleResult} context={pnr}/>
                            </Tab>
                            <Tab title="Near Repeat Forecast Areas" icon={<Nodes/>}>
                                <TabContent result={exampleResult} context={pnr}/>
                            </Tab>
                            <Tab title="Crowd Monitoring" icon={<Group/>}>
                                <TabContent result={exampleResult} context={pnr}/>
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
                <Footer background="light-4" justify="center" pad="small">
                    <Text textAlign="center" size="small">
                        This research project was conducted by: Rezuanul Haque, Patrick Luchsinger, Maria Pelli, Simon
                        Rufer, Jan Winkler
                    </Text>
                </Footer>
            </Box>


        </Grommet>
    );
}

export default App;
