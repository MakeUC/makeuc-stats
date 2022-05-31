import { FC, lazy, useEffect, useMemo, useState } from 'react';
import { GraphTitle, SponsorGroupContainer, SponsorSectionContainer } from './StyledComponents';

const sponsors = [
    [
        {
            link: 'https://aws.amazon.com/',
            src: 'aws.png',
            imageHeight: '125px',
            className: 'partner',
            alt: 'AWS',
        },
    ],
    // L
    [
        {
            link: 'https://www.givaudan.com/',
            src: 'givaudan.png',
            imageHeight: '67px',
            className: 'partner',
            alt: 'Givaudan',
        },
        {
            link: 'https://www.siemens.com/global/en.html',
            src: 'siemens.svg',
            imageHeight: '52px',
            className: 'partner',
            alt: 'Siemens',
        },

        {
            link: 'https://www.northropgrumman.com/careers/',
            src: 'northrop.svg',
            imageHeight: '100px',
            className: 'partner',
            alt: 'Northrop Grumman',
        },
    ],
    [
        {
            link: 'https://tezos.com/',
            src: 'tezos80.png',
            imageHeight: '80px',
            className: 'partner',
            alt: 'Tezos',
        },
        {
            link: 'https://www.guerbet.com/',
            src: 'guerbet.svg',
            imageHeight: '55px',
            className: 'partner',
            alt: 'Guerbet',
        },
    ],
    // M
    [
        {
            link: 'https://www.marathonpetroleum.com/Jobs/University-Recruiting/',
            src: 'marathon112.jpg',
            imageHeight: '112px',
            className: 'mt-2 partner',
            alt: 'Marathon',
        },
        {
            link: 'https://www.assemblyai.com/',
            src: 'assemblyai.svg',
            imageHeight: '60px',
            className: 'px-8 mt-2 partner',
            alt: 'Assembly AI',
        },
        {
            link: 'https://www.mongodb.com/',
            src: 'mongodb.svg',
            imageHeight: '63px',
            className: 'px-2 partner',
            alt: 'MongoDB',
        },
        {
            link: 'https://www.registry.google/',
            src: 'googleregistry57.png',
            imageHeight: '57px',
            className: 'px-4 partner',
            alt: 'Google Registry',
        },
        {
            link: 'https://www.jpmorgan.com/global',
            src: 'jpmorgan.svg',
            imageHeight: '60px',
            className: 'px-4 partner',
            alt: 'J.P. Morgan',
        },
        {
            link: 'https://www.gather.town/',
            src: 'gather70.png',
            imageHeight: '70px',
            className: 'px-4 partner',
            alt: 'Gather Town',
        },
        {
            link: 'https://www.ey.com/en_us',
            src: 'ey80.png',
            imageHeight: '80px',
            className: 'px-8 partner',
            alt: 'EY',
        },
        {
            link: 'https://cloud.google.com/',
            src: 'google-cloud.svg',
            imageHeight: '53px',
            className: 'mt-8 partner',
            alt: 'Google Cloud',
        },
        {
            link: 'https://business.uc.edu/centers-partnerships/entrepreneurship.html',
            src: 'uc_entrepreneur90.png',
            imageHeight: '90px',
            className: 'px-4 mt-2 partner',
            alt: 'UC Center For Entrepreneurship',
        },
    ],
    // S
    [
        {
            link: 'https://www.overleaf.com/',
            src: 'overleaf52.png',
            imageHeight: '52px',
            className: 'mt-2 partner',
            alt: 'Overleaf',
        },
        {
            link: 'https://www.digitalocean.com/careers/',
            src: 'do45.png',
            imageHeight: '45px',
            className: 'mt-2 partner',
            alt: 'Digital Ocean',
        },
        {
            link: 'https://www.wolfram.com/hackathons/',
            src: 'wolfram.svg',
            imageHeight: '52px',
            className: 'mt-2 partner',
            alt: 'Wolfram',
        },
    ],
    // XS
    [
        {
            link: 'https://www.axure.com/',
            src: 'axure.svg',
            imageHeight: '21px',
            className: 'partner',
            alt: 'Axure',
        },
        {
            link: 'https://balsamiq.com/',
            src: 'balsamiq.svg',
            imageHeight: '21px',
            className: 'partner',
            alt: 'Balsamiq',
        },
        {
            link: 'https://beeceptor.com/',
            src: 'beeceptor21.png',
            imageHeight: '21px',
            className: 'partner',
            alt: 'Beeceptor',
        },
        {
            link: 'https://www.chipotle.com/',
            src: 'chipotle.svg',
            imageHeight: '32px',
            className: 'partner',
            alt: 'Chipotle',
        },
        {
            link: 'https://www.qoom.io/',
            src: 'qoom.svg',
            imageHeight: '18px',
            className: 'partner',
            alt: 'Qoom',
        },
        {
            link: 'https://www.sashido.io/en/',
            src: 'sashido.webp',
            imageHeight: '28px',
            className: 'partner',
            alt: 'Sashido',
        },

        {
            link: 'https://scrimba.com/',
            src: 'scrimba25.jpg',
            imageHeight: '25px',
            className: 'partner',
            alt: 'Scrimba',
        },
    ],
    [
        {
            link: 'https://www.sketch.com/',
            src: 'sketch32.png',
            imageHeight: '32px',
            className: 'partner',
            alt: 'Sketch',
        },
        {
            link: 'https://www.stickergiant.com/',
            src: 'stickergiant31.png',
            imageHeight: '31px',
            className: 'partner',
            alt: 'Sticker Giant',
        },
        {
            link: 'https://hackp.ac/mlh-stickermule-hackathons/',
            src: 'stickermule.svg',
            imageHeight: '21px',
            className: 'partner',
            alt: 'Sticker Mule',
        },
        {
            link: 'https://www.twilio.com/',
            src: 'twilio21.png',
            imageHeight: '21px',
            className: 'partner',
            alt: 'Twilio',
        },
    ]
];

type SponsorSpotProps = {
    sponsor: {
        link: string;
        src: string;
        imageHeight: string;
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
    // return <></>;

    console.log(image)

    return <img src={image} alt={sponsor.alt} className={sponsor.className} height={sponsor.imageHeight} />;
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