import {Box} from "grommet";
import {Heading2} from "./Atoms/Heading2";
import {ContentBox} from "./Atoms/ContentBox";
import {MyParagraph} from "./Atoms/MyParagraph";
import {MultiParagraphDiv} from "./Atoms/MultiParagraphDiv";



export const Introduction = () => {
    return (
        <ContentBox>
            <Heading2 title={"Introduction"}/>
            <Box margin={{top: "medium"}}>
                <MultiParagraphDiv>
                    <MyParagraph style={{"margin-top": "0px"}}>
                        Predictive policing is the latest buzz in crime control. Recently the term has been dragged
                        through the media in all sorts of ways. There is no doubt that predictive policing can harm
                        people, mainly minorities. However, can it do any good? Various documentaries about what
                        Artificial Intelligence can and can not do are on some of the largest streaming platforms like
                        Netflix or Amazon Prime. Pioneers in different fields are interviewed and reflect on the dangers
                        and coded biases or advantages of using AI in everyday life. The point is that there is an
                        increase in the exposure of information about AI to the public.
                    </MyParagraph>
                    <MyParagraph>
                        How good is that content in terms of educating people that are not AI experts? Information of
                        documentaries and most other media materials flow in one direction, leaving the consumer with
                        set facts or food for thoughts. The latter is not necessarily bad; however, we think that
                        interaction in connection with providing some base information is a good way of educating
                        people.
                    </MyParagraph>
                    <MyParagraph>
                        In our opinion, the evolution of AI can not and should not be stopped. However, it must not
                        yield to the polarization of humankind but rather that it could act as a support for everyone.
                        Furthermore, there should be a well-defined legal framework. Thus, educating people is one way
                        to take away fear, make knowledge available to everyone, and show transparency. Even though full
                        transparency is not always possible in AI (with black box models like neural networks), we think
                        a basic understanding of what happens is vital.
                    </MyParagraph>
                    <MyParagraph>
                        We developed a game based on the prisoners' paradox. The players can choose what side they want
                        to play on. Either they act as the state/police or as individuals. Five separate contexts
                        describe a particular situation, providing the players with basic information in connection with
                        predictive policing methods. The players can then choose to use/not use private information when
                        they are in the position of the state/police. If they choose to act as individuals, they can
                        choose to share the data with the state/police or not.
                    </MyParagraph>
                    <MyParagraph>
                        After one round of the game, the players can look at the results. There they can check what
                        their peers/contenders chose in the same situations. For each situation, the current legal
                        framework is shown and briefly discussed. As more and more players play the game, the number of
                        results accumulate, and the individuals can see how their idea in a particular situation
                        performs. Either in the view of the state or as an individual matches the current legal
                        framework.
                    </MyParagraph>
                </MultiParagraphDiv>
            </Box>
        </ContentBox>
    )
}

