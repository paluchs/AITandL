import {Box, Heading} from "grommet";

export const Heading2 = props => {
    return (
        <Box border={{color: 'brand', size: 'small', side: "bottom"}}>
            <Heading level={2} color={'brand'} margin={{top: 'small', bottom: '2px'}}>{props.title}</Heading>
        </Box>
    )
}