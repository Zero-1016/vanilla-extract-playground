import { DynamicExample } from "../features/example/dynamic";
import { SprinklesExample } from "../features/example/sprinkles";
import { RecipesExample } from "../features/example/recipes";

export default function Home() {
  return (
    <>
      <SprinklesExample />
      <RecipesExample />
      <DynamicExample />
    </>
  );
}
