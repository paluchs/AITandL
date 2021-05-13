import {Box} from "grommet";
import {Heading2} from "./Atoms/Heading2";
import {ContentBox} from "./Atoms/ContentBox";
import {MyParagraph} from "./Atoms/MyParagraph";
import {MultiParagraphDiv} from "./Atoms/MultiParagraphDiv";
import {MyLink} from "./Atoms/MyLink";
import {MyLi} from "./Atoms/MyLi";
import {MyUl} from "./Atoms/MyUl";
import {Underlined} from "./Atoms/Underlined";
import {SourceParagraph} from "./Atoms/SourceParagraph";


export const GeneralLegal = () => {
    return (
        <ContentBox>
            <Heading2 title={"General legal information regarding predictive policing in Switzerland"}/>
            <Box margin={{top: "medium"}}>
                <MultiParagraphDiv>
                    <MyParagraph>
                        The following is intended to give interested parties a brief insight into the legal basis and
                        risks of predictive policing (and data processing in general).
                    </MyParagraph>
                    <MyParagraph>
                        An important distinction between the different methods of predictive policing is whether
                        personal data or non-personal data is used.
                    </MyParagraph>
                    <MyUl>
                        <MyLi>Personal data is data, information and/or statements that relate to a specific person
                            or
                            a person who can be identified by means of the information (art. 3 lit. a
                            DSG<sup>1</sup> ). Here data protection law applies.
                        </MyLi>
                        <MyLi>Non-personal data (factual data) is information that - also in connection with other
                            information - does not relate to an (identified or identifiable) person. This also
                            includes personal data that has been anonymized<sup>2</sup>. Data protection law does
                            not apply to the processing of non-personal data.
                        </MyLi>
                    </MyUl>
                    <MyParagraph>
                        If personal data is collected or processed, various laws must be observed. On the one hand, the
                        DSG and, if it is a cantonal authority (which is regularly the case with the police), the
                        respective cantonal data protection laws must also be observed. As soon as there is a
                        cross-border connection, the respective foreign data protection laws, in particular the
                        GDPR<sup>3</sup> ,
                        must also be observed.
                    </MyParagraph>
                    <MyParagraph>
                        Data protection law prescribes some principles that must be observed when processing personal
                        data. Some basic principles will be briefly explained here (non-exhaustive list)<sup>4</sup>:
                    </MyParagraph>
                    <MyUl>
                        <MyLi><Underlined>Lawfulness</Underlined> (art. 4 (1) DSG)</MyLi>
                        <MyLi><Underlined>Purpose limitation</Underlined> (art. 4(3) DSG): This means that data
                            processing must always be carried out for a specific purpose.</MyLi>
                        <MyLi><Underlined>Proportionality</Underlined> (art. 4(2) DSG): The principle of
                            proportionality states that only those data may be processed that are required and
                            suitable for fulfilling the intended purpose.<sup>5</sup></MyLi>
                        <MyLi><Underlined>Recognizability and transparency</Underlined> (>art. 4(4) DSG): it must be
                            transparently recognizable to the data subject that personal data relating to him or her
                            are being are collected and processed.</MyLi>
                        <MyLi><Underlined>Accuracy of the data</Underlined> (art. 5 DSG): This means that anyone who
                            processes personal data must ensure that the data used is correct.</MyLi>
                    </MyUl>
                    <MyParagraph>
                        The use of personal data for predictive policing software also often leads to an encroachment on
                        the fundamental rights of those affected. Particular emphasis should be placed on the right to
                        informational self-determination under art. 13(2) BV<sup>6</sup> and art. 8(1) ECHR<sup>7</sup>.<sup>8</sup> From
                        a fundamental
                        rights perspective, the provisions of art. 36 BV and the ECHR must always be taken into account
                        with regard to the permissibility of the restriction of fundamental rights. It should be
                        emphasized that each time personal data is processed, this in itself constitutes a new
                        interference with the rights of the persons concerned.
                    </MyParagraph>
                    <MyParagraph>
                        For legal information specific to our scenarios, refer to the contexts section below. All
                        information is provided without guarantee for completeness or correctness.
                        The present (legal) information and considerations focus largely on the swiss legal system and
                        swiss society.
                    </MyParagraph>
                    <hr/>
                    <SourceParagraph><sup>1</sup>Swiss federal law on data protection, SR 235.1</SourceParagraph>
                    <SourceParagraph><sup>2</sup>This appears problematic because it is often difficult to tell whether
                        data is really completely anonymized or whether it is not possible to "decrypt" it and
                        trace it back to specific individuals.</SourceParagraph>
                    <SourceParagraph><sup>3</sup>General Data Protection Regulation; for more information
                        consult: <MyLink
                            href={"https://gdpr.eu/"}>https://gdpr.eu/</MyLink></SourceParagraph>
                    <SourceParagraph><sup>4</sup>These principles can be found in the DSG as well as in the respective
                        cantonal data protection laws. For the sake of simplicity, only the DSG is referred to
                        below.</SourceParagraph>
                    <SourceParagraph><sup>5</sup><MyLink
                        href={"https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/telekommunikation/telefonie/allgemeine-grundsaetze.html"}>https://www.edoeb.admin.ch/edoeb/de/home/datenschutz/telekommunikation/telefonie/allgemeine-grundsaetze.html</MyLink></SourceParagraph>
                    <SourceParagraph><sup>6</sup>Swiss Federal Constitution, SR 101</SourceParagraph>
                    <SourceParagraph><sup>7</sup>European Convention on Human Rights</SourceParagraph>
                    <SourceParagraph><sup>8</sup>Other fundamental rights may also be affected, depending on the
                        case.</SourceParagraph>
                </MultiParagraphDiv>
            </Box>
        </ContentBox>
    )
}

