import "./SmallCards.css";

const SmallCards = ({ title, details, iconClass }) => {
  return (
    <div className="small-cards-main">
      <div className="small-content">
        <i className={iconClass}></i>
        <h6 style={{ fontWeight: "700" }}>{title}</h6>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
}

export default SmallCards;
