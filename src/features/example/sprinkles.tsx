import { Box } from "@/components/Box/Box";

export const SprinklesExample = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="large"
      padding="large"
      background="gray100"
    >
      <Box
        padding="medium"
        background="white"
        color="gray900"
        fontSize="xl"
        fontWeight="bold"
      >
        Sprinkles Example
      </Box>

      <Box
        display="flex"
        gap="medium"
        padding="medium"
        background="blue500"
        color="white"
        fontSize="base"
        fontWeight="medium"
        borderRadius="medium"
      >
        This is a box with sprinkles styling
      </Box>

      <Box
        display={{ mobile: "block", tablet: "flex" }}
        gap="medium"
        padding="large"
        background="gray200"
      >
        <Box padding="medium" background="blue100" flex={1}>
          Responsive Box 1
        </Box>
        <Box padding="medium" background="blue200" flex={1}>
          Responsive Box 2
        </Box>
      </Box>
    </Box>
  );
};
