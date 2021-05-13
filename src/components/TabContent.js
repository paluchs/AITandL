import {Box, Heading} from "grommet";
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
             direction={'row'}
             pad={{top: 'medium'}}
             align="start"
             gap={'medium'}
             border={{color: 'brand', size: 'small', side: "top"}}
        >
            <Box width={"70%"} gap={'medium'}>
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
            <Box>
                <DataVisualisation data={props.result}/>
            </Box>
        </Box>

    )
}