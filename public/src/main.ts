import { icons } from "./icons";
import { renderIcon } from "./renderIcon";

const iconButtons = document.getElementById("iconButtons");

// LOOP ICONS AND CREATE BUTTON FOR EACH
Object.keys(icons).forEach(function (iconName) {
	const icon = renderIcon(iconName);

	if (icon && iconButtons) {
		const button = document.createElement("button");
		const buttonText = document.createTextNode(iconName);

		button.appendChild(icon);
		button.appendChild(buttonText);

		iconButtons.appendChild(button);
	}
});

type IconSizes = "s" | "m" | "l";

const iconSizes = document.getElementById("iconSizes");

(["s", "m", "l"] as IconSizes[]).forEach((size: IconSizes) => {
	const icon = renderIcon("apply", size);

	if (icon && iconSizes) {
		iconSizes.appendChild(icon);
	}
});

const iconColors = document.getElementById("iconColors");

["red", "blue", "green"].forEach((color: string) => {
	const icon = renderIcon("apply", "m");

	if (icon && iconColors) {
		icon.style.color = color;
		iconColors.appendChild(icon);
	}
});
