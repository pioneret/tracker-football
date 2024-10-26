import { MltsContext } from "../context/mlts-context"
import React, { useContext, useEffect } from "react"
/*TODO*/
import { gsap } from "gsap"

export default function PitchDynamicSvg() {
    const { teamsColors, soccerPath } = useContext(MltsContext)

    useEffect(() => {
        if (!soccerPath.type) {
            gsap.to("#ml1-Possession2", {
                duration: 0.3,
                attr: { opacity: 0 },
                ease: "power2.out",
            })
            gsap.to("#ml1-Possession1", {
                duration: 0.3,
                attr: { opacity: 0 },
                ease: "power2.out",
            })
        } else {
            const isHome = soccerPath.type === "H"
            gsap.to("#ml1-Possession2", {
                duration: 0.3,
                attr: {
                    // @ts-ignore
                    ...(!isHome && { points: soccerPath.points }),
                    opacity: !isHome ? 0.8 : 0,
                },
                ease: "power2.out",
            })
            gsap.to("#ml1-Possession1", {
                duration: 0.3,
                attr: {
                    ...(isHome && { points: soccerPath.points }),
                    opacity: isHome ? 0.8 : 0,
                },
                ease: "power2.out",
            })
        }
    }, [soccerPath.type, soccerPath.points])

    return (
        <svg viewBox="0 0 1000 666" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient
                    cx="50%"
                    cy="50%"
                    fx="50%"
                    fy="50%"
                    r="50%"
                    gradientTransform="matrix(0 1 -1 0 1 0)"
                    id="a"
                >
                    <stop stopColor="#499946" offset="0%"></stop>
                    <stop stopColor="#31672F" offset="100%"></stop>
                </radialGradient>
                <linearGradient id="ml1-Gradient1">
                    <stop
                        className="gradStart"
                        offset={"48%"}
                        stopColor="white"
                        stopOpacity="0.4"
                        style={{ stopColor: "rgb(255, 255, 255)" }}
                    ></stop>
                    <stop
                        className="gradEnd"
                        offset="100%"
                        stopOpacity="0.8"
                        stopColor="#1017da"
                        style={{ stopColor: teamsColors?.home }}
                    ></stop>
                </linearGradient>
                <linearGradient id="ml1-Gradient2">
                    <stop
                        className="gradStart"
                        offset="0%"
                        stopOpacity="0.8"
                        stopColor="#262626"
                        style={{ stopColor: teamsColors?.away }}
                    ></stop>
                    <stop
                        className="gradEnd"
                        offset={"100%"}
                        stopOpacity="0.4"
                        stopColor="white"
                        style={{ stopColor: "rgb(255, 255, 255)" }}
                    ></stop>
                </linearGradient>
                <clipPath id="pitchBounds">
                    <rect width="930" height="625" x="35" y="20"></rect>
                </clipPath>
            </defs>
            <g fill="none" fillRule="evenodd">
                <rect
                    width="930"
                    height="625"
                    x="35"
                    y="20"
                    fill="url(#a)"
                ></rect>
                <g className="ml1-PossessionWrapper">
                    <polygon
                        id="ml1-Possession1"
                        className="ml1-SoccerPitch_AnimationElement"
                        fill="url(#ml1-Gradient1)"
                        style={{ mixBlendMode: "overlay" }}
                        clipPath="url(#pitchBounds)"
                        points="37.75 22.75 703.39 22.75 783.39 333 703.39 643.25  37.75 643.25"
                        opacity="0"
                    ></polygon>
                    <polygon
                        id="ml1-Possession2"
                        className="ml1-SoccerPitch_AnimationElement"
                        fill="url(#ml1-Gradient2)"
                        style={{
                            mixBlendMode: "overlay",
                        }}
                        clipPath="url(#pitchBounds)"
                        points={
                            "962.25 22.75 389.06 22.75 349.06 333 389.06 643.25  962.25 643.25"
                        }
                        opacity="0"
                    ></polygon>
                </g>
                <path
                    d="M926.83 666H1000V0h-73.17v666Zm-153.66 0h73.171V0h-73.17v666Zm-156.097 0h73.17V0h-73.17v666Zm-153.658 0h73.17V0h-73.17v666Zm-153.659 0h73.17V0h-73.17v666Zm-156.097 0h73.17V0h-73.17v666ZM0 666h73.17V0H0v666Z"
                    fill="#151D16"
                    opacity=".054"
                ></path>
                <g transform="translate(35 20)">
                    <path
                        d="M928.75 1.25v623.5H1.25V1.25h927.5ZM465.495 0v626"
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                    ></path>
                    <rect
                        width="922"
                        height="5"
                        x="4"
                        y="4"
                        fill="#CCD8CB"
                        opacity="0.8"
                    ></rect>
                    <rect
                        width="178.5"
                        height="5"
                        x="4"
                        y="86"
                        fill="#CCD8CB"
                        opacity="0.8"
                    ></rect>
                    <rect
                        width="178.5"
                        height="5"
                        x="747.5"
                        y="86"
                        fill="#CCD8CB"
                        opacity="0.8"
                    ></rect>
                    <path
                        d="M470.495 313a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                        fill="#CCD8CB"
                    ></path>
                    <circle
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                        cx="465.495"
                        cy="313"
                        r="98.75"
                    ></circle>
                    <path
                        d="M.5 10.482c.474.036 4.796.287 7.771-3.108 2.513-2.868 2.25-6.265 2.193-6.874M10.482 625.5c.036-.474.287-4.796-3.108-7.771-2.868-2.513-6.265-2.25-6.874-2.193M919.518.5c-.036.474-.287 4.796 3.108 7.771 2.868 2.513 6.265 2.25 6.874 2.193M929.5 615.518c-.474-.036-4.796-.287-7.771 3.108-2.513 2.868-2.25 6.265-2.193 6.874M0 93h180v440H0"
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                    ></path>
                    <path
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                        d="M0 213h60v200H0M180.055 392.966C204.313 374.719 220 345.692 220 313c0-32.661-15.658-61.665-39.877-79.915"
                    ></path>
                    <path
                        d="M125 313a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                        fill="#CCD8CB"
                    ></path>
                    <path
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                        d="M930 533H750V93h180"
                    ></path>
                    <path
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                        d="M930 413h-60V213h60"
                    ></path>
                    <path
                        d="M815 313a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                        fill="#CCD8CB"
                    ></path>
                    <path
                        d="M749.533 233.346C725.51 251.61 710 280.494 710 313c0 32.512 15.515 61.4 39.545 79.664"
                        stroke="#CCD8CB"
                        opacity="0.8"
                        strokeWidth="5"
                    ></path>
                </g>
            </g>
        </svg>
    )
}
