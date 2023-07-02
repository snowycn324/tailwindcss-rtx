// import { CSSRuleObject, PluginCreator } from 'tailwindcss/types/config';
import { PluginCreator } from 'tailwindcss/types/config';
import plugin from "tailwindcss/plugin";
import RtxColors from "./colors";

// const rtxPlugin: PluginCreator = ({ addUtilities }) => {
//   const utilities = Object.entries(RtxColors as Record<string, string>).map(([name, value]) => ({
//     [`.bg-${name}`]: { "backgroundColor": value },
//     [`.text-${name}`]: { "color": value },
//     [`.border-${name}`]: { "borderColor": value },
//   })) as unknown as CSSRuleObject[];
//   addUtilities(utilities);
// };

const rtxPlugin: PluginCreator = () => {}
export default plugin(rtxPlugin, {
  theme: {
    extend: {
      colors: RtxColors
    }
  }
});