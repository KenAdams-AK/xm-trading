import NumberGreen from "../../assets/bg-imgs/number-green.png";
import NumberGold from "../../assets/bg-imgs/number-gold.png";
import CubeSmall from "../../assets/bg-imgs/cube-small.png";

import Cup from "../../assets/bg-imgs/cup.png";
import CubeBig from "../../assets/bg-imgs/cube-big.png";
import Ring from "../../assets/bg-imgs/ring.png";

export const bgImagesMobileOnly = [
  {
    modifier: "number-green",
    src: NumberGreen,
    alt: "Number Green",
  },
  {
    modifier: "number-gold",
    src: NumberGold,
    alt: "Number Gold",
  },
  {
    modifier: "cube-small",
    src: CubeSmall,
    alt: "Cube Small",
  },
] as const;

export const bgImages = [
  {
    modifier: "cup",
    src: Cup,
    alt: "Cup",
  },
  {
    modifier: "cube-big",
    src: CubeBig,
    alt: "Cube Big",
  },
  {
    modifier: "ring",
    src: Ring,
    alt: "Ring",
  },
];
