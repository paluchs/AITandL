import {Box, Heading, Paragraph} from "grommet";
import {DataVisualisation} from "./DataVisualisation";
import {MyParagraph} from "./Atoms/MyParagraph";
import {MultiParagraphDiv} from "./Atoms/MultiParagraphDiv";


export const TabContent = props => {

    return (
        <Box fill
             direction={'row'}
             pad={'medium'}
             elevation={'xsmall'}
             round={'xsmall'}
             background={'light-2'}
             align="start"
             gap={'medium'}
        >
            <Box width={"70%"} gap={'medium'}>
                <Heading level={3} margin={"xxsmall"}>Overview</Heading>
                <MultiParagraphDiv>
                    <MyParagraph style={{"margin-top": "0px"}}>
                        {props.context.setting}
                    </MyParagraph>
                </MultiParagraphDiv>
                <Heading level={3} margin={"xsmall"}>The context</Heading>
                <MultiParagraphDiv>
                    <MyParagraph style={{"margin-top": "0px"}}>
                        {props.context.setting}
                    </MyParagraph>
                </MultiParagraphDiv>
                <Heading level={3} margin={"xxsmall"}>Questions</Heading>
                <Box direction={'row'} gap={'xlarge'}>
                    <Box>
                        <Heading level={4} margin={"xxsmall"}>To the individual</Heading>
                        {props.context.question.individual.map(ques => {
                            return <Paragraph margin={"xxsmall"}>{ques}</Paragraph>
                        })}
                    </Box>
                    <Box>
                        <Heading level={4} margin={"xxsmall"}>To the state/police</Heading>
                        {props.context.question.state.map(ques => {
                            return <Paragraph margin={"xxsmall"}>{ques}</Paragraph>
                        })}
                    </Box>
                </Box>
                <Heading level={3}>Outcome</Heading>


            </Box>
            <Box>
                <DataVisualisation data={props.result}/>
            </Box>
        </Box>

    )
}