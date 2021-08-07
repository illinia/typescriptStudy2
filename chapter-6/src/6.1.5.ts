type Unit = "cm" | "px" | "%";

let units: Unit[] = ["cm", "px", "%"];

function parseUnit(value: string): Unit | null {
  for (let i = 0; i < units.length; i++) {
    if (value.endsWith(units[i])) {
      return units[i];
    }
  }
  return null;
}

type Width = {
  unit: Unit;
  value: number;
};
function parseWidth(width: number | string | null | undefined): Width | null {
  if (width == null) {
    return null;
  }
  if (typeof width === "number") {
    return { unit: "px", value: width };
  }
  let unit = parseUnit(width);
  if (unit) {
    return { unit, value: parseFloat(width) };
  }
  return null;
}

type UserTextEvent = {
  type: "TextEvent";
  value: string;
  target: string;
};
type UserMouseEvent = {
  type: "MouseEvent";
  value: [number, number];
  target: [];
};

type UserEvent = UserTextEvent | UserMouseEvent;

function handle(event: UserEvent) {
  if (event.type === "TextEvent") {
    event.value;
    event.target;
    return;
  }
  event.value;
  event.target;
}
