import {Box, Heading, Image} from "grommet";


export const Title = () => {
    return (
        <Box fill={"horizontal"}
             alignContent={'start'}
             justify={'end'}
             height={"large"}
             background="url('images/artificial_intelligence.jpg')"
        >
            <Box margin={{vertical:"large", left: "medium", right:"large"}}
                 pad={'medium'}
                 elevation={'medium'}
                 round={'xsmall'}
                 background={'rgba(255,255,255,0.92)'}
                 width={{max: 'xlarge'}}
                 justify={'end'}
            >
                <Box width={'small'}>
                    <Image src={'images/uzh_logo.png'}
                           fill={'horizontal'}
                    />
                </Box>
                <Box border={{ color: 'brand', size: 'medium', side: "bottom" }}>
                    <Heading level={1} color= {'brand'} margin={{bottom: '5px'}} size={'large'} style={{"font-weight": "300"}}> PREDICTIVE POLICING</Heading>
                </Box>
                <Heading level={2} margin={{top: 'large', bottom: '0px'}}> Artificial Intelligence: Technology &amp; Law</Heading>
                <Heading level={3} margin={{top: '2px', bottom: '10px'}} size={'medium'}> Spring Semester 2021</Heading>
                <Box height={'xxsmall'}/>
                <Heading level={4} margin={{vertical: '2px'}} size={'xsmall'} fill>Instructors: Prof. Dr. Abraham Bernstein &amp; Prof. Dr. Florent Thouvenin</Heading>
                <Heading level={4} margin={{vertical: '2px'}} size={'xsmall'} fill>Conducted by: Rezuanul Haque, Patrick Luchsinger, Maria Pelli, Simon Rufer, Jan Winkler</Heading>
            </Box>
        </Box>
        )
}