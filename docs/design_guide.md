# 🌊 Portfolio Website – Light Design System

A clean, modern design system for a professional portfolio website with subtle blue accents.

---

## 🎨 Color Palette

### Primary Colors
| Purpose          | Name             | Hex       | Use Case                                  |
|------------------|------------------|-----------|-------------------------------------------|
| Primary          | Sky Blue         | `#60A5FA` | Headings, primary buttons, accents       |
| Secondary        | Soft Blue        | `#93C5FD` | Hover states, secondary elements          |
| Text             | Charcoal         | `#1F2937` | Body text, headings (dark)               |
| Light Text       | Slate Gray       | `#6B7280` | Secondary text, captions                 |

### Backgrounds
| Level         | Name             | Hex       | Use Case                                  |
|---------------|------------------|-----------|-------------------------------------------|
| Primary BG    | Pure White       | `#FFFFFF` | Main content background                   |
| Secondary BG  | Snow White       | `#F9FAFB` | Section backgrounds, cards                |
| Accent BG     | Blue Mist        | `#EFF6FF` | Highlighted sections                      |

### Feedback Colors
| Status    | Name         | Hex       | Use Case                               |
|-----------|--------------|-----------|----------------------------------------|
| Success   | Mint         | `#34D399` | Success messages, positive indicators  |
| Warning   | Amber        | `#FBBF24` | Warnings, alerts                       |
| Error     | Coral        | `#F87171` | Error states                           |

---

## 🔤 Typography

### Primary Font: `Inter`
A clean, modern sans-serif for optimal readability.

| Element      | Weight   | Size (Desktop) | Size (Mobile) | Color       |
|--------------|----------|----------------|---------------|-------------|
| H1           | Bold     | 48px           | 36px          | `#1F2937`   |
| H2           | SemiBold | 32px           | 28px          | `#1F2937`   |
| H3           | Medium   | 24px           | 20px          | `#1F2937`   |
| Body         | Regular  | 16px           | 16px          | `#1F2937`   |
| Caption      | Light    | 14px           | 13px          | `#6B7280`   |

### Accent Font: `Fira Code` (optional)
For code snippets or technical content.

---

## 🧩 UI Components

### Buttons
- **Primary**: `#60A5FA` with white text, 8px radius
- **Secondary**: Transparent with `#60A5FA` border
- **Ghost**: Text-only with blue hover state
- States: Hover (10% darker), Active (20% darker), Disabled (50% opacity)

### Cards
- White background
- Subtle shadow: `0 2px 4px rgba(0,0,0,0.05)`
- Border radius: 12px
- Optional blue top accent border

### Navigation
- Light background: `#F9FAFB`
- Active link: `#60A5FA` with underline
- Hover: Light blue background `#EFF6FF`

### Forms
- Input border: `#E5E7EB`
- Focus border: `#60A5FA`
- Label color: `#6B7280`
- Placeholder: `#9CA3AF`

---

## 📐 Layout System

### Grid
- 12-column responsive grid
- Gutter: 24px
- Section padding: 80px (desktop), 40px (mobile)

### Breakpoints
| Device     | Width      | Behavior                     |
|------------|------------|------------------------------|
| Mobile     | <768px     | Single column, larger taps   |
| Tablet     | 768-1024px | Two columns                  |
| Desktop    | >1024px    | Multi-column layouts         |

### Spacing Scale
| Name  | Size  | Use Case                          |
|-------|-------|-----------------------------------|
| xs    | 4px   | Micro spacing                     |
| sm    | 8px   | Between small elements            |
| md    | 16px  | Standard padding                  |
| lg    | 24px  | Between sections                  |
| xl    | 32px  | Large margins                     |

---

## 🖼️ Visual Elements

### Icons
- **Set**: Lucide or Heroicons (outline style)
- **Color**: `#6B7280` (default), `#60A5FA` (active)
- **Size**: 20px (inline), 24px (standalone)

### Imagery
- Rounded corners: 8px
- Subtle shadow on hover
- Blue overlay on project thumbnails

### Animations
- Smooth hover transitions (300ms)
- Fade-in for page loads
- Subtle bounce for CTAs

---

## 🌊 Blue Accent Applications
1. Section dividers
2. Link hover states
3. Project category labels
4. Skill meter bars
5. Footer elements
6. Active navigation items

---

## ✅ Accessibility
- All colors meet WCAG AA contrast
- Focus states clearly visible
- Reduced motion option available
- Semantic HTML structure
- ARIA labels where needed