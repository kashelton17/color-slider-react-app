export default function RGB({ colors }) {
    const colorStyle = {
        backgroundColor: `rgb(${colors.red},${colors.green},${colors.blue})`,
      };
    return (
        <div className="rgb" style={colorStyle}>
            <h3>RGB: {colors.red} {colors.green} {colors.blue}</h3>
        </div>
    )
}