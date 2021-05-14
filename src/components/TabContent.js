import {Box, Heading, Image} from "grommet";
import {DataVisualisation} from "./DataVisualisation";
import {MyParagraph} from "./Atoms/MyParagraph";
import {MultiParagraphDiv} from "./Atoms/MultiParagraphDiv";
import {SourceParagraph} from "./Atoms/SourceParagraph";

const Heading3Main = props => {
    return (
        <Box border={{size: 'xsmall', side: "bottom"}}>
            <Heading level={3} margin={{top: 'small', bottom: '2px'}}>{props.title}</Heading>
        </Box>
    )

}


export const TabContent = props => {

    return (
        <Box fill
             pad={{top: 'medium'}}
             border={{color: 'brand', size: 'small', side: "top"}}
        >
            <Box direction={'row-responsive'}
                 gap={'medium'}
                 align="start"
                 justify={'between'}
                 overflow={'auto'}
            >

                <Box gap={'medium'}>
                    <Heading3Main title={'Setting'}/>
                    <MultiParagraphDiv>
                        <MyParagraph style={{"marginTop": "0px"}}>
                            {props.context.setting}
                        </MyParagraph>
                    </MultiParagraphDiv>
                    <Heading3Main title={'Questions'}/>
                    <Box direction={'row'}
                         gap={'large'}
                         justify={'between'}
                    >
                        <Box>
                            <Heading level={4}>To the individual:</Heading>
                            {props.context.question.individual.map((ques, index) => {
                                return <MyParagraph key={"QuesInd" + index}>{ques}</MyParagraph>
                            })}
                        </Box>
                        <Box>
                            <Heading level={4}>To the authorities:</Heading>
                            {props.context.question.state.map((ques, index) => {
                                return <MyParagraph key={"Ques" + index}>{ques}</MyParagraph>
                            })}
                        </Box>
                    </Box>
                    <Heading3Main title={'Legal status in Switzerland'}/>
                    <MultiParagraphDiv>
                        {props.context.legalInformation.map(para => {
                            return para
                        })}
                    </MultiParagraphDiv>
                    <Box border={{size: 'xsmall', side: "bottom"}}
                         alignSelf={'start'}
                    >
                        <Heading level={4} margin={{top: 'small', bottom: '2px'}}>
                            Additional Information
                        </Heading>
                    </Box>
                    <MultiParagraphDiv>
                        {props.context.additionalInformation.map((para) => {
                            return para
                        })}
                    </MultiParagraphDiv>
                    <hr/>
                    <Box gap={'0px'} border={{size: 'xsmall', side: "top"}} pad={{top: "10px"}}>
                        {props.context.sources.map((para, index) => {
                            return <SourceParagraph key={index}>{para}</SourceParagraph>
                        })}
                    </Box>
                </Box>
                <Box width={{min: 'medium'}}>
                    <DataVisualisation data={props.result}/>
                </Box>

            </Box>
            <Heading3Main title={'Potential Outcomes'}/>
            <Box direction={'row-responsive'}
                 gap={'medium'}
            >
                <Box>
                    <MyParagraph style={{"marginTop": "30px"}}>
                        We also discussed potential outcomes of the four cases. However, it is important to note that
                        these do not reflect reality and are solely to improve the gameplay of our game.
                        The colors in the image on the right refer to the four possible outcomes.
                    </MyParagraph>

                    <Box border={{size: 'xsmall', side: "bottom"}}
                         alignSelf={'start'}
                         fill={'horizontal'}
                    >
                        <Heading level={4} margin={{top: 'small', bottom: '2px'}}>
                            Red case (Share/Don't use)
                        </Heading>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>State: </b></Box>
                        <MyParagraph>{props.context.outcome.red.state}</MyParagraph>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>Individual: </b></Box>
                        <MyParagraph>{props.context.outcome.red.individual}</MyParagraph>
                    </Box>

                    <Box border={{size: 'xsmall', side: "bottom"}}
                         alignSelf={'start'}
                         fill={'horizontal'}
                    >
                        <Heading level={4} margin={{top: 'small', bottom: '2px'}}>
                            Yellow case (Share/Use)
                        </Heading>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>State: </b></Box>
                        <MyParagraph>{props.context.outcome.yellow.state}</MyParagraph>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>Individual: </b></Box>
                        <MyParagraph>{props.context.outcome.yellow.individual}</MyParagraph>
                    </Box>

                    <Box border={{size: 'xsmall', side: "bottom"}}
                         alignSelf={'start'}
                         fill={'horizontal'}
                    >
                        <Heading level={4} margin={{top: 'small', bottom: '2px'}}>
                            Blue case (Don't share/don't use)
                        </Heading>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>State: </b></Box>
                        <MyParagraph>{props.context.outcome.blue.state}</MyParagraph>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>Individual: </b></Box>
                        <MyParagraph>{props.context.outcome.blue.individual}</MyParagraph>
                    </Box>

                    <Box border={{size: 'xsmall', side: "bottom"}}
                         alignSelf={'start'}
                         fill={'horizontal'}
                    >
                        <Heading level={4} margin={{top: 'small', bottom: '2px'}}>
                            Green case (Don't share/Use)
                        </Heading>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>State: </b></Box>
                        <MyParagraph>{props.context.outcome.green.state}</MyParagraph>
                    </Box>
                    <Box direction={'row'} margin={{top: "small"}} gap={"small"}>
                        <Box width={{min: 'xsmall'}}><b>Individual: </b></Box>
                        <MyParagraph>{props.context.outcome.green.individual}</MyParagraph>
                    </Box>


                </Box>
                <Box background={'white'}
                     pad={'small'}
                     round={'small'}
                     margin={{top: "medium", left: 'small'}}
                     elevation={'xsmall'}
                     height={{max: '300px'}}
                >
                    <Image src={'images/Payoffs.png'}
                           fill={'horizontal'}
                    />
                </Box>
            </Box>
        </Box>

    )
}