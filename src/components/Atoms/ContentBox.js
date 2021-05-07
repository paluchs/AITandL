import {Box} from "grommet";

export const ContentBox = props => {
    return (
        <Box pad={'medium'} margin={'medium'} elevation={'xsmall'} round={'xsmall'} background={'light-1'}>
            {props.children}
        </Box>
    )
}