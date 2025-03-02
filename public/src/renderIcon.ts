import { icons } from "./icons";

const setAttributes = (el: HTMLElement | SVGElement, attrs: Record<string, string>) => {
	Object.entries(attrs).map((a) => el.setAttribute(a[0], a[1]));
};

export const renderIcon = (name: string, size?: "s" | "m" | "l"): SVGElement | false => {
	if (!icons.hasOwnProperty(name)) return false;

	const iconSize = size || "s";

	const iconSizes: { s: string; m: string; l: string } = {
		s: "40px",
		m: "80px",
		l: "120px",
	};

	const xmlns = "http://www.w3.org/2000/svg";

	// CREATE SVG ELEMENT
	const svg: SVGElement = document.createElementNS(xmlns, "svg");
	svg.classList.add("icon", "icon-" + name);

	// SET WIDTH AND HEIGHT OF SVG
	setAttributes(svg, {
		viewBox: "0 0 40 40",
		width: iconSizes[iconSize],
		height: iconSizes[iconSize],
	});

	// CREATE PATH ELEMENT
	const path: SVGElement = document.createElementNS(xmlns, "path");

	// ASSIGN ATTRIBUTES TO PATH
	setAttributes(path, {
		d: icons[name],
		stroke: "currentColor",
		fill: "none",
		"fill-rule": "evenodd",
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
	});

	// APPEND PATH TO SVG
	svg.appendChild(path);

	return svg;
};
