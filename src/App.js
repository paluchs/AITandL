import {Box, Footer, Grommet, Text} from 'grommet';
import {grommetTheme} from "./grommetTheme";
import {Introduction} from "./components/Introduction";
import {Title} from "./components/Title";
import {Conclusion} from "./components/Conclusion";
import {Contexts} from "./components/Contexts";
import {TheGame} from "./components/TheGame";
import {GeneralLegal} from "./components/GeneralLegal";


function App() {

    // Prevent app from falling asleep
    let http = require("http");
    setInterval(function() {
        console.log("Kept page from falling asleep!")
        http.get("https://ai-techandlaw-project.herokuapp.com/");
    }, 300000)

    return (
        <Grommet theme={grommetTheme}>
            <Box fill={true}
                 justify={'center'}
                 align={'center'}
            >
                <Title/>
                <Box pad={{horizontal: "small"}}>
                    <Introduction/>
                    <TheGame/>
                    <GeneralLegal/>
                    <Contexts/>
                    <Conclusion/>
                </Box>
                <Footer background="light-4" justify="center" pad="small" fill>
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
