import { FC, lazy, useEffect, useMemo, useState } from 'react';
import { GraphTitle, SponsorGroupContainer, SponsorSectionContainer } from './StyledComponents';

const sponsors = [
    [
        {
            link: 'https://aws.amazon.com/',
            src: 'aws.png',
            className: 'partner',
            alt: 'AWS',
        },
    ],
    // L
    [
        {
            link: 'https://www.givaudan.com/',
            src: 'givaudan.png',
            className: 'partner',
            alt: 'Givaudan',
        },
        {
            link: 'https://www.siemens.com/global/en.html',
            src: 'siemens.svg',
            className: 'partner',
            alt: 'Siemens',
        },

        {
            link: 'https://www.northropgrumman.com/careers/',
            src: 'northrop.svg',
            className: 'partner',
            alt: 'Northrop Grumman',
        },
        {
            link: 'https://tezos.com/',
            src: 'tezos80.png',
            className: 'partner',
            alt: 'Tezos',
        },
        {
            link: 'https://www.guerbet.com/',
            src: 'guerbet.svg',
            className: 'partner',
            alt: 'Guerbet',
        },
    ],
    // M
    [
        {
            link: 'https://www.marathonpetroleum.com/Jobs/University-Recruiting/',
            src: 'marathon112.jpg',
            className: 'partner',
            alt: 'Marathon',
        },
        {
            link: 'https://www.assemblyai.com/',
            src: 'assemblyai.svg',
            className: 'partner',
            alt: 'Assembly AI',
        },
        {
            link: 'https://www.mongodb.com/',
            src: 'mongodb.svg',
            className: 'partner',
            alt: 'MongoDB',
        },
        {
            link: 'https://www.registry.google/',
            src: 'googleregistry57.png',
            className: 'partner',
            alt: 'Google Registry',
        },
        {
            link: 'https://www.jpmorgan.com/global',
            src: 'jpmorgan.svg',
            className: 'partner',
            alt: 'J.P. Morgan',
        },
        {
            link: 'https://www.gather.town/',
            src: 'gather70.png',
            className: 'partner',
            alt: 'Gather Town',
        },
        {
            link: 'https://www.ey.com/en_us',
            src: 'ey80.png',
            className: 'partner',
            alt: 'EY',
        },
        {
            link: 'https://cloud.google.com/',
            src: 'google-cloud.svg',
            className: 'partner',
            alt: 'Google Cloud',
        },
        {
            link: 'https://business.uc.edu/centers-partnerships/entrepreneurship.html',
            src: 'uc_entrepreneur90.png',
            className: 'partner',
            alt: 'UC Center For Entrepreneurship',
        },
    ],
    // S
    [
        {
            link: 'https://www.overleaf.com/',
            src: 'overleaf52.png',
            className: 'partner',
            alt: 'Overleaf',
        },
        {
            link: 'https://www.digitalocean.com/careers/',
            src: 'do45.png',
            className: 'partner',
            alt: 'Digital Ocean',
        },
        {
            link: 'https://www.wolfram.com/hackathons/',
            src: 'wolfram.svg',
            className: 'partner',
            alt: 'Wolfram',
        },
    ],
    // XS
    [
        {
            link: 'https://www.axure.com/',
            src: 'axure.svg',
            className: 'partner',
            alt: 'Axure',
        },
        {
            link: 'https://balsamiq.com/',
            src: 'balsamiq.svg',
            className: 'partner',
            alt: 'Balsamiq',
        },
        {
            link: 'https://beeceptor.com/',
            src: 'beeceptor21.png',
            className: 'partner',
            alt: 'Beeceptor',
        },
        {
            link: 'https://www.chipotle.com/',
            src: 'chipotle.svg',
            className: 'partner',
            alt: 'Chipotle',
        },
        {
            link: 'https://www.qoom.io/',
            src: 'qoom.svg',
            className: 'partner',
            alt: 'Qoom',
        },
        {
            link: 'https://www.sashido.io/en/',
            src: 'sashido.webp',
            className: 'partner',
            alt: 'Sashido',
        },

        {
            link: 'https://scrimba.com/',
            src: 'scrimba25.jpg',
            className: 'partner',
            alt: 'Scrimba',
        },
        {
            link: 'https://www.sketch.com/',
            src: 'sketch32.png',
            className: 'partner',
            alt: 'Sketch',
        },
        {
            link: 'https://www.stickergiant.com/',
            src: 'stickergiant31.png',
            className: 'partner',
            alt: 'Sticker Giant',
        },
        {
            link: 'https://hackp.ac/mlh-stickermule-hackathons/',
            src: 'stickermule.svg',
            className: 'partner',
            alt: 'Sticker Mule',
        },
        {
            link: 'https://www.twilio.com/',
            src: 'twilio21.png',
            className: 'partner',
            alt: 'Twilio',
        },
    ]
];

type SponsorSpotProps = {
    sponsor: {
        link: string;
        src: string;
        className: string;
        alt: string;
    }
}

const SponsorSpot: FC<SponsorSpotProps> = ({ sponsor }) => {
    const [image, setImage] = useState();

    useEffect(() => {
        import(`../assets/sponsors/${sponsor.src}`).then(res => setImage(res.default))
    }, [sponsor.src])

    if (!image) return <></>;

    return <a href={sponsor.link}><img src={image} alt={sponsor.alt} className={sponsor.className} /></a>;
};

const SponsorSection: FC = () => {
    return <SponsorSectionContainer>
        <GraphTitle>Previous Sponsors</GraphTitle>
        <p>&nbsp;</p>
        {
            sponsors.map((group, idx) => {
                return <SponsorGroupContainer key={idx}>
                    {group.map(sponsor => <SponsorSpot key={sponsor.link} sponsor={sponsor} />)}
                </SponsorGroupContainer>;
            })
        }
    </SponsorSectionContainer>
};
export default SponsorSection;