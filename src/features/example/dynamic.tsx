import { Box } from "../../components/Box/Box";
import { DynamicBox } from "../../components/DynamicBox/DynamicBox";

export const DynamicExample = () => {
  return (
    <Box display="flex" flexDirection="column" gap="xlarge" padding="xlarge">
      <h2>Dynamic Styling 예제</h2>

      <Box display="flex" flexDirection="column" gap="large">
        <h3>기본 색상</h3>
        <Box display="flex" gap="large">
          <DynamicBox color="#ff0000" size="50px">
            Red Box
          </DynamicBox>
          <DynamicBox color="#00ff00" size="50px">
            Green Box
          </DynamicBox>
          <DynamicBox color="#0000ff" size="50px">
            Blue Box
          </DynamicBox>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="large">
        <h3>다양한 크기</h3>
        <Box display="flex" alignItems="center" gap="large">
          <DynamicBox color="#9c27b0" size="30px">
            Small
          </DynamicBox>
          <DynamicBox color="#9c27b0" size="50px">
            Medium
          </DynamicBox>
          <DynamicBox color="#9c27b0" size="70px">
            Large
          </DynamicBox>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="large">
        <h3>투명도가 있는 색상</h3>
        <Box display="flex" gap="large">
          <DynamicBox color="rgba(233, 30, 99, 0.3)" size="50px">
            30%
          </DynamicBox>
          <DynamicBox color="rgba(233, 30, 99, 0.6)" size="50px">
            60%
          </DynamicBox>
          <DynamicBox color="rgba(233, 30, 99, 0.9)" size="50px">
            90%
          </DynamicBox>
        </Box>
      </Box>
    </Box>
  );
};
