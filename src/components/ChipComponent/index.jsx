import Chip from "../Chip";

const ChipComponent = (props) => {
  const {
    currentItemChips,
    tdKey,
    cellClass,
    chipKey,
    cell,
    leftMin,
    leftMax,
    topMin,
    topMax,
    rowSpan,
    colSpan,
  } = props;

  let sum = "";
  if (currentItemChips !== undefined) {
    if (currentItemChips.sum !== 0) {
      sum = currentItemChips.sum;
    }
  }

  let left = 0;
  let top = -15;

  if (leftMin !== undefined && leftMax !== undefined) {
    left = leftMin + (leftMax - leftMin) / 2;
  }

  if (topMin !== undefined && topMax !== undefined) {
    top = topMin + (topMax - topMin) / 2;
  }
  let style = {
    top: top + "px",
    left: left + "px",
  };

  return (
    <td
      key={tdKey}
      className={cellClass}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      <Chip
        leftMin={leftMin}
        leftMax={leftMax}
        topMin={topMin}
        topMax={topMax}
        key={chipKey}
        currentItemChips={currentItemChips}
        currentItem={cell}
      />
      <div className={"chipValue"}>
        <div style={style} className={"chipSum"}>
          {sum}
        </div>
      </div>
    </td>
  );
};

export default ChipComponent;
