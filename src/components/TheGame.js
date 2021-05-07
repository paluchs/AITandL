import {ContentBox} from "./Atoms/ContentBox";
import {Heading2} from "./Atoms/Heading2";
import {MyParagraph} from "./Atoms/MyParagraph";
import {Box, Heading, Image} from "grommet";

export const TheGame = () => {
    return (
        <ContentBox>
            <Heading2 title={"The Game"}/>
            <Box direction={'row'}
                 justify={'between'}
            >
                <Box margin={{top: "medium"}}>
                    <MyParagraph style={{"max-width": "800px"}}>
                        The game's goal is to ask participants in a fun and exciting way about how they feel about
                        authorities using their data to combat crime and increase security. While on the one hand,
                        we can learn about the attitudes of the public towards particular contexts of data use, we
                        provide players with legal information after they have played the game such that they can
                        learn about the current state of the law and where it coincides with their views and where
                        it doesn't.
                    </MyParagraph>
                    <MyParagraph style={{"max-width": "800px"}}>
                        Each player has to make a decision. If they are in the role of an individual, they can
                        either chose to share the data or not share data specific to the context. Depending on the
                        setting, not sharing the data can come with disadvantages depending on what the other
                        player, who is in the authorities' role, chose. The player in the authorities' position can
                        then either use the data or not use the data to fight a context-specific crime or problem.
                        Again, depending on what the other player chose, this decision can either lead to a gain or
                        loss of points.
                    </MyParagraph>
                    <MyParagraph style={{"max-width": "800px"}}>
                        This logic leads to four different outcomes, which yield different payoffs for individuals and
                        authorities. While the reality is often quite complex, we decided on the payoffs on the right
                        for this project after lengthy discussions. We agreed that individuals don't have a lot to gain
                        from sharing their data, while they also don't lose that much if they don't share it. Therefore,
                        individuals don't earn any points in three of these four cases, but the state either loses or
                        gains points depending on their choice. The only scenario in which an individual loses points is
                        if they refrain from sharing their data and the state decides to use data. Then, refrain from
                        using services where the authorities collect data can come at a disadvantage.
                    </MyParagraph>
                    <MyParagraph style={{"max-width": "800px"}}>
                        On the other hand, it is crucial that individuals are willing to share data for the state to
                        fight crime and solve problems specific to the contexts more efficiently. Therefore, the state
                        loses if the individual decides not to share their data. As a result, the only way for a state
                        to gain points is if individuals are willing to share data and they use the data.
                    </MyParagraph>
                </Box>
                <Box background={'white'}
                     pad={'small'}
                     round={'small'}
                     width={'600px'}
                     height={'350px'}
                     margin={{top: "medium", left: 'small'}}
                     elevation={'xsmall'}
                >
                    <Box border={{color: 'accent-1', size: 'xsmall', side: "bottom"}}
                         margin={{bottom: '10px'}}
                    >
                        <Heading level={3} color={'accent-1'} margin={{top: '0px', bottom: '2px'}}>
                            The Payoffs
                        </Heading>
                    </Box>
                    <Image src={'images/Payoffs.png'}
                           fill={'horizontal'}
                    />
                </Box>
            </Box>
        </ContentBox>
    )
}