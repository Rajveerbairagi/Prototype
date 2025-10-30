# Design Guidelines: RGPV AI Exam Assistant

## Design Approach

**Selected Approach:** Design System-Based with Educational Focus

**Justification:** This is a utility-focused educational platform where clarity, usability, and information hierarchy are paramount. Drawing inspiration from **Notion** (clean information design), **Linear** (modern minimalism), and **Khan Academy** (educational clarity) to create a trustworthy, efficient learning environment.

**Key Design Principles:**
- Clarity over decoration - every element serves student learning
- Consistent, predictable patterns for reduced cognitive load
- Generous whitespace for comfortable reading and focus
- Professional yet approachable tone suitable for university students

---

## Core Design Elements

### Typography

**Primary Font Family:** Inter (via Google Fonts CDN)
**Secondary Font Family:** JetBrains Mono (for code/technical content)

**Hierarchy:**
- **Hero Headline:** text-5xl md:text-6xl font-bold tracking-tight leading-tight
- **Page Titles:** text-4xl font-bold tracking-tight
- **Section Headers:** text-3xl font-semibold
- **Subsection Headers:** text-2xl font-semibold
- **Card Titles:** text-xl font-semibold
- **Body Text:** text-base leading-relaxed (16px base, increased line-height for readability)
- **Small Text/Captions:** text-sm
- **Micro Text:** text-xs

**Key Typography Considerations:**
- Generous line-height (leading-relaxed) for all body text to improve reading comfort
- Bold weights for actionable items and important information
- Medium weights for secondary hierarchy
- Tight tracking for headlines, normal for body text

---

### Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 8, 12, 16, 20** consistently
- Micro spacing: p-2, gap-2 (8px)
- Small spacing: p-4, gap-4 (16px)
- Medium spacing: p-8, gap-8 (32px)
- Large spacing: p-12, gap-12 (48px)
- Section spacing: py-16 md:py-20, px-4 md:px-8
- Extra large spacing: py-20 md:py-32 (for major section breaks)

**Container System:**
- Page container: max-w-7xl mx-auto px-4 md:px-8
- Content container: max-w-4xl mx-auto (for text-heavy sections)
- Chat container: max-w-3xl mx-auto (optimal chat width)
- Full-width sections: w-full with inner constrained content

**Grid Patterns:**
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Resource cards: grid-cols-1 md:grid-cols-2 gap-6
- Team members: grid-cols-2 md:grid-cols-4 gap-8

---

### Component Library

#### Navigation
- **Desktop:** Fixed top navigation, max-w-7xl container, flex justify-between items-center, py-4 px-8
- **Mobile:** Hamburger menu (top-right), slide-in overlay menu with full-height backdrop
- Logo/Brand on left, navigation links center/right
- CTA button "Start Chatting" with prominent treatment (px-6 py-3 rounded-lg font-semibold)

#### Hero Section (Homepage)
- **Layout:** Full-width section with centered content, py-20 md:py-32
- **Content Structure:** 
  - Headline + Subheadline (max-w-3xl mx-auto text-center)
  - Primary CTA "Chat with AI Assistant" (large button: px-8 py-4 text-lg)
  - Secondary CTA "Browse Syllabus" (text link with arrow icon)
  - Supporting visual: Illustration/graphic showing AI chat concept (positioned below CTAs)
- **Trust indicators:** Small text line "Trusted by 500+ RGPV Students" with subtle icon

#### Feature Cards
- **Structure:** Individual cards with p-8, rounded-xl border treatment
- **Content:** Icon (size-12 mb-4), title (text-xl font-semibold mb-3), description (text-base leading-relaxed)
- **Icons:** Use Heroicons via CDN (outline style for consistency)
- **Grid:** 3-column on desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), stack on mobile

#### Chat Interface
- **Layout:** Fixed header (project title + controls), scrollable message area (flex-1 overflow-y-auto), fixed input footer
- **Message Bubbles:**
  - User messages: ml-auto max-w-2xl, aligned right, px-4 py-3 rounded-2xl
  - AI responses: mr-auto max-w-2xl, aligned left, px-4 py-3 rounded-2xl
  - Spacing between messages: space-y-4
- **Input Area:** Fixed bottom, p-4, shadow-lg, flex gap-3
  - Text input: flex-1 px-4 py-3 rounded-xl border
  - Send button: px-6 py-3 rounded-xl font-semibold
- **Loading State:** Three animated dots in message bubble, subtle pulse animation

#### Syllabus Browser
- **Layout:** Sidebar + content area on desktop, stacked on mobile
- **Sidebar:** Fixed width (w-64), subject list with icons
- **Content:** Topic cards in grid, expandable accordions for detailed content
- **Cards:** p-6 rounded-lg border, hover:shadow-lg transition

