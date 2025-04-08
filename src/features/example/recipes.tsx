import { Box } from "../../components/Box/Box";
import { Button } from "../../components/Button/Button";

export const RecipesExample = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="large"
      padding="large"
      background="gray50"
    >
      <Box display="flex" gap="medium" flexDirection="column">
        <h2>Button Variants</h2>
        <Box display="flex" gap="medium">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </Box>
      </Box>

      <Box display="flex" gap="medium" flexDirection="column">
        <h2>Button Sizes</h2>
        <Box display="flex" gap="medium" alignItems="center">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </Box>
      </Box>

      <Box display="flex" gap="medium" flexDirection="column">
        <h2>Full Width</h2>
        <Button fullWidth>Full Width Button</Button>
      </Box>

      <Box display="flex" gap="medium" flexDirection="column">
        <h2>Disabled</h2>
        <Box display="flex" gap="medium">
          <Button disabled variant="primary">
            Disabled Primary
          </Button>
          <Button disabled variant="secondary">
            Disabled Secondary
          </Button>
          <Button disabled variant="outline">
            Disabled Outline
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
