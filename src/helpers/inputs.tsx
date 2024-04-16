import React from 'react';

export function Input({ value, id, onChange }: InputProps) {
    return (
        <input
            type="text"
            value={value}
            name={String(id)}
            onChange={e => onChange(e.target.value)}
        />
    );
}

export function DateInput({ value, id, onChange }: InputProps) {
    return (
        <input
            type="date"
            value={value}
            name={String(id)}
            onChange={e => onChange(e.target.value)}
        />
    );
}

export function Checkbox({ value, id, onChange }: InputProps) {
    return (
        <input
            type="checkbox"
            checked={Boolean(value)}
            name={String(id)}
            onChange={e => onChange(e.target.checked)}
        />
    );
}