#### Resource Cards (Previous Papers)
- **Structure:** Horizontal card layout with icon/thumbnail left, content right
- **Content:** Title (text-lg font-semibold), metadata (year, subject, size), download button
- **Spacing:** p-6 gap-4, mb-4 between cards

#### About/Team Sections
- **About:** Two-column layout (content + supporting image/graphic), max-w-6xl, py-16
- **Team:** 4-column grid of team member cards
  - Card structure: Avatar placeholder (rounded-full size-24), name (text-lg font-semibold), role (text-sm), optional link
  - Spacing: p-6, text-center

#### Footer
- **Layout:** Three-column grid on desktop, stacked on mobile, py-12 border-top
- **Columns:** 
  - Brand + tagline (col-span-2 on desktop)
  - Quick Links (important pages)
  - Resources (syllabus, papers links)
- **Bottom row:** Copyright text-sm, social links (if applicable)

---

### Interaction Patterns

**Buttons:**
- Primary: px-6 py-3 rounded-lg font-semibold, shadow-sm hover:shadow-md transition
- Secondary: px-6 py-3 rounded-lg border font-semibold
- Ghost: px-4 py-2 rounded-lg hover:underline
- Icon buttons: p-3 rounded-lg

**Links:**
- Inline text links: underline decoration with hover state
- Nav links: font-medium, hover state with subtle underline
- Card links: Entire card clickable, hover:shadow-lg transition-shadow

**Form Inputs:**
- Standard: px-4 py-3 rounded-lg border w-full, focus:ring-2 focus:outline-none
- Textarea: min-h-32 for chat input
- Labels: text-sm font-medium mb-2

**Cards/Surfaces:**
- Elevation: Use border + subtle shadow instead of heavy shadows
- Standard card: rounded-xl border, p-6 or p-8
- Hover states: hover:shadow-lg transition-all duration-200

**Modals/Overlays (if needed):**
- Backdrop: fixed inset-0 with semi-transparent overlay
- Content: max-w-2xl mx-auto my-8, rounded-2xl, p-8

---

### Animations

**Use Sparingly:**
- Chat message appearance: Subtle fade-in for new messages
- Loading states: Gentle pulse for AI thinking indicator
- Page transitions: Simple fade-in on initial load
- Hover states: Quick transitions (200ms) for shadows and subtle transforms

**Forbidden:**
- Scroll-triggered animations (distracting for study content)
- Complex entrance animations on every element
- Parallax effects (unnecessary for educational content)

---

## Images

### Hero Section
**Primary Hero Image:** A modern illustration showing a student interacting with an AI chat interface on a laptop/mobile device. Style should be clean, professional illustration (not photo) with minimal details. Position below the headline and CTA buttons, centered, max-w-4xl, with generous padding.

**Alternative:** Abstract geometric pattern representing AI/connectivity as a subtle background element (low opacity, non-distracting)

### About Section
**Supporting Visual:** Illustration or diagram showing the flow: Student → AI Assistant → Learning Resources. Clean, educational diagram style. Position alongside "About Project" text content.

### Feature Cards
**Icon-based:** Use Heroicons for all feature cards (Chat, Syllabus, Papers, Quiz). No photos needed.

### Team Section
**Team Photos:** Circular avatars (rounded-full) for team members. If photos unavailable, use placeholder avatars with initials or generic user icons from Heroicons.

### Resource Cards
**Document Icons:** Use standard document icons from Heroicons (DocumentTextIcon) for previous year papers. No custom imagery needed.

**Image Treatment:**
- All illustrations should have clean, modern aesthetic matching the educational tone
- Avoid stock photos of students/studying (cliché)
- Prefer abstract, conceptual visuals that enhance understanding without distracting
- Images should never overpower text content - they support, not dominate

---

## Responsive Behavior

**Mobile-First Breakpoints:**
- Mobile: base (< 768px) - Single column, stacked navigation
- Tablet: md (≥ 768px) - Two columns where appropriate
- Desktop: lg (≥ 1024px) - Full multi-column layouts

**Key Responsive Adjustments:**
- Navigation: Hamburger menu below md breakpoint
- Hero: Stack CTAs vertically on mobile (flex-col gap-4)
- Feature grid: 1 col mobile → 2 col tablet → 3 col desktop
- Chat interface: Full-screen on mobile with minimal chrome
- Section padding: Reduce from py-20 to py-12 on mobile
- Typography: Scale down by one size on mobile (text-6xl → text-5xl)