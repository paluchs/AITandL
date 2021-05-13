import {Box, Chart, Heading, Text} from "grommet";

const PARTICIPANTS = 30

const LabelledChart = ({color, label, value}) => (
    <Box flex={false} align="center" gap="small">
        <Chart
            bounds={[
                [0, 2],
                [0, PARTICIPANTS],
            ]}
            type="bar"
            values={[{value: [1, value]}]}
            color={color}
            round
            size={{height: 'small', width: 'xsmall'}}
            animate
        />
        <Box align="center">
            <Text>{label}</Text>
            <Text weight="bold">{value} participants</Text>
        </Box>
    </Box>
);

const ResultBox = props => {
    return (
        <Box align={'center'} margin={{top: 'medium'}}>
            <Box border={{size: 'xsmall', side: "bottom"}}
                 alignSelf={'start'}
            >
                <Heading level={4}
                         margin={{top: 'small', bottom: '2px'}}

                >{props.title}</Heading>
            </Box>
            <Box direction="row" gap={'medium'}>
                <LabelledChart label={props.labelPositive} value={props.valuePositive} color={"accent-1"}/>
                <LabelledChart label={props.labelNegative} value={props.valueNegative} color="accent-1"/>
            </Box>
        </Box>
    )
}


export const DataVisualisation = props => {
    return (
        <Box gap={'small'}
             background={'white'}
             round={'xsmall'}
             pad={{horizontal: "medium", vertical: "small"}}
             width={{min: 'medium'}}
             elevation={"xsmall"}
        >
            <Box border={{color: 'accent-1', size: 'xsmall', side: "bottom"}}>
                <Heading level={3} color={'accent-1'} margin={{top: 'small', bottom: '2px'}}>Results at a
                    glance</Heading>
            </Box>
            <ResultBox title={"Players as individuals who decided to:"}
                       labelPositive={"Don't share the data"}
                       labelNegative={"Share the data"}
                       valuePositive={props.data.individual.dontShare}
                       valueNegative={props.data.individual.share}

            />
            <ResultBox title={"Player as authorities who decided to:"}
                       labelPositive={"Don't use the data"}
                       labelNegative={"Use the data"}
                       valuePositive={props.data.state.dontUse}
                       valueNegative={props.data.state.use}
            />
        </Box>

    )
}