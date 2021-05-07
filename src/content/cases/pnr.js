export const pnr = {
    setting: <>You want to go on holiday and consider taking a plane. Assume the state/airport authorities consider
        using your personal data (excluding information about ethnicity, political views, health status, sex life)
        whenever you buy an airplane-ticket, to create an automated pattern match to identify individuals who are
        suspected of committing a serious crime (like terrorism)?</>,
    question: {
        individual: [
            <>Would you still take the plane, thus share your personal data, or would you refrain from taking a plane
                thus not share your data?</>
        ],
        state: [
            <>In order to increase safety and prevent serious crime: Would you use Passenger data (Air traffic) to
                create an automated pattern match to identify individuals who are suspected of committing a serious
                crime (like terrorism)?</>
        ]
    },
    outcome: {
        red: {
            state: <>You neither win nor lose – You’re not able to increase safety, but you don’t interfere with
                people’s privacy.</>,
            individual: <>You neither win nor lose – You still take the plane; you keep your privacy because even though
                your open to sharing your data the state does not use it. However, might flying be a risk?</>
        },
        yellow: {
            state: <>You win – You increase the security for your citizens. At what costs?</>,
            individual: <>Even though there is additional safety while travelling, the authorities use untransparent
                methods to analyze the data. Even though you have nothing to hide prerequisites for flying could change
                overnight.</>
        },
        blue: {
            state: <>You lose – Because you don’t use all the available methods to efficiently guarantee the security of
                your citizens.</>,
            individual: <>You neither win nor loose – You can still take the plane; you keep your privacy.</>
        },
        green: {
            state: <>You Loose – Even though you might be able to increase security there is also a chance that you
                disenfranchise certain groups of people, which makes them lose their trust.</>,
            individual: <>You lose – You want to keep your privacy; therefore, you decide not to take the plane which
                makes your trip more stressful but also more environmentally friendly.</>
        }
    },
    legalInformation: [
        <>Passenger Name Record (PNR) data is personal information about passengers that is collected and stored by
            airlines. The data include information such as the passenger's name, travel dates, itineraries, seat
            numbers, baggage details, contact details, and payment methods<sup>1</sup>. We are therefore dealing with
            personal data and Data Protection Law is applicable.</>,
        <>Currently this is not possible in Switzerland. The Federal Council wants to change that. A legal basis is
            needed for the collection, storage and processing of PNR data. The Federal Council has instructed the
            Department of Justice and Police (EJPD), together with the Department of Transport (Uvek), to prepare a
            consultation draft for a law on the collection and use of such data.<sup>2</sup> </>,
        <>Even though it is currently not possible in Switzerland, already 24 European countries have established
            agencies to collect, store and process these PNR data. (For more: see additional information). If you
            travel from Switzerland to Spain and back your data are therefore collected. </>,


    ],
    additionalInformation: [
        <>The PNR Directive (EU) regulates the transfer of such PNR data to the law enforcement authorities of the
            Member States and their processing for the purposes of preventing, detecting, investigating and prosecuting
            terrorist offences and serious crime.</>,
        <>This EU directive <sup>3</sup> requires airlines to transmit passenger data to authorities at departure and
            destination
            points in EU member states for the purposes of preventing, detecting, investigating and prosecuting
            terrorist offences and serious crime. This means if you fly from Switzerland to EU countries or vice versa,
            your data will be collected. </>,
        <>Examples of how this EU Directive has been legally implemented can be found in Germany with the Air Passenger
            Data Act (FlugDaG)<sup>4</sup> or in the PNR law in Austria.<sup>5</sup> It should also be noted that
            Switzerland has agreements with other countries, such as the United States, in which it undertakes to
            transfer data of air travelers. <sup>6</sup></>,
    ],
    sources: [
        <>1: https://www.consilium.europa.eu/de/policies/fight-against-terrorism/passenger-name-record/ </>,
        <>2: https://www.htr.ch/story/schweizer-behoerden-sollen-flugpassagierdaten-nutzen-koennen-26728.html and
            https://www.admin.ch/gov/de/start/dokumentation/medienmitteilungen.msg-id-78069.html </>,
        <>3: Directive (EU) 2016/681 of the European Parliament and of the Council of 27 April 2016 on the use of passenger
            name record (PNR) data for the prevention, detection, investigation and prosecution of terrorist offences
            and serious crime.</>,
        <>4: https://www.gesetze-im-internet.de/flugdag/BJNR148410017.html</>,
        <>5: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20010284</>,
        <>6: See for USA: Notenaustausch vom 23. Dezember 2008
            zwischen dem Schweizerischen Bundesrat und der Regierung der
            Vereinigten Staaten von Amerika betreffend die Übermittlung von Passagierdaten (Passenger Name Record, PNR)
            durch Fluggesellschaften an ausländische Behörden (SR 0.748.710.933.6)
        </>
    ],


}