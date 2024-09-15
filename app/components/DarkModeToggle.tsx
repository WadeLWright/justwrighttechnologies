import { useTheme } from './ThemeProvider';

export function ColorPicker() {
  const { primaryColor, secondaryColor, setPrimaryColor, setSecondaryColor } = useTheme();

  return (
    <div className="flex space-x-4">
      <div>
        <label htmlFor="primaryColor" className="block text-sm font-medium">Primary Color</label>
        <input
          type="color"
          id="primaryColor"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="secondaryColor" className="block text-sm font-medium">Secondary Color</label>
        <input
          type="color"
          id="secondaryColor"
          value={secondaryColor}
          onChange={(e) => setSecondaryColor(e.target.value)}
          className="mt-1 block w-full"
        />
      </div>
    </div>
  );
}
