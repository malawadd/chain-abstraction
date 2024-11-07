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
   
