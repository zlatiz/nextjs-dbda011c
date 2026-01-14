"use client";
import React from 'react';

export default function Input({ placeholder, value, onChange }: { placeholder?: string; value: string; onChange: (v: string) => void; }): JSX.Element {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-border px-4 py-2 bg-background text-foreground"
    />
  );
}
