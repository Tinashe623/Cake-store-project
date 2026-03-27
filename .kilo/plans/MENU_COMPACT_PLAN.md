# Menu Section Compact Layout Plan

## Problem
- Menu section shows all 12 cakes at once, making it much taller than other sections
- Filter bar (search + categories) takes too much vertical space on mobile

## Solution

### 1. "View More" Button for Cake Grid
**File:** `src/components/Menu.tsx`

- Add `visibleCount` state, default to `8` (2 rows on desktop)
- Slice `filteredCakes` to show only `visibleCount` items
- Add a "View More" / "Show Less" toggle button below the grid
- Button style: outline variant, brand.accent color, centered, with a count indicator (e.g., "View 4 More")
- When all cakes are shown, button changes to "Show Less" and resets to 8
- Reset `visibleCount` to 8 when category or search changes (useEffect)

### 2. Compact Filter Bar Layout
**File:** `src/components/Menu.tsx`

- On mobile: keep search full-width, but make categories a horizontally scrollable single row (already is)
- On `md+`: ensure search and categories are always in a row (already is with `flexDirection: 'row'`)
- Reduce search input width from `350px` to `250px` to give categories more room
- Remove the `maxW="800px"` constraint on the filter container — let it span full width up to the container
- Reduce padding on the glass-panel-dark wrapper from `p={2}` to `p={1.5}`

**File:** `src/components/Categories.tsx`

- Reduce button padding from `px={5/6}` to `px={3/4}` to make pills more compact
- Reduce font size on mobile to `2xs`

## Files to Modify
1. `src/components/Menu.tsx` — View More logic + compact filter bar
2. `src/components/Categories.tsx` — Compact pill sizing

## Implementation Details

### Menu.tsx changes:
```
- Add: const [visibleCount, setVisibleCount] = useState(8)
- Add: useEffect(() => setVisibleCount(8), [selectedCategory, searchQuery])
- Change: filteredCakes.map → filteredCakes.slice(0, visibleCount).map
- Add: View More button below grid when filteredCakes.length > 8
- Change: filter bar maxW from 800px to full, search width from 350px to 250px
```

### Categories.tsx changes:
```
- Change: px from {5, 6} to {3, 4}
- Change: fontSize from {xs, sm} to {2xs, xs}
- Change: h from 40px to 36px
```
