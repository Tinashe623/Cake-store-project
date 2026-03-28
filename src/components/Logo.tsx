import { Box } from '@chakra-ui/react'

interface LogoProps {
    height?: number | string
    colorScheme?: 'dark' | 'light'
    as?: React.ElementType
    to?: string
    isLink?: boolean
}

export default function Logo({ height = 50, colorScheme = 'dark', as, to, isLink = true }: LogoProps) {
    const primary = colorScheme === 'dark' ? '#2D0A0A' : '#FAF0E6'
    const accent = '#C9A96E'
    const secondary = colorScheme === 'dark' ? '#4A1A1A' : '#F5E6D3'

    const linkProps = as && to ? { to } : (!as ? { href: '#home' } : {})

    if (!isLink) {
        return (
            <Box display="inline-flex" alignItems="center">
                <svg
                    viewBox="0 0 280 70"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ height, width: 'auto' }}
                    role="img"
                    aria-label="Tarie Cakes"
                >
                    {/* SVG content */}
                    {/* Decorative diamond/crown accent above the 'i' */}
                    <g transform="translate(128, 4)">
                        <path
                            d="M5 0 L10 5 L5 10 L0 5 Z"
                            fill={accent}
                            opacity={0.9}
                        />
                        <path
                            d="M5 2 L8 5 L5 8 L2 5 Z"
                            fill={accent}
                            opacity={0.5}
                        />
                    </g>

                    {/* "T" */}
                    <text
                        x="8"
                        y="52"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontSize="48"
                        fontWeight="700"
                        fill={primary}
                        letterSpacing="-1"
                    >
                        T
                    </text>

                    {/* "arie" */}
                    <text
                        x="38"
                        y="52"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontSize="38"
                        fontWeight="400"
                        fontStyle="italic"
                        fill={primary}
                        letterSpacing="0.5"
                    >
                        arie
                    </text>

                    {/* Small decorative dot separator */}
                    <circle cx="130" cy="50" r="3" fill={accent} opacity="0.7" />

                    {/* "C" with accent color */}
                    <text
                        x="145"
                        y="52"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontSize="42"
                        fontWeight="700"
                        fill={accent}
                        letterSpacing="-1"
                    >
                        C
                    </text>

                    {/* "akes" */}
                    <text
                        x="178"
                        y="52"
                        fontFamily="'Playfair Display', Georgia, serif"
                        fontSize="38"
                        fontWeight="400"
                        fontStyle="italic"
                        fill={secondary}
                        letterSpacing="0.5"
                    >
                        akes
                    </text>

                    {/* Underline flourish */}
                    <path
                        d="M 12 60 Q 70 66, 140 58 Q 210 50, 268 62"
                        stroke={accent}
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                    />

                    {/* Small decorative elements on the flourish */}
                    <circle cx="12" cy="60" r="2" fill={accent} opacity="0.5" />
                    <circle cx="268" cy="62" r="2" fill={accent} opacity="0.5" />
                </svg>
            </Box>
        )
    }

    return (
        <Box as={as || 'a'} {...linkProps} display="inline-flex" alignItems="center" _hover={{ opacity: 0.85 }} transition="opacity 0.3s ease">
            <svg
                viewBox="0 0 280 70"
                xmlns="http://www.w3.org/2000/svg"
                style={{ height, width: 'auto' }}
                role="img"
                aria-label="Tarie Cakes"
            >
                {/* Decorative diamond/crown accent above the 'i' */}
                <g transform="translate(128, 4)">
                    <path
                        d="M5 0 L10 5 L5 10 L0 5 Z"
                        fill={accent}
                        opacity={0.9}
                    />
                    <path
                        d="M5 2 L8 5 L5 8 L2 5 Z"
                        fill={accent}
                        opacity={0.5}
                    />
                </g>

                {/* "T" */}
                <text
                    x="8"
                    y="52"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="48"
                    fontWeight="700"
                    fill={primary}
                    letterSpacing="-1"
                >
                    T
                </text>

                {/* "arie" */}
                <text
                    x="38"
                    y="52"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="38"
                    fontWeight="400"
                    fontStyle="italic"
                    fill={primary}
                    letterSpacing="0.5"
                >
                    arie
                </text>

                {/* Small decorative dot separator */}
                <circle cx="130" cy="50" r="3" fill={accent} opacity="0.7" />

                {/* "C" with accent color */}
                <text
                    x="145"
                    y="52"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="42"
                    fontWeight="700"
                    fill={accent}
                    letterSpacing="-1"
                >
                    C
                </text>

                {/* "akes" */}
                <text
                    x="178"
                    y="52"
                    fontFamily="'Playfair Display', Georgia, serif"
                    fontSize="38"
                    fontWeight="400"
                    fontStyle="italic"
                    fill={secondary}
                    letterSpacing="0.5"
                >
                    akes
                </text>

                {/* Underline flourish */}
                <path
                    d="M 12 60 Q 70 66, 140 58 Q 210 50, 268 62"
                    stroke={accent}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.6"
                />

                {/* Small decorative elements on the flourish */}
                <circle cx="12" cy="60" r="2" fill={accent} opacity="0.5" />
                <circle cx="268" cy="62" r="2" fill={accent} opacity="0.5" />
            </svg>
        </Box>
    )
}
