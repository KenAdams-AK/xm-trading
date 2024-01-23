import iconsList from "./icons";

import "./BrandIcons.scss";

function BrandIcons() {
  return (
    <>
      {iconsList.map(([iconName, src]) => {
        return (
          <div key={iconName} className="brand-icon">
            <img src={src} alt={iconName} />
          </div>
        );
      })}
    </>
  );
}

export default BrandIcons;
