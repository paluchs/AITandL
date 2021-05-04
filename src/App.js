import {Box, Footer, Grommet, Heading, Markdown, Tab, Tabs, Text} from 'grommet';
import {Attraction, Nodes} from "grommet-icons";
import {TabContent} from "./components/TabContent";
import {FaBiohazard, FaPlane, FaUserSecret} from 'react-icons/fa';
import {grommetTheme} from "./grommetTheme";
import {exampleResult} from "./content/results/exampleResult";
import {pnr} from "./content/cases/pnr";


function App() {
    return (
        <Grommet theme={grommetTheme}>
            <Box fill={true} justify={'between'}>
                <Box pad={'medium'}>
                    <Box pad={'medium'} elevation={'xsmall'} round={'xsmall'} background={'light-3'}>
                        <Heading level={1}> Artificial Intelligence Technology and Law</Heading>
                        <Heading level={3}> Spring Semester 2021</Heading>
                        <Markdown fill>
                            Here we write some basic information about our project. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet.
                        </Markdown>
                    </Box>
                </Box>
                <Box>
                    <Tabs flex>
                        <Tab title="Passenger Name Record (PNR)" icon={<FaPlane/>}>
                            <TabContent title={"Passenger Name Record (PNR)"} result={exampleResult} context={pnr}/>
                        </Tab>
                        <Tab title="Near Repeat Forecast Areas" icon={<Nodes/>}>
                            <TabContent result={exampleResult} context={pnr}/>
                        </Tab>
                        <Tab title="Festival" icon={<Attraction/>}>
                            <TabContent result={exampleResult} context={pnr}/>
                        </Tab>
                        <Tab title="Facial Recognition" icon={<FaUserSecret/>}>
                            <TabContent result={exampleResult} context={pnr}/>
                        </Tab>
                        <Tab title="Covid App" icon={<FaBiohazard/>}>
                            <TabContent result={exampleResult} context={pnr}/>
                        </Tab>
                    </Tabs>
                </Box>
                <Footer background="light-4" justify="center" pad="small">
                    <Text textAlign="center" size="small">
                        © 2021 AI T&L
                    </Text>
                </Footer>
            </Box>


        </Grommet>
    );
}

export default App;
