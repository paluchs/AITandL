import {Box, Footer, Grommet, Text} from 'grommet';
import {grommetTheme} from "./grommetTheme";
import {Introduction} from "./components/Introduction";
import {Title} from "./components/Title";
import {Conclusion} from "./components/Conclusion";
import {Contexts} from "./components/Contexts";
import {TheGame} from "./components/TheGame";
import {GeneralLegal} from "./components/GeneralLegal";


function App() {
    return (
        <Grommet theme={grommetTheme}>
            <Box fill={true} justify={'between'}>
                <Title/>
                <Introduction/>
                <TheGame/>
                <GeneralLegal/>
                <Contexts/>
                <Conclusion/>
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
