"use client";

import { useState } from "react";

interface SwitchProps {
  initialChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export default function Switch({
  initialChecked = false,
  onCheckedChange,
  disabled = false,
}: SwitchProps) {
  const [checked, setChecked] = useState(initialChecked);

  const toggle = () => {
    if (disabled) return;
    const newState = !checked;
    setChecked(newState);
    if (onCheckedChange) {
      onCheckedChange(newState);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={toggle}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white
        ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
        ${checked ? "bg-slate-900" : "bg-slate-200"}
      `}
    >
      <span className="sr-only">Toggle</span>
      <span
        className={`
          inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out
          ${checked ? "translate-x-5" : "translate-x-0.5"}
        `}
      />
    </button>
  );
}