import {Box, Heading, Paragraph} from "grommet";
import {DataVisualisation} from "./DataVisualisation";


export const TabContent = props => {

    return (
        <Box fill pad={{left: 'medium', right: 'medium', bottom: 'medium'}} align="center">
            <Box fill
                 direction={'row'}
                 pad={'large'}
                 elevation={'xsmall'}
                 round={'xsmall'}
                 background={'light-3'}
                 align="start"
                 gap={'medium'}
            >
                <Box width={"70%"} gap={'medium'}>
                    <Heading level={2} margin={"xsmall"}>{props.title}</Heading>
                    <Paragraph fill margin={"xsmall"}>
                        {props.context.setting}
                    </Paragraph>
                    <Heading level={3} margin={"xxsmall"}>Questions</Heading>
                    <Box direction={'row'} gap={'xlarge'}>
                        <Box>
                            <Heading level={4} margin={"xxsmall"}>To the individual</Heading>
                            {props.context.question.individual.map(ques => {return <Paragraph margin={"xxsmall"}>{ques}</Paragraph>})}
                        </Box>
                        <Box>
                            <Heading level={4} margin={"xxsmall"}>To the state/police</Heading>
                            {props.context.question.state.map(ques => {return <Paragraph margin={"xxsmall"}>{ques}</Paragraph>})}
                        </Box>
                    </Box>
                    <Heading level={3}>Outcome</Heading>


                </Box>
                <Box>
                    <DataVisualisation data={props.result}/>
                </Box>
            </Box>
        </Box>
    )
}