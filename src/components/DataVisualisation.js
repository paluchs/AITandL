import {Box, Chart, Heading, Text} from "grommet";

const PARTICIPANTS = 50

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
        />
        <Box align="center">
            <Text>{label}</Text>
            <Text weight="bold">{value} participants</Text>
        </Box>
    </Box>
);

const ResultBox = props => {
    return (
        <Box pad="medium" round={'xsmall'} background={'light-4'} align={'center'}>
            <Heading level={5} margin={{top: "xxsmall"}}>{props.title}</Heading>
            <Box  direction="row" gap={'medium'}>
                <LabelledChart label={props.labelPositive} value={props.valuePositive} color={"status-ok"}/>
                <LabelledChart label={props.labelNegative} value={props.valueNegative} color="status-error"/>
            </Box>
        </Box>
    )
}


export const DataVisualisation = props => {
    return (
        <Box gap={'small'}>
            <ResultBox title={"Number of participants in the role of the individual who decided to:"}
                       labelPositive={"Don't share the data"}
                       labelNegative={"Share the data"}
                       valuePositive={props.data.individual.dontShare}
                       valueNegative={props.data.individual.share}

            />
            <ResultBox title={"Number of participants in the role of the state or police who decided to:"}
                       labelPositive={"Don't use the data"}
                       labelNegative={"Use the data"}
                       valuePositive={props.data.state.dontUse}
                       valueNegative={props.data.state.use}
            />
        </Box>

    )
}