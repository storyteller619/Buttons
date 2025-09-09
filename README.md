# Buttons React Icon Library

A neumorphic Material-Icons button builder for React + TypeScript.

## Usage

```tsx
import { IconButton, ICONS, COLOR_PALETTE } from "./your-lib";

// Example: Soft Coral, "favorite" icon, 80px
<IconButton icon="favorite" color="#f1b7a3" size={80} />
```

- All icon names exported as `ICONS` (autocomplete, picker, etc)
- All color options exported as `COLOR_PALETTE`
- Component loads Material Icons font automatically, no CSS or font import needed.

## Picker Example

```tsx
<select>
  {ICONS.map(icon => <option key={icon}>{icon}</option>)}
</select>
<select>
  {COLOR_PALETTE.map(c => <option key={c.value} value={c.value}>{c.name}</option>)}
</select>
```

---

MIT License
