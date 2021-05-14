import {Box} from "grommet";
import {Heading2} from "./Atoms/Heading2";
import {ContentBox} from "./Atoms/ContentBox";
import {MyParagraph} from "./Atoms/MyParagraph";
import {MultiParagraphDiv} from "./Atoms/MultiParagraphDiv";


export const Conclusion = () => {
    return (
        <ContentBox>
            <Heading2 title={"Conclusion"}/>
            <Box margin={{top: "medium"}}>
                <MultiParagraphDiv>
                    <MyParagraph style={{"marginTop": "0px"}}>
                        When the game was ready, we decided to hand out links to our friends. After the deployment of
                        the game, a total of 36 matches were played. We recognized that the main weak point of the game
                        was that if there were not enough players online, it was sometimes challenging to team up for
                        the players. However, overall, we were pleased with a total of 72 people playing the game.
                    </MyParagraph>
                    <MyParagraph>
                        Here a little disclaimer regarding the sample size, its composition, and particular biases. We
                        sent the links to close friends and family only. A more extensive campaign would have been
                        beyond the scope of this module. Therefore the results may contain an inevitable bias as many
                        people might be affiliated with computer-/data-science or law. Still, we decided to conduct a
                        simple analysis of the outcomes, and it allowed some intriguing insights.
                    </MyParagraph>
                    <MyParagraph>
                        One of the more unexpected outcomes was that more individuals would be ready to share their
                        exact location in the covid app if it would mean for them to trace where precisely the infection
                        happened. It was also interesting to see that if players were in the authorities' roles in the
                        same game, there was an almost balanced count of decisions. We cannot infer much from that since
                        the sample is too small, but it would still be interesting to see whether the tendency would
                        stay the same if we increased the number of players.
                    </MyParagraph>
                    <MyParagraph>
                        Furthermore, in the facial recognition context, the results were rather distinct in the
                        direction towards people not sharing their data. As we set up that context, that would mean that
                        individuals travel by car rather than public transport. But, again, since the sample is not
                        representative, the explanatory power of the analysis is limited, and it would be interesting to
                        see how that changes with increasing numbers.
                    </MyParagraph>
                    <MyParagraph>
                        Lastly, it was interesting to develop an educational website. Our idea was to set individuals to
                        thinking in specific situations connected to AI and law. As a next step, we would deploy the
                        game more extensively and see how the results changed. The gathered data, in turn, could be used
                        for a more targeted approach to training people on the interface between law and artificial
                        intelligence. It is our opinion that the two topics shall evolve in co-existence in the near and
                        further future.
                    </MyParagraph>
                </MultiParagraphDiv>
            </Box>
        </ContentBox>
    )
}