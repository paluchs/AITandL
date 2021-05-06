import {Box, Footer, Grommet, Heading, Image, Markdown, Tab, Tabs, Text} from 'grommet';
import {Group, Nodes, Send, Shield, View} from "grommet-icons";
import {TabContent} from "./components/TabContent";
import {grommetTheme} from "./grommetTheme";
import {exampleResult} from "./content/results/exampleResult";
import {pnr} from "./content/cases/pnr";


function App() {
    return (
        <Grommet theme={grommetTheme}>
            <Box fill={true} justify={'between'}>
                <Box fill={"horizontal"}
                     alignContent={'start'}
                     justify={'end'}
                     height={"large"}
                     background="url('images/artificial_intelligence.jpg')"
                >
                    <Box margin={{vertical:"large", left: "medium", right:"large"}}
                         pad={'medium'}
                         elevation={'medium'}
                         round={'xsmall'}
                         background={'rgba(255,255,255,0.92)'}
                         width={{max: 'xlarge'}}
                         justify={'end'}
                    >
                        <Box width={'small'}>
                            <Image src={'images/uzh_logo.png'}
                            />
                        </Box>
                        <Box border={{ color: 'brand', size: 'medium', side: "bottom" }}>
                            <Heading level={1} color= {'brand'} margin={{bottom: '5px'}} size={'large'} style={{"font-weight": "300"}}> PREDICTIVE POLICING</Heading>
                        </Box>
                        <Heading level={2} margin={{top: 'large', bottom: '0px'}}> Artificial Intelligence: Technology &amp; Law</Heading>
                        <Heading level={3} margin={{top: '2px', bottom: '10px'}} size={'medium'}> Spring Semester 2021</Heading>
                        <Box height={'xxsmall'}/>
                        <Heading level={4} margin={{vertical: '2px'}} size={'xsmall'} fill>Instructors: Prof. Dr. Abraham Bernstein &amp; Prof. Dr. Florent Thouvenin</Heading>
                        <Heading level={4} margin={{vertical: '2px'}} size={'xsmall'} fill>Conducted by: Rezuanul Haque, Patrick Luchsinger, Maria Pelli, Simon Rufer, Jan Winkler</Heading>
                    </Box>
                </Box>
                <Box pad={'medium'}>
                    <Box pad={'medium'} elevation={'xsmall'} round={'xsmall'} background={'light-3'}>
                        <Heading level={2}>Introduction</Heading>
                        <Markdown fill>
                            Here we write some basic information about our project. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet.
                        </Markdown>
                    </Box>
                </Box>
                <Box>
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
                <Footer background="light-4" justify="center" pad="small">
                    <Text textAlign="center" size="small">
                        This research project was conducted by Rezuanul Haque, Patrick Luchsinger, Maria Pelli, Simon Rufer, Jan Winkler
                    </Text>
                </Footer>
            </Box>


        </Grommet>
    );
}

export default App;
