import InvestorsInvestors from "../../assets/icons-footer/investors-in-people.png";
import MetaQuotes from "../../assets/icons-footer/meta-quotes.png";
import Unicef from "../../assets/icons-footer/unicef.png";
import Verisign from "../../assets/icons-footer/verisign.png";

const ICONS = {
  "meta-quotes": MetaQuotes,
  verisign: Verisign,
  unicef: Unicef,
  "investors-in-people": InvestorsInvestors,
} as const;

export default Object.entries(ICONS);
