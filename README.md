# chain-abstraction
 
## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/malawadd/chain-abstraction.git
   cd chain-abstraction/client 
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Copy `.env.example` to `.env` and add your environment variables.
   ```bash
   cp .env.example .env
   ```

## Running the Project

1. **Development**:
   ```bash
   npm run dev
   ```
   Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Styling and Theme

### Main Styles

The main global styles are located in:
- `app/globals.css` - primary global styles for the application.
- `tailwind.config.ts` - Tailwind configuration for additional styling and theming.

### Customizing Colors

To modify colors in the dashboard and mint pages:

1. **Dashboard Colors**:
   - Locate styles in `app/components/dashboard` directory. Look for components such as `Dashboard.tsx`, `ClaimLinkModal.tsx`, and `PackTypeSelector.tsx`.
   - Modify component-specific colors directly within these files or in your CSS/Tailwind configuration.

2. **Mint Page Colors**:
   - Styles for the mint page are in the `app/mint` directory.
   - Edit styles in components like `mint/layout.tsx`, `mint/pack/PackCreatedCard.tsx`, or `mint/pack/AddTokenModal.tsx`.

3. **Tailwind Custom Colors**:
   - Update the Tailwind configuration in `tailwind.config.ts` to add or adjust custom colors globally.
   ```javascript
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: '#your-new-color',
           secondary: '#another-color',
         },
       },
     },
   }
   ```

4. **Testing Styles**:
   Run the app in development mode to test style updates.
   

### Examples

#### Example 1: Updating Global Colors in Tailwind

1. Open `tailwind.config.ts`.
2. Add custom colors under the `extend` key in the `theme` section.

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Your new primary color
        secondary: '#F43F5E', // Your new secondary color
        accent: '#10B981', // Optional accent color
      },
    },
  },
};
```

3. Use the new colors in your components:

```jsx
// ExampleComponent.jsx
export default function ExampleComponent() {
  return (
    <div className="bg-primary text-secondary p-4">
      <h1 className="text-accent">Welcome to the Dashboard</h1>
    </div>
  );
}
```

#### Example 2: Modifying Styles in a Component (Dashboard)

1. Open a dashboard component, like `Dashboard.tsx` in `app/components/dashboard`.
2. Add or modify class names to apply Tailwind styles.

```jsx
// Dashboard.tsx
export default function Dashboard() {
  return (
    <div className="bg-secondary text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-primary font-bold text-2xl mb-4">Dashboard</h1>
      <p className="text-sm text-gray-200">Manage your packs and settings here.</p>
    </div>
  );
}
```

In this example:
- The `bg-secondary` class sets the background color to the custom secondary color.
- `text-primary` applies the primary color to the heading text.

#### Example 3: Adding Styles to the Mint Page

1. Open the `Mint` page, such as `app/mint/page.tsx`.
2. Add custom classes to style components.

```jsx
// page.tsx
export default function MintPage() {
  return (
    <div className="bg-gray-900 p-8 text-white">
      <h2 className="text-3xl font-semibold text-primary mb-4">Mint a New Pack</h2>
      <button className="bg-accent hover:bg-primary text-white py-2 px-4 rounded">
        Mint Now
      </button>
    </div>
  );
}
```

In this example:
- The button uses `bg-accent` for the background color, and `hover:bg-primary` to change the color when hovered.

#### Example 4: Adding Inline Styles for Customization

If you want to add custom colors directly in a component without Tailwind, you can use inline styles in React.

```jsx
// PackCreatedCard.tsx
export default function PackCreatedCard() {
  return (
    <div style={{ backgroundColor: '#2D3748', color: '#E2E8F0', padding: '1rem', borderRadius: '0.5rem' }}>
      <h3 style={{ color: '#63B3ED' }}>Pack Created!</h3>
      <p>Your new pack has been successfully minted.</p>
    </div>
  );
}
```

This method is useful if you only need to add a quick style for a specific component.

#### Example 5: Adding Custom Colors in Tailwind Classes

To add custom styles or colors on the go, you can use Tailwind’s `style` syntax.

```jsx
// ExampleComponent.jsx
export default function ExampleComponent() {
  return (
    <button className="bg-[#4A5568] text-[#A0AEC0] hover:bg-[#2D3748] p-2 rounded">
      Custom Styled Button
    </button>
  );
}
```

Here:
- `bg-[#4A5568]` sets a custom background color.
- `hover:bg-[#2D3748]` changes the button color on hover.

#### Example 6: Updating Component-Level CSS

In some cases, you may want to create a CSS module to manage component-specific styles.

1. Create a new CSS file, like `Dashboard.module.css`, in the component folder.

```css
/* Dashboard.module.css */
.dashboardContainer {
  background-color: #1E293B; /* Dark slate background */
  color: #F8FAFC; /* Light text color */
  padding: 16px;
  border-radius: 8px;
}

.dashboardHeader {
  color: #3B82F6; /* Blue header text */
  font-size: 24px;
  font-weight: bold;
}
```

2. Import and use these styles in your component:

```jsx
// Dashboard.tsx
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.dashboardHeader}>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
    </div>
  );
}
```
