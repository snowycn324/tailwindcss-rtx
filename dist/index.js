"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("tailwindcss/plugin"));
const colors_1 = __importDefault(require("./colors"));
// const rtxPlugin: PluginCreator = ({ addUtilities }) => {
//   const utilities = Object.entries(RtxColors as Record<string, string>).map(([name, value]) => ({
//     [`.bg-${name}`]: { "backgroundColor": value },
//     [`.text-${name}`]: { "color": value },
//     [`.border-${name}`]: { "borderColor": value },
//   })) as unknown as CSSRuleObject[];
//   addUtilities(utilities);
// };
const rtxPlugin = () => { };
exports.default = (0, plugin_1.default)(rtxPlugin, {
    theme: {
        extend: {
            colors: colors_1.default
        }
    }
});
