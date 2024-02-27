import React from "react";

interface ButtonProps {
	bgColor: string;
	textColor?: string;
	text: string;
	icon?: React.ElementType;
	iconClasses: string;
	handleClick: () => void;
}

function Button({
	bgColor,
	textColor,
	text,
	icon,
	iconClasses,
	handleClick,
}: ButtonProps) {
	const Icon = icon;
	return (
		<button
			onClick={handleClick}
			className={`flex items-center ${bgColor} ${
				textColor ?? null
			} rounded-md px-2 py-1 hover:scale-105 transition duration-300 ease-in-out`}
		>
			<span className="mr-1">{text}</span>
			{Icon && <Icon height={25} className={iconClasses} />}
		</button>
	);
}

export default Button;